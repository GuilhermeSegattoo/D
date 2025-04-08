import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();

const carDetails = {
  name: "Tesla Model S Plaid",
  description:
    "O Tesla Model S Plaid é um dos sedãs elétricos mais rápidos do mundo, combinando desempenho, tecnologia e conforto.",
  price: 79990,
  power: "1.020 cv",
  acceleration: "0-100 km/h em 2,1s",
  releaseYear: "2022",
  image: "https://tesla-cdn.thron.com/delivery/public/image/tesla/0c5aa3fe-b529-4298-a174-51f8581035d1/bvlatuR/std/2880x1800/_25-Hero-Desktop",
  specs: [
    {
      id: "1",
      title: "Autonomia",
      value: "637 km",
      description: "Autonomia estimada com uma única carga completa.",
      icon: "speedometer-outline",
    },
    {
      id: "2",
      title: "Velocidade Máxima",
      value: "322 km/h",
      description: "Velocidade máxima alcançada em pista fechada.",
      icon: "flash-outline",
    },
    {
      id: "3",
      title: "Motor",
      value: "Tri Motores Elétricos",
      description: "Distribuição inteligente de torque nas quatro rodas.",
      icon: "hardware-chip-outline",
    },
    {
      id: "4",
      title: "Autopilot",
      value: "Full Self-Driving",
      description: "Sistema avançado de assistência à condução.",
      icon: "car-sport-outline",
    },
    {
      id: "5",
      title: "Conectividade",
      value: "Wi-Fi, Bluetooth, Streaming",
      description: "Central multimídia completa com conectividade total.",
      icon: "wifi-outline",
    },
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
        <Text><Text style={styles.detailLabel}>Preço:</Text> US$ {carDetails.price.toLocaleString()}</Text>
        <Text><Text style={styles.detailLabel}>Potência:</Text> {carDetails.power}</Text>
        <Text><Text style={styles.detailLabel}>Aceleração:</Text> {carDetails.acceleration}</Text>
        <Text><Text style={styles.detailLabel}>Ano:</Text> {carDetails.releaseYear}</Text>
      </View>

      <Text style={styles.sectionTitle}>🔧 Destaques Técnicos</Text>
      <FlatList
        data={carDetails.specs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.specItem} 
            onPress={() => navigation.navigate("SpecDetails", { spec: item })}
          >
            <Ionicons name={item.icon} size={24} color="#333" style={styles.specIcon} />
            <View>
              <Text style={styles.specTitle}>{item.title}</Text>
              <Text style={styles.specValue}>{item.value}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="gray" />
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
};

const SpecDetailsScreen = ({ route, navigation }) => {
  const { spec } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.specDetails}>
        <Ionicons name={spec.icon} size={100} color="#333" style={{ alignSelf: 'center' }} />
        <Text style={styles.specTitleLarge}>{spec.title}</Text>
        <Text style={styles.specValueLarge}>{spec.value}</Text>
        <Text style={styles.specDescription}>{spec.description}</Text>
      </View>

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text style={styles.backText}>Voltar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="CarDetails" component={CarDetailsScreen} />
        <Stack.Screen name="SpecDetails" component={SpecDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  carImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  carInfo: {
    padding: 15,
  },
  carTitle: {
    fontSize: 22,
    fontWeight: "bold",
  },
  carDescription: {
    fontSize: 14,
    marginTop: 5,
    color: "#555",
  },
  detailsContainer: {
    backgroundColor: "#f1f1f1",
    padding: 15,
    marginHorizontal: 15,
    borderRadius: 10,
  },
  detailLabel: {
    fontWeight: "bold",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 15,
  },
  specItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    marginHorizontal: 15,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: "#fff",
    elevation: 2,
  },
  specIcon: {
    marginRight: 12,
  },
  specTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  specValue: {
    fontSize: 14,
    color: "gray",
  },
  specDetails: {
    padding: 20,
    alignItems: "center",
  },
  specTitleLarge: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 10,
  },
  specValueLarge: {
    fontSize: 22,
    color: "#555",
    marginTop: 5,
  },
  specDescription: {
    fontSize: 16,
    marginTop: 15,
    textAlign: "center",
    color: "#666",
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    alignSelf: "center",
  },
  backText: {
    fontSize: 18,
    marginLeft: 5,
  },
});
