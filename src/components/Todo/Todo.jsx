import { useState } from "react";

function Todo({todoData, isFinished, changeFinished, onDelete, onEdit}){
    const [finished, setfinished] = useState(isFinished)
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todoData);
    return (
        <div>
            <input type="checkbox" checked={finished} onChange={(e)=> {
                setfinished(e.target.checked)
                changeFinished(e.target.checked)
            }} />
            {(isEditing)? <input type='text' onChange={e => setEditText(e.target.value)}/> : <span>{}</span> }
            <button onClick={()=>{
                setIsEditing(!isEditing);
                onEdit(editText)
            }}> {(!isEditing) ? 'Edit' : 'Save'} </button>
            <button onClick={onDelete}> Delete </button>
        </div>
    )
}

export default Todo; 