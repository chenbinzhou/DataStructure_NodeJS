var floorName=["B3","B2","B1","1","2","2M","3","5","6","7","8"]
var floorName2=[];
for(var i=0,k=9;i<=50,k<=50;i++){

    floorName2[i]=k++;

};
    


Array.prototype.push.apply(floorName, floorName2);

console.log(floorName); 