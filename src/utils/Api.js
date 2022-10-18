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

    loadCards() {
        return fetch(`${this.baseUrl}ingredients`, {
            method: 'GET',
            headers: this.headers,
        })
            .then(this.checkResponse)
      
    };

   
    saveOrder(ingredients) {
        return fetch(`${this.baseUrl}orders`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
                ingredients: ingredients.all.map(ingredient => ingredient._id)
            })
        })
            .then(this.checkResponse)
      
    };

}

export const api = new Api({
    baseUrl: url,
    headers: {
        authorization: '',
        'Content-Type': 'application/json'
    }
  });
  