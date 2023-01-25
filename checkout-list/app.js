//! TOPLAM FONKSİYONLARI EKLENECEK!!

const tikla = document.querySelector(".items");

tikla.addEventListener("click", (e) => {
  if (e.target.classList.contains("minus")) {
    if (e.target.nextElementSibling.innerText > 0) {
      e.target.nextElementSibling.innerText--;
      //?clac
    } else {
      alert("YOUR ITEM WILL BE REMOVED");
      e.target.closest(".item").remove();
      //?clac
    }
  } else if (e.target.classList.contains("plus")) {
    e.target.previousElementSibling.innerText++;
    //?calc
  } else if (e.target.classList.contains("btn-remove")) {
    e.target.closest(".item").remove();
    //?calc
  }
});

let pTotal = (e) => {
  let ucret = e.querySelector("b").innerText;

  let sayi = e.querySelector(".amount").innerText;

  let total = +(ucret * sayi).toFixed(2);

  e.querySelector(".pTotal").innerText = pay;

};
