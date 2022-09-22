const text = "ALKADEMI<3"

function palindrome(text){
     //cek text memiliki 1 char
     if (text.length == 1) return true

     //cek kesamaan 2 char yang tersisa
     if (text.length == 2) return text[0] == text[1]

     //cek(recursive) lanjutan jika char pertama dan terakhir sama
     if (text[0] == text[text.length - 1]){
          return palindrome(text = (text) => {
               for (let i = 0; i<text.length; i++){
                    text[i] = text[i + 1]
               }
               text[text.length - 1] = ''
               text[text.length - 2] = ''
          })
     }
     return false
}
console.log(palindrome(text))