import { createInterface } from 'readline'
import { createWriteStream, createReadStream } from 'fs'

interface Row {
    date: string
    amount: number
    description: string
}

async function csvToJson(csvPath: string, jsonPath: string) {
    const writeStream = createWriteStream(jsonPath, 'utf8')
    const rl = createInterface({
        input: createReadStream(csvPath, { encoding: 'utf8' }),
        crlfDelay: Infinity,
    })

    let data: Row[] = []

    rl.on('line', (line: string) => {
        const [date, amount, , , description] = line
            .replaceAll(`\"`, '')
            .split(',')
        data.push({ date, amount: Number(amount), description })
    })

    rl.on('close', () => {
        writeStream.write(JSON.stringify(data, null, 2), 'utf8')
    })
}

csvToJson('./static/input.csv', './static/output.json')
