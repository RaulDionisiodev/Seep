import React, { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro';
import ListaDeNotas from './components/ListadeNotas';
import "./assets/App.css";
import './assets/index.css';
import ListaDeCategoria from './components/ListaDeCategorias';
import ArrayDeNotas from './dados/Notas';
import Categorias from './dados/Categorias';
class App extends Component {

  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();

  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          categorias={this.categorias}
          criarNota={this.notas.adicionarNota.bind(this.notas)} />
        <main className='conteudo-principal'>
          <ListaDeCategoria
            adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
            categorias={this.categorias} />
          <ListaDeNotas
            apagarNota={this.notas.apagarNotas.bind(this.notas)}
            notas={this.notas.notas} />
        </main>

      </section>
    );
  }
}

export default App;
