import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, SafeAreaView, TextInput, Image, Animated } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const companionRequests = [
    { id: '1', destination: 'Mumbai', date: '2025-05-05', time: '09:00 AM', mode: 'Flight', image: require('../assets/flight.webp') },
    { id: '2', destination: 'Delhi', date: '2025-05-07', time: '11:30 AM', mode: 'Train', image: require('../assets/train.webp') },
    { id: '3', destination: 'Bangalore', date: '2025-05-10', time: '06:00 PM', mode: 'Bus', image: require('../assets/bus.webp') },
    { id: '4', destination: 'Chennai', date: '2025-05-12', time: '07:30 AM', mode: 'Flight', image: require('../assets/flight.webp') },
    { id: '5', destination: 'Kolkata', date: '2025-05-14', time: '03:00 PM', mode: 'Train', image: require('../assets/train.webp') },
    { id: '6', destination: 'Hyderabad', date: '2025-05-20', time: '10:00 AM', mode: 'Bus', image: require('../assets/bus.webp') },
    { id: '7', destination: 'Pune', date: '2025-05-22', time: '01:00 PM', mode: 'Flight', image: require('../assets/flight.webp') },
    { id: '8', destination: 'Ahmedabad', date: '2025-05-25', time: '11:00 AM', mode: 'Train', image: require('../assets/train.webp') },
    { id: '9', destination: 'Surat', date: '2025-05-27', time: '09:30 AM', mode: 'Bus', image: require('../assets/bus.webp') },
    { id: '10', destination: 'Jaipur', date: '2025-05-30', time: '04:00 PM', mode: 'Flight', image: require('../assets/flight.webp') },
    { id: '11', destination: 'Lucknow', date: '2025-06-01', time: '08:00 AM', mode: 'Train', image: require('../assets/train.webp') },
    { id: '12', destination: 'Nagpur', date: '2025-06-03', time: '05:00 PM', mode: 'Bus', image: require('../assets/bus.webp') },
    { id: '13', destination: 'Indore', date: '2025-06-05', time: '02:00 PM', mode: 'Flight', image: require('../assets/flight.webp') },
    { id: '14', destination: 'Bhopal', date: '2025-06-07', time: '06:00 AM', mode: 'Train', image: require('../assets/train.webp') },
    { id: '15', destination: 'Patna', date: '2025-06-10', time: '11:30 AM', mode: 'Bus', image: require('../assets/bus.webp') },
    { id: '16', destination: 'Vadodara', date: '2025-06-12', time: '03:45 PM', mode: 'Flight', image: require('../assets/flight.webp') },
    { id: '17', destination: 'Kanpur', date: '2025-06-15', time: '12:00 PM', mode: 'Train', image: require('../assets/train.webp') },
    { id: '18', destination: 'Ludhiana', date: '2025-06-18', time: '09:00 AM', mode: 'Bus', image: require('../assets/bus.webp') },
    { id: '19', destination: 'Amritsar', date: '2025-06-20', time: '02:30 PM', mode: 'Flight', image: require('../assets/flight.webp') },
    { id: '20', destination: 'Coimbatore', date: '2025-06-25', time: '07:15 AM', mode: 'Train', image: require('../assets/train.webp') },
];

const HomeScreen = ({ navigation }: any) => {
    const [filter, setFilter] = useState('');
    const [modeFilter, setModeFilter] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const searchBarAnim = useState(new Animated.Value(0))[0];

    const getModeImage = (mode: string) => {
        switch (mode) {
            case 'Flight':
                return require('../assets/flight.webp');
            case 'Train':
                return require('../assets/train.webp');
            case 'Bus':
                return require('../assets/bus.webp');
            default:
                return require('../assets/default.webp');
        }
    };

    const filteredRequests = companionRequests.filter(request =>
        (request.destination.toLowerCase().includes(filter.toLowerCase()) || filter === '') &&
        (request.mode.toLowerCase().includes(modeFilter.toLowerCase()) || modeFilter === '')
    );

    const toggleSearchBar = () => {
        Animated.timing(searchBarAnim, {
            toValue: showSearch ? 0 : 1,
            duration: 300,
            useNativeDriver: false,
        }).start();
        setShowSearch(!showSearch);
    };

    const searchBarHeight = searchBarAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 50],
    });

    const renderRequestItem = ({ item }: any) => (
        <TouchableOpacity onPress={() => navigation.navigate('RequestDetail', { request: item })}>
            <View style={styles.requestCard}>
                <View>
                    <Text style={styles.destination}>{item.destination}</Text>
                    <Text style={styles.details}>Date: {item.date}</Text>
                    <Text style={styles.details}>Time: {item.time}</Text>
                </View>
                <Image source={getModeImage(item.mode)} style={styles.modeImage} />
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topBar}>
                <Text style={styles.topBarTitle}>Companion Requests</Text>
                <TouchableOpacity onPress={toggleSearchBar}>
                    <Ionicons name={showSearch ? 'close-outline' : 'search-outline'} size={30} color="white" />
                </TouchableOpacity>
            </View>

            <Animated.View style={[styles.searchBar, { height: searchBarHeight }]}>
                {showSearch && (
                    <TextInput
                        style={styles.filterInput}
                        placeholder="Filter by destination"
                        value={filter}
                        onChangeText={setFilter}
                        placeholderTextColor="grey"
                    />
                )}
            </Animated.View>

            <View style={styles.modeFilterContainer}>
                {['', 'Flight', 'Train', 'Bus'].map((mode) => (
                    <TouchableOpacity
                        key={mode}
                        onPress={() => setModeFilter(mode)}
                        style={[
                            styles.filterOption,
                            modeFilter === mode && styles.selectedFilterOption,
                        ]}
                    >
                        <Text style={{ color: modeFilter === mode ? 'white' : '#000' }}>
                            {mode || 'View All'}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            <FlatList
                data={filteredRequests}
                keyExtractor={(item) => item.id}
                renderItem={renderRequestItem}
            />

            <TouchableOpacity
                style={styles.floatingActionButton}
                onPress={() => navigation.navigate('CreateRequest')}
            >
                <Ionicons name="add" size={30} color="white" />
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
    },
    topBar: {
        backgroundColor: '#007bff',
        height: 56,
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        elevation: 10,
    },
    topBarTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    searchBar: {
        overflow: 'hidden',
        paddingHorizontal: 15,
        backgroundColor: '#007bff'
    },
    filterInput: {
        marginBottom: 10,
        width: '100%',
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    modeFilterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10,
        paddingHorizontal: 10,
    },
    filterOption: {
        fontSize: 16,
        color: '#007bff',
        fontWeight: '500',
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    selectedFilterOption: {
        borderColor: '#007bff',
        backgroundColor: '#007bff',
        color: 'white',
        borderWidth: 2,
        borderRadius: 5,
    },
    requestCard: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 15,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    destination: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    details: {
        fontSize: 14,
        marginBottom: 3,
    },
    modeImage: {
        width: 120,
        height: 80,
        resizeMode: 'cover',
        borderRadius: 5,
    },
    floatingActionButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#007bff',
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },
});

export default HomeScreen;