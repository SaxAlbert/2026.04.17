import { ViewElement } from "./ViewElement.js";

class ClassA extends ViewElement{
    constructor(id){
        super(id)
        const div=document.createElement('div')
        div.innerText=id
        
    }
}

class ClassB extends ViewElement{
    constructor(id){
        super(id)
        const div=document.createElement('div')
        div.innerText=id
        
    }
}

export {ClassA, ClassB}