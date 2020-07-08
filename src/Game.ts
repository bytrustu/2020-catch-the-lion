import { Board } from "./Board";

export class Game {
    readonly board = new Board();
    constructor() {
        const boardContainer = document.querySelector('.board-container');
        boardContainer.firstChild.remove();
        boardContainer.appendChild(this.board._el);
    }
}