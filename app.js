const selectMe = document.querySelector('.game')
const gameR = document.querySelector('.game_selected')
const youPick = document.querySelectorAll('.game_selected .g_p1 div');
const pcPick = document.querySelectorAll('.game_selected .g_p2 div');
let res = document.querySelectorAll('.game_selected .g_w_l p');
const btn = document.querySelector('.game_selected .g_w_l button')

const rock = document.getElementById('rock')
const scissors = document.getElementById('scissors')
const paper = document.getElementById('paper')

const cir_p1 = document.querySelector('.game_selected .circles')
const cir_p2 = document.querySelector('.game_selected .circles2')


document.getElementById('next').style.display = 'none'


function rules() {
    const rules = document.getElementById('btn_rule');

    rules.addEventListener('click', (e) => {

        if (e) {
            document.querySelector('.rules .rule_box').style.display = 'block'
        } else {
            document.querySelector('.rules .rule_box').style.display = 'none'

        }

    })

    document.querySelector('.rules .rule_box .close').onclick = () => {
        document.querySelector('.rules .rule_box').style.display = 'none'

    }

}
rules();
document.getElementById('next').onclick = ()=>{
    window.location.href = 'hurray.html'
}

if(localStorage.getItem('player1')){
    document.getElementById('p1').innerText = localStorage.getItem('player1')

}else{
    document.getElementById('p1').innerText = '0'
}

if(localStorage.getItem('player2')){
    document.getElementById('p2').innerText = localStorage.getItem('player2')

}else{
    document.getElementById('p2').innerText = '0'
}

// document.getElementById('p2').innerText = localStorage.getItem('player2')



rock.addEventListener('click', () => {
    console.log('rock')
    selectMe.style.display = 'none'
    gameR.style.display = 'flex'
    youPick[0].style.display = 'flex'
    youPick[1].style.display = 'none'
    youPick[2].style.display = 'none'

    let pc = Math.floor(Math.random() * 3 + 1)

    pcPick[pc - 1].style.display = 'flex'

    if (pc - 1 === 0) {
        console.log('tie up')
        res[0].innerText = 'tie up';
        res[1].style.display = 'none'
        btn.innerText = 'replay';


    } else if (pc - 1 === 1) {
        console.log('you lost')
        res[0].innerText = 'you lost';
        cir_p2.style.display = 'flex'

        localStorage.setItem('player2',JSON.stringify(JSON.parse(localStorage.getItem('player2'))+1))
    document.getElementById('p2').innerText = localStorage.getItem('player2')
        

    } else if (pc - 1 === 2) {
        console.log('you won')
        res[0].innerText = 'you win';
        cir_p1.style.display = 'flex';
        // JSON.parse(localStorage.getItem('player1'))+1
        localStorage.setItem('player1',JSON.stringify(JSON.parse(localStorage.getItem('player1'))+1))
    document.getElementById('p1').innerText = localStorage.getItem('player1')
document.getElementById('next').style.display = 'block'
       


    }else{
        console.log('Game error 404')
    }



})


paper.addEventListener('click', () => {
    console.log('paper')

    selectMe.style.display = 'none'
    gameR.style.display = 'flex'
    youPick[0].style.display = 'none'
    youPick[1].style.display = 'flex'
    youPick[2].style.display = 'none'


    let pc = Math.floor(Math.random() * 3 + 1)
    console.log(pc)

    pcPick[pc - 1].style.display = 'flex'

    if (pc - 1 === 0) {

        
        console.log('you won')
        res[0].innerText = 'you win';
        cir_p1.style.display = 'flex'
        localStorage.setItem('player1',JSON.stringify(JSON.parse(localStorage.getItem('player1'))+1))

    document.getElementById('p1').innerText = localStorage.getItem('player1')
document.getElementById('next').style.display = 'block'
        


    } else if (pc - 1 === 1) {

        
        console.log('tie up')
        res[0].innerText = 'tie up';
        res[1].style.display = 'none'
        btn.innerText = 'replay';
        

    } else if (pc - 1 === 2) {

        
        console.log('you lost')
        res[0].innerText = 'you lost';
        cir_p2.style.display = 'flex';

        localStorage.setItem('player2',JSON.stringify(JSON.parse(localStorage.getItem('player2'))+1))
    document.getElementById('p2').innerText = localStorage.getItem('player2')
       


    }else{
        console.log('Game error 404')
    }


})


scissors.addEventListener('click', () => {
    console.log('scissors')

    selectMe.style.display = 'none'
    gameR.style.display = 'flex'
    youPick[0].style.display = 'none'
    youPick[1].style.display = 'none'
    youPick[2].style.display = 'flex'


    let pc = Math.floor(Math.random() * 3 + 1)
    console.log(pc)

    pcPick[pc - 1].style.display = 'flex'

    if (pc - 1 === 0) {

        
        console.log('you lost')
        res[0].innerText = 'you lost';
        cir_p2.style.display = 'flex'
        localStorage.setItem('player2',JSON.stringify(JSON.parse(localStorage.getItem('player2'))+1))
        
    document.getElementById('p2').innerText = localStorage.getItem('player2')
        


    } else if (pc - 1 === 1) {

        
        console.log('you won')
        res[0].innerText = 'you win';
        cir_p1.style.display = 'flex'
        localStorage.setItem('player1',JSON.stringify(JSON.parse(localStorage.getItem('player1'))+1))

    document.getElementById('p1').innerText = localStorage.getItem('player1')
        
document.getElementById('next').style.display = 'block'
        

    } else if (pc - 1 === 2) {


        
        console.log('tie up')
        res[0].innerText = 'tie up';
        res[1].style.display = 'none'
        btn.innerText = 'replay';


    }else{
        console.log('Game error 404')
    }



})


btn.onclick = ()=>{
    window.location.reload();
}
