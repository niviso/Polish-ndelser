import React,{useState,useContext} from 'react';
import Kommuner from '../../api/kommuner';
import {AppContext} from '../../context/appContext';
import AsyncStorageHelper from '../../helpers/asyncStorageHelper';
import { StyleSheet, Text, View, TextInput } from "react-native";
import RNPickerSelect from 'react-native-picker-select';

export default function SetRegion(){
  const [state,setState] = useContext(AppContext);


  const UpdateRegion = (region) => {
    setState({...state,region: region,lastRegion: state.region});
    AsyncStorageHelper.set("@app:region",region);
  }

  const GetLabels = () => {
    const Labels = [];
    Kommuner.map((kommun) => Labels.push({label: kommun, value: kommun}));
    Labels.push({label: 'Hela Sverige', value: '#'});
    return Labels;

  }
    const Labels = GetLabels();
    return (
      <>
      <RNPickerSelect
          onValueChange={UpdateRegion}
          items={Labels}
          value={state.region}
      />
      </>
    );

}
