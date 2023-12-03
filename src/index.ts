import express from "express";

const app = express();

app.post('/create', (req, res) => {
    
});

app.listen(8000, () => {
    console.log("User service listening on port 8000");
})