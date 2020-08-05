var calcModule = require('../calc'); 
var chai = require('chai')
var expect = chai.expect; 

import sinon from 'sinon'; 


describe('calc test sum', function() {
    it('should sum return 4', (done) => {
        let mock = sinon.mock(calcModule); 
        mock.expects('sum').yields(null, 4); 
        calcModule.sum(2,2, (err, result) => {
            mock.verify();
            mock.restore();
            expect(result).to.be.equal(4); 
            done();
        }); 
        
        // let result = calcModule.sum(2,2); 
        // expect(result).to.equal(4); 
        // done();
    }); 

    it('stub func', (done) => {
        let stub = sinon.stub(calcModule, 'sum');
        stub.returns(5); 

        var result = calcModule.calc(4,1); 
        expect(calcModule.sum).to.have.been.calledOnce;
        expect(result).to.equal(5); 
        stub.restore();
        done();
    }); 
}); 

describe('calc test sub', function() {
    it('should sub return 2', (done) => {
        let result = calcModule.sub(5,3); 
        expect(result).to.equal(2); 
        done();
    }); 
}); 

describe('calc test mult', function() {
    it('should mult return 10', (done) => {
        let result = calcModule.mult(2,5); 
        expect(result).to.equal(10); 
        done();
    }); 
}); 

describe('calc test div', function() {
    it('should div return 10', (done) => {
        let result = calcModule.div(100,10); 
        expect(result).to.equal(10); 
        done();
    }); 
}); 