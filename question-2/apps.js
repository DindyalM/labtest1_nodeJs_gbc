var fs = require("fs")

var stream = fs.createReadStream('data.txt')
var stream2 = fs.createWriteStream("output.txt")

stream.on("data", function(data){
    console.log(data)
    var buf = Buffer.from(data)
    console.log(buf.toString())
})

stream.on('end',function(){
    console.log('write is complete');
});

var writedata= function(data){
    var buf = Buffer.from(data)
    stream2.write(buf)
    stream2.end();
}
writedata(stream);

