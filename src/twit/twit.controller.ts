import { Request, Response, Router } from 'express';
import { TwitService } from './twit.service';
import { authMiddleware } from '../auth.middleware';
import { createTwitDto } from './twit.dto';

const router = Router();
const twitService = new TwitService();



router.post('/', authMiddleware, (req:Request, res:Response) => {
    const validation = createTwitDto.safeParse(req.body);
    if(!validation.success) {
         res.status(400).json({ error: validation.error.errors });
         return
    }
    const twit = twitService.createTwit(req.body);
    res.status(201).json(twit);
    return;
})

export const twitRouter = router;