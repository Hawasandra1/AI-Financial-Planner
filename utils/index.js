
// Custom formatNumber function to handle large numbers (K, M, B)
const formatNumber = (num) => {
    // Ensure num is a valid number
    if (isNaN(num)) return num;

    // Handle billions
    if (num >= 1e9) {
        return (num / 1e9).toFixed(1).replace(/\.0$/, '') + 'B'; // Format as billions
    }
    
    // Handle millions
    if (num >= 1e6) {
        return (num / 1e6).toFixed(1).replace(/\.0$/, '') + 'M'; // Format as millions
    }
    
    // Handle thousands
    if (num >= 1e3) {
        return (num / 1e3).toFixed(1).replace(/\.0$/, '') + 'K'; // Format as thousands
    }

    // Return the number as a string if it's less than 1000
    return num.toString();
};

// Exporting the function as default
export default formatNumber;
