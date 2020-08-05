import chai from 'chai'; 
import chaiHttp from 'chai-http'; 

chai.use(chaiHttp); 
const expect = chai.expect; 
const request = chai.request; 

describe('request test', () => {
    it('should request website', (done) => {
        request('www.schoolofnet.com')
            .get('/')
            .end((err, res) => {                
                expect(res).to.have.status(200);
                done();
            }); 
    });
});