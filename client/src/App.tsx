import './App.css'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import TransactionSummary from './transactions/TransactionSummary'
import MonthlyProfitLoss from './transactions/MonthlyProfitLoss'
import UNLDiagram from './uml/UMLDiagram'

function App() {
    const query = useQuery({
        queryKey: ['transactions/search'],
        queryFn: async () => {
            const { data } = await axios.get('http://localhost:3000/api/v1/transactions/search')
            return data
        },
    })

    return (
        <>
            <MonthlyProfitLoss transactions={query.data} />
            <TransactionSummary transactions={query.data} />
            <UNLDiagram />
        </>
    )
}

export default App
