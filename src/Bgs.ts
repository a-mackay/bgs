// youtube-dl -f 'bestaudio' 'https://www.youtube.com/watch?v=HgNZ_XynaDc'
// ffmpeg -i 'Ut - Peel Session 1987-HgNZ_XynaDc.webm'
// Look for "Audio". For example, "Audio: opus"
// ffmpeg -i 'Ut - Peel Session 1987-HgNZ_XynaDc.webm' -vn -acodec copy 'Ut - Peel Session 1987.opus'

export function bgData(): Bg[] {
    return [
        bg("Anomia", "J"),
        bg("Archipelago", "J"),
        bg("Arkham Horror: The Card Game", "A"),
        bg("AuZtralia", "J"),
        bg("Battlestar Galactica", "J"),
        bg("Biblios", "A"),
        bg("Black Orchestra", "J"),
        bg("Bloodbourne", "J"),
        bg("Chaos Marauders", "J"),
        bg("Chinatown", "A"),
        bg("Concordia", "J"),
        bg("Corridors of Power", "T"),
        bg("Dark Souls", "M"),
        bg("Deep Sea Adventure", "A"),
        bg("Eclipse", "A"),
        bg("Empires", "J"),
        bg("Escape the Dark Castle", "J"),
        bg("Fallen Land", "J"),
        bg("Fort", "A"),
        bg("Fortress America", "J"),
        bg("Fury of Dracula", "J"),
        bg("Glorantha: The Gods War", "J"),
        bg("Imperial Assault", "J"),
        bg("Legendary Encounters: Alien", "J"),
        bg("Lord of the Rings", "J"),
        bg("Lord of the Rings: Journeys in Middle-earth", "J"),
        bg("Lowlands", "J"),
        bg("Mansions of Madness", "J"),
        bg("Mice and Mystics", "J"),
        bg("Modern Art", "A"),
        bg("Oceans", "A"),
        bg("On Mars", "A"),
        bg("Parks", "A"),
        bg("Pax Pamir", "A"),
        bg("Plague Inc.", "J"),
        bg("Puerto Rico", "T"),
        bg("Root", "A"),
        bg("Seafall", "J"),
        bg("Secret Hitler", "J"),
        bg("Scythe", "J"),
        bg("Spicy", "A"),
        bg("Sprawlopolis", "A"),
        bg("Star Wars: Outer Rim", "J"),
        bg("Startups", "A"),
        bg("Super Munchkin", "T"),
        bg("Terraforming Mars", "T"),
        bg("Tussie Mussie", "A"),
        bg("Underwater Cities", "A"),
        bg("Unmatched: BoL Vol 1", "A"),
        bg("Unmatched: Bruce Lee", "A"),
        bg("Unmatched: Cobble & Fog", "A"),
        bg("Unmatched: Ingen vs Raptors", "A"),
        bg("Unmatched: Robin Hood vs Bigfoot", "A"),
        bg("Vinhos Deluxe Edition", "A"),
    ]
}

export interface Bg {
    name: string;
    owner: string;
}

function bg(name: string, owner: string): Bg {
    return {
        "name": name,
        "owner": owner,
    }
}
