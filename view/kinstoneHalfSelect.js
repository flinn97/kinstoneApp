
import React, { Component, useEffect, useState, } from 'react';

import lion from '../assets/lion1.jpeg'
import Elements from './elements';
import SelectedElements from './selectedElements';
import KinstoneHalfMap from './kinstoneHalfMap';

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
import CreateKinstoneHalf from './createKinstoneHalf';




 



export default class KinstoneHalfSelect extends Component {
  constructor(props) {
    super(props);
    
   
    this.state={
      

    };
  }

  
  

    

render(){
let app=this.props.app
let state= app.state

  return (
    <View style={{width:"100%", height:"100%", backgroundColor:"white", 
          display:"flex", position: "relative", 
           alignItems:"center"}}>

            {/* map out kinstone half */}
            <KinstoneHalfMap app={app} />
            {/* {state.elementsLoaded&&(
            <View style={{width:"100%", height:"100%", backgroundColor:"white", 
            display:"flex", 
             alignItems:"center"}}>
            {this.state.showKinstoneHalf?(<CreateKinstoneHalf app ={app} setBack={()=>{this.setState({showKinstoneHalf:false})}}/>):(
            <SelectedElements app={app}/>)}
            <Elements app={app}/>
            
            </View>)}
            {state.componentList.getList("selectedElement").length === 3 &&(
            <TouchableOpacity style={{position: "absoulute", bottom:50, zIndex:1000, backgroundColor:"purple", width:120, height:30}} onPress={async ()=>{
              let arr = state.componentList.getList("selectedElement")
              console.log(arr.length)
              let kinstoneHalfName = arr[0].getJson().name + arr[1].getJson().name + arr[2].getJson().name
              console.log(kinstoneHalfName)
              await state.opps.cleanJsonPrepareRun({addkinstonehalf:{name: kinstoneHalfName, type: "kinstonehalf", picURL: lion}})
              console.log(state.componentList.getList("kinstonehalf"))
              state.opps.cleanPrepareRun({del: arr})
              this.setState({showKinstoneHalf: true
              })}} ><Text style={{color:'white'}}>Merge</Text></TouchableOpacity>)} */}
            
          </View>

);
       
}

};



