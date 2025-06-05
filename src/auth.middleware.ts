import { Request, Response, NextFunction } from "express";
import { re } from "mathjs";

export const authMiddleware = (req:Request, res:Response, next:NextFunction) => {
    const authHeader = req.headers['authorization'];
    if(!authHeader) {
         res.status(401).json({ error: 'Authorization header is missing' });
         return;
    }
    next();
}