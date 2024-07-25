import style from "./todolist.module.css"
import { TodoListItem } from "./todolistItem"


const TodoList = (props) => {
    const { tasks } = props;

    return (
        <ul className={style.TodoList}>
            {tasks.map(item => 
                <TodoListItem 
                    key={item.id} 
                    name={item.name}/>
            )}
        </ul>
    )
}

export { TodoList }