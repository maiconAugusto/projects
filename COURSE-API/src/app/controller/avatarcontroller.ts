import { Request, Response } from 'express'
import user_model from '../model/user_model';
import aws from '../../multer/upload_profile';

class avatarController {
  public async update(request: Request, response: Response) {
    try {
      const { BUCKET_NAME } = process.env;
      const { id } = request.params;

      request.body = request.body.data ? JSON.parse(request.body.data) : { path: undefined };

      const data =  {
        photo_url_id: request.file.key,
        photo_url: request.file.location,
      }

      if (request.body.path) {
        const params = {  Bucket: `${BUCKET_NAME || ''}/users`, Key: request.body.path };
        aws.s3.deleteObject(params, function(err, data) {
          if (err) console.log(err, err.stack);
        });
      }

      await user_model.updateOne({ _id: id }, data);

      return response.status(200).json({ data: 'Seus dados foram atualizados com sucesso!' });
    } catch (error) {
      return response.status(400).json({ data: error });
    }
  }
}
export default new avatarController();