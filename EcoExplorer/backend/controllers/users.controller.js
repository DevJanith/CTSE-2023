import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import Users from "../models/users.model.js";
// import nodemailer from "nodemailer"

export const login = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        if (email === null || typeof email == "undefined") return res.status(400).json({ code: "02", message: "Email Field Required" })
        if (password === null || typeof password == "undefined") return res.status(400).json({ code: "02", message: "Password Field Required" })

        const existingUser = await Users.findOne({ email: email });
        if (!existingUser) return res.status(404).json({ code: "02", message: "User doesn't exist" })

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password)
        if (!isPasswordCorrect) return res.status(400).json({ code: "02", message: "Invalid Credentials" })

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'test', { expiresIn: "1h" })

        res.status(200).json({ code: "01", result: existingUser, token })
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ code: "00", message: "Something went wrong" })
    }
}

export const register = async (req, res, next) => {
    const {
        email,
        name,
        contactNumber,
        password,
        confirmPassword
    } = req.body
    try {

        if (email === null || typeof email == "undefined") return res.status(400).json({ code: "02", message: "Email Field Required" })
        if (name === null || typeof name == "undefined") return res.status(400).json({ code: "02", message: "Name Field Required" })
        if (contactNumber === null || typeof contactNumber == "undefined") return res.status(400).json({ code: "02", message: "Contact Number Field Required" })
        if (password === null || typeof password == "undefined") return res.status(400).json({ code: "02", message: "Password Field Required" })
        if (confirmPassword === null || typeof confirmPassword == "undefined") return res.status(400).json({ code: "02", message: "Confirm Password Field Required" })

        const existingUser = await Users.findOne({ email: email })

        if (existingUser) return res.status(400).json({ code: "02", message: "User already exist" })

        if (password !== confirmPassword) return res.status(400).json({ code: "02", message: "Password doesn't match" })

        const hashPassword = await bcrypt.hash(password, 12)
        const userDetails = new Users({
            email: email,
            name: name,
            contactNumber: contactNumber,
            password: hashPassword,
        })
        const userResult = await userDetails.save()

        const token = jwt.sign({ email: userResult.email, id: userResult._id }, 'test', { expiresIn: "1h" })

        res.status(200).json({ code: "01", result: userResult, token })
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ code: "00", message: "Something went wrong" })
    }
}

// export const resetPassword = async (req, res, next) => {
//     const { email, temporaryTok, newPassword, newConfirmPassword } = req.body
//     try {
//         if (temporaryTok === null || typeof temporaryTok == "undefined") {
//             if (email === null || typeof email == "undefined") return res.status(400).json({ code: "02", message: "Email Field Required" })

//             const existingUser = await Users.findOne({ email: email });
//             if (!existingUser) return res.status(404).json({ code: "02", message: "User doesn't exist" })

//             var token = Math.random().toString(36).slice(-8);
//             const updateUser = { temporaryToken: token, _id: existingUser._id.toString() }

//             let transporter = nodemailer.createTransport({
//                 service: 'gmail',
//                 auth: {
//                     type: 'OAuth2',
//                     user: process.env.MAIL_USERNAME,
//                     pass: process.env.MAIL_PASSWORD,
//                     clientId: process.env.OAUTH_CLIENTID,
//                     clientSecret: process.env.OAUTH_CLIENT_SECRET,
//                     refreshToken: process.env.OAUTH_REFRESH_TOKEN
//                 }
//             });

//             let mailOptions = {
//                 from: "janithgamage1.ed@gmail.com",
//                 to: existingUser.email,
//                 subject: 'Shop House Project',
//                 text: `You are Approved to change the password!, You're Temporary password : ${token}`
//             };

//             transporter.sendMail(mailOptions, function (err, data) {
//                 if (err) {
//                     console.log("Error " + err);
//                 } else {
//                     console.log("Email sent successfully")
//                 }
//             });

//             const userResult = await Users.findByIdAndUpdate(existingUser._id.toString(), updateUser, { new: true })

//             res.status(200);
//             res.json({ code: "01", result: userResult })
//         } else {
//             if (email === null || typeof email == "undefined") return res.status(400).json({ code: "02", message: "Email Field Required" })
//             if (temporaryTok === null || typeof temporaryTok == "undefined") return res.status(400).json({ code: "02", message: "Temporary Token Field Required" })
//             if (newPassword === null || typeof newPassword == "undefined") return res.status(400).json({ code: "02", message: "new Password Field Required" })
//             if (newConfirmPassword === null || typeof newConfirmPassword == "undefined") return res.status(400).json({ code: "02", message: "New Confirm Password Field Required" })

//             const existingUser = await Users.findOne({ email: email });
//             if (!existingUser) return res.status(404).json({ code: "02", message: "User doesn't exist" })
//             if (existingUser.temporaryToken != temporaryTok) return res.status(404).json({ code: "02", message: "Temporary Token Invalid" })
//             if (newPassword !== newConfirmPassword) return res.status(400).json({ code: "02", message: "New Password doesn't match" })

//             const updateUser = { password: newPassword, _id: existingUser._id.toString() }
//             const userResult = await Users.findByIdAndUpdate(existingUser._id.toString(), updateUser, { new: true })

//             res.status(200);
//             res.json({ code: "01", result: userResult })
//         }
//     } catch (e) {
//         console.log(e.message);
//         res.status(500).json({ code: "00", message: "Something went wrong" })
//     }
// }

export const getUser = async (req, res, next) => {
    const { id } = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ code: "02", message: `No User for this id: ${id}` });
        }

        const user = await Users.findById(id);

        res.status(200);
        res.json({
            code: "01",
            result: user
        });
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ code: "00", message: "Something went wrong" })
    }
}

export const updateUser = async (req, res, next) => {
    const { id } = req.params;
    const data = req.body;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ code: "02", message: `No User for this id: ${id}` });
        }

        const updateUser = {
            name: data.name,
            contactNumber: data.contactNumber,
            _id: id
        }
        const userResult = await Users.findByIdAndUpdate(id, updateUser, { new: true })

        res.status(200);
        res.json({ code: "01", result: userResult })
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ code: "00", message: "Something went wrong" })
    }
} 