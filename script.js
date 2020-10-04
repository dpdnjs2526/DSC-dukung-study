var list = document.getElementById('list');
var button = document.getElementById('button');
var input = document.getElementById('input');

var count = 1;

button.addEventListener('click', clickButton);


const clockContainer = document.querySelector(".js-clock"), 
    clockTitle = clockContainer.querySelector("h1");

function dgt(base) { 
    return (base > 9 ? base : `0${base}`) 
}

/* getTime 시계를 보여주는 현주 모듈의 메인 함수 */

function getTime() { 
    const date = new Date(); 
    const minutes = date.getMinutes(); 
    const hours = date.getHours(); 
    const seconds = date.getSeconds(); 
    clockTitle.innerText = `${dgt(hours)}:${dgt(minutes)}:${dgt(seconds)}`; 
}
/* 초단위로 시간을 계속 호출 */
function init(){
    setInterval(getTime, 1000);
}
init();





function clickButton(){
    var li = document.createElement('li');

    li.setAttribute("class", "list-group");
    li.setAttribute("id", "li"+count);
 
    li.innerHTML = input.value;  //input을 입력하면 innerHTML이 li에 넣어주겠다.
    li.innerHTML += "<button style = 'float: right; clear: both;' class='btn btn-ouyline-secondary' type='button' onclick = 'remove("+count+")'> 삭제 </button>"

    list.appendChild(li);
   
    input.value = ""
   
    count = count + 1;  //count++;

}

function remove(count){
    var li = document.getElementById("li" + count);
    list.removeChild(li);
}