export interface IDownloadLink {
    title: string;
    file: string;
}

export interface IMailToLink {
    title: string;
    email: string;
}

export interface ILink {
    type: 'mailto' | 'tel' | 'link' | 'download';
    title: string;
    email?: string;
    file?: string;
}