import { useState } from "react"
import { useDispatch } from "react-redux"
import { editTodo, deleteTodo } from "./actions"

function Todo({id, title}) {
    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(title)

    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(deleteTodo(id))
    }

    const handleTodo = () => {
        if(newTitle.trim()){
            dispatch(editTodo({id:id, title: newTitle}))
            setEditing(false)
        }
    }

    return (
        <div>
            {
                editing?(
                    <div className="form-group">
                        <input className="form-control" type='text' value={newTitle} onChange={(e)=> setNewTitle(e.target.value)}/>
                        <button className="btn btn-secondary" onClick={handleTodo}>Save</button>
                    </div>
                ): (
                    <li className="list-group-item">
                        <p>{title}</p>
                        <div className="actions">
                            <button className="btn btn-warning" onClick={() => setEditing(true)}>Edit</button>
                            <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
                        </div>
                    </li>

                )
            }
        </div>
    )
}

export default Todo