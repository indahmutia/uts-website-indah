// === JAM DIGITAL ===
function updateClock() {
  const now = new Date();
  let jam = String(now.getHours()).padStart(2, '0');
  let menit = String(now.getMinutes()).padStart(2, '0');
  let detik = String(now.getSeconds()).padStart(2, '0');
  document.getElementById("clock").innerText = jam + " : " + menit + " : " + detik;
}
setInterval(updateClock, 1000);
updateClock();


// === ANIMASI BUNGA, BINTANG, BULAN JATUH ===
function buatAnimasi() {
  const simbol = ['🌸', '✨', '🌙'];
  const elemen = document.createElement("div");
  elemen.classList.add("bunga");
  elemen.textContent = simbol[Math.floor(Math.random() * simbol.length)];

  // posisi random di layar
  elemen.style.left = Math.random() * 100 + "vw";
  elemen.style.fontSize = Math.random() * 20 + 15 + "px";
  elemen.style.animationDuration = Math.random() * 5 + 5 + "s"; // lama jatuh
  document.body.appendChild(elemen);

  // hapus setelah selesai animasi
  setTimeout(() => {
    elemen.remove();
  }, 10000);
}

// panggil terus menerus biar agak ramai
setInterval(buatAnimasi, 300);