import React, { useState } from 'react';
import { KeyboardTypeOptions, SafeAreaView } from 'react-native';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Alert,
} from 'react-native';

interface UserDetails {
    name: string;
    age: string;
    gender: string;
    email: string;
    phoneNumber: string;
    course: string;
    studyYear: string;
    instagram?: string;
    x?: string;
    linkedin?: string;
    portfolio?: string;
}

const SettingsScreen = () => {
    const [details, setDetails] = useState<UserDetails>({
        name: '',
        age: '',
        gender: '',
        email: '',
        phoneNumber: '',
        course: '',
        studyYear: '',
    });

    const handleInputChange = (field: keyof UserDetails, value: string) => {
        setDetails((prevDetails) => ({ ...prevDetails, [field]: value }));
    };

    const validateAndSave = () => {
        // Required fields validation
        const requiredFields: (keyof UserDetails)[] = [
            'name',
            'age',
            'gender',
            'email',
            'phoneNumber',
            'course',
            'studyYear',
        ];

        for (const field of requiredFields) {
            if (!details[field]?.trim()) {
                Alert.alert('Validation Error', `The ${field} field is required.`);
                return;
            }
        }

        // If all validations pass
        console.log('Details saved:', details);
        Alert.alert('Success', 'Your details have been updated successfully!');
    };

    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.header}>Edit Your Details</Text>
                {[
                    { label: 'Name', field: 'name' },
                    { label: 'Age', field: 'age', keyboardType: 'numeric' },
                    { label: 'Gender', field: 'gender' },
                    { label: 'Email', field: 'email', keyboardType: 'email-address' },
                    { label: 'Phone Number', field: 'phoneNumber', keyboardType: 'phone-pad' },
                    { label: 'Course', field: 'course' },
                    { label: 'Study Year', field: 'studyYear' },
                ].map(({ label, field, keyboardType }) => (
                    <View key={field} style={styles.inputContainer}>
                        <Text style={styles.label}>{label}</Text>
                        <TextInput
                            style={styles.input}
                            placeholder={`Enter your ${label.toLowerCase()}`}
                            value={details[field as keyof UserDetails]}
                            onChangeText={(value) => handleInputChange(field as keyof UserDetails, value)}
                            keyboardType={keyboardType as KeyboardTypeOptions || 'default'}
                        />
                    </View>
                ))}
                <Text style={styles.subHeader}>Social Links (Optional)</Text>
                {[
                    { label: 'Instagram', field: 'instagram' },
                    { label: 'X (Twitter)', field: 'x' },
                    { label: 'LinkedIn', field: 'linkedin' },
                    { label: 'Portfolio', field: 'portfolio' },
                ].map(({ label, field }) => (
                    <View key={field} style={styles.inputContainer}>
                        <Text style={styles.label}>{label}</Text>
                        <TextInput
                            style={styles.input}
                            placeholder={`Enter your ${label.toLowerCase()} link`}
                            value={details[field as keyof UserDetails] || ''}
                            onChangeText={(value) => handleInputChange(field as keyof UserDetails, value)}
                        />
                    </View>
                ))}
                <TouchableOpacity style={styles.saveButton} onPress={validateAndSave}>
                    <Text style={styles.saveButtonText}>Save Changes</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f7f7f7',
        flexGrow: 1,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    subHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 20,
    },
    inputContainer: {
        marginBottom: 15,
    },
    label: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 5,
        color: '#333',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        backgroundColor: '#fff',
        fontSize: 16,
    },
    saveButton: {
        backgroundColor: '#007bff',
        paddingVertical: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    saveButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default SettingsScreen;