export interface IRouterLink {
    title: string;
    path: string;
    download?: boolean;
}

export interface IDownloadLink {
    title: string;
    file: string;
}

export interface IMailToLink {
    title: string;
    email: string;
}

export interface ITelLink {
    title: string;
    tel: string;
}

export interface ILink {
    type: 'mailto' | 'tel' | 'link' | 'download';
    title: string;
    tel?: string;
    email?: string;
    file?: string;
    path?: string;
}