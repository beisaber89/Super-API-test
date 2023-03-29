import supertest from "supertest";
import {expect} from "chai";
import chai from "chai";



const request = supertest('https://gorest.co.in/public/v2/');

const TOKEN = '0ea7a198d055f3b8c7b7e8d74c449a6127097426b49066a8fb51fe09c11bdefa';

describe('GET /', () => {
    // it('GET /users', (done) => {
    //     request
    //         .get(`users?access-token=${TOKEN}`)
    //         .end((err, res) => {
    //             expect(res.body.length).to.not.be.null;
    //             console.log(res);
    //             done();
    //         })
    //     // return request
    //     // .get(`users?access-token=${TOKEN}`)
    //     // .then((res) => {
    //     //     expect(res.body.length).to.not.be.null;
    //     // })
    // });

    // it('GET /user/id', () => {
    //     return request
    //     .get(`users/207845?access-token=${TOKEN}`)
    //     .then((res) => {
    //         expect(res.body.id).to.be.equal(207845);
    //     })
    // });
    
    it ('GET /user with params', () => {
        const url = `users?access-token=${TOKEN}?page=5&gender=male&status=active`;
        return request.get(url).then((res) => {
            // expect(res.body.data).to.not.be.null;
            res._body.forEach(element => {
                expect(element.gender).to.be.equal("male");
            });
            
        });
    });

    it ('POST /users', () => {
        const data = {};
        return request.post('users').set("Authorization", `Bearer: ${TOKEN}`)
            .send(data)
            .then((res) => {
                console.log(res);
            })
    })
})
