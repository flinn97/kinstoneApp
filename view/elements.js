
import React, { Component, useEffect, useState, } from 'react';
import MapComponent from './mapComponent';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  Image,
} from 'react-native';




 



export default class Elements extends Component {
  constructor(props) {
    super(props);
    
   
    this.state={
      
    };
  }



render(){
    let app=this.props.app;
    let state = app.state;
    let componentList= state.componentList;


  return (
    <View style={{width:"100%", backgroundColor:"white",  height:100,
          display:"flex", justifyContent:"center",
           alignItems:"center"}}>
        <MapComponent app={app} name="element" func={ async (obj)=>{

            if(componentList.getList("selectedElement").length<3){
            console.log(componentList.getList("selectedElement").length)
                await state.opps.cleanJsonPrepareRun({addselectedElement:{name:obj.getJson().name, picURL:obj.getJson().picURL, type:"selectedElement"}})

            }
        }}/>
          </View>

);
       
}

};



