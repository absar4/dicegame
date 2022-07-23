/**
 * Dice Game:
 * logics:
 * if number of player 1 > number of player 2 than player 1 wins and vice versa
 * Steps:
 * heading as variable to change it dynamically
 * img tag accesss of both players to change the src 
 * random number generator
 */

function startGame() {
    document.querySelector('.startGameContainer').style.display = "none";
    document.querySelector('.container').style.display = "flex";
    let heading = document.querySelector('.heading')
    let imgPlayer1 = document.querySelector('.img-player1')
    let imgPlayer2 = document.querySelector('.img-player2')

    // generate random number 1 - 6 player 1
    let n_player_1 = Math.random()
    n_player_1 *= 6
    n_player_1 = Math.floor(n_player_1) + 1


    // generate random number 1 - 6 player 2
    let n_player_2 = Math.random()
    n_player_2 *= 6
    n_player_2 = Math.floor(n_player_2) + 1


    // for checking the numbers are generating not similar
    // document.querySelector('.player1 p').innerHTML = n_player_1
    // document.querySelector('.player2 p').innerHTML = n_player_2


    switch (n_player_1) {
        case 1:
            imgPlayer1.src = "./assets/imgs/oneDice.png"
            break;
        case 2:
            imgPlayer1.src = "./assets/imgs/twoDice.png"
            break;
        case 3:
            imgPlayer1.src = "./assets/imgs/threeDice.png"
            break;
        case 4:
            imgPlayer1.src = "./assets/imgs/fourDice.png"
            break;
        case 5:
            imgPlayer1.src = "./assets/imgs/fiveDice.png"
            break;
        case 6:
            imgPlayer1.src = "./assets/imgs/sixDice.png"
            break;
        default:
            break;
    }
    switch (n_player_2) {
        case 1:
            imgPlayer2.src = "./assets/imgs/oneDice.png"

            break;
        case 2:
            imgPlayer2.src = "./assets/imgs/twoDice.png"
            break;
        case 3:
            imgPlayer2.src = "./assets/imgs/threeDice.png"
            break;
        case 4:
            imgPlayer2.src = "./assets/imgs/fourDice.png"
            break;
        case 5:
            imgPlayer2.src = "./assets/imgs/fiveDice.png"
            break;
        case 6:
            imgPlayer2.src = "./assets/imgs/sixDice.png"
            break;
        default:
            break;
    }

    if (n_player_1 > n_player_2) {
        heading.innerHTML = 'Player 1 Wins!';
    } else if (n_player_1 < n_player_2) {
        heading.innerHTML = 'Player 2 Wins!';
    } else if (n_player_1 === n_player_2) {
        heading.innerHTML = 'Draw!';
    } else {
        alert('Error we are fixing the bug soon');
    }


}

