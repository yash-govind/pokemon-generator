

---

# Pokémon Generator App

A simple web application that generates random Pokémon cards using data fetched from the [PokeAPI](https://pokeapi.co/). The app displays the Pokémon's name, image, height, weight, and types.

## Features

- Generate random Pokémon with a click of a button.
- Displays essential details: Name, Image, Height, Weight, and Types.
- Uses **async/await** for fetching Pokémon data from the API.

## Demo : (https://yash-govind.github.io/pokemon-generator/)

![Pokemon Generator Demo](demo.gif) <!-- Add a GIF or screenshot of your app in action -->

## Getting Started

### Prerequisites

To run this project, you'll need:

- A web browser
- Basic knowledge of HTML, CSS, and JavaScript
- An internet connection (to fetch Pokémon data from the PokeAPI)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/pokemon-generator-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd pokemon-generator-app
   ```

3. Open the `index.html` file in your browser.

   ```bash
   open index.html
   ```

   Alternatively, you can use the "Live Server" extension in VSCode to serve the project.

## Usage

1. Open the app in your browser.
2. Click the "Generate Pokémon" button to fetch a random Pokémon and display its details on a card.
3. You can keep clicking the button to generate new random Pokémon.

## Technologies Used

- **HTML**: For the basic structure of the app.
- **CSS**: For styling the Pokémon card.
- **JavaScript (ES6)**: To handle async operations and fetch data from the PokeAPI.
- **PokeAPI**: The Pokémon data source.

## API Reference

This project uses the [PokeAPI](https://pokeapi.co/), a free and public API providing information about Pokémon. We fetch random Pokémon data by making an API request to:

```
https://pokeapi.co/api/v2/pokemon/{pokemon-id}
```

Where `{pokemon-id}` is a randomly generated number between 1 and 898.


## Contributing

Feel free to submit issues or pull requests if you'd like to improve the project. Contributions are welcome!

1. Fork the project
2. Create your feature branch:
   ```bash
   git checkout -b feature/new-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/new-feature
   ```
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the creators of the [PokeAPI](https://pokeapi.co/) for providing this awesome resource!

---
