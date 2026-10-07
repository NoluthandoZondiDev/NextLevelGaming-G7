import React from 'react';
import { Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import ScreenLayout from './ScreenLayout';
import { colors } from '../theme';

// One layout for every detail screen. Give it an 'item' from data/items.js.
// The package screens can reuse this too: pass buttonColor={colors.green}.
export default function ExperienceDetails({ navigation, item, buttonColor = colors.magenta }) {
  return (
    <ScreenLayout navigation={navigation}>
      <Text style={styles.heading}>EXPERIENCE DETAILS</Text>
      <Text style={styles.type}>{item.type}</Text>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>

      <Image source={item.image} style={styles.image} resizeMode="cover" />
      <Text style={styles.description}>{item.description}</Text>

      <Text style={styles.includedTitle}>INCLUDED:</Text>
      {item.included.map((line) => (
        <Text key={line} style={styles.includedLine}>
          <Text style={styles.plus}>+ </Text>
          {line}
        </Text>
      ))}

      <TouchableOpacity
        style={[styles.button, { backgroundColor: buttonColor }]}
        onPress={() => navigation.navigate('Calculate', { preselect: item.name })}
      >
        <Text style={styles.buttonText}>ADD TO CALCULATOR</Text>
      </TouchableOpacity>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  heading: { color: colors.white, fontSize: 28, fontWeight: 'bold', marginTop: 10 },
  type: { color: colors.cyan, fontSize: 16, fontWeight: 'bold', marginTop: 14 },
  // no fixed width, so long names wrap onto a second line instead of running off the screen
  name: { color: colors.purple, fontSize: 24, fontWeight: 'bold', marginTop: 6 },
  price: { color: colors.green, fontSize: 14, fontWeight: 'bold', marginTop: 8 },
  image: { width: '100%', height: 200, borderRadius: 12, marginTop: 14 },
  description: { color: colors.white, fontSize: 15, textAlign: 'center', marginVertical: 14 },
  includedTitle: { color: colors.white, fontSize: 20, fontWeight: 'bold', marginBottom: 8 },
  includedLine: { color: colors.white, fontSize: 17, marginBottom: 6 },
  plus: { color: colors.green, fontWeight: 'bold' },
  button: { alignSelf: 'center', paddingVertical: 14, paddingHorizontal: 24, borderRadius: 10, marginTop: 28 },
  buttonText: { color: colors.background, fontSize: 16, fontWeight: 'bold' },
});
