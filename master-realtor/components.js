/**
 * Master Realtors Shared Components
 */

const components = {
    header: `
        <nav class="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl rounded-full z-[100] bg-white/85 backdrop-blur-md shadow-[0_20_40px_rgba(26,28,31,0.06)] flex justify-between items-center px-8 py-3 transform transition-all duration-700 ease-out translate-y-[-100px] opacity-0" id="main-nav">
            <div class="flex items-center gap-3">
                <div class="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center overflow-hidden hover:rotate-[360deg] transition-transform duration-700 cursor-pointer" onclick="window.location.href='/master-realtor/'">
                    <img src="/master-realtor/logo.png" alt="MR" class="w-10 h-10 object-contain" onerror="this.src='https://via.placeholder.com/40x40?text=MR'">
                </div>
                <div class="text-xl lg:text-2xl font-black text-blue-900 tracking-tighter font-headline leading-tight">
                    Master Realtors
                </div>
            </div>
            <div class="hidden lg:flex items-center gap-4 xl:gap-8 text-xs xl:text-sm uppercase tracking-widest font-bold">
                <a class="nav-link text-slate-500 hover:text-blue-900 transition-all duration-300 font-headline tracking-tighter hover:scale-110" href="/master-realtor/index.html">Home</a>
                <a class="nav-link text-slate-500 hover:text-blue-900 transition-all duration-300 font-headline tracking-tighter hover:scale-110" href="/master-realtor/rent.html">Warehouses</a>
                <a class="nav-link text-slate-500 hover:text-blue-900 transition-all duration-300 font-headline tracking-tighter hover:scale-110" href="/master-realtor/rent.html">Factories</a>
                <a class="nav-link text-slate-500 hover:text-blue-900 transition-all duration-300 font-headline tracking-tighter hover:scale-110" href="/master-realtor/buy.html">Land</a>
                <a class="nav-link text-slate-500 hover:text-blue-900 transition-all duration-300 font-headline tracking-tighter hover:scale-110" href="/master-realtor/sell.html">Sell Asset</a>
            </div>
            <div class="flex items-center gap-4">
                <div class="hidden lg:flex flex-col items-end mr-2">
                    <span class="text-[9px] uppercase tracking-widest text-outline font-extrabold opacity-60">Direct Line</span>
                    <span class="text-primary font-black font-headline text-base xl:text-lg tracking-tighter whitespace-nowrap">98741 21666</span>
                </div>
                <button id="mobile-menu-btn" class="lg:hidden p-2 text-primary hover:rotate-90 transition-transform">
                    <span class="material-symbols-outlined text-3xl">menu</span>
                </button>
                <a href="https://wa.me/919874121666?text=Hi%20Master%20Realtors%2C%20I'm%20interested%20in%20a%20property%20consultation."
                    class="hidden md:flex bg-primary text-on-primary px-4 xl:px-6 py-2 rounded-full font-headline font-bold text-xs xl:text-sm hover:bg-primary-container transition-all shadow-lg hover:scale-110 active:scale-95 hover:shadow-primary/20">
                    Chat Now
                </a>
            </div>
        </nav>
        <div id="mobile-menu" class="fixed inset-0 z-[100] bg-primary/95 backdrop-blur-xl translate-x-full transition-transform duration-500 p-8 flex flex-col justify-center items-center gap-8 text-white lg:hidden">
            <button id="close-menu-btn" class="absolute top-8 right-8 text-white">
                <span class="material-symbols-outlined text-4xl">close</span>
            </button>
            <a class="text-3xl font-headline font-black hover:text-tertiary-fixed transition-colors" href="/master-realtor/index.html">Home</a>
            <a class="text-3xl font-headline font-black hover:text-tertiary-fixed transition-colors" href="/master-realtor/rent.html">Warehouses</a>
            <a class="text-3xl font-headline font-black hover:text-tertiary-fixed transition-colors" href="/master-realtor/rent.html">Factories</a>
            <a class="text-3xl font-headline font-black hover:text-tertiary-fixed transition-colors" href="/master-realtor/buy.html">Land Buy/Sell</a>
            <a class="text-3xl font-headline font-black hover:text-tertiary-fixed transition-colors" href="/master-realtor/sell.html">Liquidate Asset</a>
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
                        <p class="text-blue-200/70 text-sm leading-relaxed max-w-xs">Industrial & Commercial Property Experts in Howrah, specializing in warehouse leasing and factory setup since 2014.</p>
                    </div>
                    <div>
                        <h5 class="text-sm font-bold uppercase tracking-widest mb-6 text-tertiary-fixed">Quick Navigation</h5>
                        <div class="grid grid-cols-2 gap-4">
                            <a href="/master-realtor/index.html" class="text-blue-100/60 hover:text-white transition-colors text-sm">Industrial Home</a>
                            <a href="/master-realtor/rent.html" class="text-blue-100/60 hover:text-white transition-colors text-sm">Warehouses</a>
                            <a href="/master-realtor/rent.html" class="text-blue-100/60 hover:text-white transition-colors text-sm">Factories</a>
                            <a href="/master-realtor/buy.html" class="text-blue-100/60 hover:text-white transition-colors text-sm">Land Sales</a>
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
                    <p class="text-[10px] uppercase tracking-[0.2em] text-blue-200/30">© 2026 Master Realtors. Digital Experience by <span class="text-blue-200/60">Sayak (IIT Kharagpur)</span>.</p>
                </div>
            </div>
        </footer>
    `,
    faq: `
        <section class="py-24 bg-slate-50" id="faq">
            <div class="max-w-4xl mx-auto px-8">
                <div class="text-center mb-16">
                    <h2 class="text-3xl md:text-5xl font-headline font-black text-slate-900 mb-4 tracking-tighter">Frequently Asked Questions</h2>
                    <p class="text-slate-600 font-medium text-lg">Industrial expertise for your expansion in Howrah.</p>
                </div>
                
                <div class="grid grid-cols-1 gap-4">
                    <div class="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden transition-all hover:border-primary/30">
                        <details class="group p-6">
                            <summary class="flex justify-between items-center cursor-pointer list-none">
                                <span class="font-headline font-bold text-slate-800 group-open:text-primary transition-colors text-lg">What types of warehouses are available?</span>
                                <span class="material-symbols-outlined transition-transform group-open:rotate-180 text-slate-400">expand_more</span>
                            </summary>
                            <div class="mt-4 text-slate-600 text-base leading-relaxed font-body border-t border-slate-50 pt-4">
                                We offer customized <strong>PEB (Pre-Engineered Building) warehouses</strong> and RCC structures ranging from 5,000 sq.ft to over 2 Lakh sq.ft, compliant with modern fire safety and logistical norms.
                            </div>
                        </details>
                    </div>

                    <div class="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden transition-all hover:border-primary/30">
                        <details class="group p-6">
                            <summary class="flex justify-between items-center cursor-pointer list-none">
                                <span class="font-headline font-bold text-slate-800 group-open:text-primary transition-colors text-lg">Do you handle WBIDC and Pollution Board documentation?</span>
                                <span class="material-symbols-outlined transition-transform group-open:rotate-180 text-slate-400">expand_more</span>
                            </summary>
                            <div class="mt-4 text-slate-600 text-base leading-relaxed font-body border-t border-slate-50 pt-4">
                                Yes, Master Realtors provides <strong>end-to-end liaison services</strong> for WBIDC land transfers, pollution board (PCB) clearances, and fire license approvals for industrial setups.
                            </div>
                        </details>
                    </div>

                    <div class="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden transition-all hover:border-primary/30">
                        <details class="group p-6">
                            <summary class="flex justify-between items-center cursor-pointer list-none">
                                <span class="font-headline font-bold text-slate-800 group-open:text-primary transition-colors text-lg">Which industrial zones in Howrah do you cover?</span>
                                <span class="material-symbols-outlined transition-transform group-open:rotate-180 text-slate-400">expand_more</span>
                            </summary>
                            <div class="mt-4 text-slate-600 text-base leading-relaxed font-body border-t border-slate-50 pt-4">
                                Our primary dominance is in <strong>Dhulagarh Industrial Belt, Jalan Industrial Complex, Sankrail Food Park,</strong> and prime industrial land pockets along NH-6.
                            </div>
                        </details>
                    </div>

                    <div class="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden transition-all hover:border-primary/30">
                        <details class="group p-6">
                            <summary class="flex justify-between items-center cursor-pointer list-none">
                                <span class="font-headline font-bold text-slate-800 group-open:text-primary transition-colors text-lg">Is legal due-diligence for industrial land provided?</span>
                                <span class="material-symbols-outlined transition-transform group-open:rotate-180 text-slate-400">expand_more</span>
                            </summary>
                            <div class="mt-4 text-slate-600 text-base leading-relaxed font-body border-t border-slate-50 pt-4">
                                Absolutely. We conduct <strong>30-year title searches</strong> and verified Mutation/Parcha checks for every piece of industrial land listed with us.
                            </div>
                        </details>
                    </div>
                    <div class="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden transition-all hover:border-primary/30">
                        <details class="group p-6">
                            <summary class="flex justify-between items-center cursor-pointer list-none">
                                <span class="font-headline font-bold text-slate-800 group-open:text-primary transition-colors text-lg">Do you facilitate high-tension (HT) power connections?</span>
                                <span class="material-symbols-outlined transition-transform group-open:rotate-180 text-slate-400">expand_more</span>
                            </summary>
                            <div class="mt-4 text-slate-600 text-base leading-relaxed font-body border-t border-slate-50 pt-4">
                                Yes, we assist in applications for <strong>HT/LT power connections</strong> with CESC and WBSEDCL, ensuring your factory or warehouse has the required KVA capacity before you move in.
                            </div>
                        </details>
                    </div>

                    <div class="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden transition-all hover:border-primary/30">
                        <details class="group p-6">
                            <summary class="flex justify-between items-center cursor-pointer list-none">
                                <span class="font-headline font-bold text-slate-800 group-open:text-primary transition-colors text-lg">What is the typical lease tenure for industrial assets?</span>
                                <span class="material-symbols-outlined transition-transform group-open:rotate-180 text-slate-400">expand_more</span>
                            </summary>
                            <div class="mt-4 text-slate-600 text-base leading-relaxed font-body border-t border-slate-50 pt-4">
                                Most industrial leases in Howrah are structured as <strong>3, 5, or 9-year agreements</strong> with a standard escalation clause (usually 10-15% every 3 years).
                            </div>
                        </details>
                    </div>

                    <div class="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden transition-all hover:border-primary/30">
                        <details class="group p-6">
                            <summary class="flex justify-between items-center cursor-pointer list-none">
                                <span class="font-headline font-bold text-slate-800 group-open:text-primary transition-colors text-lg">Are floor loading capacity certificates provided?</span>
                                <span class="material-symbols-outlined transition-transform group-open:rotate-180 text-slate-400">expand_more</span>
                            </summary>
                            <div class="mt-4 text-slate-600 text-base leading-relaxed font-body border-t border-slate-50 pt-4">
                                Yes, for multi-story industrial buildings, we provide or facilitate <strong>certified structural reports</strong> confirming the floor loading capacity (MT per sq.mt) to ensure suitability for your machinery.
                            </div>
                        </details>
                    </div>
                </div>
            </div>
        </section>
    `,
    schema: `
        <script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Master Realtors",
          "image": "https://demo-work-alpha.vercel.app/master-realtor/logo.png",
          "@id": "https://demo-work-alpha.vercel.app/master-realtor/",
          "url": "https://demo-work-alpha.vercel.app/master-realtor/",
          "telephone": "+91-9874121666",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "6/5, Carry Road, Shibpur",
            "addressLocality": "Howrah",
            "postalCode": "711104",
            "addressCountry": "IN"
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ],
            "opens": "10:00",
            "closes": "20:00"
          }
        }
        </script>
        <script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
           "mainEntity": [{
            "@type": "Question",
            "name": "Where is Master Realtors located?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Master Realtors is located at 6/5, Carry Road, Shibpur, Howrah – 711104, West Bengal, India."
            }
          }, {
            "@type": "Question",
            "name": "What is the contact number of Master Realtors?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can contact Master Realtors at 9874121666."
            }
          }, {
            "@type": "Question",
            "name": "What are the working hours of Master Realtors?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Master Realtors opens at 10 AM on working days. For exact closing time, please confirm directly by calling 9874121666."
            }
          }, {
            "@type": "Question",
            "name": "What type of business is Master Realtors?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Master Realtors falls under the Property Dealers category and serves customers in Howrah and surrounding areas."
            }
          }]
        }
        </script>
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

        // Immediate animation for navbar
        setTimeout(() => {
            const nav = document.getElementById('main-nav');
            if (nav) {
                nav.classList.remove('translate-y-[-100px]', 'opacity-0');
            }
        }, 300); // Increased delay for network stability on mobile
    }
    if (footerPlaceholder) footerPlaceholder.innerHTML = components.footer;
    if (faqPlaceholder) {
        faqPlaceholder.innerHTML = components.faq;
        // Inject schema only once if FAQ is present
        if (!document.getElementById('m-realtors-schema')) {
            const schemaDiv = document.createElement('div');
            schemaDiv.id = 'm-realtors-schema';
            schemaDiv.innerHTML = components.schema;
            document.body.appendChild(schemaDiv);
        }
    }
    if (mapPlaceholder) mapPlaceholder.innerHTML = components.map;

    // Refresh AOS multiple times to ensure visibility after dynamic injection
    if (window.AOS) {
        setTimeout(() => window.AOS.refresh(), 100);
        setTimeout(() => window.AOS.refresh(), 500);
    }
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
    const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
    const links = document.querySelectorAll('.nav-link');

    links.forEach(link => {
        const linkHref = link.getAttribute('href').replace(/\/$/, '');
        const linkHrefClean = linkHref.replace('.html', '');

        // Match absolute paths, clean URLs, and directory roots
        if (currentPath === linkHref || currentPath === linkHrefClean || (currentPath === '/master-realtor' && linkHrefClean === '/master-realtor/index')) {
            link.classList.add('text-blue-900', 'border-b-2', 'border-tertiary-fixed-dim', 'pb-1');
            link.classList.remove('text-slate-500');
        }
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSharedComponents);
} else {
    initSharedComponents();
}
