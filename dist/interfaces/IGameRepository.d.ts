import { Game } from "src/models/game.model";
import { AbstractPromise } from "./AbstrackRepository";
export interface IGameRepository extends AbstractPromise<Game> {
}
