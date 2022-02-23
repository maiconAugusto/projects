import { Request, Response } from 'express'
import course_model from '../model/course_model';
import aws from '../../multer/upload_profile';

class photoCourseController {
  public async update(request: Request, response: Response) {
    try {
      const { BUCKET_NAME } = process.env;
      const { id } = request.params;

      const course = await course_model.findOne({ _id: id });

      if (!course) {
        const params = {  Bucket: `${BUCKET_NAME || ''}/image-course`, Key: request.file.key };
        aws.s3.deleteObject(params, function(err, data) {
          if (err) console.log(err, err.stack);
        });
        return response.status(400).json({ data: 'Curso não localizado!' });
      }

      request.body = request.body.data ? JSON.parse(request.body.data) : { url_image_id: undefined };

      const data =  {
        url_image_id: request.file.key,
        url_image: request.file.location,
      }

      if (request.body.url_image_id) {
        const params = {  Bucket: `${BUCKET_NAME || ''}/image-course`, Key: request.body.url_image_id };
        aws.s3.deleteObject(params, function(err, data) {
          if (err) console.log(err, err.stack);
        });
      }
      else if (!request.body.url_image_id) {
        const params = {  Bucket: `${BUCKET_NAME || ''}/image-course`, Key: request.file.key };
        aws.s3.deleteObject(params, function(err, data) {
          if (err) console.log(err, err.stack);
        });
      }

      await course_model.updateOne({ _id: id }, data);

      return response.status(200).json({ data: 'Seus dados foram atualizados com sucesso!' });
    } catch (error) {
      return response.status(400).json({ error });
    }
  }
}
export default new photoCourseController();