import React,{useState,useEffect,useContext} from 'react';
import { View, Text,ScrollView,TouchableOpacity,ActivityIndicator,RefreshControl } from 'react-native';
import Types from '../api/brott_types';
import {AppContext} from '../context/appContext';
import moment from 'moment';
import 'moment/locale/sv';
import {FetchData} from '../api/fetch';
import AsyncStorageHelper from '../helpers/asyncStorageHelper';

export default function Home({ navigation, route }) {
  const [refreshing, setRefreshing] = useState(false);
  const [state,setState] = useContext(AppContext);
  const [loaded,setLoaded] = useState(false);
  useEffect(()=>{
    AsyncStorageHelper.get("@app:region").then(result => {
      setLoaded(true);
      setState({...state,region: result || ''});
    });
    navigation.setOptions({ title: 'Händelser i ' + (state.region.length === 0 ? 'hela Sverige' : state.region) });

    if(!refreshing && loaded){
    onRefresh();
    }
  },[state.region]);

  const GetButtons = () => {

    const GetDate = (date) => {
      date = date.split(" +")[0];

      if(!moment(date).isValid()){
        date = date.replace(" "," 0");
      }
      date = moment(date).fromNow();
      return date.substr(0,1).toUpperCase() + date.substr(1,date.length -1 );
    }
    const buttons = state.data.map(item =>
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
    <Text style={{fontSize: 24}}>
    {Types[item.type] || '🚨'}
    </Text>
    </View>
    <View style={{width: '55%'}}>
    <Text style={{width: '100%',fontSize: 16,color: 'black'}}>{item.name.split(', ')[1]}</Text>
    <Text style={{width: '100%',fontSize: 12,color: 'black',opacity: 0.5}}>{item.location.name}</Text>

    </View>
    <View style={{width: '30%', display: 'flex',justifyContent:'center',alignItems:'center'}}>
    <Text style={{fontSize: 10,color:'black',opacity: 0.9, width:'100%'}}>{GetDate(item.datetime)}</Text>
    </View>
    </TouchableOpacity>

  );
  return buttons;
}

const onRefresh = () => {

  setRefreshing(true);
  FetchData(state.region).then(response => {
    let tmpState = JSON.parse(JSON.stringify(state));
    state.data = response;
    setState(state);
    setRefreshing(false);
    AsyncStorageHelper.get("appdata").then(data => {
      data = JSON.parse(data);
      if(data && response){
        if(response[0].id != data[0].id){
          AsyncStorageHelper.set("appdata",JSON.stringify(response));
        }
      }
      if(!data){
        AsyncStorageHelper.set("appdata",JSON.stringify(response));
      }
    });
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
