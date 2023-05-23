import express from 'express'
import { FOO, my_merge } from '@qwert/utils'

const app = express()
const port = 3000

my_merge({}, { test: 'my message' })

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
