export class Life {
    public cells: boolean [][]
    constructor(cells: boolean [] []) {
        this.cells = cells
    }

    rulesForAliveCell(aliveNeighbors: number): boolean {
        switch (aliveNeighbors) {
            case 2:
                return true
            case 3:
                return true
            default:
                return false
        }
    }

    rulesForDeadCell(aliveNeighbors: number): boolean {
        switch (aliveNeighbors) {
            case 3:
                return true
            default:
                return false
        }
    }

    getNewState(rowIndex: number, cellIndex: number): boolean {

        const cell: boolean = this.cells[rowIndex][cellIndex]

        const topRowIndex: number = rowIndex - 1
        const bottomRowIndex: number = rowIndex + 1

        const leftCellIndex: number = cellIndex - 1
        const rightCellIndex: number = cellIndex + 1

        const notUndefined = (state: boolean | undefined): boolean => {
            if(state === undefined) {
                return false
            } else {
                return state
            }
        }


        const countRow = (rowIndex: number, leftCellIndex: number, cellIndex: number, rightCellIndex: number): number => {
            const row = this.cells[rowIndex]
            if(row === undefined) {
                return 0
            } else {
                return Number(notUndefined(row[leftCellIndex])) + Number(notUndefined(row[cellIndex])) + Number(notUndefined(row[rightCellIndex]))
            }
        }

        const top: number = countRow(topRowIndex, leftCellIndex, cellIndex, rightCellIndex)
        const middle: number = countRow(rowIndex, leftCellIndex, cellIndex, rightCellIndex) - Number(cell)
        const bottom: number = countRow(bottomRowIndex, leftCellIndex, cellIndex, rightCellIndex)

        const totalAliveNeighbors: number = top + middle + bottom

        if(cell) {
            return this.rulesForAliveCell(totalAliveNeighbors)
        } else {
            return this.rulesForDeadCell(totalAliveNeighbors)
        }
    }

    getRandomCells(clusterProbability: number, emptySpaceProbability: number) {
        const numRows = this.cells.length
        const numCols = this.cells[0].length

        const clusterSize = 6
        const newCells: boolean [][] = Array.from({length: numRows}, () => Array(numCols).fill(false))

        for (let i = 0; i < numRows; i++) {
            for (let j = 0; j < numCols; j++) {

                const region = Math.floor(i / clusterSize) % 2 + Math.floor(j / clusterSize) % 2


                let probability

                if (region === 0) {
                    probability = clusterProbability
                } else {
                    probability = emptySpaceProbability
                }

                const randomValue = Math.random()

                newCells[i][j] = randomValue < probability
            }
        }

        return newCells
    }

    updateAllCells(): void {
        this.cells = this.cells.map((row: boolean [], rowIndex: number) => {
            return row.map((_cell: boolean, cellIndex: number)=> {
                return this.getNewState(rowIndex, cellIndex)
            })
        })
    }

    getAllCells(): boolean[][] {
        return this.cells
    }
}


