// ════════════════════════════════════════════════════
//  POKEMON TCG TOURNAMENT OVERLAY — JS
//  Twitch Video Overlay Extension
// ════════════════════════════════════════════════════

<<<<<<< HEAD:video_overlay_api.js
// ── Match State ─────────────────────────────────────
const state = {
    round: 3,
    bestOf: 3,
    currentTurn: 'p1',   // 'p1' or 'p2'
=======
// ========== TWITCH LIVE DETECTION ==========
function setupTwitchLiveDetection() {
    if (!window.Twitch || !window.Twitch.ext) return;

    window.Twitch.ext.onAuthorized(function(auth) {
        console.log('Twitch Extension authorized.');
    });

    window.Twitch.ext.onContext(function(context) {
        const overlay = document.getElementById('cardOverlay');
        if (!overlay) return;

        // hlsLatencyBroadcaster is only present when the stream is live
        if (context.hlsLatencyBroadcaster !== undefined) {
            overlay.style.display = 'flex';
        } else {
            overlay.style.display = 'none';
        }
    });
}

setupTwitchLiveDetection();
// ===========================================

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
>>>>>>> 77de7fa4dab9259aa40bc4894a4f0a6b30e37cf8:video_overlay.js

    p1: {
        name: 'ASH',
        tag: 'World Finalist',
        prizes: [true, false, false, false, false, false], // true = taken
        activeName: 'Pikachu',
        activeImg: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
        hpCur: 30,
        hpMax: 110,
        deck: 28,
        hand: 7,
    },

    p2: {
        name: 'RED',
        tag: 'Kanto Champion',
        prizes: [true, true, false, false, false, false],
        activeName: 'Charizard',
        activeImg: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png',
        hpCur: 180,
        hpMax: 250,
        deck: 34,
        hand: 5,
    }
};

<<<<<<< HEAD:video_overlay_api.js
// ── Twitch Extension Init ────────────────────────────
function initTwitch() {
    if (window.Twitch && window.Twitch.ext) {
        window.Twitch.ext.onAuthorized(function(auth) {
            console.log('[TCG Overlay] Twitch authorized. Channel:', auth.channelId);
=======
// Global State
let currentPokemonIndex = 0;
let currentLang = 'en';

// Initialize overlay
function initOverlay() {
    const closeBtn = document.getElementById('overlayClose');
    const overlay = document.getElementById('cardOverlay');
    const backdrop = document.querySelector('.overlay-backdrop');
    
    // Close button
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            nextPokemon();
>>>>>>> 77de7fa4dab9259aa40bc4894a4f0a6b30e37cf8:video_overlay.js
        });

        // Optional: receive state updates via PubSub from your EBS
        window.Twitch.ext.listen('broadcast', function(target, contentType, message) {
            try {
                const data = JSON.parse(message);
                if (data.type === 'STATE_UPDATE') {
                    applyStateUpdate(data.payload);
                }
            } catch(e) {
                console.warn('[TCG Overlay] Could not parse PubSub message', e);
            }
        });
    } else {
        console.log('[TCG Overlay] Running in local mode (no Twitch ext)');
    }
}

// ── Apply a state patch from PubSub / config ─────────
function applyStateUpdate(patch) {
    // Deep-merge patch into state
    if (patch.round    !== undefined) state.round    = patch.round;
    if (patch.currentTurn !== undefined) state.currentTurn = patch.currentTurn;
    if (patch.p1) Object.assign(state.p1, patch.p1);
    if (patch.p2) Object.assign(state.p2, patch.p2);
    render();
}

// ── Render ───────────────────────────────────────────
function render() {
    renderPlayer('p1', state.p1);
    renderPlayer('p2', state.p2);
    renderCenter();
    renderTurn();
}

function renderPlayer(id, data) {
    // Name / tag
    setText(`${id}-name`, data.name);
    setText(`${id}-tag`,  data.tag);

    // Avatar & active image
    setImg(`${id}-avatar img`, data.activeImg);
    setImg(`${id}-active-img`,  data.activeImg);

    // Active pokemon
    setText(`${id}-active-name`, data.activeName);

    // HP bar
    const pct = Math.max(0, Math.min(100, (data.hpCur / data.hpMax) * 100));
    const bar = document.getElementById(`${id}-hp-bar`);
    if (bar) {
        bar.style.width = pct + '%';
        bar.className = 'hp-bar-fill ' + hpClass(pct);
    }
    setText(`${id}-hp-cur`, data.hpCur);
    setText(`${id}-hp-max`, data.hpMax);

    // Prizes
    const prizeContainer = document.getElementById(`${id}-prizes`);
    if (prizeContainer) {
        const cards = prizeContainer.querySelectorAll('.prize-card');
        cards.forEach((card, i) => {
            card.classList.toggle('prize-taken', !!data.prizes[i]);
        });
    }

    // Counts
    setText(`${id}-deck`, data.deck);
    setText(`${id}-hand`, data.hand);
}

function renderCenter() {
    setText('round-num', state.round);
}

function renderTurn() {
    const isP1 = state.currentTurn === 'p1';
    const p1dot = document.getElementById('turn-p1-dot');
    const p2dot = document.getElementById('turn-p2-dot');
    const label = document.getElementById('turn-label');

    p1dot.classList.toggle('active-turn', isP1);
    p2dot.classList.toggle('active-turn', !isP1);

    if (label) {
        label.textContent = isP1
            ? (state.p1.name + "'s Turn")
            : (state.p2.name + "'s Turn");
    }
}

// ── Helpers ──────────────────────────────────────────
function setText(id, value) {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
}

function setImg(selector, src) {
    // selector can be an id or "id img"
    const el = selector.includes(' ')
        ? document.querySelector('#' + selector.replace(' ', ' '))
        : document.getElementById(selector);
    if (el) el.src = src;
}

function hpClass(pct) {
    if (pct > 50) return 'hp-high';
    if (pct > 25) return 'hp-mid';
    if (pct > 10) return 'hp-low';
    return 'hp-critical';
}

// ── Boot ─────────────────────────────────────────────
function init() {
    initTwitch();
    render();
    console.log('%c ⚡ Pokemon TCG Tournament Overlay', 'font-size:16px; font-weight:bold; color:#D4AF37;');
    console.log('%c P1 (right) vs P2 (left) — Twitch Video Overlay', 'font-size:12px; color:#8B6F47;');
    console.log('%c Call applyStateUpdate({...}) to update live state', 'font-size:12px; color:#8B6F47;');
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
<<<<<<< HEAD:video_overlay_api.js
    init();
}
=======
    initOverlay();
}

// Show instructions after 1 second
setTimeout(() => {
    console.log('%c Pokemon TCG Overlay', 'font-size: 20px; font-weight: bold; color: #FFCB05;');
    console.log('%c→ Click anywhere to see next Pokemon', 'font-size: 14px; color: #D4AF37;');
    console.log('%c← Use arrow keys to navigate', 'font-size: 14px; color: #D4AF37;');
    console.log('%c✕ Click X button for next card', 'font-size: 14px; color: #D4AF37;');
}, 1000);


>>>>>>> 77de7fa4dab9259aa40bc4894a4f0a6b30e37cf8:video_overlay.js
