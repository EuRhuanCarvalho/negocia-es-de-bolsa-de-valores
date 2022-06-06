class Negociacao {

    //atributos
    constructor(data, quantidade, valor) {
        
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor ;
        /*colocar um _ para "encapsular" um valor no JS é uma convenção, pois atualmente
         não existem formas padronizadas de fazer isso*/
        //____________________________________________________//
        Object.freeze(this); //congelando o Objeto (congela as propriedades superficialmente)
            
        }

    // métodos
    get volume() {
        return this._quantidade * this._valor;
    }

    get data() {
        return new Date(this._data.getTime());
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }
    // apenass  utilizar get ao invés "getData" como usualmente, está senndo criada uma propriedade gatter de acesso de leitura
}