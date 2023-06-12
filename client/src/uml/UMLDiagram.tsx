import styled from 'styled-components'
import { Card } from './Card'
import { useCardStore } from './card.store'
import LineBetween from './LineBetween'

const UMLContainer = styled.div`
    position: relative;
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
`

const UMLDiagram: React.FC = () => {
    const cards = useCardStore((state) => state.cards)

    /** 
            I'll worry about adding cards later. 
            const addCard = useCardStore((state) => state.addCard)
     */
    const lines: JSX.Element[] = []
    let prevCard: Card | undefined
    for (const current of cards) {
        if (!prevCard) {
            prevCard = current
            continue
        }
        lines.push(
            <LineBetween
                key={prevCard.id}
                startCoords={{ xPos: current.x + 0, yPos: current.y + 0 }}
                endCoords={{ xPos: prevCard.x + 0, yPos: prevCard.y + 0 }}
            />
        )
    }

    return (
        <UMLContainer>
            {lines.map((line) => line)}
            {cards.map((card) => (
                <Card key={card.id} {...card} />
            ))}
        </UMLContainer>
    )
}

export default UMLDiagram
