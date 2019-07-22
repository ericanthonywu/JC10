/**
 * 1. Hapus Vocal
 * 2. Parkir
 * 3. Ganjil Genap
 * 4. Angka terbesar
 * 5. Filter string
 * 6. Remove first and last char
 */

hapusVocal = (string) => {
    return string.replace(/[aiueo]/gi, '')
}

parkir = (jam) => {
    var totalPrice

    if (jam <= 2){
        totalPrice = jam * 2000
    }
    else if (jam > 2){
        totalPrice = (2 * 2000) + ((jam - 2) * 500)
    }

    return "Anda harus bayar Rp." + totalPrice
}

ganjilGenap = (angka) => {
    var hasil;

    if(angka % 2 == 0){
        hasil = 'genap'
    }else{
        hasil = 'ganjil'
    }

    return 'Angka anda ' + hasil
}

maxNum = (num1, num2, num3) => {
    return 'Angka terbesar anda adalah ' + Math.max(num1, num2, num3)
}

filterString = (arr) => {
    return arr.filter(Number)
}

removeChar = (kata) => {
    return kata.slice(1, kata.length-1)
}


maxNum2 = (arrNum) => {
    return Math.max(...arrNum)
}






// console.log(maxNum2([1,9,7,5,3]))

// var newArr = [1,7,2,4,9,5, 'hello', 'world']

// console.log(...newArr)

















console.log(hapusVocal('hAlo namaku bEntO')) // Hapus semua huruf vokal
console.log(parkir(4)) // 2000/jam 2 jam pertama, 500/jam utk berikutnya
console.log(ganjilGenap(7)) // Menentukan ganjil atau genap
console.log(maxNum(17, 5, 42)) // Cari angka terbesar
console.log(filterString(['Galau', 7, 2, 'Doraemon', 'Meja', 'Leci', 9])) // Return hanya Number
console.log(removeChar('Gak kuat akutuh')) // Hilangkan char pertama dan akhir
console.log(maxNum2([1,7,43,74,3,4,17,43]))

