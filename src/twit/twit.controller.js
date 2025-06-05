import {Router} from 'express';
import { TwitService } from './twit.service.js';
import { authMiddleware } from '../../auth.middleware.js';

const router = Router();
const twitService = new TwitService();



router.post('/', authMiddleware, (req, res) => {
    if(req.body?.text?.length < 1){
        return res.status(400).json({ error: 'Text is required' });
    }
    const twit = twitService.createTwit(req.body);

    res.status(201).json(twit);
})

export const twitRouter = router;