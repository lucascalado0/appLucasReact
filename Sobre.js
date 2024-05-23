import React from 'react';
import { View, Text, StyleSheet } from 'react-native';




const Sobre = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Sobre mim</Text>
            <Text style={styles.texto}>Texto genérico</Text>
            <Text style={styles.hr}>______________________________________________________</Text>
            <Text style={styles.titulo}>Formação</Text>
            <Text style={styles.texto}>FACULDADE SENAC PERNAMBUCO</Text>
            <Text style={styles.texto}>Março de 2023 - PRESENTE</Text>
            <Text style={styles.hr}>______________________________________________________</Text>
            <Text style={styles.titulo}>Habilidades</Text>
            <Text style={styles.hr}>______________________________________________________</Text>
            <Text style={styles.titulo}>Idiomas</Text>



            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    texto: {
        fontSize: 15,
    },
    hr: {
        width: '100%', // Ajuste conforme necessário
        height: 2, // Altura da linha
        backgroundColor: '#000', // Cor da linha
        marginVertical: 20, // Espaço acima e abaixo da linha
    },
});

export default Sobre;
