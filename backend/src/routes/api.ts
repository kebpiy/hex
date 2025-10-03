import { type Request, type Response } from 'express';
import { Router } from "express";

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send("hello world");
});

export default router;