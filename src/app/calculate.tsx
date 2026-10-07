import { useState } from "react";
import {
    Alert,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function Calculate() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);
  const [five, setFive] = useState(false);
  const [six, setSix] = useState(false);
  const [seven, setSeven] = useState(false);

  const calculate = () => {
    let total = 0;

    if (one) {
      total = total + 1500;
    }

    if (two) {
      total = total + 1500;
    }

    if (three) {
      total = total + 1500;
    }

    if (four) {
      total = total + 1500;
    }

    if (five) {
      total = total + 750;
    }

    if (six) {
      total = total + 750;
    }

    if (seven) {
      total = total + 750;
    }

    if (total == 0) {
      Alert.alert("Select Option", "Please select an option first");
    } else {
      let vat = total * 0.15;
      let finalTotal = total + vat;

      Alert.alert(
        "Total Fees",
        "Subtotal: R" +
          total +
          "\nVAT: R" +
          vat.toFixed(2) +
          "\nTotal: R" +
          finalTotal.toFixed(2)
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        <View style={styles.top}>
          <Text style={styles.back}>←</Text>
          <Text style={styles.menu}>≡</Text>
        </View>

        <View style={styles.main}>

          <Text style={styles.blue}>QUOTE REQUEST</Text>

          <Text style={styles.heading}>CALCULATE FEES</Text>

          <Text style={styles.small}>
            Select one or more options. VAT is at 15%.
          </Text>

          <Text style={styles.label}>FULL NAME</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter Your Full Name"
            placeholderTextColor="#81879A"
            value={name}
            onChangeText={setName}
          />

          <Text style={styles.label}>PHONE NUMBER</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter Your Phone Number"
            placeholderTextColor="#81879A"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />

          <Text style={styles.label}>EMAIL ADDRESS</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter Your Email Address"
            placeholderTextColor="#81879A"
            value={email}
            onChangeText={setEmail}
          />

          <Text style={styles.blue2}>SELECT OPTIONS</Text>

          <View style={styles.table}>

            <View style={styles.row}>
              <Text style={styles.itemHead}>ITEM</Text>
              <Text style={styles.priceHead}>PRICE</Text>
              <Text style={styles.selectHead}>SELECT</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.item}>ULTIMATE GAMER PASS</Text>
              <Text style={styles.price}>R1500</Text>

              <TouchableOpacity onPress={() => setOne(!one)}>
                <View style={styles.box}>
                  {one && <Text style={styles.tick}>✓</Text>}
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.row}>
              <Text style={styles.item}>VIP GAMING EXPERIENCE</Text>
              <Text style={styles.price}>R1500</Text>

              <TouchableOpacity onPress={() => setTwo(!two)}>
                <View style={styles.box}>
                  {two && <Text style={styles.tick}>✓</Text>}
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.row}>
              <Text style={styles.item}>ESPORTS TRAINING PACKAGE</Text>
              <Text style={styles.price}>R1500</Text>

              <TouchableOpacity onPress={() => setThree(!three)}>
                <View style={styles.box}>
                  {three && <Text style={styles.tick}>✓</Text>}
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.row}>
              <Text style={styles.item}>BIRTHDAY PARTY PACKAGE</Text>
              <Text style={styles.price}>R1500</Text>

              <TouchableOpacity onPress={() => setFour(!four)}>
                <View style={styles.box}>
                  {four && <Text style={styles.tick}>✓</Text>}
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.row}>
              <Text style={styles.item}>VIRTUAL REALITY EXPERIENCE</Text>
              <Text style={styles.price}>R750</Text>

              <TouchableOpacity onPress={() => setFive(!five)}>
                <View style={styles.box}>
                  {five && <Text style={styles.tick}>✓</Text>}
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.row}>
              <Text style={styles.item}>RACING SIMULATOR CHALLENGE</Text>
              <Text style={styles.price}>R750</Text>

              <TouchableOpacity onPress={() => setSix(!six)}>
                <View style={styles.box}>
                  {six && <Text style={styles.tick}>✓</Text>}
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.row}>
              <Text style={styles.item}>ESCAPE ROOM CHALLENGE</Text>
              <Text style={styles.price}>R750</Text>

              <TouchableOpacity onPress={() => setSeven(!seven)}>
                <View style={styles.box}>
                  {seven && <Text style={styles.tick}>✓</Text>}
                </View>
              </TouchableOpacity>
            </View>

          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={calculate}
          >
            <Text style={styles.buttonText}>
              CALCULATE TOTAL
            </Text>
          </TouchableOpacity>

        </View>

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

  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 25,
    paddingTop: 15,
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

  main: {
    paddingHorizontal: 35,
  },

  blue: {
    color: "#00D8F5",
    fontWeight: "bold",
    fontSize: 15,
    marginTop: 20,
  },

  heading: {
    color: "white",
    fontSize: 27,
    fontWeight: "bold",
    marginTop: 15,
  },

  small: {
    color: "#83889A",
    marginBottom: 20,
  },

  label: {
    color: "white",
    fontWeight: "bold",
    fontSize: 13,
    marginBottom: 6,
  },

  input: {
    height: 43,
    backgroundColor: "#172446",
    borderWidth: 1,
    borderColor: "#344878",
    borderRadius: 7,
    paddingLeft: 12,
    color: "white",
    marginBottom: 16,
  },

  blue2: {
    color: "#00D8F5",
    fontWeight: "bold",
    marginTop: 4,
    marginBottom: 6,
  },

  table: {
    backgroundColor: "#172446",
    borderWidth: 1,
    borderColor: "#40588A",
    padding: 10,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    minHeight: 29,
    borderBottomWidth: 1,
    borderBottomColor: "#4C5870",
  },

  itemHead: {
    width: "60%",
    color: "white",
    fontWeight: "bold",
    fontSize: 10,
  },

  priceHead: {
    width: "23%",
    color: "white",
    fontWeight: "bold",
    fontSize: 10,
  },

  selectHead: {
    color: "white",
    fontWeight: "bold",
    fontSize: 10,
  },

  item: {
    width: "60%",
    color: "white",
    fontSize: 8,
  },

  price: {
    width: "23%",
    color: "white",
    fontSize: 9,
  },

  box: {
    width: 15,
    height: 15,
    borderWidth: 1,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },

  tick: {
    color: "#00D8F5",
    fontSize: 11,
  },

  button: {
    backgroundColor: "#00D8F5",
    height: 42,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    marginTop: 17,
    marginBottom: 25,
  },

  buttonText: {
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