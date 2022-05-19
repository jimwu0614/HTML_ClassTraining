//抓元件  文字內容改掉
const myForm = document.getElementById("myForm")
const num1Input = document.getElementById("num1")
const num2Input = document.getElementById("num2")
const optionInput = document.getElementById("option")
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
    let option = optionInput.value;


    let resultNum = 0;
    switch (option) {
        case "+":
            resultNum = num1 + num2 ;        
            break;
        case "-":
            resultNum = num1 - num2 ;        
            break;
        case "*":
            resultNum = num1 * num2 ;        
            break;
        case "/":
            resultNum = num1 / num2 ;        
            break;
    
        default:
            break;
    }
        // let sum = num1 + num2;
        console.log(resultNum);
        // ` 分號 esc下面 數字1左邊
        // console.log("您好");
        myString1 = `${num1} ${option} ${num2} = ${resultNum}`;
        // myString2 = num1 + " + " + num2 + " = " + sum;
        // console.log(myString1);
        // console.log(myString2);
        resultP.innerText = myString1;
    
            //submit get value
        
})


//改元件 內容文字
resultP.innerText = "hello first change text";