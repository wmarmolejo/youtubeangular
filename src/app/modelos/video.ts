import {Element} from "./element";

export class Video extends Element{

  name:string;
  description:string;
  score:number;
  src:string;
  params:any;

  constructor(name:string, description:string,score:number, src:string, params: any){
    super();
    this.name=name;
    this.description=description;
    this.score=score;
    this.src=src;
    this.params=( typeof(params) == 'object') ? params : null;
    if(params!=null){
      this.initDomElement(params.controls,params.autoplay);
    }else{
      this.initDomElement(false,false);
    }
    
  }

  initDomElement(controls:boolean,autoplay:boolean){
    let el=document.createElement('video');
    el.src=this.src;
    el.controls=controls;
    el.autoplay=autoplay;
    el.style.width="100%";    
    this.domElement=el;
  }

}
