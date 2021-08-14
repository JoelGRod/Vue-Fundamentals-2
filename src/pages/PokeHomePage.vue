<template>
    <h1>Recognize the Pokemon</h1>
    <PokemonImg></PokemonImg>
    <AnswersList></AnswersList>
</template>

<script>
    import AnswersList from '@/components/AnswersList'
    import PokemonImg from '@/components/PokemonImg'

export default {
    name: 'PokeHomePage',
    components: {
        AnswersList,
        PokemonImg
    }
}
</script>

<style>

</style>