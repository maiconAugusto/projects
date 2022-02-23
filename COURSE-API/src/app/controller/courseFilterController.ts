import { Request, Response } from "express";
import course_model from "../model/course_model";

class courseFilterController {
  public async index (request: Request, response: Response) {
    try {
      const { category_id , search} = request.query;

      if (!category_id && !search) {
        const data = await course_model.find();
        return response.status(200).json({ data: data })
      }
      const data = await course_model.find({ 
        category_id ,
        title: !search ? undefined : { $regex: new RegExp(`${search}`), $options: 'i' },
      });
      return response.status(200).json({ data: data })
    } catch (error) {
      return response.status(400).json({ data: error });
    }
  }
  public async show (request: Request, response: Response) {
    try {
      const { id } = request.params;

      const course = await course_model.findOne({ _id: id }).populate(['user_id', 'level_id']);

      if (!course) {
        return response.status(400).json({ data: 'Curso não encontrado!' });
      }
      course.user_id.password = undefined;
      course.user_id.cpf = undefined;
      course.user_id.phone = undefined;
      course.user_id.email = undefined;

      return response.status(200).json({ data: course });
    } catch (error) {
      return response.status(400).json({ data: error });
    }
  }
}
export default new courseFilterController();