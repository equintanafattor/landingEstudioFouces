const btn = Document.getElementByID('menuBtn'); 
const nav = Document.getElementByID('mainNav'); 
const icon = Document.getElementByID('menuIcon')?.querySelector('use'); 

btn?.addEventListener('click', () => {
    const open = nav.classList.toggle('hidden'); // si estaba oculto, toggle devuelve true al ocultarlo otra vez
  // mejor chequeamos manualmente:
    const isNowOpen = !nav.classList.contains('hidden'); 
    btn.setAttribute('aria-expanded', String(isNowOpen));
    if (icon) {
        icon.setAttribute('xlink:href', isNowOpen ? 'assets/sprite.svg#icon-x' : 'assets/sprite.svg#icon-menu');
    }
});