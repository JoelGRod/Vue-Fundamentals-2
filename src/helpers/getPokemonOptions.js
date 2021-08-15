import pokeApi from '@/services/pokemonApi';

export default async () => {

    try {
        const mixedList = getPokemons().sort( () => Math.random() - 0.5 );
        const pokemons = await getPokemonNames(mixedList.splice(0, 4));
        return pokemons;
    } catch (error) {
        console.log('getPokemonOptions', error);
        throw new Error(error);
    }

}

const getPokemons = () => {

    const pokemonsList = Array.from( Array( 650 ) );
    return pokemonsList.map(( element, index ) => index + 1)

}

const getPokemonNames = async ( pokemonIdList ) => {

    try {
        const pokemonPromises = pokemonIdList.map( id => pokeApi.get(`/${ id }`) );
    
        const pokemonResponses = await Promise.all( pokemonPromises );
    
        return pokemonResponses.map( element => 
            ({ id: element.data.id, name: element.data.name }) 
        )
    } catch (error) {
        console.log('getPokemonName', error);
        throw new Error(error);
    }

}

