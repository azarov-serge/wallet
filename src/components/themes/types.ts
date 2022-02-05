export interface ITheme {
    [key: string]: Record<string, string | string[]>;
    palette: {
        primary: string;
        secondary: string;
        background: string;
        selected: string;
        text: string;
        caption: string;
        border: string;
        success: string;
        information: string;
        error: string;
        bars: string[];
    };
    font: {
        family: string;
        size: string;
        lineHeight: string;
    };
}

export enum ThemeName {
    DARK = 'DARK',
    LIGHT = 'LIGHT',
}
