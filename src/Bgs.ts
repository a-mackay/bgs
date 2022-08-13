// youtube-dl -f 'bestaudio' 'https://www.youtube.com/watch?v=HgNZ_XynaDc'
// ffmpeg -i 'Ut - Peel Session 1987-HgNZ_XynaDc.webm'
// Look for "Audio". For example, "Audio: opus"
// ffmpeg -i 'Ut - Peel Session 1987-HgNZ_XynaDc.webm' -vn -acodec copy 'Ut - Peel Session 1987.opus'

export async function bgData(): Promise<Bg[]> {
    if (isDevEnv()) {
        return [
            bg("Aliens: Another Glorious Day in the Corps", "J", false),
            bg("Anomia", "J", false),
            bg("AuZtralia", "J", true),
        ]
    };

    const response = await fetch("bgs.json");
    const rawBgs: RawBg[] = await response.json();
    return rawBgs.map(rawBg => intoBg(rawBg))
}

interface RawBg {
    name: string;
    owner: string;
    isDeceased: boolean | null | undefined;
}

function intoBg(rawBg: RawBg): Bg {
    const isDeceased = (rawBg.isDeceased == null) ? false : rawBg.isDeceased
    return bg(rawBg.name, rawBg.owner, isDeceased)
}

export interface Bg {
    name: string;
    owner: string;
    isDeceased: boolean;
}

function bg(name: string, owner: string, isDeceased: boolean): Bg {
    return {
        "name": name,
        "owner": owner,
        "isDeceased": isDeceased,
    }
}

function isDevEnv(): Boolean {
    return process.env.NODE_ENV === "development"
}