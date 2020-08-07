import sinon from 'sinon'; 
import chai from 'chai'; 
import mongoose from 'mongoose'; 
import Todo from './../models/task'; 
import chaiHttp from 'chai-http'; 
import sinonChai from 'sinon-chai'; 

chai.use(chaiHttp); 
chai.use(sinonChai); 

const expect = chai.expect;
const request = chai.request; 
const uri = 'http://localhost:3003'; 

require('sinon-mongoose'); 

describe('Task Request', () => {    
    it('should make a request and return a list of tasks', (done) => {
        request(uri)
            .get('/tasks')
            .end((err, result) => {
                if(!err) {
                    expect(result.body.status).to.be.true;
                    expect(result.body.data).to.be.an('array'); 
                    done();
                }
            }); 
    }); 

    it('should make a request and not send form data', (done) => {        
        request(uri)
            .post('/tasks')
            .send({ name: undefined })
            .end((err, res) => {
                if(err) {                    
                    expect(res.body.status).to.be.false;
                    expect(res).to.have.status(500); 
                    done();
                }
            }); 
    }); 

    it('should make a request and send form data', (done) => {
        request(uri)
            .post('/tasks')
            .send({
                name: 'Test Req task'
            })
            .end((err, res) => {
                if(!err) {
                    expect(res.body.status).to.be.true;
                    expect(res).to.have.status(201); 
                    done();
                }
            }); 
    }); 
}); 





