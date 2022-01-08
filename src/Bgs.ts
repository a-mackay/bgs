// youtube-dl -f 'bestaudio' 'https://www.youtube.com/watch?v=HgNZ_XynaDc'
// ffmpeg -i 'Ut - Peel Session 1987-HgNZ_XynaDc.webm'
// Look for "Audio". For example, "Audio: opus"
// ffmpeg -i 'Ut - Peel Session 1987-HgNZ_XynaDc.webm' -vn -acodec copy 'Ut - Peel Session 1987.opus'

export async function bgData(): Promise<Bg[]> {
    if (isDevEnv()) {
        return [
            bg("Aliens: Another Glorious Day in the Corps", "J"),
            bg("Anomia", "J"),
        ]
    };

    const response = await fetch("bgs.json");
    return await response.json();
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

function isDevEnv(): Boolean {
    return process.env.NODE_ENV === "development"
}