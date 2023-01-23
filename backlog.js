const interval = setInterval(() => {
    const overallocated = document.getElementsByClassName('visual-progress-overallocated');
    for (const elem of overallocated) {
        elem.style.background = '#0f0';
    }

    if (overallocated.length || document.getElementsByClassName('visual-progress-underallocated').length) {
        clearInterval(interval);
    }
}, 500);
