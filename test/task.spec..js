import sinon from 'sinon'; 
import chai from 'chai'; 
import mongoose from 'mongoose'; 
import Todo from './../models/task'; 

const expect = chai.expect; 
require('sinon-mongoose'); 

chai.use(require('sinon-chai')); 


describe('Tasks', () => {
    it('should create a new task', (done) => {

        let objTodo = new Todo({ name: 'Tesk Teste'}); 
        let mock = sinon.mock(objTodo); 
        let todo = mock.object; 

        mock.expects('save').yields(null, {
            status: true, 
            data: {
                name: 'Task Teste', 
                completed: false                
            }
        }); 

        todo.save((err, result) => {
            mock.verify(); 
            mock.restore();
            var object = new Todo(); 
            expect(result.status).to.equal(true);             
            expect(result.data).to.be.an(object); 
            done();
        });
         
    }); 
}); 