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
// import aquaOrgAPI from '../../api';
import aquaOrgAPI from '../../api';
const AllCreativity = () => {
    const [list, setList] = useState([]);
    const [visible, setViisble] = useState(false);

    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState(1);
    const [hideId, setHideId] = useState(null);
    const [creativity_Id, setCreativity_Id] = useState(null);

    useEffect(() => {
        getList()
    }, [])

    const getList = () => {
        axios({
            url: "http://192.168.8.107:5000/rest-api/v1/creativity",//`${aquaOrgAPI}donation/`,//"https://nitc.cleverapps.io/api/courses",
            method: "GET"
        }).then((res) => {
            setList(res.data.data)
        }).catch((err) => {
            console.log(err)
        })
       
    }

    const handelDetete = (item) => {
        axios({
            url: "http://192.168.8.107:5000/rest-api/v1/creativity/" + item._id,//"http://localhost:8080/api/student/",
            method: "DELETE",

        }).then((res) => {
            getList();
        })
    }

    const handelSave = () => {
        if (hideId == null) {
            var data = {
                "name": name,
                
                "location": location,
                "description": description,
                "status": Number(status) || 0,
            }
            axios({
                url: "http://192.168.8.107:5000/rest-api/v1/creativity",//`${aquaOrgAPI}donation/`,
                method: "POST",
                data: data,
                headers: {
                    "Content-Type": "application/json"
                }
            }).then((res) => {
                getList();

                setName("")
                setLocation("")
                setDescription("")
                setStatus(1)
                setViisble(false)
            })
        } else {
            var data = {
                "course_id": hideId,
                "name": name,
                "location": location,
                "description": description,
                "status": Number(status) || 0,
            }
            axios({
                url: "http://192.168.8.107:5000/rest-api/v1/creativity/"+creativity_id , //"https://nitc.cleverapps.io/api/courses/",
                method: "PUT",
                data: data,
                headers: {
                    "Content-Type": "application/json"
                }
            }).then((res) => {
                getList();

                setName("")
                setLocation("")
                setDescription("")
                setStatus(1)
                setViisble(false)
            })
        }

    }

    const handleEdit = (item) => {
        setViisble(true)
        setHideId(item.creativity_id)
        setName(item.name)
        setLocation(item.location)
        setDescription(item.description)
        setStatus(item.status + "")
    }

    const handleVisibleModal = () => {
        setViisble(!visible)
        setHideId(null)
    }

    const onChangeName = (value) => {
        setName(value)
    }

    const onChangeLocation = (value) => {
        setLocation(value)
    }

    const onChangeDescription = (value) => {
        setDescription(value)
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
                <Text style={styles.txt_main}>Creativity {list.length}</Text>
                <TouchableOpacity
                    onPress={handleVisibleModal}
                    style={styles.btnNewContainer}
                >
                    <Text style={styles.textButton}>New Creativity</Text>
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
                            value={location}
                            style={styles.text_input}
                            placeholder="Location"
                            onChangeText={onChangeLocation}
                        />
                        <TextInput
                            value={description}
                            style={styles.text_input}
                            placeholder="Description"
                            onChangeText={onChangeDescription}
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
                                
                                <Text style={styles.txt_description}>{ }* {item.description}</Text>
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

export default AllCreativity;

const styles = StyleSheet.create({

    form: {
        padding: 15,
        backgroundColor : "#e3e3e3",
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
        backgroundColor: "green",
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
        borderBottomColor: "green",
        backgroundColor : "lightgreen",
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
        backgroundColor: "green",
    },
    textButton: {
        textAlign: "center",
        color: "white"
    },
})