import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { Auth } from '../core/fireBase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import * as Notifications from 'expo-notifications';
import { registerForPushNotificationsAsync } from '../core/push-permissions';
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from '../core/types';

export default function LoginScreen({ navigation }: NativeStackScreenProps<RootStackParamList>) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleNavigate = async () => {
        navigation.navigate('Home')
    }
    const handleLogin = async () => {
        try {
            createUserWithEmailAndPassword(Auth, email, password).then((userCredential) => {
                console.log('Login successful!');
                const user = userCredential.user;
                console.log("userCredential", user);
            })
                .catch((error) => {
                    console.log("error", error);
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                });
        
            // Redirect to the desired screen after successful login
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };
    const handleFN = async () => {
        const token = await registerForPushNotificationsAsync();
        await fetch('https://fcm.googleapis.com/fcm/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `key=AAAA222ZNqk:APA91bHbLRjPyhWeepTRO8JJzIffgKbZnz1Zu7GrgYRBqNVSspD3QP6gYgiBjW5Gj6a3cUO7xX2YgvoCCWgatuo9L3gHILNbIP9NvUojs8dVuxU30y9pZgAh8FKoXfTRN2xpVgoEB9_1`,
            },
            body: JSON.stringify({
                to: token,
                priority: 'normal',
                data: {
                    // experienceId: '@yourExpoUsername/yourProjectSlug',
                    // scopeKey: '@yourExpoUsername/yourProjectSlug',
                    // title: "You've got mail",
                    message: 'Hello world!',
                },
            }),
        })
        // .then((res) => {
        //     console.log("-----res-----", res);
        // })
        //     .catch((error) => {
        //         console.log("----error----", error);
        //     });
    }
    async function schedulePushNotification() {
        console.log("---schedulePushNotification---");
        await Notifications.scheduleNotificationAsync({
            content: {
                title: "You've got mail! 📬",
                body: 'Here is the notification body',
                data: { data: 'goes here' },
            },
            trigger: { seconds: 2 },
        });
    }

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={styles.input}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
                style={styles.input}
            />
            <Button title="Login" onPress={handleLogin} />
            <Button title="SigUp" onPress={handleNavigate} />
            <Button
                title="Press to schedule a notification"
                onPress={async () => {
                    await schedulePushNotification();
                }}
            />
            <Button
                title="Firebase notification"
                onPress={handleFN}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        // alignItems: 'center',
        padding: 16,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
});
