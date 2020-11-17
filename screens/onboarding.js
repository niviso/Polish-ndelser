import React from 'react';
import { Button,Text,Image,} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import SetRegion from '../components/setRegion';
import AsyncStorageHelper from '../helpers/asyncStorageHelper';

export default function OnboardingScreen({ navigation, route }) {
  const Done = () => {
    navigation.navigate('Home');
    AsyncStorageHelper.set("@app:onboarding","done");
  }
  return (
    <>
    <Onboarding
    nextLabel="Nästa"
    skipLabel="Hoppa över"
    containerStyles={{padding: 10,width: '100%',height: '100%'}}
    subTitleStyles={{height: '30%'}}
      pages={[
        {
          backgroundColor: '#fff',
          image: <Image source={require('../assets/icons/private_investigator_2.png')} style={{width: 200,height: 200}}/>,
          title: 'Polishändelser',
          subtitle: 'Få de senaste uppdateringarna om ditt område!',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={require('../assets/icons/gps.png')} style={{width: 200,height: 200}}/>,
          title: 'Se uppdateringar direkt ifrån ditt område',
          subtitle: 'Du kan välja reigon i ⚙ inställningar.',
        },{
            backgroundColor: '#fff',
            image: <Image source={require('../assets/icons/Stalk.png')} style={{width: 200,height: 200,marginLeft: 60}}/>,
            title: 'Använd appen ansvarsfullt',
            subtitle: 'Stör aldrig poliser i deras arbete.',
          },
      ]}
      onDone={() => Done()}
      onSkip={() => Done()}
    />

    </>


  );
}
