const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
//정해진 시간동안 게임을 할 수 있도록
let timeUp = false;
let score = 0;
//두더지가 몇초동안 올라올건지

function randTime(min, max) {
    return Math.round(Math.random() * (max-min) + min);
}
//두더지가 몇번째 구멍에
function randHole(holes) {
    const randIndex = Math.floor(Math.random() * holes.length);
    const hole = holes[randIndex]; //hole에 번호 붙여줌
    if(hole === lastHole){ //이전 hole과 같은 hole이 뽑혔을 때 다시 랜덤함수를 돌릴려고
        return randHole(holes);
 }

    lastHole = hole;
    return hole;
}
//두더지가 튀어나오는 경우
function peep() {
    const time = randTime(1000,2000);
    const hole = randHole(holes); //holes.length 여부를 알아야하기 때문에 
    hole.classList.add('up');
//setTimeout (()=>{}, time) -> time동안 함수 실행하는 코드
    setTimeout(() => {
        hole.classList.remove('up');
        if(!timeUp) { //게임이 끝나지 않았다면 if문에 들어가서 peep을 실행하라는 코드
            peep();
        }
    }, time);
}
//화면에 있는 시작버튼에 관련된 함수
function startGame() {
    scoreBoard.textContent = 0;
    score = 0;
 //timeUp false는 0초부터 라서
    timeUp = false;
 //시작되면 두더지가 튀어나와야하기 때문에 peep함수 호출
    peep();
//시간은 개인적으로 정해주면 된다
    setTimeout(() => timeUp = true, 10000);
}
//게임도중 클리했을 때 점수가 올라가야 하기 때문에 점수와 관련된 함수
function bonk(e) {
    if (!e.isTrusted) return; //isTrusted is a property that tells whether mouse event is fake or not
    //두더지가 올라온 것을 제어함
    this.classList.remove('up');
    score++;
    scoreBoard.textContent = score;
  //현재 스코어로 점수가 업데이트 된다
}
//6개의 구멍의 6개 구멍에 이벤트 리스너를 달아주 for문
moles.forEach(mole => mole.addEventListener('click', bonk));