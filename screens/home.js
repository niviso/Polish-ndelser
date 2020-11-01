import React,{useState,useEffect,useContext} from 'react';
import { Button, View, Text,TextInput,Image,ScrollView,TouchableOpacity,Dimensions,StyleSheet,ActivityIndicator,RefreshControl } from 'react-native';
import Constants from 'expo-constants';
import Types from '../brott_types';
import {AppContext} from '../context/appContext';

function FetchData(){
  return fetch('https://polisen.se/api/events')
  .then(response => response.json())
  .then(data => {
    return data;
  });
}


export default function Home({ navigation, route }) {
  const [refreshing, setRefreshing] = useState(false);
  const [data,setData] = useState();
  const [state,setState] = useContext(AppContext);
  useEffect(()=>{
    navigation.setOptions({ title: 'Händelser i ' + state.region });
    if(!refreshing){
    onRefresh();
    console.log("UPDATE");
    }
  },[data,state.region]);

  const GetButtons = () => {
    if(!data){
      return;
    }
    const buttons = data.map(item =>
    <TouchableOpacity
      onPress={() => {
        // Pass params back to home screen
        navigation.navigate('Details', { item: item });
      }}
      key={item.id}
      style={{
        backgroundColor: 'white',
        width: '100%',
        height: 20,
        borderBottomWidth: 1,
        borderBottomStyle: 'solid',
        borderBottomColor: 'rgba(0,0,0,0.2)',
        height: 70,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10
      }}
    >
    <View style={{width: '15%', display: 'flex',justifyContent:'center',alignItems:'center'}}>
    <Text style={{fontSize: 18}}>
    {Types[item.type] || '🚨'}
    </Text>
    </View>
    <View style={{width: '65%'}}>
    <Text style={{width: '100%',fontSize: 20,color: 'black'}}>{item.name.split(', ')[1]}</Text>
    <Text style={{width: '100%',fontSize: 14,color: 'black',opacity: 0.5}}>{item.location.name}</Text>

    </View>
    <View style={{width: '15%', display: 'flex',justifyContent:'center',alignItems:'center'}}>
    <Text style={{fontSize: 12,color:'red'}}>Nyss</Text>
    </View>
    </TouchableOpacity>

  );
  return buttons;
}

const wait = (timeout) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

const onRefresh = () => {
  setRefreshing(true);
  FetchData().then(response => {
    setData(response);
    setRefreshing(false)
  });
};

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    }>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {GetButtons()}
      </View>
    </ScrollView>
  );
}
