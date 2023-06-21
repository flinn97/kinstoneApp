


class Factory {
    operationsFactory;

    factory ={
    

    }

    addMultipleToFactory(obj){
        this.factory={...this.factory, ...obj}

    }
    registerComponents(register){
        this.factory[register.name]= register.component;
    }
    setOperationsFactory(operationsFactory){
        this.operationsFactory= operationsFactory
    }

    getComponent(obj){
        if(obj.component===""){
            obj.component="monsters"
        }
  
             let key = Object.keys(this.factory).includes(obj.component)? obj.component:"monsters"
        let comp = new this.factory[key](this.operationsFactory);
        comp.setJson({...comp.getJson(), ...obj.json});
        return comp;      
    }
}
export default Factory;