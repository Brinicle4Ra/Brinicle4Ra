const n = 5

function myStar(n){
     //inisialisasi array & pjg nya
     let arr = []
     arr.length = [n]

     //penambahan bintang diawal
     for (let i = 0; i < arr.length; i++){
          arr[i] = '*'

          //penambahan bintang lanjutan
          for (let j = 1; j <= i; j++){
               arr[i] += '*'
          }
     }

     //menampilkan isi array
     for (let i = 0; i < arr.length; i++){
          console.log(arr[i])
     }
}

/*
//menggunakan method repeat dari JS
function myStarRepeat(n){
     for (let i = 0; i <= n; i++){
          console.log('*'.repeat(i))
     }
}
*/

console.log("input: " + n)
console.log("output: ")
myStar(n)