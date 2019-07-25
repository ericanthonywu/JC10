var b = {
    warna : 'Putih',
    size : 'M',
    harga : 15000,
    ongkir : 32000,
    apaGitu : function(){
        return [1,3,5,7]
    }
}

var c = {
    warna : 'Abu-abu',
    size : 'S',
    harga : 13000,
    ongkir : 17000,
    apaGitu : function(){
        return [1,3,5,7]
    }
}

// var arr = [a,b,c]

var kawan = {
    nama : 'Halo',
    hobby : 'Menikmati senja'
}

var teman = {
    nama : 'Bandung',
    hobby : 'Menebar pesona'
}

// var data = {
//     nama : 'Budi',
//     umur : 21,
//     nomorTelfon : [081234567, 0898765432],
//     orangTua : [{
//         nama : 'Andi',
//         umur : 53,
//         nomorTelfon : 123456
//     },
//     {
//         nama : 'Fitri',
//         umur : 50,
//         nomorTelfon : 654321
//     }
//     ],
//     temanBaik : [kawan, teman]
// }
// console.log(data.namaLain)

class Musisi{
    // constructor menerima parameter
    constructor(nama, laguHits, genre){
        // property diisi dengan parameter
        // nama property adalah yg ada this.
        this.nama = nama,
        this.lagu = laguHits,
        this.genre = genre
    }
}

function cetakanMusisi(nama, laguHits, genre){
    return {
        nama : nama,
        lagu : laguHits,
        genre : genre
    }
}

// var cetak = cetakanMusisi('Via Vallen', 'Sayang', 'Dubstep')
// // console.log(cetak)

// var musikKu = new Musisi('Via Vallen', 'Sayang', 'Dubstep')
// console.log(musikKu)

class Mobil{
    constructor(warna, tipe, merek, tahun){
        this.colour = warna,
        this.type = tipe,
        this.brand = merek,
        this.year = tahun
    }
}

var data = [
    new Mobil('Hitam', 'Sedan', 'Toyota', '2003'),
    new Mobil('Merah', 'SUV', 'Yamaha', '1930'),
    new Mobil('Putih', 'City', 'Polygon', '2019')
]

// console.log(data[1].brand + ' Semakin di depan')

function displayData(dataKu){
    var hasil = ''
    for(var i = 0; i < dataKu.length; i++){
        hasil += `
        ${(i+1)}. Warna : ${dataKu[i].colour}, Tipe : ${dataKu[i].type}, Brand : ${dataKu[i].brand}, Tahun : ${dataKu[i].year}`
    }

    return hasil
}

var baju = {
    warna : 'Hitam',
    size : 'L',
    harga : 12000,
    ongkir : 20000,
    pemilik : {
        nama : 'Seto',
        toko : {
            namaToko : 'Kaos Ntab',
            status : 'Premium'
        }
    }
}

var {warna, size, harga, ongkir} = baju
var {nama} = baju.pemilik
var {namaToko, status} = baju.pemilik.toko

console.log(`Warna : ${baju.warna}, Size : ${baju.size}, Harga : ${baju.harga}`)
console.log(`Pemilik : ${nama}, Toko : ${namaToko}, Status : ${status}`)
// console.log(`Warna : ${warna}, Size : ${size}, Harga : ${harga}`)

// console.log(displayData(data))

// var x = 39837528
// var y = 5

// console.log(`Bro ini angka ${x} ini angka ${y}`)