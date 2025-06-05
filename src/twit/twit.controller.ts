import { Request, Response, Router } from 'express';
import { TwitService } from './twit.service';
import { authMiddleware } from '../auth.middleware';

const router = Router();
const twitService = new TwitService();



router.post('/', authMiddleware, (req:Request, res:Response) => {
    if(req.body?.description?.length < 1){
         res.status(400).json({ error: 'Description is required' });
         return
    }
    const twit = twitService.createTwit(req.body);
    res.status(201).json(twit);
    return;
})

export const twitRouter = router;