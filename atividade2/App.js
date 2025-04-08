import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();

const carDetails = {
  name: "Tesla Model S Plaid",
  description:
    "O Tesla Model S Plaid é um dos carros elétricos mais rápidos do mundo, com desempenho de supercarro, tecnologia de ponta e autonomia impressionante.",
  price: 79990,
  horsepower: "1.020 cv",
  acceleration: "0-100 km/h em 2,1 segundos",
  releaseYear: "2022",
  image: "https://tesla-cdn.thron.com/delivery/public/image/tesla/0c5aa3fe-b529-4298-a174-51f8581035d1/bvlatuR/std/2880x1800/_25-Hero-Desktop", // Imagem do carro
  highlights: [
    { id: "1", name: "Autonomia", detail: "637 km (estimada)", image: "https://cdn-icons-png.flaticon.com/512/189/189664.png" },
    { id: "2", name: "Velocidade Máxima", detail: "322 km/h", image: "https://cdn-icons-png.flaticon.com/512/149/149831.png" },
    { id: "3", name: "Direção Autônoma", detail: "Full Self-Driving", image: "https://cdn-icons-png.flaticon.com/512/741/741407.png" },
    { id: "4", name: "Tipo de Motor", detail: "Tri Motores Elétricos", image: "https://cdn-icons-png.flaticon.com/512/1086/1086741.png" },
    { id: "5", name: "Conectividade", detail: "Streaming, Bluetooth e Wi-Fi", image: "https://cdn-icons-png.flaticon.com/512/481/481869.png" },
  ],
};

const CarDetailsScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: carDetails.image }} style={styles.carImage} />

      <View style={styles.carInfo}>
        <Text style={styles.carTitle}>{carDetails.name}</Text>
        <Text style={styles.carDescription}>{carDetails.description}</Text>
      </View>

      <View style={styles.detailsContainer}>
        <Text>Preço: US$ {carDetails.price.toLocaleString()}</Text>
        <Text>Potência: {carDetails.horsepower}</Text>
        <Text>Aceleração: {carDetails.acceleration}</Text>
        <Text>Ano de Lançamento: {carDetails.releaseYear}</Text>
      </View>

      <Text style={styles.sectionTitle}>Destaques</Text>
      <FlatList
        data={carDetails.highlights}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.highlightItem}>
            <Image source={{ uri: item.image }} style={styles.highlightImage} />
            <View>
              <Text style={styles.highlightName}>{item.name}</Text>
              <Text style={styles.highlightDetail}>{item.detail}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="gray" />
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="CarDetails" component={CarDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  carImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  carInfo: {
    backgroundColor: "#f9f9f9",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  carTitle: {
    fontSize: 22,
    fontWeight: "bold",
  },
  carDescription: {
    fontSize: 14,
    marginTop: 5,
  },
  detailsContainer: {
    backgroundColor: "#f1f1f1",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 5,
  },
  highlightItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  highlightImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  highlightName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  highlightDetail: {
    fontSize: 14,
    color: "gray",
  },
});
