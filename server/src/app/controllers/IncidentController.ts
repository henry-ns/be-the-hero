import { Request, Response } from 'express';
import db from '../../database';

class IncidentController {
  async store(req: Request, res: Response) {
    const { title, description, value } = req.body;
    const ong_id = req.headers.authorization;

    const [id] = await db('incidents').insert({
      title,
      description,
      value,
      ong_id,
    });

    return res.json({ id });
  }
}

export default new IncidentController();
