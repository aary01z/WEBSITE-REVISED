// googletranslate.js
// Simple & reliable approach:
// - Initialize Google Translate widget
// - On language click, set .goog-te-combo value and dispatch a 'change' event

// -----------------------------
// Init Google Translate
// -----------------------------
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: 'en',
      includedLanguages: 'en,hi,mr', // you can add more codes here
      layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL,
      autoDisplay: false
    },
    'google_translate_element'
  );
  console.log('[GT] googleTranslateElementInit done');
}

// -----------------------------
// Helper: change language using the hidden select
// -----------------------------
function changeLanguage(langCode) {
  // Google injects a <select class="goog-te-combo"> into the page
  var tries = 0;
  var maxTries = 20;

  var interval = setInterval(function () {
    tries++;

    var select = document.querySelector('.goog-te-combo');
    if (select) {
      clearInterval(interval);
      console.log('[GT] found .goog-te-combo, changing to:', langCode);

      // Set the value (language code like 'en', 'hi', 'mr')
      select.value = langCode;

      // Dispatch change event so Google Translate reacts
      var event;
      if (typeof Event === 'function') {
        event = new Event('change');
      } else {
        // IE fallback, just in case
        event = document.createEvent('HTMLEvents');
        event.initEvent('change', true, true);
      }
      select.dispatchEvent(event);

      return;
    }

    if (tries > maxTries) {
      clearInterval(interval);
      console.warn('[GT] .goog-te-combo not found after multiple tries');
    }
  }, 300);
}

// -----------------------------
// Hook up your dropdown
// -----------------------------
document.addEventListener('DOMContentLoaded', function () {
  var langButtons = document.querySelectorAll('.lang-select');

  langButtons.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var code = this.getAttribute('data-lang');
      if (!code) return;

      console.log('[GT] language button clicked:', code);
      changeLanguage(code);
    });
  });
});
