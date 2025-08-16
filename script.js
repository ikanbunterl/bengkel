// === Toggle Menu di HP ===
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// === Dark Mode Toggle ===
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Cek preferensi sistem
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  body.classList.add('dark-mode');
  darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  }
});

// === Share Button ===
document.getElementById('shareBtn').addEventListener('click', () => {
  if (navigator.share) {
    navigator.share({
      title: 'MC Pro Motor - Bengkel Motor Terpercaya',
      text: 'Cek bengkel motor terpercaya di Bojonggede!',
      url: window.location.href
    });
  } else {
    // Fallback: salin link
    navigator.clipboard.writeText(window.location.href);
    alert('Link telah disalin ke clipboard!');
  }
});

// === Testimonial Slider ===
let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial-slide');
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
}

document.querySelector('.next-btn').addEventListener('click', nextSlide);
document.querySelector('.prev-btn').addEventListener('click', prevSlide);

// Auto slide setiap 5 detik
setInterval(nextSlide, 5000);

// === Cek Kondisi Motor ===
document.getElementById('motorCheckForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const checkboxes = this.querySelectorAll('input[type="checkbox"]:checked');
  const resultDiv = document.getElementById('cekResult');
  
  if (checkboxes.length === 0) {
    resultDiv.innerHTML = `
      <h3>Hasil Cek</h3>
      <p>Silakan pilih gejala yang dialami motor Anda.</p>
    `;
    resultDiv.className = 'cek-result show';
    return;
  }
  
  let issues = [];
  let solutions = [];
  
  checkboxes.forEach(cb => {
    switch(cb.value) {
      case 'mati':
        issues.push('Masalah pengapian atau bahan bakar');
        solutions.push('Cek busi, karburator, dan sistem pengapian');
        break;
      case 'suara':
        issues.push('Masalah kompresi atau timing mesin');
        solutions.push('Cek ring piston, timing, dan pelumasan');
        break;
      case 'rem':
        issues.push('Masalah pada kampas rem atau sistem hidrolik');
        solutions.push('Ganti kampas rem atau cek minyak rem');
        break;
      case 'oli':
        issues.push('Kebocoran pada seal atau sambungan');
        solutions.push('Cek dan ganti seal yang bocor');
        break;
      case 'starter':
        issues.push('Masalah pada motor starter atau aki');
        solutions.push('Cek aki dan komponen starter');
        break;
      case 'lampu':
        issues.push('Masalah pada bola lampu atau kelistrikan');
        solutions.push('Ganti bola lampu atau cek kabel');
        break;
    }
  });
  
  let resultHTML = `
    <h3>Hasil Cek Gratis</h3>
    <p><strong>Kemungkinan masalah:</strong></p>
    <ul>
  `;
  
  issues.forEach(issue => {
    resultHTML += `<li><i class="fas fa-exclamation-circle"></i> ${issue}</li>`;
  });
  
  resultHTML += `</ul><p><strong>Solusi yang disarankan:</strong></p><ul>`;
  
  solutions.forEach(solution => {
    resultHTML += `<li><i class="fas fa-wrench"></i> ${solution}</li>`;
  });
  
  resultHTML += `</ul><p style="margin-top: 1rem; font-size: 0.9rem; color: #e74c3c;"><strong>*Syarat dan ketentuan berlaku. Untuk hasil akurat, silakan bawa motor ke bengkel kami.</strong></p>`;
  
  resultDiv.innerHTML = resultHTML;
  resultDiv.className = 'cek-result show';
});

// === Smooth Scroll ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
      navLinks.classList.remove('active');
    }
  });
});

// === Scroll to Top Button ===
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  if (window.pageYOffset > 300) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
};

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// === Scroll Reveal Animation (AOS sudah di HTML) ===
