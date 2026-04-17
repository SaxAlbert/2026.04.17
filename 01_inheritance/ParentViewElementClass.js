class ViewElement{
    /**
     * @type {string}
     */
    #id
    /**
     * @type {HTMLDivElement}
     */
    #div
    /**
     * 
     * @param {string} id 
     */
    constructor(id){
        this.#id=id
        this.#div=document.createElement('div')
        this.#div.classList.add('card')
        this.#div.innerText=id
        
        
    }
    get div(){
        return this.#div
    }
    /**
     * 
     * @param {HTMLElement} parent 
     */
    appnedTo(parent){
        parent.appendChild(this.#div)
    }
}

class ClassA extends ViewElement{
    constructor(id){
        super(id)
        const div=document.createElement('div')
        div.innerText='id:Class'
        div.classList.add('head')
        this.div.appendChild(div)
        

    }

}
class ClassB extends ViewElement{
    constructor(id){
        super(id)
        const div=document.createElement('div')
        div.innerText='id:classB'
        div.classList.add('head')
        this.div.appendChild(div)
        
    }
}

export {ClassA, ClassB}