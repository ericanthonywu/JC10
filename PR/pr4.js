multiply = (len, num) => {
    var arr = []
    for(var i = 1; i <= len; i++){
        arr[i-1] = i
    }

    console.log(arr)

    for(var j = 0; j < arr.length; j++){
        console.log(arr[j]*num)
    }
}



// multiply(10, 5)

multiply2 = (len, num) => {
    for(var i = 1; i <= len; i++){ // i = 2
        console.log(i*num)
    }
}

multiply2(10, 5)

// function lari(){

//     return 'lelah'
// }



// function mesinTebu(tebu){
    
//     return 'Es'

// }

// console.log(mesinTebu('eseseses'))



// multiply2(7, 3)


// var newArr = [0,1,2,3,4,5,6,7,8,9]
// newArr[3] = 'apel'

// console.log(newArr)