class ViewElement{
    /**
     * @type {string}
     */
    #id;
    /**
     * @type {HTMLDivElement}
     */
    #div;
    /**
     * 
     * @param {string} id 
     */
    constructor(id){
        this.#id=id
        this.#div=document.createElement('div')
    }
    /**
     * 
     * @param {HTMLElement} parent 
     */
    appendTo(parent){
        parent.appendChild(this.#div)

    }
    get id(){
        return this.#id
    }
    get div(){
        return this.#div
    }
    /**
     * 
     * @param {string} id 
     */
    activate(id){
        if(id){
            
        }
        else{
            
        }
    }

}
export {ViewElement}