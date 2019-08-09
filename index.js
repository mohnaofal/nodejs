const express = require('express')
const app = express()
const array_lib = require("./lib/array")
const object_lib = require("./lib/object")
const tugas_lib = require("./lib/tugas")
const tambah_lib = require("./lib/tambah")
const conditional = require("./lib/conditional")
const tugas_if = require("./lib/tugasif")
const task_condition = require("./lib/task-conditional")


app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {

    var person = {
        namaDepan: "Moh. Naofal",
        namaBelakang: "N H",
        umur: 25,
        warnaRambut: "Hitam",
        fullName : function(){
            return this.namaDepan+" "+this.namaBelakang
        }
      };

      return res.send(person.fullName())
})

app.post('/',(req, res) =>{
    let email = req.body.email

    return res.send(`The Email value is ${email}`)
})

app.post('/tambah',(req, res) =>{
    let x = parseInt(req.body.x)
    let y = parseInt(req.body.y)
    
    let z= x+y



    return res.send(`Hasil yang anda jumlahkan adalah ${z}`)
})

app.get('/tambah2',(req, res) =>{
    let x = 2
    let y = 3
   
    let result= tambah_lib(x,y);



    return res.send(`Hasil yang anda jumlahkan adalah ${result}`)
})


app.get('/example-1', (req, res) => {
    let data = ["Red", "Blue", "Yellow", "Green"]
    let manipulation = array_lib(data)

    return res.send(manipulation)
})

app.get('/example-2', (req, res) => {
    let data = {
        firstname: "John",
        lastname: "Doe",
        email: "john.doe@mail.com",
        gender: "men"
    }
    let result = object_lib.manipulate(data)

    return res.send(result)
})

app.get("/example-3", (req, res) => {
    let input = ["Black"]
    let data = ["Red", "Blue", "Yellow", "Green"]
    console.log("before ", data)

    let result = object_lib.merge(data = data, input = input)
    console.log("after ", result)

    return res.send(result)
})

app.get("/example-4", (req, res) => {
    let empty_data = []
    console.log("before ", empty_data)

    let color = "Red"
    object_lib.add(empty_data, color)
    console.log("after ", empty_data)

    return res.send(empty_data)
})
app.get("/tugas", (req, res) => {
    let warna = ["Merah","Hijau","Jingga", "Kuning","Biru","Orange","Hitam"];
    let urut = tugas_lib.urut(warna)

    return res.send(urut)
})

app.get("/tugas2", (req, res) => {
    let datamobil = ["Suzuki","Honda","Ferarry","Lamborgini"];
    console.log("Sebelum di tambah ", datamobil)

    let mobil = "Toyota"
    tugas_lib.tambah(datamobil, mobil)
    console.log("Sesudah di tambah ", datamobil)

    return res.send(datamobil)
})


app.get("/task3", (req, res) => {
    let q = req.query.q
    console.log("First value ", q)

    let result = conditional.equal(q)

    return res.send(result)
})

app.get("/task4", (req, res) => {
    let today = new Date().getDay()
    console.log("Today ", today)

    let result = conditional.day(today)
    console.log("Hari ini adalah hari "+ result)    
    return res.send(result)
})

app.post("/task5", (req, res) => {
    let number = req.body.number
    console.log("section1 ", typeof number)
    number = parseInt(number)
    console.log("section2 ", typeof number)

    let result = conditional.compare(number)

    return res.send(result)
})

app.get("/tugasday4", (req, res) => {
    let q = req.query.q
    console.log("Kata yang kamu masukkan ", q)

    let result = tugas_if(q)

    return res.send(result)
})

app.post('/tugas2day4',(req, res) =>{
    let nama = req.body.nama
    let email = req.body.email

    result = tugas_if.coba2(nama, email)

    return res.send(`${result}`)
})


app.get("/task1", (req, res) => {
    let key1 = req.query.key1
    let key2 = req.query.key2

    let result = task_condition.task1(key1, key2)

    return res.send(result)
})

app.post("/task2", (req, res) => {
    let { name, email } = req.body
    let no = parseInt(req.body.no)
    let result = task_condition.task2(name, email, no)

    console.log(Object.keys(result))

    return res.send(result)
})



app.listen(3000,() => {
    console.log('Example app listening on port 3000')
})