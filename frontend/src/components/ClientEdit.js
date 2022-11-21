import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';

class ClientEdit extends Component {

    emptyItem = {
        name: '',
        email: '',
        status: '',
        cpf: '',
        valor: '',
        metodo: ''
    };

    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        if (this.props.match.params.id !== 'new') {
            const client = await (await fetch(`/clients/${this.props.match.params.id}`)).json();
            this.setState({item: client});
        }
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
    }

    async handleSubmit(event) {
        event.preventDefault();
        const {item} = this.state;

        await fetch('/clients' + (item.id ? '/' + item.id : ''), {
            method: (item.id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        this.props.history.push('/');
    }

    render() {
        const {item} = this.state;
        const title = <h2>{item.id ? 'Editar Cliente' : 'Adicionar Cliente'}</h2>;

        return <div>
            <AppNavbar/>
            <Container>
                {title}
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="name">Nome</Label>
                        <Input type="text" name="name" id="name" value={item.name || ''}
                               onChange={this.handleChange} autoComplete="name"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">E-mail</Label>
                        <Input type="text" name="email" id="email" value={item.email || ''}
                               onChange={this.handleChange} autoComplete="email"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="status">Status</Label>
                        <Input type="text" name="status" id="status" value={item.status || ''}
                               onChange={this.handleChange} autoComplete="status"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="cpf">Cpf</Label>
                        <Input type="text" name="cpf" id="cpf" value={item.cpf || ''}
                               onChange={this.handleChange} autoComplete="cpf"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="valor">Valor do Pedido</Label>
                        <Input type="text" name="valor" id="valor" value={item.valor || ''}
                               onChange={this.handleChange} autoComplete="valor"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="metodo">Método de Pagamento</Label>
                        <Input type="metodo" name="metodo" id="metodo" value={item.metodo || ''}
                               onChange={this.handleChange} autoComplete="metodo"/>
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary" type="submit">Salvar</Button>{' '}
                        <Button color="secondary" tag={Link} to="/">Cancelar</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    }
}

export default withRouter(ClientEdit);