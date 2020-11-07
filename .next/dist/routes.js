'use strict';

var routes = require('next-routes')();

routes.add('/campaigns/new', '/campaigns/new').add('/campaigns/:address', '/campaigns/show') /**la expresion ":" indica que lo que sigue
                                                                                             es un "wildcard" */
.add('/campaigns/:address/requests', '/campaigns/requests/index').add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUNLLEFBREwsSUFDUyxBQURULGtCQUMyQixBQUQzQixrQkFFSyxBQUZMLElBRVMsQUFGVCx1QkFFZ0MsQUFGaEMsbUJBRWtELEFBRmxEOztDQUlLLEFBSkwsSUFJUyxBQUpULGdDQUl5QyxBQUp6Qyw2QkFLSyxBQUxMLElBS1MsQUFMVCxvQ0FLNkMsQUFMN0M7O0FBT0EsT0FBTyxBQUFQLFVBQWlCLEFBQWpCIiwiZmlsZSI6InJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9qb3NlbC9Eb2N1bWVudHMvU21hcnRDb250cmFjdHMva2lja3N0YXJ0In0=