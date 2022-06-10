function NAY(){
  
    let login = document.getElementById("nome").value;
    if(login == ""){
        alert('informe seu nome');

    }

    else{
        sessionStorage.setItem("usuario",login);
        alert(sessionStorage.getItem("usuario"));
        window.location = "filmes/indexxx.html";
    }

    // function olapai(){
    //     document.getElementById('nome').value = "seja bem-vindo(a)" +
    //     sessionStorage.getItem('login');
    // }

}

    function olapai(){

        //alert(sessionStorage.getItem("usuario"));
        document.getElementById('max').value = ("Bem-vindo ")+sessionStorage.getItem("usuario");

    }





    // principal


    total = 0.00;

function adiciona(id)
{
    calcula(id,"adicao");
}

function remove(id)
{
    calcula(id,"subtracao");
}    
    
function calcula(id,operacao)
{
        nomeid  = "nome"+id;
        precoid = "preco"+id;
        qtdid   = "qtd"+id;
        
        nome  = document.getElementById(nomeid).innerHTML;
        
        preco = document.getElementById(precoid).innerHTML;    
        preco = textoParaFloat(preco);
        
        qtd   = document.getElementById(qtdid).innerHTML;
        qtd   = parseInt(qtd);

        //Debug
        //alert("Produto: " + nome + "\n Preço: " + preco);    
        
        if(operacao=="adicao")
        {
            total = total + preco;
            qtd = qtd + 1;
        }
        else
        {
            total = total - preco;
            qtd = qtd - 1;
        }
        
        document.getElementById(qtdid).innerHTML = qtd;

        document.getElementById("total").innerHTML = floatParaTexto(total);
}  


// Converte   [valor texto com vírgula para  centavos]    para    [float]

function textoParaFloat(texto)
{
// Retira pontos que separam milhar se existirem. Ex: 1.000,25 vira 1000,25
texto = texto.replace("." , "");

// Substitui vírgula separando a casa decimal por ponto ex: 1000,25 vira 1000.25
texto = texto.replace("," , "."); // isso é necessário para converter para float corretamente

// Converte de texto para número real
numero = parseFloat(texto);

return numero;  // Retorna um número float para ser usado para fazer cálculos    
}



// Converte   [valor float com ponto para casa decimal]  para  [texto com vírgula para separar centavos]

function floatParaTexto(numero)
{
numero = numero.toFixed(2); // Duas casas decimais

texto = numero.toString(); 
texto = texto.replace("." , ","); // substitui a vírgula por ponto 

return texto;
}



// Apenas prevenção para pessoas que digitam ponto de milhar por costume
function removePonto(x)
{
x.value = x.value.replace('.', '');
}		