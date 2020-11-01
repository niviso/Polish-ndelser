import React from 'react';
import { Button,Text,Image,} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import SetRegion from '../components/setRegion';

export default function OnboardingScreen({ navigation, route }) {
  const Done = () => {
    navigation.navigate('Home');
  }
  return (
    <>
    <Onboarding
    nextLabel="Nästa"
    skipLabel="Hoppa över"
    containerStyles={{padding: 20,width: '100%',height: '100%'}}
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
          subtitle: 'Du kan välja reigon i ⚙ inställningar',
        },
      ]}
      onDone={() => Done()}
      onSkip={() => Done()}
    />

    </>


  );
}
