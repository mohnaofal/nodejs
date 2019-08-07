const express = require('express')
const app = express()

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



app.listen(3000,() => {
    console.log('Example app listening on port 3000')
})