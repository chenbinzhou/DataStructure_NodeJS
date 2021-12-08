const readline = require('readline-sync');
//var top=100; //index value
//var bottom=0;

var floorName=["B3","B2","B1","1","2","2M","3","5","6","7","8"]

var floorName2=[];    // 2 假設大樓50層樓,8樓以後都是照順序規律的,用程式建立floorName 樓層名稱 homework,
for(var i=0,k=9;i<=50,k<=50;i++)
{
    floorName2[i]=k+++ "";
     
};
Array.prototype.push.apply(floorName,floorName2 );//合併兩個陣列
console.log(floorName);



// 1 秀出所有樓層名稱, sol->呼叫陣列提供的toString()

// 3 讓 JS 暫停一段時間後續行 homework#2

var currentFloor = 5; //index value of floorName
var targetFloor; //B2 -> index:1

while(true){ //無窮迴圈
    //輸入欲達樓層
    targetFloor = readline.question('目前在'+floorName[currentFloor]+'樓。請問要去那一層樓?');
    //判斷樓層是否合理
    //從floorName.indexOf()取出索引值，若為-1代表無此樓層
    targetFloor = targetFloor.toUpperCase();
    targetFloor = floorName.indexOf(targetFloor); //轉成整數
     if(targetFloor<0 && targetFloor<bottom && targetFloor>top||isNaN(targetFloor)){
       console.log("請輸入介於"+floorName.toString()+"之間的樓層名稱!");
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
        //改用 for(初始值; 條件判斷; 累加減){}
        while(targetFloor < currentFloor)
        {
            function Dealy1(sec){
                var start = new Date().getTime();
                var now = 0;
                while(start + sec > now){
                    now = new Date().getTime();
                };
            }
            Dealy1(3000);
            console.log("Dealy1");
             currentFloor--;
           console.log("電梯在"+floorName[currentFloor]+"樓");
        }
        
     }else{//up
        console.log("電梯往上...");
        //while(targetFloor > currentFloor){
        do{    
            function Dealy1(sec){
                var start = new Date().getTime();
                var now = 0;
                while(start + sec > now){
                    now = new Date().getTime();
                };
            }
            Dealy1(3000);
            console.log("Dealy1");
            currentFloor = currentFloor + 1;
            // currentFloor += 1;
            // currentFloor++;
            console.log("電梯在"+floorName[currentFloor]+"樓");
            
        }while(targetFloor > currentFloor);
     }
    }
}
