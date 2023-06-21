
import React, { Component, useEffect, useState, } from 'react';
import MapComponent from './mapComponent';
import lion from '../assets/lion1.jpeg'

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




 



export default class CreateKinstoneHalf extends Component {
  constructor(props) {
    super(props);
    this.menuSlide = this.menuSlide.bind(this)
   
    this.state={
      marginLeft:0,
    };
  }
  componentDidMount(){
    this.menuSlide()
  }
  async menuSlide(){
    
   
       
      for(let i=0; i<=50; i+=1){
        const delay = ms => new Promise(res => setTimeout(res, ms));
                await delay(1);
                let margin = this.state.marginLeft;
        await this.setState({marginLeft: margin + 15})
      }
      this.props.setBack()
    }
    
  


render(){
    let app=this.props.app;
    let state = app.state;
    let componentList= state.componentList;


  return (
    <View style={{width:"100%", backgroundColor:"white",  height:"40%", 
          display:"flex", justifyContent:"center",
           alignItems:"center"}}>
           <Image source={lion} style={{marginLeft: this.state.marginLeft, width: 150, height: 150}}></Image>
          </View>

);
       
}

};



