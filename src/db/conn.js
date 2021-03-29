const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/my_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(console.log('connected successfully'))
.catch(()=>{
    console.log('connection failed')
})
