function steps(n) {

    for (let row = 0; row < n; row++) {
        // console.log(row,"<>>>row")
        let stair = " "
        for (let col = 0; col < n; col++) {
            // console.log(col,"<>>>col")
            if (row >= col) {
                stair += '#'
            }
        }
        console.log(stair)
    }
}
console.log(steps(6))