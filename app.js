
//BOTAO PARA FUNCIONAR O PESQUISAR

//vamos criar uma função ao inves de pegar uma ja definida

//let cria a variavel e function a funcao que possui varias variaveis


function pesquisar() {

    // section.innerHTML= para aparecer as informações dentro da tag no codigo html, por boas pratica contudo iremos criar outra variavel
    //isto pq ao inves de chamarmos todo o httml nos ja listamos etodos os dados em apenas uma


    let section = document.getElementById("resultados-pesquisa")
    console.log(section);


    //let + nome da variavel + o igual que neste caso esta informando que vamos buscar este elemento por seru id que
    // esta indicado no html, o resultado pesquisa

    //document e a forma que acessamo as informaçoes no html, com getElementById estamos selecionando o
    // elemento que tem o seguinte id = resultados-pesquisa

    //quando escrevemos uma palavra para uma variavel onde possui duas palavras chamamos de camel cas
    //em resumo quando temos 2 palavras para uma variavel a 2 é maiscula

    //BOTAO PARA FUNCIONAR O PESQUISAR

    //campopesquisa vai pegar a resposta enviada
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    //SE NAO HOUVER PESQUISA NADA APARECERA

    if(!campoPesquisa){
        section.innerHTML ="<p> NADA ENCONTRADO : VOCE NAO DIGITOU UM ATLETA OU ESPORTE</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let titulo = "";
    let descrição ="";
    let tags ="";
    
    
    for (let dado of dados) {

        titulo = dado.titulo.toLowerCase()
        descrição = dado.descrição.toLowerCase()
        tags = dado.tags.toLowerCase()

        if (titulo.includes(campoPesquisa) || descrição.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            //cria um novo elemento
            resultados += `
            <div class="item-resultado ">
                <h2> <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
    
                ${dado.descrição}
        
                <a class="classlink" href=${dado.descrição} target="_blank">SAIBA
                    MAIS</a>
            
            </div>`;
        }
    }

    //aqui vamos definir se o resultado estiver diferente do que vimos para aparecer a mensagem do erro
    if(!resultados ){
        resultados = "<p> NADA ENCONTRADO : VOCE PESQUISOU UUM ESPORTE OUU ATLETA NAO EXISTENTE</p>"
    }

    section.innerHTML = resultados;



}

/*lembrando que pra ver o nome colocamos o numero de sua posição começando pelo 0
por exemplo*/

/*0-Rebeca Andrade*/
/*1-Rayssa Leal*/
/*2-Beatriz Souza*/


// section.innerHTML= para aparecer as informações dentro da tag no codigo html, por boas pratica contudo iremos criar outra variavel
//isto pq ao inves de chamarmos todo o httml nos ja listamos etodos os dados em apenas uma





