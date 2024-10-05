import { Target } from "./Target";

export default class Anything implements Target {

    private _isDestroyed = false;


    constructor(private _health: number = 2000) {
        if (_health <= 0) {
            throw new Error('Initial health cannot be zero or less than zero.');
        }
    }

    get isDestroyed() {
        return this._isDestroyed;
    }

    get health() {
        return this._health;
    }

    takeDemage(demage: number) {
        if (demage < 0) {
            throw new Error('Demage cannot be less than zero.');
        }
        if (demage >= this._health) {
            this._health = 0;
        } else {
            this._health = this._health - demage;
        }
        
        this._isDestroyed = this._health === 0;
    }
}