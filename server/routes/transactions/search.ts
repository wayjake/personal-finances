import { Request, Response } from 'express'
import transactions from '../../static/output.json'

export default function search(req: Request, res: Response) {
    const { id, date } = req.query

    const response = transactions

    res.json(response)
}
