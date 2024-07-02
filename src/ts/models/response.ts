import { ICharacter } from "./caracter";

export interface IGeneral {
    info: {
        count: number;
        next: string;
        pages: number;
        prev: any;
    };
    results: ICharacter[];
}