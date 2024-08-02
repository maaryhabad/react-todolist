import { createContext, useEffect, useState } from "react";

import { api } from "../services";


export const AppContext = createContext({});

export const AppContextProvider = (props) => {
    const { children } = props;

    const [creator, setCreator] = useState('Mari Abad');

    const [tasks, setTasks] = useState([]);

    const loadTasks = async () => {
        const { data = [] } = await api.get('/tasks');

        setTasks([
            ...data,
        ])
    }

    const addTask = async (taskName) => {
        const { data: task } = await api.post('/tasks', {
            name: taskName,
        });

        setTasks(currentState => {
            return [
                ...currentState,
                task,
            ]
        });
    }

    const editTask = async (taskId, taskName) => {
        const { data: updatedTask } = await api.put(`tasks/${taskId}`, {
            name: taskName
        });
    
        setTasks(currentState => 
            currentState.map(task => 
                task.id === taskId ? { ...task, name: updatedTask.name } : task
            )
        );

        return [
            ...updatedTasks,
        ]
    }

    const removeTask = async (taskId) => {
        await api.delete(`tasks/${taskId}`);

        setTasks(currentState => {
            const updatedTasks = currentState.filter(task => task.id != taskId);

            return [
                ...updatedTasks,
            ]
        })
    }

    useEffect(() => {
        loadTasks();
    }, []);
    
    return (
        <AppContext.Provider value={{
            creator,
            tasks: tasks || [],
            addTask,
            editTask,
            removeTask
        }}>
            {children}
        </AppContext.Provider>
    )
};