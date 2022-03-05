
import {describe, jest} from '@jest/globals';

import index from "./index.js";
const server = new index();

jest.setTimeout(20000);
//==================================================================================================================
//                                           User Tests
//==================================================================================================================
describe('User API tests', () => {
    it('Requests a record of all users in the DB', async () => {
        const res = await server.getUsers();
        expect(res.code).toBe(200);
    });

    it('Requests a single user from the database with an ID of 8', async () => {
        const res = await server.getUser(8);
        expect(res.code).toBe(200);
        expect(res).toStrictEqual({
            code: 200,
            queryResult: [
                {
                    "Id": 8,
                    "Username": "macks",
                    "Email": "test@test.test",
                    "Password": "test"
                }
            ]
        });
    });

    it('Adds a user to the DB', async() => {
        const res = await server.newUser();
        expect(res.code).toBe(201);
        expect(res.message).toBe('Successfully added user to DB');
    });

    it('Should update the recently created user within the DB', async () => {
        const updatedUser = {
            "username": "newMacks",
            "email": "newtest@newtest.newtest",
            "password": "newtest"
        };
        const res1 = await server.getUsers();
        const lastId = res1.queryResult.at(-1).Id;
        const res = await server.updateUser(lastId);
        expect(res.code).toBe(201);
        expect(res.message).toBe('Successfully updated user within DB');
    });

    it('Should delete the recently created user from the DB', async () => {
        const res1 = await server.getUsers();
        const lastId = res1.queryResult.at(-1).Id;
        const res = await server.deleteUser(lastId);
        expect(res.code).toBe(204);
        expect(res.data).toStrictEqual({});
    });
});
// //==================================================================================================================
// //                                           Device Tests
// //==================================================================================================================
// describe('Device Info API tests', () => {
//     it('Gets info of all devices within the DB', async () => {
//         const res = await request(server).get('/devices');
//         expect(res.code).toBe(200);
//         //expect(res).toContain(res.queryResult);
//     });

//     it('Gets info of a single specified device', async () => {
//         const res = await request(server).get('/devices/2');
//         expect(res.code).toBe(200);
//         expect(res).toStrictEqual({
//             code: 200,
//             queryResult: [
//                 {
//                     "Id": 2,
//                     "OwnerId": 8,
//                     "DeviceLatitude": "33.512766 / N 33° 30' 45.956",
//                     "DeviceLongitude": "-112.126330 / W 112° 7' 34.786",
//                     "PingedAt": "2022-02-24T06:11:51.037Z",
//                     "Moving": 0
//                 }
//             ]
//         })
//     });

//     it(`Gets all info of one user's devices`, async () => {
//         const res = await request(server).get('/devices/user/8');
//         expect(res.code).toBe(200);
//     });

//     it('Adds a device to the DB', async () => {
//         const newDevice = {
//             "owner_id": 8,
//             "location": {
//                 "latitude": "33.512766 / N 33° 30' 45.956",
//                 "longitude": "-112.126330 / W 112° 7' 34.786"
//             },
//             "moving": 0 
//         }
//         const res = await request(server).post('/devices/new').send(newDevice);
//         expect(res.code).toBe(201);
//         expect(res.message).toBe('Successfully added device to DB');
//     });
    
//     it('Should update the recently created device within the DB', async () => {
//         const updatedDevice = {
//             "owner_id": "8",
//             "location": {
//                 "latitude": "34.512766 / N 33° 30' 45.956",
//                 "longitude": "-113.126330 / W 112° 7' 34.786"
//             },
//             "moving": 0 
//         };
//         const res1 = await request(server).get('/devices');
//         const lastId = res1.body.queryResult.at(-1).Id;
//         const res = await request(server).put( `/devices/update/${lastId}`).send(updatedDevice);
//         expect(res.code).toBe(201);
//         expect(res.message).toBe('Successfully updated device within DB');
//     });

//     it('Should delete the recently created device from the DB', async () => {
//         const res1 = await request(server).get('/devices');
//         const lastId = res1.body.queryResult.at(-1).Id;
//         const res = await request(server).del(`/devices/delete/${lastId}`);
//         expect(res.code).toBe(204);
//         expect(res).toStrictEqual({});
//     });
// });
// //==================================================================================================================
// //                                           Record Tests
// //==================================================================================================================
// describe('Device Record API tests', () => {
//     it('Gets info of all device records within the DB', async () => {
//         const res = await request(server).get('/records');
//         expect(res.code).toBe(200);
//     });

//     it('Gets info of a single specified record', async () => {
//         const res = await request(server).get('/records/2');
//         expect(res.code).toBe(200);
//     });

//     it(`Gets all info of one user's devices`, async () => {
//         const res = await request(server).get('/records/user/8');
//         expect(res.code).toBe(200);
//     });
//     it(`Gets all of one device's records`, async () => {
//         const res = await request(server).get('/records/device/8');
//         expect(res.code).toBe(200);
//     });

//     it('Adds a device record to the DB', async () => {
//         const newDevice = {
//             "owner_id": 8,
//             "parent_device": 1,
//             "reported_lost": 0,
//             "location": {
//                 "latitude": "33.512766 / N 33° 30' 45.956",
//                 "longitude": "-112.126330 / W 112° 7' 34.786"
//             }
//         }
//         const res = await request(server).post('/records/new').send(newDevice);
//         expect(res.code).toBe(201);
//         expect(res.message).toBe('Successfully added device record to DB');
//     });
    
//     it('Should delete the recently created device record within the DB', async () => {
//         const res1 = await request(server).get('/devices');
//         const lastId = res1.body.queryResult.at(-1).Id;
//         const res = await request(server).del( `/records/delete/${lastId}`);
//         expect(res.code).toBe(204);
//         expect(res).toStrictEqual({});
//     });

// });