import { Piece } from "./Piece";

export interface Position {
    row: number;
    col: number;
}

export class Cell {
    private isActive = false;
    readonly _el: HTMLElement = document.createElement('DIV');

    constructor(
        public readonly position: Position,
        private piece: Piece
    ) {
        this._el.classList.add('cell');
    }

    put(piece: Piece) {
        this.piece = piece;
    }

    getPiece() {
        return this.piece;
    }

    active() {
        this.isActive = true;
    }

    deactive() {
        this.isActive = false;
    }

    render() {
        if (this.isActive) {
            this._el.classList.add('active');
        } else {
            this._el.classList.remove('active');
        }
        this._el.innerHTML = (this.piece) ? this.piece.render() : '';
    }
}

export class Board {
    cells: Cell[] = [];
    _el: HTMLElement = document.createElement('DIV');
    constructor() {
        this._el.className = 'board';

        for (let row = 0; row < 4; row++) {
            const rowEl = document.createElement('div');
            rowEl.className = 'row';
            this._el.appendChild(rowEl);
            for (let col = 0; col < 3; col++) {
                const cell = new Cell({ row, col }, null);
                this.cells.push(cell);
                rowEl.appendChild(cell._el);
            }
        }
    }

    render() {
        this.cells.forEach(v => v.render());
    }
}

export class DeadZone {
    private cells: Cell[] = [];
    readonly deadzoneEl = document
        .getElementById(`${this.type}_deadzone`)
        .querySelector('.card-body');

    constructor(public type: 'upper' | 'lower') {
        for (let col = 0; col < 4; col++) {
            const cell = new Cell({ col, row: 0}, null);
            this.cells.push(cell);
            this.deadzoneEl.appendChild(cell._el);
        }
    }
    put(piece: Piece) {
        const emptyCell = this.cells.find(v => v.getPiece() === null);
        emptyCell.put(piece);
        emptyCell.render();
    }

    render() {
        this.cells.forEach(v => v.render());
    }
}
