const startGame = () => {
    const playBtn = document.querySelector('.play');
    const introPage = document.querySelector('.intro-page');
    const matchPage = document.querySelector('.match-section');

    playBtn.addEventListener('click', () => {
        introPage.classList.add('fade-out')
        matchPage.classList.add('fade-in')
    });

    const option = ['rock', 'paper', 'scissors'];
    const optionBtn = document.querySelectorAll('.option .btn');
    const playerDisplay = document.querySelector('.player-display');
    const computerDisplay = document.querySelector('.computer-display');
    const hands = document.querySelectorAll('.display');

    hands.forEach(hand => [
        hand.addEventListener('animationend', () => {
            hand.style.animation = ''
        })
    ])

    //Score board
    let pScore = 0;
    let cScore = 0;


    optionBtn.forEach(button => {
        button.addEventListener('click', (e) => {
            const playerChoice = e.target.textContent;


            //get the random number
            const computerNumber = Math.floor(Math.random() * option.length)

            setTimeout(() => {

                playerDisplay.src = `./img/svg/${playerChoice}.svg`

                computerDisplay.src = `./img/svg/${option[computerNumber]}.svg`

                comparePlayer(playerChoice, option[computerNumber])

            }, 2000)

            playerDisplay.style.animation = `shakeHand 2s linear`;
            computerDisplay.style.animation = `shakeHand 2s linear`;
        })
        const comparePlayer = (player, computer) => {
            const winner = document.querySelector('.winner')
            if (player === computer) {
                winner.textContent = 'it is a tie';
                return;
            }
            if (player === 'rock') {
                if (computer === 'scissors') {
                    winner.textContent = 'You win!';
                    pScore++
                    updateScore()
                    return
                } else {
                    winner.textContent = 'Too easy human';
                    cScore++
                    updateScore()
                    return
                }
            }
            if (player === 'paper') {
                if (computer === 'scissors') {
                    winner.textContent = 'Haha Human';
                    cScore++
                    updateScore()
                    return
                } else {
                    winner.textContent = 'You win!';
                    pScore++
                    updateScore()
                    return
                }
            }
            if (player === 'scissors') {
                if (computer === 'rock') {
                    winner.textContent = 'u can\'t beat me, human';
                    cScore++
                    updateScore()
                    return
                } else {
                    winner.textContent = 'You win!';
                    pScore++
                    updateScore()
                    return
                }
            }

        }

        //update score
        const updateScore = () => {
            const playerScore = document.querySelector('.player-score');
            const computerScore = document.querySelector('.computer-score');
            playerScore.textContent = pScore;
            computerScore.textContent = cScore;
        }
    })



}
startGame()