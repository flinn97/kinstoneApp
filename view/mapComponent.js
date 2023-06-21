
import React, { Component, useEffect, useState, } from 'react';


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




 



export default class MapComponent extends Component {
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
    <View style={{display:"flex", flexDirection:"row", flexWrap:"wrap", width:"100%", height:"100%"}}>
      <SafeAreaView style={{display:"flex", flexDirection:"row", flexWrap:"wrap", width:"100%", height:"100%"}}>
        <ScrollView>
          <View style={{display:"flex", flexDirection:"row", flexWrap:"wrap", width:"100%", height:"100%", justifyContent:"center"}}>
       {componentList.getList(this.props.name).map((obj, index)=>
       <TouchableOpacity key={index} onPress={()=>{
        if(this.props.func){
          this.props.func(obj)

        }
        }}><Image source={obj.getJson().picURL} style={{width:100, height:100}}></Image>
       <Text>{obj.getJson().name}</Text>
       </TouchableOpacity>
       )}
       </View>
       </ScrollView>
</SafeAreaView>
          </View>

);
       
}

};



