// criando um modelo de uma lista de negociacao que vai encapsular a regra de negocio

class ListaNegociacoes {
    constructor() {
        
        this._negociacoes = [];

    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }

    get negociacoes() {
        
        return [].concat(this._negociacoes);
    }
}