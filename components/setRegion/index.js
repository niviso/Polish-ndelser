import React,{useState,useContext} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import Kommuner from '../../kommuner';
import {AppContext} from '../../context/appContext';


export default function SetRegion(){
  const [state,setState] = useContext(AppContext);

  const Update = (value) => {
    setState({...state,region: value.value});
  }
  const GetLabels = () => {
    const Labels = [];
    Kommuner.map((kommun) => Labels.push({label: kommun, value: kommun}));
    return Labels;
  }
  return(
    <>
    <DropDownPicker
        items={GetLabels()}
        searchable
        searchablePlaceholder="Sök efter din kommun"
        defaultValue={state.region}
        containerStyle={{height: 40,width: '100%'}}
        style={{backgroundColor: '#fafafa', width: '100%'}}
        itemStyle={{
            justifyContent: 'flex-start'
        }}
        dropDownStyle={{backgroundColor: '#fafafa',width: '100%'}}
        onChangeItem={Update}
    />
    </>
  );
}
