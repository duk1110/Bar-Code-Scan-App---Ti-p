import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function SuccessScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "#F5F5F5", padding: 20, alignItems: "center", justifyContent: "center" }}>
      {/* Nút quay lại */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={32} color="#000" />
      </TouchableOpacity>
      
      {/* Success Illustration */}
      <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/190/190411.png" }} style={{ width: 100, height: 100, marginBottom: 20 }} />
      
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>Payment Success, Yayy! 🎉</Text>
      <Text style={{ textAlign: "center", color: "gray", marginTop: 5 }}>
        We will send order details and invoice to your email.
      </Text>

      {/* Buttons */}
      <TouchableOpacity style={styles.detailsButton} onPress={() => navigation.navigate("Payment")}>
        <Text style={{ color: "#007AFF", fontWeight: "bold" }}>Check Details →</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.downloadButton}>
        <Text style={{ color: "white", fontWeight: "bold" }}>Download Invoice</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  detailsButton: {
    marginTop: 20,
    padding: 10,
  },
  downloadButton: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
    width: "80%",
  },
  backButton: { position: "absolute", top: 40, left: 20 },
};
