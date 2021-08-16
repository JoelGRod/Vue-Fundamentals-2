<template>
  <div class="pokemon-container">
    <img
      :src="getImgSrc"
      class="hidden-pokemon"
      alt="Pokemon Hide Image"
    />
    <img
      :src="getImgSrc"
      v-if="showPokemon"
      class="fade-in"
      alt="Pokemon Image"
    />
  </div>
</template>

<script>
export default {
  name: "PokemonImg",
  props: {
    imgId: {
      type: Number,
      required: true,
      default: 1
    },
    showPokemon: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  computed: {
    getImgSrc() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.imgId}.svg`
    }
  }
};
</script>

<style scoped>
.pokemon-container {
  height: 200px;
}
img {
  height: 200px;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
.hidden-pokemon {
  filter: brightness(0);
}
</style>