function filtrar(categoria) {
    let cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (card.classList.contains(categoria)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function voltarHome() {
    let cards = document.querySelectorAll('.card');
    cards.forEach(card => card.style.display = 'block');
}

