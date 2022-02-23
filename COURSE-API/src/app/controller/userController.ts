import { Request, Response } from 'express'
import bcrypt from 'bcrypt';
import user_model from '../model/user_model';
import * as yup from 'yup';

let schema = yup.object().shape({
  name: yup.string().required().typeError('Nome é obrigatório'),
  email: yup.string().email().required(),
  phone: yup.string().required(),
  cpf: yup.string().required(),
  description: yup.string().required(),
  password: yup.string().required(),
});

class userController {
  public async index(request: Request, response: Response) {
    try {
      const data = await user_model.find({});

      return response.status(200).json({ data });
    } catch (error) {
      return response.status(400).json({ data: error });
    }
  }
  public async show(request: Request, response: Response) {
    try {
      const { id } = request.params;
      
      if (!id) {
        return response.status(400).json({ data: 'Identificador não localizado!!' });
      }
      const data = await user_model.findOne({ _id: id });

      return response.status(200).json({ data });
    } catch (error) {
      return response.status(400).json({ error });
    }
  }
  public async store(request: Request, response: Response) {
    try {

      const { email, cpf } = request.body;;
      if ((await schema.isValid({
        name: request.body.nome,
        email: request.body.email,
        phone: request.body.phone,
        cpf: request.body.cpf,
        description: request.body.description,
        password: request.body.password,
      }))) {
        return response.status(400).json({ data: 'Verefique se os seus dados estão corretos!' });
      }

      if (await (user_model.findOne({ email }))) {
        return response.status(400).json({ data: 'E-mail já existente' });
      }
      else if (await (user_model.findOne({ cpf }))) {
        return response.status(400).json({ data: 'CPF já existente' });
      }

      const passwordUser = request.body?.password;
      const passwordEncripted = await bcrypt.hash(passwordUser, bcrypt.genSaltSync(8));
      request.body.password = passwordEncripted;
  
      await user_model.create(request.body);

      return response.status(200).json({ data: 'Seu cadastro foi realizado com sucesso!' });
    } catch (error) {

      return response.status(400).json({ error });
    }
  }
  public async update(request: Request, response: Response) {
    try {
      const { id } = request.params;  
      await user_model.updateOne({ _id: id }, request.body);

      return response.status(200).json({ data: 'Seus dados foram atualizados com sucesso!' });
    } catch (error) {
      return response.status(400).json({ error });
    }
  }
  public async delete(request: Request, response: Response) {
    try {
      const { id } = request.params;
      
      if (!id) {
        return response.status(400).json({ data: 'Identificador não localizado!!' });
      }
      await user_model.updateOne({ _id: id }, { active: false });

      return response.status(200).json({ data: 'Usuário desativo com sucesso!' });
    } catch (error) {
      return response.status(400).json({ error });
    }
  }
}
export default new userController();