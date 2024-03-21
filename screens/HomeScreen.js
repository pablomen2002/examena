import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>APLICAIONES MOVILES HIBRIDAS</Text>
        <Button
          title="Materias"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    );
  };

export default HomeScreen

const styles = StyleSheet.create({})