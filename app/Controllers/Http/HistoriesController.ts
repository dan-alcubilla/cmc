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

  public async edit ({ view, params }: HttpContextContract) {
    const history = await History.findOrFail(params.id)

    return view.render('histories/edit', {history})
  }

  public async update ({ request, response, params }: HttpContextContract) {
    const history = await History.findOrFail(params.id)

    history.firstName = request.input('firstName')
    history.lastName = request.input('lastName')
    history.cedula = request.input('cedula')
    history.birthday = request.input('birthday')
    history.email = request.input('email')
    history.cellphone = request.input('cellphone')
    history.filiation = request.input('filiation')
    history.profession = request.input('profession')
    history.address = request.input('address')
    history.nationality = request.input('nationality')
    await history.save()

    return response.redirect('/historias')
  }
}
