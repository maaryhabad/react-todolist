import { useState } from "react";
import { TextField, Button } from "../../components"
import style from "./createTaskForm.module.css"

const CreateTaskForm = (props) => {
    const [ taskName, setTaskName ] = useState("");

    const { setTasks } = props;

    const onChangedTaskName = (event) => {
        setTaskName(event.currentTarget.value);
    }

    const addTask = (event) => {
        event.preventDefault();

        if (!taskName) { return; }

        setTasks(currentState => {
            const task = {
                id: currentState.length + 1,
                name: taskName
            }

            return [
                ...currentState,
                task,
            ]
        });

        setTaskName('');
    }

    return (
        <form className={style.CreateTaskForm} onSubmit={addTask}>
            <TextField value={taskName} onChange={onChangedTaskName}/>
            <Button text="Adicionar tarefa"/>
        </form>
    )
}

export { CreateTaskForm }