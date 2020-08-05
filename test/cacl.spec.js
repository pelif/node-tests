var calcModule = require('./../calc'); 
var chai = require('chai')
var expect = chai.expect; 

describe('calc test sum', function() {
    it('should sum return 4', (done) => {
        let result = calcModule.sum(2,2); 
        expect(result).to.equal(4); 
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