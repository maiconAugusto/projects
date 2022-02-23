import { Request, Response } from "express";
import commentController_model from "../model/comment_model";
import * as yup from 'yup';

let schema = yup.object().shape({
  comment: yup.string().required(),
  lesson_id: yup.string().email().required(),
  user_id: yup.string().required(),
});


class commentController {
  public async index (request: Request, response: Response) {
    try {
      const { id } = request.params;
      const data = await commentController_model.find({ lesson_id: id });
      return response.status(200).json({ data: data })
    } catch (error) {
      return response.status(400).json({ data: error });
    }
  }
  public async store (request: Request, response: Response) {
    try {
      if ((await schema.isValid({
          comment: request.body.comment,
          lesson_id: request.body.lesson_id,
          user_id: request.body.lesson_id,
      }))) {
        return response.status(400).json({ data: 'Verefique se os seus dados estão corretos!' });
      }
      await commentController_model.create(request.body);
      return response.status(201).json({ data: 'Comentário salvo com sucesso!' })
    } catch (error) {
      return response.status(400).json({ data: error });
    }
  }
  public async show (request: Request, response: Response) {
    try {
      const { id } = request.params;

      const comment = await commentController_model.findOne({ _id: id });

      if (!comment) {
        return response.status(400).json({ data: 'Comentário não foi encontrado!' });
      }

      return response.status(200).json({ data: comment });
    } catch (error) {
      return response.status(400).json({ data: error });
    }
  }
  public async update (request: Request, response: Response) {
    try {
      const { id } = request.params;

      if ((await schema.isValid({
        comment: request.body.comment,
    }))) {
      return response.status(400).json({ data: 'Verefique se os seus dados estão corretos!' });
    }

      await commentController_model.updateOne({ _id: id }, request.body);
      return response.status(200).json({ data: 'Comentário atualizado com sucesso!' });
    } catch (error) {
      return response.status(400).json({ data: error  });
    }
  }
  public async delete (request: Request, response: Response) {
    try {
      const { id } = request.params;
  
      await commentController_model.deleteOne({ _id: id });
      return response.status(200).json({ data: 'Comentário deletado com sucesso!' })
    } catch (error) {
      return response.status(400).json({ data: error });
    }
  }
}
export default new commentController();