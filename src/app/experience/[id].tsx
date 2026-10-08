import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

import { useLocalSearchParams, useRouter } from 'expo-router';
import AppHeader from '../../components/AppHeader';

const experiences: Record<string, any> = {
  ultimate: {
    name: 'ULTIMATE GAMER PASS',
    type: 'GAMING PACKAGE',
    price: 1500,
    image: require('../../../assets/images/ultimate-gamer.jpg'),
    description: 'Unlimited gaming access for a full day.',
    included: [
      'PC Gaming',
      'Console Gaming',
      'High Speed Internet',
      'Snack Voucher',
      'Tournament Entry',
    ],
  },

  vip: {
    name: 'VIP GAMING EXPERIENCE',
    type: 'GAMING PACKAGE',
    price: 1500,
    image: require('../../../assets/images/vip-gaming.jpg'),
    description: 'Premium gaming experience with exclusive facilities.',
    included: [
      'Private Gaming Booth',
      'Premium Gaming Equipment',
      'Food and Drinks',
      'Priority Booking',
      'Personal Gaming Assistance',
    ],
  },

  esports: {
    name: 'ESPORTS TRAINING PACKAGE',
    type: 'GAMING PACKAGE',
    price: 1500,
    image: require('../../../assets/images/esports-training.jpg'),
    description: 'Improve gaming skills with professional coaching.',
    included: [
      'Strategy Coaching',
      'Team Communication',
      'Match Analysis',
      'Practice Sessions',
      'Performance Feedback',
    ],
  },

  birthday: {
    name: 'BIRTHDAY PARTY PACKAGE',
    type: 'GAMING PACKAGE',
    price: 1500,
    image: require('../../../assets/images/birthday-party.jpg'),
    description: 'Host a gaming themed birthday celebration.',
    included: [
      'Reserved Gaming Area',
      'Multiplayer Competitions',
      'Party Decorations',
      'Catering',
      'Tournament Prizes',
    ],
  },

  vr: {
    name: 'VIRTUAL REALITY EXPERIENCE',
    type: 'INDIVIDUAL EXPERIENCE',
    price: 750,
    image: require('../../../assets/images/virtual-reality.jpg'),
    description: 'Explore immersive virtual reality games.',
    included: [
      'VR Headset',
      'Choice of Games',
      'Staff Assistance',
    ],
  },

  racing: {
    name: 'RACING SIMULATOR CHALLENGE',
    type: 'INDIVIDUAL EXPERIENCE',
    price: 750,
    image: require('../../../assets/images/racing-simulator.jpg'),
    description: 'Race on professional driving simulators.',
    included: [
      'Racing Simulator',
      'Choice of Tracks',
      'Leaderboard Competition',
    ],
  },

  escape: {
    name: 'ESCAPE ROOM CHALLENGE',
    type: 'INDIVIDUAL EXPERIENCE',
    price: 750,
    image: require('../../../assets/images/escape-room.jpg'),
    description: 'Solve puzzles and escape before time runs out.',
    included: [
      'Team Challenge',
      'Themed Escape Room',
      'Digital Scorecard',
    ],
  },
};

export default function ExperienceScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const experience = experiences[String(id)];

  if (!experience) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>
          Experience not found.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>

      <ScrollView contentContainerStyle={styles.content}>

        <AppHeader
          title="EXPERIENCE DETAILS"
          section={experience.type}
        />

        <Text style={styles.name}>
          {experience.name}
        </Text>

        <Text style={styles.price}>
          R{experience.price}
        </Text>

       <Image
        source={experience.image}
        style={styles.image}
        resizeMode="cover"
        />

        <Text style={styles.description}>
          {experience.description}
        </Text>

        <Text style={styles.includedTitle}>
          INCLUDED:
        </Text>

        {experience.included.map((item: string) => (
          <Text key={item} style={styles.included}>
            <Text style={styles.plus}>+</Text> {item}
          </Text>
        ))}

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            router.push({
              pathname: '/calculator',
              params: { selected: String(id) },
            })
          }
        >
          <Text style={styles.buttonText}>
            ADD TO CALCULATOR
          </Text>
        </TouchableOpacity>

      </ScrollView>

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

  name: {
    color: '#A855F7',
    fontSize: 16,
    fontWeight: '900',
    marginHorizontal: 14,
    marginTop: 5,
  },

  price: {
    color: '#39FF14',
    fontSize: 9,
    fontWeight: '900',
    marginHorizontal: 14,
    marginTop: 4,
  },

 image: {
  width: '100%',
  height: 160,
  marginTop: 10,
  borderRadius: 7,
  borderWidth: 1,
  borderColor: '#26345F',
},

  description: {
    color: '#FFFFFF',
    fontSize: 10,
    lineHeight: 15,
    marginHorizontal: 14,
    marginTop: 10,
  },

  includedTitle: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '900',
    marginHorizontal: 14,
    marginTop: 12,
    marginBottom: 5,
  },

  included: {
    color: '#FFFFFF',
    fontSize: 10,
    marginHorizontal: 14,
    lineHeight: 17,
  },

  plus: {
    color: '#39FF14',
    fontWeight: '900',
  },

  button: {
    backgroundColor: '#39FF14',
    alignSelf: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 6,
    marginTop: 18,
  },

  buttonText: {
    color: '#0F1225',
    fontSize: 9,
    fontWeight: '900',
  },

  error: {
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 100,
  },
});