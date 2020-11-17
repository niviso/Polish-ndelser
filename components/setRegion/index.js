import React,{useState,useContext} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import Kommuner from '../../api/kommuner';
import {AppContext} from '../../context/appContext';
import AsyncStorageHelper from '../../helpers/asyncStorageHelper';

export function UpdateRegion(setState,state,region){
  setState({...state,region: region});
  console.log("region",region);
  AsyncStorageHelper.set("@app:region",region);
}
export default function SetRegion(){
  const [state,setState] = useContext(AppContext);
  
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
        onChangeItem={(e) => UpdateRegion(setState,state,e.value)}
    />
    </>
  );
}
