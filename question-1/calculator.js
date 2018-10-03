module.exports =  {


    Multiply: function (x ,y) {
        if(isNaN(x) || isNaN(y)){
            return console.error("these are not intergers");
        }

        return x * y;
    },
    
    evenDoubler: function (x) {
        
        if(isNaN(x)){
            return console.error("these are not intergers");
        }
        if(x % 2 == 0){
            return x*x;
        }
        if(x % 2 == 1){
            return 0
        }
    },


}