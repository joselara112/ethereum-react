import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    //we are un the browser and metamask is running
    web3 = new Web3(window.web3.currentProvider);
} else {
    //we are on the server or the user is not running metamask
    const provider = new Web3.providers.HttpProvider(
        'https://kovan.infura.io/v3/08fb34b14f2648f89024b2413a6dd62f'
    );
    web3 = new Web3(provider);

}




//const web3 = new Web3(window.web3.currentProvider);
/**se cambia el proveedor por defecto que tiene
 * metamask
 * window es una variable global del browser!!!! que es donde esta
 * instalado metamask as a plugin
 */
export default web3