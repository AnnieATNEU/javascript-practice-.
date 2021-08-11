//Connecting to database

const sqlite3 = require('sqlite3').verbose()


let db = new sqlite3.Database('./VSQV_database.db',(err)=>{
    
    if(err){
        console.log(err.message)
    }
    console.log('You are now connected to database in sqlite')
    
    db.close((err)=>
{
        if(err){
            console.log(error.message)
        }

})
    console.log('db connection closed')
})
/////////////////////////////////////////////
///////////////////////////////////////////
//script for file upload
// install this first in your terminal
//npm install express-fileupload

const express = require('express')
const upload = require('express-fileupload')

const app= express()

//call upload
app.use(upload());

app.get('/',(req,res) =>{
    res.sendFile(_dirname + '/3.html')
})

app.listen(70000)


//////////////////////////////////
//for columns to show dropdown menu
//Table tab

var expanded= false;
function showCheckboxes() {
    var checkboxes = document.getElementById("checkboxes");
    if (!expanded){
        checkboxes.style.display= "block";
        expanded = true;
    }else {
        checkboxes.style.display = "none";
        expanded = false;
    }
    }

    index: (req,res) => {
        let sql = 'SELECT *'
            sql += 'FROM News'
    
            db.all(sql, [], (error, rows) => {
                if (error){
                    console.log(error);
                }
                res.send(rows);
                //res.redirect('admin/index');
    
            });
    
        }

    
        
    
