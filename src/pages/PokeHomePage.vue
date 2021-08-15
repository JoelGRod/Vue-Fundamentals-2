<template>
    <h1>Recognize the Pokemon</h1>
    <PokemonImg :imgId="100" :showPokemon="true"></PokemonImg>
    <AnswersList></AnswersList>
</template>

<script>
    // Components
    import AnswersList from '@/components/AnswersList'
    import PokemonImg from '@/components/PokemonImg'
    // Helpers
    import getPokemonOptions from '@/helpers/getPokemonOptions'

export default {
    name: 'PokeHomePage',
    computed: {
        getPokemonsInfo() {
            return getPokemonOptions()
        }
    },
    components: {
        AnswersList,
        PokemonImg
    }
}
</script>

<style>

</style>