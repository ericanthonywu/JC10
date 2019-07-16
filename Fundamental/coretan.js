// VALIDATE SUDOKU
var arr = [ [5, 3, 4, 6, 7, 8, 9, 1, 2], 
            [6, 7, 2, 1, 9, 5, 3, 4, 8],
            [1, 9, 8, 3, 4, 2, 5, 6, 7],
            [8, 5, 9, 7, 6, 1, 4, 2, 3],
            [4, 2, 6, 8, 5, 3, 7, 9, 1],
            [7, 1, 3, 9, 2, 4, 8, 5, 6],
            [9, 6, 1, 5, 3, 7, 2, 8, 4],
            [2, 8, 7, 4, 1, 9, 6, 3, 5],
            [3, 4, 5, 2, 8, 6, 1, 7, 9]]

validate = (arr) => {
    for(var i = 0; i < 3; i++){ //row 9x9
        for(var k = 0; k < 3; k++){ // col 9x9
            newArr = []
            for(var l = 0; l < 3; l++){ // row 3x3
                for(var m = 0; m < 3; m++){ // col 3x3
                    if(newArr.includes(arr[k*3+l][i*3+m])){
                        return false
                    }
                    newArr.push(arr[k*3+l][i*3+m])
                }
            }
            console.log('1 set')
            console.log(newArr)
        }
    }
    for(var i = 0; i < 9; i++){
        newArr = []
        for(var j = 0; j < 9; j++){
            if(newArr.includes(arr[i][j])){
                return false
            }
            newArr.push(arr[i][j])
        }
    }
    for(var i = 0; i < 9; i++){
        newArr = []
        for(var j = 0; j < 9; j++){
            if(newArr.includes(arr[j][i])){
                return false
            }
            newArr.push(arr[j][i])
        }
    }

    return true
}

validate(arr)