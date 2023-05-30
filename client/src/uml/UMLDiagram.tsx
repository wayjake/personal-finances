import styled from 'styled-components'
import { Card } from './Card'

const DiagramContainer = styled.div`
    position: relative;
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
`

const UNLDiagram: React.FC = () => {
    return (
        <DiagramContainer>
            <Card
                title="Card 1"
                body="This is the body of Card 1"
                x={100}
                y={200}
            />
            <Card
                title="Card 2"
                body="This is the body of Card 2"
                x={-200}
                y={-100}
            />
        </DiagramContainer>
    )
}

export default UNLDiagram
