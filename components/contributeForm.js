import React, { Component } from 'react';
import { Button, Form, Input, Message } from 'semantic-ui-react';
import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';
import { Router } from '../routes';

class ContributeForm extends Component {
    state = {
        value: '',
        errorMessage: '',
        loading: false
    };
    onsubmit = async event => {
        event.preventDefault();/**no se ejecuta la funcion */
        const campaign = Campaign(this.props.address);
        this.setState({loading: true, errorMessage: ''})
        

        try {
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.contribute().send({
                from: accounts[0],
                value: web3.utils.toWei(this.state.value, 'ether')
            });
            Router.replaceRoute(`/campaigns/${this.props.address}`)/**refresh the page automatically after make the contribution */
        } catch (err) {
            this.setState({errorMessage: err.message})
        }
        this.setState({loading: false, value: ''});
    }
    render() {
        return (
            <Form onSubmit={this.onsubmit} error={!!this.state.errorMessage}>{/**se obvian los parentesis porque la funcion no se debe ejecutar aqui */}
                <Form.Field>
                    <label>Amount to Contribute</label>
                    <Input
                        value={this.state.value}
                        onChange={event => this.setState({ value: event.target.value })}
                        label="ether"
                        labelPosition="right"
                    />

                </Form.Field>
                <Button primary loading={this.state.loading}>Contribute!</Button>
                <Message error header="Ops!" content={this.state.errorMessage} />

            </Form>
        )
    }
}

export default ContributeForm