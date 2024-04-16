//  const apiKey = 'YOUR_API_KEY'; 
// const meblegInput = document.querySelector('#mebleg');
// const convertButton = document.querySelector('#convert');
// const neticeElement = document.querySelector('#netice');

// convertButton.addEventListener('click', () => {
//     const mebleg = meblegInput.value;
    
//     if (mebleg) {
//         fetch(`https://api.exchangerate-api.com/v4/latest/AZN`)
//             .then(response => response.json())
//             .then(data => {
//                 const exchangeRateUSD = data.rates.USD;
//                 const exchangeRateEUR = data.rates.EUR;
                
//                 const convertedmeblegUSD = mebleg * exchangeRateUSD;
//                 const convertedmeblegEUR = mebleg * exchangeRateEUR;
                
//                 neticeElement.innerHTML = `${mebleg} AZN = ${convertedAmountUSD.toFixed(2)} USD<br>${mebleg} AZN = ${convertedmeblegEUR.toFixed(2)} EUR`;
//             })
//             .catch(error => {
//                 console.error('Error fetching exchange rates:', error);
//                 neticeElement.textContent = 'Emeliyyat duzgun deyil';
//             });
//     } else {
//         neticeElement.textContent = 'Bir qiymet daxil edin';
//     }
// });





// const acc = document.getElementsByClassName("accordion");
const rengliqutu = function() {
    const randomNumber = Math.floor(Math.random() * 4);
    const buttons = [
                     "Message 1",
                     "Message 2",
                     "Message 3", 
                     "Message 4"
                    ];

    const qutular = document.getElementById("qutular");
    const Buton = document.createElement("button");
    Buton.innerHTML = buttons[randomNumber];
    Buton.style.position = "absolute";
    Buton.style.bottom = (qutular.childElementCount * 40) + "px"; 
    Buton.style.right = "0";
    Buton.style.width = "130px"
    qutular.append(Buton);
    const textColors = ["red", "blue", "green", "black", "purple", "orange"];
    const textColor = textColors[Math.floor(Math.random() * textColors.length)]; 
    Buton.style.color = textColor;
    setTimeout(function() {
        qutular.removeChild(Buton);
    }, 3000);
};   
