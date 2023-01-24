const interval = setInterval(() => {
    const navBar = document.querySelector('.navigation-section');
    if (!navBar) {
        return;
    }

    const div = document.createElement('div');
    div.id = 'cbj-button';
    div.className = 'hub-group-container flex-column flex-noshrink relative hub-group-only';

    /**/const a = document.createElement('a');
    /**/a.ariaLabel = 'Clipboard';
    /**/a.className = 'hub-group navigation-element navigation-link focus-treatment flex-row flex-grow flex-center scroll-hidden relative bolt-link';
    /**/a.href = 'https://www.clipboardjesus.com';

    /**//**/const iconSpan = document.createElement('span');
    /**//**/iconSpan.className = 'navigation-icon flex-row flex-center flex-noshrink justify-center';

    /**//**//**/const iconImg = document.createElement('img');
    /**//**//**/iconImg.className = 'contributed-icon contributed-icon-image bolt-image flex-noshrink';
    /**//**//**/iconImg.src = 'https://www.clipboardjesus.com/favicon.ico';

    /**//**/const labelSpan = document.createElement('span');
    /**//**/labelSpan.className = 'navigation-text expanded-only text-ellipsis flex-grow';
    /**//**/labelSpan.innerText = 'Clipboard';

    iconSpan.appendChild(iconImg);
    a.appendChild(iconSpan);
    a.appendChild(labelSpan);
    div.appendChild(a);
    navBar.appendChild(div);

    clearInterval(interval);
}, 500);
