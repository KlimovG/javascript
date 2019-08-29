"use strict";

let money = +prompt("Ваш бюджет на месяц?", "50000");
let time = prompt("Введите дату в формате YYYY-MM-DD", "1991-04-02");
    
var appData = {
    moneyData       : money,
    timeData        : time,
    expences        : {},
    optionalExpences: {},
    incomeData      : [],
    savings         : false
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце?", 
"Бензин"),
        b = prompt("Во сколько обойдется?", "10000");
    
    if ((typeof(a))=== "string" && (typeof(a)) != null && (typeof(b)) != null
        && a != "" && b != "" && a.length < 50) {
        console.log("done");
        appData.expences[a] = b;
    } else {
        i--;
    }
}

appData.moneyPerDay = appData.moneyData /30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log("А чё так мало?");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Ну такое...");
} else if (appData.moneyPerDay > 2000) {
    console.log("Можешь купить дошик :)");
} else {
    console.log("Чё-то я приуныл");
}

