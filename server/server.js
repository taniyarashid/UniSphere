const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/api/health', (req, res) => {
  res.json({ message: 'UniSphere server is running' })
})

const db = require('./db')

app.get('/api/db-test', async (req, res) => {
  const [rows] = await db.query('SELECT COUNT(*) AS total FROM students')
  res.json(rows[0])
})

const PORT = 5000

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})