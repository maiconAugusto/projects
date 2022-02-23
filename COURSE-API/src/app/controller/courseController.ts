import { Request, Response } from "express";
import course_model from "../model/course_model";
import * as yup from 'yup';

let schema = yup.object().shape({
  title: yup.string().required(),
  sub_title: yup.string().email().required(),
  description: yup.string().required(),
  price: yup.number().required(),
  category_id: yup.string().required(),
  level_id: yup.string().required(),
});


class courseController {
  public async index (request: Request, response: Response) {
    try {

      const data = await course_model.find();
      return response.status(200).json({ data: data })
    } catch (error) {
      return response.status(400).json({ data: error });
    }
  }
  public async store (request: Request, response: Response) {
    try {
      request.body = JSON.parse(request.body.data);
      request.body.url_image_id = request.file.key;
      request.body.url_image = request.file.location;

      course_model.create(request.body);
      return response.status(201).json({ data: 'Curso cadastrado sucesso!' })
    } catch (error) {
      return response.status(400).json({ error });
    }
  }
  public async show (request: Request, response: Response) {
    try {
      const { id } = request.params;

      const data = await course_model.findOne({ _id: id });
      return response.status(200).json({ data: data })
    } catch (error) {
      return response.status(400).json({ data: error });
    }
  }
  public async update (request: Request, response: Response) {
    try {
      const { id } = request.params;

      if ((await schema.isValid({
        title: request.body.title,
        sub_title: request.body.sub_title,
        description: request.body.description,
        price: request.body.price,
        category_id: request.body.category_id,
        level_id: request.body.level_id,
      }))) {
        return response.status(400).json({ data: 'Verefique se os seus dados estão corretos!' });
      }

      await course_model.updateOne({ _id: id }, request.body);
      return response.status(200).json({ data: 'Curso atualizado com sucesso!' });
    } catch (error) {
      return response.status(400).json({ data: error  });
    }
  }
  public async delete (request: Request, response: Response) {
    try {
      const { id } = request.params;
  
      await course_model.deleteOne({ _id: id });
      return response.status(200).json({ data: 'Curso deletado com sucesso!' })
    } catch (error) {
      return response.status(400).json({ data: error });
    }
  }
}
export default new courseController();