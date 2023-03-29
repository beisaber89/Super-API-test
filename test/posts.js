import supertest from "supertest";
import {expect} from "chai";



const request = supertest('https://gorest.co.in/public/v2/');

const TOKEN = '0ea7a198d055f3b8c7b7e8d74c449a6127097426b49066a8fb51fe09c11bdefa';


describe('user post', async () => {
    it('/posts', () => {
        const data = {
            id: "4",
            title: "my title",
            body: "my blog post"
        }

        return request
            .post
    })

    awit 
})