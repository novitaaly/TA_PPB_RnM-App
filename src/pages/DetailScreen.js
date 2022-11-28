import { useNavigation } from '@react-navigation/native';
import React, { Component, useState, useEffect } from 'react';
import { Text, TextInput, Button, FlatList, ScrollView, View, StyleSheet, Image, Alert, TouchableOpacity, Touchable } from 'react-native';
import HomeScreen from './HomeScreen';


function DetailScreen({ route, navigation }) {
    /* Get the param */
    const { name, image, status, species, gender} = route.params;

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', backgroundColor: '#000' }}>

            <ScrollView>
                showsVerticalScrollIndicator={false}
                <Image
                    source={{ uri: image }}
                    style={{
                        top: 15,
                        width: 360,
                        height: 360,
                        borderWidth: 2,
                        borderRadius: 10,
                        borderColor: '#E488A1',
                        //resizeMode: 'contain',
                        backgroundColor: '#E488A1',
                    }} />
                <Text></Text>    
                
                <Text style={styles.txtP}></Text>
                <Text style={styles.txtP}>Nama: {name}</Text>
                <Text style={styles.txtP}>Status: {status}</Text>
                <Text style={styles.txtP}>Species: {species}</Text>
                <Text style={styles.txtP}>Gender: {gender}</Text>
               
                <View style={{ margin: 50, backgroundColor: '#E488A1' }}>
                    {/* <Button title="Go to Home" onPress={() => navigation.navigate('Home')} /> */}
                    <Button title="Go Back" onPress={() => navigation.goBack()} color='#E488A1' />
                </View>

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    txtP: {
        color: '#E488A1',
        fontSize: 25,
        fontWeight: "bold",
        marginTop: 30,
        textAlign: 'center', 
        backgroundColor: '#282828',

        borderWidth:'5',
        borderRadius: '10',
        borderColor:'#282828',
    }
})

export default DetailScreen;