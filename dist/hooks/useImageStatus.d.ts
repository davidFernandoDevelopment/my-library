export declare type Status = 'loading' | 'loaded' | 'error';
export declare function useImageStatus(src?: string): [Status, HTMLImageElement];
