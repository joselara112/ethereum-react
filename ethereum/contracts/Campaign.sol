pragma solidity >=0.4.17;

contract CampaignFactory{
    address[] public deployedCampaigns;//lista de las instancias del contrato Campaign deployed en la blockchain
    function createCampaign(uint minimum) public {
        address newCampaign = new Campaign(minimum, msg.sender);/*sender property is ether
        address of whom is attemting to create the contract*/
        deployedCampaigns.push(newCampaign);//agrega nueva instancia de Campaign a la lista
    }
    function getDeployedCampaigns() public view returns (address[]) {
        /*el keyword "view" significa que no se puede modificar ningun dato dentro del contrato
        por esta funcion*/
        return deployedCampaigns;
    }
}

contract Campaign {
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;/*conteo de contribuyentes que aprobaron el request.
        se usa mapping para ahorrar gas en las busquedas, comparado con listas*/
    }/*struct is a definition of a dictionary-like object, this does not create a new variable
    like the ones below*/
    
    Request[] public requests;/*lista de requests hechas por el contrato*/
    address public manager;
    uint public minimumContribution;
    /*address[] public approvers; lista de contribuyentes. 
    time (and money) consuming process a la hora de realizar el proceso de votacion*/
    mapping(address => bool) public approvers;//lesser time and money consuming process
    uint public approversCount;//conteo de contribuyentes
    
    
    modifier restricted() {
        require(msg.sender == manager);
        _;/*esta linea es para que el modifier pase toda la funcion que se quiere modificar
        por esta funcion*/
    }
    
    
    function Campaign(uint minimum, address creator) public {
        manager = creator;//creator comes from CampaignFactory contract
        minimumContribution = minimum;//minima cantidad de wei que un contribuyente puede donar
    }
    function contribute() public payable {
        require(msg.value > minimumContribution);/*condicion para contribuir*/
        //approvers.push(msg.sender);/*push es un append en la lista de approvers. time consuming process*/
        approvers[msg.sender] = true;//lesser time consuming process
        approversCount++;//se agrega un contribuyente
    }
    function createRequest(string description, uint value, address recipient)
        public restricted {
        /*creamos la variable "newRequest" del tipo "Request"
        y luego a la derecha del "=" creamos una nueva instance de "Request"*/
        Request memory newRequest = Request({//hay que especificar que se tiene que guardar la variable en "memory"
            description: description,
            value: value,
            recipient: recipient,
            complete: false,
            approvalCount: 0//no hace falta inicializar referece type (mapping)
        });
        /*Alternative syntax equivalent of the above*/
        //Request newRequest = Request(description, value, recipient, false);
        
        requests.push(newRequest);/*agregamos el nuevo request a la lista de request*/
        
    }
    function approveRequest(uint index) public {
        Request storage request = requests[index];/*se asigna el valor a una variable local para ahorrar
        gas en las busquedas repetidas con mapping. se usa "storage" para que se guarde los cambios 
        del valor de requests[index] en la variable global*/
        require(approvers[msg.sender]);//comprobar que el aprobador es contribuyente
        require(!request.approvals[msg.sender]);/*se corrobora que la direccion NO este en el 
        mapping de approvals*/
        
        request.approvals[msg.sender] = true;//se establece que la direccion ya voto
        request.approvalCount++;//se suma un voto positivo mas. no se cuentan los votos negativos
        
    }
    
    function finalizeRequest(uint index) public restricted {
       Request storage request = requests[index];//se busca una sola vez en la lista requests, y se coloca "storage" para asegurar que se guarden los cambios en la variable global
        require(!request.complete);//complete debe ser falso. se finaliza un request SOLO una vez
        require(request.approvalCount > (approversCount/2));
        request.recipient.transfer(request.value);/*se transfieren los fondos a la cuenta del recipient.
        como recipient es del tipo address, tiene incorporado el method "transfer"*/
        request.complete = true;
        
       
    }
    function getSummary() public view returns (
        uint, uint, uint, uint, address
        ) {
        return (
            minimumContribution,
            this.balance,
            requests.length,
            approversCount,
            manager
        );
    }
    function getRequestsCount() public view returns (uint) {
        return requests.length;
    }
}