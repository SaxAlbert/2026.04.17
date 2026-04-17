class ViewElement{
    #id;
    #div;
    constructor(id){
        this.#id=id
        this.#div=document.createElement('div')

        const button=document.createElement('button')
        button.id='button_'+id
        button.addEventListener('click',()=>{

        })

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
}

export {ViewElement}