<template>
  <div v-if="!pokemon">
      <h1>Wait a moment please...</h1>
  </div>
  <div v-else>
    <h1>Recognize the Pokemon</h1>
    <PokemonImg :img-id="pokemon.id" 
        :show-pokemon="showPokemon">
    </PokemonImg>
    <AnswersList :pokemons="pokemons" 
        @selection-pokemon="checkPokemon($event)">
    </AnswersList>
  </div>
</template>

<script>
// Components
import AnswersList from "@/components/AnswersList";
import PokemonImg from "@/components/PokemonImg";
// Helpers
import getPokemonOptions from "@/helpers/getPokemonOptions";

export default {
  name: "PokeHomePage",
  data() {
    return {
      pokemons: [],
      pokemon: null,
      showPokemon: false
    };
  },
  methods: {
    async pokemonsList() {
      this.pokemons = await getPokemonOptions();
      const rndInt = Math.floor(Math.random() * 4);
      this.pokemon = this.pokemons[rndInt];
    },
    checkPokemon(pokemonId) {
        this.showPokemon = (pokemonId === this.pokemon.id) ? true : false
    }
  },
  components: {
    AnswersList,
    PokemonImg,
  },
  // LifeCycle
  mounted() {
    this.pokemonsList();
  },
};
</script>

<style>
</style>