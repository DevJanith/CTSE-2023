export function emailValidation(value) {
    if (typeof value == "undefined" || value == null) return { result: false, desc: "Email can not be empty" }
    if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(value)) {
        return { result: true, desc: "Valid Email" }
    } else {
        return { result: false, desc: "Invalid Email" }
    }
}

export function contactNumberValidation(value) {
    if (typeof value == "undefined" || value == null) return { result: false, desc: "Contact Number can not be empty " }
    if (/^(?:0|94|\+94|0094)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|91)(0|2|3|4|5|7|9)|7(0|1|2|4|5|6|7|8)\d)\d{6}$/.test(value)) {
        return { result: true, desc: "Valid Contact Number" }
    } else {
        return { result: false, desc: "Invalid Contact Number" }
    }
}

export function passwordValidation(value) {
    if (typeof value == "undefined" || value == null) return { result: false, desc: "Password can not be empty" }
    if (/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(value)) {
        return { result: true, desc: "Valid Password" }
    } else {
        return { result: false, desc: "Invalid Password" }
    }
}

export function confirmPasswordValidation(value, formData) {
    if (typeof value == "undefined" || value == null) return { result: false, desc: "Confirm Password can not be empty" }
    if (typeof formData.password == "undefined" || formData.password == null) return { result: false, desc: "Password Can not be empty" }
    if (formData.password == value) {
        return { result: true, desc: "Confirm Password matched password" }
    } else {
        return { result: false, desc: "Confirm Password doesn't match with password" }
    }
}

export const requiredFieldValidation = (value) => {
    if (typeof value == "undefined" || value == null || value == "") return { result: false, desc: "Required Fields can not be empty" } 
    return { result: true, desc: "" } 
}