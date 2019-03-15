//chiraj shetty mini projects
//course registration system 


//require  express 
var express = require('express')
var app = express();

// intialize the database  
var regno = ["chiraj"];
var password = ["chiraj"];
var courses = ["HTML","JAVA","JS"];
var database = [];
var user ="";
 
// pug files 
app.set('views','./view');
app.set('view engine','pug');
app.use(express.urlencoded({extended:true}));


// get to the login page
app.get("/",function(req,res){    
    res.render("login");
});

// post to login
app.post("/login",function(req,res){    
    if(regno.indexOf(req.body['Name'])!=-1){
        if(req.body['Password']==password[regno.indexOf(req.body['Name'])]){
        user=req.body['Name'];
        res.redirect("/student");
    }
    }
    else{
    res.render("login");
    }
});

// MOVE TO THE STUDENT PORTAL
app.get("/student",function(req,res){
    res.render("student",{name:user,courses:courses[regno.indexOf(user)]});
})

// adding courses

app.post("/add",function(req,res){
    res.render("add");
}); 

app.get("/add",function(req,res){
    let avail=[];
    let i=0;
    for(i=0;i<courses.length;i++){
        if(database[regno.indexOf(user)].indexOf(courses[i])==-1)
        {
            avail.push(courses[i]);
        }
    }
    res.render("add",{courses:avail});;
});


// DELETE COURSE 

app.post("/delete",function(req,res){
    res.render("delete",{joined:database[regno.indexOf(user)]});;
});


app.listen(3000);
