/**
 * @import  { ViewElement } from "./ViewElement.js";
 */
import { ViewElement } from "./ViewElement.js"


class NavBar{
    /**
     * @type {ViewElement[]}
     */
    #viewElementList
    /**
     * 
     * @param {string} label 
     * @param {ViewElement} ViewElement 
     */
    addViewElement(label, viewElement){
        this.#viewElementList.push(viewElement)
        
    }
    /**
     * 
     * @param {string} id 
     */
    activate(id){
    }
}

class ClassA extends ViewElement{
    constructor(id){
        super(id)
        const div=document.createElement('div')
        div.innerText=id
        this.div.appendChild(div)
    }
}

class ClassB extends ViewElement{
    constructor(id){
        super(id)
        const div=document.createElement('div')
        div.innerText='ClassB'
        this.div.appendChild(div)
    }
}

export {ClassA, ClassB, NavBar}