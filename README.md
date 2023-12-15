# Welcome to the Pokédex!

This is a Pokédex, a website with a Pokemon index that will help you to become the best Pokemon trainer in the world.

This site built with [Vite](https://vitejs.dev/),
[React](https://reactjs.org/), [Typescript](https://www.typescriptlang.org/), [Material UI](https://mui.com/),
[Redux Toolkit](https://redux-toolkit.js.org/), and [GraphQL](https://graphql.org/).
It uses the [PokéAPI](https://pokeapi.co/) to fetch data.

## Getting Started

### Prerequisites
To run this project you need to have [Node.js](https://nodejs.org/en/) installed on your machine,
as well as [pnpm](https://pnpm.io/) (or [npm](https://www.npmjs.com/)).

### Installation
1. Clone the repo
   ```sh
   git clone git@github.com:sant3001/PrizePicksPokemon.git
   ```
2. Install NPM packages
   ```sh
   pnpm install
   ```
3. Run the development server
   ```sh
    pnpm run dev
    ```
4. Open [http://localhost:5173](http://localhost:5173/) with your browser to see the result.
5. You can start browsing the Pokédex!

### Implementation Details
- The project uses [pnpm](https://pnpm.io/) as a package manager.
- The project uses [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) for code formatting.

### Usage
- You can search for a Pokemon by name.
- You can see the details of a Pokemon by clicking on it.
- You can view the search history by clicking on the search bar.
  - Search history is saved in the local storage. This allows keeping the search history between sessions.

### Code Quality
You can run the following commands to check the code quality:
- `pnpm run lint` to check the code with ESLint.
- `pnpm run typecheck` to check for TypeScript errors.

### Future Improvements
- Add tests ⚠️
- Add pagination to the Pokemon list
- Add filters to the Pokemon list
- Add evolution chain to the Pokemon details

### GraphQL vs REST
The project uses [GraphQL](https://graphql.org/) to fetch data from the [PokéAPI](https://pokeapi.co/).
It was chosen over REST because it allows to fetch only the data that is needed.
In addition, it allows to create a single query to fetch all the data needed for a page,
instead of making multiple requests.

### License
Distributed under the MIT License.
