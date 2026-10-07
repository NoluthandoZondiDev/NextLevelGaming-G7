import {
    Linking,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function Contact() {

  const openMap = () => {
    Linking.openURL(
      "https://www.google.com/maps/search/?api=1&query=Braamfontein+Johannesburg"
    );
  };

  return (
    <SafeAreaView style={styles.container}>

      <ScrollView contentContainerStyle={styles.page}>

        <View style={styles.top}>
          <Text style={styles.back}>←</Text>
          <Text style={styles.menu}>≡</Text>
        </View>

        <Text style={styles.blue}>CONTACT</Text>

        <Text style={styles.heading}>CONTACT US</Text>

        <Text style={styles.small}>
          Pop through or tap me for directions.
        </Text>

        <Text style={styles.contactTitle}>PHONE</Text>

        <TouchableOpacity
          onPress={() => Linking.openURL("tel:+27123456789")}
        >
          <Text style={styles.contactText}>
            +27 12 345 6789
          </Text>
        </TouchableOpacity>

        <Text style={styles.contactTitle}>EMAIL</Text>

        <TouchableOpacity
          onPress={() =>
            Linking.openURL("mailto:hello@nextlevel.co.za")
          }
        >
          <Text style={styles.contactText}>
            hello@nextlevel.co.za
          </Text>
        </TouchableOpacity>

        <Text style={styles.contactTitle}>ADDRESS</Text>

        <Text style={styles.contactText}>
          123 Street, Braamfontein, Johannesburg, 2000
        </Text>

        <Text style={styles.contactTitle}>FOLLOW US</Text>

        <Text style={styles.social}>
          ◎     ♪     ⓕ
        </Text>

        <TouchableOpacity
          style={styles.mapBox}
          onPress={openMap}
        >
          <Text style={styles.mapText}>
            MAP - DIRECTIONS TO VENUE
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.openMap}
          onPress={openMap}
        >
          <Text style={styles.openMapText}>
            OPEN MAP
          </Text>
        </TouchableOpacity>

      </ScrollView>

      <View style={styles.bottom}>
        <Text style={styles.nav}>Home</Text>
        <Text style={styles.nav}>Overview</Text>
        <Text style={styles.nav}>Calculate</Text>
        <Text style={styles.nav}>Contact</Text>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D1127",
  },

  page: {
    paddingHorizontal: 24,
    paddingBottom: 50,
  },

  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    marginBottom: 25,
  },

  back: {
    color: "#39FF14",
    fontSize: 38,
    fontWeight: "bold",
  },

  menu: {
    color: "#FF18A8",
    fontSize: 38,
    fontWeight: "bold",
  },

  blue: {
    color: "#00D8F5",
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 14,
  },

  heading: {
    color: "white",
    fontSize: 27,
    fontWeight: "bold",
  },

  small: {
    color: "#83889A",
    fontSize: 14,
    marginBottom: 20,
  },

  contactTitle: {
    color: "#00D8F5",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 15,
  },

  contactText: {
    color: "#E7E7E7",
    fontSize: 14,
    marginTop: 3,
    textDecorationLine: "underline",
  },

  social: {
    color: "white",
    fontSize: 24,
    marginTop: 5,
  },

  mapBox: {
    backgroundColor: "#00D8F5",
    height: 120,
    borderRadius: 9,
    marginHorizontal: 24,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },

  mapText: {
    color: "#071126",
    fontSize: 16,
    fontWeight: "bold",
  },

  openMap: {
    backgroundColor: "#39FF14",
    alignSelf: "center",
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 50,
  },

  openMapText: {
    color: "#071126",
    fontSize: 16,
    fontWeight: "bold",
  },

  bottom: {
    height: 58,
    backgroundColor: "#28365F",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  nav: {
    color: "white",
    fontSize: 12,
  },
});