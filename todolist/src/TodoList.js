import React, { Component } from "react";
import TodoEntry from "./TodoEntry";
import "./todoapp.css";
import Header from "./header"



class TodoList extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            items: []
        };
        this.addItem = this.addItem.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }
    addItem(e) {
        if (this._inputElement.value !== "") {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };
            this.setState((prevState) => {
                return {
                    items: prevState.items.concat (newItem)
                };
            });
            this._inputElement.value = "";
        }
        console.log(this.state.items);
        e.preventDefault();
    }
    deleteTask(key) {
        var updatedList = this.state.items.filter(function (item) {
          return (item.key !== key);
        });
       
        this.setState({
          items: updatedList
        });
      }
    render() {
        return (
            
            <div className="todoListMain">
                <div className="title">My To-Do List</div>
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputElement =a}
                            placeholder="Add a Task">
                        </input>
                        <button type="submit">ADD</button>
                        
                    </form>
                
                    
                </div>
                <Header numTodos={this.state.items.length}/>
                <TodoEntry entry={this.state.items} delete={this.deleteTask} />
            </div>
        );
    }
}
export default TodoList;