import React from 'react';
import { Button,Text,Image,} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

export default function OnboardingScreen({ navigation, route }) {
  const Done = () => {
    navigation.navigate('Home');
  }
  return (
    <>
    <Onboarding
    nextLabel="Nästa"
    skipLabel="Hoppa över"
      pages={[
        {
          backgroundColor: '#fff',
          image: <Image source={require('./assets/icons/private_investigator_2.png')} style={{width: 200,height: 200,marginTop: -200}}/>,
          title: 'Polishändelser',
          subtitle: 'Få de senaste uppdateringarna om ditt område!',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={require('./assets/icons/gps.png')} style={{width: 200,height: 200,marginTop: -200}}/>,
          title: 'Sätt region',
          subtitle: <Button title="Välj region"/>,
        },
      ]}
      onDone={() => Done()}
      onSkip={() => Done()}
    />

    </>


  );
}
