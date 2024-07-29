import { useAppContext } from "../../hooks";
import style from "./todolist.module.css"
import { TodoListItem } from "./todolistItem"


const TodoList = () => {
    const { tasks } = useAppContext();

    return (
        <ul className={style.TodoList}>
            {!tasks.length && (
                <p>Não há tarefas cadastradas</p>
            )}

            {tasks.map(item => 
                <TodoListItem 
                    key={item.id} 
                    id={item.id}
                    name={item.name}/>
            )}
        </ul>
    )
}

export { TodoList }