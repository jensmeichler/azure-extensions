const textToRemove = 'https://sternicogmbh.atlassian.net/browse/';

setInterval(() =>
    Array.from(
        document.getElementsByClassName('grid-cell')
    ).forEach(container => {
        if (container.textContent.includes(textToRemove)) {
            container.textContent = container.textContent.replace(textToRemove, '');
        }
    }),
    3000
);
