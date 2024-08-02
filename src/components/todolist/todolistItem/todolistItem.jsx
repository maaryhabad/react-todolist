import { useState } from "react";

import { useAppContext } from "../../../hooks";
import { Button, TextField, BUTTON_TYPE } from "../../../components"

import style from "./todolistItem.module.css"

const TodoListItem = (props) => {
    const { id, name } = props;

    const [isEditing, setIsEditing] = useState(false);

    const { editTask, removeTask } = useAppContext();

    return (
        <li className={style.TodoListItem}>
            {isEditing && (
              <TextField 
                defaultValue = {name}
                onChange={event => editTask(id, event.currentTarget.value)} 
                onBlur={() => setIsEditing(false)} 
                autoFocus/>
            )}
            {!isEditing && (
                <span onDoubleClick={() => setIsEditing(true)}>{ name }</span>
            )}
            <Button text="Menos uma!" type={BUTTON_TYPE.SECONDARY} onClick={() => removeTask(id)}></Button>
        </li>
    )
}

export { TodoListItem }