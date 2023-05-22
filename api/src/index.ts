import express from 'express'
import { FOO, my_merge } from '@qwert/utils'
// import { FOO, my_merge } from '@qwert/test'
// import { my_merge } from '@scope/name'

const app = express()
const port = 3000

my_merge({}, { test: 'my message' })

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
