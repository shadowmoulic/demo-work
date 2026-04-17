/**
 * Master Realtors Shared Components
 */

const components = {
    header: `
        <nav class="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl rounded-full z-50 bg-white/85 backdrop-blur-md shadow-[0_20_40px_rgba(26,28,31,0.06)] flex justify-between items-center px-8 py-3">
            <div class="flex items-center gap-3">
                <div class="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center overflow-hidden hover:rotate-[360deg] transition-transform duration-700 cursor-pointer" onclick="window.location.href='index.html'">
                    <img src="logo.png" alt="MR" class="w-10 h-10 object-contain" onerror="this.src='https://via.placeholder.com/40x40?text=MR'">
                </div>
                <div class="text-2xl font-black text-blue-900 tracking-tighter font-headline">
                    Master Realtors
                </div>
            </div>
            <div class="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest font-bold">
                <a class="nav-link text-slate-500 hover:text-blue-900 transition-colors font-headline tracking-tighter" href="index.html">Home</a>
                <a class="nav-link text-slate-500 hover:text-blue-900 transition-colors font-headline tracking-tighter" href="buy.html">Buy</a>
                <a class="nav-link text-slate-500 hover:text-blue-900 transition-colors font-headline tracking-tighter" href="sell.html">Sell</a>
                <a class="nav-link text-slate-500 hover:text-blue-900 transition-colors font-headline tracking-tighter" href="rent.html">Rent</a>
                <a class="nav-link text-slate-500 hover:text-blue-900 transition-colors font-headline tracking-tighter" href="coverage.html">Coverage</a>
            </div>
            <div class="flex items-center gap-4">
                <div class="hidden sm:flex flex-col items-end mr-2">
                    <span class="text-[10px] uppercase tracking-widest text-outline font-extrabold">Direct Line</span>
                    <span class="text-primary font-black font-headline text-lg tracking-tighter">98741 21666</span>
                </div>
                <button id="mobile-menu-btn" class="md:hidden p-2 text-primary">
                    <span class="material-symbols-outlined text-3xl">menu</span>
                </button>
                <a href="https://wa.me/919874121666?text=Hi%20Master%20Realtors%2C%20I'm%20interested%20in%20a%20property%20consultation."
                    class="hidden sm:flex bg-primary text-on-primary px-6 py-2.5 rounded-full font-headline font-bold text-sm hover:bg-primary-container transition-all shadow-lg hover:scale-105 active:scale-95">
                    Chat Now
                </a>
            </div>
        </nav>
        <div id="mobile-menu" class="fixed inset-0 z-[100] bg-primary/95 backdrop-blur-xl translate-x-full transition-transform duration-500 p-8 flex flex-col justify-center items-center gap-8 text-white md:hidden">
            <button id="close-menu-btn" class="absolute top-8 right-8 text-white">
                <span class="material-symbols-outlined text-4xl">close</span>
            </button>
            <a class="text-3xl font-headline font-black hover:text-tertiary-fixed transition-colors" href="index.html">Home</a>
            <a class="text-3xl font-headline font-black hover:text-tertiary-fixed transition-colors" href="buy.html">Buy</a>
            <a class="text-3xl font-headline font-black hover:text-tertiary-fixed transition-colors" href="sell.html">Sell</a>
            <a class="text-3xl font-headline font-black hover:text-tertiary-fixed transition-colors" href="rent.html">Rent</a>
            <a class="text-3xl font-headline font-black hover:text-tertiary-fixed transition-colors" href="coverage.html">Coverage</a>
            <div class="mt-8 pt-8 border-t border-white/10 w-full text-center">
                <p class="text-xs uppercase tracking-widest text-blue-200 mb-4">Urgent Consultation</p>
                <a href="tel:9874121666" class="text-2xl font-headline font-bold">98741 21666</a>
            </div>
        </div>
    `,
    footer: `
        <footer class="bg-primary py-20 text-white overflow-hidden relative border-t border-white/5">
            <div class="max-w-7xl mx-auto px-8 relative z-10">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
                    <div>
                        <h4 class="text-2xl font-headline font-black mb-6">Master Realtors</h4>
                        <p class="text-blue-200/70 text-sm leading-relaxed max-w-xs">The most trusted property advisor in Howrah, delivering excellence since 2014.</p>
                    </div>
                    <div>
                        <h5 class="text-sm font-bold uppercase tracking-widest mb-6 text-tertiary-fixed">Quick Navigation</h5>
                        <div class="grid grid-cols-2 gap-4">
                            <a href="index.html" class="text-blue-100/60 hover:text-white transition-colors text-sm">Home</a>
                            <a href="buy.html" class="text-blue-100/60 hover:text-white transition-colors text-sm">Buy</a>
                            <a href="sell.html" class="text-blue-100/60 hover:text-white transition-colors text-sm">Sell</a>
                            <a href="rent.html" class="text-blue-100/60 hover:text-white transition-colors text-sm">Rent</a>
                            <a href="coverage.html" class="text-blue-100/60 hover:text-white transition-colors text-sm">Coverage</a>
                        </div>
                    </div>
                    <div>
                        <h5 class="text-sm font-bold uppercase tracking-widest mb-6 text-tertiary-fixed">Headquarters</h5>
                        <p class="text-blue-100/60 text-sm leading-relaxed">6/5, Carry Road, Shibpur,<br>Howrah – 711104, West Bengal, India</p>
                        <div class="mt-6 flex gap-4">
                            <a href="tel:9874121666" class="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                                <span class="material-symbols-outlined text-sm">call</span>
                            </a>
                            <a href="https://wa.me/919874121666" class="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                                <span class="material-symbols-outlined text-sm">chat</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="pt-8 border-t border-white/5 text-center">
                    <p class="text-[10px] uppercase tracking-[0.2em] text-blue-200/30">© 2026 Master Realtors. Built for Excellence.</p>
                </div>
            </div>
        </footer>
    `,
    faq: `
        <section class="py-20 bg-surface-container-low" id="faq">
            <div class="max-w-4xl mx-auto px-8">
                <div class="text-center mb-16" data-aos="fade-up">
                    <h2 class="text-3xl md:text-5xl font-headline font-black text-primary mb-4 tracking-tighter">Frequently Asked Questions</h2>
                    <p class="text-on-surface-variant font-medium">Everything you need to know about Master Realtors Howrah.</p>
                </div>
                
                <div class="space-y-4">
                    <div class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden" data-aos="fade-up">
                        <details class="group p-6">
                            <summary class="flex justify-between items-center cursor-pointer list-none font-headline font-bold text-primary group-open:text-blue-600 transition-colors">
                                <span>Where is Master Realtors located?</span>
                                <span class="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                            </summary>
                            <div class="mt-4 text-on-surface-variant text-sm leading-relaxed font-body">
                                Master Realtors is located at 6/5, Carry Road, Shibpur, Howrah – 711104, West Bengal, India.
                            </div>
                        </details>
                    </div>
                    <div class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden" data-aos="fade-up">
                        <details class="group p-6">
                            <summary class="flex justify-between items-center cursor-pointer list-none font-headline font-bold text-primary group-open:text-blue-600 transition-colors">
                                <span>What are your working hours?</span>
                                <span class="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                            </summary>
                            <div class="mt-4 text-on-surface-variant text-sm leading-relaxed font-body">
                                Master Realtors opens at 10 AM on working days. For exact closing time and holiday schedule, please confirm directly by calling 9874121666.
                            </div>
                        </details>
                    </div>
                    <div class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden" data-aos="fade-up">
                        <details class="group p-6">
                            <summary class="flex justify-between items-center cursor-pointer list-none font-headline font-bold text-primary group-open:text-blue-600 transition-colors">
                                <span>What type of services do you provide?</span>
                                <span class="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                            </summary>
                            <div class="mt-4 text-on-surface-variant text-sm leading-relaxed font-body">
                                We fall under the Property Dealers category and serve customers in Howrah and surrounding areas of West Bengal for buying, selling, and renting residential and commercial properties.
                            </div>
                        </details>
                    </div>
                    <div class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden" data-aos="fade-up">
                        <details class="group p-6">
                            <summary class="flex justify-between items-center cursor-pointer list-none font-headline font-bold text-primary group-open:text-blue-600 transition-colors">
                                <span>Which locations do you cover?</span>
                                <span class="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                            </summary>
                            <div class="mt-4 text-on-surface-variant text-sm leading-relaxed font-body">
                                We are specialized in Shibpur, Carry Road, Chatterjeehat, Mandirtala, and all prime zones of Howrah.
                            </div>
                        </details>
                    </div>
                </div>
            </div>
        </section>
    `,
    map: `
        <section class="py-0 overflow-hidden">
            <div class="w-full h-[450px] bg-slate-200">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.666!2d88.32!3d22.57!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027787!2sCarry%20Rd%2C%20Shibpur%2C%20Howrah%2C%20West%20Bengal%20711104!5e0!3m2!1sen!2sin!4v17133!5m2!1sen!2sin" 
                    width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="grayscale hover:grayscale-0 transition-all duration-700"></iframe>
            </div>
        </section>
    `
};

function initSharedComponents() {
    const headerPlaceholder = document.getElementById('header-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');
    const faqPlaceholder = document.getElementById('faq-placeholder');
    const mapPlaceholder = document.getElementById('map-placeholder');

    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = components.header;
        initMobileMenu();
        highlightActiveLink();
    }
    if (footerPlaceholder) footerPlaceholder.innerHTML = components.footer;
    if (faqPlaceholder) faqPlaceholder.innerHTML = components.faq;
    if (mapPlaceholder) mapPlaceholder.innerHTML = components.map;
}

function initMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const closeBtn = document.getElementById('close-menu-btn');
    const menu = document.getElementById('mobile-menu');

    if (menuBtn && closeBtn && menu) {
        menuBtn.addEventListener('click', () => menu.classList.remove('translate-x-full'));
        closeBtn.addEventListener('click', () => menu.classList.add('translate-x-full'));
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => menu.classList.add('translate-x-full'));
        });
    }
}

function highlightActiveLink() {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        if (link.getAttribute('href') === path) {
            link.classList.add('text-blue-900', 'border-b-2', 'border-tertiary-fixed-dim', 'pb-1');
            link.classList.remove('text-slate-500');
        }
    });
}

document.addEventListener('DOMContentLoaded', initSharedComponents);
