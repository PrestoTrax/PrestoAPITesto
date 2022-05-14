import { describe, jest } from '@jest/globals';
import index from './index.js';
const server = new index();

jest.setTimeout(2000);

//==================================================================================================================
//                                           Home Route Test
//==================================================================================================================
describe('Home Route Test', () => {
    it('Should return a success response', async () => {
        const response = await server.getHome();
        expect(response.status).toBe(200);
    });
});

//==================================================================================================================
//                                           User Tests
//==================================================================================================================
describe('User API tests', () => {
    it('Requests a record of all users in the DB', async () => {
        const res = await server.getUsers();
        expect(res.code).toBe(200);
    });

    it('Requests a single user from the database with an ID of 7', async () => {
        const res = await server.getUser(7);
        expect(res.code).toBe(200);
    });

    it('Fails to validate a new user because their password is short', async () => {
        const res = await server.failAuthShortPass();
        expect(res.code).toBe(401);
        expect(res.errorType).toBe('PASSWORD_SHORT');
        expect(res.message).toBe('Password must be at least 8 characters long');
    });
    
    it('Fails to validate a new user because their username is short', async () => {
        const res = await server.failAuthShortUser();
        expect(res.code).toBe(401);
        expect(res.errorType).toBe('USERNAME_SHORT');
        expect(res.message).toBe('Username must be at least 4 characters long');
    });

    it('Fails to validate a new user because they do not have a number within their password', async () => {
        const res = await server.failAuthNoNumber();
        expect(res.code).toBe(401);
        expect(res.errorType).toBe('NO_NUMBER');
        expect(res.message).toBe('Password must have a number');
    });

    it('Fails to validate a new user because they do not have a special character within their password', async () => {
        const res = await server.failAuthNoSpecialChar();
        expect(res.code).toBe(401);
        expect(res.errorType).toBe('NO_SPECIAL_CHAR');
        expect(res.message).toBe('Password must have a special character');
    });

    it('Fails to validate a new user because they do not have a capital letter within their password', async () => {
        const res = await server.failAuthNoCapital();
        expect(res.code).toBe(401);
        expect(res.errorType).toBe('NO_CAPITAL_LETTER');
        expect(res.message).toBe('Password must have a capital letter');
    });

    it('Fails to validate a new user because they do not have a lowercase letter within their password', async () => {
        const res = await server.failAuthNoLowercase();
        expect(res.code).toBe(401);
        expect(res.errorType).toBe('NO_LOWERCASE_LETTER');
        expect(res.message).toBe('Password must have a lowercase letter');   
    })

    it('Fails to validate a new user because they do not include a username', async () => {
        const res = await server.failAuthNoUsername();
        expect(res.code).toBe(401);
        expect(res.errorType).toBe('USERNAME_NOT_FOUND');
        expect(res.message).toBe('No username input');
    });

    it('Fails to validate a new user because they do not include a password', async () => {
        const res = await server.failAuthNoPassword();
        expect(res.code).toBe(401);
        expect(res.errorType).toBe('PASSWORD_NOT_FOUND');
        expect(res.message).toBe('No password input');
    });

    it('Fails to validate a new user because the body contains no input', async () => {
        const res = await server.failAuthNoInput();
        expect(res.code).toBe(401);
        expect(res.errorType).toBe('NO_USER_INFO');
        expect(res.message).toBe('No user input');
    });

    it('Fails to log in as a user because they submitted invalid credentials', async () => {
        const res = await server.failLoginBadPassword();
        expect(res.code).toBe(401);
        expect(res.errorType).toBe('INVALID_CREDENTIALS');
        expect(res.message).toBe('Invalid username or password');
    });

    it('Fails to log in as a user because a user with that username does not exist', async () => {
        const res = await server.failLoginBadUsername();
        expect(res.code).toBe(401);
        expect(res.errorType).toBe('USER_NOT_FOUND');
        expect(res.message).toBe('User not found');
    });

    it('Successfully logs in as a user', async () => {
        const res = await server.loginUser();
        expect(res.code).toBe(200);
    })

    it('Adds a user to the DB', async () => {
        const res = await server.newUser();
        expect(res.code).toBe(201);
        expect(res.message).toBe('Successfully added user to DB');
    });

    it('Should update the recently created user within the DB', async () => {
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
        expect(res).toBe(204);
    });
});
//==================================================================================================================
//                                           Device Tests
//==================================================================================================================
describe('Device Info API tests', () => {
    it('Gets info of all devices within the DB', async () => {
        const res = await server.getDevices();
        expect(res.code).toBe(200);
        //expect(res).toContain(res.queryResult);
    });

    it('Gets info of a single specified device', async () => {
        const res = await server.getDevice(2);
        expect(res.code).toBe(200);
        expect(res).toStrictEqual({
            code: 200,
            queryResult: [
                {
                    Id: 2,
                    OwnerId: 8,
                    DeviceLatitude: "33.512766 / N 33° 30' 45.956",
                    DeviceLongitude: "-112.126330 / W 112° 7' 34.786",
                    PingedAt: '2022-02-24T06:11:51.037Z',
                    Moving: 0,
                },
            ],
        });
    });

    it(`Gets all info of one user's devices`, async () => {
        const res = await server.getUserDevices(8);
        expect(res.code).toBe(200);
    });

    it('Adds a device to the DB', async () => {
        const res = await server.newDevice();
        expect(res.code).toBe(201);
        expect(res.message).toBe('Successfully added device to DB');
    });

    it('Should update the recently created device within the DB', async () => {
        const res1 = await server.getDevices();
        const lastId = res1.queryResult.at(-1).Id;
        const res = await server.updateDevice(lastId);
        expect(res.code).toBe(201);
        expect(res.message).toBe('Successfully updated device within DB');
    });

    it('Should delete the recently created device from the DB', async () => {
        const res1 = await server.getDevices();
        const lastId = res1.queryResult.at(-1).Id;
        const res = await server.deleteDevice(lastId);
        expect(res).toBe(204);
    });
});
//==================================================================================================================
//                                           Record Tests
//==================================================================================================================
describe('Device Record API tests', () => {
    it('Gets info of all device records within the DB', async () => {
        const res = await server.getRecords();
        expect(res.code).toBe(200);
    });

    it('Gets info of a single specified record', async () => {
        const res = await server.getRecord(2);
        expect(res.code).toBe(404);
    });

    it(`Gets all info of one user's devices`, async () => {
        const res = await server.getUserRecords(8);
        expect(res.code).toBe(200);
    });
    it(`Gets all of one device's records`, async () => {
        const res = await server.getDeviceRecords(8);
        expect(res.code).toBe(404);
    });

    it('Adds a device record to the DB', async () => {
        const res = await server.newRecord();
        expect(res.code).toBe(201);
        expect(res.message).toBe('Successfully added device record to DB');
    });

    it('Should delete the recently created device record within the DB', async () => {
        const res1 = await server.getRecords();
        const lastId = res1.queryResult.at(-1).Id;
        const res = await server.deleteRecord(lastId);
        expect(res).toBe(204);
    });
});
