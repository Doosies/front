/// <reference types="react-scripts" />


interface User {
    id: number;
    username: string;
    email: string;
    active: boolean;
}
interface Input {
    username: string;
    email: string;
}

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
type MouseEvent = React.MouseEvent<HTMLElement>;