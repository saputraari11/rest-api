const express = require("express")
const bodyparse = require("body-parser")
const cors = require("cors")
const app = express()

app.use(bodyparse.json())
app.use(bodyparse.urlencoded({ extended: true }))
app.use(cors())

// app.get("/convert/:jenis/:number", (req, res) => {
//     let jenis = req.params.jenis
//     let number = req.params.number

//     let resul = (j, n) => {


//         if (j == "celsius") {
//             let r = {
//                 "reamur": (4 / 5) * n,
//                 "fahrenheit": (9 / 5) * n + 32,
//                 "kelvin": n + 273
//             }
//             return r
//         } else if (j == "reamur") {
//             let r = {
//                 "celsius": (5 / 4) * n,
//                 "fahrenheit": (9 / 4) * n + 32,
//                 "kelvin": (5 / 4) * n + 273
//             }
//             return r
//         } else if (j == "fahrenheit") {
//             let r = {
//                 "celsius": (5 / 9) * (n - 32),
//                 "reamur": (4 / 9) * (n - 32),
//                 "kelvin": 5 / 9 * (n - 32) + 273
//             }
//             return r
//         } else if (j == "kelvin") {
//             let r = {
//                 "celsius": n - 273,
//                 "fahrenheit": (9 / 5) * ((n - 273) + 32),
//                 "reamur": 4 / 5 * (n - 273)
//             }
//             return r
//         }


//     }
//     let response = {
//         jenis: jenis,
//         nilai: number,
//         result: resul(jenis, number)

//     }
//     res.json(response)
// })

// app.get("/convert/:jenis/:number", (req, res) => {
//     let jenis = req.params.jenis
//     let number = req.params.number

//     let conver = (n, f, t) => {
//         return parseInt(n, f).toString(t)
//     }

//     let resul = (j, n) => {


//         if (j == "desimal") {
//             let r = {
//                 "biner": conver(n, 10, 2),
//                 "oktal": conver(n, 10, 8),
//                 "hexadesimal": conver(n, 10, 16)
//             }
//             return r
//         } else if (j == "biner") {

//             let r = {
//                 "desimal": conver(n, 2, 10),
//                 "oktal": conver(conver(n, 2, 10), 10, 8),
//                 "hexadesimal": conver(n, 2, 16)
//             }
//             return r
//         } else if (j == "oktal") {
//             let r = {
//                 "desimal": conver(n, 8, 10),
//                 "biner": conver(conver(n, 8, 10), 10, 2),
//                 "hexadesimal": conver(conver(n, 8, 10), 10, 16)
//             }
//             return r
//         } else if (j == "hexadesimal") {
//             let r = {
//                 "desimal": conver(n, 16, 10),
//                 "biner": conver(n, 16, 2),
//                 "oktal": conver(n, 16, 8)
//             }
//             return r
//         }


//     }
//     let response = {
//         jenis: jenis,
//         nilai: number,
//         result: resul(jenis, number)

//     }
//     res.json(response)
// })

// app.post("/bmi", (req, res) => {

//     let berat = Number(req.body.berat)
//     let tinggi = Number(req.body.tinggi)
//     let BMI = berat / (tinggi) ** 2

//     let ket = () => {


//         if (BMI < 18.5) {
//             return "Kekurangan Berat Badan"
//         } else if (BMI >= 18.5 && BMI < 24.9) {
//             return "Normal"
//         } else if (BMI >= 25 && BMI < 29.9) {
//             return "Kelibahan Berat Badan"
//         } else {
//             return "Kegemukan(Obesitas)"
//         }
//     }

//     let response = {
//         tinggi: tinggi,
//         berat: berat,
//         bmi: BMI,
//         status: ket()
//     }
//     res.json(response)
// })

app.listen(8000, () => {
    console.log("Server run on port 8000");
})