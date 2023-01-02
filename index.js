const currency_one=document.getElementById('currency-one')
const currency_two=document.getElementById('currency-two')

const amount_one  =document.getElementById('number1')
const amount_two  =document.getElementById('number2')

const rateText=document.getElementById('rate')
const swap =document.getElementById('bt')



currency_one.addEventListener('change',calculateMoney)
currency_two.addEventListener('change',calculateMoney)

amount_one.addEventListener('input',calculateMoney)
amount_two.addEventListener('input',calculateMoney)

function calculateMoney() {
        const one =currency_one.value;
        const two =currency_two.value;
        const One =amount_one.value;
        fetch(`https://api.exchangerate-api.com/v4/latest/${one}`).then(res=>res.json().then(data=>{const rate=data.rates[two] 
        rateText.innerText=`1 ${one} = ${rate} ${two}`
        amount_two.value=(One*rate).toFixed(2);
        }))
}

swap.addEventListener('click',()=> {
                const temp = currency_one.value
                currency_one.value = currency_two.value
                currency_two.value = temp
                calculateMoney()
        })
calculateMoney()