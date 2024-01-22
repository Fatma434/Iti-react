// class component 

import { Component } from "react";

class Greeting extends Component{
    //constructor
    constructor( props){
        super(props);
        this.state= {
           count :props.count, 
        };
        console.log(props);

    }
   render(){
    // props using this 
    return <>
     
     <p>hello ya {this.props.name}</p>

     <div>
     count: {this.state.count}  

     </div>
     <button>
        +
     </button>
     
     <button>
        -
     </button>
    </>
       
   } 
}



export default Greeting;