import { useNavigation, useNavigationState } from '@react-navigation/native';
import React, { Component, useState, useEffect } from 'react';
import { Text, TextInput, Button, FlatList, ScrollView, View, StyleSheet, Image,Alert, TouchableOpacity, Touchable} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import DetailScreen from "./DetailScreen";

function HomeScreen({navigation}) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/' ,
            {
                method: "get",
                headers: {
                    Accept: 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
            }, 
        )
            .then((response) => response.json())
            .then((json) => setData(json.results))
            .catch((error) => console.error(error))
    }, []);


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-star', backgroundColor: '#000' }}>
            <View style={{ height: 50, backgroundColor: '#282828', alignItems:'center' }}>
                <Text style={{ color: '#E488A1', fontWeight: 'bold', fontSize: 24}}>The Rick & Morty</Text>
            </View>

            <FlatList vertical
                showsVerticalScrollIndicator={false}
                data={data}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    
                        <TouchableOpacity onPress={() => { navigation.navigate('Detail', item ) }}
                            style={{ margin: 10 }}> 
                                <Image
                                    source={{ uri: item.image }}
                                    style={{
                                        width: 300,
                                        height: 300,
                                        borderWidth: 5,
                                        borderRadius: 300,
                                        borderColor: '#E488A1',
                                        resizeMode: 'contain',
                                        backgroundColor: '#E488A1',                                        
                                    }}
                                />
                                <Text style={{ color: '#E488A1', textAlign: 'center', fontSize:25, fontWeight: 'bold', marginTop: 0, backgroundColor: '#282828'}}> {item.name}</Text>
                                <Text style={{ color: '#E488A1', textAlign: 'center', fontSize:15, fontWeight: 'bold', marginTop: 0, backgroundColor: '#282828' }}> . {item.status} .</Text>
                            
                        </TouchableOpacity>
                )}
            />
        </View>
    );
}


// ===============================CLASS COMPONENT=================
// class HomeScreen extends Component {

//     state = {
//         searchData: '',
//         dataCharacters: []
//     };


//     getData = () => {
//         fetch('https://rickandmortyapi.com/api/character/', {
//             method: 'get',
//             headers: {
//                 'Accept': 'application/json, text/plain, */*',  // It can be used to overcome cors errors
//                 'Content-Type': 'application/json'
//             },
//         })
//             .then((response) => response.json())
//             .then((json) => this.setState({ dataCharacters: json.results }, () => console.log(json)))
//             .catch((err) => console.log(err));
//     }

//     render = ({navigation}) => {
//         return (
//             <View style={{ flex: 1 }}>
//                 <View style={{ height: 70, backgroundColor: '#000', alignItems: 'center', justifyContent: 'center' }}>
//                     <Text style={{ color: '#E488A1', fontSize: 24, fontWeight: 'bold' }}>
//                         The Rick & Mock
//                     </Text>
//                 </View>

//                 <View style={{ flex: 3 }}>
//                     <View style={{ height: 90, backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
//                     </View>
//                     <FlatList vertical
//                         showsVerticalScrollIndicator={false}
//                         data={this.state.dataCharacters} keyExtractor={item => item.id.toString()}
//                         renderItem={({ item, index }) => (
//                             <View>
//                                 <Button style={{ backgroundColor: '#000', paddingHorizontal: 50, paddingVertical: 55, borderRadius: 10, elevation: 5 }}
//                                     onPress={() => this.props.navigation.navigate('Detail')}>
//                                     <View>
//                                         <Image
//                                             source={{ uri: item.image }}
//                                             style={{
//                                                 width: 200,
//                                                 height: 250,
//                                                 borderWidth: 2,
//                                                 borderRadius: 10,
//                                                 borderColor: '#E488A1',
//                                                 resizeMode: 'contain',
//                                             }}
//                                         />
//                                         <Text style={{ color: '#E488A1' }}>{item.name}</Text>
//                                         <Text style={{ color: '#E488A1' }}>{item.status}</Text>
//                                     </View>
//                                 </Button>
//                             </View>

//                         )}>

//                     </FlatList>
//                 </View>

//             </View>
//         );
//     }
// }

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

export default HomeScreen;