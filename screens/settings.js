import React,{useState,useContext,useEffect} from 'react';
import { Button,Text,Image,Switch,View} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import DropDownPicker from 'react-native-dropdown-picker';
import Kommuner from '../api/kommuner';
import {AppContext} from '../context/appContext';
import SetRegion from '../components/setRegion';
import AsyncStorageHelper from '../helpers/asyncStorageHelper';


export default function SettingsScreen({ navigation, route }) {
  const [hasWorld,setWorld] = useState(false);
  const [state,setState] = useContext(AppContext)
  const UpdateRegion = (region) => {
    setState({...state,region: region,lastRegion: state.region});
    AsyncStorageHelper.set("@app:region",region);
  }

  const Update = (bool) => {
    setWorld(bool);
    if(bool){
      UpdateRegion('#');
    } else {
      UpdateRegion(state.lastRegion);
    }
  }


  useEffect(() => {
    setWorld(state.region.length === 0)
  },[]);

  return (
    <View style={{display: 'flex',justifyContent:'space-between',height: '100%',width: '100%',paddingBottom: 20}}>
    <View>
      <View style={{width: '100%',paddingLeft: 15,paddingRight: 15,height: 60,borderBottomColor:'black',borderBottomWidth: 2,borderBottomStyle: 'solid',display: 'flex',flexDirection: 'row',alignItems:'center',justifyContent:'space-between'}}>
      <Text style={{fontSize: 16}}>🌎 Se alla ärenden</Text>
      <Switch
        onValueChange={Update}
        value={hasWorld}
      />
      </View>
      <View style={{width: '100%',paddingLeft: 15,paddingRight: 15,height: 60,borderBottomColor:'black',borderBottomWidth: 2,borderBottomStyle: 'solid',display: 'flex',flexDirection: 'row',alignItems:'center',justifyContent:'space-between',opacity: hasWorld ? 0.5 : 1}} pointerEvents={hasWorld}>
      <Text style={{fontSize: 16}}>🗺️ Se ärenden i region: </Text>
      <View style={{width: '40%'}}>

      <SetRegion/>
      </View>
      </View>
    </View>
    <View>
    <View style={{padding: 10}}>
    <Text style={{fontSize: 14,opacity: 0.5}}>Appversion 1.0</Text>
    <Text style={{fontSize: 14,opacity: 0.5}}>Utgivare Nikki Sollid</Text>
    <Text style={{fontSize: 14,opacity: 0.5}}>Ikoner och bilder är skapade utav Flat Icons, www.flaticon.com</Text>
    </View>
    </View>
    </View>


  );
}
