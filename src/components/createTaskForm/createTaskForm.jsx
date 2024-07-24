import { TextField, Button } from "../../components"
import style from "./createTaskForm.module.css"

const CreateTaskForm = () => {
    return (
        <form className={style.CreateTaskForm}>
            <TextField/>
            <Button text="Adicionar tarefa"/>
        </form>
    )
}

export { CreateTaskForm }