import express from 'express';

const app = express()

app.get('/', (req, res)=>{
    res.send('Private API! You no know me, GET OUT!!!')
})

app.listen(6969)