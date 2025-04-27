const url = window.location.href;

function changeLanguage(language, event) {
    const languageSelector = document.getElementById('languageSelector');

    const buttons = languageSelector.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    const clickedButton = event.currentTarget;
    clickedButton.classList.add('active');

    let newUrl = url;

  if (language === 'en') {
    newUrl = url.replace('/hu/', '/').replace('/de/', '/');
  } else if (language === 'hu') {
    if (url.includes('/de/')) {
      newUrl = url.replace('/de/', '/hu/');
    } else if (!url.includes('/hu/')) {
      newUrl = url.replace(window.location.origin + '/', window.location.origin + '/hu/');
    }
  } else if (language === 'de') {
    if (url.includes('/hu/')) {
      newUrl = url.replace('/hu/', '/de/');
    } else if (!url.includes('/de/')) {
      newUrl = url.replace(window.location.origin + '/', window.location.origin + '/de/');
    }
  }

  window.location.href = newUrl;
}