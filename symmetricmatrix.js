function isSymmetric(matrix) {
    // Check if the matrix is square
    if (matrix.length !== matrix[0].length) {
        return "Error: Matrix must be square to check for symmetry.";
    }

    // Check symmetry
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[i][j] !== matrix[j][i]) {
                return false; // Not symmetric
            }
        }
    }
    return true; // Symmetric
}

function checkSymmetric() {
    const input = document.getElementById("matrixInput").value;
    if (!input) {
        document.getElementById("output").textContent = "Please enter a matrix.";
        return;
    }

    const matrix = parseMatrix(input);
    const symmetric = isSymmetric(matrix);

    if (symmetric === "Error: Matrix must be square to check for symmetry.") {
        document.getElementById("output").textContent = symmetric;
    } else {
        document.getElementById("output").textContent = symmetric
            ? "The matrix is symmetric."
            : "The matrix is not symmetric.";
    }
}
