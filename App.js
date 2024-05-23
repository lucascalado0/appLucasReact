import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Home from './Home';
import Sobre from './Sobre';

const App = () => {
  const [abaAtiva, setAbaAtiva] = useState('Home');

  const renderizarConteudo = () => {
    if (abaAtiva === 'Home') {
      return <Home />;
    } else if (abaAtiva === 'Sobre') {
      return <Sobre />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.nomeLucas}>Currículo</Text>
      </View>
      {/* Área para renderizar os componentes */}
      <View style={styles.content}>{renderizarConteudo()}</View>
      {/* Menu inferior */}
      <View style={styles.menu}>
        <Text
          style={[styles.menuItem, abaAtiva === 'Home' && styles.menuItemAtiva]}
          onPress={() => setAbaAtiva('Home')}
        >
          Home
        </Text>
        <Text
          style={[styles.menuItem, abaAtiva === 'Sobre' && styles.menuItemAtiva]}
          onPress={() => setAbaAtiva('Sobre')}
        >
          Currículo
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  nomeLucas: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  menuItem: {
    fontSize: 18,
    color: '#333',
  },
  menuItemAtiva: {
    fontWeight: 'bold',
    color: 'blue',
  },
});

export default App;
