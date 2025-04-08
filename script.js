let inputCompras = document.getElementById("inputCompras")

let listaCompras = document.getElementById("listaCompras")

let mensagem = document.getElementById("mensagem")


let mensagemErro = "ERRO"
let mensagemSucesso = "SUCESSO"

function compraAdd() {
  let valorCompras = inputCompras.value.trim()
  

  if (valorCompras == ""){
    mensagem.textContent = mensagemErro
   mensagem.className = "msg"
  } else{
    mensagem.textContent = ""
    mensagem.classList.remove("msg")
    function compraAddSucesso() {
      
      let novaCompra = document.createElement("li")
      listaCompras.appendChild(novaCompra)
    
      function listaHTML(){
        let checkboxImage = document.createElement("div")
        let inputCheckbox = document.createElement("input")
        inputCheckbox.type = "checkbox"
        checkboxImage.appendChild(inputCheckbox)
      
        novaCompra.appendChild(checkboxImage)
    
    
    
        let compraAdicionada = document.createElement("p")
        
        compraAdicionada.textContent = valorCompras
    
        let botaoExcluir = document.createElement("button")
    
        novaCompra.appendChild(compraAdicionada)
        novaCompra.appendChild(botaoExcluir)
        
        function excluirCompra(){
          novaCompra.remove()
        }
        
        botaoExcluir.onclick = () => excluirCompra()
    
      }
      listaHTML()
    }
    compraAddSucesso()
  }

  inputCompras.value = ""
}

