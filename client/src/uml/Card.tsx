import { FC, useRef } from 'react'
import styled from 'styled-components'
import Draggable, { DraggableEventHandler, DraggableData, DraggableEvent } from 'react-draggable'
import { useCardStore } from './card.store'

const CardContainer = styled.div`
    position: absolute;
    width: 350px;
    min-height: 250px;
    padding: 20px;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
`

const CardTitle = styled.h3`
    /* Style your h3 here */
`

const CardBody = styled.p`
    /* Style your card body here */
    list-style: none;
`

export interface Card {
    id: number
    title: string
    body: string
    x: number
    y: number
}

export const Card: FC<Card> = ({ id, title, body, x, y }) => {
    const updateCard = useCardStore((state) => state.updateCard)
    const nodeRef = useRef(null)
    const eventLogger: DraggableEventHandler = (e: DraggableEvent, data: DraggableData) => {
        // console.log('Event: ', e)
        // console.log('Data: ', data)
        updateCard(id, { x: data.x, y: data.y })
    }
    return (
        <Draggable
            // position={{ x, y }}
            nodeRef={nodeRef}
            defaultPosition={{ x, y }}
            grid={[25, 25]}
            scale={1}
            onStart={eventLogger}
            onDrag={eventLogger}
            onStop={eventLogger}
        >
            <CardContainer ref={nodeRef}>
                <CardTitle className="cursor">{title}</CardTitle>
                <CardBody>{body}</CardBody>
            </CardContainer>
        </Draggable>
    )
}
