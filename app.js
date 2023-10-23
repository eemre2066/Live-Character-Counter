const text = document.querySelector(".text");
const sonucDiv = document.querySelector(".sonuc");
const btn = document.querySelector(".btn");

let charDegeri = 0;
let kalanChar = "";


//? kalan karakteri hesaplama ve yazdırma
text.addEventListener("keyup", function (e) {
    charDegeri++;
    let maxChar = 150;
    kalanChar = (maxChar - charDegeri);
    sonucDiv.textContent = `Kalan karakter sayısı: ${kalanChar}`;
    if (kalanChar <= 0) {
        text.disabled = "true"
    }

 

    e.preventDefault();
})







