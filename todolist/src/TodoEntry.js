import React, {Component} from "react";
import FlipMove from "react-flip-move";



class TodoEntry extends Component{
    constructor(props) {
        super(props);
     
        this.newTask = this.newTask.bind(this);
        
      }
     
      delete(key) {
        this.props.delete(key);
      }
     
    newTask(item) {
        //using key attr (set by date.now() in todoentry.js) to make it easier to keep tracks of each of the elements.
        
        return (<div className="test"><li onClick={() => this.delete(item.key)}
        key={item.key}>{item.text}<ul id="nestedUL">
            <li id="date" onClick={() => this.delete(item.key)}
        key={item.key}>Due: 
             {item.text1}</li>
            
            <li id="priority" onClick={() => this.delete(item.key)}
        key={item.key}>Priority: 
            {item.text2}</li>
            
            </ul></li>
        
        </div>
        
        )
        
    }
    
      
    render (){
        
        var todoItems = this.props.entry;
        //using map to create an array by calling a function in order
        var itemsList = todoItems.map(this.newTask);
        //to display elements on screen
        return (
            <ul className="list" >
                <FlipMove duration={250}easing="ease-out"> 
                {itemsList}
                </FlipMove>
            </ul>
        );
    }
};

export default TodoEntry;