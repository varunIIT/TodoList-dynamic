const express=require('express')
const app=express()

require('./db/conn')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const port=process.env.PORT||3000
app.use('/',express.static(__dirname+'/public'))
const {route}=require('./routers/todo')
app.use('/todo',route)

app.listen(port,()=>{
    console.log(`listening at http://localhost:${port}`)
})