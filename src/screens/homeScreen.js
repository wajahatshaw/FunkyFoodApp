// screens/Home.js
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { incremented, decremented } from '../redux/counter/counterSlices';
import { Auth } from '../core/fireBase';

import {  createUserWithEmailAndPassword } from "firebase/auth";

export default function HomeScreen({ navigation }) {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter.value);

    useEffect(() => {
        // Example function for signing in with Google
        const signInWithGoogle = async () => {
            createUserWithEmailAndPassword(Auth, "emasil@gmail.com", "123456")
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                });
        };
        // Call the signInWithGoogle function when the component mounts or as needed
        // signInWithGoogle();
    }, []);

    const handleIncreament = () => {
        dispatch(incremented())
    };

    const handleDecreament = () => {
        dispatch(decremented())
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title_text}>Counter App</Text>
            <Text style={styles.counter_text}>{counter}</Text>

            <TouchableOpacity onPress={handleIncreament} style={styles.btn}>
                <Text style={styles.btn_text}> Increment </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={handleDecreament}
                style={{ ...styles.btn, backgroundColor: '#6e3b3b' }}>
                <Text style={styles.btn_text}> Decrement </Text>

            </TouchableOpacity>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('food')}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection: 'column',
        padding: 50,
    },
    title_text: {
        fontSize: 40,
        fontWeight: '900',
        marginBottom: 55,
    },
    counter_text: {
        fontSize: 35,
        fontWeight: '900',
        margin: 15,
    },
    btn: {
        backgroundColor: '#086972',
        padding: 10,
        margin: 10,
        borderRadius: 10,
    },
    btn_text: {
        fontSize: 23,
        color: '#fff',
    },
});