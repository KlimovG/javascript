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

let expences1 = prompt("Введите обязательную статью расходов в этом месяце?", 
"Бензин");
let expences2 = prompt("Во сколько обойдется?", "10000");
let expences3 = prompt("Введите обязательную статью расходов в этом месяце?", 
" Еда");
let expences4 = prompt("Во сколько обойдется?", "20000");

appData.expences.expences1 = expences2;
appData.expences.expences3 = expences4;

alert(appData.moneyData/30);