"use strict";

let money = prompt("Ваш бюджет на месяц?", "50000");
let time = prompt("Введите дату в формате YYYY-MM-DD", "1991-04-02");
    
var appData = {
    moneyData       : money,
    timeData        : time,
    expences        : {},
    optionalExpences: {},
    incomeData      : [],
    savings         : false
};

let exp1 = prompt("Введите обязательную статью расходов в этом месяце?", 
"Бензин");
let exp2 = prompt("Во сколько обойдется?", "10000");
let exp3 = prompt("Введите обязательную статью расходов в этом месяце?", 
" Еда");
let exp4 = prompt("Во сколько обойдется?", "20000");

appData.expences.exp1 = exp2;
appData.expences.exp3 = exp4;

alert(appData.moneyData/30);