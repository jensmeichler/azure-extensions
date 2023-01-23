setInterval(() => {
    const panel = document.querySelector('.bolt-panel-content');
    if (!panel) {
        return;
    }

    const buttonGroup = document.getElementsByClassName('bolt-panel-footer-buttons')[0];
    if (!buttonGroup || buttonGroup.querySelector(':scope #be-happy')) {
        return;
    }

    const newButton = document.createElement('button');
    newButton.id = 'be-happy';
    newButton.className = 'bolt-button enabled primary bolt-focus-treatment';
    newButton.innerHTML = 'Be happy 😁';
    newButton.animate([
            { transform: 'scale(0)', opacity: 0 }, { transform: 'scale(1)' }],
        { duration: 300, easing: 'ease-in-out' }
    );
    newButton.onclick = () => {
        const wrapper = panel.querySelectorAll('.rhythm-vertical-8')[0];
        const checkboxes = wrapper.querySelectorAll(':scope [aria-checked="false"].bolt-checkbox');
        for (const checkbox of checkboxes) {
            checkbox.click();
        }

        const textField = document.getElementsByClassName('repos-indented-text-field')[0];
        const input = textField.querySelector('input');
        const newValue = input.value.replace(/Merged PR.*?: /, '');
        input.value = newValue;

        buttonGroup.removeChild(newButton);
        const setAutocompleteButton = buttonGroup.children.item(1);
        setAutocompleteButton.id = 'be-happy';
        setAutocompleteButton.addEventListener('mousedown', () => {
            input.value = newValue;
        });
    };
    buttonGroup.appendChild(newButton);
}, 500);
