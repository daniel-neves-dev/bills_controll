
class Despesa{
  constructor(ano, mes, dia, tipo, descricao, valor) {
    this.ano = ano
    this.mes = mes
    this.dia = dia
    this.tipo = tipo
    this.descricao = descricao
    this.valor = valor
  }

  // percorrer array
  validarDados() {
    for (let i in this) {

      if (this[i] === undefined || this[i] === null) {
        return false;
      } else if (this[i] === '') {
        return false;
      }
    }
    return true;
  }
}

//garvar dados no local storage
class bancoDados{
  constructor() {
    let id = localStorage.getItem('id')
    if(id === null){
      localStorage.setItem('id', 0)
    }
  }
  getProximoId(){
    let proximoId = localStorage.getItem('id')
    return parseInt(proximoId)+1
  }
  gravar(dados){
    let id = this.getProximoId()
    localStorage.setItem(id, JSON.stringify(dados))
    localStorage.setItem('id', id)
  }
}

let bd = new bancoDados()

// get ids de Registro de nova despesa
function adicionarDespesa() {
  let ano = document.getElementById('ano').value
  let mes = document.getElementById('mes').value
  let dia = document.getElementById('dia').value
  let tipo = document.getElementById('tipo').value
  let descricao = document.getElementById('descricao').value
  let valor = document.getElementById('valor').value

  let despesa = new Despesa(ano, mes, dia, tipo, descricao, valor)

  // garvando dados
  if(despesa.validarDados()){
    bd.gravar(despesa)

    document.getElementById('top_style').className = "modal-header text-success"
    document.getElementById('top_message').innerHTML = 'Dados salvos'
    document.getElementById('main_message').innerHTML = 'Despes gravada com sucesso'
    document.getElementById('modal_btn').className = "btn btn-success"
    document.getElementById('modal_btn').innerHTML = "Voltar"

    $('#modalMenssagem').modal('show')

  } else{
    document.getElementById('top_style').className = "modal-header text-danger"
    document.getElementById('top_message').innerHTML = 'Erro ao salvar dados'
    document.getElementById('main_message').innerHTML = 'Você deve preecher todos os dados'
    document.getElementById('modal_btn').className = "btn btn-danger"
    document.getElementById('modal_btn').innerHTML = "Voltar e coorigir"

    $('#modalMenssagem').modal('show')
  }
}


