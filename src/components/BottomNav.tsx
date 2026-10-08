import React from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { usePathname, useRouter } from 'expo-router';


export default function BottomNav() {

  const router = useRouter();
  const pathname = usePathname();


  return (

    <SafeAreaView
      edges={['bottom']}
      style={styles.safeArea}
    >

      <View style={styles.container}>

        {/* HOME */}
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push('/home')}
        >

          <Text
            style={[
              styles.icon,
              pathname === '/home' && styles.activeText,
            ]}
          >
            ●
          </Text>

          <Text
            style={[
              styles.label,
              pathname === '/home' && styles.activeText,
            ]}
          >
            HOME
          </Text>

        </TouchableOpacity>


        {/* ABOUT */}
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push('/about')}
        >

          <Text
            style={[
              styles.icon,
              pathname === '/about' && styles.activeText,
            ]}
          >
            ●
          </Text>

          <Text
            style={[
              styles.label,
              pathname === '/about' && styles.activeText,
            ]}
          >
            ABOUT
          </Text>

        </TouchableOpacity>


        {/* OVERVIEW */}
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push('/overview')}
        >

          <Text
            style={[
              styles.icon,
              pathname === '/overview' && styles.activeText,
            ]}
          >
            ●
          </Text>

          <Text
            style={[
              styles.label,
              pathname === '/overview' && styles.activeText,
            ]}
          >
            OVERVIEW
          </Text>

        </TouchableOpacity>


        {/* FEES */}
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push('/calculator')}
        >

          <Text
            style={[
              styles.icon,
              pathname === '/calculator' && styles.activeText,
            ]}
          >
            ●
          </Text>

          <Text
            style={[
              styles.label,
              pathname === '/calculator' && styles.activeText,
            ]}
          >
            FEES
          </Text>

        </TouchableOpacity>


        {/* CONTACT */}
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push('/contact')}
        >

          <Text
            style={[
              styles.icon,
              pathname === '/contact' && styles.activeText,
            ]}
          >
            ●
          </Text>

          <Text
            style={[
              styles.label,
              pathname === '/contact' && styles.activeText,
            ]}
          >
            CONTACT
          </Text>

        </TouchableOpacity>

      </View>

    </SafeAreaView>

  );
}


const styles = StyleSheet.create({

  safeArea: {
    backgroundColor: '#171D3D',
  },

  container: {
    height: 65,

    backgroundColor: '#171D3D',

    borderTopWidth: 1,
    borderTopColor: '#39FF14',

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-around',

    paddingHorizontal: 5,

    elevation: 10,
  },

  navItem: {
    flex: 1,

    alignItems: 'center',

    justifyContent: 'center',

    minHeight: 60,
  },

  icon: {
    color: '#FF2BB5',

    fontSize: 10,

    marginBottom: 5,
  },

  label: {
    color: '#FFFFFF',

    fontSize: 9,

    fontWeight: '800',

    textAlign: 'center',
  },

  activeText: {
    color: '#39FF14',
  },

});