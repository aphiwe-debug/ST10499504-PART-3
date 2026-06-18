/* ============================================================
   Swift Bookings — main.js
   WEDE5020 | Part 3 | Aphiwe Magwaza | ST10499504
   ============================================================ */

/* ============================================================
   1. HAMBURGER NAVIGATION (all pages)
   ============================================================ */
(function initNav() {
  const toggle = document.getElementById('navToggle');
  const menu   = document.getElementById('navMenu');
  if (!toggle || !menu) return;

  // Toggle mobile nav open/closed
  toggle.addEventListener('click', function () {
    const isOpen = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
  });

  // Close nav when a link is clicked (mobile UX)
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', false);
    });
  });
})();


/* ============================================================
   2. IMAGE SLIDESHOW (index.html)
   ============================================================ */
(function initSlideshow() {
  const slides = document.querySelectorAll('.mySlides');
  const dots   = document.querySelectorAll('.dot');
  if (!slides.length) return;

  let slideIndex = 0;
  let autoTimer;

  // Show a specific slide and update dot indicators
  function goToSlide(n) {
    slides.forEach(s => s.style.display = 'none');
    dots.forEach(d => d.classList.remove('active'));
    slideIndex = (n + slides.length) % slides.length;
    slides[slideIndex].style.display = 'block';
    if (dots[slideIndex]) dots[slideIndex].classList.add('active');
  }

  // Move forward or backward
  window.plusSlides = function (n) {
    resetAuto();
    goToSlide(slideIndex + n);
  };

  // Auto-advance every 5 seconds
  function startAuto() {
    autoTimer = setInterval(() => goToSlide(slideIndex + 1), 5000);
  }

  function resetAuto() {
    clearInterval(autoTimer);
    startAuto();
  }

  // Keyboard arrow-key navigation
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') window.plusSlides(1);
    if (e.key === 'ArrowLeft')  window.plusSlides(-1);
  });

  goToSlide(0);
  startAuto();
})();


/* ============================================================
   3. GALLERY LIGHTBOX (index.html + services.html)
   ============================================================ */
(function initLightbox() {
  // Create lightbox overlay elements
  const overlay = document.createElement('div');
  overlay.id = 'lightbox-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'Image lightbox');
  overlay.innerHTML = `
    <button id="lb-close" aria-label="Close lightbox">&times;</button>
    <button id="lb-prev"  aria-label="Previous image">&#10094;</button>
    <button id="lb-next"  aria-label="Next image">&#10095;</button>
    <img id="lb-img" src="" alt="">
    <p id="lb-caption"></p>
  `;
  document.body.appendChild(overlay);

  // Inject lightbox CSS
  const style = document.createElement('style');
  style.textContent = `
    #lightbox-overlay {
      display: none; position: fixed; inset: 0; z-index: 9000;
      background: rgba(0,0,0,0.88); align-items: center; justify-content: center;
      flex-direction: column;
    }
    #lightbox-overlay.open { display: flex; }
    #lb-img {
      max-width: 88vw; max-height: 76vh; object-fit: contain;
      border-radius: 6px; box-shadow: 0 8px 40px rgba(0,0,0,0.6);
    }
    #lb-caption {
      color: rgba(255,255,255,0.75); font-size: 0.9rem;
      margin-top: 0.75rem; text-align: center;
    }
    #lb-close {
      position: absolute; top: 1rem; right: 1.5rem;
      background: none; border: none; color: #fff; font-size: 2.4rem;
      cursor: pointer; line-height: 1; padding: 0;
    }
    #lb-prev, #lb-next {
      position: absolute; top: 50%; transform: translateY(-50%);
      background: rgba(255,255,255,0.15); border: none; color: #fff;
      font-size: 1.6rem; padding: 0.6rem 1rem; cursor: pointer;
      border-radius: 4px; transition: background 0.2s;
    }
    #lb-prev { left: 1rem; }
    #lb-next { right: 1rem; }
    #lb-prev:hover, #lb-next:hover { background: rgba(201,168,76,0.7); }
    .gallery-img { cursor: zoom-in; }
  `;
  document.head.appendChild(style);

  // Collect all gallery-eligible images
  let galleryImages = [];
  let currentIdx    = 0;

  function buildGallery() {
    galleryImages = Array.from(
      document.querySelectorAll('section article img, .mySlides img')
    );
    galleryImages.forEach((img, i) => {
      img.classList.add('gallery-img');
      img.addEventListener('click', () => openLightbox(i));
    });
  }

  function openLightbox(index) {
    currentIdx = index;
    const img = galleryImages[currentIdx];
    document.getElementById('lb-img').src = img.src;
    document.getElementById('lb-img').alt = img.alt;
    document.getElementById('lb-caption').textContent = img.alt;
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  function navigate(dir) {
    currentIdx = (currentIdx + dir + galleryImages.length) % galleryImages.length;
    openLightbox(currentIdx);
  }

  // Event listeners
  document.getElementById('lb-close').addEventListener('click', closeLightbox);
  document.getElementById('lb-prev').addEventListener('click', () => navigate(-1));
  document.getElementById('lb-next').addEventListener('click', () => navigate(1));
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeLightbox();
  });
  document.addEventListener('keydown', function (e) {
    if (!overlay.classList.contains('open')) return;
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowRight') navigate(1);
    if (e.key === 'ArrowLeft')  navigate(-1);
  });

  buildGallery();
})();


/* ============================================================
   4. ACCORDION (services.html)
   ============================================================ */
(function initAccordion() {
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', function () {
      const body    = this.nextElementSibling;
      const isOpen  = this.classList.contains('active');

      // Close all others
      document.querySelectorAll('.accordion-header').forEach(h => {
        h.classList.remove('active');
        h.setAttribute('aria-expanded', false);
        if (h.nextElementSibling) h.nextElementSibling.style.maxHeight = null;
      });

      // Toggle clicked
      if (!isOpen) {
        this.classList.add('active');
        this.setAttribute('aria-expanded', true);
        body.style.maxHeight = body.scrollHeight + 'px';
      }
    });
  });
})();


/* ============================================================
   5. TABS (about.html)
   ============================================================ */
(function initTabs() {
  const tabBtns   = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');
  if (!tabBtns.length) return;

  tabBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      tabBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', false);
      });
      tabPanels.forEach(p => p.classList.remove('active'));

      this.classList.add('active');
      this.setAttribute('aria-selected', true);
      const target = document.getElementById(this.dataset.target);
      if (target) target.classList.add('active');
    });
  });

  // Activate first tab by default
  if (tabBtns[0]) tabBtns[0].click();
})();


/* ============================================================
   6. INTERACTIVE MAPS — Get Directions buttons (contact.html)
   ============================================================ */
(function initMaps() {
  const addresses = [
    '14 Marine Parade, Durban Central, KwaZulu-Natal 4001, South Africa',
    '78 Sandton Drive, Sandton, Gauteng 2196, South Africa'
  ];

  document.querySelectorAll('.directions-btn').forEach((btn, i) => {
    btn.addEventListener('click', function () {
      const encoded = encodeURIComponent(addresses[i]);
      window.open('https://maps.google.com/?daddr=' + encoded, '_blank');
    });
  });
})();


/* ============================================================
   7. SEARCH / FILTER (services.html)
   ============================================================ */
(function initSearch() {
  const searchInput  = document.getElementById('service-search');
  const noResults    = document.getElementById('no-results');
  if (!searchInput) return;

  searchInput.addEventListener('input', function () {
    const term    = this.value.toLowerCase().trim();
    const cards   = document.querySelectorAll('.service-card');
    let   visible = 0;

    cards.forEach(card => {
      const text  = card.textContent.toLowerCase();
      const match = text.includes(term);
      card.style.display = match ? '' : 'none';
      if (match) visible++;
    });

    // Show "no results" message if nothing matches
    if (noResults) {
      noResults.style.display = visible === 0 ? 'block' : 'none';
    }
  });
})();


/* ============================================================
   8. FORM VALIDATION HELPERS
   ============================================================ */
function showError(field, msg) {
  field.classList.add('input-error');
  field.classList.remove('input-ok');
  const err = document.getElementById(field.id + '-error');
  if (err) { err.textContent = msg; err.style.display = 'block'; }
}

function clearError(field) {
  field.classList.remove('input-error');
  field.classList.add('input-ok');
  const err = document.getElementById(field.id + '-error');
  if (err) { err.textContent = ''; err.style.display = 'none'; }
}

function isValidEmail(val) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
}

function isValidPhone(val) {
  // SA phone: 10 digits starting with 0, or +27 followed by 9 digits
  return /^(\+27|0)[0-9]{9}$/.test(val.replace(/\s/g, ''));
}

function isValidName(val) {
  return /^[A-Za-z\s\-']{2,}$/.test(val.trim());
}


/* ============================================================
   9. ENQUIRY FORM VALIDATION + PROCESS RESPONSE (enquiry.html)
   ============================================================ */
(function initEnquiryForm() {
  const form = document.getElementById('enquiry-form');
  if (!form) return;

  const fields = {
    firstName:  document.getElementById('first-name'),
    lastName:   document.getElementById('last-name'),
    email:      document.getElementById('email'),
    phone:      document.getElementById('phone'),
    roomType:   document.getElementById('room-type'),
    checkIn:    document.getElementById('check-in'),
    checkOut:   document.getElementById('check-out'),
    guests:     document.getElementById('guests'),
  };

  const rates   = { standard: 850, deluxe: 1950 };
  const labels  = { standard: 'Standard Room', deluxe: 'Deluxe Suite' };
  const today   = new Date();
  today.setHours(0, 0, 0, 0);

  // Real-time validation on blur
  Object.values(fields).forEach(f => {
    if (f) f.addEventListener('blur', () => validateEnquiryField(f));
  });

  function validateEnquiryField(field) {
    const val = field.value.trim();
    switch (field.id) {
      case 'first-name':
      case 'last-name':
        if (!val)               return showError(field, 'This field is required.');
        if (!isValidName(val))  return showError(field, 'Please enter a valid name (letters only, min 2 characters).');
        break;
      case 'email':
        if (!val)               return showError(field, 'Email address is required.');
        if (!isValidEmail(val)) return showError(field, 'Please enter a valid email address.');
        break;
      case 'phone':
        if (!val)               return showError(field, 'Phone number is required.');
        if (!isValidPhone(val)) return showError(field, 'Please enter a valid SA phone number (e.g. 071 234 5678).');
        break;
      case 'room-type':
        if (!val) return showError(field, 'Please select a room type.');
        break;
      case 'check-in': {
        const d = new Date(val);
        if (!val)   return showError(field, 'Check-in date is required.');
        if (d < today) return showError(field, 'Check-in date cannot be in the past.');
        break;
      }
      case 'check-out': {
        const ci = new Date(fields.checkIn.value);
        const co = new Date(val);
        if (!val)   return showError(field, 'Check-out date is required.');
        if (co <= ci) return showError(field, 'Check-out date must be after the check-in date.');
        break;
      }
      case 'guests':
        if (!val) return showError(field, 'Please select the number of guests.');
        break;
    }
    clearError(field);
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Validate all fields
    let valid = true;
    Object.values(fields).forEach(f => {
      if (!f) return;
      validateEnquiryField(f);
      if (f.classList.contains('input-error')) valid = false;
    });

    if (!valid) {
      // Scroll to first error
      const firstErr = form.querySelector('.input-error');
      if (firstErr) firstErr.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    // Calculate stay details
    const checkIn  = new Date(fields.checkIn.value);
    const checkOut = new Date(fields.checkOut.value);
    const nights   = Math.round((checkOut - checkIn) / (1000 * 60 * 60 * 24));
    const rate     = rates[fields.roomType.value] || 0;
    const total    = nights * rate;
    const refNum   = 'SB-' + Date.now().toString().slice(-6);

    // Services selected
    const services = Array.from(form.querySelectorAll('input[name="services"]:checked'))
      .map(cb => cb.value === 'airport_shuttle' ? 'Airport Shuttle' : 'Spa & Wellness')
      .join(', ') || 'None';

    // Show confirmation response panel
    const panel = document.getElementById('enquiry-response');
    if (panel) {
      panel.innerHTML = `
        <div class="response-card">
          <div class="response-icon">&#10003;</div>
          <h2>Thank you, ${fields.firstName.value}!</h2>
          <p>Your enquiry has been received. Our reservations team will contact you within 24 hours.</p>
          <div class="response-details">
            <div class="response-row"><span>Reference</span><strong>${refNum}</strong></div>
            <div class="response-row"><span>Room</span><strong>${labels[fields.roomType.value]}</strong></div>
            <div class="response-row"><span>Check-in</span><strong>${fields.checkIn.value}</strong></div>
            <div class="response-row"><span>Check-out</span><strong>${fields.checkOut.value}</strong></div>
            <div class="response-row"><span>Nights</span><strong>${nights}</strong></div>
            <div class="response-row"><span>Guests</span><strong>${fields.guests.value}</strong></div>
            <div class="response-row"><span>Add-ons</span><strong>${services}</strong></div>
            <div class="response-row total"><span>Estimated Total</span><strong>R ${total.toLocaleString()}</strong></div>
          </div>
          <p class="response-note">No payment has been taken. This is an estimate only — your final quote will be confirmed by email to <strong>${fields.email.value}</strong>.</p>
        </div>
      `;
      panel.style.display = 'block';
      panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    form.style.display = 'none';
  });
})();


/* ============================================================
   10. CONTACT FORM VALIDATION + EMAIL (contact.html)
   ============================================================ */
(function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const fields = {
    name:    document.getElementById('name'),
    email:   document.getElementById('email'),
    phone:   document.getElementById('phone'),
    subject: document.getElementById('subject'),
    message: document.getElementById('message'),
  };

  // Real-time validation on blur
  Object.values(fields).forEach(f => {
    if (f) f.addEventListener('blur', () => validateContactField(f));
  });

  function validateContactField(field) {
    const val = field.value.trim();
    switch (field.id) {
      case 'name':
        if (!val)              return showError(field, 'Full name is required.');
        if (!isValidName(val)) return showError(field, 'Please enter a valid name (min 2 characters).');
        break;
      case 'email':
        if (!val)               return showError(field, 'Email address is required.');
        if (!isValidEmail(val)) return showError(field, 'Please enter a valid email address.');
        break;
      case 'phone':
        // Optional — only validate if a value was entered
        if (val && !isValidPhone(val)) return showError(field, 'Please enter a valid SA phone number.');
        break;
      case 'subject':
        if (!val) return showError(field, 'Please select a subject.');
        break;
      case 'message':
        if (!val)          return showError(field, 'Message is required.');
        if (val.length < 10) return showError(field, 'Message must be at least 10 characters.');
        break;
    }
    clearError(field);
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Validate all fields
    let valid = true;
    Object.values(fields).forEach(f => {
      if (!f) return;
      validateContactField(f);
      if (f.classList.contains('input-error')) valid = false;
    });

    if (!valid) {
      const firstErr = form.querySelector('.input-error');
      if (firstErr) firstErr.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    // Compile email body
    const bodyText =
      `Name: ${fields.name.value}\n` +
      `Email: ${fields.email.value}\n` +
      (fields.phone.value ? `Phone: ${fields.phone.value}\n` : '') +
      `Subject: ${fields.subject.options[fields.subject.selectedIndex].text}\n\n` +
      `Message:\n${fields.message.value}`;

    // Build mailto link and open
    const mailtoLink =
      'mailto:info@swiftbookings.co.za' +
      '?subject=' + encodeURIComponent('[Swift Bookings] ' + fields.subject.options[fields.subject.selectedIndex].text) +
      '&body='    + encodeURIComponent(bodyText);

    window.location.href = mailtoLink;

    // Show success confirmation
    const confirmation = document.getElementById('contact-confirmation');
    if (confirmation) {
      confirmation.style.display = 'block';
      confirmation.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    form.style.display = 'none';
  });
})();
