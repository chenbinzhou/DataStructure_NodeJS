const LIVE=1, DEAD=0; //活,死

class Life {
    constructor(_row,_col,){
        this.row = _row;
        this.col = _col;
        this.grid = new Array();
        //create 2d array
        for (let r = 0; r < this.row; r++) {
           this.grid.push(new Array());
           for (let c = 0; c < this.col; c++) {
               this.grid[r].push(DEAD);
           }
        }
        
    }
};
//初始化
Life.prototype.Initialize = function(){
    this.grid[0][0] = LIVE;
    this.grid[0][1] = LIVE;
    this.grid[0][2] = LIVE;
    this.grid[0][3] = LIVE;
    this.grid[5][6] = LIVE;
}
//取得狀態值
Life.prototype.getStatusAt = function(row, col){
    if(row<0 || col <0)
       return DEAD;
    if(row >= this.row || col >= this.col)  
       return DEAD;
    return this.grid[row][col];
}
//設定狀態值
    Life.prototype.setStatusAt = function(row, col,status){
        if(row<0 || col <0)
           return DEAD;
        if(row >= this.row || col >= this.col)  
           return DEAD;
        this.grid[row][col]=status;
           return true;
    }
//計算鄰居數量
Life.prototype.neighborCount = function(row, col){
    var count=0;
    count += this.getStatusAt(row-1, col-1);
    count += this.getStatusAt(row-1, col);
    count += this.getStatusAt(row-1, col+1);
    count += this.getStatusAt(row, col-1);
    count += this.getStatusAt(row, col+1);
    count += this.getStatusAt(row+1, col-1);
    count += this.getStatusAt(row+1, col);
    count += this.getStatusAt(row+1, col+1);
    return count;
}
//進化到下一世代
Life.prototype.update = function(){
    var nextGrid = JSON.parse(JSON.stringify(this.grid));

    for (let r = 0; r < this.row; r++) {
        for (let c = 0; c < this.col; c++) {
            var nCount = this.neighborCount(r, c);//鄰居數量

            if(nCount == 3) //鄰居個數＝3 DEAD > LIVE , LIVE > LIVE
               nextGrid[r][c] = LIVE;

            else if(nCount <=1 ) //鄰居個數<=1 太孤單 >DEAD
               nextGrid[r][c] = DEAD;

            else if(nCount >=4 ) //鄰居個數>=4 太擠 >DEAD
               nextGrid[r][c] = DEAD;
        }
    }
    this.grid = nextGrid;

}

//unit test
var game = new Life(10,10);//設置生存空間大小

game.Initialize();//初始化
game.setStatusAt(1,0,LIVE);//設定某一點狀態 DEAD,LIVE
game.setStatusAt(1,1,LIVE);
game.setStatusAt(1,2,LIVE);
game.setStatusAt(1,3,LIVE);
game.setStatusAt(5,6,DEAD);

console.log("初始世代:"+JSON.stringify(game))

game.update();//進化到下一世代

console.log("下一世代:"+JSON.stringify(game))