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
        return response.status;
    }

    async getDevices(){
        const response = await fetch(`https://prestoapi.azurewebsites.net/devices`);
        return await response.json();
    }
    async getDevice(id){
        const response = await fetch(`https://prestoapi.azurewebsites.net/devices/${id}`);
        return await response.json();
    }
    async getUserDevices(id){
        const response = await fetch(`https://prestoapi.azurewebsites.net/devices/user/${id}`);
        return await response.json();
    }
    async newDevice(){
        const response = await fetch(`https://prestoapi.azurewebsites.net/devices/new`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "owner_id": 8,
                    "location": {
                        "latitude": "33.512766 / N 33° 30' 45.956",
                        "longitude": "-112.126330 / W 112° 7' 34.786"
                    },
                    "moving": 0 
                }),
            });
        return await response.json();
    }
    async updateDevice(id){
        const response = await fetch(`https://prestoapi.azurewebsites.net/devices/update/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "owner_id": "8",
                "location": {
                    "latitude": "34.512766 / N 33° 30' 45.956",
                    "longitude": "-113.126330 / W 112° 7' 34.786"
                },
                "moving": 0 
            })
        });
        return await response.json();
    }

    async deleteDevice(id){
        const response = await fetch(`https://prestoapi.azurewebsites.net/devices/delete/${id}`, {
            method: 'DELETE'
        });
        return response.status;
    }

    async getRecords(){
        const response = await fetch(`https://prestoapi.azurewebsites.net/records`);
        return await response.json();
    }

    async getRecord(id){
        const response = await fetch(`https://prestoapi.azurewebsites.net/records/${id}`);
        return await response.json();
    }

    async getUserRecords(id){
        const response = await fetch(`https://prestoapi.azurewebsites.net/records/user/${id}`);
        return await response.json();
    }

    async getDeviceRecords(id){
        const response = await fetch(`https://prestoapi.azurewebsites.net/records/device/${id}`);
        return await response.json();
    }

    async newRecord(){
        const response = await fetch(`https://prestoapi.azurewebsites.net/records/new`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "owner_id": 8,
                "parent_device": 1,
                "reported_lost": 0,
                "location": {
                    "latitude": "33.512766 / N 33° 30' 45.956",
                    "longitude": "-112.126330 / W 112° 7' 34.786"
                }
            })
        });
        return await response.json();
    }

    async deleteRecord(id){
        const response = await fetch(`https://prestoapi.azurewebsites.net/records/delete/${id}`, {
            method: 'delete'
        });
        return response.status;
    }
}

export default index;