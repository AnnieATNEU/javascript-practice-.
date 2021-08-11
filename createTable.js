const sqlite3 = require('sqlite3').verbose()


let db = new sqlite3.Database('./VSQV_database1.db',(err)=>{
    
    if(err){
        console.log(err.message)
    }

    showTable();

    console.log('You are now connected to database in sqlite')
    
    db.close((err)=>
{
        if(err){
            console.log(error.message)
        }

})
    console.log('db connection closed')
})

//=========================================================








///====================================================================
function showTable(){
  var tabletab= document.getElementById('myTable');
  db.transaction(function(tx){
    tx.executeSql('SELECT * VSQV1', [], function(tx,results){
      var rows = results.rows;
      var tr = '';
      for(var i= 0; i < rows.length; i++){
          tr  += '<tr>';
          tr  += '<td onClick="actualizar('+ rows[i].Chrom +')">' + rows[i].POS + '</td>';
          tr  += '<td>'+ rows[i].Chrom + '</td>' ;
          tr  += '<td>'+ rows[i].POS + '</td>' ;
          tr  += '<td>'+ rows[i].ID + '</td>' ;

      }
    });

  },null);
}
///======================================================================

function connectDB(){

   db.serialize(function() {

      db.run("CREATE TABLE if not exists tableExample3(CHROM INTEGER PRIMARY KEY, POS text NOT NULL,FILTER text NOT NULL);",function(err){
     
        if(err){
          return console.log(err.message)
        }
        console.log('table created')
})
})
      db.close()
}
//======================================================================
connectDB();
// // selectDB();

// //////////////////////

// function selectDB(){
// db.serialize(function() {

// var stmt = db.all("SELECT * FROM tableExample1", function(err, row) {
//     console.log(row.id + ": " + row.info);
//  stmt.finalize();
// });
// });
 
// db.close();
// }


















//////////////////////////////
/////////////////////////////
// function selectDB(){

//   db.serialize(function() {


// db.all("SELECT * FROM VSQV1" ,[], (err, rows) => {
//       if (err) {
//       throw err;
//       }
//       rows.forEach((row) => {
//       console.log(row.name);
//       });
//       });
      
//       // close the database connection
//       db.close();
//     }
