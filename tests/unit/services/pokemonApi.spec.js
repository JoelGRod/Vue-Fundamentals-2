import pokemonApi from '@/services/pokemonApi';

describe('pokemonApi', () => {
    test('baseURL should be the same string always', () => {
        const baseURL = 'https://pokeapi.co/api/v2/pokemon';
        expect(pokemonApi.defaults.baseURL).toBe(baseURL);
    });
});