import { Request, Response } from 'express'
import level_model from '../model/level_model';
import * as yup from 'yup';

let schema = yup.object().shape({
  title: yup.string().required().typeError('Nome é obrigatório'),
});

class levelController {
  public async index(request: Request, response: Response) {
    try {
      const data = await level_model.find({});

      return response.status(200).json({ data });
    } catch (error) {
      return response.status(400).json({ data: error });
    }
  }
  public async show(request: Request, response: Response) {
    try {
      const { id } = request.params;

      const data = await level_model.findOne({ _id: id });

      return response.status(200).json({ data });
    } catch (error) {
      return response.status(400).json({ error });
    }
  }
  public async store(request: Request, response: Response) {
    try {
      const { title } = request.body;
      
      if ((await schema.isValid({
        title: request.body.nome,
      }))) {
        return response.status(400).json({ data: 'Verefique se os seus dados estão corretos!' });
      }

      if (await (level_model.findOne({ title }))) {
        return response.status(400).json({ data: 'Nível já existente' });
      }
  
      await level_model.create(request.body);

      return response.status(200).json({ data: 'Nível cadastrado com sucesso!' });
    } catch (error) {
      return response.status(400).json({ error });
    }
  }
  public async update(request: Request, response: Response) {
    try {
      const { id } = request.params;  
      await level_model.updateOne({ _id: id }, request.body);

      return response.status(200).json({ data: 'Nível atualizada sucesso!' });
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
      await level_model.updateOne({ _id: id }, { active: false });

      return response.status(200).json({ data: 'Nível desativo com sucesso!' });
    } catch (error) {
      return response.status(400).json({ error });
    }
  }
}
export default new levelController();