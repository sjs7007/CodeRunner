var querystring=require("querystring"),fs=require("fs"),formidable=require("formidable"),exec=require("child_process").exec;

function start(response)
{
	console.log("Request handler 'start' was called.");

	fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    response.writeHead(200, {"Content-Type": "text/html"});  
    response.write(html);  
    response.end();  
    });
}
	

function uploadJava(response,request)
{
	console.log("Request handler 'uploadJava' was called.");
	var form = new formidable.IncomingForm();
	console.log("about to parse.");

	var ip=request.connection.remoteAddress;
	var path="/tmp/"+ip;
	var path2="."+path+"/test.java";
	var path3=path+"/test.java";
	var command0="mkdir "+path;
	var command1="cp *.java /tmp "+path;
	//var command="cd /tmp;python test.py";
	//var command2="cd "+path+";"+"pwd;ls; python test.py";
	var command2="cd "+path+";"+"javac test.java;java test";

	exec(command0,
				function (error,stdout,stderr)
				{

				});

	form.parse(request,function(error,fields,files)
			{
				console.log("parsing done.");
				console.log("File name : "+files.upload.path);
				//fs.rename(files.upload.path,"./tmp/test.py",function(error)
					fs.rename(files.upload.path,path2,function(error)
					{
						if(error)
						{
							//fs.unlink("/tmp/test.py");
							//fs.rename(files.upload.path,"/tmp/test.py");
							fs.unlink(path3);
							fs.rename(files.upload.path,path3);
						}
					});
				
				exec(command1,
				function (error,stdout,stderr)
				{
				});

				exec(command2,
				function (error,stdout,stderr)
				{
					response.writeHead(200,{"Content-Type":"text/plain"});
					response.write("Connected from ip address : "+ip+"\n \n");
					response.write("Output from code : \n");
					response.write(stdout);
					response.write(stderr);
					response.end();
				});
			});
}



function uploadC(response,request)
{
	console.log("Request handler 'uploadC' was called.");
	var form = new formidable.IncomingForm();
	console.log("about to parse.");

	var ip=request.connection.remoteAddress;
	var path="/tmp/"+ip;
	var path2="."+path+"/test.c";
	var path3=path+"/test.c";
	var command0="mkdir "+path;
	var command1="cp *.c /tmp "+path;
	//var command="cd /tmp;python test.py";
	//var command2="cd "+path+";"+"pwd;ls; python test.py";
	var command2="cd "+path+";"+"gcc test.c; ./a.out";

	exec(command0,
				function (error,stdout,stderr)
				{

				});

	form.parse(request,function(error,fields,files)
			{
				console.log("parsing done.");
				console.log("File name : "+files.upload.path);
				//fs.rename(files.upload.path,"./tmp/test.py",function(error)
					fs.rename(files.upload.path,path2,function(error)
					{
						if(error)
						{
							//fs.unlink("/tmp/test.py");
							//fs.rename(files.upload.path,"/tmp/test.py");
							fs.unlink(path3);
							fs.rename(files.upload.path,path3);
						}
					});
				
				exec(command1,
				function (error,stdout,stderr)
				{
				});

				exec(command2,
				function (error,stdout,stderr)
				{
					response.writeHead(200,{"Content-Type":"text/plain"});
					response.write("Connected from ip address : "+ip+"\n \n");
					response.write("Output from code : \n");
					response.write(stdout);
					response.write(stderr);
					response.end();
				});
			});
}


function uploadPython(response,request)
{
	console.log("Request handler 'uploadPython' was called.");
	var form = new formidable.IncomingForm();
	console.log("about to parse.");

	var ip=request.connection.remoteAddress;
	var path="/tmp/"+ip;
	var path2="."+path+"/test.py";
	var path3=path+"/test.py";
	var command0="mkdir "+path;
	var command1="cp *.py /tmp "+path;
	//var command="cd /tmp;python test.py";
	//var command2="cd "+path+";"+"pwd;ls; python test.py";
	var command2="cd "+path+";"+"python test.py";

	exec(command0,
				function (error,stdout,stderr)
				{

				});

	form.parse(request,function(error,fields,files)
			{
				console.log("parsing done.");
				console.log("File name : "+files.upload.path);
				//fs.rename(files.upload.path,"./tmp/test.py",function(error)
					fs.rename(files.upload.path,path2,function(error)
					{
						if(error)
						{
							//fs.unlink("/tmp/test.py");
							//fs.rename(files.upload.path,"/tmp/test.py");
							fs.unlink(path3);
							fs.rename(files.upload.path,path3);
						}
					});
				
				exec(command1,
				function (error,stdout,stderr)
				{
				});

				exec(command2,
				function (error,stdout,stderr)
				{
					response.writeHead(200,{"Content-Type":"text/plain"});
					response.write("Connected from ip address : "+ip+"\n \n");
					response.write("Output from code : \n");
					response.write(stdout);
					response.write(stderr);
					response.end();
				});
			});
}

function uploadCPP(response,request)
{
	console.log("Request handler 'uploadCPP' was called.");
	var form = new formidable.IncomingForm();
	console.log("about to parse.");

	var ip=request.connection.remoteAddress;
	var path="/tmp/"+ip;
	var path2="."+path+"/test.cpp";
	var path3=path+"/test.cpp";
	var command0="mkdir "+path;
	var command1="cp *.cpp /tmp "+path;
	//var command="cd /tmp;python test.py";
	//var command2="cd "+path+";"+"pwd;ls; python test.py";
	var command2="cd "+path+";"+"g++ test.cpp ; ./a.out";

	exec(command0,
				function (error,stdout,stderr)
				{

				});

	form.parse(request,function(error,fields,files)
			{
				console.log("parsing done.");
				console.log("File name : "+files.upload.path);
				//fs.rename(files.upload.path,"./tmp/test.py",function(error)
					fs.rename(files.upload.path,path2,function(error)
					{
						if(error)
						{
							//fs.unlink("/tmp/test.py");
							//fs.rename(files.upload.path,"/tmp/test.py");
							fs.unlink(path3);
							fs.rename(files.upload.path,path3);
						}
					});
				
				exec(command1,
				function (error,stdout,stderr)
				{
				});

				exec(command2,
				function (error,stdout,stderr)
				{
					response.writeHead(200,{"Content-Type":"text/plain"});
					response.write("Connected from ip address : "+ip+"\n \n");
					response.write("Output from code : \n");
					response.write(stdout);
					response.write(stderr);
					response.end();
				});
			});
}

function uploadBash(response,request)
{
	console.log("Request handler 'uploadBash' was called.");
	var form = new formidable.IncomingForm();
	console.log("about to parse.");

	var ip=request.connection.remoteAddress;
	var path="/tmp/"+ip;
	var path2="."+path+"/test.sh";
	var path3=path+"/test.sh";
	var command0="mkdir "+path;
	var command1="cp *.sh /tmp "+path;
	//var command="cd /tmp;python test.py";
	//var command2="cd "+path+";"+"pwd;ls; python test.py";
	var command2="cd "+path+";"+"bash test.sh";

	exec(command0,
				function (error,stdout,stderr)
				{

				});

	form.parse(request,function(error,fields,files)
			{
				console.log("parsing done.");
				console.log("File name : "+files.upload.path);
				//fs.rename(files.upload.path,"./tmp/test.py",function(error)
					fs.rename(files.upload.path,path2,function(error)
					{
						if(error)
						{
							//fs.unlink("/tmp/test.py");
							//fs.rename(files.upload.path,"/tmp/test.py");
							fs.unlink(path3);
							fs.rename(files.upload.path,path3);
						}
					});
				
				exec(command1,
				function (error,stdout,stderr)
				{
				});

				exec(command2,
				function (error,stdout,stderr)
				{
					response.writeHead(200,{"Content-Type":"text/plain"});
					response.write("Connected from ip address : "+ip+"\n \n");
					response.write("Output from code : \n");
					response.write(stdout);
					response.write(stderr);
					response.end();
				});
			});
}


exports.start=start;
exports.uploadJava=uploadJava;
exports.uploadC=uploadC;
exports.uploadPython=uploadPython;
exports.uploadCPP=uploadCPP;
exports.uploadBash=uploadBash;