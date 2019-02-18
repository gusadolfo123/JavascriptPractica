import {
  StateRequestType
} from './UI';

export class RequestService {
  constructor(name, docNumber, date, state) {
    this.name = name;
    this.docNumber = docNumber;
    this.date = date;
    this.state = state;
    this.url = `http://localhost:5526`;
  }
  async send() {
    this.date = new Date().toLocaleString();
    this.state = StateRequestType.InProcess;
    return await console.log(this.url, this.name, this.docNumber, this.date, this.state);
  }
  async getState() {
    const result = await setTimeout(() => {
      console.log('servicio consumido');
      return true;
    }, 5000);

    if (result) return true;
    else false;
  }
}