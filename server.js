import express from 'express';
import { twitRouter } from './src/twit/twit.controller.js';
import dotenv from 'dotenv';
import { authMiddleware } from './auth.middleware.js';
import { re } from 'mathjs';

const app = express();
dotenv.config()


 
 async function main(){
    app.use(express.json());
        
    }
    app.use('/api/twits', twitRouter)


    app.use((err,req, res,next)=>{
        console.error(err.stack);
        res.status(500).send(  'Internal Server Error')

         });
         
    app.listen(process.env.PORT || 4200,()=>{
        console.log('Server is running on http://localhost:4200');

    })
 

 main()