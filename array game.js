const readline = require("readline-sync");

var row=6, col=6;    //行列
// var aryBox=[[0,0,0,0,0,0],
//             [0,0,0,0,0,0],
//             [0,0,0,0,0,0],
//             [0,0,0,0,0,0],
//             [0,0,0,0,0,0],
//             [0,0,0,0,0,0]];
var aryBox=[];    
var aryVisited=[]   //走過的

do{
   var startR= parseInt(readline.question('Row start?'));      //選擇起點  R是行 c是列
   var startC= parseInt(readline.question('Col start?'));
   if(isNaN(startR) || isNaN(startC) || startR<0 || startR>=row || startC<0 || startC>=col){ //判斷輸入起點的值合理嗎??????????????????????????????????
       console.log("Input error! ");
       continue;
   }
//每次遊戲開始前陣列初始化，重新分配索引值
   for (let r = 0; r <row; r++) {    //一排6個裡面隨便分配不同索引值  有6排   索引值0~5  
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
   var foot=0;//紀錄走的步數
   //loop
   while(true){
       var nextR = parseInt(idx[0]);  //下一步要走的行  
       var nextC = parseInt(idx[1]);  //下一步要走的列
       if(aryVisited[nextR][nextC]==1){  //走到重複的位置就gameover
           console.log("Game over!");//遊戲結束
           console.log("總共走了："+foot+"步");//顯示總共走了幾步
           break;
              }
        else      
       {
         var idx= aryBox[nextR][nextC].split(",");//idx[0]=>row idx[1]=>col 
         aryVisited[nextR][nextC]=1;      //沒有走到重複的遊戲就繼續
         console.log("Visit:"+ nextR+", "+nextC);
         foot++;//步數＋1
         
       }
   }

}while(true)
