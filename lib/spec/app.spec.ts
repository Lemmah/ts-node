import app from './../app';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

chai.use(chaiHttp);
const expect = chai.expect;

describe('Hello API GET Request', () => {
  let getRequest: Promise<any>;
  beforeEach(() => {
    getRequest = chai.request(app).get('/');
  });
  it('should return a 200 OK', async () => {
    return getRequest.then((res: Response) => {
      expect(res.status).to.equal(200);
    });
  });

  it('should return `Hello World!` in message body', async () => {
    return getRequest.then((res: any) => {
      expect(res.body.message).to.eql('Hello World!jkljlkf');
    });
  });
});