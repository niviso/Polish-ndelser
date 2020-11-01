import React,{useState,useContext} from 'react';
import { Button,Text,Image,Switch,View} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import DropDownPicker from 'react-native-dropdown-picker';
import Kommuner from '../kommuner';
import {AppContext} from '../context/appContext';
import SetRegion from '../components/setRegion';
export default function SettingsScreen({ navigation, route }) {
  const [hasPush,setHasPush] = useState(false);
  const [state,setState] = useContext(AppContext);

  return (
    <View style={{display: 'flex',justifyContent:'space-between',height: '100%',width: '100%',paddingBottom: 20}}>
    <View>
      <View style={{width: '100%',paddingLeft: 15,paddingRight: 15,height: 60,borderBottomColor:'black',borderBottomWidth: 2,borderBottomStyle: 'solid',display: 'flex',flexDirection: 'row',alignItems:'center',justifyContent:'space-between'}}>
      <Text style={{fontSize: 18}}>🔔 Pushnotiser</Text>
      <Switch
        onValueChange={setHasPush}
        value={hasPush}
      />
      </View>
      <View style={{width: '100%',paddingLeft: 15,paddingRight: 15,height: 60,borderBottomColor:'black',borderBottomWidth: 2,borderBottomStyle: 'solid',display: 'flex',flexDirection: 'row',alignItems:'center',justifyContent:'space-between'}}>
      <Text style={{fontSize: 18}}>🗺️ Region: </Text>

      <SetRegion/>
      </View>
    </View>
    <View>
    <View style={{padding: 10}}>
    <Text style={{fontSize: 14,opacity: 0.5}}>Appversion 1.0</Text>
    <Text style={{fontSize: 14,opacity: 0.5}}>Utgivare Nikki Sollid</Text>
    <Text style={{fontSize: 14,opacity: 0.5}}>Ikoner är skapade utav Flat Icons, www.flaticon.com</Text>
    </View>
    </View>
    </View>


  );
}
