import React from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, Image } from 'react-native';

const NotificationDetailsScreen = ({ route }: any) => {
  // Receive the avatar URL from the previous screen
  const { userImage } = route.params;

  const userDetails = {
    name: 'Priya Sharma',
    age: '21',
    gender: 'Female',
    email: 'priya.sharma@example.com',
    phoneNumber: '+91 9876543210',
    course: 'Mechanical Engineering',
    studyYear: '3rd Year',
    avatar: userImage || 'https://randomuser.me/api/portraits/women/1.jpg', // Default avatar if not passed
  };

  const journeyDetails = {
    destination: 'Mumbai',
    mode: 'Train',
    date: '2025-01-15',
    time: '10:00 AM',
    departureLocation: 'Delhi'
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* User Details */}
        <View style={styles.userDetailsContainer}>
          <Text style={styles.sectionTitle}>User Details</Text>
          <Image source={{ uri: userDetails.avatar }} style={styles.avatar} />
          <View style={styles.userInfo}>
            <View style={styles.detailRow}>
              <Text style={styles.label}>Name:</Text>
              <Text style={styles.value}>{userDetails.name}</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.label}>Age:</Text>
              <Text style={styles.value}>{userDetails.age}</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.label}>Gender:</Text>
              <Text style={styles.value}>{userDetails.gender}</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.label}>Email:</Text>
              <Text style={styles.value}>{userDetails.email}</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.label}>Phone Number:</Text>
              <Text style={styles.value}>{userDetails.phoneNumber}</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.label}>Course:</Text>
              <Text style={styles.value}>{userDetails.course}</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.label}>Study Year:</Text>
              <Text style={styles.value}>{userDetails.studyYear}</Text>
            </View>
          </View>
        </View>

        {/* Journey Details */}
        <View style={styles.journeyContainer}>
          <Text style={styles.sectionTitle}>Example Journey</Text>
          <View style={styles.journeyRow}>
            <View style={styles.journeyDetails}>
              <Text style={styles.journeyText}>Destination: {journeyDetails.destination}</Text>
              <Text style={styles.journeyText}>Mode: {journeyDetails.mode}</Text>
              <Text style={styles.journeyText}>Date: {journeyDetails.date}</Text>
              <Text style={styles.journeyText}>Time: {journeyDetails.time}</Text>
              <Text style={styles.journeyText}>Departure Location: {journeyDetails.departureLocation}</Text>
            </View>
            <Image source={require('../assets/train.webp')} style={styles.journeyModeImage} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  scrollContainer: {
    paddingBottom: 30,
  },
  userDetailsContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginRight: 15,
    marginBottom: 10,
  },
  userInfo: {
    flex: 1,
  },
  detailRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    width: 120,
  },
  value: {
    fontSize: 16,
    color: '#555',
  },
  journeyContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    elevation: 5,
  },
  journeyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  journeyModeImage: {
    width: 160,
    height: 100,
    marginRight: 15,
    borderRadius: 10,
  },
  journeyDetails: {
    flex: 1,
  },
  journeyText: {
    fontSize: 16,
    marginBottom: 8,
    color: '#555',
  },
});

export default NotificationDetailsScreen;