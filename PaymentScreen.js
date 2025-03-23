import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function PaymentScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "#F5F5F5", padding: 20 }}>
    {/* Nút quay lại */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={32} color="#000" />
      </TouchableOpacity>
        
      {/* Header */}
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 75 }}></Text>

      {/* Checkout Card */}
      <View style={{ backgroundColor: "white", padding: 20, borderRadius: 15 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Checkout 💳</Text>
        <Text style={{ color: "green", fontSize: 22, fontWeight: "bold" }}>₹ 1,527</Text>
        <Text style={{ color: "gray" }}>Including GST (18%)</Text>

        {/* Payment Options */}
        <View style={{ flexDirection: "row", marginVertical: 10 }}>
          <TouchableOpacity style={{ backgroundColor: "#34C759", padding: 10, borderRadius: 10, flex: 1, marginRight: 10 }}>
            <Text style={{ color: "white", textAlign: "center" }}>💳 Credit Card</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: "#EAEAEA", padding: 10, borderRadius: 10, flex: 1 }}>
            <Text style={{ textAlign: "center" }}>🍏 Apple Pay</Text>
          </TouchableOpacity>
        </View>

        {/* Card Inputs */}
        <Text style={{ fontWeight: "bold" }}>Card Number</Text>
        <TextInput style={styles.input} placeholder="5261 4141 0151 8472" keyboardType="numeric" />

        <Text style={{ fontWeight: "bold" }}>Cardholder Name</Text>
        <TextInput style={styles.input} placeholder="Christie Doe" />

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flex: 1, marginRight: 10 }}>
            <Text style={{ fontWeight: "bold" }}>Expiry Date</Text>
            <TextInput style={styles.input} placeholder="06 / 2024" keyboardType="numeric" />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: "bold" }}>CVV / CVC</Text>
            <TextInput style={styles.input} placeholder="915" keyboardType="numeric" secureTextEntry />
          </View>
        </View>

        {/* Pay Button */}
        <TouchableOpacity
          style={styles.payButton}
          onPress={() => navigation.navigate("Success")}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>Pay for the order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = {
  input: {
    backgroundColor: "#F2F2F2",
    padding: 10,
    borderRadius: 8,
    marginTop: 5,
    marginBottom: 10,
  },
  payButton: {
    backgroundColor: "#34C759",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  backButton: { position: "absolute", top: 40, left: 20, marginBottom: 75, marginTop: 20 },
};
