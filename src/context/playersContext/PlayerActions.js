// PlayerActions.js

/**
 * Calculate the age of a player based on their birth date.
 * @param {string} playerbirth - The birth date of the player in ISO format.
 * @returns {number} - The calculated age of the player.
 */
export const calculatePlayerAge = (playerbirth) => {
    const birthDate = new Date(playerbirth);
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - birthDate.getTime());
    return Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365.25));
  };