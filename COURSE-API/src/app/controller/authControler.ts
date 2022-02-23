import {Request, Response} from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import user_model from '../model/user_model';


class AuthController {
  public async store(request: Request, response: Response): Promise<Response> {
    try {
      const { password, email } = request.body;

      const user = await user_model.findOne({ email });

      if (!user) {
        return response.status(400).json({ data: 'E-mail não foi encontrado' });
      }

      if (!await bcrypt.compare(password, user.password.toString() )){
        return response.status(400).json({ data: 'Senha incorreta' });
      }
 
      const id = user._id;
      user.password = undefined;

      return response.status(200).json({
        user: user,
        token: jwt.sign({ id }, process.env.HASH, { expiresIn: process.env.EXPIRE }),
      });
    } catch (error) {
      return response.status(400).json({ data: error });
    }
  }
}
export default new AuthController();