import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import History from 'App/Models/History'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class HistoriesController {
  public async index ({ view }: HttpContextContract) {
    const histories = await History.all()

    return view.render('histories/index', {histories})
  }

  public async form ({ view }: HttpContextContract) {
    return view.render('histories/store')
  }

  public async store ({ request, response }: HttpContextContract) {
    const validationSchema = schema.create({
      firstName: schema.string({ trim: true }, [rules.maxLength(55)]),
      lastName: schema.string({ trim: true }, [rules.maxLength(55)]),
      cedula: schema.string({ trim: true }, 
        [
          rules.maxLength(8), 
          rules.minLength(6),
          rules.unique({ table: 'histories', column: 'cedula' }),
          rules.regex(/^[0-9]+$/)
        ]),
      birthday: schema.date(),
      email: schema.string({ trim: true }, 
        [
          rules.email(),
          rules.normalizeEmail({
            allLowercase: true,
          })
        ]),
      cellphone: schema.string({ trim: true },
        [
          //rules.mobile({ locale:['es-VE'] }),
          rules.regex(/^04\d{2}-\d{7}$/),
          rules.maxLength(12),
          rules.minLength(12)
        ]),
      filiation: schema.string({ trim: true }, [rules.maxLength(55)]),
      profession: schema.string({ trim: true}, [rules.maxLength(55)]),
      address: schema.string({ trim: true}, [rules.maxLength(155)]),
      nationality: schema.string({ trim: true}, [rules.maxLength(55)]),
    })

    const validateData = await request.validate({
      schema: validationSchema,
      messages: {
        'firstName.required': 'Debe ingresar al menos un nombre.',
        'firstName.maxLength': 'No debe exceder 55 caracteres.',
        'lastName.maxLength': 'Debe ingresar al menos un apellido.',
        'lastName.required': 'No debe exceder 55 caracteres.',
        'cedula.required': 'El número de cédula es obligatorio.',
        'cedula.maxLength': 'Debe ingresar un número de cédula valido.',
        'cedula.minLength': 'Debe ingresar un número de cédula valido.',
        'cedula.unique': 'El número de cédula ingresado ya se encuentra registrado.',
        'cedula.regex': 'Debe ingresar un número.',
        'birthday.required': 'Debe ingresar una fecha.',
        'email.email': 'Debe ingresar un correo valido.',
        'cellphone.regex': 'Ingrese un número valido.',
        'cellphone.maxLength': 'Ingrese un número valido.',
        'cellphone.minLength': 'Ingrese un número valido.',
        'filiation.maxLength': 'No debe exceder 55 caracteres.',
        'profession.maxLength': 'No debe exceder 55 caracteres.',
        'address.maxLength': 'No debe exceder 155 caracteres.',
        'nationality.maxLength': 'No debe exceder 55 caracteres.',
      }
    })

    await History.create({
      firstName: validateData.firstName,
      lastName: validateData.lastName,
      cedula: validateData.cedula,
      birthday: request.input('birthday'),
      email: validateData.email,
      cellphone: validateData.cellphone,
      filiation: validateData.filiation,
      profession: validateData.profession,
      address: validateData.address,
      nationality: validateData.nationality,
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

  public async destroyHistory ({ view, params }: HttpContextContract) {
    const history = await History.findOrFail(params.id)
    return view.render('histories/delete', {history})
  }

  public async destroy ({ params, response }: HttpContextContract) {
    const history = await History.findOrFail(params.id)

    await history.delete()

    return response.redirect('/historias')
  }
}
