export const getInitialTasks = () => {
    return {
        type: 'GET_TASK'
    }
}

export const addTask = (task) => {
    return {
        type: 'ADD_TASK',
        task
    }
} 