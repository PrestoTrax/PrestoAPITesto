import fetch, { FetchError } from 'node-fetch';
class index {
    async getUsers(){
        const response = await fetch(`https://prestoapi.azurewebsites.net/users`);
        return await response.json();
    }
    async getUser(id){
        const response = await fetch(`https://prestoapi.azurewebsites.net/users/${id}`);
        return await response.json();
    }
    async newUser(){
        const response = await fetch(`https://prestoapi.azurewebsites.net/users/new`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username": "macks",
                "email": "test@test.test",
                "password": "test"
            })
        });
        return await response.json();
    }
    async updateUser(id){
        const response = await fetch(`https://prestoapi.azurewebsites.net/users/update/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username": "newMacks",
                "email": "newtest@newtest.newtest",
                "password": "newtest"
            })
        });
        return await response.json();
    }

    async deleteUser(id){
        const response = await fetch(`https://prestoapi.azurewebsites.net/users/delete/${id}`, {
            method: "DELETE"
        });
        if (response.status == 204)
            return {code: 204, data: {}};
        else
            return FetchError;
    }
}

export default index;