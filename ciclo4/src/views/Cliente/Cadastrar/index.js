import axios from "axios";
import { Link } from "react-router-dom"
import { useState } from "react/cjs/react.development"
import { Alert, Button, Container, Form, FormGroup, Input, Label } from "reactstrap"
import { api } from "../../../config";

export const CadastrarCliente = () => {

    const [servico, setServico] = useState({
        nome: '',
        endeco: '',
        cidade: '',
        uf: '',
        nascimento: '',
        clienteDesde: ''


    });

    const [status, setStatus] = useState({
        nome: '',
        endeco: '',
        cidade: '',
        uf: '',
        nascimento: '',
        clienteDesde: ''
    });

    const valorInput = e => setServico({
        ...servico, [e.target.name]: e.target.value
    });



    const cadCliente = async e => {
        e.preventDefault();
        console.log(servico);

        const headers = {
            'Content-Type': 'application/json'
        }

        await axios.post(api + "/clientes/novo-cliente", servico, { headers })
            .then((response) => {
                console.log(response.data.message);
                if (response.data.error) {
                    setStatus({
                        type: 'error',
                        message: response.data.message
                    });
                } else {
                    setStatus({
                        type: 'success',
                        message: response.data.message
                    });
                }
            })
            .catch(() => {
                console.log("Erro: Sem Conexão com a API.")
            })
    }

    return (
        <Container>
            <div className="d-flex">
                <div className="m-auto p-2">
                    <h1>Cadastrar Novo Cliente</h1>
                </div>
            </div>

            <hr className="m-1" />

            {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ""}

            {status.type === 'success' ? <Alert color="success">{status.message}</Alert> : ""}

            <Form className="p-2" onSubmit={cadCliente}>
                <FormGroup className="p-2">
                    <Label>Nome</Label>
                    <Input type="text" required name="nome" placeholder="Digite Seu Nome"
                        onChange={valorInput} />
                </FormGroup>
                <FormGroup className="p-2">
                    <Label>Endereço</Label>
                    <Input type="text" required name="endereco" placeholder="Digite Seu Endereço"
                        onChange={valorInput} />
                </FormGroup>
                <FormGroup className="p-2">
                    <Label>Cidade</Label>
                    <Input type="text" required name="cidade" placeholder="Digite Sua Cidade"
                        onChange={valorInput} />
                </FormGroup>
                <FormGroup className="p-2">
                    <Label>Estado</Label>
                    <Input type="text" required name="uf" placeholder="Digite Seu Estado"
                        onChange={valorInput} />
                </FormGroup>
                <FormGroup className="p-2">
                    <Label>Data nascimento</Label>
                    <Input type="date" required name="nascimento" placeholder="Digite Sua Data Nascimento"
                        onChange={valorInput} />
                </FormGroup>
                <FormGroup className="p-2">
                    <Label>Cliente Desde</Label>
                    <Input type="date" required name="clienteDesde" placeholder="Digite Desde Quando é Cliente"
                        onChange={valorInput} />
                </FormGroup>
                <Button type="submit" outline color="success">Cadastar</Button>{' '}
                <Button type="reset" outline color="dark" size="sm" className="mx-4">Limpar Dados</Button>


            </Form>
        </Container>
    )
}