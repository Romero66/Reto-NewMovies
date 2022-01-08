
// apartado de nuestro slider de imagenes de marvel
const paneles = document.querySelectorAll('.panel')

// Por medio del ForEach recorremos cada imagen, y por medio del click activamos y desativamos
paneles.forEach(panel => {
    panel.addEventListener('click', () => {
        if (panel.classList.contains("active")) {
            panel.classList.remove('active')
        } else {
            removeActiveClass()
            panel.classList.add('active')
        }
    })
});

// Funcion para cancelas la imagen seleccionada 
function removeActiveClass() {
    paneles.forEach(panel => {
        panel.classList.remove('active')
    })
}

let div = document.getElementById('divTable')

// Arreglo que contiene cada dato de nuestras peliculas 
let heroes = [
    {
        id: 1,
        superHero: 'SHANG-CHI',
        team: 'Multiverso',
        publisher: 'Marvel Comics',
    },
    {
        id: 2,
        superHero: 'GUARDIANES DE LA GALAXIA',
        team: 'Avengers Galaxia',
        publisher: 'Marvel Comics',
    },
    {
        id: 3,
        superHero: 'ANT-MAN',
        team: 'Avengers',
        publisher: 'Marvel Comics',
    },
    {
        id: 4,
        superHero: 'DOCTOR STRANGE<',
        team: 'Avengers',
        publisher: 'Marvel Comics',
    },
    {
        id: 5,
        superHero: 'IRON MAN',
        team: 'Avengers',
        publisher: 'Marvel Comics',
    },
    {
        id: 6,
        superHero: 'SPIDER-MAN',
        team: 'Avengers',
        publisher: 'Marvel Comics',
    },
    {
        id: 7,
        superHero: 'X-MEN',
        team: 'X-men',
        publisher: 'Marvel Comics',
    },
    {
        id: 8,
        superHero: 'DEADPOOL',
        team: 'Red Band',
        publisher: 'Marvel Comics',
    }
]
