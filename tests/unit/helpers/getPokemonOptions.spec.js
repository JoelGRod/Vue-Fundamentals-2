import getPokemonOptions, { getPokemons, getPokemonNames } from "@/helpers/getPokemonOptions";

describe('getPokemonOptions helpers', () => {

    test('getPokemons should return an array of numbers', () => {
        // Arrange
        const pokemons = getPokemons();
        // Act
        // Assert
        expect(pokemons.length).toBe(650);
        expect(pokemons[0]).toBe(1);
        expect(pokemons[500]).toBe(501);
        expect(pokemons[649]).toBe(650);
    });

    test('getPokemonNames should return a four elements array with pokemon names', async () => {
        // Arrange
        const pokemons = await getPokemonNames([1,2,3,4]);
        // Act
        const expectedPokemons = [
            { id: 1, name: 'bulbasaur' },
            { id: 2, name: 'ivysaur' },
            { id: 3, name: 'venusaur' },
            { id: 4, name: 'charmander' } 
        ];
        // Assert
        expect(pokemons).toStrictEqual(expectedPokemons);
    });

    test('getPokemonOptions should return a mixed array', async () => {
        // Arrange
        const pokemons = await getPokemonOptions();
        // Act
        // Assert
        expect(pokemons.length).toBe(4);
        expect(pokemons).toEqual([
            { 
                id: expect.any( Number ),
                name: expect.any( String )
            },
            { 
                id: expect.any( Number ),
                name: expect.any( String )
            },
            { 
                id: expect.any( Number ),
                name: expect.any( String )
            },
            { 
                id: expect.any( Number ),
                name: expect.any( String )
            }
        ]);      
    });
})