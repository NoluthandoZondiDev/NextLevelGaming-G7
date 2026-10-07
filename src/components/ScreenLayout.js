import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../theme';

// The drop-down that opens from the hamburger (this also counts as our drop-down menu)
const MENU = [
  { label: 'Home', route: 'Home' },
  { label: 'About Us', route: 'About' },
  { label: 'Overview', route: 'Overview' },
  { label: 'Calculate Fees', route: 'Calculate' },
  { label: 'Contact', route: 'Contact' },
];

// The bar at the bottom of every screen
const BOTTOM = [
  { label: 'Home', route: 'Home' },
  { label: 'Overview', route: 'Overview' },
  { label: 'Calculate', route: 'Calculate' },
  { label: 'Contact', route: 'Contact' },
];

// Wrap your screen's content in <ScreenLayout navigation={navigation}> ... </ScreenLayout>
// and you get the back arrow, hamburger menu and bottom bar for free.
export default function ScreenLayout({ navigation, children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const go = (route) => {
    setMenuOpen(false);
    navigation.navigate(route);
  };

  const goBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate('Home');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack}>
          <Text style={styles.arrow}>{'\u2190'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setMenuOpen(!menuOpen)}>
          <Text style={styles.burger}>{'\u2630'}</Text>
        </TouchableOpacity>
      </View>

      {menuOpen && (
        <View style={styles.dropdown}>
          {MENU.map((m) => (
            <TouchableOpacity key={m.route} onPress={() => go(m.route)} style={styles.dropdownItem}>
              <Text style={styles.dropdownText}>{m.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      <ScrollView contentContainerStyle={styles.content}>{children}</ScrollView>

      <View style={styles.bottomBar}>
        {BOTTOM.map((b) => (
          <TouchableOpacity key={b.route} onPress={() => go(b.route)}>
            <Text style={styles.bottomText}>{b.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  header: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 14 },
  arrow: { color: colors.green, fontSize: 30 },
  burger: { color: colors.magenta, fontSize: 30 },
  dropdown: {
    position: 'absolute', top: 64, right: 16, zIndex: 10, elevation: 10,
    backgroundColor: colors.bar, borderRadius: 10, borderWidth: 1, borderColor: colors.cyan, paddingVertical: 6,
  },
  dropdownItem: { paddingVertical: 10, paddingHorizontal: 20 },
  dropdownText: { color: colors.white, fontSize: 16 },
  content: { paddingHorizontal: 20, paddingBottom: 24 },
  bottomBar: {
    flexDirection: 'row', justifyContent: 'space-around', backgroundColor: colors.bar, paddingVertical: 16,
  },
  bottomText: { color: colors.white, fontSize: 14 },
});
