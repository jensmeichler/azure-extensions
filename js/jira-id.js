const textToRemove = 'https://sternicogmbh.atlassian.net/browse/';

setInterval(() =>
    Array.from(
        document.getElementsByClassName('grid-cell')
    ).forEach(container => {
        if (container.textContent.includes(textToRemove)) {
            const text = container.textContent.replace(textToRemove, '');
            container.innerHTML = `<a target="_blank" href="${textToRemove}${text}">${text}</a>`;
        }
    }),
    3000
);
