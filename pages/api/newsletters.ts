import { NextApiRequest, NextApiResponse } from 'next';
import {NEWSLETTER_ITEMS} from '@/app/mocks/newsletters';
import { Newsletter } from '@/app/types';

export default function handler(req: NextApiRequest, res: NextApiResponse<Newsletter[]>) {
    if (req.method === 'GET') {
        console.log({req})
      res.status(200).json(NEWSLETTER_ITEMS);
    } else {
      res.status(405).end();
    }
  }
