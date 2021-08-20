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
        expect(img1.attributes().src)
            .toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg');
    });

    test('should show pokemon if showpicture is true', () => {
        // Arrange
        const wrapper = shallowMount(PokemonImg, {
            props: {
                imgId: 100,
                showPokemon: true
            }
        });
        // Act
        const img = wrapper.find('img');
        // Assert
        expect(img.exists()).toBeTruthy();
        expect(img.classes('fade-in')).toBeTruthy();
        expect(img.classes('hidden-pokemon')).toBeFalsy();
        expect(wrapper.vm.getImgSrc)
            .toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg');
    });
});