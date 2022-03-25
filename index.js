import fetch, { FetchError } from 'node-fetch';
export default class index {
//==================================================================================================================
//                                           Home Routes
//==================================================================================================================
    async getHome(){
        const response = await fetch(`https://prestoapi.azurewebsites.net/`);
        return response;
    }
//==================================================================================================================
//                                           User Routes
//==================================================================================================================
    async getUsers(){
        const response = await fetch(`https://prestoapi.azurewebsites.net/users`);
        return await response.json();
    }
    async getUser(id){
        const response = await fetch(`https://prestoapi.azurewebsites.net/users/${id}`);
        return await response.json();
    }
    async failAuthShortPass(){
        const response = await fetch(`https://prestoapi.azurewebsites.net/users/new`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: 'test',
                password: 'T#sting'
            })
        });
        return await response.json();
    }
    async failAuthShortUser(){
        const response = await fetch(`https://prestoapi.azurewebsites.net/users/new`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: 'te',
                password: 'T#stign2'
            })
        });
        return await response.json();
    }
    async failAuthNoNumber(){
        const response = await fetch(`https://prestoapi.azurewebsites.net/users/new`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: 'test',
                password: 'T#stingb'
            })
        });
        return await response.json();
    }
    async failAuthNoSpecialChar(){
        const response = await fetch(`https://prestoapi.azurewebsites.net/users/new`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: 'test',
                password: 'Testing2'
            })
        });
        return await response.json();
    }
    async failAuthNoCapital(){
        const response = await fetch(`https://prestoapi.azurewebsites.net/users/new`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: 'test',
                password: 't#sting2'
            })
        });
        return await response.json();
    }
    async failAuthNoLowercase(){
        const response = await fetch(`https://prestoapi.azurewebsites.net/users/new`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: 'test',
                password: 'T#STING2'
            })
        });
        return await response.json();
    }
    async failAuthNoUsername(){
        const response = await fetch(`https://prestoapi.azurewebsites.net/users/new`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                password: 'T#sting2'
            })
        });
        return await response.json();
    }
    async failAuthNoPassword(){
        const response = await fetch(`https://prestoapi.azurewebsites.net/users/new`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: 'test'
            })
        });
        return await response.json();
    }
    async failAuthNoInput(){
        const response = await fetch(`https://prestoapi.azurewebsites.net/users/new`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return await response.json();
    }
    async failLoginBadPassword(){
        const response = await fetch(`https://prestoapi.azurewebsites.net/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: 'Mackslemus1',
                password: 'G00dP@ss0rd'
            })
        });
        return await response.json();
    }
    async failLoginBadUsername(){
        const response = await fetch(`https://prestoapi.azurewebsites.net/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: 'Mackslemus',
                password: 'G00dP@ssw0rd'
            })
        });
        return await response.json();
    }
    async loginUser(){
        const response = await fetch(`https://prestoapi.azurewebsites.net/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: 'Mackslemus1',
                password: 'G00dP@ssw0rd'
            })
        });
        return await response.json();
    }
    async newUser(){
        const response = await fetch(`https://prestoapi.azurewebsites.net/users/new`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username": "macksTest",
                "email": "test@test.test",
                "password": "t3st_Password"
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
//==================================================================================================================
//                                           Device Routes
//==================================================================================================================
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
//==================================================================================================================
//                                           Device Record Routes
//==================================================================================================================
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