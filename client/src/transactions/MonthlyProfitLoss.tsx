import { minBy, maxBy } from 'lodash'

type MonthlyProfitLossProps = {
    transactions: Transaction[]
}

export default function MonthlyProfitLoss({
    transactions,
}: MonthlyProfitLossProps) {
    if (!transactions) {
        return null
    }

    const earliestTransaction = minBy(
        transactions,
        (transaction: Transaction) => transaction.date
    )
    const latestTransaction = maxBy(
        transactions,
        (transaction: Transaction) => transaction.date
    )

    return (
        <div>
            <h2>Monthly Profit Loss</h2>
            <pre>
                Earliest:{' '}
                {earliestTransaction
                    ? new Date(earliestTransaction.date).toLocaleDateString()
                    : null}
            </pre>
            <p>
                Latest:{' '}
                {latestTransaction
                    ? new Date(latestTransaction.date).toLocaleDateString()
                    : null}
            </p>
        </div>
    )
}
