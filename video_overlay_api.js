// Pokemon Card Overlay

// Sample Pokemon data
const samplePokemon = [
    {
        names: { en: 'Pikachu', fr: 'Pikachu' },
        types: {en: 'Electric', fr: 'Électrik' },
        imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
        stats: { hp: 35, attack: 55, defense: 40, spAttack: 50, spDefense: 50, speed: 90 },
        abilities: [
            { 
                names: { en: 'Static', fr: 'Statik' }, 
                descs: { en: 'May paralyze opponents', fr: 'Peut paralyser l\'adversaire' } 
            },
            { 
                names: { en: 'Lightning Rod', fr: 'Paratonnerre' }, 
                descs: { en: 'Draws in Electric moves', fr: 'Attire les capacités Électrik' } 
            }
        ]
    },
    {
        names: { en: 'Charizard', fr: 'Dracaufeu' },
        types: {en: 'Fire', fr: 'Feu' },
        imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png',
        stats: { hp: 78, attack: 84, defense: 78, spAttack: 109, spDefense: 85, speed: 100 },
        abilities: [
            {
                names: { en: 'Blaze', fr: 'Brasier' },
                descs: { en: 'Powers up Fire-type moves when HP is low', fr: 'Renforce les coups de type Feu quand les PV sont bas' }
            },
            {
                names: { en: 'Solar Power', fr: 'Force Soleil' },
                descs: { en: 'Boosts Sp. Atk in sunny weather, but HP decreases', fr: 'Augmente l\'Attaque Spéciale par temps ensoleillé, mais les PV diminuent' }
            }
        ]
    },
    {
        names: { en: 'Blastoise', fr: 'Tortank' },
        types: {en: 'Water', fr: 'Eau' },
        imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png',
        stats: { hp: 79, attack: 83, defense: 100, spAttack: 85, spDefense: 105, speed: 78 },
        abilities: [
            
            { 
                names: { en: 'Torrent', fr: 'Torrent' }, 
                descs: { en: 'Powers up Water-type moves when HP is low', fr: 'Renforce les coups de type Eau quand les PV sont bas' } 
            },
            { 
                names: { en: 'Rain Dish', fr: 'Plaie de pluie' }, 
                descs: { en: 'Gradually restores HP in rain', fr: 'Restaure progressivement les PV sous la pluie' } 
            }
        ]
    },
    {
        names: { en: 'Mewtwo', fr: 'Mewtwo' },
        types: {en: 'Psychic', fr: 'Psykokinesis' },
        imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png',
        stats: { hp: 106, attack: 110, defense: 90, spAttack: 154, spDefense: 90, speed: 130 },
        abilities: [
            { 
                names: { en: 'Pressure', fr: 'Pression' }, 
                descs: { en: 'Forces opponents to expend more PP', fr: 'Force les adversaires à dépenser plus de PP' } 
            },
            { 
                names: { en: 'Unnerve', fr: 'Anxiété' }, 
                descs: { en: 'Makes opponents too nervous to eat Berries', fr: 'Rend les adversaires trop nerveux pour manger des Baies' } 
            }
        ]
    },
    {
        names: { en: 'Venusaur', fr: 'Florizarre' },
        types: {en: 'Grass', fr: 'Plante' },
        imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png',
        stats: { hp: 80, attack: 82, defense: 83, spAttack: 100, spDefense: 100, speed: 80 },
        abilities: [
            { 
                names: { en: 'Overgrow', fr: 'Feuillage' }, 
                descs: { en: 'Powers up Grass-type moves when HP is low', fr: 'Renforce les coups de type Plante quand les PV sont bas' } 
            },
            { 
                names: { en: 'Chlorophyll', fr: 'Chlorophylle' }, 
                descs: { en: 'Boosts Speed stat in harsh sunlight', fr: 'Augmente la Vitesse dans un soleil éclatant' } 
            }
        ]
    },
    {
        names: { en: 'Gengar', fr: 'Gengar' },
        types: {en: 'Ghost', fr: 'Spectre' },
        imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png',
        stats: { hp: 60, attack: 65, defense: 60, spAttack: 130, spDefense: 75, speed: 110 },
        abilities: [
            { 
                names: { en: 'Cursed Body', fr: 'Corps Maudit' }, 
                descs: { en: 'May disable moves that hit the Pokemon', fr: 'Peut désactiver les coups qui touchent le Pokemon' } 
            },
            { 
                names: { en: 'Levitate', fr: 'Lévitation' }, 
                descs: { en: 'Gives immunity to Ground-type moves', fr: 'Donne l\'immunité aux coups de type Sol' } 
            }
        ]
    },
    {
        names: { en: 'Dragonite', fr: 'Dracolosse' },
        types: {en: 'Dragon', fr: 'Dragon' },
        imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png',
        stats: { hp: 91, attack: 134, defense: 95, spAttack: 100, spDefense: 100, speed: 80 },
        abilities: [
            {
                names: { en: 'Inner Focus', fr: 'Force Intérieure' },
                descs: { en: 'Prevents the Pokemon from flinching', fr: 'Empêche le Pokemon de reculer' }
            },

            { 
                names: { en: 'Multiscale', fr: 'Multiscale' }, 
                descs: { en: 'Reduces damage when HP is full', fr: 'Réduit les dégâts quand les PV sont pleins' } 
            }
        ]
    },
    {
        names: { en: 'Lucario', fr: 'Lucario' },
        types: {en: 'Fighting', fr: 'Combat' },
        imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/448.png',
        stats: { hp: 70, attack: 110, defense: 70, spAttack: 115, spDefense: 70, speed: 90 },
        abilities: [
            { 
                names: { en: 'Steadfast', fr: 'Témérité' }, 
                descs: { en: 'Boosts Speed when the Pokemon flinches', fr: 'Augmente la Vitesse quand le Pokemon recule' } 
            },
            { 
                names: { en: 'Inner Focus', fr: 'Force Intérieure' }, 
                descs: { en: 'Prevents the Pokemon from flinching', fr: 'Empêche le Pokemon de reculer' } 
            }
        ]
    }
];

// Global State
let currentPokemonIndex = 0;
let currentLang = 'en';

const typeColors = {
    'Electric': '#FFCB05', 'Fire': '#FF4422', 'Water': '#3399FF',
    'Grass': '#77CC55', 'Psychic': '#FF5599', 'Fighting': '#BB5544',
    'Ghost': '#6666BB', 'Dragon': '#7766EE', 'Normal': '#AAAA99'
}

// Initialize overlay
function initOverlay() {
    const hitboxLayer = document.createElement('div');
    hitboxLayer.id = 'videoHitboxLayer';
    Object.assign(hitboxLayer.style, {
        position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', 
        zIndex: '500', pointerEvents: 'none'
    })



    const closeBtn = document.getElementById('overlayClose');
    const overlay = document.getElementById('cardOverlay');
    const backdrop = document.querySelector('.overlay-backdrop');
    
    // Close button
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            nextPokemon();
        });
    }
    
    // Click backdrop to cycle through Pokemon
    if (backdrop) {
        backdrop.addEventListener('click', () => {
            nextPokemon();
        });
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === ' ') {
            nextPokemon();
        } else if (e.key === 'ArrowLeft') {
            previousPokemon();
        } else if (e.key === 'Escape') {
            // Optional: could hide overlay
        }
    });
    
    // Show first Pokemon
    showPokemon(currentPokemonIndex);
}

function showPokemon(index) {
    const pokemon = samplePokemon[index];

    //Update image and name
    document.getElementById('overlayCardImage').src = pokemon.imageUrl;
    document.getElementById('overlayCardName').textContent = pokemon.names[currentLang];

    // Update type
    const typeEl = document.getElementById('overlayType');
    if (typeEl) {
        typeEl.innerHTML = `<span class="type-name">${pokemon.types[currentLang]}</span>`;
    }

    // Update abilities
    const abilitiesEl = document.getElementById('overlayAbilities');
    if (abilitiesEl) {
        abilitiesEl.innerHTML = pokemon.abilities.map(ability => `
            <div class="ability-item">
                <span class="ability-name">${ability.names[currentLang]}</span>
                <span class="ability-desc">${ability.descs[currentLang]}</span>
            </div>
        `).join('');
    }

    updateStatValue('overlayStat1', pokemon.stats.hp);
}

function updateStatValue(statId, value) {
    const textEl = document.getElementById(statId);
    if (textEl) {
        textEl.textContent = value;
    }
}

function showTab(tabName) {
    const statsSec = document.getElementById('statsSection');
    const abilitiesSec = document.getElementById('abilitiesSection');
    const tabStats = document.getElementById('tabStats');
    const tabAbilities = document.getElementById('tabAbilities');

    if (tabName === 'stats') {
        statsSec.style.display = 'block';
        abilitiesSec.style.display = 'none';
        tabStats.classList.add('active');
        tabAbilities.classList.remove('active');
    } else {
        statsSec.style.display = 'none';
        abilitiesSec.style.display = 'block';
        tabStats.classList.remove('active');
        tabAbilities.classList.add('active');
    }
}

function nextPokemon() {
    currentPokemonIndex = (currentPokemonIndex + 1) % samplePokemon.length;
    showPokemon(currentPokemonIndex);
}

function previousPokemon() {
    currentPokemonIndex = (currentPokemonIndex - 1 + samplePokemon.length) % samplePokemon.length;
    showPokemon(currentPokemonIndex);
}

function setLanguage(lang) {
    currentLang = lang;

    // Toggle active
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    const activeBtn = lang === 'en' ? 'langEn' : 'langFr';
    document.getElementById(activeBtn).classList.add('active');

    // Translate Stat Labels
    const labels = {
        'en': ['HP'],
        'fr': ['PV']
    }

    // Translate Type and Abilities Button
    const typeBtn = {
        'en': 'Type and Abilities',
        'fr': 'Type et Capacités'
    }

    const tabAbilities = document.getElementById('tabAbilities');
    if (tabAbilities) {
        tabAbilities.textContent = typeBtn[lang];
    }

    const labelElements = document.querySelectorAll('.stat-label');
    labelElements.forEach((el, idx) => {
        el.textContent = labels[lang][idx];
    })

    showPokemon(currentPokemonIndex);
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initOverlay);
} else {
    initOverlay();
}

// Show instructions after 1 second
setTimeout(() => {
    console.log('%c Pokemon TCG Overlay', 'font-size: 20px; font-weight: bold; color: #FFCB05;');
    console.log('%c→ Click anywhere to see next Pokemon', 'font-size: 14px; color: #D4AF37;');
    console.log('%c← Use arrow keys to navigate', 'font-size: 14px; color: #D4AF37;');
    console.log('%c✕ Click X button for next card', 'font-size: 14px; color: #D4AF37;');
}, 1000);

const mockScannerResults = [
    { name: 'Pikachu', x: 42, y: 32, w: 16, h: 24}, // Active Spot
    { name: 'Charizard', x: 12, y: 62, w: 14, h: 22}, // Bench 1
    { name: 'Blastoise', x: 27, y: 62, w: 14, h: 22}, // Bench 2
    { name: 'Mewtwo', x: 42, y: 62, w: 14, h: 22}, // Bench 3
    { name: 'Venusaur', x: 57, y: 62, w: 14, h: 22}, // Bench 4
    { name: 'Gengar', x: 72, y: 62, w: 14, h: 22}, // Bench 5
]

