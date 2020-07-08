import {Piece} from "./Piece";

export enum PlayerType {
    UPPER = 'UPPER',
    LOWER = 'LOWER'
}

export class Player {
    private pieces: Piece[];

    constructor(public readonly type: PlayerType) {

    }
}