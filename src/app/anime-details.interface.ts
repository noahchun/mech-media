export interface AnimeDetails {
    malId: number;
    mechOverview: string;
    video: { [key: string]: string };
    mechLabel: string;
    images: { [key: string]: string };
    gifs: { [key: string]: string };
    text: { [key: string]: string };
}