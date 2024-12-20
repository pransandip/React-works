# Tic-Tac-Toe :

This is a final project, created with [`vite`](https://vitejs.dev/)

### To Run this Project

- Install dependencies

  ```bash
  npm install
  ```

- Start the app

  ```bash
   npm run dev
  ```

### **project development information :**

- Our game is controled by this `gameTurns` state. This is our single source of truth for this entire game.

- We used this `gameTurns` state to derived the `gameBoard`, this is the state we used to derived `activePlayer`.

- `gameTurns` state is used to check the winner.

- To `Restart` the game, we should reset the `gameTurns` state to an empty array. So we should clear the logs.
