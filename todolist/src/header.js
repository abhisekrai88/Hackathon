import React, {Component} from "react";

class Header extends Component{
    
render(){
    return(
     (props) => {
         return (
             <div className='card-header'>
                 <h1 className='card-header-title header'>
                                         You have {props.numTodos} Todos
                 </h1>
             </div>
         );
     }
    )
    }
     
}
    
      export default Header;