import React from 'react';
import {View, Text, Image, Button} from 'react-native';
import { ScrollView } from 'react-native';

export default function AboutScreen({navigation}) {
    return (
        <ScrollView>
            <View style={{ flex:1,  }}>
            <View style={{ height: 900, justifyContent: 'center', alignItems: 'center', backgroundColor: '#grey' }}>
                <Image 
                source = {{ uri: 'https://flxt.tmsimg.com/assets/p10376284_b_v13_ba.jpg' }}
                style={{
                    width: 432,
                    height: 576,
                    // borderWidth: 5,
                    // borderRadius: 300,
                    // borderColor: '#E488A1',
                    // resizeMode: 'contain',
                    backgroundColor: '#E488A1', }}
                />
                <Text style={{ color: '#E488A1', padding : 15,textAlign:'justify' }}>
                Rick and Morty is an American adult animated science-fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's nighttime programming block Adult Swim. It is distributed internationally by Warner Bros. Domestic Television. The series follows the misadventures of cynical mad scientist Rick Sanchez and his good-hearted but fretful grandson Morty Smith, who split their time between domestic life and interdimensional adventures that take place across an infinite number of realities, often travelling to other planets and dimensions through portals and on Rick's flying saucer. The general concept of Rick and Morty relies on two conflicting scenarios: domestic family drama, and an alcoholic grandfather dragging his grandson into hijinks.
                </Text>
                <View style={{ margin: 30 }}>                   
                    <Button title="Go to My Profile" onPress={() => navigation.navigate('Profile')} color='#E488A1' />
                </View>
                <Text style={{  color: '#E488A1' }}>Copyright © 2022 Novita Auliya</Text>
            </View>
        </View>
        </ScrollView>         
    );
}