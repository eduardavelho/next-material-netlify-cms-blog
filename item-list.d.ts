/// <reference types="react" />
interface Item {
    text: string;
    image: string;
}
export interface ItemListProps {
    title: string;
    backgroundColor: string;
    color: string;
    items: Item[];
}
export declare function ItemList({ title, color, backgroundColor, items, }: ItemListProps): JSX.Element;
export {};
