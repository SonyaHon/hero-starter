const DIRECTIONS = {
    UP   : 'North',
    DOWN : 'South',
    LEFT : 'West',
    RIGHT: 'East',
    STAY : 'Stay'
};

const TILE_TYPES = {
    FLOOR: 'Unoccupied',
    HERO : 'Hero',
    WELL : 'HealthWell',
    MINE : 'DiamondMine'
};


function getEnemiesCount(gameData) {
    let myTeam = gameData.activeHero.team;
    return gameData.teams[myTeam === 0 ? 1 : 0].length;
}

function getFriendsCount(gameData) {
    let myTeam = gameData.activeHero.team;
    return gameData.teams[myTeam].length - 1;
}

function getNearestMine(gameData) {
    const mines = [];
    for (let y = 0; y < gameData.board.tiles.length; y++) {
        for (let x = 0; x < gameData.board.tiles[y].length; x++) {
            let tile = gameData.board.tiles[y][x];
            if (tile.type === TILE_TYPES.MINE) mines.push(tile);
        }
    }
}

function getNearestWell() {

}

function getTurnsTillEnd(gameData) {
    return gameData.maxTurns - gameData.turn;
}

function getMyHp(gameData) {
    return gameData.activeHero.health;
}


module.exports = (gameData) => {
    console.log(getNearestMine(gameData));
    return DIRECTIONS.DOWN;
};