//抓元件  文字內容改掉
const myForm = document.getElementById("myForm")
const num1Input = document.getElementById("num1")
const num2Input = document.getElementById("num2")
const resultP = document.getElementById("result")

console.log(myForm);
console.log(num1Input);
console.log(num2Input);
console.log(resultP);

myForm.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(e)
    console.log(num1Input.value)
    console.log(num2Input.value)
    let num1 =parseInt(num1Input.value)
    let num2 =parseInt(num2Input.value)
    let sum = num1 + num2
    
    console.log(sum)
    console.log(num1 + "+" + num2 + "=" + sum)
})


//改元件 內容文字
resultP.innerText = "hello first change text";