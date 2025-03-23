import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const cartItems = [
    {
      id: '1',
      name: 'Orange Juice',
      brand: "Lauren's",
      price: 149,
      quantity: 2,
      image: { uri: "https://giaonuocsuoi.vn/upload/images/nuoc-khoang-lavie-chai-350ml.png" },
    },
    {
      id: '2',
      name: 'Skimmed Milk',
      brand: "Baskin's",
      price: 129,
      quantity: 2,
      image: { uri: "https://www.chuphinhsanpham.vn/wp-content/uploads/2016/07/chup-hinh-do-an-do-uong-food-67.jpg" },
    },
    {
      id: '3',
      name: 'Aloe Vera Lotion',
      brand: "Marley's",
      price: 1249,
      quantity: 2,
      image: { uri: "https://th.bing.com/th/id/OIP.aEVu-KzvjfSdNi8-IKTmeQHaJ4?rs=1&pid=ImgDetMain" },
    },
  ];  

const CartScreen = () => {
  const navigation = useNavigation();
  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart 👍</Text>
      
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemBrand}>{item.brand}</Text>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>₹ {item.price}</Text>
            </View>
            <View style={styles.quantityContainer}>
              <TouchableOpacity style={styles.quantityButton}>
                <Text style={styles.quantityText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityNumber}>{item.quantity}</Text>
              <TouchableOpacity style={styles.quantityButton}>
                <Text style={styles.quantityText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <Text style={styles.totalText}>Total</Text>
      <Text style={styles.totalAmount}>₹ {totalAmount}</Text>

      <TouchableOpacity
        style={styles.checkoutButton}
        onPress={() => navigation.navigate('Payment')}
      >
        <Text style={styles.checkoutText}>Proceed to checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: '#F9F9F9',
    borderRadius: 10,
    padding: 15,
    marginVertical: 8,
    alignItems: 'center',
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 15,
  },
  itemBrand: {
    fontSize: 12,
    color: '#A9A9A9',
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 14,
    color: '#FF5733',
    fontWeight: 'bold',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: '#FF5733',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantityNumber: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  totalAmount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF5733',
  },
  checkoutButton: {
    backgroundColor: '#FF5733',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  checkoutText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CartScreen;
