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
});
