import dragon1 from '../assets/dragon1.jpeg'
import dragon2 from '../assets/dragon2.jpeg'
import dragon3 from '../assets/dragon3.jpeg'
import dragon4 from '../assets/dragon4.jpeg'
import dragon5 from '../assets/dragon5.jpeg'
import dragon6 from '../assets/dragon6.png'
import dragon7 from '../assets/dragon7.png'
import dragon8 from '../assets/dragon8.jpeg'
import dragon9 from '../assets/dragon9.png'

class Auth{
    componentList;
    setComponentList(compList){
        this.componentList=compList

    }


    async setInitialElements(){
     let arr = [dragon1,dragon2,dragon3,dragon4,dragon5,dragon6,dragon7,dragon8,dragon9];
   
     let jsonList=[];
     for(let i =0; i < arr.length; i++){
        let json ={
            type: "element",
            _id: Math.floor(Math.random(10)*100000),
            picURL: arr[i],
            name: "dragon" + (i+1)

         }
         jsonList.push(json)
     }
     await this.componentList.addComponents(jsonList);
     
    }
}

export default new Auth()