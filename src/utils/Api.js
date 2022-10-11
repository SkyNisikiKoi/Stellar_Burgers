export const url = 'https://norma.nomoreparties.space/api/ingredients';

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
        return fetch(this.baseUrl, {
            method: 'GET',
            headers: this.headers
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
  

  //export const dataElements = api.loadCards();