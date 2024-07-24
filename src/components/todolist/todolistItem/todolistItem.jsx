import { Button } from "../../button"
import { BUTTON_TYPE } from "../../button/constants";
import style from "./todolistItem.module.css"

const TodoListItem = (props) => {
    const { name } = props;
    return (
        <li className={style.TodoListItem}>
            { name }
            <Button text="Menos uma!" type={BUTTON_TYPE.SECONDARY}></Button>
        </li>
    )
}

export { TodoListItem }