const displayArea = document.querySelector('.area');

window.addEventListener('keydown', (e)=> {
    e.preventDefault();
    const key = e.key;
    const keyCode = e.keyCode;
    const html = `
    <div class="keycode">
    <p class="keycodetext">${keyCode}</p>
    <p>Key Code</p>
    </div>
    
    <div class="key">
    <p class="keycodetext">${keyCode === 32 ? e.code : key}</p>
    <p>Key Pressed</p>
    </div>
    `;
    
    displayArea.innerHTML = html;
});