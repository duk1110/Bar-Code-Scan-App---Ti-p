import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello 👋</Text>
        <Image source={{ uri: 'https://i.pravatar.cc/300' }} style={styles.avatar} />
      </View>

      {/* Insights Section (2 hàng 2 cột) */}
      <View style={styles.insights}>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Scan')}>
          <Text style={styles.cardTitle}>Scan new</Text>
          <Text style={styles.cardSubtitle}>Scanned 483</Text>
        </TouchableOpacity>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Counterfeits</Text>
          <Text style={styles.cardSubtitle}>Counterfeited 32</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Success</Text>
          <Text style={styles.cardSubtitle}>Checkouts 8</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Directory</Text>
          <Text style={styles.cardSubtitle}>History 26</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FB', padding: 20 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  greeting: { fontSize: 24, fontWeight: 'bold' },
  avatar: { width: 40, height: 40, borderRadius: 20 },
  insights: { 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    justifyContent: 'space-between' 
  },
  card: { 
    backgroundColor: '#fff', 
    padding: 20, 
    borderRadius: 10, 
    width: '48%', // Để tạo 2 cột
    elevation: 2, 
    marginBottom: 10 // Tạo khoảng cách giữa các hàng
  },
  cardTitle: { fontSize: 16, fontWeight: 'bold' },
  cardSubtitle: { fontSize: 14, color: 'gray', marginTop: 5 },
});

export default HomeScreen;
