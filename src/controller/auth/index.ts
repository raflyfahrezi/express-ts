import { Request, Response } from 'express'

export const login = async (req: Request, res: Response) => {
    return res.send('Hello World')
}
