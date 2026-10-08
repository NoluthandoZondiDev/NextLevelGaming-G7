import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { useState } from 'react';
import { useRouter } from 'expo-router';

type Props = {
  title: string;
  section?: string;
};

export default function AppHeader({ title, section }: Props) {
  const router = useRouter();

  const [menuVisible, setMenuVisible] = useState(false);

  function navigateTo(route: string) {
    setMenuVisible(false);
    router.push(route as any);
  }

  return (
    <>
      <View style={styles.container}>

        {/* TOP ROW */}
        <View style={styles.topRow}>

          {/* Back button */}
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.iconButton}
          >
            <Text style={styles.backIcon}>←</Text>
          </TouchableOpacity>

          {/* Hamburger menu */}
          <TouchableOpacity
            onPress={() => setMenuVisible(true)}
            style={styles.iconButton}
          >
            <View style={styles.hamburger}>
              <View style={styles.hamburgerLine} />
              <View style={styles.hamburgerLine} />
            </View>
          </TouchableOpacity>

        </View>

        {/* SECTION TITLE */}
        {section && (
          <Text style={styles.section}>
            {section}
          </Text>
        )}

        {/* MAIN TITLE */}
        <Text style={styles.title}>
          {title}
        </Text>

      </View>

      {/* MENU */}
      <Modal
        visible={menuVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setMenuVisible(false)}
      >
        <View style={styles.modalBackground}>

          <View style={styles.menuBox}>

            {/* MENU HEADER */}
            <View style={styles.menuHeader}>
              <Text style={styles.menuTitle}>
                NEXT LEVEL
              </Text>

              <TouchableOpacity
                onPress={() => setMenuVisible(false)}
              >
                <Text style={styles.close}>
                  ×
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.menuLine} />

            {/* HOME */}
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => navigateTo('/home')}
            >
              <Text style={styles.menuText}>
                HOME
              </Text>
            </TouchableOpacity>

            {/* ABOUT US */}
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => navigateTo('/about')}
            >
              <Text style={styles.menuText}>
                ABOUT US
              </Text>
            </TouchableOpacity>

            {/* OVERVIEW */}
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => navigateTo('/overview')}
            >
              <Text style={styles.menuText}>
                OVERVIEW
              </Text>
            </TouchableOpacity>

            {/* CALCULATE FEES */}
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => navigateTo('/calculator')}
            >
              <Text style={styles.menuText}>
                CALCULATE FEES
              </Text>
            </TouchableOpacity>

            {/* CONTACT US */}
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => navigateTo('/contact')}
            >
              <Text style={styles.menuText}>
                CONTACT US
              </Text>
            </TouchableOpacity>

          </View>

        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({

  /* HEADER */
  container: {
    paddingHorizontal: 14,
    paddingTop: 8,
    paddingBottom: 8,
  },

  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  iconButton: {
    padding: 5,
  },

  /* GREEN BACK ARROW */
  backIcon: {
    color: '#39FF14',
    fontSize: 22,
    fontWeight: '700',
  },

  /* TWO PINK MENU STROKES */
  hamburger: {
    width: 16,
    gap: 4,
  },

  hamburgerLine: {
    height: 2,
    backgroundColor: '#FF2BB5',
    borderRadius: 2,
  },

  /* SECTION TEXT */
  section: {
    color: '#00E5FF',
    fontSize: 9,
    fontWeight: '900',
    marginTop: 8,
    textTransform: 'uppercase',
  },

  /* SCREEN TITLE */
  title: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '900',
    marginTop: 4,
    textTransform: 'uppercase',
  },

  /* DARK OVERLAY BEHIND MENU */
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingTop: 45,
    paddingRight: 12,
  },

  /* MENU BOX */
  menuBox: {
    width: 220,
    backgroundColor: '#171D3D',
    borderWidth: 1,
    borderColor: '#39FF14',
    borderRadius: 8,
    paddingBottom: 10,
  },

  /* MENU HEADER */
  menuHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 13,
  },

  menuTitle: {
    color: '#39FF14',
    fontSize: 16,
    fontWeight: '900',
  },

  /* CLOSE BUTTON */
  close: {
    color: '#FF2BB5',
    fontSize: 27,
    fontWeight: '700',
  },

  /* LINE UNDER MENU TITLE */
  menuLine: {
    height: 1,
    backgroundColor: '#26345F',
    marginBottom: 5,
  },

  /* MENU OPTIONS */
  menuItem: {
    paddingHorizontal: 15,
    paddingVertical: 13,
  },

  menuText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '800',
  },

});