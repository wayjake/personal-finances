import { Request, Response } from 'express'
// import transactions from '../../static/output.json'
import { db } from '../../database'

export default function search(req: Request, res: Response) {
    const { id, date } = req.query

    /**
        // this could be N to infinite
        const userJobs = db.jobUsers.find({ user: req.user })
        // if i am admin, i can see all jobs
        // if i am general artificial
        db.jobs.find({
            brand: req.brand,
            _id: { $in: userJobs.map((j) => j.job) },
        })

        db.aggregate([{}])
    **/

    const transactions = [] as any[] // query db
    const response = transactions

    res.json(response)
}
