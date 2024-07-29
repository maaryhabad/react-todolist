import { createContext, useState } from "react";


export const AppContext = createContext({});

export const AppContextProvider = (props) => {
    const { children } = props;

    const [creator, setCreator] = useState('Mari Abad');

    const [tasks, setTasks] = useState([
        {id: 1, name: "Item 1"},
        {id: 2, name: "Item 2"},
        {id: 3, name: "Item 3"},
    ]);

    const addTask = (taskName) => {
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
    }

    const removeTask = (taskId) => {
        setTasks(currentState => {
            const updatedTasks = currentState.filter(task => task.id != taskId);

            return [
                ...updatedTasks,
            ]
        })
    }
    
    return (
        <AppContext.Provider value={{
            creator,
            tasks,
            addTask,
            removeTask
        }}>
            {children}
        </AppContext.Provider>
    )
};