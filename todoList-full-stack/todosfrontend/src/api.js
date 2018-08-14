const APIURL = '/api/todos/';

export async function getTodos() {
    try {
        const resp = await fetch(APIURL);
        if (!resp.ok) {
            if (resp.status >= 400 && resp.status < 500) {
                let data = await resp.json();
                let err = {errorMessage: data.message};
                throw err;
            } else {
                let err = {errorMessage: 'Please try again later, server is not responding!'};
                throw err;
            }
        }
        let todos = await resp.json();
        return todos;
    } catch (e) {
        console.log(e)
    }
}

export async function createTodo(newTodo) {
    try {
        const resp = await fetch(APIURL, {
            method: "post",
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({name: newTodo})
        });
        if (!resp.ok) {
            if (resp.status >= 400 && resp.status < 500) {
                let data = await resp.json();
                let err = {errorMessage: data.message};
                throw err;
            } else {
                let err = {errorMessage: 'Please try again later, server is not responding!'};
                throw err;
            }
        }
        let new_todo = await resp.json();
        return new_todo;
    } catch (e) {
        console.log(e);
    }
}

export async function deleteTodo(id) {
    try {
        const deleteURL = APIURL + id;
        const resp = await fetch(deleteURL, {
            method: "delete"
        });
        if (!resp.ok) {
            if (resp.status >= 400 && resp.status < 500) {
                let data = await resp.json();
                let err = {errorMessage: data.message};
                throw err;
            } else {
                let err = {errorMessage: 'Please try again later, server is not responding!'};
                throw err;
            }
        }
        return resp.json();
    } catch(e) {
        console.log(e);
    }
}

export async function updateTodo(todo) {
    try {
        const updateURL = APIURL + todo._id;
        const resp = await fetch(updateURL, {
            method: "put",
            header: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({completed: !todo.completed})
        })
        if (!resp.ok) {
            if (resp.status >= 400 && resp.status < 500) {
                let data = await resp.json();
                let err = {errorMessage: data.message};
                throw err;
            } else {
                let err = {errorMessage: 'Please try again later, server is not responding!'};
                throw err;
            }
        }
        return resp.json();
    } catch (e) {
        console.log(e);
    }
}