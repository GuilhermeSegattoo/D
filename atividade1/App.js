import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

const carros = [
  {
    id: '1',
    modelo: 'VW - Fusca',
    ano: 1978,
    cor: 'Preto',
    imagem: 'https://cdn.classiccars.com/wp-content/uploads/2021/12/1978-vw-beetle-black-lead.jpg',
  },
  {
    id: '2',
    modelo: 'VW - Gol',
    ano: 2010,
    cor: 'Vermelho',
    imagem: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/2017_Volkswagen_Gol_1.0.jpg',
  },
  {
    id: '3',
    modelo: 'VW - Gol',
    ano: 2009,
    cor: 'Vermelho',
    imagem: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/2017_Volkswagen_Gol_1.0.jpg',
  },
  {
    id: '4',
    modelo: 'VW - Gol',
    ano: 2008,
    cor: 'Vermelho',
    imagem: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/2017_Volkswagen_Gol_1.0.jpg',
  }
];

export default function App() {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.imagem }} style={styles.imagem} />
      <View style={styles.textos}>
        <Text style={styles.modelo}>{item.modelo}</Text>
        <Text style={styles.info}>Ano: {item.ano}</Text>
        <Text style={styles.info}>Cor: {item.cor}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Objeto</Text>
      <FlatList
        data={carros}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.lista}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  lista: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  imagem: {
    width: '100%',
    height: 160,
    borderRadius: 8,
    marginBottom: 10,
  },
  textos: {
    paddingHorizontal: 4,
  },
  modelo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 14,
    color: '#555',
  },
});
