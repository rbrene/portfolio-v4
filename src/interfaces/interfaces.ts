export interface NavbarPropsTypes {
    links: {
        id: number;
        url: string;
        title: string;
    }[];
}

export interface NavbarItemPropTypes {
    link: {
        id: number;
        url: string;
        title: string;
    }
}

export interface LinkPropsTypes {
    url: string;
    title: string;
    onClick?: Function;
}

export interface MainHeadingProps {
    word: string;
    highlight: string[];
}

export interface SectionHeadingProps {
    word: string;
    highlight: string;
    reverse?: boolean;
}

export interface BackgroundImageProps {
    src: string;
}

export interface ProjectCardProps {
    project: {
        id: number;
        title: string;
        summary: string;
        tools: string[];
        github?: string | null;
        website: string;
    };
}

export interface ProjectLinkProps {
    url?: string;
    icon: JSX.Element;
}

export interface FormStateProps {
    fullName: string;
    email: string;
    subject: string;
    message: string;
}


export interface FormErrorsStateProps {
    fullName: {
        status: boolean;
        message: string;
    };
    email: {
        status: boolean;
        message: string;
    };
    subject: {
        status: boolean;
        message: string;
    };
    message: {
        status: boolean;
        message: string;
    };
}

export interface FormProps {
    validate: Function;
    setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface FormSuccessProps {
    success: boolean;
    setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
};