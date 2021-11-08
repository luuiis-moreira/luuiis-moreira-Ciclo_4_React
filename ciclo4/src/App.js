import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './views/Home'
import { Menu } from './components/Menu';

import { ListarCliente } from './views/Cliente/Listar/';
import { CadastrarCliente } from './views/Cliente/Cadastrar';
import { DelCliente } from './views/Cliente/Excluir';
import { AtualizarCliente } from './views/Cliente/Atualizar';

import { ListarServico } from './views/Servico/Listar';
import { CadastrarServico } from './views/Servico/Cadastrar';
import { DelServico } from './views/Servico/Excluir';
import { AtualizarServico } from './views/Servico/Atualizar';

import { ListarPedido } from './views/Pedido/Listar';
import { CadastrarPedido } from './views/Pedido/Cadastrar';
import { DelPedido } from './views/Pedido/Excluir';
import { AtualizarPedido } from './views/Pedido/Atualizar';

import { ListarProdutos } from './views/Produto/Listar';
import { CadastrarProduto } from './views/Produto/Cadastrar';

import { ListarCompras } from './views/Compra/Listar';
import { CadastrarCompra } from './views/Compra/Cadastrar';
import { AtualizarProduto } from './views/Produto/Atualizar';
import { DelProduto } from './views/Produto/Excluir';
import { ListarItemPedido } from './views/ItemPedido/Listar';
import { ListarItemCompra } from './views/ItemCompra/Listar';
import { DelCompra } from './views/Compra/Excluir';
import { AtualizarCompra } from './views/Compra/Atualizar';



function App() {
  return (
    <div>
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/" component={Home} />

          <Route path="/listar-cliente" component={ListarCliente} />
          <Route path="/cliente/:id" component={AtualizarCliente} />
          <Route path="/excluir-cliente/:id" component={DelCliente} />
          <Route path="/cadastrarCliente" component={CadastrarCliente} />

          <Route path="/listar-pedido" component={ListarPedido} />
          <Route path="/pedido/:id" component={AtualizarPedido} />
          <Route path="/excluir-pedido/:id" component={DelPedido} />
          <Route path="/cadastrarPedido" component={CadastrarPedido} />

          <Route path="/listar-servico" component={ListarServico} />
          <Route path="/servico/:id" component={AtualizarServico} />
          <Route path="/excluir-servico/:id" component={DelServico} />
          <Route path="/cadastrarServico" component={CadastrarServico} />

          <Route path="/listar-produto" component={ListarProdutos} />
          <Route path="/produto/:id" component={AtualizarProduto} />
          <Route path="/excluir-produto/:id" component={DelProduto} />
          <Route path="/cadastrarProduto" component={CadastrarProduto} />

          <Route path="/listar-compra" component={ListarCompras} />
          <Route path="/compra/:id" component={AtualizarCompra}/>
          <Route path="/excluir-compra/:id" component={DelCompra} />
          <Route path="/cadastarcompra" component={CadastrarCompra} />

          <Route path="/listar-itempedido" component={ListarItemPedido} />

          <Route path="/listar-itemcompra" component={ListarItemCompra} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
