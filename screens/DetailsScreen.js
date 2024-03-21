import { Button, Text, View, FlatList, StyleSheet } from 'react-native';
import React from 'react';

const materiasCarrera1 = ['Matemáticas', 'Física', 'Química', 'Historia', 'Literatura'];
const materiasCarrera2 = ['Programación', 'Algoritmos', 'Bases de Datos', 'Redes', 'Sistemas Operativos'];

const DetailsScreen = ({ navigation }) => {

    const renderItem = ({ item }) => (
        <Text style={styles.item}>{item}</Text>
    );

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <Text style={styles.header}>
                Lista de materias
            </Text>

            <Text style={styles.title}>Carrera 1</Text>
            <FlatList
                data={materiasCarrera1}
                renderItem={renderItem}
                keyExtractor={(item, index) => 'carrera1-' + index}
            />

            <Text style={styles.title}>Carrera 2</Text>
            <FlatList
                data={materiasCarrera2}
                renderItem={renderItem}
                keyExtractor={(item, index) => 'carrera2-' + index}
            />

            <Button
                title="Go back to Home"
                onPress={() => navigation.goBack()}
            />
        </View>
    );
};

export default DetailsScreen;

const styles = StyleSheet.create({
    header: {
        width: '100%',
        padding: 16,
        fontSize: 26,
        fontWeight: 'bold',
        color: '#fff',
        backgroundColor: '#4E9F3D',
        textAlign: 'center',
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20,
        marginLeft: 16,
    },
    item: {
        fontSize: 18,
        marginTop: 10,
        marginLeft: 16,
    },
});
