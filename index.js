// Complete the staircase function below.
function staircase(n) {

for ( let i = 1; i <= n; i++ ) {
    console.log(" ".repeat(n-i)+ "#".repeat(i))
}

}

staircase(4);

// A single integer, n, denoting the size of the staircase. 