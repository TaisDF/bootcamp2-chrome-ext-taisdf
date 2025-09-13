const themeButton = document.querySelector('.theme-toggle');
const lexendBtn = document.getElementById('lexend-btn');
const atkinsonBtn = document.getElementById('atkinson-btn');

themeButton.addEventListener('click', () => {
    chrome.storage.local.get(['isDark'], (result) => {
        const newIsDark = !result.isDark;
        chrome.storage.local.set({ isDark: newIsDark });
    });
});

lexendBtn.addEventListener('click', () => {
    chrome.storage.local.set({ currentFont: 'Lexend' });
});

atkinsonBtn.addEventListener('click', () => {
    chrome.storage.local.set({ currentFont: 'Atkinson Hyperlegible' });
});
