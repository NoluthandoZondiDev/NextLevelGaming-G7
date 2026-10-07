import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/home');
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>

      <Text style={styles.next}>NEXT</Text>

      <Text style={styles.level}>LEVEL</Text>

      <Text style={styles.subtitle}>
        GAMING AND ESPORTS ARENA
      </Text>

      <View style={styles.logoBox}>
        <Text style={styles.logoIcon}>NX</Text>
        <Text style={styles.logoText}>NEXT LEVEL</Text>
        <Text style={styles.logoSmall}>
          GAMING & ESPORTS ARENA
        </Text>
      </View>

      <View style={styles.taglineBox}>
        <Text style={styles.tagline}>
          BOOK. PLAY. REPEAT.
        </Text>

        <Text style={styles.smallText}>
          Your next challenge starts here.
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F1225',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },

  next: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: '900',
    letterSpacing: 2,
  },

  level: {
    color: '#39FF14',
    fontSize: 40,
    fontWeight: '900',
    letterSpacing: 2,
    marginTop: -5,
  },

  subtitle: {
    color: '#FF2BB5',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
    marginTop: 3,
  },

  logoBox: {
    width: 190,
    height: 150,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#26345F',
    backgroundColor: '#171D3D',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 35,
  },

  logoIcon: {
    color: '#39FF14',
    fontSize: 38,
    fontWeight: '900',
  },

  logoText: {
    color: '#00E5FF',
    fontSize: 17,
    fontWeight: '900',
    marginTop: 5,
  },

  logoSmall: {
    color: '#FFFFFF',
    fontSize: 7,
    marginTop: 3,
  },

  taglineBox: {
    position: 'absolute',
    bottom: 100,
    width: '100%',
    borderWidth: 1,
    borderColor: '#26345F',
    backgroundColor: '#171D3D',
    paddingVertical: 18,
    alignItems: 'center',
    borderRadius: 7,
  },

  tagline: {
    color: '#00E5FF',
    fontWeight: '900',
    fontSize: 13,
  },

  smallText: {
    color: '#FFFFFF',
    fontSize: 8,
    marginTop: 5,
  },
});