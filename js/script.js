const humberger = document.querySelector('#humberger');
const navMenu = document.querySelector('#nav-menu');

humberger.addEventListener('click', function() {
    humberger.classList.toggle('humberger-active');
    navMenu.classList.toggle('hidden');
});

// Tambahkan event listener untuk menutup menu saat mengklik area di luar menu
window.addEventListener('click', function(e) {
    if (!navMenu.contains(e.target) && e.target !== humberger) {
        humberger.classList.remove('humberger-active');
        navMenu.classList.add('hidden')
    }
});

// Selanjutnya, kita perlu menyesuaikan kembali event scroll agar tetap konsisten
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const topTop = document.querySelector('#to-top');

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        topTop.classList.remove('hidden');
        topTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        topTop.classList.remove('flex');
        topTop.classList.add('hidden');
    }
});

// Terakhir, kita perlu memperbaiki toggle tema gelap
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
    if (darkToggle.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
});

// Periksa jika tema gelap sebelumnya telah disimpan
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
} else {
    darkToggle.checked = false;
}

const sendWa = document.querySelector('#sendWa');
const nama = document.querySelector('#name');
const email = document.querySelector('#email');
const pesan = document.querySelector('#pesan');

sendWa.addEventListener('click', function(e) {
    e.preventDefault();
    let url = `https://api.whatsapp.com/send?phone=62386802840&text=Halo+Admin,+Saya:+${nama.value}+dengan+Email:+${email.value}+ingin+menghubungi+anda+Pesan:+${pesan.value}`;
    window.open(url);
})
