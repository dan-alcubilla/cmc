import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PagesController {
    public home({ view }: HttpContextContract) {
        return view.render('welcome')
    }

    // public historias({ view }: HttpContextContract) {
    //     return view.render('historias')
    // }

    // public consultas({ view }: HttpContextContract) {
    //     return view.render('consultas')
    // }
}
