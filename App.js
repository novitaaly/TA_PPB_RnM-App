import * as React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native'; //Button, Text, View,
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import HomeScreen from './src/pages/HomeScreen';
import AboutScreen from './src/pages/AboutScreen';
import EpisodeScreen from './src/pages/EpisodeScreen';
import DetailScreen from './src/pages/DetailScreen';
import ProfileScreen from './src/pages/ProfileScreen';

const HomeStack = createNativeStackNavigator();
function HomeStackScreen  () {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Detail" component={DetailScreen} />
    </HomeStack.Navigator>
  );
}
const AboutStack = createNativeStackNavigator();
function AboutStackScreen() {
  return (
    <AboutStack.Navigator>
      <AboutStack.Screen name="About" component={AboutScreen} options={{ headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#e15f41',
        }
      }} />
      <AboutStack.Screen name="Profile" component={ProfileScreen} options={{ headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#e15f41',
        }
      }} />
    </AboutStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-list' : 'ios-list-outline';
          } else if (route.name === 'Episode') {
            iconName = focused ? 'ios-caret-forward-circle' : 'ios-caret-forward-circle-outline';
          } else if (route.name === 'About') {
            iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
          } 

          // You can return any component that you like here!
          return <Ionicons name={iconName}  color={color} size={size}/>;
        },
        tabBarActiveTintColor: 'pink',
        tabBarInactiveTintColor: 'gray',
        // headerShown: false
      })}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} options={{ headerShown: false }}/>
        <Tab.Screen name="Episode" component={EpisodeScreen} />
        <Tab.Screen name="About" component={AboutStackScreen} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  txtP:{
    color: '#E488A1',
    fontSize: 18,
    fontWeight: "bold",
  }
})