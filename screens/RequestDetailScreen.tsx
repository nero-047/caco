import React from 'react';
import { View, Text, StyleSheet, Image, Button, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/Ionicons';

const RequestDetailScreen = ({ route, navigation }: any) => {
    const { request } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>

                <View style={styles.requestDetailCard}>
                    <View style={styles.appBar}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                            <Ionicons name="chevron-back" size={20} color="black" />
                        </TouchableOpacity>
                        <Text style={styles.appBarTitle}>Request Details</Text>
                    </View>
                    <Image source={request.image} style={styles.requestImage} />
                    <Text style={styles.destination}>{request.destination}</Text>
                    <Text style={styles.details}>Date: {request.date}</Text>
                    <Text style={styles.details}>Time: {request.time}</Text>
                    <Text style={styles.details}>Mode: {request.mode}</Text>
                    <Text style={styles.details}>Cost: ₹ {request.cost}</Text>
                </View>

                <View style={styles.userDetailsCard}>
                    <Text style={styles.heading}>User Details</Text>
                    <View style={styles.userDetailsContent}>
                        <Image source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }} style={styles.userImage} />
                        <View style={styles.userTextContainer}>
                            <Text>Name: John Doe</Text>
                            <Text>Age: 28</Text>
                            <Text>Gender: Male</Text>
                            <Text>Phone: +1 234 567 890</Text>
                            <Text>Course: B.tech. CSE</Text>
                            <Text>Year: 3rd</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.journeyDetailsCard}>
                    <Text style={styles.heading}>Journey Details</Text>
                    <View style={styles.journeyDetailsContent}>
                        <View style={styles.journeyTextContainer}>
                            <Text>Date: 2025-04-10</Text>
                            <Text>Time: 10:00 AM</Text>
                            <Text>From : London Station</Text>
                            <Text>To: {request.destination}</Text>
                            <Text>Travel Mode: {request.mode}</Text>
                            <Text>Duration: 8hrs</Text>
                        </View>
                        <Image source={request.image} style={styles.modeImage} />
                    </View>
                </View>

                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: 23,
                        longitude: 78,
                        latitudeDelta: 30,
                        longitudeDelta: 30,
                    }}
                >
                    <Marker coordinate={{ latitude: 27, longitude: 78 }} />
                </MapView>
            </ScrollView>

            <View style={styles.footer}>
                <Button
                    title="Request to be Companion"
                    onPress={() => navigation.navigate('Home')}
                    color="white"
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
    },
    scrollContainer: {
        paddingBottom: 70,
    },
    appBar: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        elevation: 2,
    },
    backButton: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    appBarTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 10,
        color: '#333',
    },
    requestDetailCard: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 15,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    requestImage: {
        width: '100%',
        height: 200,
        borderRadius: 8,
        marginBottom: 15,
    },
    destination: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    details: {
        fontSize: 14,
        marginBottom: 3,
    },
    userDetailsCard: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 8,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    userDetailsContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userTextContainer: {
        paddingLeft: 14,
        flex: 1,
    },
    userImage: {
        width: 100,
        height: 100,
        borderRadius: 5,
    },
    journeyDetailsCard: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 8,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    journeyDetailsContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    journeyTextContainer: {
        flex: 1,
    },
    modeImage: {
        width: 140,
        height: 90,
        borderRadius: 8,
    },
    map: {
        width: '100%',
        height: 300,
        marginBottom: 20,
    },
    footer: {
        position: 'absolute',
        bottom: 20,
        left: 10,
        right: 10,
        borderRadius: 30,
        paddingHorizontal: 14,
        paddingVertical: 12,
        backgroundColor: '#007bff',
        elevation: 5,
    },
});

export default RequestDetailScreen;