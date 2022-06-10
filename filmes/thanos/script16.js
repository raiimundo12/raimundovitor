function NAY(){
  
    let login = document.getElementById("nome").value;
    if(login == ""){
        alert('informe seu nome');

    }

    else{
        sessionStorage.setItem("usuario",login);
        alert(sessionStorage.getItem("usuario"));
        window.location = "filmes/index.html";
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