type Coordinates = {
    xPos: number
    yPos: number
}

type LineBetweenProps = {
    startCoords: Coordinates
    endCoords: Coordinates
}

const LineBetween = ({ startCoords, endCoords }: LineBetweenProps) => {
    return (
        <svg style={{ top: 0, left: 0 }}>
            <line
                x1={startCoords.xPos}
                y1={startCoords.yPos}
                x2={endCoords.xPos}
                y2={endCoords.yPos}
                style={{ stroke: 'rgb(0,0,0)', strokeWidth: 2 }}
            />
        </svg>
    )
}

export default LineBetween
