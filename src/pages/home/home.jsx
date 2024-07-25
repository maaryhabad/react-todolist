import { useState } from "react";

import { CreateTaskForm, TodoList } from "../../components";

import style from "./home.module.css"

const Home = () => {
    const [tasks, setTasks] = useState([
        {id: 1, name: "Item 1"},
        {id: 2, name: "Item 2"},
        {id: 3, name: "Item 3"},
    ]);

    return (
        <div className={style.Home}>
            <CreateTaskForm setTasks={setTasks}/>
            <TodoList tasks={tasks}/>
        </div> 
    );
}

export { Home }