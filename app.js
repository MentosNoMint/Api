const express = require("express")
const bodyParser = require("body-parser")
const app = express();

const pageContacts = require("./home/Tech_sale")
const aboutME = require("./home/about_me")
const shop = require("./home/spare_parts_store")
const sponsors = require("./home/Work")


app.get('/', (request, response) => {
    const student = {
        name: 'Кирилл',
        age: "18",
        group: "IS-22-11",
        floor: "Мужской"
    }
    res.send("<h1>Привет я Кирилл , учусь в ис22-11</h1>")
})

app.get('/studend', (request, response) => {
    response.send(shop)
})




app.listen(8000, () => {
    console.log("Сервер запущен на порту 8000.")
})