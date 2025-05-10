function changeLanguage(language, event) {
  // Update active button styling
  const languageSelector = document.getElementById('languageSelector');
  const buttons = languageSelector.querySelectorAll('.btn');
  buttons.forEach(button => button.classList.remove('active'));
  event.currentTarget.classList.add('active');

  const url = new URL(window.location.href);
  const pathParts = url.pathname.split('/');

  // Find and replace the language segment, or insert if missing
  const langIndex = pathParts.findIndex(p => ['hu', 'de', 'en'].includes(p));

  if (langIndex !== -1) {
    pathParts[langIndex] = language;
  } else {
    const testIndex = pathParts.findIndex(p => p === 'TEST');
    if (testIndex !== -1) pathParts.splice(testIndex + 1, 0, language);
  }

  // Set new pathname and preserve search params
  url.pathname = pathParts.join('/');
  window.location.href = url.toString();
}
