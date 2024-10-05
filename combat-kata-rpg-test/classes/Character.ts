import Anything from "./Anything";
import { Target } from "./Target";

const INITIAL_HEALTH = 1000;
const DEFAULT_POWER = 100;

export default class Character implements Target {

    private _health = INITIAL_HEALTH;
    private _level = 1;
    private _isAlive = true;
    private _range: number;
    private _position = 0;
    private _factions = new Set<string>();

    constructor(private _profession: 'melee' | 'ranged' = 'melee') {
        this._range = _profession === 'melee' ? 2 : 20;
    }

    get factions() {
        return [...this._factions];
    }

    get profession() {
        return this._profession;
    }

    get position() {
        return this._position;
    }

    get range() {
        return this._range;
    }

    get health() {
        return this._health;
    }

    get level() {
        return this._level;
    }

    get isAlive() {
        return this._isAlive;
    }


    join(faction: string) {
        this._factions.add(faction);
    }

    leave(faction: string) {
        this._factions.delete(faction);
    }

    isAlly(other: Character) {
        if (this === other) {
            throw new Error('You are not a partner');
        }
        return this.factions.some(faction => other.factions.includes(faction));
    }
    
    levelUp() {
        this._level++;
    }

    attack(other: Target) {
        if (other instanceof Anything) {
            this.attackAnything(other);
        } else if (other instanceof Character) {
            this.attackCharacter(other);
        } else {
            throw new Error('Not implemented.');
        }
    }

    private attackAnything(other: Anything) {
        other.takeDemage(DEFAULT_POWER);
    }

    private attackCharacter(other: Character) {
        if (this === other) {
            throw new Error('You cannot deal demage to yourself.');
        }

        if (this.isAlly(other)) {
            throw new Error('Allies cannot Deal Damage to one another.');
        }

        if ((this.position + this.range) < other.position) {
            throw new Error('you don\'t have enough range');
        }

        const levelDifference = other.level - this._level;
        const powerQuantifier = levelDifference >= 5 ? 0.5 : levelDifference <= -5 ? 1.5 : 1;
        const totalPower = DEFAULT_POWER * powerQuantifier;

        other._health = Math.max(0, other._health - totalPower);

        if (!other._health) {
            other.markAsDead();
        }
    }

    moveUp() {
        this._position++;
    }

    moveDown() {
        this._position = Math.min(0, this._position--);
    }

    heal(other?: Character) {
        const target = other ?? this;
        if (this !== target && !this.isAlly(target)) {
            throw new Error('You can only heal allies.');
        }
        if (!target._isAlive) {
            throw new Error('Dead character cannot be healed');
        }  
        target._health = Math.min(1000, target._health + DEFAULT_POWER);
    }



    private markAsDead() {
        this._isAlive = false;
    }
}