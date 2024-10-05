import Anything from "../classes/Anything";
import Character from "../classes/Character";
import Tree from "../classes/Tree";

describe('Iteration five - Things', () => {

    it('Anything that has Health may be a target', () => {
        const thing = new Anything(5000);
        const character = new Character();
        character.attack(thing);
        expect(thing.health).toBe(4900);
    })

    it('When reduced to 0 Health, things are Destroyed', () => {
        const tree = new Tree();
        tree.takeDemage(999999);
        expect(tree.isDestroyed).toBeTruthy();
    });
})