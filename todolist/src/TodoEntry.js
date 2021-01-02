import react, {Component} from "react";

class TodoEntry extends Component{
    newTask(item) {
        return <li key={item.key}>{item.text}</li>
    }
    render (){
        var todoItems = this.props.items;
        var itemsList = todoItems.map(this.newTask);

        return (
            <ul classname="list">
                {itemsList}
            </ul>
        );
    }
};

export default TodoEntry;