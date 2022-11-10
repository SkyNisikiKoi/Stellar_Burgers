export const url = 'https://norma.nomoreparties.space/api/';

export class Api {
    constructor(props) {
        this.baseUrl = props.baseUrl;
        this.headers = props.headers
       
    }

    checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    };

    _request(url, options) {
        return fetch(url, options).then(this.checkResponse)
      }

   

    loadCards() {
        return this._request(`${this.baseUrl}ingredients`, {
            method: 'GET',
            headers: this.headers,
        })
      
    };

    saveOrder(ingredients) {
        return this._request(`${this.baseUrl}orders`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
                ingredients: ingredients.all.map(ingredient => ingredient._id)
            })
        })
      
    };

}

export const api = new Api({
    baseUrl: url,
    headers: {
        authorization: '',
        'Content-Type': 'application/json'
    }
  });
  