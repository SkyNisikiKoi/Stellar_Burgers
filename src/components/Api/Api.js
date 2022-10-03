import { dataCards } from '../../utils/data.js';

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

