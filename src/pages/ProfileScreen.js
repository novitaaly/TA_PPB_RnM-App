import React, { Component, useState, useEffect } from 'react';
import { Text, TextInput, Button, FlatList, ScrollView, View, StyleSheet, Image, Alert, TouchableOpacity, Touchable } from 'react-native';

export default function ProfileScreen({ route, navigation }) {
const [githubData, setGithubData] = useState({});

const getGithubData = async () => {
    const response = await fetch("https://api.github.com/users/novitaaly");
    const data = await response.json();
    setGithubData(data);
};

useEffect(() => {
    getGithubData();
}, []);

return (
    <View style={{ flex:1, alignItems: 'center' }}>
        <Image
                            source={{
                                uri: githubData.avatar_url
                            }}
                            style={{ borderRadius: 150, width: 300, height: 300 }}
        />
        <Text>{githubData.name}</Text>
        <Text>{githubData.login}</Text>
    </View>
);
}