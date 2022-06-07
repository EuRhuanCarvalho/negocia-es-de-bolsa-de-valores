class DateHelper {
    
    constructor() {

        throw new Error('Esta classe não pode ser instanciada');

    }

    static dataParaTexto(data) {

        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;

    }    
    
    static textoParaData(texto) {
        // fail fast com expressão regular
        if(!/\d{4}-\d{2}-\d{2}/.test(texto))
            throw new Error('Deve estar no formato aaaa-mm-dd');

        return new Date(.../*... spread operator usado para criar um objeto novo a 
        partir de um objeto existente.*/
        texto.split('-').map((item, indice) => item - indice % 2)); // arrow function: => simbolo que possibilita não precisar escrever fuction
            /* quando se tem apenas uma intrução não há necessidade de utilizar {} nem return, tranzendo tudo para apenas uma linha */
    }


}