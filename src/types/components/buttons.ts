export interface DefaultButtonProps {
    variant?: 'primary' | 'secondary' | 'submit';
    type?: 'button' | 'submit' | 'reset';
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    children: string | React.ReactElement | React.ReactElement[] | React.ReactNode | React.ReactNode[];
}

export interface PrimaryButtonProps {
    type?: 'button' | 'submit' | 'reset';
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    children: string | React.ReactElement | React.ReactElement[] | React.ReactNode | React.ReactNode[];
}
export interface SecondaryButtonProps {
    type?: 'button' | 'submit' | 'reset';
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    children: string | React.ReactElement | React.ReactElement[] | React.ReactNode | React.ReactNode[];
}
export interface SubmitButtonProps {
    children: string | React.ReactElement | React.ReactElement[] | React.ReactNode | React.ReactNode[];
}