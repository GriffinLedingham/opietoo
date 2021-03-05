declare module "Types" {
    export interface GameData {
        game: {id: string},
        turn: number,
        board: {
            height: number,
            width: number,
            food: Array<{x:number, y:number}>,
            snakes: Array<{
                id: string,
                name: string,
                health: number,
                body: Array<{
                    x: number,
                    y: number
                }>
            }>
        },
        you: {
            id: string,
            name: string,
            health: number,
            body: Array<{
            x: number,
            y: number
            }>
        }
    }

    export interface SnakeData {
        id: string,
        name: string,
        health: number,
        body: Array<{
            x: number,
            y: number
        }>
    }
}