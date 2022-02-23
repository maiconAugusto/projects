import { Request, Response } from 'express'
import aws from '../../multer/upload_video';
import clase_course_model from '../model/clase_model';
import * as yup from 'yup';

let schema = yup.object().shape({
  title: yup.string().required(),
  course_id: yup.string().email().required(),
  session_id: yup.string().required(),
  session_name:  yup.string().required(),
});

class claseController {
  public async index(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const data = await clase_course_model.find({ session_id: id });

      return response.status(200).json({ data });
    } catch (error) {
      return response.status(400).json({ data: error });
    }
  }
  public async show(request: Request, response: Response) {
    try {
      const { id } = request.params;
      
      const data = await clase_course_model.findOne({ _id: id });

      if (!data) {
        return response.status(400).json({ data: 'Aula não encontrada!' });
      }

      return response.status(200).json({ data });
    } catch (error) {
      return response.status(400).json({ error });
    }
  }
  public async store(request: Request, response: Response) {
    try {

      if ((await schema.isValid({
        title: request.body.title,
        course_id: request.body.course_id,
        session_id: request.body.session_id,
        session_name: request.body.session_name,
      }))) {
        return response.status(400).json({ data: 'Verefique se os seus dados estão corretos!' });
      }

      await clase_course_model.create(request.body);

      return response.status(200).json({ data: 'Seu cadastro foi realizado com sucesso!' });
    } catch (error) {

      return response.status(400).json({ error });
    }
  }
  public async update(request: Request, response: Response) {
    try {
      const { id } = request.params;  

      if ((await schema.isValid({
        title: request.body.title,
      }))) {
        return response.status(400).json({ data: 'Verefique se os seus dados estão corretos!' });
      }

      await clase_course_model.updateOne({ _id: id }, request.body);

      return response.status(200).json({ data: 'Seus dados foram atualizados com sucesso!' });
    } catch (error) {
      return response.status(400).json({ error });
    }
  }
  public async delete(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const { path } = request.query;
      const { BUCKET_NAME } = process.env;

      if (!path) {
        return response.status(400).json({ data: 'URL do video não informado!' });
      }
  
      const params = {  Bucket: `${BUCKET_NAME || ''}/videos`, Key: path };
      await aws.s3.deleteObject(params).promise();
      
      await clase_course_model.deleteOne({ _id: id });

      return response.status(200).json({ data: 'Usuário desativo com sucesso!' });
    } catch (error) {
      return response.status(400).json({ error });
    }
  }
}
export default new claseController();