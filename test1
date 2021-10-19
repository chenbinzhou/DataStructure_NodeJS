var poker=[];
for(var i=0;i<52;i++){
    switch(parseInt(i/13)){
        case 0:
            poker.push("H"+(parseInt(i%13)+1));
            break;
        case 1:
            poker.push("S"+(parseInt(i%13)+1));
            break;
        case 2:
            poker.push("C"+(parseInt(i%13)+1));
            break;
        case 3:
            poker.push("D"+(parseInt(i%13)+1));
    }
   
}
console.log(poker.toString());
var player1=[], player2=[], player3=[],player4=[];

function compare(a,b){
        return Math.random()-0.5;
}
poker.sort(compare);
console.log(poker.toString()); 

//split every 13 card to player 1, 2, 3, 4

//發牌給玩家1
for(var x=0,y=0; y<13; x++){   
    player1[x]=poker[y++];}

    //玩家1手牌大小排序
    player1.sort(function(a, b){
        if(b.charCodeAt(0) == a.charCodeAt(0))
          
        {  return b.slice(1,b.length)-a.slice(1,a.length);}
    
        else{ return b.charCodeAt(0) - a.charCodeAt(0)
            }
    }
      );
    console.log("Player1:"+player1)

//發牌給玩家2
for(var x=0,y=13; y<26; x++){  
    player2[x]=poker[y++];}

    //玩家2手牌大小排序
    player2.sort(function(a, b){
        if(b.charCodeAt(0) == a.charCodeAt(0))
          
        {  return b.slice(1,b.length)-a.slice(1,a.length);}
    
        else{ return b.charCodeAt(0) - a.charCodeAt(0)
            }
    }
      );
    console.log("Player2:"+player2)

//發牌給玩家3
for(var x=0,y=26; y<39; x++){  
        player3[x]=poker[y++];}

        //玩家3手牌大小排序
    player1.sort(function(a, b){
        if(b.charCodeAt(0) == a.charCodeAt(0))
          
        {  return b.slice(1,b.length)-a.slice(1,a.length);}
    
        else{ return b.charCodeAt(0) - a.charCodeAt(0)
            }
    }
      );
        console.log("Player3:"+player3)
//發牌給玩家4
for(var x=0,y=39; y<52; x++){  
        player4[x]=poker[y++];}

        //玩家4手牌大小排序
    player1.sort(function(a, b){
        if(b.charCodeAt(0) == a.charCodeAt(0))
          
        {  return b.slice(1,b.length)-a.slice(1,a.length);}
    
        else{ return b.charCodeAt(0) - a.charCodeAt(0)
            }
    }
      );
        console.log("Player4:"+player4)