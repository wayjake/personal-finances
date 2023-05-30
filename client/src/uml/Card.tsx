import styled from 'styled-components'

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

interface CardProps {
    title: string
    body: string
    x: number
    y: number
}

export const Card = ({ title, body, x, y }: CardProps) => {
    return (
        <CardContainer style={{ transform: `translate(${x}px, ${y}px)` }}>
            <CardTitle>{title}</CardTitle>
            <CardBody>{body}</CardBody>
        </CardContainer>
    )
}
