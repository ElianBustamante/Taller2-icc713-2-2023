/**
 * Returns an array of random games from the given array.
 * @param {Array} games - The array of games to choose from.
 * @param {number} count - The number of random games to return.
 * @returns {Array} - An array of random games.
 */
const getRandomGames = (games, count) => {
    return games.sort(() => Math.random() - 0.5).slice(0, count);
};

/**
 * Formats an array of games into an array of strings.
 * @param {Array} games - The array of games to format.
 * @returns {Array} - An array of strings representing the games.
 */
const formatGames = (games) => {
    return games.map(game => `${game.name} - ${game.video_console} - [${game.genres.join(", ")}]`);
};

const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
};

export { getRandomGames, formatGames, getRandomInt }