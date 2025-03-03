import { Player } from './player';

describe('LevelUpComponent', () => {
    let player: Player;

    beforeEach(() => {
        player = new Player(0, 0);
    });

    it('should gain 10 experience point each day', () =>{
        player.newDay();
        expect(player.experience).toBe(10);
    });

    it('should start with 0 in experience and level', () => {
        expect(player.level && player.experience).toBe(0);
    })

    it('should win a level when experience equal 100', () => {
        for (let i = 0; i < 10; i++) {
            player.newDay();
            // console.log(player);
        }
        expect(player.level).toBe(1);
    });

    it('should keep the same level', () => {});

    it('max level should be 10', () => {
        for (let i = 0; i < 100; i++) {
            player.newDay();
            // console.log(player);
        }
        expect(player.level).toBeLessThanOrEqual(10);
    });

    it('should have a level strictly inferior to 11', () => {
        for (let i = 0; i < 110; i++) {
            player.newDay();
            // console.log(player);
        }
        expect(player.level).toBeLessThan(11);
    });

    it('should never have initial experience very high', () => {

        expect(player.experience).not.toBeGreaterThan(0);
    });

    it('should never have negative experience', () =>{        
        expect(player.experience).toBeGreaterThanOrEqual(0);
    });

    it('should never have negative level', () =>{
        expect(player.experience).toBeGreaterThanOrEqual(0);
    });

    it('experience and level should be a valid number', () => {
        expect(player.level && player.experience).toEqual(jasmine.any(Number))
    });

    describe('experience excess', () => {
        it('should keep the experience excess after level up', () => {
            player.level = 10;
            for (let i = 0; i < 150; i++) {
                player.newDay();
                console.log(player);
            }
            // expect(player.experience).tobe();
        });
    });
})
