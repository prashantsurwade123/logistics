'use strict';
const header = document.querySelector('.header');
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
const syncHeader = () => header?.classList.toggle('scrolled', window.scrollY > 30);
syncHeader();
window.addEventListener('scroll', syncHeader, { passive: true });
function closeMenu(returnFocus = false) {
  const wasOpen = toggle?.getAttribute('aria-expanded') === 'true';
  toggle?.setAttribute('aria-expanded', 'false');
  toggle?.setAttribute('aria-label', 'Open menu');
  nav?.classList.remove('open');
  if (returnFocus && wasOpen) toggle.focus();
}
toggle?.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  nav?.classList.toggle('open', open);
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => closeMenu()));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeMenu(true);
});
document.addEventListener('click', event => {
  if (!header?.contains(event.target)) closeMenu();
});
header?.addEventListener('focusout', event => {
  if (!header.contains(event.relatedTarget)) closeMenu();
});
window.matchMedia('(min-width: 1051px)').addEventListener('change', () => closeMenu());

// Keep content visible immediately. Decorative reveals do not delay reading.
const enquiry = document.querySelector('.enquiry-form');
if (enquiry) {
  enquiry.noValidate = true;
  const fields = [...enquiry.querySelectorAll('input, select, textarea')];
  fields.forEach(field => {
    field.id ||= 'enquiry-' + field.name;
    const error = document.createElement('span');
    error.id = field.id + '-error';
    error.className = 'field-error';
    field.setAttribute('aria-describedby', error.id);
    field.after(error);
    function validate(showError) {
      let message = '';
      if (field.validity.valueMissing) message = field.name === 'service' ? 'Choose a service, or select “Not sure”.' : 'Please fill in this field.';
      else if (field.validity.typeMismatch) message = 'Enter a valid email address, such as name@company.com.';
      else if (field.validity.patternMismatch) message = 'Enter a phone number using 7–25 digits, spaces or phone punctuation.';
      else if (field.validity.tooShort) message = field.name === 'message' ? 'Add a little more detail about your shipment (at least 10 characters).' : 'Enter at least 2 characters.';
      if (showError) {
        error.textContent = message;
        field.setAttribute('aria-invalid', String(Boolean(message)));
      }
      return !message;
    }
    field.addEventListener('blur', () => validate(true));
    field.addEventListener('input', () => {
      if (field.getAttribute('aria-invalid') === 'true') validate(true);
      enquiry.querySelector('.form-status').textContent = '';
    });
    field.addEventListener('change', () => validate(true));
    field.validateForEnquiry = validate;
  });
  enquiry.addEventListener('submit', event => {
    event.preventDefault();
    const invalid = fields.filter(field => !field.validateForEnquiry(true));
    const status = enquiry.querySelector('.form-status');
    status.classList.toggle('error', invalid.length > 0);
    if (invalid.length) {
      status.textContent = 'Please check the highlighted fields. Your details have been kept.';
      invalid[0].focus();
      return;
    }
    status.textContent = 'Your enquiry is ready. This demo does not send enquiries. Your details remain here so you can review or copy them.';
    status.focus();
  });
}
const tracking = document.querySelector('.tracking-form');
tracking?.addEventListener('submit', event => {
  event.preventDefault();
  tracking.querySelector('.form-status').textContent = 'Live tracking is not available yet. Please contact our team for a shipment update.';
});
document.querySelectorAll('form button[type="submit"]').forEach(button => { button.disabled = false; });
const params = new URLSearchParams(window.location.search);
const selected = params.get('service');
const select = document.querySelector('#service-select');
if (select && [...select.options].some(option => option.value === selected)) select.value = selected;
const industry = params.get('industry');
if (industry) {
  const message = document.querySelector('textarea[name="message"]');
  if (message) message.value = 'I would like logistics support for ' + industry.slice(0, 100) + '. ';
}
