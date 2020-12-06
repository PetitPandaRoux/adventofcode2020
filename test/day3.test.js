const {Tobbogan} = require('../lib/day3.js'); 

describe('Third Day Challenge', () => {
  test('After moving (0,2) it should meet a tree', () => {
    let grid = "..##.......\n" +
    "#...#...#..\n" +
    ".#....#..#.\n" +
    "..#.#...#.#\n" +
    ".#...##..#.\n" +
    "..#.##.....\n" +
    ".#.#.#....#\n" +
    ".#........#\n" +
    "#.##...#...\n" +
    "#...##....#\n" +
    ".#..#...#.#";
    let slope = {right:0, down:1}
    let toboggan = new Tobbogan(grid, slope);
    toboggan.move();
    let result = toboggan.checkIfTrees();
    expect(result).toEqual(true);
  });

  test('After moving (1,3) it should not meet a tree', () => {
    let grid = "..##.......\n" +
    "#...#...#..\n" +
    ".#....#..#.\n" +
    "..#.#...#.#\n" +
    ".#...##..#.\n" +
    "..#.##.....\n" +
    ".#.#.#....#\n" +
    ".#........#\n" +
    "#.##...#...\n" +
    "#...##....#\n" +
    ".#..#...#.#";
    let slope = {right:1, down:3}
    let toboggan = new Tobbogan(grid, slope);
    toboggan.move();
    let result = toboggan.checkIfTrees();
    expect(result).toEqual(false);
  });
});