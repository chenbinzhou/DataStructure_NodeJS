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
var footRange=[]   //步數紀錄
//找出最長路徑的起點
//從0,0到5,5都當作起點試一次
//走最多步者即是最長路徑的起點
   for(i=0;i<6;i++){ 
       for(k=0;k<6;k++){
           

        for (let r = 0; r <row; r++) {    //一排6個裡面隨便分配不同索引值   有6排  索引值0~5  
            aryBox.push([]);
            aryVisited.push([]);
            for (let c = 0; c < col; c++) {
                aryBox[r][c]=Math.floor(Math.random()*row)+","+Math.floor(Math.random()*col); //"r,c"
                aryVisited[r][c]=0;
            }
        }
   var startR=i;
   var startC=k;
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
           console.log("總共走了"+foot+"步")//顯示總共走了幾步
           footRange.push(foot);
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
}
   }
   //步數紀錄
   console.log(footRange.toString());
   //找出最高的步數
   Array.max = function( array ){
    return Math.max.apply( Math, array );
    };
    console.log("最高步數為"+Array.max(footRange)); 
    var x;
    x=(footRange.indexOf(Array.max(footRange)));//取得最高步數後回推起點
    console.log("最長路徑的起點為：["+Math.floor(x/6)+","+(x%6+"]"));
  