function fill2DArray() {
    const rows = parseInt(prompt("Enter the number of rows:"));
    const cols = parseInt(prompt("Enter the number of columns:"));
    
    const array2D = [];

    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
            const value = parseInt(prompt(`Enter the value for row ${i+1}, column ${j+1}:`));
            row.push(value);
        }
        array2D.push(row);
    }

    return array2D;
}

const userArray = fill2DArray();
console.log("User-defined 2D array: ", userArray);