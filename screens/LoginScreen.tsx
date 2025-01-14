import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const LoginScreen = ({ navigation }: any) => {
    return (
        <ImageBackground
            source={require('../assets/bg.jpg')} // Sample beautiful background image
            style={styles.container}
        >
            <View style={styles.overlay}>
                <Text style={styles.title}>Welcome Back</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#fff"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#fff"
                    secureTextEntry
                />
                <TouchableOpacity style={styles.button} onPress={()=> navigation.replace('HomeTabs')}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.signupLink} onPress={()=> navigation.navigate('SignUp')}>
                    <Text style={styles.signupText}>Don't have an account? Sign Up</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlay: {
        backgroundColor: 'rgba(56, 56, 56, 0.5)', // Dark overlay for better readability
        padding: 25,
        borderRadius: 15,
        width: '85%',
    },
    title: {
        fontSize: 30,
        color: '#fff',
        marginBottom: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    input: {
        height: 50,
        backgroundColor: 'rgba(176, 176, 176, 0.8)',
        borderRadius: 10,
        marginBottom: 15,
        paddingHorizontal: 20,
        color: '#000',
        fontSize: 16,
    },
    button: {
        backgroundColor: '#6200EE',
        paddingVertical: 15,
        borderRadius: 10,
        marginBottom: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '500',
    },
    signupLink: {
        alignItems: 'center',
    },
    signupText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500',
    },
});

export default LoginScreen;