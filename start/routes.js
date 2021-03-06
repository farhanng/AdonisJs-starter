'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')

Route.on('/').render('welcome')

Route.group(()=> {
    Route.resource('/sampleroutes','SampleController');
}).prefix('v1/samplegrouproutes');

Route.group(()=> {
    Route.resource('/anothersampleroutes','AnotherSampleController');
}).prefix('v1/anothersamplegrouproutes');

Route.group(()=> {
    Route.post('/register','UserController.register');
    Route.post('/login','UserController.login');
}).prefix('api/v1');


Route.group(()=> {
    Route.get('/secretpage','HomeController.secretPage');
    Route.get('/user','UserController.getList');
}).prefix('api/v1').middleware('token');