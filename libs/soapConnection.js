const EasySoap = require('easysoap');

// define soap params

//https://svn.apache.org/repos/asf/airavata/sandbox/xbaya-web/test/Calculator.wsdl
//http://www.dneonline.com/calculator.asmx?wsdl
const params = {
    host: 'www.dneonline.com',
    path: '/calculator.asmx',
    wsdl: '/calculator.asmx?wsdl',

    // set soap headers (optional)
    // headers: [{
    //     'name': 'item_name',
    //     'value': 'item_value',
    //     'namespace': 'item_namespace'
    // }]
}

/*
 * create the client
 */
var soapClient = EasySoap(params);

/*
 * get all available functions
 */
soapClient.getAllFunctions()
   .then((functionArray) => { console.log(functionArray , "?"); })
   .catch((err) => { throw new Error(err); });