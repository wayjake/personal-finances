import { useEffect } from 'react'
import styled from 'styled-components'
import { Card } from './Card'
import { useCardStore } from './card.store'

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
    const addCard = useCardStore((state) => state.addCard)
    // const cards: any[] = []
    // const addCard = (arg1, arg2, arg3, arg4) => {}
    useEffect(() => {
        // adding cards for demonstration
        addCard('Card 1', 'This is the body of Card 1', 100, 200)
        addCard('Card 2', 'This is the body of Card 2', -200, -100)
    }, [])

    return (
        <UMLContainer>
            {cards.map((card) => (
                <Card key={card.id} title={card.title} body={card.body} x={card.x} y={card.y} />
            ))}
        </UMLContainer>
    )
}

export default UMLDiagram
