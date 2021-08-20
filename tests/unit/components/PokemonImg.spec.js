import { shallowMount } from '@vue/test-utils';
import PokemonImg from '@/components/PokemonImg';

describe('PokemonImg.vue', () => {
    test('should match with snapshot', () => {
        // Arrange
        const wrapper = shallowMount( PokemonImg, {
            props: {
                imgId: 1,
                showPokemon: true
            }
        });
        // Act
        // Assert
        expect( wrapper.html() ).toMatchSnapshot();
    });

    test('should show the hidden image and pokemon 100', () => {
        // Arrange
        const wrapper = shallowMount(PokemonImg, {
            props: {
                imgId: 100,
                showPokemon: false
            }
        });
        // Act
        const [ img1, img2 ] = wrapper.findAll('img');
        // Assert
        expect(img1.exists()).toBeTruthy();
        expect(img2).toBe(undefined);
        expect(img1.classes('hidden-pokemon')).toBeTruthy();
    });

    test('should show pokemon if showpicture is true', () => {
        
    });
});