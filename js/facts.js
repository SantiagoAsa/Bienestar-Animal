

let facts = [];


function loadFacts() {
    fetch('../data/facts.json')
        .then(response => response.json())
        .then(data => {
            facts = data;

            showRandomFact();

            setInterval(showRandomFact, 15000);
        })
        .catch(error => console.error('Error al cargar los datos:', error));
}


function showRandomFact() {
    if (facts.length > 0) {
        const randomFact = facts[Math.floor(Math.random() * facts.length)];
        const factWithLink = `${randomFact} <br><br>¿Querés saber más? <a href="https://instagram.com/bienestaranimal.bb" target="_blank">Seguinos en Instagram!</a>`;
        Toastify({
            text: factWithLink,
            duration: 6000,
            close: false,
            gravity: "bottom",
            position: "right",

            escapeMarkup: false,
            offset: {
                x: 60,
                y: 50
            },
            style: {
                width: "250px",
                fontSize: "16px",
                borderRadius: "8px",
                background: "linear-gradient(to right, #00b09b, #96c93d)",
                fontFamily: 'Roboto'
            }
        }).showToast();
    }
}


loadFacts();
