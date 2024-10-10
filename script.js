/*
Approach : 
3 functions : 
1) to fetch data 
2) to display information (render) 
3) to handle event handlers (not a function)
4) to generate random numbers by Math.random()

1) fetch data by fetch api , use async , 
await to resolve promise and handle error of response,parse to json, resolve data promise.
2) get random numbers , clear the previous content.
render the info  on card , update Hp,Attack,Defense,Speed,Img ,texcontent or innerHtml..
3) run the event handler when clicked on generate , run a async function upon which the pokemon data 
and pokemon id are fetched only if pokemonData promise is fulfiled. if the data is present , render it
using renderCard function.
*/
// Type color mapping
const typeColors = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD"
};

//fetch api on pokemonId
async function fetchApi(pokemonId) {
  try {
    // api fetched.
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
    );
    if (!response.ok) throw new Error("Data Not fetched"); //if response not present , throw error
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
  }
}
//render the card data or pokemonData.
function renderCard(data) {
  //selectors.
  const cardElement = document.querySelector(".card");
  const nameElement = document.querySelector(".pokemon-name");
  const hpElement = document.querySelector(".hp-value");
  const attackElement = document.querySelector(".attack-value");
  const defenseElement = document.querySelector(".defense-value");
  const speedElement = document.querySelector(".speed-value");
  const totalStats = document.querySelector(".base-stats");
  const imgElement = document.querySelector(".pokemon-img");
  const type1 = document.querySelector(".type-1");
  const type2 = document.querySelector(".type-2");

  // Set Pokémon name
  //make the first letter capital and slice the rest of the string , append it.
  nameElement.textContent =
    data.name.charAt(0).toUpperCase() + data.name.slice(1); // Capitalize the first letter

  // Set HP
  hpElement.textContent = data.stats[0].base_stat;

  // Set Attack
  attackElement.textContent = data.stats[1].base_stat;

  // Set Defense
  defenseElement.textContent = data.stats[2].base_stat;

  // Set Speed
  speedElement.textContent = data.stats[5].base_stat;

  //Total Stats 
  let sum = data.stats.reduce((sum,stat)=>sum+stat.base_stat,0); //total sum in the object stats.
  totalStats.textContent = `${sum}`; 
  

  // Set Pokémon image
  imgElement.src = data.sprites.front_default;
  imgElement.alt = data.name; // Add alt text for accessibility

  ///types 
  const pokemonTypes = data.types.map(type => type.type.name);

  // Set type badges and background colors based on types
  type1.textContent = pokemonTypes[0].toUpperCase();

  if (pokemonTypes[1]) {
    type2.textContent = pokemonTypes[1].toUpperCase();
    type2.style.display = "inline-block"; // Show second type if available
  } else {
    type2.style.display = "none"; // Hide second type if there's only one
  }
  cardElement.style.backgroundColor = typeColors[pokemonTypes[0]] || "#fff";
}
// random pokemonId
function getRandomPokemonId() {
  const pokemon = Math.floor(Math.random() * 898) + 1; //there are 898 pokemon id's.
  return pokemon;
}
//when generate button is clicked.
document
  .querySelector("#generateButton")
  .addEventListener("click", async () => {
    const pokemonId = getRandomPokemonId();
    const pokemonData = await fetchApi(pokemonId); //wait for the pokemonData promise exection.
    if (pokemonData) {
      renderCard(pokemonData);
    }
  });

// loads pikachu by default function.
   async function defaultPokemon(){
    const pikachuId = 25;
    const pikachuData =  await fetchApi(pikachuId);
    if(pikachuData){
      renderCard(pikachuData);
    }
  }
   window.onload = defaultPokemon; //load pikachu by default using onload.

  //JS Done .