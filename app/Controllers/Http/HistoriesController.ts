import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import History from 'App/Models/History'

export default class HistoriesController {
  public async index ({ view }: HttpContextContract) {
    const histories = await History.all()
    return view.render('histories/index', {histories})
  }

  public async form ({ view }: HttpContextContract) {
    return view.render('histories/store')
  }

  public async store ({ request, response }: HttpContextContract) {
    await History.create({
      firstName: request.input('firstName'),
      lastName: request.input('lastName'),
      cedula: request.input('cedula'),
      birthday: request.input('birthday'),
      email: request.input('email'),
      cellphone: request.input('cellphone'),
      filiation: request.input('filiation'),
      profession: request.input('profession'),
      address: request.input('address'),
      nationality: request.input('nationality'),
    })

    return response.redirect('/historias')
  }
}
