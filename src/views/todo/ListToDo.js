import React from 'react';
import './ListToDo.scss';
import AddToDo from './AddToDo';
import { toast } from 'react-toastify';

class ListToDo extends React.Component {
    state = {
        listTodos: [
            {id: 'todo1', title: 'Doing homework'},
            {id: 'todo2', title: 'Review code'},
            {id: 'todo3', title: 'Fixing bug'}
        ],
        editTodo: {}
    }

    AddNewToDo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })
    }

    handleDelTodo = (todo) => {
        let currentList = this.state.listTodos;
        let newList = currentList.filter(item => item.id !== todo.id)

        this.setState({
            listTodos: [...newList]
        })

        toast.success('Delete success!')
    }

    handleEditTodo = (todo) => {        
        let { listTodos, editTodo } =  this.state;
        let isObjEmpty = Object.keys(editTodo).length === 0;

        if (isObjEmpty === false && editTodo.id === todo.id) {
            let listTodosCopy = [...listTodos];
            let todoEdit = listTodosCopy.findIndex(item => item.id === todo.id);
            listTodosCopy[todoEdit].title = editTodo.title;
            
            if(todo.title === '') {
                toast.error('Missing todo title!')
            }
            else {
                this.setState({
                    listTodos: listTodosCopy,
                    editTodo: {}
                })

                toast.success('Update todo success!')
                return;
            }
        }

        this.setState({
            editTodo: todo
        })
    }

    handleOnChangeEditTodo = (e) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = e.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }

    render() {
        let { listTodos, editTodo } = this.state;
        let isObjEmpty = Object.keys(editTodo).length === 0;
        
        return (
            <div className='list-todo-container'>
                <AddToDo
                    AddNewToDo={this.AddNewToDo}
                />  
                <div className='list-todo-content'>
                    <div className='list-todo-content'>
                        {listTodos && listTodos.length > 0 && 
                            listTodos.map((item, index) => {
                                return (
                                    <div className='list-todo-child' key={item.id}>
                                        { isObjEmpty === true ? 
                                            <span className='content'>{index + 1}: {item.title}</span>
                                            :
                                            <>
                                                { item.id === editTodo.id ?
                                                    <span className='content'>{index+1}: <input type="text" 
                                                    value={editTodo.title}
                                                    onChange={(e) => this.handleOnChangeEditTodo(e)} /></span>
                                                :
                                                    <span className='content'>{index + 1}: {item.title}</span>
                                                }
                                            </>
                                        }
                                        <button className='edit' onClick={() => this.handleEditTodo(item)}>
                                            {
                                                !isObjEmpty && item.id === editTodo.id ?
                                                'SAVE'
                                                :
                                                'EDIT'
                                            }
                                        </button>
                                        <button className='del' onClick={() => this.handleDelTodo(item)}>DELETE</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default ListToDo;