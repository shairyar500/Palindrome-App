function checkPalindrome(str) {

let inputStr = document.querySelector("#input-text").value;
   
const strArray = inputStr.split('');
   console.log(strArray);

const reverseStrArray = strArray.reverse();
   console.log(reverseStrArray);
   const reverseString = reverseStrArray.join('');

   if (inputStr == reverseString) {
      
      document.querySelector("#results").innerHTML = "It is a palindrome";
      document.querySelector("#checkBtn").disabled = false;
   }
   else {
      document.querySelector("#results").innerHTML = "It is not a palindrome";
      document.querySelector("#checkBtn").disabled = false;
   }
}