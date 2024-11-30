import express from 'express'
import { Request, Response } from 'express'

const app = express()

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Listening running on port ${port}`)
})

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world')
})
