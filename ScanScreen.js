import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ScanScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Nút quay lại */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={32} color="#000" />
      </TouchableOpacity>

      {/* Hình ảnh sản phẩm */}
      <Image
        source={{ uri: "https://giaonuocsuoi.vn/upload/images/nuoc-khoang-lavie-chai-350ml.png" }}
        style={styles.productImage}
      />

      {/* Thông tin sản phẩm */}
      <View style={styles.productInfo}>
        <Image
          source={{ uri: "https://via.placeholder.com/50" }}
          style={styles.productThumbnail}
        />
        <View style={styles.productDetails}>
          <Text style={styles.productOwner}>Lauren's</Text>
          <Text style={styles.productName}>Orange Juice</Text>
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add-circle" size={40} color="#6C63FF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#F8F9FB" },
  backButton: { position: "absolute", top: 40, left: 20 },
  productImage: { width: 300, height: 400, borderRadius: 20 },
  productInfo: {
    position: "absolute",
    bottom: 40,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  productThumbnail: { width: 50, height: 50, borderRadius: 10, marginRight: 10 },
  productDetails: { flex: 1 },
  productOwner: { fontWeight: "bold" },
  productName: { color: "gray" },
  addButton: { marginLeft: 20 },
});

export default ScanScreen;
