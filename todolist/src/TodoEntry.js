import react, {Component} from "react";

class TodoEntry extends Component{
    cons
    newTask(item) {
        //using key attr (set by date.now() in todoentry.js) to make it easier to keep tracks of each of the elements.
        return <li key={item.key}>{item.text}</li>
        //removing todo items
        return <li onClick={() => this.delete(item.key)} key = {item.key}>
            {item.text}</li>
    }
      
    render (){
        var todoItems = this.props.entry;
        //using map to create an array by calling a function in order
        var itemsList = todoItems.map(this.newTask);

        //to display elements on screen
        return (
            <ul classname="list">
                {itemsList}
            </ul>
        );
    }
};

export default TodoEntry;