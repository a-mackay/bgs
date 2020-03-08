export function bgData() {
    return [
        bg("AuZtralia", 4, "J"),
        bg("Battlestar Galactica", 4, "J"),
        bg("Biblios", 2, "A"),
        bg("Black Orchestra", 4, "J"),
        bg("Bloodbourne", 2, "J"),
        bg("Chaos Marauders", 2, "J"),
        bg("Chinatown", 2, "A"),
        bg("Concordia", 5, "J"),
        bg("Dark Souls", 4, "M"),
        bg("Deep Sea Adventure", 1, "A"),
        bg("Eclipse", 5, "A"),
        bg("Empires", 2, "J"),
        bg("Escape the Dark Castle", 1, "J"),
        bg("Fallen Land", 1, "J"),
        bg("Fortress America", 5, "J"),
        bg("Fury of Dracula", 3, "J"),
        bg("Glorantha: The Gods War", 3, "J"),
        bg("Imperial Assault", 4, "J"),
        bg("Legendary Encounters: Alien", 3, "J"),
        bg("Lord of the Rings", 3, "J"),
        bg("Lord of the Rings: Journeys in Middle-earth", 4, "J"),
        bg("Lowlands", 4, "J"),
        bg("Mansions of Madness", 3, "J"),
        bg("Mice and Mystics", 3, "J"),
        bg("Modern Art", 2, "A"),
        bg("Oceans", 4, "A"),
        bg("On Mars", 5, "A"),
        bg("Parks", 3, "A"),
        bg("Puerto Rico", 0, "T"),
        bg("Root", 4, "A"),
        bg("Secret Hitler", 2, "J"),
        bg("Scythe", 5, "J"),
        bg("Star Wars: Outer Rim", 3, "J"),
        bg("Startups", 2, "A"),
        bg("Terraforming Mars", 5, "T"),
        bg("Underwater Cities", 5, "A")
    ]
}

function bg(name, complexity, owner) {
    return {
        "name": name,
        "complexity": complexity,
        "owner": owner
    }
}
