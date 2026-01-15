// Pokemon Card Twitch Extension - Main JavaScript

// Configuration
const CONFIG = {
    API_BASE_URL: 'https://your-api-endpoint.com/api', // Replace with your API endpoint
    REFRESH_INTERVAL: 30000, // Refresh every 30 seconds
    USE_TWITCH_EBS: false // Set to true if using Twitch Extension Backend Service
};

// Twitch Extension Helper
const TwitchExtension = {
    initialized: false,
    channelId: null,
    token: null,

    init() {
        if (window.Twitch && window.Twitch.ext) {
            window.Twitch.ext.onAuthorized((auth) => {
                this.initialized = true;
                this.channelId = auth.channelId;
                this.token = auth.token;
                console.log('Twitch Extension Authorized:', auth);
                
                // Initialize the extension once authorized
                PokemonCardExtension.init();
            });

            window.Twitch.ext.onContext((context, contextFields) => {
                console.log('Twitch Context Updated:', context);
            });
        } else {
            // Development mode - no Twitch extension available
            console.log('Running in development mode (no Twitch Extension SDK)');
            this.initialized = true;
            PokemonCardExtension.init();
        }
    },

    getHeaders() {
        const headers = {
            'Content-Type': 'application/json'
        };

        if (this.token) {
            headers['Authorization'] = `Bearer ${this.token}`;
        }

        return headers;
    }
};

// Main Extension Logic
const PokemonCardExtension = {
    cards: [],
    stats: {
        total: 0,
        rare: 0,
        collectionPercent: 0
    },
    refreshTimer: null,

    init() {
        console.log('Initializing Pokemon Card Extension...');
        this.setupEventListeners();
        this.fetchCards();
        this.startAutoRefresh();
    },

    setupEventListeners() {
        document.getElementById('refreshButton').addEventListener('click', () => {
            this.fetchCards();
        });
    },

    async fetchCards() {
        try {
            this.updateConnectionStatus('loading', 'Fetching cards...');
            
            // Build API URL - you can customize this based on your needs
            const endpoint = CONFIG.USE_TWITCH_EBS 
                ? `${CONFIG.API_BASE_URL}/cards/${TwitchExtension.channelId}`
                : `${CONFIG.API_BASE_URL}/cards`;

            const response = await fetch(endpoint, {
                method: 'GET',
                headers: TwitchExtension.getHeaders()
            });

            if (!response.ok) {
                throw new Error(`API Error: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();
            console.log('Received data from API:', data);

            this.processData(data);
            this.renderCards();
            this.updateStats();
            this.updateConnectionStatus('connected', 'Connected');
            
            document.getElementById('refreshButton').disabled = false;

        } catch (error) {
            console.error('Error fetching cards:', error);
            this.handleError(error);
        }
    },

    processData(data) {
        // Process the API response - adjust based on your API structure
        if (data.cards) {
            this.cards = data.cards;
        } else if (Array.isArray(data)) {
            this.cards = data;
        } else {
            this.cards = [];
        }

        // Calculate stats
        this.stats.total = this.cards.length;
        this.stats.rare = this.cards.filter(card => 
            card.rarity && card.rarity.toLowerCase().includes('rare')
        ).length;
        this.stats.collectionPercent = data.collectionPercent || 0;
    },

    renderCards() {
        const showcase = document.getElementById('cardShowcase');
        
        if (this.cards.length === 0) {
            showcase.innerHTML = `
                <div class="error-message">
                    <div class="error-title">No Cards Found</div>
                    <div class="error-text">
                        Streamer hasn't added any cards yet!<br>
                        Check back later.
                    </div>
                </div>
            `;
            return;
        }

        showcase.innerHTML = this.cards.map((card, index) => {
            const rarityClass = this.getRarityClass(card.rarity);
            const typeColor = this.getTypeColor(card.type);
            const typeLabel = this.getTypeLabel(card.type);
            
            return `
                <div class="pokemon-card" style="animation-delay: ${index * 0.1}s">
                    <span class="rarity-badge ${rarityClass}">
                        ${card.rarity || 'Common'} ${this.getRarityStars(card.rarity)}
                    </span>
                    <div class="card-image" style="background: ${typeColor};">
                        ${card.imageUrl 
                            ? `<img src="${card.imageUrl}" alt="${card.name}">`
                            : `<div class="card-image-placeholder">${typeLabel}</div>`
                        }
                    </div>
                    <h3 class="card-name">${card.name || 'Unknown'}</h3>
                    <p class="card-type">${card.type || 'Unknown'} Type</p>
                    <div class="card-stats">
                        <div class="card-stat">
                            <div class="card-stat-label">HP</div>
                            <div class="card-stat-value">${card.hp || 0}</div>
                        </div>
                        <div class="card-stat">
                            <div class="card-stat-label">Attack</div>
                            <div class="card-stat-value">${card.attack || 0}</div>
                        </div>
                        <div class="card-stat">
                            <div class="card-stat-label">Level</div>
                            <div class="card-stat-value">${card.level || 0}</div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    },

    updateStats() {
        document.getElementById('totalCards').textContent = this.stats.total;
        document.getElementById('rareCards').textContent = this.stats.rare;
        document.getElementById('collectionPercent').textContent = 
            this.stats.collectionPercent + '%';
        
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
        document.getElementById('lastUpdated').textContent = timeString;
    },

    updateConnectionStatus(status, message) {
        const statusEl = document.getElementById('connectionStatus');
        statusEl.className = `connection-status status-${status}`;
        statusEl.textContent = message;
    },

    handleError(error) {
        this.updateConnectionStatus('disconnected', 'Connection Error');
        
        const showcase = document.getElementById('cardShowcase');
        showcase.innerHTML = `
            <div class="error-message">
                <div class="error-title">Connection Error</div>
                <div class="error-text">
                    ${error.message}<br><br>
                    Please check your API configuration<br>
                    and try again.
                </div>
            </div>
        `;
    },

    startAutoRefresh() {
        if (this.refreshTimer) {
            clearInterval(this.refreshTimer);
        }

        this.refreshTimer = setInterval(() => {
            console.log('Auto-refreshing cards...');
            this.fetchCards();
        }, CONFIG.REFRESH_INTERVAL);
    },

    getRarityClass(rarity) {
        if (!rarity) return 'rarity-common';
        const r = rarity.toLowerCase();
        if (r.includes('rare') || r.includes('holo')) return 'rarity-rare';
        if (r.includes('uncommon')) return 'rarity-uncommon';
        return 'rarity-common';
    },

    getRarityStars(rarity) {
        if (!rarity) return '★';
        const r = rarity.toLowerCase();
        if (r.includes('rare') || r.includes('holo')) return '★★★';
        if (r.includes('uncommon')) return '★★';
        return '★';
    },

    getTypeColor(type) {
        if (!type) return 'linear-gradient(135deg, #7AC74C, #32CD32)';
        
        const colors = {
            electric: 'linear-gradient(135deg, #F7D02C, #FFEB3B)',
            fire: 'linear-gradient(135deg, #EE8130, #FF6347)',
            water: 'linear-gradient(135deg, #6390F0, #4169E1)',
            grass: 'linear-gradient(135deg, #7AC74C, #32CD32)',
            psychic: 'linear-gradient(135deg, #F95587, #E040FB)',
            fighting: 'linear-gradient(135deg, #C22E28, #D32F2F)',
            darkness: 'linear-gradient(135deg, #6c5671, #4a4a4a)',
            metal: 'linear-gradient(135deg, #B7B7CE, #9E9E9E)',
            dragon: 'linear-gradient(135deg, #6F35FC, #7038F8)',
            fairy: 'linear-gradient(135deg, #D685AD, #F48FB1)',
            normal: 'linear-gradient(135deg, #A8A77A, #BCAAA4)'
        };

        return colors[type.toLowerCase()] || colors.normal;
    },

    getTypeLabel(type) {
        if (!type) return 'TYPE';
        
        const labels = {
            electric: 'ELECTRIC',
            fire: 'FIRE',
            water: 'WATER',
            grass: 'GRASS',
            psychic: 'PSYCHIC',
            fighting: 'FIGHTING',
            darkness: 'DARK',
            metal: 'METAL',
            dragon: 'DRAGON',
            fairy: 'FAIRY',
            normal: 'NORMAL'
        };

        return labels[type.toLowerCase()] || type.toUpperCase();
    }
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        TwitchExtension.init();
    });
} else {
    TwitchExtension.init();
}

// Cleanup on unload
window.addEventListener('beforeunload', () => {
    if (PokemonCardExtension.refreshTimer) {
        clearInterval(PokemonCardExtension.refreshTimer);
    }
});