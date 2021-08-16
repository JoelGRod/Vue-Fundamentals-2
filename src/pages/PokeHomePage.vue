<template>
  <div v-if="!pokemon">
    <h1>Wait a moment please...</h1>
  </div>
  <div v-else>
    <h1>Recognize the Pokemon</h1>
    <PokemonImg :img-id="pokemon.id" :show-pokemon="showPokemon"> </PokemonImg>
    <AnswersList :pokemons="pokemons" @selection-pokemon="checkPokemon($event)">
    </AnswersList>
    <template v-if="showMessage">
      <h3>{{ message }}</h3>
    </template>
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
      showPokemon: false,
      message: "",
      showMessage: false,
    };
  },
  methods: {
    async pokemonsList() {
      this.pokemons = await getPokemonOptions()
      const rndInt = Math.floor(Math.random() * 4)
      this.pokemon = this.pokemons[rndInt]
    },
    checkPokemon(pokemonId) {
      if (pokemonId === this.pokemon.id) {
        this.showPokemon = true
        this.message = "Well Done, you have a point!"
        this.showMessage = true
        this.nextPokemon()
      } else {
        this.message = "Wrong, try again..."
        this.showMessage = true
      }
    },
    nextPokemon() {
      setTimeout(() => {
        this.pokemon = null
        this.showMessage = false
        this.showPokemon = false
        this.pokemonsList()
      }, 3000)
    },
  },
  components: {
    AnswersList,
    PokemonImg,
  },
  // LifeCycle
  mounted() {
    this.pokemonsList()
  },
};
</script>

<style>
</style>