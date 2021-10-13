const readline = require('readline-sync');

var top=50;
var bottom=1;
var currentFloor = 5; 
var floorName=["B3","B2","B1","1","2","2M","3","5","6","7","8"]
var targetFloor;

var floorName2=[];    // 2 假設大樓50層樓,8樓以後都是照順序規律的,用程式建立floorName 樓層名稱 homework,
for(var i=0,k=9;i<=50,k<=50;i++)
{
    floorName2[i]=k++;

};

Array.prototype.push.apply(floorName, floorName2);
console.log(floorName);

while(true){ //無窮迴圈
    //輸入欲達樓層
    targetFloor = readline.question('目前在'+currentFloor+'樓。請問要去那一層樓?');
    //判斷樓層是否合理
    targetFloor = parseInt(targetFloor); //轉成整數
    if(isNaN(targetFloor) || targetFloor<bottom || targetFloor>top){
       console.log("請輸入介於"+bottom+"到"+top+"之間的整數!");
       continue;
    }
    if(targetFloor==currentFloor){
        console.log("離開電梯");
        break;
    }else{
     //移動電梯至欲達樓層
     //currentFloor 移到 targetFloor
if(targetFloor<currentFloor){ //down
    console.log("電梯往下...");
    while(targetFloor < currentFloor){
        currentFloor = currentFloor - 1;
        // currentFloor -= 1;
        // currentFloor--;
        console.log("電梯在"+currentFloor+"樓");
    }
    
 }else{//up
    console.log("電梯往上...");
    while(targetFloor > currentFloor){
        currentFloor = currentFloor + 1;
        // currentFloor += 1;
        // currentFloor++;
        console.log("電梯在"+currentFloor+"樓");
    }
 }
}
}