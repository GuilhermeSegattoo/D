import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Switch,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

const carros = [
  {
    id: '1',
    titulo: 'Tesla Model S',
    sinopse: 'Sedan elétrico de alto desempenho com design futurista.',
    imagem: 'https://revistacarro.com.br/wp-content/uploads/2022/01/Tesla-Model-S-Plaid-4.jpg',
    descricao: 'O Tesla Model S é um carro 100% elétrico com autonomia de até 652 km e aceleração de 0 a 100 km/h em menos de 2 segundos.',
    destaques: [
      { id: '1', nome: 'Motor', valor: 'Elétrico - 1020 cv' },
      { id: '2', nome: 'Autonomia', valor: '652 km' },
      { id: '3', nome: '0 a 100 km/h', valor: '1.99s' },
    ],
  },
  {
    id: '2',
    titulo: 'BMW M4',
    sinopse: 'Cupê esportivo de alta performance com motor biturbo.',
    imagem: 'https://cdn.motor1.com/images/mgl/8xQXz/s1/2021-bmw-m4-coupe.jpg',
    descricao: 'O BMW M4 combina luxo e esportividade, com motor 3.0 de 510 cv e tração traseira ou integral.',
    destaques: [
      { id: '1', nome: 'Motor', valor: '3.0 TwinPower Turbo - 510 cv' },
      { id: '2', nome: 'Velocidade máxima', valor: '290 km/h' },
      { id: '3', nome: 'Transmissão', valor: 'Automática de 8 marchas' },
    ],
  },
  {
    id: '3',
    titulo: 'Porsche Taycan',
    sinopse: 'Sedan esportivo totalmente elétrico da Porsche.',
    imagem: 'https://cdn.motor1.com/images/mgl/Y99aR/s1/porsche-taycan.jpg',
    descricao: 'O Taycan é o primeiro carro elétrico da Porsche, com desempenho esportivo e tecnologia de ponta.',
    destaques: [
      { id: '1', nome: 'Motor', valor: 'Elétrico - 761 cv (Turbo S)' },
      { id: '2', nome: 'Autonomia', valor: '412 km' },
      { id: '3', nome: '0 a 100 km/h', valor: '2.8s' },
    ],
  },
  {
    id: '4',
    titulo: 'Ford Mustang Mach-E',
    sinopse: 'SUV elétrico com DNA esportivo da linha Mustang.',
    imagem: 'https://cdn.motor1.com/images/mgl/zxR2b/s1/ford-mustang-mach-e.jpg',
    descricao: 'O Mach-E é a versão elétrica e SUV do tradicional Mustang, com autonomia e força para o dia a dia.',
    destaques: [
      { id: '1', nome: 'Motor', valor: 'Elétrico - 487 cv (GT Performance)' },
      { id: '2', nome: 'Autonomia', valor: '540 km' },
      { id: '3', nome: 'Tração', valor: 'Integral AWD' },
    ],
  },
  {
    id: '5',
    titulo: 'Chevrolet Camaro SS',
    sinopse: 'Ícone americano com motor V8 e visual agressivo.',
    imagem: 'https://cdn.motor1.com/images/mgl/QkkVb/s1/chevrolet-camaro-ss.jpg',
    descricao: 'Com seu V8 naturalmente aspirado, o Camaro SS entrega potência bruta e um ronco marcante.',
    destaques: [
      { id: '1', nome: 'Motor', valor: '6.2 V8 - 455 cv' },
      { id: '2', nome: 'Transmissão', valor: 'Automática de 10 marchas' },
      { id: '3', nome: '0 a 100 km/h', valor: '4.0s' },
    ],
  },
  {
    id: '6',
    titulo: 'Toyota Corolla Cross Hybrid',
    sinopse: 'SUV híbrido com economia e tecnologia.',
    imagem: 'https://cdn.motor1.com/images/mgl/qeNvX/s1/toyota-corolla-cross.jpg',
    descricao: 'Um SUV equilibrado entre desempenho, conforto e eficiência com motor híbrido.',
    destaques: [
      { id: '1', nome: 'Motor', valor: '1.8 híbrido - 122 cv combinados' },
      { id: '2', nome: 'Consumo', valor: '17 km/l na cidade' },
      { id: '3', nome: 'Transmissão', valor: 'Automática CVT' },
    ],
  }
];

export default function App() {
  const [carroSelecionado, setCarroSelecionado] = useState(null);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [profissao, setProfissao] = useState('');
  const [comentario, setComentario] = useState('');
  const [nivel, setNivel] = useState('baixo');
  const [area, setArea] = useState('tecnologia');
  const [interesse, setInteresse] = useState(50);
  const [conhecimento, setConhecimento] = useState(30);
  const [notificar, setNotificar] = useState(false);
  const [pesquisa, setPesquisa] = useState(true);
  const [enviado, setEnviado] = useState(false);

  function enviarFormulario() {
    setEnviado(true);
    setTimeout(() => setEnviado(false), 2000);
  }

  function renderDestaque({ item }) {
    return (
      <View style={estilo.cardElenco}>
        <View>
          <Text style={estilo.nomeAtor}>{item.nome}</Text>
          <Text style={{ color: '#ccc' }}>{item.valor}</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Modelos de Carros</Text>

      {carroSelecionado ? (
        <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
          <Image source={{ uri: carroSelecionado.imagem }} style={estilo.imagemGrande} />
          <Text style={estilo.nomeFilme}>{carroSelecionado.titulo}</Text>
          <Text style={estilo.descricao}>{carroSelecionado.descricao}</Text>

          <View style={estilo.formulario}>
            <Text style={estilo.subtitulo}>Formulário de Interesse</Text>

            <TextInput placeholder="Seu nome" style={estilo.input} placeholderTextColor="#999" value={nome} onChangeText={setNome} />
            <TextInput placeholder="Seu e-mail" style={estilo.input} placeholderTextColor="#999" keyboardType="email-address" value={email} onChangeText={setEmail} />
            <TextInput placeholder="Sua profissão" style={estilo.input} placeholderTextColor="#999" value={profissao} onChangeText={setProfissao} />
            <TextInput placeholder="Comentário adicional" multiline numberOfLines={4} style={[estilo.input, { height: 80, textAlignVertical: 'top' }]} placeholderTextColor="#999" value={comentario} onChangeText={setComentario} />

            <Text style={estilo.label}>Nível de interesse</Text>
            <View style={estilo.pickerWrapper}>
              <Picker selectedValue={nivel} onValueChange={setNivel} style={estilo.picker} dropdownIconColor="#fff">
                <Picker.Item label="Baixo" value="baixo" />
                <Picker.Item label="Médio" value="medio" />
                <Picker.Item label="Alto" value="alto" />
              </Picker>
            </View>

            <Text style={estilo.label}>Área de atuação</Text>
            <View style={estilo.pickerWrapper}>
              <Picker selectedValue={area} onValueChange={setArea} style={estilo.picker} dropdownIconColor="#fff">
                <Picker.Item label="Tecnologia" value="tecnologia" />
                <Picker.Item label="Educação" value="educacao" />
                <Picker.Item label="Saúde" value="saude" />
                <Picker.Item label="Outros" value="outros" />
              </Picker>
            </View>

            <Text style={estilo.label}>Interesse no carro: {interesse}%</Text>
            <Slider value={interesse} onValueChange={setInteresse} minimumValue={0} maximumValue={100} step={5} minimumTrackTintColor="#0af" thumbTintColor="#0af" />

            <Text style={estilo.label}>Conhecimento no tema: {conhecimento}%</Text>
            <Slider value={conhecimento} onValueChange={setConhecimento} minimumValue={0} maximumValue={100} step={5} minimumTrackTintColor="#0af" thumbTintColor="#0af" />

            <View style={estilo.switches}>
              <Text style={{ color: '#fff' }}>Receber notificações</Text>
              <Switch value={notificar} onValueChange={setNotificar} />
            </View>

            <View style={estilo.switches}>
              <Text style={{ color: '#fff' }}>Compartilhar para pesquisa</Text>
              <Switch value={pesquisa} onValueChange={setPesquisa} />
            </View>

            <TouchableOpacity style={estilo.botaoVerde} onPress={enviarFormulario}>
              <Text style={{ color: '#fff', fontWeight: 'bold' }}>Enviar</Text>
            </TouchableOpacity>
            {enviado && <Text style={{ color: '#0f0', marginTop: 10 }}>Enviado com sucesso!</Text>}
          </View>

          <Text style={estilo.subtitulo}>Destaques Técnicos</Text>
          <FlatList
            data={carroSelecionado.destaques}
            keyExtractor={(item) => item.id}
            renderItem={renderDestaque}
            style={estilo.listaElenco}
            contentContainerStyle={estilo.listaElencoConteudo}
            ItemSeparatorComponent={() => <View style={estilo.separador} />}
          />

          <TouchableOpacity onPress={() => setCarroSelecionado(null)} style={estilo.botaoVoltar}>
            <Text style={{ color: 'white' }}>Voltar</Text>
          </TouchableOpacity>
        </ScrollView>
      ) : (
        <FlatList
          data={carros}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={estilo.card}>
              <Image source={{ uri: item.imagem }} style={estilo.imagem} />
              <Text style={estilo.nomeFilme}>{item.titulo}</Text>
              <Text style={estilo.descricao}>{item.sinopse}</Text>
              <TouchableOpacity onPress={() => setCarroSelecionado(item)} style={estilo.botao}>
                <Text style={{ color: 'white' }}>Ver Detalhes</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#121212',
  },
  titulo: {
    fontSize: 26,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  card: {
    backgroundColor: '#1e1e1e',
    borderRadius: 12,
    marginBottom: 20,
    padding: 15,
    elevation: 4,
  },
  imagem: {
    height: 160,
    borderRadius: 10,
    marginBottom: 10,
  },
  imagemGrande: {
    height: 250,
    width: '100%',
    borderRadius: 12,
    marginBottom: 10,
  },
  nomeFilme: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
    color: '#fff',
  },
  descricao: {
    textAlign: 'center',
    marginBottom: 10,
    color: '#ccc',
  },
  botao: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  botaoVoltar: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  subtitulo: {
    fontSize: 22,
    marginVertical: 10,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#1e1e1e',
    color: '#fff',
    padding: 12,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#333',
  },
  formulario: {
    width: '100%',
    backgroundColor: '#1a1a1a',
    padding: 16,
    borderRadius: 12,
    marginTop: 20,
  },
  label: {
    color: '#ccc',
    marginBottom: 6,
    marginTop: 10,
    fontSize: 14,
  },
  pickerWrapper: {
    backgroundColor: '#1e1e1e',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#333',
    marginBottom: 10,
  },
  picker: {
    color: '#fff',
  },
  botaoVerde: {
    backgroundColor: '#28a745',
    padding: 14,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  listaElenco: {
    width: '100%',
    marginTop: 10,
  },
  listaElencoConteudo: {
    paddingVertical: 10,
    paddingBottom: 30,
  },
  separador: {
    height: 10,
  },
  cardElenco: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
    padding: 12,
    borderRadius: 10,
    marginHorizontal: 4,
  },
  nomeAtor: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff',
  },
  switches: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    alignItems: 'center',
  },
});
