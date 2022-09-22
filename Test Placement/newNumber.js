const input = [1, 3, 2, 3, 5, 0]

function check(arr){
     let count = 0, newArr = Array.from(arr)

     //cek jika panjang arr < 2
     if (arr.length < 2) return 0

     //formula x + 1
     for (let i = 0; i < arr.length; i++){
          newArr[i] += 1

          //sequential search untuk menghitung jumlah kesamaan
          for(let j = 0; j < arr.length; j++){
               if (newArr[i] == arr[j]){
                    count += 1
                    j = arr.length
               }
          }
     }
     return count
}
console.log("Input: [" + input + ']')
console.log("Output: " + check(input))