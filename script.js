document.addEventListener('DOMContentLoaded', function() {
    // Mobil menü için ileride kullanabiliriz
    console.log('Blog sayfası yüklendi!');

    // Burada ileride ekleyeceğimiz interaktif özellikler için yer açıyoruz

    // Navbar scroll işlevi
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        });
    }

    // Bülten formu için
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            alert(`${email} adresiniz bülten listemize eklenmiştir. Teşekkürler!`);
            this.reset();
        });
    }
}); 