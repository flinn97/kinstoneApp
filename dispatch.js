
import React, { Component, useEffect, useState, } from 'react';
import ComponentListInterface from './npm/componentListInterface';
import { getComponents } from './models/myComponents';
import lion from './assets/lion1.jpeg'
import Elements from './view/elements';
import auth from './services/auth';
import SelectedElements from './view/selectedElements';
import KinstoneHalfSelect from './view/kinstoneHalfSelect';
import NavBar from './view/navBar';
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
import CreateKinstoneHalf from './view/createKinstoneHalf';
import ElementSelect from './view/elementSelect';




 



class Dispatch extends Component {
  constructor(props) {
    super(props);
    
   
    this.state={
      

    };
  }

  
  

    

render(){
let app=this.props.app
let state= app.state

  return (
    <View style={{width:"100%", height:"100%", backgroundColor:"white", position:"relative", display:'flex', flexDirection:"column", alignItems:"center"
         }}>
           
          
          {switchCase(this.props)}
          <View style={{position:'absolute', bottom:0, borderTopColor:"black", borderTopWidth:1, width:"100%", height:50}}>
            <NavBar app= {app}/></View>
            {state.componentList.getList("selectedElement").length === 3 &&(
            <TouchableOpacity style={{position: "absoulute", bottom:50, zIndex:1000, backgroundColor:"purple", width:120, height:30}} onPress={async ()=>{
              let arr = state.componentList.getList("selectedElement");
              let kinstoneHalfName = arr[0].getJson().name + arr[1].getJson().name + arr[2].getJson().name
              await state.opps.cleanJsonPrepareRun({addkinstoneHalf:{name: kinstoneHalfName, type: "kinstoneHalf", picURL: lion}})
              console.log(state.componentList.getList("kinstoneHalf").length)
              state.opps.cleanPrepareRun({del: arr})
              app.dispatch({showKinstoneHalf: true
              })}} ><Text style={{color:'white'}}>Merge</Text></TouchableOpacity>)}
        
          </View>

);
       
}

};

function switchCase(props){
  let app = props.app;
  let obj = {
    elementSelect: <ElementSelect app={app} />,
    kinstoneHalfSelect: <KinstoneHalfSelect app={app}  />
  }

  return obj[app.state.switchCase]

}


export default Dispatch;

