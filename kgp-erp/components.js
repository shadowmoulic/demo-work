// Dynamic prefix calculation based on location pathname
let pathPrefix = "./";
const path = window.location.pathname;
if (path.includes('/academic-information/') || path.includes('/performance/')) {
    pathPrefix = "../../";
} else if (path.includes('/academic/') || path.includes('/cdc/') || path.includes('/accommodation/') || path.includes('/accounts/') || path.includes('/dashboard/')) {
    pathPrefix = "../";
}

// Inject Favicon if it doesn't exist
if (!document.querySelector('link[rel="icon"]')) {
    const fav = document.createElement('link');
    fav.rel = 'icon';
    fav.type = 'image/png';
    fav.href = pathPrefix + 'iitkgp logo.png';
    document.head.appendChild(fav);
}

// Inject Fonts if not present
if (!document.querySelector('link[href*="fonts.googleapis.com"]')) {
    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap';
    document.head.appendChild(fontLink);
}

document.addEventListener('DOMContentLoaded', () => {
    // 1. Sidebar Injection
    const sidebarPlaceholder = document.getElementById('sidebar-placeholder');
    if (sidebarPlaceholder) {
        const isAcademic = path.includes('/academic/');
        const isAccounts = path.includes('/accounts/');
        const isAccommodation = path.includes('/accommodation/');
        const isCdc = path.includes('/cdc/');
        const isDashboard = !isAcademic && !isAccounts && !isAccommodation && !isCdc;

        sidebarPlaceholder.outerHTML = `
        <aside class="sidebar">
            <div class="sidebar-header">
                <a href="${pathPrefix}dashboard/" style="text-decoration: none; color: inherit; display: flex; align-items: center; gap: 10px;">
                    <img src="${pathPrefix}iitkgp logo.png" alt="IIT KGP Logo" class="sidebar-logo">
                    <h2>IITKGP ERP</h2>
                </a>
                <button class="close-btn" id="closeSidebar" aria-label="Close sidebar">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
            
            <nav class="sidebar-menu">
                <a href="${pathPrefix}dashboard/" class="menu-item ${isDashboard ? 'active' : ''}">
                    <i class="fa-solid fa-house"></i>
                    <span>Dashboard</span>
                </a>

                <!-- Full Academic Menu inside Accordion -->
                <div class="accordion-wrapper ${isAcademic ? 'open' : ''}" id="academicAccordion">
                    <div class="menu-item accordion-header ${isAcademic ? 'active' : ''}">
                        <div style="display:flex; align-items:center; gap:12px;">
                            <i class="fa-solid fa-book-open"></i>
                            <span>Academic</span>
                        </div>
                        <i class="fa-solid fa-chevron-down caret"></i>
                    </div>
                    
                    <div class="accordion-content">
                        <div class="submenu-category">Registration & Academics</div>
                        <a href="${pathPrefix}academic/" class="submenu-item">Subjects & Curricula</a>
                        <a href="${pathPrefix}academic/" class="submenu-item">UG Registration & Flow</a>
                        <a href="${pathPrefix}academic/" class="submenu-item">PG Modules</a>
                        <a href="${pathPrefix}academic/" class="submenu-item">Final Graduation Processing</a>

                        <div class="submenu-category">Time Table & Exams</div>
                        <a href="${pathPrefix}academic/" class="submenu-item">Examination TimeTable</a>
                        <a href="${pathPrefix}academic/" class="submenu-item">Time Table (Classes)</a>
                        <a href="${pathPrefix}academic/" class="submenu-item">Results Review</a>

                        <div class="submenu-category">Financials & Awards</div>
                        <a href="${pathPrefix}academic/" class="submenu-item">Fees Payment & Status</a>
                        <a href="${pathPrefix}academic/" class="submenu-item">Scholarship</a>
                        <a href="${pathPrefix}academic/" class="submenu-item">Mediclaim</a>
                        <a href="${pathPrefix}academic/" class="submenu-item">Award and Prize (UG)</a>
                    </div>
                </div>

                <a href="${pathPrefix}accounts/" class="menu-item ${isAccounts ? 'active' : ''}">
                    <i class="fa-solid fa-file-invoice-dollar"></i>
                    <span>Accounts</span>
                </a>
                <a href="${pathPrefix}accommodation/" class="menu-item ${isAccommodation ? 'active' : ''}">
                    <i class="fa-solid fa-hotel"></i>
                    <span>Guest House</span>
                </a>
                <a href="${pathPrefix}cdc/" class="menu-item ${isCdc ? 'active' : ''}">
                    <i class="fa-solid fa-briefcase"></i>
                    <span>CDC</span>
                </a>
            </nav>
        </aside>
        `;
    }

    // 2. Top Nav Injection
    const topnavPlaceholder = document.getElementById('topnav-placeholder');
    if (topnavPlaceholder) {
        const searchPlaceholder = topnavPlaceholder.getAttribute('data-placeholder') || 'Search menus, files, students...';
        topnavPlaceholder.outerHTML = `
        <header class="top-nav">
            <div style="display: flex; align-items: center;">
                <button class="back-btn" id="goBackBtn" aria-label="Go back">
                    <i class="fa-solid fa-chevron-left"></i>
                </button>
                <button class="menu-btn" id="openSidebar" aria-label="Open sidebar">
                    <i class="fa-solid fa-bars"></i>
                </button>
                <div class="search-box" id="globalSearchBox" style="position: relative;">
                    <button class="search-mobile-close" id="closeMobileSearch" aria-label="Close search">
                        <i class="fa-solid fa-arrow-left"></i>
                    </button>
                    <i class="fa-solid fa-search" id="searchIconTrigger"></i>
                    <input type="text" id="globalSearchInput" placeholder="${searchPlaceholder}" autocomplete="off">
                    <div class="search-results-dropdown" id="globalSearchResults"></div>
                </div>
            </div>

            <div class="nav-actions">
                <!-- Mail Dropdown -->
                <div class="topnav-dropdown-wrapper" id="mailMenu">
                    <button class="icon-btn" id="mailBtn" aria-label="Messages">
                        <i class="fa-regular fa-envelope"></i>
                        <span class="badge">3</span>
                    </button>
                    <div class="dropdown-content glass-panel">
                        <div class="dropdown-header-title">Recent Messages</div>
                        <div class="dropdown-divider"></div>
                        <a href="#" class="dropdown-item message-item" style="text-decoration:none;">
                            <div class="message-meta">
                                <strong>Dean of Students</strong>
                                <span class="message-time">10m ago</span>
                            </div>
                            <div class="message-subject">MCM Scholarship Notice</div>
                            <div class="message-preview">Please upload your CGPA grade sheets...</div>
                        </a>
                        <a href="#" class="dropdown-item message-item" style="text-decoration:none;">
                            <div class="message-meta">
                                <strong>CDC Office</strong>
                                <span class="message-time">2h ago</span>
                            </div>
                            <div class="message-subject">Google PPT Rescheduled</div>
                            <div class="message-preview">Google India PPT rescheduled to 18:00...</div>
                        </a>
                        <a href="#" class="dropdown-item message-item" style="text-decoration:none;">
                            <div class="message-meta">
                                <strong>LBS Warden Office</strong>
                                <span class="message-time">1d ago</span>
                            </div>
                            <div class="message-subject">Maintenance Drive</div>
                            <div class="message-preview">Lodge carpentry/electrical complaints today...</div>
                        </a>
                    </div>
                </div>

                <!-- Notifications Dropdown -->
                <div class="topnav-dropdown-wrapper" id="notificationMenu">
                    <button class="icon-btn" id="notificationBtn" aria-label="Notifications">
                        <i class="fa-regular fa-bell"></i>
                        <span class="badge" style="background:var(--brand-primary); color:#fff;">2</span>
                    </button>
                    <div class="dropdown-content glass-panel">
                        <div class="dropdown-header-title">Notifications</div>
                        <div class="dropdown-divider"></div>
                        <a href="#" class="dropdown-item notification-item" style="text-decoration:none;">
                            <div class="notification-dot unread"></div>
                            <div class="notification-body">
                                <strong>Graduation Forms</strong>
                                <span>UG graduation deadline extended to June 10.</span>
                            </div>
                        </a>
                        <a href="#" class="dropdown-item notification-item" style="text-decoration:none;">
                            <div class="notification-dot unread"></div>
                            <div class="notification-body">
                                <strong>Networks Grades</strong>
                                <span>Grades for CS30001 have been uploaded.</span>
                            </div>
                        </a>
                    </div>
                </div>

                <!-- Fully working Profile Dropdown -->
                <div class="profile-menu" id="profileMenu">
                    <div class="profile-btn" id="profileBtn">
                        <img src="https://ui-avatars.com/api/?name=Sayak+Moulic&background=3b82f6&color=fff&bold=true" alt="Sayak">
                        <span>Sayak Moulic</span>
                        <i class="fa-solid fa-chevron-down" style="font-size: 12px; margin-left: 5px;"></i>
                    </div>
                    
                    <div class="dropdown-content glass-panel">
                        <a href="#" class="dropdown-item" id="globalProfileLink">
                            <i class="fa-regular fa-user"></i> My Profile
                        </a>
                        <a href="#" class="dropdown-item" id="globalSettingsLink">
                            <i class="fa-solid fa-gear"></i> Settings
                        </a>
                        <a href="#" class="dropdown-item" id="globalPassphraseLink">
                            <i class="fa-solid fa-key"></i> Passphrase Retrieval
                        </a>
                        <div class="dropdown-divider"></div>
                        <a href="#" class="dropdown-item" id="globalSwitchLink">
                            <i class="fa-solid fa-users-gear"></i> Switch Login
                        </a>
                        <a href="#" class="dropdown-item" id="globalLogoutLink" style="color: var(--accent-red);">
                            <i class="fa-solid fa-arrow-right-from-bracket" style="color: var(--accent-red);"></i> Logout
                        </a>
                    </div>
                </div>
            </div>
        </header>
        `;
    }

    // 3. Footer Injection
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.outerHTML = `
        <footer class="footer">
            <p>Copyright &copy; ERP System, IIT Kharagpur. Helpline - 032222-81019/81018/81017</p>
        </footer>
        `;
    }

    // 3.5 Inject Global Modals
    if (!document.getElementById('global-modals-container')) {
        const globalModals = document.createElement('div');
        globalModals.id = 'global-modals-container';
        globalModals.innerHTML = `
        <!-- My Profile Modal -->
        <div class="modal-overlay" id="modalMyProfile">
            <div class="modal-container">
                <div class="modal-header">
                    <h3>Student Profile</h3>
                    <button class="modal-close"><i class="fa-solid fa-xmark"></i></button>
                </div>
                <div class="modal-body">
                    <div style="display: flex; align-items: center; gap: 20px; margin-bottom: 24px;">
                        <img src="https://ui-avatars.com/api/?name=Sayak+Moulic&background=3b82f6&color=fff&bold=true&size=128" alt="Sayak" style="width: 80px; height: 80px; border-radius: 50%; border: 3px solid var(--brand-primary);">
                        <div>
                            <h4 style="font-size: 18px; font-weight: 700; margin-bottom: 4px;">Sayak Moulic</h4>
                            <span style="font-size: 13px; color: var(--brand-primary); font-weight: 600; background: var(--brand-primary-bg); padding: 4px 8px; border-radius: 4px;">Roll No: 22CS30044</span>
                        </div>
                    </div>
                    <div class="table-responsive">
                        <table style="width:100%; border-collapse:collapse; text-align:left; font-size:13px;">
                            <tbody>
                                <tr style="border-bottom:1px solid var(--border-color)">
                                    <td style="padding:10px 4px; color:var(--text-muted); font-weight:500;">Department</td>
                                    <td style="padding:10px 4px; font-weight:600;">Computer Science & Engineering</td>
                                </tr>
                                <tr style="border-bottom:1px solid var(--border-color)">
                                    <td style="padding:10px 4px; color:var(--text-muted); font-weight:500;">Degree & Curriculum</td>
                                    <td style="padding:10px 4px; font-weight:600;">B.Tech (Hons.) in Computer Science</td>
                                </tr>
                                <tr style="border-bottom:1px solid var(--border-color)">
                                    <td style="padding:10px 4px; color:var(--text-muted); font-weight:500;">Hall of Residence</td>
                                    <td style="padding:10px 4px; font-weight:600;">Lal Bahadur Shastri (LBS) Hall, Room B-204</td>
                                </tr>
                                <tr style="border-bottom:1px solid var(--border-color)">
                                    <td style="padding:10px 4px; color:var(--text-muted); font-weight:500;">Official Email</td>
                                    <td style="padding:10px 4px; font-weight:600;">sayak@iitkgp.ac.in</td>
                                </tr>
                                <tr style="border-bottom:1px solid var(--border-color)">
                                    <td style="padding:10px 4px; color:var(--text-muted); font-weight:500;">Enrollment Status</td>
                                    <td style="padding:10px 4px; font-weight:600; color:var(--accent-green)">Active / Registered</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <!-- Settings Modal -->
        <div class="modal-overlay" id="modalSettings">
            <div class="modal-container">
                <div class="modal-header">
                    <h3>Portal Settings</h3>
                    <button class="modal-close"><i class="fa-solid fa-xmark"></i></button>
                </div>
                <div class="modal-body">
                    <form onsubmit="event.preventDefault(); alert('Preferences saved successfully!'); this.closest('.modal-overlay').classList.remove('open');">
                        <div class="form-group">
                            <label for="settingTheme">Portal Theme</label>
                            <select id="settingTheme" class="form-control">
                                <option value="light">Light Theme (Default - Recommended)</option>
                                <option value="dark" disabled>Dark Theme (Disabled by admin for clean aesthetics)</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="settingTimeout">Session Timeout Period</label>
                            <select id="settingTimeout" class="form-control">
                                <option value="30">30 Minutes</option>
                                <option value="60">1 Hour</option>
                                <option value="120">2 Hours</option>
                                <option value="never">Never (Keep Session Alive)</option>
                            </select>
                        </div>
                        <div class="form-group" style="flex-direction:row; align-items:center; gap:10px; margin-top:16px;">
                            <input type="checkbox" id="emailNotif" checked style="width: 18px; height: 18px; accent-color: var(--brand-primary);">
                            <label for="emailNotif" style="margin: 0; font-weight: 500;">Enable email alerts for CDC deadlines</label>
                        </div>
                        <div class="form-group" style="flex-direction:row; align-items:center; gap:10px; margin-top:10px; margin-bottom:20px;">
                            <input type="checkbox" id="smsNotif" checked style="width: 18px; height: 18px; accent-color: var(--brand-primary);">
                            <label for="smsNotif" style="margin: 0; font-weight: 500;">Enable SMS alerts for exam grades publication</label>
                        </div>
                        <button type="submit" class="btn-primary" style="width:100%;">Save Preferences</button>
                    </form>
                </div>
            </div>
        </div>

        <!-- Passphrase Retrieval Modal -->
        <div class="modal-overlay" id="modalPassphrase">
            <div class="modal-container">
                <div class="modal-header">
                    <h3>Passphrase Retrieval System</h3>
                    <button class="modal-close"><i class="fa-solid fa-xmark"></i></button>
                </div>
                <div class="modal-body">
                    <p style="margin-bottom:16px; font-size:13px; color:var(--text-muted);">Retrieve secondary passphrases, VPN configuration files, and network access keys securely.</p>
                    <form id="passphraseForm">
                        <div class="form-group">
                            <label for="passphraseType">Credential Type</label>
                            <select id="passphraseType" class="form-control" required>
                                <option value="wifi">Campus Wi-Fi / LAN Passphrase</option>
                                <option value="vpn">IIT KGP VPN Profile Key</option>
                                <option value="erp">ERP Secondary Passphrase (Transaction Key)</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="masterPass">Master ERP Password</label>
                            <input type="password" id="masterPass" class="form-control" placeholder="Enter your login password" required>
                        </div>
                        <div class="form-group">
                            <label for="securityAnswer">Security Question: What is your primary pet's name?</label>
                            <input type="text" id="securityAnswer" class="form-control" placeholder="Answer here" required>
                        </div>
                        <button type="submit" class="btn-primary" style="width:100%;">Retrieve Credentials</button>
                    </form>
                    <div id="retrievedCredentialBox" style="display:none; margin-top:20px; padding:12px; background:var(--brand-primary-bg); border:1px solid rgba(59, 130, 246, 0.2); border-radius:8px; font-family:monospace; text-align:center; font-size:14px;">
                        <span style="font-weight:600; color:var(--brand-primary); display:block; font-size:11px; font-family:'Outfit'; text-transform:uppercase; margin-bottom:4px;">Decrypted Key</span>
                        <strong id="retrievedCredentialKey" style="letter-spacing:1px; color:var(--brand-primary); font-size:13px;"></strong>
                    </div>
                </div>
            </div>
        </div>

        <!-- Switch Login Modal -->
        <div class="modal-overlay" id="modalSwitchLogin">
            <div class="modal-container">
                <div class="modal-header">
                    <h3>Switch Login Session</h3>
                    <button class="modal-close"><i class="fa-solid fa-xmark"></i></button>
                </div>
                <div class="modal-body">
                    <p style="margin-bottom:16px; font-size:13px; color:var(--text-muted);">Switch active roles within your ERP account without signing out.</p>
                    <form onsubmit="event.preventDefault(); alert('Session successfully switched to selected role.'); window.location.reload();">
                        <div class="form-group">
                            <label for="activeRole">Select Active Role</label>
                            <select id="activeRole" class="form-control" required>
                                <option value="student">Student (Sayak Moulic - 22CS30044)</option>
                                <option value="ta">Teaching Assistant (CS30003 - DBMS Lab)</option>
                                <option value="rep">Department Representative (CSE UG Batch 2022)</option>
                                <option value="warden">Hall Maintenance Coordinator (LBS Hall)</option>
                            </select>
                        </div>
                        <button type="submit" class="btn-primary" style="width:100%;">Switch Active Role</button>
                    </form>
                </div>
            </div>
        </div>

        <!-- Logout Modal -->
        <div class="modal-overlay" id="modalLogout">
            <div class="modal-container">
                <div class="modal-header">
                    <h3>Confirm Logout</h3>
                    <button class="modal-close"><i class="fa-solid fa-xmark"></i></button>
                </div>
                <div class="modal-body">
                    <p style="margin-bottom:24px; font-size:14px; color:var(--text-muted);">Are you sure you want to log out of the IIT Kharagpur ERP portal? Any unsaved changes in registration pages will be lost.</p>
                    <div style="display:flex; gap:12px; justify-content:flex-end;">
                        <button type="button" class="btn-primary modal-close" style="background:var(--border-color); color:var(--text-main); border:1px solid var(--border-color);">Cancel</button>
                        <button type="button" onclick="alert('Logged out successfully (Simulation).'); window.location.reload();" class="btn-primary" style="background:var(--accent-red); border-color:var(--accent-red);">Logout</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Generic Message/Notification Modal -->
        <div class="modal-overlay" id="modalReadMessage">
            <div class="modal-container">
                <div class="modal-header">
                    <h3 id="readMessageTitle">Message Details</h3>
                    <button class="modal-close"><i class="fa-solid fa-xmark"></i></button>
                </div>
                <div class="modal-body">
                    <div style="margin-bottom:12px; font-size:12px; color:var(--text-muted); font-weight:600; text-transform:uppercase; letter-spacing:0.5px;" id="readMessageSender">Sender Name</div>
                    <div style="font-size:14px; color:var(--text-main); line-height:1.6; white-space:pre-wrap;" id="readMessageBody">
                        Full message content will go here.
                    </div>
                    <div style="margin-top: 24px; display:flex; gap:12px; justify-content:flex-end;">
                        <button type="button" class="btn-primary modal-close" style="background:var(--border-color); color:var(--text-main); border:1px solid var(--border-color);">Close</button>
                    </div>
                </div>
            </div>
        </div>
        `;
        document.body.appendChild(globalModals);
    }

    // 4. Attach Global JS Bindings
    setTimeout(() => {
        // Back Button Logic (Visible on both desktop and mobile for subpages)
        const goBackBtn = document.getElementById('goBackBtn');
        if (goBackBtn) {
            const isLoginPage = path.endsWith('/index.html') && !path.includes('/academic/') && !path.includes('/accommodation/') && !path.includes('/accounts/') && !path.includes('/cdc/');
            const isDashboardPage = path.includes('/dashboard/');
            const showBackButton = !isLoginPage && !isDashboardPage;

            if (showBackButton) {
                goBackBtn.classList.add('visible');
                goBackBtn.addEventListener('click', () => {
                    if (document.referrer && document.referrer.includes(window.location.host)) {
                        window.history.back();
                    } else {
                        window.location.href = pathPrefix + 'dashboard/';
                    }
                });
            }
        }

        // Mobile Search Toggle Logic
        const searchBox = document.getElementById('globalSearchBox');
        const searchInput = document.getElementById('globalSearchInput');
        const searchResults = document.getElementById('globalSearchResults');
        const closeMobileSearch = document.getElementById('closeMobileSearch');
        
        if (searchBox && searchInput) {
            // When clicking on collapsed search box on mobile
            searchBox.addEventListener('click', (e) => {
                if (window.innerWidth <= 600 && !searchBox.classList.contains('mobile-active')) {
                    searchBox.classList.add('mobile-active');
                    searchInput.focus();
                    e.stopPropagation();
                }
            });
            
            // When clicking close button on mobile search
            if (closeMobileSearch) {
                closeMobileSearch.addEventListener('click', (e) => {
                    searchBox.classList.remove('mobile-active');
                    searchInput.value = '';
                    if (searchResults) {
                        searchResults.innerHTML = '';
                        searchResults.classList.remove('active');
                    }
                    e.stopPropagation();
                });
            }
        }

        // Intercept (i) button / masonry links with href="#" clicks to show a rich modal description
        const menuDescriptions = {
            "Subjects & Curricula": "View full details on academic curricula, syllabus structures, minor/breadth choices, and course catalogs across departments.",
            "UG Registration & Flow": "Access the undergraduate academic registration flow, promotion rules, and step-by-step pre-registration checklist.",
            "PG Modules": "Postgraduate research and course module information, coordinator contact details, and dissertation guidelines.",
            "Final Graduation Processing": "Check status of graduation clearance, degree certificates application, convocation registration, and hall clearances.",
            "Upload GATE Score": "Upload official GATE scorecard credentials for verify-and-match validation during postgraduate enrollment.",
            "Medical Leave": "Submit medical certificates and documents verified by BCR Technology Hospital to apply for official leave of absence.",
            "Interim Grade Card & Certificates": "Request certified interim grade sheets, transfer certificates, migration certificates, or backlog documentation.",
            "Micro Credit Registration": "Register for short-term micro-credit courses offered by visiting international faculty and industry experts.",
            "Examination TimeTable": "View scheduled slots, room assignments, departmental seat bookings, and examiner details for mid/end-semester exams.",
            "Time Table (Classes)": "Access your customized class schedule, lecture slots, tutorial rooms, and lab batches for the current semester.",
            "Results Review": "Submit requests for grade reviews, script rechecks, or marking clarifications for published semester results.",
            "Important Instructions": "Review the code of conduct, mandatory identity documents, and reporting times for physical examination halls.",
            "Fees Payment & Status": "Track online academic fee payments, check pending dues, download receipts, and apply for fee payment certificates.",
            "Scholarship": "Apply for MCM (Merit-cum-Means) scholarships, check private donor endowments, and submit income declarations.",
            "Mediclaim": "Access student medical insurance details, claim forms, policy documents, and cash-less hospital networks info.",
            "Award and Prize (UG)": "Check qualifications and lists of institute silver/gold medals, endowment prizes, and distinguished alumni awards."
        };

        function showInfoModal(titleText) {
            const cleanTitle = titleText.replace(/\s*<i.*$/i, '').replace(/[\r\n\t]+/g, ' ').replace(/\s+/g, ' ').trim();
            let desc = menuDescriptions[cleanTitle];
            if (!desc) {
                const key = Object.keys(menuDescriptions).find(k => cleanTitle.toLowerCase().includes(k.toLowerCase()) || k.toLowerCase().includes(cleanTitle.toLowerCase()));
                desc = key ? menuDescriptions[key] : `Detailed information and tools for ${cleanTitle} are currently offline. Please contact the academic section for official records.`;
            }

            const msgTitle = document.getElementById('readMessageTitle');
            const msgSender = document.getElementById('readMessageSender');
            const msgBody = document.getElementById('readMessageBody');
            const messageModal = document.getElementById('modalReadMessage');

            if (msgTitle) msgTitle.innerText = cleanTitle;
            if (msgSender) msgSender.innerText = "ERP Academic Portal Information";
            if (msgBody) msgBody.innerText = desc;

            if (messageModal) {
                messageModal.classList.add('open');
            }
        }

        // Global interceptor for info icon/link clicks to prevent page jumping to top
        document.addEventListener('click', (e) => {
            const infoIcon = e.target.closest('.fa-circle-info');
            const masonryLink = e.target.closest('.masonry-link');
            
            if (infoIcon) {
                const link = infoIcon.closest('a');
                if (link && link.getAttribute('href') === '#') {
                    e.preventDefault();
                    e.stopPropagation();
                    showInfoModal(link.textContent.trim());
                }
            } else if (masonryLink && masonryLink.getAttribute('href') === '#') {
                e.preventDefault();
                e.stopPropagation();
                showInfoModal(masonryLink.textContent.trim());
            }
        });

        // Dropdown toggles
        const profileMenu = document.getElementById('profileMenu');
        const profileBtn = document.getElementById('profileBtn');
        const mailMenu = document.getElementById('mailMenu');
        const mailBtn = document.getElementById('mailBtn');
        const notificationMenu = document.getElementById('notificationMenu');
        const notificationBtn = document.getElementById('notificationBtn');

        if (profileBtn && profileMenu) {
            profileBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                profileMenu.classList.toggle('open');
                if (mailMenu) mailMenu.classList.remove('open');
                if (notificationMenu) notificationMenu.classList.remove('open');
            });
        }

        if (mailBtn && mailMenu) {
            mailBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                mailMenu.classList.toggle('open');
                if (profileMenu) profileMenu.classList.remove('open');
                if (notificationMenu) notificationMenu.classList.remove('open');
            });
        }

        if (notificationBtn && notificationMenu) {
            notificationBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                notificationMenu.classList.toggle('open');
                if (profileMenu) profileMenu.classList.remove('open');
                if (mailMenu) mailMenu.classList.remove('open');
            });
        }

        // Close dropdowns on outside click
        document.addEventListener('click', (e) => {
            if (profileMenu && !profileMenu.contains(e.target)) {
                profileMenu.classList.remove('open');
            }
            if (mailMenu && !mailMenu.contains(e.target)) {
                mailMenu.classList.remove('open');
            }
            if (notificationMenu && !notificationMenu.contains(e.target)) {
                notificationMenu.classList.remove('open');
            }
        });

        // Setup triggers for global modals
        function setupGlobalModal(triggerId, modalId) {
            const trigger = document.getElementById(triggerId);
            if (trigger) {
                trigger.addEventListener('click', (e) => {
                    e.preventDefault();
                    if (profileMenu) profileMenu.classList.remove('open');
                    openGlobalModal(modalId);
                });
            }
        }

        function openGlobalModal(modalId) {
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.add('open');
            }
        }

        setupGlobalModal('globalProfileLink', 'modalMyProfile');
        setupGlobalModal('globalSettingsLink', 'modalSettings');
        setupGlobalModal('globalPassphraseLink', 'modalPassphrase');
        setupGlobalModal('globalSwitchLink', 'modalSwitchLogin');
        setupGlobalModal('globalLogoutLink', 'modalLogout');

        // Dynamic Mail & Notification click handlers
        const messageModal = document.getElementById('modalReadMessage');
        const msgTitle = document.getElementById('readMessageTitle');
        const msgSender = document.getElementById('readMessageSender');
        const msgBody = document.getElementById('readMessageBody');

        document.querySelectorAll('.message-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const sender = item.querySelector('strong').innerText;
                const subject = item.querySelector('.message-subject').innerText;
                const preview = item.querySelector('.message-preview').innerText;
                
                if (msgTitle) msgTitle.innerText = subject;
                if (msgSender) msgSender.innerText = "From: " + sender;
                if (msgBody) msgBody.innerText = preview + "\\n\\n(End of message)";
                
                if (mailMenu) mailMenu.classList.remove('open');
                if (messageModal) messageModal.classList.add('open');
            });
        });

        document.querySelectorAll('.notification-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const title = item.querySelector('strong').innerText;
                const body = item.querySelector('span').innerText;
                
                if (msgTitle) msgTitle.innerText = "Alert: " + title;
                if (msgSender) msgSender.innerText = "System Notification";
                if (msgBody) msgBody.innerText = body;
                
                if (notificationMenu) notificationMenu.classList.remove('open');
                if (messageModal) messageModal.classList.add('open');
            });
        });

        // Wire up close logic for all modals (both global and page-specific)
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal-overlay')) {
                e.target.classList.remove('open');
            }
            const closeBtn = e.target.closest('.modal-close');
            if (closeBtn) {
                const overlay = e.target.closest('.modal-overlay');
                if (overlay) {
                    overlay.classList.remove('open');
                }
            }
        });

        // Passphrase Retrieval form logic
        const passphraseForm = document.getElementById('passphraseForm');
        const retrievedBox = document.getElementById('retrievedCredentialBox');
        const retrievedKey = document.getElementById('retrievedCredentialKey');
        if (passphraseForm && retrievedBox && retrievedKey) {
            passphraseForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const type = document.getElementById('passphraseType').value;
                let key = '';
                if (type === 'wifi') {
                    key = 'IITKGP_WIFI_773x_SECURE';
                } else if (type === 'vpn') {
                    key = 'vpn_sayak_22cs30044_auth.ovpn';
                } else {
                    key = 'TXN_KEY_9982_KGP';
                }
                retrievedKey.textContent = key;
                retrievedBox.style.display = 'block';
            });
        }

        // Accordion Logic
        const accordion = document.getElementById('academicAccordion');
        if (accordion) {
            const accordionHeader = accordion.querySelector('.accordion-header');
            if (accordionHeader) {
                accordionHeader.addEventListener('click', () => {
                    accordion.classList.toggle('open');
                    if (accordion.classList.contains('open')) {
                        accordionHeader.classList.add('active');
                    } else {
                        accordionHeader.classList.remove('active');
                    }
                });
            }
        }

        // Mobile Sidebar Logic
        const sidebar = document.querySelector('.sidebar');
        const openSidebar = document.getElementById('openSidebar');
        const closeSidebar = document.getElementById('closeSidebar');

        if (sidebar && openSidebar && closeSidebar) {
            openSidebar.addEventListener('click', () => {
                sidebar.classList.add('active');
            });
            closeSidebar.addEventListener('click', () => {
                sidebar.classList.remove('active');
            });
        }

        // Global Search Logic
        if (searchInput && searchResults) {
            const pages = [
                { title: 'Dashboard', url: 'dashboard/', desc: 'Main ERP home page' },
                { title: 'Academic Information', url: 'academic/academic-information/', desc: 'Student profile and documents' },
                { title: 'Performance Record', url: 'academic/performance/', desc: 'Semester grades and curricula' },
                { title: 'Registration & Academics', url: 'academic/', desc: 'UG/PG Modules and Time Table' },
                { title: 'Guest House Booking', url: 'accommodation/guest-house.html', desc: 'Search availability and book rooms' },
                { title: 'Accommodation Dashboard', url: 'accommodation/', desc: 'Guest house portal home' },
                { title: 'Accounts & Payments', url: 'accounts/', desc: 'Pay fees and view dues' },
                { title: 'CDC Placement', url: 'cdc/', desc: 'Career Development Centre portal' }
            ];

            searchInput.addEventListener('input', (e) => {
                const val = e.target.value.toLowerCase().trim();
                searchResults.innerHTML = '';
                
                if (val.length === 0) {
                    searchResults.classList.remove('active');
                    return;
                }

                const filtered = pages.filter(p => 
                    p.title.toLowerCase().includes(val) || 
                    p.desc.toLowerCase().includes(val)
                );

                if (filtered.length > 0) {
                    filtered.forEach(p => {
                        const a = document.createElement('a');
                        a.href = pathPrefix + p.url;
                        a.className = 'search-result-item';
                        a.innerHTML = `
                            <span class="search-result-title">${p.title}</span>
                            <span class="search-result-desc">${p.desc}</span>
                        `;
                        searchResults.appendChild(a);
                    });
                } else {
                    searchResults.innerHTML = '<div class="search-empty">No results found for "' + val + '"</div>';
                }
                
                searchResults.classList.add('active');
            });

            // Hide dropdown when clicking outside
            document.addEventListener('click', (e) => {
                if (!e.target.closest('.search-box')) {
                    searchResults.classList.remove('active');
                }
            });
        }
    }, 0);

});
