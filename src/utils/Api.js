import { dataCards } from './data.js';

export class Api {
    constructor(options) {
        // this.baseUrl = options.baseUrl,
        //     this.headers = options.headers
    }

    checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    };

    loadCards() {
        return dataCards
      
    };
}

export const api = new Api({
    baseUrl: '',
    headers: {
        authorization: '',
        'Content-Type': 'application/json'
    }
  });
  

  export const dataElements = api.loadCards();