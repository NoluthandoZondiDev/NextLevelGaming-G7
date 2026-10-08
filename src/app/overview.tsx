import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { useRouter } from 'expo-router';
import AppHeader from '../components/AppHeader';
import BottomNav from '../components/BottomNav';

const experiences = [
  {
    id: 'ultimate',
    name: 'Ultimate Gamer Pass',
    price: 1500,
    type: 'Gaming Package',
  },
  {
    id: 'vip',
    name: 'VIP Gaming Experience',
    price: 1500,
    type: 'Gaming Package',
  },
  {
    id: 'esports',
    name: 'Esports Training Package',
    price: 1500,
    type: 'Gaming Package',
  },
  {
    id: 'birthday',
    name: 'Birthday Party Package',
    price: 1500,
    type: 'Gaming Package',
  },
  {
    id: 'vr',
    name: 'Virtual Reality Experience',
    price: 750,
    type: 'Individual Experience',
  },
  {
    id: 'racing',
    name: 'Racing Simulator Challenge',
    price: 750,
    type: 'Individual Experience',
  },
  {
    id: 'escape',
    name: 'Escape Room Challenge',
    price: 750,
    type: 'Individual Experience',
  },
];

export default function OverviewScreen() {
  const router = useRouter();

  const packages = experiences.filter(
    item => item.type === 'Gaming Package'
  );

  const individual = experiences.filter(
    item => item.type === 'Individual Experience'
  );

  return (
    <View style={styles.container}>

      <ScrollView contentContainerStyle={styles.content}>

        <AppHeader
          title="GAMING PACKAGES"
          section="OVERVIEW"
        />

        <Text style={styles.category}>
          GAMING PACKAGES:
        </Text>

        {packages.map(item => (
          <TouchableOpacity
            key={item.id}
            style={styles.item}
            onPress={() =>
              router.push({
                pathname: '/experience/[id]',
                params: { id: item.id },
              })
            }
          >
            <Text style={styles.itemName}>
              {item.name}
            </Text>

            <Text style={styles.price}>
              R{item.price}
            </Text>

            <Text style={styles.arrow}>
              ›
            </Text>
          </TouchableOpacity>
        ))}

        <Text style={styles.category}>
          INDIVIDUAL EXPERIENCES:
        </Text>

        {individual.map(item => (
          <TouchableOpacity
            key={item.id}
            style={styles.item}
            onPress={() =>
              router.push({
                pathname: '/experience/[id]',
                params: { id: item.id },
              })
            }
          >
            <Text style={styles.itemName}>
              {item.name}
            </Text>

            <Text style={styles.price}>
              R{item.price}
            </Text>

            <Text style={styles.arrow}>
              ›
            </Text>
          </TouchableOpacity>
        ))}

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
    paddingBottom: 25,
  },

  category: {
    color: '#A855F7',
    fontSize: 9,
    fontWeight: '900',
    marginHorizontal: 14,
    marginTop: 15,
    marginBottom: 7,
  },

  item: {
    marginHorizontal: 14,
    backgroundColor: '#171D3D',
    borderWidth: 1,
    borderColor: '#26345F',
    borderRadius: 6,
    minHeight: 35,
    paddingHorizontal: 10,
    marginBottom: 7,
    flexDirection: 'row',
    alignItems: 'center',
  },

  itemName: {
    color: '#FFFFFF',
    fontSize: 9,
    flex: 1,
  },

  price: {
    color: '#FFFFFF',
    fontSize: 8,
    marginRight: 8,
  },

  arrow: {
    color: '#39FF14',
    fontSize: 20,
    fontWeight: '900',
  },
});