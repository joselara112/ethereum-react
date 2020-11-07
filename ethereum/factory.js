import web3 from './web3';//se importa el script que se hizo para reajustar el provider (cambiar del provider default de metamask (0.0) al nuevo (1.0))
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    //'0x641E34eA561Ff58b9D74aF14443B0CD734724ce4'
    '0xa4Df56FDB20188C580602365C3902b67cf68AEEd'
);/**el primer argumento es el abi del 
contrato ya compilado, el segundo argumento es la
direccion de ese contrato en la red ethereum

este script sirve para convertir en un objeto
JS al contrato CampaignFactory que esta en la
red ethereum. los otros scripts van a importar
este script*/

export default instance;
