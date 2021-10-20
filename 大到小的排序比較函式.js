var poker=[];


for(var i=0;i<52;i++){
    switch(parseInt(i/13)){
        case 0:
            poker.push("H"+(parseInt(i%13)+1));//紅心
            
            break;
        case 1:
            poker.push("S"+(parseInt(i%13)+1));//黑桃
            break;
        case 2:
            poker.push("C"+(parseInt(i%13)+1));//梅花
            break;
        case 3:
            poker.push("D"+(parseInt(i%13)+1));//方塊
    }
   
}
 

//大到小的排序比較函式
function compare(a,b)
    {
    if(b.charCodeAt(0) == a.charCodeAt(0))//同花色 不同數字 大小排序  
    {  return b.slice(1,b.length)-a.slice(1,a.length);}

    else{ return b.charCodeAt(0) - a.charCodeAt(0)//不同花色排序 順序為黑桃,愛心,方塊,梅花 }
    ｝

console.log(poker.toString());
var player1=[], player2=[], player3=[],player4=[];

for (let i = 0; i < poker.length; ) {
    var rand = Math.floor(Math.random() * poker.length);
    
    player1.push(poker[rand]);
    poker.splice(rand,1);

    var rand = Math.floor(Math.random() * poker.length);
   
    player2.push(poker[rand]);
    poker.splice(rand,1);

    var rand = Math.floor(Math.random() * poker.length);
    
    player3.push(poker[rand]);
    poker.splice(rand,1);

    var rand = Math.floor(Math.random() * poker.length);
    
    player4.push(poker[rand]);
    poker.splice(rand,1);
    
}



console.log("Player1:"+player1)//玩家1排序前的手牌
player1.sort(compare);
console.log("Player1:"+player1)//玩家1排序後的手牌

console.log("Player2:"+player2)//玩家2排序前的手牌
player2.sort(compare)
console.log("Player2:"+player2)//玩家2排序後的手牌

console.log("Player3:"+player3)//玩家3排序前的手牌
player3.sort(compare)
console.log("Player3:"+player3)//玩家3排序後的手牌

console.log("Player4:"+player4)//玩家4排序前的手牌
player4.sort(compare)
console.log("Player4:"+player4)//玩家4排序後的手牌
