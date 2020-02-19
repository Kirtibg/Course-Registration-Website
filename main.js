const fs = require('fs');
var express=require('express')
var app=express();
app.set('view engine','pug');
app.set('views')
app.use(express.json());
const modules=require('./help_modules.js');
var session = require('express-session');



app.get('/home-page',function(req,res){
    res.render('home-page',{
         title:"Welcome "
    });
})

app.get('/add-course',function(req,res){
    res.render('add_course',{
         title:"Please fill the form to add a course"
    });
})


app.get('/student-registration',function(req,res){
    res.render('student-registration',{
        title:"Please fill the form to register",
     
         
    });
})

app.get('/student-login',function(req,res){
    res.render('student-login',{
         title:"Enter login details:"
    });
})



var bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(session({secret: 'uitisawesome',saveUninitialized:false,resave:true,httpOnly: true,
secure: true,
ephemeral: true}));

app.post('/post-course',function(req,res){
    res.render('home-page',{
    title:"Course has been successfully added",  
    });
    var data1=JSON.stringify(req.body)
    fs.appendFileSync('courses.txt', data1);
    fs.appendFileSync('courses.txt', "\n");
})



app.post('/post-registration',function(req,res){
    res.render('post-registration',{
        title:"You have successfully registered",  
    });
    var data1=JSON.stringify(req.body)
    fs.appendFileSync('students.txt', data1);
    fs.appendFileSync('students.txt', "\n");
})




app.post('/post-login',function(req,res){
    var data1=JSON.stringify(req.body)
    const promise=modules.get_data("./students.txt");
    
    promise.then((k)=>{
        if(modules.compare(k,data1)){
            data1=JSON.parse(data1)
            req.session.username=data1.Student_ID
            
            var scripts1=modules.get_data_student("./courses.txt",req.session.username);
           
            scripts1.then((k)=>{
               
                res.render('post-login',{
                    title:"Welcome " +req.session.username,
                    title2:" ",
                    Array_courses_available:k[0],
                    Array_courses_registered:k[1],
            })})
            scripts1.catch((err)=>console.log(err));
        }
        else{
            res.render('student-login',{
                title:"Wrong details!\n Try Again"
                
        }) 
    }});
    promise.catch((err)=>console.log(err));
})


app.post('/post-selection',function(req,res){
    var data1=JSON.stringify(req.body)
    modules.add(data1,req.session.username)
    var scripts1=modules.get_data_student("./courses.txt",req.session.username);
    scripts1.then((k)=>{
        res.render('post-login',{
            title:"Welcome " +req.session.username ,
            title2: "You have registered the course "+ req.body.Course_ID,
            Array_courses_available:k[0],
            Array_courses_registered:k[1],
    })})
    scripts1.catch((err)=>console.log(err));
    
  
     
})

app.get('/logout',function(req,res){
    
    req.session.destroy();

    res.render('home-page',{
         title:"Logged Out"
    });

})


app.listen(3000)