type TransactionSummaryProps = {
    transactions: Transaction[]
}

export default function TransactionSummary({
    transactions,
}: TransactionSummaryProps) {
    if (!transactions) {
        return null
    }
    const income = transactions
        .filter((transaction) => transaction.amount > 0)
        .reduce((acc, transaction) => acc + transaction.amount, 0)

    const expenses = transactions
        .filter((transaction) => transaction.amount < 0)
        .reduce((acc, transaction) => acc + transaction.amount, 0)

    const netProfit = income + expenses

    return (
        <div>
            <h2>Transaction Summary</h2>
            <p>
                Income: $
                {income?.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                })}
            </p>
            <p>
                Expenses: $
                {Math.abs(expenses)?.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                })}
            </p>
            <p>
                Net Profit: $
                {netProfit?.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                })}
            </p>
        </div>
    )
}
