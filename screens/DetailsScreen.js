import { Button, Text, View, StyleSheet } from 'react-native';
import React from 'react';
import MateriasList from '../components/MateriasList'; 

const DetailsScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>
                Lista de materias
            </Text>

            <Text style={styles.title}>ING.SISTEMAS COMPUTACIONALES</Text>
            <MateriasList numeroCarrera={1} />

            <Text style={styles.title}>ING. TECNOLOGIAS DE LA INFORMACION</Text>
            <MateriasList numeroCarrera={2} />

            <Button
                title="REGRESAR"
                onPress={() => navigation.goBack()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
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
    
});

export default DetailsScreen;
