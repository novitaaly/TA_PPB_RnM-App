import React, { Component, useState, useEffect } from 'react';
import { Text, TextInput, Button, FlatList, ScrollView, View, StyleSheet, Image,Alert, TouchableOpacity, Touchable} from 'react-native';
//import { SafeAreaView } from "react-native-safe-area-context";


class EpisodeScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
            searchData: '',
            dataCharacters: []
        };
    }

    getData = () => {
        fetch('https://rickandmortyapi.com/api/episode/?name=' + this.state.searchData,{
                method: 'get',
                headers: {
                'Accept': 'application/json, text/plain, */*',  // It can be used to overcome cors errors
                'Content-Type': 'application/json'
                },
        } )
        .then((response) => response.json())
        .then((json) => this.setState({dataCharacters: json.results}, ()=> console.log(json)))
        .catch((err) => console.log(err));
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 3 }}>
                    <View style={{ height: 90, backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <View >
                            <TextInput placeholder='Cari Siapa'
                                onChangeText={(value) => this.setState({ searchData: value })}
                                style={{
                                    width: 200,
                                    borderBottomColor: '#E488A1',
                                    marginVertical: 8,
                                    marginHorizontal: 20,
                                    paddingHorizontal: 10,
                                    borderBottomWidth: 1,
                                }}
                            />

                        </View>
                        <View >
                            <TouchableOpacity style={{ backgroundColor: '#000', paddingHorizontal: 15, paddingVertical: 13, borderRadius: 10, elevation: 5 }}
                                onPress={() => this.getData()}>
                                <Text style={{ color: '#E488A1', fontWeight: '600' }}>Search</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <FlatList vertical
                        showsVerticalScrollIndicator={false}
                        style={{ backgroundColor: '#000' }}
                        data={this.state.dataCharacters} keyExtractor={item => item.id.toString()}
                        renderItem={({ item, index }) => (
                                <View style={{ margin : 10, backgroundColor: '#282828'}}>
                                
                                <Text style={{ color: '#E488A1' }}>{item.episode}</Text>

                            </View>
                            
                            
                        )}>

                    </FlatList>
                </View>
                
            </View>
        );
    }
}


const styles = StyleSheet.create({
        headerTitle:{
            flex:1,
            height: 120,
            backgroundColor: '#fff',
            alignItems : 'flex-start'
    
        },
        title :{
            fontSize: 18,
            fontWeight: "bold",
            color: "#000"
        },
        image: {
            height: 60,
            width: 60,
            borderRadius: 15,
            padding :10
        },
        list:{
            flex: 1, 
            backgroundColor: '#fff',
            flexDirection: 'row', 
            justifyContent: 'center', 
            alignItems: 'center'
        }
    
    }
    )
    
export default EpisodeScreen;
