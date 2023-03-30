
const TargePokemon = ({pokemon}) => {

    const namePokemon = pokemon?.name
    const imgPokemon = pokemon?.sprites.other.dream_world.front_default
    const pesoPokemon = pokemon?.weight
    const alturaPokemon = pokemon?.height
    const OneAbilityPokemon= pokemon?.abilities[0].ability.name

  return (
    <div>
        <h1><b>Name: </b>{namePokemon}</h1>
        <img src={imgPokemon} alt="" />
        <p><b>Peso: </b> {pesoPokemon}</p>
        <p><b>Altura: </b>{alturaPokemon}mt</p>
        <p><b>primera habilidad: </b>{OneAbilityPokemon}</p>
    </div>
  )
}

export default TargePokemon