
const express=require('express')
const errorHandler=require('./middlewares/errorHandler')

const mongoose=require('mongoose')
const path=require('path')
const cors=require('cors')

const routes=require('./routes/index')

const app = express();





const passport=require('passport')
//database Collection
const mongoUri="mongodb://localhost:27017/backend?readPreference=primary&appname=MongoDB%20Compass&ssl=false";
const connectToMongoo =()=>{
    mongoose.connect(mongoUri,()=>{
        console.log("mogo is successfully connect");
    })
}
connectToMongoo();

global.appRoot = path.resolve(__dirname);
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api', routes);
app.use('/uploads', express.static('uploads'));
app.use('/', (req, res) => {
    res.send(`
  <h1>Welcome to E-commerce Rest APIs</h1>
  You may contact me <a href="https://codersgyan.com/links/">here</a>
  Or You may reach out to me for any question related to this Apis: codersgyan@gmail.com
  `);
});

app.use(errorHandler);
const PORT =5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));
