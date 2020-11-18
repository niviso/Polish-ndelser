// In App.js in a new project
import MapView,{Marker} from 'react-native-maps';
import React,{useState,useEffect} from 'react';
import { View, Text,Image,Dimensions,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import moment from 'moment';


export default function Details({ navigation, route }) {
  const {item} = route.params;
  useEffect(()=>{
    navigation.setOptions({ title: item.name.split(', ')[1]});
  },[])
  return (
    <View contentContainerStyle={{ width: '100%',height:'100%',display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
    <MapView initialRegion={{
      latitude: parseInt(item.location.gps.split(",")[0]),
      longitude: parseInt(item.location.gps.split(",")[1]),
      latitudeDelta: 0.1,
      longitudeDelta: 0.1,
    }} style={styles.mapStyle}>
    <Marker
  key={1}
  coordinate={{
    latitude: parseInt(item.location.gps.split(",")[0]),
    longitude: parseInt(item.location.gps.split(",")[1]),
  }}
      title={item.name.split(", ")[1]}
/>
</MapView>
    <View style={{padding: 20,borderTopWidth: 2,borderTopStyle: 'solid',borderTopColor:'black'}}>
    <Text style={{fontSize: 34,fontWeight: 'bold',textAlign:'left',paddingTop: 20,paddingBottom: 20}}>{item.name.split(", ")[1]}</Text>
    <Text style={{fontSize: 22,}}>{item.summary}</Text>
    <Text style={{paddingTop: 20,fontSize: 16}}>{item.name.split(",")[0]}</Text>
    </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height/3,
  },
});
