import React from "react";
import { toast } from "react-toastify";

class AddToDo extends React.Component {
    state = {
        title: ''
    }

    handleOnChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    handleAddTodo = () => {
        if(!this.state.title) {
            toast.error("Missing title!")
            return;
        }

        let todo = {
            id: Math.floor(Math.random() * 1000),
            title: this.state.title
        }
    
        this.props.AddNewToDo(todo);
    
        this.setState({
            title: ''
        })
        toast.success("Add Todo Success!")
    }
    render() {
        let { title } = this.state;
        return (
            <div className='add-todo'>
                <input type="text" value={title} onChange={(e) => this.handleOnChange(e)} />
                <button type='button' onClick={() => this.handleAddTodo()}>ADD</button>
            </div>
        )
    }
}

export default AddToDo;