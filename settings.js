import React,{useState} from 'react';
import { Button,Text,Image,Switch,View} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import DropDownPicker from 'react-native-dropdown-picker';
import Kommuner from './kommuner';
export default function SettingsScreen({ navigation, route }) {
  const [hasPush,setHasPush] = useState(false);
  const SetRegion = (value) => {

  }
  const GetLabels = () => {
    const Labels = [];
    Kommuner.map((kommun) => Labels.push({label: kommun, value: kommun}));
    return Labels;
  }
  return (
    <>
    <View style={{width: '100%',paddingLeft: 15,paddingRight: 15,height: 60,borderBottomColor:'black',borderBottomWidth: 2,borderBottomStyle: 'solid',display: 'flex',flexDirection: 'row',alignItems:'center',justifyContent:'space-between'}}>
    <Text style={{fontSize: 18}}>🔔 Pushnotiser</Text>
    <Switch
      onValueChange={setHasPush}
      value={hasPush}
    />
    </View>
    <View style={{width: '100%',paddingLeft: 15,paddingRight: 15,height: 60,borderBottomColor:'black',borderBottomWidth: 2,borderBottomStyle: 'solid',display: 'flex',flexDirection: 'row',alignItems:'center',justifyContent:'space-between'}}>
    <Text style={{fontSize: 18}}>🗺️ Region: </Text>

    <DropDownPicker
        items={GetLabels()}
        defaultValue='Stockholm'
        containerStyle={{height: 40,}}
        style={{backgroundColor: '#fafafa', width: 180}}
        itemStyle={{
            justifyContent: 'flex-start'
        }}
        dropDownStyle={{backgroundColor: '#fafafa'}}
        onChangeItem={SetRegion}
    />
    </View>
    <View style={{padding: 10}}>
    <Text style={{fontSize: 14,opacity: 0.5}}>Appversion 1.0</Text>
    <Text style={{fontSize: 14,opacity: 0.5}}>Utgivare Nikki Sollid</Text>

    </View>
    </>


  );
}
