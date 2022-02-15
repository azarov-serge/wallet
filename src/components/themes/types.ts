export type TColor = string;

export interface ITypographyProperty {
    fontFamily: string;
    fontSize: string;
    lineHeight: string;
    fontWeight: string;
}

export interface IPalette {
    primary: TColor;
    secondary: TColor;
    background: TColor;
    selected: TColor;
    text: TColor;
    default: TColor;
    caption: TColor;
    border: TColor;
    success: TColor;
    information: TColor;
    error: TColor;
    bars: TColor[];
}

export interface ITypography {
    title1: ITypographyProperty;
    title2: ITypographyProperty;
    title3: ITypographyProperty;
    text: ITypographyProperty;
}

export interface ITheme {
    palette: IPalette;
    typography: ITypography;
}

export enum ThemeName {
    DARK = 'DARK',
    LIGHT = 'LIGHT',
}
