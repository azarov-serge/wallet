export const titleKinds = ['title1', 'title2', 'title3'] as const;
export const textKinds = ['text', 'title1', 'title2', 'title3'] as const;
export const types = ['default', 'success', 'information', 'error'] as const;

export type TTitleKind = typeof titleKinds[number];
export type TTextKind = typeof textKinds[number];

export type TTitleType = typeof types[number];
export type TTextType = typeof types[number];
