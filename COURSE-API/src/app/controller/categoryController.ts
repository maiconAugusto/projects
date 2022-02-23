import { Request, Response } from 'express'
import bcrypt from 'bcrypt';
import category_model from '../model/category_model';
import * as yup from 'yup';

let schema = yup.object().shape({
  name: yup.string().required().typeError('Nome é obrigatório'),
});

class categoryController {
  public async index(request: Request, response: Response) {
    try {
      const data = await category_model.find({});

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
      const data = await category_model.findOne({ _id: id });

      return response.status(200).json({ data });
    } catch (error) {
      return response.status(400).json({ error });
    }
  }
  public async store(request: Request, response: Response) {
    try {
      const { name } = request.body;
      
      if ((await schema.isValid({
        name: request.body.nome,
      }))) {
        return response.status(400).json({ data: 'Verefique se os seus dados estão corretos!' });
      }

      if (await (category_model.findOne({ name }))) {
        return response.status(400).json({ data: 'Categoria já existente' });
      }
  
      await category_model.create(request.body);

      return response.status(200).json({ data: 'Categoria cadastrada com sucesso!' });
    } catch (error) {
      return response.status(400).json({ error });
    }
  }
  public async update(request: Request, response: Response) {
    try {
      const { id } = request.params;  
      await category_model.updateOne({ _id: id }, request.body);

      return response.status(200).json({ data: 'Categoria atualizada sucesso!' });
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
      await category_model.updateOne({ _id: id }, { active: false });

      return response.status(200).json({ data: 'Categoria desativa com sucesso!' });
    } catch (error) {
      return response.status(400).json({ error });
    }
  }
}
export default new categoryController();