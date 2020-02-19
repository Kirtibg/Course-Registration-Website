//helping modules
const fs = require('fs');



//function to get student data from txt file
function get_data_student(filename,Student_ID){
    const promise=new Promise((resolve,reject)=>{
      var k=[]
      var k1=[]
      
    
      fs.access(filename, fs.F_OK, (err) => {
        if (err) {
          return resolve([]);
        }
      
        
        var content=fs.readFileSync(filename, "utf8");
        var s= content.toString().split("\n");
        var content2=fs.readFileSync('./students.txt', "utf8");
        var t= content2.toString().split("\n");
        var A=[];
       
        for (let i = 0; i<t.length-1; i++) {
            var temp=JSON.parse(t[i])
            if(temp.Student_ID==Student_ID){
                A=temp.Courses;
                break;
            }
        }
      
        for (var i = 0; i<s.length-1; i++) {
        
            var temp=JSON.parse(s[i])
            var c=0;
            for(let j=0;j<A.length;j++){
                
                if(A[j]==temp.Course_ID){
                    c=c+1;
                  
                    k1.push(temp)
                }
            }
           
            if(c==0){
              
            k.push(temp)}}
          
            return resolve([k,k1]);
        
      })
    
    })
    return promise;
}



//function to get data in JSON format from filename using promise
function get_data(filename){
    const promise=new Promise((resolve,reject)=>{
      var k=[]
      
      fs.access(filename, fs.F_OK, (err) => {
        if (err) {
          return resolve([]);
        }
        
        var content=fs.readFileSync(filename, "utf8");
        var s= content.toString().split("\n");
        for (let i = 0; i<s.length-1; i++) {
            k.push(JSON.parse(s[i]))}
            return resolve(k);
      })
      
    })
    return promise;
}

//function to check if Student_ID and Password and valid
function compare(array,data1){
    var check=0;
  
    data1=JSON.parse(data1)
    for (let i = 0; i<array.length; i++){
        var temp=array[i];
        if(temp.Student_ID==data1.Student_ID && temp.Password==data1.Password){
            check=1;  
        }
    }
    
    if(check==0){
        return false;
    }
    else{
        return true;
    }       
}


//function to add new Student to txt file
function add(slot,Student_ID){
    
    var slot1=JSON.parse(slot)
    
    var content=fs.readFileSync("./students.txt", "utf8");
        var s= content.toString().split("\n");
        var t=[]
     
        for (let i = 0; i<s.length-1; i++) {
            var k=JSON.parse(s[i])
            
            if(k.Student_ID==Student_ID){
                s[i]=JSON.parse(s[i])
                
                if(k.Courses=='[]'){
                k.Courses=[]}
                
                k.Courses.push(slot1.Course_ID)
                
            }
            t.push(k)
        }
        fs.unlinkSync('./students.txt')
        for (let j=0;j<t.length;j++){
            fs.appendFileSync('students.txt', JSON.stringify(t[j]));
            fs.appendFileSync('students.txt', "\n");
        }
        
}


module.exports={"get_data":get_data,"compare":compare,"add":add,"get_data_student":get_data_student};


       
       