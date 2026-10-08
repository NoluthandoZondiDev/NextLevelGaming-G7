import {
  Alert,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { useState } from 'react';

import AppHeader from '../components/AppHeader';
import BottomNav from '../components/BottomNav';

export default function ContactScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function sendMessage() {
    if (!name || !email || !message) {
      Alert.alert(
        'Missing information',
        'Please complete all fields.'
      );
      return;
    }

    Alert.alert(
      'Message Sent',
      'Thank you. Your enquiry has been received.'
    );

    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <View style={styles.container}>

      <ScrollView contentContainerStyle={styles.content}>

        <AppHeader
          title="CONTACT US"
          section="CONTACT"
        />

        <Text style={styles.subtitle}>
          Speak to our team or get directions.
        </Text>

        <Text style={styles.label}>NAME</Text>

        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Enter your name"
          placeholderTextColor="#737A9B"
          style={styles.input}
        />

        <Text style={styles.label}>EMAIL</Text>

        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          placeholderTextColor="#737A9B"
          keyboardType="email-address"
          style={styles.input}
        />

        <Text style={styles.label}>MESSAGE</Text>

        <TextInput
          value={message}
          onChangeText={setMessage}
          placeholder="Enter your message"
          placeholderTextColor="#737A9B"
          multiline
          style={styles.message}
        />

        <TouchableOpacity
          style={styles.sendButton}
          onPress={sendMessage}
        >
          <Text style={styles.sendText}>
            SEND MESSAGE
          </Text>
        </TouchableOpacity>

        <View style={styles.info}>

          <Text style={styles.infoTitle}>PHONE</Text>
          <Text style={styles.infoText}>
            +27 12 345 6789
          </Text>

          <Text style={styles.infoTitle}>EMAIL</Text>
          <Text style={styles.infoText}>
            hello@nextlevel.co.za
          </Text>

          <Text style={styles.infoTitle}>ADDRESS</Text>
          <Text style={styles.infoText}>
            123 Street, Braamfontein, Johannesburg, 2000
          </Text>

        </View>

        <TouchableOpacity
          style={styles.mapButton}
          onPress={() =>
            Linking.openURL(
              'https://www.google.com/maps'
            )
          }
        >
          <Text style={styles.mapText}>
            MAP - DIRECTIONS TO VENUE
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.openMap}
          onPress={() =>
            Linking.openURL(
              'https://www.google.com/maps'
            )
          }
        >
          <Text style={styles.openMapText}>
            OPEN MAP
          </Text>
        </TouchableOpacity>

      </ScrollView>

      <BottomNav />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F1225',
  },

  content: {
    paddingBottom: 30,
  },

  subtitle: {
    color: '#D1D5DB',
    fontSize: 9,
    marginHorizontal: 14,
    marginBottom: 15,
  },

  label: {
    color: '#00E5FF',
    fontSize: 8,
    fontWeight: '900',
    marginHorizontal: 14,
    marginTop: 8,
    marginBottom: 4,
  },

  input: {
    height: 36,
    marginHorizontal: 14,
    backgroundColor: '#171D3D',
    borderWidth: 1,
    borderColor: '#26345F',
    borderRadius: 5,
    paddingHorizontal: 10,
    color: '#FFFFFF',
    fontSize: 9,
  },

  message: {
    height: 85,
    marginHorizontal: 14,
    backgroundColor: '#171D3D',
    borderWidth: 1,
    borderColor: '#26345F',
    borderRadius: 5,
    padding: 10,
    color: '#FFFFFF',
    fontSize: 9,
    textAlignVertical: 'top',
  },

  sendButton: {
    backgroundColor: '#FF2BB5',
    marginHorizontal: 14,
    marginTop: 12,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },

  sendText: {
    color: '#0F1225',
    fontSize: 9,
    fontWeight: '900',
  },

  info: {
    marginHorizontal: 14,
    marginTop: 20,
  },

  infoTitle: {
    color: '#00E5FF',
    fontSize: 8,
    fontWeight: '900',
    marginTop: 9,
  },

  infoText: {
    color: '#FFFFFF',
    fontSize: 9,
    marginTop: 3,
  },

  mapButton: {
    height: 65,
    marginHorizontal: 14,
    marginTop: 20,
    backgroundColor: '#00E5FF',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },

  mapText: {
    color: '#0F1225',
    fontSize: 10,
    fontWeight: '900',
  },

  openMap: {
    alignSelf: 'center',
    backgroundColor: '#39FF14',
    paddingHorizontal: 16,
    paddingVertical: 9,
    borderRadius: 6,
    marginTop: 15,
  },

  openMapText: {
    color: '#0F1225',
    fontSize: 9,
    fontWeight: '900',
  },
});