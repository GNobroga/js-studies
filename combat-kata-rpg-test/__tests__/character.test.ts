import Character from "../classes/Character";

// Helper function to repeat actions
function repeatAction(times: number, fn: () => void) {
    for (let i = 0; i < times; i++) {
        fn();
    }
}

describe('Iteration One - Character Initialization and Basic Actions', () => {

    let a: Character, b: Character;

    beforeEach(() => {
        a = new Character();
        b = new Character();
    });

    describe('Character creation', () => {
        it('should start with 1000 health, level 1, and be alive', () => {
            expect(a.health).toBe(1000);
            expect(a.level).toBe(1);
            expect(a.isAlive).toBeTruthy();
        });
    });

    describe('Dealing Damage', () => {
        it('should subtract damage from health', () => {
            a.attack(b);
            expect(b.health).toBe(900);
        });

        it('should set health to 0 and character to dead if damage exceeds current health', () => {
            repeatAction(10, () => a.attack(b));
            expect(b.health).toBe(0);
            expect(b.isAlive).toBeFalsy();
        });
    });

    describe('Healing', () => {
        it('should not allow dead characters to be healed', () => {
            repeatAction(10, () => a.attack(b));
            expect(() => b.heal()).toThrow();
        });

        it('should not allow healing above 1000 health', () => {
            a.attack(b); // Reduce health to 900
            repeatAction(3, () => b.heal());
            expect(b.health).toBe(1000); // Health should not exceed 1000
        });
    });
});

describe('Iteration Two - Advanced Attack Logic', () => {
    let a: Character, target: Character;

    beforeEach(() => {
        a = new Character();
        target = new Character();
    });

    it('should not allow a character to attack itself', () => {
        expect(() => a.attack(a)).toThrow();
        expect(a.health).toBe(1000);
        expect(a.isAlive).toBeTruthy();
    });

    it('should reduce damage by 50% when target is 5 or more levels above attacker', () => {
        repeatAction(5, () => target.levelUp()); // Target is now level 6
        a.attack(target);
        expect(target.health).toBe(950); // 50% damage reduction
    });

    it('should increase damage by 50% when target is 5 or more levels below attacker', () => {
        repeatAction(5, () => a.levelUp()); // Attacker is now level 6
        a.attack(target);
        expect(target.health).toBe(850); // 50% damage increase
    });
});

describe('Iteration Three - Range and Movement', () => {
    let melee: Character, ranged: Character;

    beforeEach(() => {
        melee = new Character('melee');
        ranged = new Character('ranged');
    });

    it('should assign a range of 2 meters for melee fighters', () => {
        expect(melee.range).toBe(2);
    });

    it('should assign a range of 20 meters for ranged fighters', () => {
        expect(ranged.range).toBe(20);
    });

    it('should not allow attacks if target is out of range', () => {
        repeatAction(3, () => ranged.moveUp()); // Ranged moves out of melee range
        expect(() => melee.attack(ranged)).toThrow();
        expect(ranged.health).toBe(1000); // No damage dealt
    });

    it('should allow attacks if target is within range', () => {
        repeatAction(18, () => melee.moveUp()); // Melee closes in on ranged
        melee.attack(ranged);
        expect(ranged.health).toBe(900);
    });
});

describe('Iteration Four - Factions and Alliances', () => {
    let a: Character, b: Character;

    beforeEach(() => {
        a = new Character();
        b = new Character();
    });

    it('should have no faction when a character is created', () => {
        expect(a.factions).toHaveLength(0);
    });

    it('should allow a character to join and leave factions', () => {
        a.join('PUMAFULL');
        expect(a.factions).toHaveLength(1);
        expect(a.factions).toEqual(['PUMAFULL']);

        a.leave('PUMAFULL');
        expect(a.factions).toHaveLength(0);
    });

    it('should consider characters in the same faction as allies', () => {
        a.join('PUMAFULL');
        b.join('PUMAFULL');
        expect(a.isAlly(b)).toBeTruthy();
    });

    it('should prevent allies from attacking each other', () => {
        a.join('PUMAFULL');
        b.join('PUMAFULL');
        expect(() => a.attack(b)).toThrow();
    });

    it('should allow allies to heal each other', () => {
        a.attack(b);
        expect(b.health).toBe(900);

        a.join('PUMAFULL');
        b.join('PUMAFULL');
        a.heal(b);
        expect(b.health).toBe(1000);
    });
});
