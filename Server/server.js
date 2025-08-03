const app = require('./app.js')
const PORT = 3000

app.get('/',(req, res) =>{
    res.send("Server Setting Up")
});

app.listen(PORT, () =>{
    console.log(`Server is running at https://localhost:${PORT}`);
  
    
})