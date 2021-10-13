var currentFloor =13;
    (function(currentFloor) 
    {
        setTimeout(function() 
        {
            console.log(currentFloor);
        }, (currentFloor--) * 1000);
    })(currentFloor)
