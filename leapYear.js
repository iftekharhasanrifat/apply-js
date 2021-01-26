function isLeapYear(year){
    if(((year%4==0)&&(year%100!=0)) || (year%400==0)){
        return true;
    }
    else{
        return false;
    }
}

const check2000 = isLeapYear(1700);
console.log(check2000);