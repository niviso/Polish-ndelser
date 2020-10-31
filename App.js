// In App.js in a new project
import MapView from 'react-native-maps';
import React,{useState,useEffect,useRef} from 'react';
import { Button, View, Text,TextInput,Image,ScrollView,TouchableOpacity,Dimensions,StyleSheet,ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from './components/icon';
import Home from './home';
import Details from './details';
import OnboardingScreen from './onboarding';
import SettingsScreen from './settings';




const Stack = createStackNavigator();

function App() {
  const navigationRef = useRef(null)
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Home"
      screenOptions={{
  headerBackTitle: "Tillbaka"
}}>
        <Stack.Screen name="Home" component={Home}
          options={{
          title: 'Händelser i Stockholm',
          headerRight: () => (
            <Button
              onPress={() => navigationRef.current?.navigate('Settings')}
              title="⚙"
              color="#fff"
            />
          ),
          headerLeft: null,
          headerStyle: {
            backgroundColor: '#1862a8',
          },
          headerTintColor: '#fff',
        }} />
        <Stack.Screen name="Details" component={Details}
          options={{
          headerStyle: {
            backgroundColor: '#b73a39',
          },
          headerTintColor: '#fff',
        }} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen}
          options={{
          title: 'Välkommen',
          headerStyle: {
            backgroundColor: '#0c3256',
          },
          headerTintColor: '#fff',
        }} />
        <Stack.Screen name="Settings" component={SettingsScreen}
          options={{
          title: 'Inställningar',
          headerStyle: {
            backgroundColor: '#0c3256',
          },
          headerTintColor: '#fff',
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
