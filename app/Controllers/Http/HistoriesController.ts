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

    // public async store ({ request }: HttpContextContract) {

    // }
}
