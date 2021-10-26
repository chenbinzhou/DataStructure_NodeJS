const readline = require("readline-sync");

var row=6, col=6;    //雞蛋盒與雞蛋
// var aryBox=[[0,0,0,0,0,0],
//             [0,0,0,0,0,0],
//             [0,0,0,0,0,0],
//             [0,0,0,0,0,0],
//             [0,0,0,0,0,0],
//             [0,0,0,0,0,0]];
var aryBox=[];    //塑膠袋
var aryVisited=[]   //用過的雞蛋

do{
   var startR= parseInt(readline.question('Row start?'));      //選擇起點囉~~~  R是行 c是列
   var startC= parseInt(readline.question('Col start?'));
   if(isNaN(startR) || isNaN(startC) || startR<0 || startR>=row || startC<0 || startC>=col){ //判斷輸入起點的值合理嗎??????????????????????????????????
       console.log("Input error! ");
       continue;
   }

   for (let r = 0; r <row; r++) {    //一排6個雞蛋裡面隨便分配不同索引值  有6排   索引值0~5  
    aryBox.push([]);
    aryVisited.push([]);
    for (let c = 0; c < col; c++) {
        aryBox[r][c]=Math.floor(Math.random()*row)+","+Math.floor(Math.random()*col); //"r,c"
        aryVisited[r][c]=0;
    }
}

   var idx= aryBox[startR][startC].split(",");//idx[0]=>row idx[1]=>col  /下一步要到的位置
   aryVisited[startR][startC]=1;  //走過的地方變1
   console.log("Visit:"+ startR+", "+startC);
   var foot=0;//步數
   //loop
   while(true){
       var nextR = parseInt(idx[0]);  //下一步要走的行  
       var nextC = parseInt(idx[1]);  //下一步要走的列
       if(aryVisited[nextR][nextC]==1){  //走到重複的位置就gameover
           console.log("Game over!");
           console.log(foot)//顯示總共走了幾步
           break;
              }
        else      
       {
         var idx= aryBox[nextR][nextC].split(",");//idx[0]=>row idx[1]=>col 
         aryVisited[nextR][nextC]=1;      //沒有走到遊戲就繼續
         console.log("Visit:"+ nextR+", "+nextC);
         foot++;//步數＋1
         
       }
   }

}while(true)
//找出最長路徑的起點
//從0,0到5,5 都作為起點一次,找出走的步數最多者
