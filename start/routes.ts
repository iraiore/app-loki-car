/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import VeiculosController from '#controllers/veiculos_controller'
import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home')
// router.on('/').render('pages/autor')

router.resource('veiculos', VeiculosController)

//router.on('/index').render('pages/veiculos/index')