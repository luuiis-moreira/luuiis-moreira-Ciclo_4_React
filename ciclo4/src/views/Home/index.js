import { Container } from "reactstrap";
import Clientes from '../../Img/Clientes.png'
import Pedidos from '../../Img/Pedidos.png'
import Servicos from '../../Img/Servicos.png'
import Produtos from '../../Img/Produtos.png'
import Compras from '../../Img/Compras.png'
export const Home = () => {
    return (
        <div >
            <div className="m-auto text-center p-5">
                <h2 className="mt-3">Seja Muito Bem Vindo(a) ao Nosso Sistema</h2>
                <h3 className="mt-4">Você está na página inicial</h3>
                <h6 className="mt-4">Escolha uma das opções abaixo para começar</h6>
            </div>
            <Container className="d-flex bd-highlight">

                <div className="m-auto d-inline-flex align-items-center p-5">
                    <div className="p-5">
                        <a href="/listar-cliente" className="btn btn-outline-primary btn-lg">
                            <img src={Clientes} width="100" height="100" alt="Listar Usuarios" /><h6 className="mt-3">Area clientes</h6> </a>
                    </div>
                    <div className="p-5">
                        <a href="/listar-servico" className="btn btn-outline-primary btn-lg">
                            <img src={Servicos} width="100" height="100" alt="Listar Serviços" /><h6 className="mt-3">Area Serviços</h6></a>
                    </div>
                    <div className="p-5">
                        <a href="/listar-pedido" className="btn btn-outline-primary btn-lg">
                            <img src={Pedidos} width="100" height="100" alt="Listar Pedido" /><h6 className="mt-3">Area Pedidos</h6></a>
                    </div>
                    <div className="p-5">
                        <a href="/listar-produto" className="btn btn-outline-primary btn-lg">
                            <img src={Produtos} width="100" height="100" alt="Listar Produtos" /><h6 className="mt-3">Area Produtos</h6></a>
                    </div>
                    <div className="p-5">
                        <a href="/listar-compra" className="btn btn-outline-primary btn-lg">
                            <img src={Compras} width="100" height="100" alt="Listar Compras" /><h6 className="mt-3">Area Compras</h6></a>
                    </div>
                </div>
            </Container>
        </div>
    );
};