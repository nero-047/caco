import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';

const notifications = [
    { id: '1', message: 'Priya Sharma requested to be your companion.', userId: '101', userImage: 'https://randomuser.me/api/portraits/women/1.jpg' },
    { id: '2', message: 'Neha Gupta requested to be your companion.', userId: '102', userImage: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { id: '3', message: 'Ananya Verma requested to be your companion.', userId: '103', userImage: 'https://randomuser.me/api/portraits/women/3.jpg' },
    { id: '4', message: 'Riya Patel requested to be your companion.', userId: '104', userImage: 'https://randomuser.me/api/portraits/women/4.jpg' },
    { id: '5', message: 'Madhuri Deshmukh requested to be your companion.', userId: '105', userImage: 'https://randomuser.me/api/portraits/women/5.jpg' },
    { id: '6', message: 'Isha Malhotra requested to be your companion.', userId: '106', userImage: 'https://randomuser.me/api/portraits/women/6.jpg' },
    { id: '7', message: 'Sanya Mehta requested to be your companion.', userId: '107', userImage: 'https://randomuser.me/api/portraits/women/7.jpg' },
    { id: '8', message: 'Pooja Yadav requested to be your companion.', userId: '108', userImage: 'https://randomuser.me/api/portraits/women/8.jpg' },
    { id: '9', message: 'Kajal Reddy requested to be your companion.', userId: '109', userImage: 'https://randomuser.me/api/portraits/women/9.jpg' },
    { id: '10', message: 'Simran Singh requested to be your companion.', userId: '110', userImage: 'https://randomuser.me/api/portraits/women/10.jpg' },
];

const NotificationPage = ({ navigation }: any) => {
    const navigateToDetails = (userId: string, userImage : string) => {
        navigation.navigate('NotifyDetail', { userId, userImage });
    };

    const renderNotification = ({ item }: any) => (
        <TouchableOpacity onPress={() => navigateToDetails(item.userId, item.userImage)} style={styles.notificationCard}>
            <View style={styles.notificationContent}>
                <Image source={{ uri: item.userImage }} style={styles.userImage} />
                <Text style={styles.notificationText}>{item.message}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Notifications</Text>
            <FlatList
                data={notifications}
                keyExtractor={(item) => item.id}
                renderItem={renderNotification}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
        padding: 15,
        marginHorizontal: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    notificationCard: {
        backgroundColor: '#fff',
        padding: 15,
        marginBottom: 10,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    notificationContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 15,
    },
    notificationText: {
        fontSize: 16,
        color: '#333',
        flex: 1,
    },
});

export default NotificationPage;