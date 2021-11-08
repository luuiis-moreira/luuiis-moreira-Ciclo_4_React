const express = require("express");
const cors = require("cors");
const {Sequelize} = require("./models");
const models = require("./models");
const app = express();

app.use(cors());

app.use(express.json());

let cliente = models.Cliente;
let itempedido = models.ItemPedido;
let pedido = models.Pedido;
let servico = models.Servico;
let compra = models.Compra;
let produto = models.Produto;
let itemcompra = models.ItemCompra;

app.put("/clientes/:id/atualizar-cliente", async(req, res) => {
    if (!await cliente.findByPk(req.params.id)) {
        return res.status(400).json({
            erro: true,
            message: "Falha! Cliente não encontrado."
        });
    }

    const clnt = {
        nome: req.body.nome,
        endereco: req.body.endereco,
        cidade: req.body.cidade,
        uf: req.body.uf,
        nascimento: req.body.nascimento,
        clienteDesde: req.body.clienteDesde
    };

    await cliente.update(clnt, {
        where: {id: req.params.id}
    }).then(function() {
        return res.json({
            error: false,
            message: "Cliente atualizado com Sucesso!"
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Falha! Não foi possível fazer atualização do cliente."
        });
    });
});

app.post("/clientes/novo-cliente", async(req, res) => {
    await cliente.create(
        req.body
    ).then(function() {
        return res.json({
            error: false,
            message: "Cliente cadastrado com sucesso!"
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Falha! Não foi possível cadastrar o cliente."
        });
    });
});

app.get("/cliente/:id/excluir", async(req, res) => {
    cliente.destroy({
        where: {id: req.params.id}
    }).then(function() {
        return res.json({
            error: false,
            message: "Cliente excluído com Sucesso!"
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Falha! Não foi possível fazer exclusão do cliente."
        });
    });
});

app.get("/clientes", async(req, res) => {
    await cliente.findAll({
        order: [["nome", "ASC"]]
    }).then(function(clientes) {
        res.json({
            error: false,
            clientes
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Falha! Não foi possível se conectar."
        });
    });
});

app.put("/compra/:id/atualizar-compra", async(req, res) => {
    if (!await compra.findByPk(req.params.id)) {
        return res.status(400).json({
            erro: true,
            message: "Falha! Não foi possível encontrar Compra."
        });
    }

    const prod = {
        data: req.body.data,
        ClienteId: req.body.ClienteId
    }

    await compra.update(prod, {
        where: {
            id: req.params.id
        }
    }).then(function() {
        return res.json({
            error: false,
            message: "Compra atualizado com Sucesso!"
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Falha! Não foi possível alterar o Compra."
        });
    });
});

app.post("/compra/add", async(req, res) => {
    await compra.create(
        req.body
    ).then(function(){
        return res.json({
            error: false,
            message: "Compra criada com Sucesso"
        });
    }).catch(function(){
        return res.status(400).json({
            error: true,
            message: "Não foi possivel realizar Compra"
        });
    });
});

app.get("/compra/:id/excluir-compra", async(req, res) => {
    if (!await compra.findByPk(req.params.id)) {
        return res.status(400).json({
            erro: true,
            message: "Falha! Serviço não encontrado."
        });
    }
    await compra.destroy({
        where: {id: req.params.id}
    }).then(function() {
        return res.json({
            error: false,
            message: "Compra excluído com Sucesso!"
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Falha! Não possível excluir a Compra!"
        });
    });
});

app.get("/todos-compras", async(req, res) => {
    await compra.findAll({
        order: [["ClienteId", "ASC"]]
    }).then(function(compras) {
        res.json({
            error: false,
            compras
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Falha! Não foi possível se conectar."
        });
    });
});

app.get("/item-compra", async(req, res) => {
    await itemcompra.findAll({
        order: [["valor", "ASC"]]
    }).then(function(itemcompra) {
        res.json({
            error: false,
            itemcompra
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Falha! Não foi possível se conectar."
        });
    });
});

app.get("/item-pedido", async(req, res) => {
    await itempedido.findAll({
        order: [["valor", "ASC"]]
    }).then(function(itempedido) {
        res.json({
            error: false,
            itempedido
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Falha! Não foi possível se conectar."
        });
    });
});

app.put("/pedidos/:id/atualizar-pedido", async(req, res) => {
    if (!await pedido.findByPk(req.params.id)) {
        return res.status(400).json({
            erro: true,
            message: "Falha! Pedido não encontrado."
        });
    }

    const ped = {
        data: req.body.data,
        ClienteId: req.body.ClienteId
    };

    await pedido.update(ped, {
        where: {id: req.params.id}
    }).then(function() {
        return res.json({
            error: false,
            message: "Pedido atualizado com Sucesso!"
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Falha! Não foi possível fazer atualização do pedido."
        });
    });
});

app.post("/pedidos/novo-pedido", async(req, res) => {
    await pedido.create(
        req.body
    ).then(function() {
        return res.json({
            error: false,
            message: "Pedido realizado com Sucesso!"
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Falha! Não foi possível realizar pedido."
        });
    });
});

app.get("/pedidos/:id/excluir-pedido", async(req, res) => {
    if (!await pedido.findByPk(req.params.id)) {
        return res.status(400).json({
            erro: true,
            message: "Falha! Pedido não encontrado."
        });
    }

    await pedido.destroy({
        where: {id: req.params.id}
    }).then(function() {
        return res.json({
            error: false,
            message: "Pedido excluído com Sucesso!"
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Falha! Não foi possível fazer a exclusão do pedido."
        });
    });
});

app.get("/pedidos", async(req, res) => {
    await pedido.findAll({
        raw: true
    }).then(function(pedidos) {
        res.json({
            error: false,
            pedidos
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Falha! Não foi possível se conectar."
        });
    });
});

app.put("/produto/:id/atualizar-produto", async(req, res) => {
    if (!await produto.findByPk(req.params.id)) {
        return res.status(400).json({
            erro: true,
            message: "Falha! Não foi possível encontrar Produto."
        });
    }

    const prod = {
        nome: req.body.nome,
        descricao: req.body.descricao
    }

    await produto.update(prod, {
        where: {
            id: req.params.id
        }
    }).then(function() {
        return res.json({
            error: false,
            message: "Produto atualizado com Sucesso!"
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Falha! Não foi possível alterar o Produto."
        });
    });
});

app.post("/produto/add", async(req, res) => {
    await produto.create(
        req.body
    ).then(function(){
        return res.json({
            error: false,
            message: "Produto criado com Sucesso"
        });
    }).catch(function(){
        return res.status(400).json({
            error: true,
            message: "Não foi possivel criar Produto"
        });
    });
});

app.get("/produto/:id/excluir-produto", async(req, res) => {
    if (!await produto.findByPk(req.params.id)) {
        return res.status(400).json({
            erro: true,
            message: "Falha! Serviço não encontrado."
        });
    }
    await produto.destroy({
        where: {id: req.params.id}
    }).then(function() {
        return res.json({
            error: false,
            message: "Produto excluído com Sucesso!"
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Falha! Não possível excluir o Produto!"
        });
    });
});

app.get("/todos-produtos", async(req, res) => {
    await produto.findAll({
        order: [["nome", "ASC"]]
    }).then(function(produtos) {
        res.json({
            error: false,
            produtos
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Falha! Não foi possível se conectar."
        });
    });
});


app.put("/servicos/:id/atualizar-servico", async(req, res) => {
    if (!await servico.findByPk(req.params.id)) {
        return res.status(400).json({
            erro: true,
            message: "Falha! Não foi possível encontrar Serviço."
        });
    }

    const serv = {
        nome: req.body.nome,
        descricao: req.body.descricao
    }

    await servico.update(serv, {
        where: {
            id: req.params.id
        }
    }).then(function() {
        return res.json({
            error: false,
            message: "Serviço atualizado com Sucesso!"
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Falha! Não foi possível alterar o serviço."
        });
    });
});

app.post("/servicos/add-novo-servico", async(req, res) => {
    await servico.create(
        req.body
    ).then(function() {
        return res.json({
            error: false,
            message: "Serviço criado com sucesso!"
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Falha! Não foi possível se conectar."
        });
    });
});

app.get("/servicos/:id/excluir-servico", async(req, res) => {
    if (!await servico.findByPk(req.params.id)) {
        return res.status(400).json({
            erro: true,
            message: "Falha! Serviço não encontrado."
        });
    }

    await servico.destroy({
        where: {id: req.params.id}
    }).then(function() {
        return res.json({
            error: false,
            message: "Serviço excluído com Sucesso!"
        });
    }).catch(function(erro) {
        return res.status(400).json({
            error: true,
            message: "Falha! Não possível excluir o Serviço!"
        });
    });
});

app.get("/servicos", async(req, res) => {
    await servico.findAll({
        order: [["nome", "ASC"]]
    }).then(function(servicos) {
        res.json({
            error: false,
            servicos
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Falha! Não foi possível se conectar."
        });
    });
});

let port = process.env.PORT || 3001;

app.listen(port, (req, res) => {
    console.log("Servidor ativo: http://localhost:3001");
});