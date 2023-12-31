/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', 'PagesController.home')

Route.get('/historias', 'HistoriesController.index').as('historias')
Route.get('/historias/crear', 'HistoriesController.form')
Route.post('/historias/crear/form','HistoriesController.store')
Route.get('/historias/editar/:id','HistoriesController.edit')
Route.put('/historias/editar/:id', 'HistoriesController.update')
Route.get('/historias/borrar/:id','HistoriesController.destroyHistory')
Route.delete('/historias/borrar/:id', 'HistoriesController.destroy')

Route.get('/consultas', 'PagesController.consultas').as('consultas')
