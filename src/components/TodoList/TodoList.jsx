import Todo from "../Todo/Todo";
import TodoContext from "../../context/todoContext";
import { useContext, useState } from "react";
import TodoDispatchContext from "../../context/TodoDispatchContext";

function TodoList(){

    //mainaning state
    const {list} = useContext(TodoContext)
    //
    const {dispatch} = useContext(TodoDispatchContext)

    //
    function onFinished(todo , isFinished){
    ////withour reducer
        // const updatedList = list.map(t =>{
        //     if(t.id == todo.id){
        //         todo.finished = isFinished
        //     }
        //     return t;
        // });
        // setList(updatedList)

    
    //with reducer
        dispatch({type: 'finish_todo', payload: {todo, isFinished}})
    };


    function onDelete(todo) {
    //withour reducer
        // const updatedList = list.filter(t => t.id != todo.id)
        //                         setList(updatedList)

    //with reducer
        dispatch({type: 'delete_todo', payload: {todo}})
    }


    function onEdit(todo, todoText) {
    //withour reducer
        // const updatedList = list.map(t =>{
        //     if(t.id == todo.id){
        //         todo.todoData = todoText
        //     }
        //     return t;
        // });
        // setList(updatedList)

    //with reducer
         dispatch({type: 'edit_todo', payload: {todo, todoText}})
    }

    

    return (
        <div>
            {list.length > 0 && list.map(
                todo => <Todo 
                            key={todo.id} 
                            id={todo.id} 
                            isFinished={todo.finished} 
                            todoData={todo.todoData} 
                            changeFinished = {(isFinished) => onFinished(todo, isFinished)}
                            onDelete={()=> onDelete(todo)}

                            //
                            onEdit={(todoText)=> onEdit(todo, todoText)}

                        />)}
        </div>
    )
}

export default TodoList;