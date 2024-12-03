function parseMatrix(input) {
    return input.split("\n").map(row => row.split(",").map(Number));
}

function formatMatrix(matrix) {
    return matrix.map(row => row.join(", ")).join("\n");
}

function transposeMatrix() {
    const input = document.getElementById("matrixInput").value;
    if (!input) {
        document.getElementById("output").textContent = "Please enter a matrix.";
        return;
    }

    const matrix = parseMatrix(input);
    let transposed = [];
    for (let i = 0; i < matrix[0].length; i++) {
        transposed[i] = [];
        for (let j = 0; j < matrix.length; j++) {
            transposed[i][j] = matrix[j][i];
        }
    }

    document.getElementById("output").textContent = `Transposed Matrix:\n${formatMatrix(transposed)}`;
}
