import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useRouter } from 'expo-router';
import AppHeader from '../components/AppHeader';
import BottomNav from '../components/BottomNav';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >

        <AppHeader
          title="HOME"
          section="WELCOME TO"
        />

        {/* Hero */}
        <View style={styles.hero}>
          <Image
            source={require('../../assets/images/next-level-logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.description}>
          We create exciting experiences for individuals,
          families, schools, gaming clubs, and businesses.
        </Text>

        {/* Buttons */}
        <View style={styles.buttonRow}>

          <TouchableOpacity
            style={styles.greenButton}
            onPress={() => router.push('/overview')}
          >
            <Text style={styles.darkButtonText}>
              VIEW OVERVIEW
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.pinkButton}
            onPress={() => router.push('/calculator')}
          >
            <Text style={styles.darkButtonText}>
              CALCULATE FEES
            </Text>
          </TouchableOpacity>

        </View>

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

  scrollContent: {
    paddingBottom: 25,
  },

  hero: {
    marginHorizontal: 14,
    marginTop: 18,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#26345F',
    backgroundColor: '#171D3D',
    height: 145,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: 170,
    height: 120,
  },

  logoPlaceholder: {
    alignItems: 'center',
  },

  logoMain: {
    color: '#39FF14',
    fontSize: 27,
    fontWeight: '900',
    letterSpacing: 1,
  },

  logoSub: {
    color: '#FFFFFF',
    fontSize: 7,
    marginTop: 4,
  },

  description: {
    color: '#FFFFFF',
    fontSize: 10,
    lineHeight: 15,
    textAlign: 'center',
    marginHorizontal: 25,
    marginTop: 15,
  },

  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
    marginTop: 20,
  },

  greenButton: {
    backgroundColor: '#39FF14',
    paddingHorizontal: 13,
    paddingVertical: 10,
    borderRadius: 6,
  },

  pinkButton: {
    backgroundColor: '#FF2BB5',
    paddingHorizontal: 13,
    paddingVertical: 10,
    borderRadius: 6,
  },

  darkButtonText: {
    color: '#0F1225',
    fontSize: 9,
    fontWeight: '900',
  },
});