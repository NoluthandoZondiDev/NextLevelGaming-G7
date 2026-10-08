import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';

import AppHeader from '../components/AppHeader';
import BottomNav from '../components/BottomNav';

const experiences = [
  { id: 'ultimate', name: 'ULTIMATE GAMER PASS', price: 1500 },
  { id: 'vip', name: 'VIP GAMING EXPERIENCE', price: 1500 },
  { id: 'esports', name: 'ESPORTS TRAINING PACKAGE', price: 1500 },
  { id: 'birthday', name: 'BIRTHDAY PARTY PACKAGE', price: 1500 },
  { id: 'vr', name: 'VIRTUAL REALITY EXPERIENCE', price: 750 },
  { id: 'racing', name: 'RACING SIMULATOR CHALLENGE', price: 750 },
  { id: 'escape', name: 'ESCAPE ROOM CHALLENGE', price: 750 },
];

export default function CalculatorScreen() {
  const params = useLocalSearchParams();

  const initialSelection = params.selected
    ? [String(params.selected)]
    : [];

  const [selected, setSelected] =
    useState<string[]>(initialSelection);

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const [result, setResult] = useState<{
    subtotal: number;
    discount: number;
    vat: number;
    total: number;
  } | null>(null);

  function toggleSelection(id: string) {
    if (selected.includes(id)) {
      setSelected(selected.filter(item => item !== id));
    } else {
      setSelected([...selected, id]);
    }
  }

  function calculateTotal() {
    if (selected.length === 0) {
      Alert.alert(
        'No booking selected',
        'Please select at least one experience.'
      );
      return;
    }

    const subtotal = selected.reduce((total, id) => {
      const item = experiences.find(
        experience => experience.id === id
      );

      return total + (item?.price ?? 0);
    }, 0);

    let discountRate = 0;

    if (selected.length === 2) {
      discountRate = 0.05;
    } else if (selected.length === 3) {
      discountRate = 0.10;
    } else if (selected.length > 3) {
      discountRate = 0.15;
    }

    const discount = subtotal * discountRate;

    const discountedSubtotal = subtotal - discount;

    const vat = discountedSubtotal * 0.15;

    const total = discountedSubtotal + vat;

    setResult({
      subtotal,
      discount,
      vat,
      total,
    });
  }

  return (
    <View style={styles.container}>

      <ScrollView contentContainerStyle={styles.content}>

        <AppHeader
          title="CALCULATE FEES"
          section="QUOTE REQUEST"
        />

        <Text style={styles.subtitle}>
          Select one or more options. VAT is at 15%.
        </Text>

        <Text style={styles.label}>
          FULL NAME
        </Text>

        <TextInput
          value={fullName}
          onChangeText={setFullName}
          placeholder="Enter Your Full Name"
          placeholderTextColor="#737A9B"
          style={styles.input}
        />

        <Text style={styles.label}>
          PHONE NUMBER
        </Text>

        <TextInput
          value={phone}
          onChangeText={setPhone}
          placeholder="Enter Your Phone Number"
          placeholderTextColor="#737A9B"
          keyboardType="phone-pad"
          style={styles.input}
        />

        <Text style={styles.label}>
          EMAIL ADDRESS
        </Text>

        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Enter Your Email Address"
          placeholderTextColor="#737A9B"
          keyboardType="email-address"
          style={styles.input}
        />

        <Text style={styles.label}>
          SELECT OPTIONS
        </Text>

        <View style={styles.table}>

          <View style={styles.tableHeader}>
            <Text style={styles.headerText}>ITEM</Text>
            <Text style={styles.headerText}>PRICE</Text>
            <Text style={styles.headerText}>SELECT</Text>
          </View>

          {experiences.map(item => (
            <TouchableOpacity
              key={item.id}
              style={styles.row}
              onPress={() => toggleSelection(item.id)}
            >
              <Text style={styles.itemText}>
                {item.name}
              </Text>

              <Text style={styles.priceText}>
                R{item.price}
              </Text>

              <View
                style={[
                  styles.checkbox,
                  selected.includes(item.id) &&
                    styles.checkboxSelected,
                ]}
              >
                {selected.includes(item.id) && (
                  <Text style={styles.check}>
                    ✓
                  </Text>
                )}
              </View>
            </TouchableOpacity>
          ))}

        </View>

        <Text style={styles.discountInfo}>
          1 = 0% | 2 = 5% | 3 = 10% | &gt;3 = 15%
        </Text>

        <TouchableOpacity
          style={styles.calculateButton}
          onPress={calculateTotal}
        >
          <Text style={styles.calculateText}>
            CALCULATE TOTAL
          </Text>
        </TouchableOpacity>

        {result && (
          <View style={styles.resultBox}>

            <Text style={styles.resultTitle}>
              QUOTE SUMMARY
            </Text>

            <Text style={styles.resultLine}>
              Subtotal: R{result.subtotal.toFixed(2)}
            </Text>

            <Text style={styles.resultLine}>
              Discount: -R{result.discount.toFixed(2)}
            </Text>

            <Text style={styles.resultLine}>
              VAT (15%): R{result.vat.toFixed(2)}
            </Text>

            <Text style={styles.total}>
              TOTAL: R{result.total.toFixed(2)}
            </Text>

          </View>
        )}

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
    paddingBottom: 30,
  },

  subtitle: {
    color: '#D1D5DB',
    fontSize: 9,
    marginHorizontal: 14,
    marginBottom: 12,
  },

  label: {
    color: '#FFFFFF',
    fontSize: 8,
    fontWeight: '900',
    marginHorizontal: 14,
    marginTop: 8,
    marginBottom: 4,
  },

  input: {
    height: 36,
    marginHorizontal: 14,
    backgroundColor: '#171D3D',
    borderWidth: 1,
    borderColor: '#26345F',
    borderRadius: 5,
    paddingHorizontal: 10,
    color: '#FFFFFF',
    fontSize: 9,
  },

  table: {
    marginHorizontal: 14,
    borderWidth: 1,
    borderColor: '#26345F',
    backgroundColor: '#171D3D',
  },

  tableHeader: {
    flexDirection: 'row',
    padding: 7,
    borderBottomWidth: 1,
    borderBottomColor: '#26345F',
  },

  headerText: {
    color: '#00E5FF',
    fontSize: 7,
    fontWeight: '900',
    flex: 1,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 7,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#26345F',
  },

  itemText: {
    color: '#FFFFFF',
    fontSize: 7,
    flex: 1,
  },

  priceText: {
    color: '#FFFFFF',
    fontSize: 7,
    width: 55,
  },

  checkbox: {
    width: 15,
    height: 15,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  checkboxSelected: {
    backgroundColor: '#39FF14',
    borderColor: '#39FF14',
  },

  check: {
    color: '#0F1225',
    fontSize: 10,
    fontWeight: '900',
  },

  discountInfo: {
    color: '#D1D5DB',
    fontSize: 8,
    textAlign: 'center',
    marginTop: 8,
  },

  calculateButton: {
    backgroundColor: '#00E5FF',
    marginHorizontal: 14,
    marginTop: 12,
    paddingVertical: 11,
    borderRadius: 5,
    alignItems: 'center',
  },

  calculateText: {
    color: '#0F1225',
    fontSize: 9,
    fontWeight: '900',
  },

  resultBox: {
    marginHorizontal: 14,
    marginTop: 15,
    padding: 14,
    borderWidth: 1,
    borderColor: '#39FF14',
    backgroundColor: '#171D3D',
    borderRadius: 6,
  },

  resultTitle: {
    color: '#39FF14',
    fontSize: 12,
    fontWeight: '900',
    marginBottom: 10,
  },

  resultLine: {
    color: '#FFFFFF',
    fontSize: 10,
    marginBottom: 6,
  },

  total: {
    color: '#FF2BB5',
    fontSize: 16,
    fontWeight: '900',
    marginTop: 5,
  },
});