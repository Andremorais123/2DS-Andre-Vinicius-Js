    // Funções

    let x = 'nada'

    console.log(x)

    x = 'oi'

    console.log(x)

    //Declarar uma função
    // estrutura nomeDaFunção (parâmetros) { funcionalidade
    function imprimeTexto(){
        console.log(texto)
    }

    imprimeTexto('Sou professor de front-end')
    imprimeTexto('Olá Mundo')

    function soma() {
        return 2+2
    }
    imprimeTexto(soma())
    //console.log(soma())
    function somaDeNumeros (numero1, numero2){
             return numero1 + numero2
    }
    imprimeTexto(somaDeNumeros( 10, 8))

    function divisaoDeNumeros(numero1, numero2){
        return abobora / cenoura
    }
    imprimeTexto(divisaoDeNumeros(10, 2))
    imprimeTexto(divisaoDeNumeros(2, 10))

    // ORdem de parâmetros

    function apresentacao(nome, idade){
        return 'Meu nome é $(nome'
    }