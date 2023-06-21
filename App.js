
import React, { Component, useEffect, useState, } from 'react';
import ComponentListInterface from './npm/componentListInterface';
import { getComponents } from './models/myComponents';
import dragon1 from './assets/dragon1.jpeg'
import dragon2 from './assets/dragon2.jpeg'
import dragon3 from './assets/dragon3.jpeg'
import dragon4 from './assets/dragon4.jpeg'
import dragon5 from './assets/dragon5.jpeg'
import dragon6 from './assets/dragon6.png'
import dragon7 from './assets/dragon7.png'
import dragon8 from './assets/dragon8.jpeg'
import dragon9 from './assets/dragon9.png'
import Elements from './view/elements';
import auth from './services/auth';
import SelectedElements from './view/selectedElements';
import Dispatch from './dispatch';

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




 



class App extends Component {
  constructor(props) {
    super(props);
    
    this.dispatch=this.dispatch.bind(this);
    this.menuSlide=this.menuSlide.bind(this);
    this.state={
      // styles: styleService.getstyles(),
      // formStyles: spawnForms.getformStyles(),
      // picMap: picMap.getpicmapstyles(), 
      // navStyles: navStyles.getnavstyles(),
      arr:[],
      pic: undefined,
      index: 0,
      nextPic: undefined,
      user: undefined,
      operate: "",
      operation: "",
      positionSideBar: -300,
      switchCase: "elementSelect",
      object: undefined,
      componentListInterface: new ComponentListInterface(this.dispatch),
      componentList: undefined,
      currentComponent: undefined,
      myswitch: "feed",
      fontsLoaded:false,
      
      center:{
        display:"flex", justifyContent:"center", alignItems:"center"
      }

    };
  }

  async menuSlide(){
    
    if(this.state.positionSideBar===-300){
      this.setState({
        positionSideBar:0,
        fog:true,          
      })
      // for(let i=-300; i<=0; i+=50){
      //   const delay = ms => new Promise(res => setTimeout(res, ms));
      //           await delay(1);
        
      // }
    }
    else{
      this.setState({
        positionSideBar:-300,
        fog:false
      })
      // for(let i=0; i>=-300; i-=50){
       
      //   const delay = ms => new Promise(res => setTimeout(res, ms));
      //           await delay(1);
       
      // }
    }
  }
  async componentDidMount(){
   
    this.setState({fontsLoaded:true})
    let list;
        if(this.state.componentList===undefined && this.state.componentListInterface!==undefined){
            
            list = await this.state.componentListInterface.createComponentList();
            let opps = list.getOperationsFactory();
            await this.setState({
                componentList:list,
                opps:opps
            })
            let factory= this.state.componentListInterface.getFactory()
           await factory.addMultipleToFactory(getComponents());
        
        let user = this.state.user
        
        await auth.setComponentList(list)
        await auth.setInitialElements();
        this.setState({elementsLoaded:true})
        try {
      
        //   const value = await AsyncStorage.getItem('@userKey');
        //   if (value !== null && value!==undefined && value!=="{}") {
        //     const json = JSON.parse(value);
        //     await auth.getAllTheDataForTheUser(json.email, this.state.componentList, this.dispatch);
        //     await auth.getAllComments(this.state.componentList);
        //     await auth.getAllUsers(this.state.componentList)

        //     this.setState({start:true})
        //     auth.saveToken(json.email);
        //     auth.checkToken(json.email);
        // }
      }
        catch (error) {
          // console.log("error,", error)
        }
        

       
  }
}
  dispatch(obj){
    this.setState({...obj})
  }
  async componentDidUpdate(props, state){
    
        
  
    if(this.state.backend!==undefined ){
        // await this.setState({backend: undefined, updateCircle:true});
        // auth.dispatch(this.state.backendUpdate, this.state.email);  
        // for(const key in this.state.backendUpdate){
        //   for(const key1 in this.state.backendUpdate[key]){
        //       if(this.state.backendUpdate[key][key1].notify){
                
        //           this.state.backendUpdate[key][key1].notify(key, this.state.componentList);
        //       }
        //   }
        }
  

    

   
    if(this.state.operate!==undefined ||this.state.operation==="run"){
        let operation = this.state.operation;
        let operate= this.state.operate;
        let object = this.state.object;
        
        await this.setState({operate:undefined, operation:"cleanJsonPrepare", object:undefined, currentComponent:undefined});
        if(this.state.componentList){

        
        let operationsFactory =this.state.componentList.getOperationsFactory();
        let splice = operate!==undefined? await operationsFactory.getSplice(operate) : "";
        
        let obj = await operationsFactory.operationsFactoryListener({operate:operate, operation:operation, object:object});
        if(obj){
          let currentComponent=operate!==undefined? obj[splice][0]: undefined;
          
        await this.setState({currentComponent: currentComponent});
      }
      }
    }
}


render(){


  return (
    <View style={{width:"100%", height:"100%", backgroundColor:"white", 
          display:"flex", 
           alignItems:"center"}}>
            {this.state.elementsLoaded&&(
            <View style={{width:"100%", height:"100%", backgroundColor:"white", 
            display:"flex", 
             alignItems:"center"}}>
            <Dispatch app={{state:this.state, dispatch:this.dispatch}}/>
            
            </View>)}
          </View>

);
       
}

};


export default App;

