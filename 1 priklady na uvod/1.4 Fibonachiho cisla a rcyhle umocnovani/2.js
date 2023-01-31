// algorithm description
//
// getLinearRecurrentValueOnIndex returns A_i = A_(n + k) = A_n * q_1 + A_(n + 1) * q_2 + ... + A_(n + k - 1) * q_k
// inputs: index: i of A_i, baseArray: [A_0, A_1, ..., A_n], baseQuotientsArray: [q_0, q_1, ..., q_n]

// 1. build operation matrix with 1 on cross diagonal and 0 everywhere else and baseArray in last row
// 2. power operation matrix to n
// 3. multiply result with baseArray

// example Fibonacci
// baseArray = [1, 1]
// baseQuotientsArray = [1, 1]
// operation matrix = [
//     [0, 1],
//     [1, 1]
// ]
// for index 5 the operation matrix is = [
//     [3, 5],
//     [5, 8]
// ]
// and the result is 8

function getLinearRecurrentValueOnIndex(index, baseArray, baseQuotientsArray) {
    const baseLength = baseArray.length;
    const operationMatrix = baseQuotientsArray.map((_, i) => {
        if (i === baseLength - 1) {
            return baseQuotientsArray;
        }
        return Array(baseLength).fill(0).map((_, j) => j + i === (baseLength - 1) ? 1 : 0);
    });
    // console.log(operationMatrix);
    const resultMatrix = matrixPower(operationMatrix, index);
    // console.log(resultMatrix);
    return resultMatrix[0].reduce((sum, value, i) => sum + value * baseArray[i], 0);
}

function matrixPower(matrix, power) {
    // console.log(matrix, power)
    if (power === 0) {
        const identityMatrix = matrix.map((_, i) => matrix.map((_, j) => i === j ? 1 : 0));
        return identityMatrix;
    }
    const t = matrixPower(matrix, Math.floor(power / 2));
    // console.log(t)
    const result = multiplyMatrices(t, t);
    if (power % 2 === 1) {
        return multiplyMatrices(result, matrix);
    }
    return result;
}

function multiplyMatrices(matrix1, matrix2) {
    const matrix1Rows = matrix1.length;
    const matrix1Columns = matrix1[0].length;
    const matrix2Rows = matrix2.length;
    const matrix2Columns = matrix2[0].length;
    if (matrix1Columns !== matrix2Rows) {
        throw new Error('Matrices cannot be multiplied');
    }
    const result = [];
    for (let i = 0; i < matrix1Rows; i++) {
        const row = [];
        for (let j = 0; j < matrix2Columns; j++) {
            let sum = 0;
            for (let k = 0; k < matrix1Columns; k++) {
                sum += matrix1[i][k] * matrix2[k][j];
            }
            row.push(sum);
        }
        result.push(row);
    }
    return result;
}

const baseArray = [1, 1];
const baseQuotientsArray = [1, 1];

// for (let i = 0; i < 20; i++) {
//     console.log(getLinearRecurrentValueOnIndex(i, baseArray, baseQuotientsArray));
// }

console.time('fibonacci');
console.log(getLinearRecurrentValueOnIndex(1200, baseArray, baseQuotientsArray));
console.timeEnd('fibonacci');
