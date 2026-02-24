// Ambil elemen yang dibutuhkan
const lilin = document.getElementById('lilin');
const tombol = document.getElementById('btnCelebrate');
const judul = document.getElementById('headline');

// 1. Fitur Tiup Lilin (Klik pada api)
lilin.addEventListener('click', function() {
    lilin.style.display = 'none'; // Menghilangkan api
    judul.innerHTML = "Thanks for opening this";
    alert("Semoga semua apa yang kamu pengen tercapai ya!");
});

// 2. Fitur Tombol Rayakan
tombol.addEventListener('click', function() {
    confettiEffect(); // Jalankan fungsi hiasan (logika sederhana)
    alert("Wishing you a day filled with happiness and a year filled with joy. Happy Birthday!");
});

// Fungsi simulasi sederhana
function confettiEffect() {
    console.log("Confetti diluncurkan! 🎉");
    document.body.style.backgroundColor = "#2c3e50"; // Ubah suasana sedikit
    setTimeout(() => {
        document.body.style.backgroundColor = ""; // Balikkan lagi
    }, 1000);
}