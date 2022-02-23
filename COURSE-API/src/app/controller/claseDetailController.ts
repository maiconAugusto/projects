import { Request, Response } from 'express'
import clase_course_model from '../model/clase_model';

class claseDetailController {
  public async index(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const data = await clase_course_model.aggregate(
        [
          {
            "$sort": {
              createdAt: -1
            }
          },
          { $group: {
          '_id': {id:"$session_name", "title" : "$title", 'session_name': '$session_name' },
               "count" : { "$sum": 1 }
          }},
          { $group: {
          '_id': "$_id.id",
          "clases" : {"$push" : {clase:"$_id.title" }},
          }},
          ],
          {'allowDiskUse': true}
      )

      return response.status(200).json({ data });
    } catch (error) {
      return response.status(400).json({ data: error });
    }
  }
}
export default new claseDetailController();