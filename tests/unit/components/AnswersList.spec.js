import { shallowMount } from "@vue/test-utils";
import AnswersList from "@/components/AnswersList";
import { pokemonsList } from "../mocks/pokemons.mock";

describe("AnswersList Component", () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(AnswersList, {
      props: {
        pokemons: pokemonsList
      }
    });

    jest.clearAllMocks();
  });

  test("should match the snapshot", () => {
    // Arrange -> wrapper
    // Act
    // Assert
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.html()).toMatchInlineSnapshot(`
      <div class="options-container">
        <ul>
          <li>bulbasaur</li>
          <li>ivysaur</li>
          <li>venusaur</li>
          <li>charmander</li>
        </ul>
      </div>
    `);
  });

  test('should show the four options correctly', () => {
    // Arrange
    const listItems = wrapper.findAll('li');
    // Act
    // Assert
    expect(listItems.length).toBe(4);
    expect(listItems[0].text()).toBe('bulbasaur');
    expect(listItems[1].text()).toBe('ivysaur');
    expect(listItems[2].text()).toBe('venusaur');
    expect(listItems[3].text()).toBe('charmander');
    
  });

  test('should emit \'selection-pokemon\n with the correct id when clicked', () => {
    // Arrange
    const [ li1, li2, li3, li4 ] = wrapper.findAll( 'li' );
    // Act
    li1.trigger('click');
    li2.trigger('click');
    li3.trigger('click');
    li4.trigger('click');
    // Assert
    expect( wrapper.emitted('selection-pokemon').length ).toBe(4);
    expect( wrapper.emitted('selection-pokemon')[0] ).toEqual([1]);
    expect( wrapper.emitted('selection-pokemon')[1] ).toEqual([2]);
    expect( wrapper.emitted('selection-pokemon')[2] ).toEqual([3]);
    expect( wrapper.emitted('selection-pokemon')[3] ).toEqual([4]);
  });
  
});
