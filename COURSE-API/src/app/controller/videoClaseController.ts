import { Request, Response } from 'express'
import aws from '../../multer/upload_video';
import clase_course_model from '../model/clase_model';

class videoPhotoController {
  public async update(request: Request, response: Response) {
    try {
      const { id } = request.params;  
      const { BUCKET_NAME } = process.env;

      request.body = request.body.data ? JSON.parse(request.body.data) : { path: undefined };
  
      request.body.url_id = request.file.key;
      request.body.url_video = request.file.location;

      if (request.body.path) {
        const params = {  Bucket: `${BUCKET_NAME || ''}/videos`, Key: request.body.path };
        aws.s3.deleteObject(params, function(err, data) {
          if (err) console.log(err, err.stack);
        });
      }

      await clase_course_model.updateOne({ _id: id }, request.body);

      return response.status(200).json({ data: 'Seus dados foram atualizados com sucesso!' });
    } catch (error) {
      return response.status(400).json({ data: error });
    }
  }
  public async delete(request: Request, response: Response) {
    try {
      const { id } = request.params;  
      const { BUCKET_NAME } = process.env;

      if (!request.body.path) {
        return response.status(400).json({ data: 'Informe a URL que deseja deletar!' });
      }

      const params = {  Bucket: `${BUCKET_NAME || ''}/videos`, Key: request.body.path };
      await aws.s3.deleteObject(params).promise()
        .then(async() => {
          await clase_course_model.updateOne({ _id: id }, {$unset: {url_id: 1, url_video: 1 }});
          return response.status(200).json({ data: 'Video deletado com sucesso' });
        }).catch((err) => {
          return response.status(400).json({ data: err });
        });
    } catch (error) {
      return response.status(400).json({ data: error });
    }
  }
}
export default new videoPhotoController();