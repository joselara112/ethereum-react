/**para que este script corra se debe agregar en package.json
 * en el key "scripts"
 */
const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

/*se buscan los contratos previamente compilados en la carpeta \ethereum\build */
const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');
const { strictEqual } = require('assert');

let accounts;//lista de las cuentas de ether que estan en local ganache network
let factory;//a deployed instance of compiledFactory
let campaignAddress;
let campaign;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();//se piden las cuentas de ether que existen en ganache
    factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({ data: compiledFactory.bytecode })
        .send({ from: accounts[0], gas: '1000000' });
        /*comentarios of the above: factory es una nueva instancia 
        incorporada/implementada (deployed) en la red ethereum del
        contrato compiledFactory.
        El metodo Contract requiere que se transforme el key "interface", 
        que representa el ABI del contrato,
        dentro del archivo .json en un objeto javascript,
        por eso se usa JSON.parse.
        el metodo "deploy" que data sea tomado directo del archivo .json.
        se toma por defecto la primera cuenta de accoounts */
    await factory.methods.createCampaign('100').send({ 
        from: accounts[0],
        gas: '1000000'
    });/*con el contrato ya incorporado a la red, ahora se llama al
    metodo "createCampaign" que esta en el contrato y creamos una nueva
    instancia de "campaign". recuerda que factorycampaign es un contrato
    para poder crear instancias de "campaign". el valor de input de 
    '100' es el minimum amount que se especifica en el contrato 'campaing' */

    [campaignAddress] = await factory.methods.getDeployedCampaigns().call();
    /**el metodo getDeployedCampaigns es del tipo "view", 
     * lo cual quiere decir que no modifica ningun dato del contrato, 
     * por lo cual se puede llamar con el metodo "call", 
     * y no representa ningun pago para obtener la info */
    /*const newAddress = await factory.methods.getDeployedCampaigns().call();
    campaignAddress = newAddress[0];*/
    campaign = await new web3.eth.Contract(
        JSON.parse(compiledCampaign.interface),
        campaignAddress
    );/**como ya hemos deployed el contrato con el method createCampaign,
    * para asignar el valor del contrato a la variable campaign solo
    * necesitamos usar el method Contract y darle de input el ABI
    * y a direccion del contrato deployed
   */
});

describe('Campaigns', () => {
    it ('deploys a factory and a campaign', () => {
        assert.ok(factory.options.address);
        assert.ok(campaign.options.address);
    });
    it('marks caller as the campaign manager', async() => {
        const manager = await campaign.methods.manager().call();
        strictEqual(accounts[0], manager)/*se compara lo que queremos
         que sea (accounts[0]) con lo que realmente es (manager)*/
    });
    it('allows people to contribute money and marks them as approvers', async () => {
        await campaign.methods.contribute().send({
            value: '200',
            from: accounts[1]//cuenta diferente al manager
        });
        const isContributor = await campaign.methods.approvers(accounts[1]).call();/*apporvers 
        es un method del contrato porque es una variable declarada como public en campaign*/
        assert(isContributor);//si existe, fue agregado exitosamente el nuevo contribuyente
    });
    it('requires a minimum contribution', async () =>{
        try {
            await campaign.methods.contribute().send({
                value: '5',//menos de lo que seteamos como minimo
                from: accounts[1]
            });
            //assert(false);//si o si vamos a tener error dentro de este try
        } catch (err) {
            assert(err);
        }
    });
    it('allows a manager to make a payment request', async() => {
        await campaign.methods
            .createRequest('buy batteries', '123456', accounts[2])/*
            se monta el request 'buy batteries' que cuesta '123456' wei,
             y va destinado al proveedor que tiene la cuenta 'accounts[2]'*/
            .send({
                from: accounts[0],
                gas: '1000000'                
            });
        const request = await campaign.methods.requests(0).call();/*
        el input '0' es para devolver el primer elemento de la 
        lista de requests*/
        strictEqual('buy batteries',request.description);
    });
    /**prueba de todo el proceso */
    it('processes request', async () => {
        await campaign.methods.contribute().send({
            from: accounts[0],
            value: web3.utils.toWei('10', 'ether')
        });
        await campaign.methods
            .createRequest('buy stuffs', web3.utils.toWei('5', 'ether'), accounts[1])
            .send({from: accounts[0], gas: '1000000'});
        await campaign.methods.approveRequest(0).send({
            from: accounts[0],
            gas: '1000000'
        });
        await campaign.methods.finalizeRequest(0).send({
            from: accounts[0],
            gas: '1000000'
        });
        let balance = await web3.eth.getBalance(accounts[1]);
        balance = web3.utils.fromWei(balance, 'ether');
        balance = parseFloat(balance);
        console.log(balance);
        assert(balance > 104);
    });

});

 