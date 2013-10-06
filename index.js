var router=require("./router");
var server=require("./server");
var requestHandlers=require("./requestHandlers");

var handle={};
handle["/"]=requestHandlers.start;
handle["/start"]=requestHandlers.start;
handle["/uploadJava"]=requestHandlers.uploadJava;
handle["/uploadC"]=requestHandlers.uploadC;
handle["/uploadPython"]=requestHandlers.uploadPython;
handle["/uploadCPP"]=requestHandlers.uploadCPP;
handle["/uploadBash"]=requestHandlers.uploadBash;

server.start(router.route,handle);
