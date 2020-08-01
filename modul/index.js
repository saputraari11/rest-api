const express = require("express")
const bodyparse = require("body-parser")
const cors = require("cors")
const app = express()

app.use(bodyparse.json())
app.use(bodyparse.urlencoded({ extended: true }))
app.use(cors())

// app.get("/test", (req, res) => {
//     let response = {
//         massage: "ini end-point pertama ku ",
//         method: req.method,
//         code: res.statusCode
//     }

//     res.json(response)
// })

// app.get("/profil/:nama/:age", (req, res) => {

//     let nama = req.params.nama
//     let age = req.params.age

//     let response = {
//         nama: nama,
//         age: age
//     }

//     res.json(response)
// })


app.post("/bujursangkar", (req, res) => {

    let panjang = Number(req.body.panjang)
    let lebar = Number(req.body.lebar)

    let luas = (p, l) => {
        return p * l
    }
    let keliling = (p, l) => {
        return 2 * (p + l)
    }

    let response = {
        panjang: panjang,
        lebar: lebar,
        luas: luas(panjang, lebar),
        keliling: keliling(panjang, lebar)
    }
    res.json(response)
})

app.listen(8000, () => {
    console.log("Server run on port 8000")
})