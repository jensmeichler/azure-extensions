const initializePluginButton = () => {
    if (document.querySelector('#cbj-button')) {
        return;
    }

    const interval = setInterval(() => {
        const navBar = document.querySelector('.navigation-section');
        if (!navBar) {
            return;
        }

        const div = document.createElement('div');
        div.id = 'cbj-button';
        div.className = window.location.hash === '#clipboardjesus'
            ? 'hub-group-container flex-column flex-noshrink relative expanded-container displayed-container'
            : 'hub-group-container flex-column flex-noshrink relative hub-group-only';
        div.animate(
            [{ opacity: 0 }, { opacity: 1 }],
            { duration: 300, easing: 'ease-in-out' }
        );

        /**/const a = document.createElement('a');
        /**/a.ariaLabel = 'Clipboard';
        /**/a.className = 'hub-group navigation-element navigation-link focus-treatment flex-row flex-grow flex-center scroll-hidden relative bolt-link';
        /**/a.href = '#clipboardjesus';

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
}

const initializePlugin = () => {
    const clipboardFrame = document.createElement('iframe');
    clipboardFrame.src = 'https://www.clipboardjesus.com/';
    clipboardFrame.style.height = '100%';
    clipboardFrame.style.border = '0';
    const page = document.querySelector('.full-size.region-page .flex-row.flex-grow>.flex-column.flex-grow');
    page.innerHTML = '';
    page.appendChild(clipboardFrame);
    highlightPluginButton();
};

const highlightPluginButton = () => {
    const button = document.querySelector('#cbj-button');
    if (!button) {
        return;
    }

    button.className = 'hub-group-container flex-column flex-noshrink relative expanded-container displayed-container';
}

initializePluginButton();
if (window.location.hash === '#clipboardjesus') {
    initializePlugin();
}

window.addEventListener('popstate', () => {
    if (window.location.hash === '#clipboardjesus') {
        initializePlugin();
    } else {
        setTimeout(initializePluginButton, 2000);
    }
});
