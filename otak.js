// Ambil elemen tombol dan paragraf
const tombol = document.getElementById("klikBtn");
const pesan = document.getElementById("pesan");

// Tambahkan event klik
tombol.addEventListener("click", function() {
  pesan.textContent = "Terima kasih sudah mengklik tombol ini! 😄";
  pesan.style.color = "#0078d7";
});