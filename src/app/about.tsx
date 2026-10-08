import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import AppHeader from '../components/AppHeader';
import BottomNav from '../components/BottomNav';

export default function AboutScreen() {
  return (
    <View style={styles.container}>

      <ScrollView contentContainerStyle={styles.content}>

        <AppHeader
          title="ABOUT US"
          section="ABOUT NEXT LEVEL"
        />

        <Text style={styles.heading}>
          OUR STORY
        </Text>

        <View style={styles.card}>
          <Text style={styles.label}>HISTORY</Text>
          <Text style={styles.text}>
            Built for players.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>VISION</Text>
          <Text style={styles.text}>
            Lead gaming culture.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>MISSION</Text>
          <Text style={styles.text}>
            Create great moments.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>GOALS</Text>
          <Text style={styles.text}>
            Fun, safe, inclusive.
          </Text>
        </View>

        <Image
        source={require('../../assets/images/gaming-arena.jpg')}
        style={styles.aboutImage}
        resizeMode="cover"
        />

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
    paddingBottom: 20,
  },

  heading: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '900',
    marginHorizontal: 14,
    marginTop: 10,
    marginBottom: 12,
  },

  card: {
    marginHorizontal: 14,
    backgroundColor: '#171D3D',
    borderWidth: 1,
    borderColor: '#26345F',
    borderRadius: 6,
    padding: 12,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },

  label: {
    color: '#A855F7',
    fontSize: 10,
    fontWeight: '900',
    width: 65,
  },

  text: {
    color: '#FFFFFF',
    fontSize: 10,
    flex: 1,
  },

  aboutImage: {
    width: '92%',
    height: 160,
    alignSelf: 'center',
    backgroundColor: '#171D3D',
    borderWidth: 1,
    borderColor: '#26345F',
    borderRadius: 7,
    marginTop: 10,
    marginBottom: 15,
  },

});