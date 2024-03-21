// components/MateriasList.js
import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

const MateriasList = ({ numeroCarrera }) => {
    const materiasCarrera1 = ['Matemáticas', 'Aplicaciones Moviles', 'Base de datos', 'Automatas', 'Ingeniería de software'];
    const materiasCarrera2 = ['Programación', 'Algoritmos', 'Bases de Datos', 'Redes', 'Sistemas Operativos'];

    const listaMaterias = numeroCarrera === 1 ? materiasCarrera1 : materiasCarrera2;

    const renderItem = ({ item }) => (
        <View style={[styles.itemContainer, { backgroundColor: numeroCarrera === 1 ? '#bfefff' : '#ffb3e6' }]}>
            <Text style={styles.item}>{item}</Text>
        </View>
    );

    return (
        <FlatList
            data={listaMaterias}
            renderItem={renderItem}
            keyExtractor={(item, index) => `carrera-${numeroCarrera}-${index}`}
        />
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        borderRadius: 5,
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 16,
    },
    item: {
        fontSize: 18,
    },
});

export default MateriasList;
