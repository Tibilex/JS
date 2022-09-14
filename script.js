
alert("Введите день и месяц рождения мужчины");
let day = parseInt(prompt("День"));
let month = parseInt(prompt("Месяц"));

let compatibility = [["91%", "72%", "83%", "91%", "99%", "71%", "82%", "72%", "84%", "82%", "100%", "85%"],
["81%", "87%", "73%", "93%", "91%", "69%", "93%", "60%", "72%", "86%", "82%", "82%"],
["72%", "73%", "84%", "77%", "68%", "75%", "93%", "58%", "100%", "71%", "93%", "81%"],
["81%", "83%", "67%", "83%", "71%", "81%", "78%", "89%", "71%", "82%", "66%", "83%"],
["97%", "88%", "81%", "82%", "87%", "73%", "89%", "92%", "100%", "83%", "92%", "95%"],
["84%", "92%", "93%", "84%", "86%", "75%", "85%", "76%", "82%", "85%", "67%", "100%"],
["83%", "92%", "89%", "94%", "79%", "74%", "91%", "77%", "92%", "81%", "100%", "100%"],
["76%", "98%", "93%", "91%", "98%", "98%", "64%", "94%", "100%", "100%", "89%", "100%"],
["92%", "81%", "98%", "82%", "90%", "72%", "88%", "92%", "100%", "93%", "100%", "74%"],
["82%", "89%", "82%", "96%", "76%", "61%", "92%", "100%", "79%", "84%", "92%", "93%"],
["82%", "83%", "93%", "84%", "97%", "72%", "96%", "88%", "100%", "82%", "77%", "93%"],
["87%", "91%", "82%", "90%", "83%", "67%", "81%", "97%", "71%", "67%", "100%", "100%"]];

let men, woman;

if(month > 12 || day > 31) man = 12;
else if(month === 3 && day >= 21 || month === 4 && day <= 19) man = 0; 
else if(month === 4 && day >= 20 || month === 5 && day <= 20) man = 1; 
else if(month === 5 && day >= 21 || month === 6 && day <= 20) man = 2; 
else if(month === 6 && day >= 21 || month === 7 && day <= 22) man = 3; 
else if(month === 7 && day >= 23 || month === 8 && day <= 22) man = 4; 
else if(month === 8 && day >= 23 || month === 9 && day <= 22) man = 5; 
else if(month === 9 && day >= 23 || month === 10 && day <= 22) man = 6; 
else if(month === 10 && day >= 23 || month === 21 && day <= 18) man = 7; 
else if(month === 11 && day >= 22 || month === 12 && day <= 21) man = 8; 
else if(month === 12 && day >= 22 || month === 1 && day <= 19) man = 9; 
else if(month === 1 && day >= 20 || month === 2 && day <= 18) man = 10; 
else if(month === 2 && day >= 19 || month === 3 && day <= 20) man = 11; 
else man = 12;

alert("Введите день и месяц рождения женщины");
day = parseInt(prompt('День'));
month = parseInt(prompt('Месяц'));
if(month > 12 || month <= 0 || day > 31 || day <= 0) woman = 12;
else if(month === 3 && day >= 21 || month === 4 && day <= 19) woman = 0; 
else if(month === 4 && day >= 20 || month === 5 && day <= 20) woman = 1; 
else if(month === 5 && day >= 21 || month === 6 && day <= 20) woman = 2; 
else if(month === 6 && day >= 21 || month === 7 && day <= 22) woman = 3; 
else if(month === 7 && day >= 23 || month === 8 && day <= 22) woman = 4; 
else if(month === 8 && day >= 23 || month === 9 && day <= 22) woman = 5; 
else if(month === 9 && day >= 23 || month === 10 && day <= 22) woman = 6; 
else if(month === 10 && day >= 23 || month === 21 && day <= 18) woman = 7; 
else if(month === 11 && day >= 22 || month === 12 && day <= 21) woman = 8; 
else if(month === 12 && day >= 22 || month === 1 && day <= 19) woman = 9; 
else if(month === 1 && day >= 20 || month === 2 && day <= 18) woman = 10; 
else if(month === 2 && day >= 19 || month === 3 && day <= 20) woman = 11; 
else woman = 12;

if(man === 12 || woman === 12) alert("Ошибка!");
else  alert(`Вы совместимы на ${compatibility[man][woman]}`);