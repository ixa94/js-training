 //1

const p = document.createElement('p');
p.className = "text";
p.innerHTML = "Это всего лишь текст";
document.body.prepend(p);
const div = document.createElement('div');
div.className = 'alert'
 div.textContent = 'это сообщение об ошибке';
p.appendChild(div);
div.style.background = 'red';
div.style.padding = '20px';



//2


 const ol = document.createElement('ol')
 p.appendChild(ol);
 const arr = ["Viktor", "Tatiana", "Eduard", "Michael", "Denis", "Peter", "Ann", "Dmitry",
     "Sergey", "Ivan", "Alan"];
 for (let i = 0;i <= arr.length; i++){
     let li = document.createElement('li');
     li.innerHTML = arr[i];

     // for (let j = 1; j <= arr[i].length; j++){
     //     if (j === i){
     //         li.style.color = 'white;'
     //     }
     // }
     if ([i] % 2 === 0){

         ol.appendChild(li);
         li.className = 'even';
         li.style.background = 'green';

     }
     else {
         ol.appendChild(li);
         li.className = 'odd';
         li.style.background = 'blue';
     }


 }

 //3




function showMessage(text,color,top,left) {
const divs = document.createElement('div');
divs.className = 'message';
divs.innerHTML = text;
divs.style.background = color;
divs.style.top = `${top}px`;
divs.style.left = `${left}px`;
    document.body.append(divs);
}

 showMessage('privet','blue',100,50);