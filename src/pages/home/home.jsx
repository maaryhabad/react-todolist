import { CreateTaskForm, TodoList } from "../../components";
import style from "./home.module.css"

const Home = () => {
    return (
        <div className={style.Home}>
            <CreateTaskForm />
            <TodoList/>
        </div>
        
    );
}

export { Home }