const express  = require('express')
const app = express();
const port = 5000
const cors = require('cors')
app.use(express.json())
app.use(cors())


app.listen(port,() => 
{
console.log(`server is running on port ${port}...`)
})