import { useState } from "react";
import { TextField, Button } from "../../components"
import style from "./createTaskForm.module.css"
import { useAppContext } from "../../hooks";

const CreateTaskForm = () => {

    const { addTask } = useAppContext();
    const [ taskName, setTaskName ] = useState("");

    const onChangedTaskName = (event) => {
        setTaskName(event.currentTarget.value);
    }

    const submitForm = (event) => {
        event.preventDefault();

        if (!taskName) { return; }

        addTask(taskName);

        setTaskName('');
    }

    return (
        <form className={style.CreateTaskForm} onSubmit={submitForm}>
            <TextField value={taskName} onChange={onChangedTaskName}/>
            <Button text="Adicionar tarefa"/>
        </form>
    )
}

export { CreateTaskForm }