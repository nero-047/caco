import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Alert, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import LottieView from 'lottie-react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CreateRequestScreen = ({ navigation }: any) => {
    const [destinationCity, setDestinationCity] = useState('');
    const [destinationPoint, setDestinationPoint] = useState('');
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());
    const [mode, setMode] = useState('');
    const [cost, setCost] = useState('');
    const [leavingPlace, setLeavingPlace] = useState('');
    const [duration, setDuration] = useState('');
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showTimePicker, setShowTimePicker] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);

    const handleCreateRequest = () => {
        if (!destinationCity || !destinationPoint || !cost || !leavingPlace || !duration || !mode) {
            Alert.alert("Error", "Please fill in all the fields!");
            return;
        }

        setIsCompleted(true);
        setTimeout(() => {
            navigation.goBack();
        }, 2000);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.appBar}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="chevron-back" size={20} color="white" />
                </TouchableOpacity>
                <Text style={styles.appBarTitle}>Create Request</Text>
            </View>

            {isCompleted && (
                <View style={styles.lottieBox}>
                    <LottieView
                        source={require('../assets/sucess.json')}
                        autoPlay
                        loop={false}
                        style={styles.lottie}
                    />
                    <Text style={styles.lottieBoxText}>request created</Text>
                </View>
            )}

            <ScrollView style={styles.formContainer}>
                <Text style={styles.label}>Destination City</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter destination city"
                    value={destinationCity}
                    onChangeText={setDestinationCity}
                    placeholderTextColor='grey'
                />

                <Text style={styles.label}>Destination Point</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter destination point"
                    value={destinationPoint}
                    onChangeText={setDestinationPoint}
                    placeholderTextColor='grey'
                />

                <Text style={styles.label}>Date</Text>
                <TouchableOpacity style={styles.dateButton} onPress={() => setShowDatePicker(true)}>
                    <Text style={styles.buttonText}>{date.toDateString()}</Text>
                </TouchableOpacity>
                {showDatePicker && (
                    <DateTimePicker
                        value={date}
                        mode="date"
                        display="default"
                        onChange={(event, selectedDate) => {
                            setShowDatePicker(false);
                            setDate(selectedDate || date);
                        }}
                    />
                )}

                <Text style={styles.label}>Time</Text>
                <TouchableOpacity style={styles.dateButton} onPress={() => setShowTimePicker(true)}>
                    <Text style={styles.buttonText}>{time.toLocaleTimeString()}</Text>
                </TouchableOpacity>
                {showTimePicker && (
                    <DateTimePicker
                        value={time}
                        mode="time"
                        display="default"
                        onChange={(event, selectedTime) => {
                            setShowTimePicker(false);
                            setTime(selectedTime || time);
                        }}
                    />
                )}

                <Text style={styles.label}>Mode of Transport</Text>
                <View style={styles.modeButtonsContainer}>
                    <TouchableOpacity
                        style={[styles.modeButton, mode === 'Train' && styles.selectedModeButton]}
                        onPress={() => setMode('Train')}>
                        <Text style={mode === 'Train' ? styles.selectedModeButtonText : styles.modeButtonText}>Train</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.modeButton, mode === 'Flight' && styles.selectedModeButton]}
                        onPress={() => setMode('Flight')}>
                        <Text style={mode === 'Flight' ? styles.selectedModeButtonText : styles.modeButtonText}>Flight</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.modeButton, mode === 'Bus' && styles.selectedModeButton]}
                        onPress={() => setMode('Bus')}>
                        <Text style={mode === 'Bus' ? styles.selectedModeButtonText : styles.modeButtonText}>Bus</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.label}>Cost (₹)</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter cost"
                    keyboardType="numeric"
                    value={cost}
                    onChangeText={setCost}
                />

                <Text style={styles.label}>Leaving Place</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter starting point"
                    value={leavingPlace}
                    onChangeText={setLeavingPlace}
                />

                <Text style={styles.label}>Duration (hrs)</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter duration"
                    keyboardType="numeric"
                    value={duration}
                    onChangeText={setDuration}
                    placeholderTextColor='grey'
                />
            </ScrollView>

            <TouchableOpacity style={styles.createButton} onPress={handleCreateRequest}>
                <Text style={styles.createButtonText}>Create Request</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        paddingHorizontal: 20,
    },
    appBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#007bff',
        padding: 15,
        elevation: 3,
        marginBottom: 20,
    },
    appBarTitle: {
        fontSize: 18,
        color: 'white',
        marginLeft: 10,
        fontWeight: 'bold',
    },
    formContainer: {
        paddingHorizontal: 10,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#333',
    },
    input: {
        height: 45,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 10,
        marginBottom: 20,
        backgroundColor: '#fff',
    },
    dateButton: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: '#007bff',
        borderRadius: 8,
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    modeButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    modeButton: {
        flex: 1,
        paddingVertical: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#007bff',
        marginHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectedModeButton: {
        backgroundColor: '#007bff',
    },
    modeButtonText: {
        fontSize: 16,
        color: '#007bff',
    },
    selectedModeButtonText: {
        fontSize: 16,
        color: '#fff',
    },
    createButton: {
        backgroundColor: '#28a745',
        paddingVertical: 15,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    createButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    lottie: {
        height: 150,
        zIndex: 1000,
    },
    lottieBox: {
        width: 200,
        height: 200,
        backgroundColor: 'white',
        borderRadius: 10,
        left: '50%',
        top: '50%',
        zIndex: 99,
        elevation: 10,
        position: 'absolute',
        transform: [{ translateX: '-50%' }, { translateY: '-50%' }],
    },
    lottieBoxText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 600,
    }
});

export default CreateRequestScreen;