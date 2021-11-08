import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';
import Home from '../Img/Home.png'
import TiAcademy from '../Img/TiAcademy.png'
import Clientes from '../Img/Clientes.png'
import Pedidos from '../Img/Pedidos.png'
import Servicos from '../Img/Servicos.png'
import Produtos from '../Img/Produtos.png'
import Compras from '../Img/Compras.png'

export const Menu = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="info" dark expand="md">
                <Container className="d-flex">
                    <NavbarBrand href="/"><img src={TiAcademy} width="70" height="70" alt="Pagina Inicial" class="border border-dark rounded-circle"/></NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="m-auto" navbar>
                            <NavItem className="m-auto">
                                <NavLink href="/" className="text-center px-5"><img src={Home} width="35" height="35" alt="Pagina Inicial" /><h6 className="pt-2">Home</h6></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/listar-cliente" className="text-center px-5"><img src={Clientes} width="35" height="35" alt="Pagina Inicial" /><h6 className="pt-2">Clientes</h6></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/listar-servico" className="text-center px-5"><img src={Servicos} width="35" height="35" alt="Pagina Inicial" /><h6 className="pt-2">Serviços</h6></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/listar-pedido" className="text-center px-5"><img src={Pedidos} width="35" height="35" alt="Pagina Inicial" /><h6 className="pt-2">Pedidos</h6></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/listar-produto" className="text-center px-5"><img src={Produtos} width="35" height="35" alt="Pagina Inicial" /><h6 className="pt-2">Produtos</h6></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/listar-compra" className="text-center px-5"><img src={Compras} width="35" height="35" alt="Pagina Inicial" /><h6 className="pt-2">Compras</h6></NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
    );
};