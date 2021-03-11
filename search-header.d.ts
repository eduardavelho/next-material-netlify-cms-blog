/// <reference types="react" />
export interface SearchHeaderProps {
    title: string;
    background?: string;
    searchOptions: string[];
    searchDefaultValue: string[];
    searchPlaceholder: string;
    searchNoOptionsText: string;
    searchDisabled: boolean;
    loading: boolean;
    dark?: boolean;
}
export declare function SearchHeader({ title, background, searchOptions, searchDefaultValue, searchPlaceholder, searchNoOptionsText, searchDisabled, loading, dark, }: SearchHeaderProps): JSX.Element;
