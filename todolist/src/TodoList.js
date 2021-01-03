import React, { Component } from "react";
import TodoEntry from "./TodoEntry";
import "./todoapp.css";




class TodoList extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            items: [],
            
            
        };
       
        
        this.addItem = this.addItem.bind(this);
        this.deleteTask = this.deleteTask.bind(this);

        
   
    
    }
    
    addItem(e) {
        if (this._inputElement.value !=="" && this._inputElement1.value !=="" && this._inputElement2.value !=="") {
            var newItem = {
                text: this._inputElement.value,
                text1: this._inputElement1.value,
                text2: this._inputElement2.value,
                key: Date.now()
               
            };
            this.setState((prevState) => {
                return {
                    items: prevState.items.concat (newItem)
                };
            });
            
            this._inputElement.value = "";
            this._inputElement1.value ="";
            this._inputElement2.value = "";
            console.log(this.state.items);
        }
        
        e.preventDefault();
    }
    deleteTask(key) {
        console.log("Deletetask: " + key)
        var updatedList = this.state.items.filter(function (item) {
          return (item.key !== key);
        });
       
        this.setState({
          items: updatedList
        });
      }
    render() {
        const newLocal = <button type="submit">ADD</button>;
        return (
            
            <div className="todoListMain">
                <div className="title">My To-Do List</div>
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input className="inputTask" ref={(a) => this._inputElement=a}
                            placeholder="Add a Task">
                        </input>
                        
                        <input className="date" type="date" ref={(b) => this._inputElement1=b}></input>
                        <select className="priority"  ref={(c) => this._inputElement2=c}>
                            <option value="Urgent">Urgent</option>
                            <option value="Recurring">Recurring</option>
                            <option value="Normal">Normal</option>
                        </select>
                        {newLocal}
                    </form>
                    
                
                    
                </div>
                
                <TodoEntry entry={this.state.items} delete={this.deleteTask} />
            </div>
        );
    }
}
export default TodoList;