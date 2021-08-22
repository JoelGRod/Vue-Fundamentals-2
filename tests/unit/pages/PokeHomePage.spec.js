import { shallowMount, mount } from '@vue/test-utils';
import PokeHomePage from '@/pages/PokeHomePage';
import { pokemonsList } from '../mocks/pokemons.mock';

describe('PokemonHomePage Component', () => {
    
    let wrapper;

    beforeEach( () => {
        wrapper = shallowMount( PokeHomePage );
    });

    test('should match with snapshot', () => {
        expect( wrapper.html() ).toMatchSnapshot();
    });

    test('should call pokemonsList when mounted', () => {
        // Arrange
        /** 
         * We need to spy over PokeHomePage 
         * method called in mounted BEFORE we mount the wrapper,
         * because this, we need to spy on literal object (passed 
         * by reference to wrapper) instead of wrapper
         */ 
        const pokemonsListSpy = jest.spyOn( PokeHomePage.methods, 'pokemonsList' );
        const wrapper = shallowMount(PokeHomePage);
        // Act
        // Assert
        expect(pokemonsListSpy).toHaveBeenCalledTimes(1);
    });

    test('should match snapshot when data is loaded', () => {
        // Arrange
        const wrapper = shallowMount( PokeHomePage, {
            data() {
                return {
                    pokemons: pokemonsList,
                    pokemon: pokemonsList[0],
                    showPokemon: false,
                    message: '',
                    showMessage: false
                }
            }
        })
        // Act
        // Assert
        expect( wrapper.html() ).toMatchSnapshot();
    });

    test('should show the PokemonImg and AnswersList components', () => {
        // Arrange
        const wrapper = shallowMount( PokeHomePage, {
            data() {
                return {
                    pokemons: pokemonsList,
                    pokemon: pokemonsList[0],
                    showPokemon: false,
                    message: '',
                    showMessage: false
                }
            }
        });

        // Because we used shallowMount
        const pokemonImg = wrapper.find('pokemon-img-stub');
        const answersList = wrapper.find('answers-list-stub');
        // Act
        // Assert
        expect(pokemonImg.exists()).toBeTruthy();
        expect(answersList.exists()).toBeTruthy();
        expect(pokemonImg.attributes('imgid')).toBe("1");
        expect(answersList.attributes('pokemons')).toBeTruthy();
    });

    // IMPORTANT!!
    test('test checkPokemon() function', async () => {
        // Arrange
        const wrapper = shallowMount( PokeHomePage, {
            data() {
                return {
                    pokemons: pokemonsList,
                    pokemon: pokemonsList[0],
                    showPokemon: false,
                    message: '',
                    showMessage: false
                }
            }
        });
        const nextPokemonSpy = jest.spyOn( wrapper.vm, 'nextPokemon' );
        // Act
        await wrapper.vm.checkPokemon(1);
        // Assert
        expect( wrapper.find('h3').exists() ).toBeTruthy();
        expect( wrapper.vm.showPokemon ).toBeTruthy();
        expect( wrapper.find('h3').text() ).toBe('Well Done, you have a point!');
        expect( nextPokemonSpy ).toBeCalledTimes(1);

        // Act
        await wrapper.vm.checkPokemon(2);
        // Assert
        expect( wrapper.vm.message ).toBe('Wrong, try again...');

    });

});