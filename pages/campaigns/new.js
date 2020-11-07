import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import Layout from '../../components/layout';
import factory from '../../ethereum/factory'
import web3 from '../../ethereum/web3'
import { Link, Router } from '../../routes';/**link object right
here is a react component that allows us to 
render anchor tags into our React components and navigate. The router 
object allows us to programmatically redirect people from one page
to another page inside of our app */


class CampaignNew extends Component {
    state = {
        minimumContribution: '',
        errorMessage: '',
        loading: false
    };

    // onSubmit () {
    //     /*this.onsubmit wont work within <Form>, unless we use some function
    //     binding into <Form>. instead we're using a different sintax for 
    //     creating our method, which is as following*/
    // }
    onSubmit = async (event) => {
        event.preventDefault();/**this will keep the browser from attempting
        to submit the form automatically. That's the same reason why we 
        do not write the expression "onSubmit={this.onSubmit}" like 
        "onSubmit={this.onSubmit()}", within the <Form /> expression down below*/
        this.setState({ loading: true, errorMessage: '' })/**
        el simbolito de loading aparece cuando le damos click al boton
        que es cuando entra en accion onSubmit */
        try {
            const accounts = await web3.eth.getAccounts();
            await factory.methods
                .createCampaign(this.state.minimumContribution)
                .send({
                    from: accounts[0]
                });/**it is not needed to add the gas key, because we're using
                metamask and it address that issue automatically of us*/
            Router.pushRoute('/');/** So immediately after we successfully create 
            our contract we then want to redirect our user over to our
            campaign index page*/
        } catch (err) {
            this.setState({ errorMessage: err.message });
        }
        this.setState({ loading: false })/**
        cuando sale del try-catch statement se pone loading=false,
        y desaparece el simbolito de loading */
    };

    render() {
        return (
            <Layout>
                <h3>Create a campaign</h3>
                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                    {/**error prop is our error state message
                     * the expression "!!" is for converting the input string
                     * into boolean, which is the proper input type for 
                     * error prop
                     */}
                    <Form.Field>
                        <label>Minimun Contribution</label>
                        <Input 
                            label='wei' 
                            labelPosition='right'
                            value={this.state.minimumContribution}
                            onChange={event =>
                                this.setState({minimumContribution: event.target.value})}
                        />

                    </Form.Field>
                    <Message error header="Oops!" content={this.state.errorMessage} />{/**
                     * content prop is a shorthand for handling error messages
                     */}
                    <Button loading={this.state.loading} primary>Create!</Button>

                </Form>
            </Layout>

        );
    }
}

export default CampaignNew;