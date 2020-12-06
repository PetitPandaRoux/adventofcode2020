let texte = "abcdefg\n" +
"1234567\n" +
"hijklmn" ;

let grid = texte.split(/\r?\n/);

console.log(grid[1][0]);