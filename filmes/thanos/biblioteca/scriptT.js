function floatParaTexto(numero) {
    numero = numero.toFixed(2); // Duas casas decimais

    texto = numero.toString();
    texto = texto.replace(".", ","); // substitui a vírgula por ponto 

    return texto;
  }

  function remover(nome){
    alert(nome);
    var x = document.getElementById(nome);
var produtosListados =	document.getElementsByClassName("nomeprod");
   for(var i =0; i<produtosListados.length; i++){
       if(produtosListados.item(i).innerHTML==nome){
           var itemEx=(produtosListados.item(i).parentNode);
           var el=itemEx.parentElement.children[1];
           var valor=parseFloat(itemEx.parentElement.children[0].children[1].innerHTML);
           var quantidade=parseInt(el.children[1].innerHTML);
           el.children[1].innerHTML=0;
           retirarTotal=(parseFloat(document.getElementById("total").innerHTML))-(parseFloat(quantidade*valor));
      alert(parseFloat(quantidade*valor));
            document.getElementById("total").innerHTML = floatParaTexto(retirarTotal);
           }
       }
  x.remove(0);


  }

  // Apenas prevenção para pessoas que digitam ponto de milhar por costume
  function removePonto(x) {
    x.value = x.value.replace('.', '');
  }