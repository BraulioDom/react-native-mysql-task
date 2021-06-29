const API = 'http://192.168.0.17:3000/tasks'
//const API = 'http://localhost:3000/tasks'

export const getTasks = async () => {
    const res = await fetch(API)
    return await res.json()
}

export const getTask = async (id) => {
    const res = await fetch(API + '/' + id)
    return await res.json()
}

export const saveTask = async (newTask) => {
    const res = await fetch(API, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(newTask)
    })
}

export const updateTask = async (id, newTask) => {
    const res = await fetch(API + '/' + id, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(newTask)
    })
}

export const deleteTask = async (id) => {
    await fetch(API + '/' + id, { method: "DELETE" })
}