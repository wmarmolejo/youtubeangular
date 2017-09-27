export class Element{
    
    domElement:any;

    render(element){
        element.appendChild(this.domElement);

    }

}