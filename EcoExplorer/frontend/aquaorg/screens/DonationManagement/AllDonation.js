import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    TextInput,
    Modal
} from "react-native";
import axios from 'axios';
import aquaOrgAPI from '../../api';
const AllDonation = () => {
    const [list, setList] = useState([]);
    const [visible, setViisble] = useState(false);

    const [name, setName] = useState("");
    const [amount, setAmount] = useState(0);
    const [location, setLocation] = useState("");
    const [status, setStatus] = useState(1);
    const [hideId, setHideId] = useState(null);

    useEffect(() => {
        getList()
    }, [])

    const getList = () => {
        axios({
            url: "http://192.168.8.107:5000/rest-api/v1/donation",//`${aquaOrgAPI}donation/`,//"https://nitc.cleverapps.io/api/courses",
            method: "GET"
        }).then((res) => {
            setList(res.data.data)
        }).catch((err) => {
            console.log(err)
        })
        // fetch("http://192.168.8.107:5000/rest-api/v1/donation/", {
        //     // url:,//"https://nitc.cleverapps.io/api/courses",
        //     method: "GET"
        // }).then(res => {
        //     return res.json()
        // }).then(res => {
        //     alert(res.list.length)
        // })
    }

    const handelDetete = (item) => {
        axios({
            url: "http://192.168.8.107:5000/rest-api/v1/donation/" + item._id,//"http://localhost:8080/api/student/",
            method: "DELETE",

        }).then((res) => {
            getList();
        })
    }

    const handelSave = () => {
        if (hideId == null) {
            var data = {
                "name": name,
                "amount": Number(amount) || 0,
                "location": location,
                "status": Number(status) || 0,
            }
            axios({
                url: "http://192.168.8.107:5000/rest-api/v1/donation",//`${aquaOrgAPI}donation/`,
                method: "POST",
                data: data,
                headers: {
                    "Content-Type": "application/json"
                }
            }).then((res) => {
                getList();

                setName("")
                setAmount(0)
                setLocation("")
                setStatus(1)
                setViisble(false)
            })
        } else {
            var data = {
                "course_id": hideId,
                "name": name,
                "amount": Number(amount) || 0,
                "location": location,
                "status": Number(status) || 0,
            }
            axios({
                url: "http://192.168.8.107:5000/rest-api/v1/donation/" + _id,//"https://nitc.cleverapps.io/api/courses/",
                method: "PUT",
                data: data,
                headers: {
                    "Content-Type": "application/json"
                }
            }).then((res) => {
                getList();

                setName("")
                setAmount(0)
                setLocation("")
                setStatus(1)
                setViisble(false)
            })
        }

    }

    const handleEdit = (item) => {
        setViisble(true)
        setHideId(item._id)
        setName(item.name)
        setAmount(item.amount + "")
        setLocation(item.location)
        setStatus(item.status + "")
    }

    const handleVisibleModal = () => {
        setViisble(!visible)
        setHideId(null)
    }

    const onChangeName = (value) => {
        setName(value)
    }

    const onChangeAmount = (value) => {
        setAmount(value)
    }

    const onChangeLocation = (value) => {
        setLocation(value)
    }

    // const addDetails = ()=>{
    //     axios.post('http://192.168.8.107:5000/rest-api/v1/donation/').then((response)=>{

    //     }).catch()
    // }
    const onChangeStatus = (value) => {
        setStatus(value)
    }

    return (
        <SafeAreaView>
            <View style={styles.header_container}>
                <Text style={styles.txt_main}>Donations {list.length}</Text>
                <TouchableOpacity
                    onPress={handleVisibleModal}
                    style={styles.btnNewContainer}
                >
                    <Text style={styles.textButton}>New Donation</Text>
                </TouchableOpacity>
            </View>
            <Modal
                animationType="slide"
                visible={visible}
            >
                <SafeAreaView>
                    <View style={styles.form}>
                        <TouchableOpacity
                            onPress={handleVisibleModal}
                        >
                            <Text style={styles.txtClose}>
                                Close
                            </Text>
                        </TouchableOpacity>
                        <TextInput
                            value={name}
                            style={styles.text_input}
                            placeholder="Name"
                            onChangeText={onChangeName}
                        />
                        <TextInput
                            value={amount}
                            style={styles.text_input}
                            placeholder="Amount"
                            onChangeText={onChangeAmount}
                        />
                        <TextInput
                            value={location}
                            style={styles.text_input}
                            placeholder="Location"
                            onChangeText={onChangeLocation}
                        />
                        <TextInput
                            value={status}
                            style={styles.text_input}
                            placeholder="Status"
                            onChangeText={onChangeStatus}
                        />
                        <TouchableOpacity
                            onPress={handelSave}
                            style={styles.btnContainer}
                        >
                            <Text style={styles.textButton}>
                                {hideId == null ? "Save" : "Update"}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </Modal>
            <ScrollView>
                {list.map((item, index) => {
                    return (
                        <View style={styles.item_course} key={index}>
                            <View>
                                <Text style={styles.txt_name}>{index + 1}. {item.name}</Text>
                                <Text style={styles.txt_location}>{ }* {item.location}</Text>
                                <Text style={styles.txt_contactNo}>{ }* {item.contactNo}</Text>
                                <Text style={styles.txt_email}>{ }* {item.email}</Text>
                                <Text style={styles.txt_amount}>{ }* {item.amount}</Text>
                                <Text style={styles.txt_item}>{item.code}</Text>
                                {/* <Text style={item.status === 1 ? styles.txt_enabled : styles.txt_disabled}>{item.status === 1 ? "Enabled" : "Disabled"}</Text> */}
                            </View>
                            <View>
                                <TouchableOpacity
                                    onPress={() => handelDetete(item)}
                                >
                                    <Text style={styles.txt_del}>Delete</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => handleEdit(item)}
                                >
                                    <Text style={styles.txt_edit}>Edit</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                })}
            </ScrollView>
        </SafeAreaView>
    )
}

export default AllDonation;

const styles = StyleSheet.create({

    form: {
        padding: 15,
        // backgroundColor : "#e3e3e3",
        marginTop: 10
    },

    txtClose: {
        fontSize: 18,
        fontWeight: "bold",
        marginVertical: 10,
        textAlign: "right"
    },
    text_input: {
        padding: 10,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 10,
        marginTop: 10
    },
    header_container: {
        padding: 15,
        backgroundColor: "#eeeeee",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    txt_main: {
        fontSize: 22,
        fontWeight: "bold"
    },
    item_course: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#e2e2e2",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    txt_name: {
        fontSize: 18,
        marginTop: 5,
        fontWeight: "bold"
    },
    txt_item: {
        fontSize: 14,
        marginTop: 5
    },
    txt_enabled: {
        fontSize: 14,
        marginTop: 5,
        color: "green",
        fontWeight: "bold"
    },
    txt_disabled: {
        fontSize: 14,
        marginTop: 5,
        color: "green",
        fontWeight: "bold"
    },
    txt_del: {
        fontSize: 14,
        marginTop: 5,
        color: "red",
        fontWeight: "bold"
    },
    txt_edit: {
        fontSize: 14,
        marginTop: 5,
        color: "blue",
        fontWeight: "bold"
    },
    btnContainer: {
        display: 'flex',
        padding: 15,
        backgroundColor: "#000",
        marginTop: 20,

    },
    btnNewContainer: {
        padding: 10,
        backgroundColor: "#000",
    },
    textButton: {
        textAlign: "center",
        color: "#FFF"
    },
})