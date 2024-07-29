import { useAppContext } from "../../../hooks";
import { Button } from "../../button"
import { BUTTON_TYPE } from "../../button/constants";
import style from "./todolistItem.module.css"

const TodoListItem = (props) => {
    const { id, name } = props;

    const { removeTask } = useAppContext();

    return (
        <li className={style.TodoListItem}>
            { name }
            <Button text="Menos uma!" type={BUTTON_TYPE.SECONDARY} onClick={() => removeTask(id)}></Button>
        </li>
    )
}

export { TodoListItem }