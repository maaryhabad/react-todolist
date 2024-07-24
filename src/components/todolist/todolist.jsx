import style from "./todolist.module.css"
import { TodoListItem } from "./todolistItem"


const TodoList = () => {
    const tasks = [
        {id: 1, name: "Item 1"},
        {id: 2, name: "Item 2"},
        {id: 3, name: "Item 3"},
    ];

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