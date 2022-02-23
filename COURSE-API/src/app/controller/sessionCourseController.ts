import { Request, Response } from 'express'
import session_course from '../model/session_course_model';
import * as yup from 'yup';

let schema = yup.object().shape({
  title: yup.string().required(),
  course_id: yup.string().required(),
});

class sessionCourseController {
  public async index(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const data = await session_course.find({ course_id: id});

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
      const data = await session_course.findOne({ _id: id });

      return response.status(200).json({ data });
    } catch (error) {
      return response.status(400).json({ error });
    }
  }
  public async store(request: Request, response: Response) {
    try {

      if (!( await schema.isValid({
        title: request.body.title,
        course_id: request.body.course_id,
      }))) {
        return response.status(400).json({ data: 'Verefique se os seus dados estão corretos!' });
      }
      await session_course.create(request.body);

      return response.status(200).json({ data: 'Seu cadastro foi realizado com sucesso!' });
    } catch (error) {
      return response.status(400).json({ error });
    }
  }
  public async update(request: Request, response: Response) {
    try {
      const { id } = request.params;  
      await session_course.updateOne({ _id: id }, request.body);

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
      await session_course.deleteOne({ _id: id });

      return response.status(200).json({ data: 'Aula deletada deletada com sucesso!' });
    } catch (error) {
      return response.status(400).json({ error });
    }
  }
}
export default new sessionCourseController();