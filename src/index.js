import express from 'express';
import storage from './memory_storage.js';
import cors from 'cors';

const app = express(); // instanciranje aplikacije
const port = 3330; // port na kojem će web server slušati

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({});
});

//lista Piva
app.get('/pivo', (req, res) => {
    res.json(storage.pivo);
});

//lista rezervacija
app.get('/rezervacije', (req, res) => {
    res.json(storage.rezervacije);
});


//dohvaćanje samo rezervacija za ilicu
app.get('/rezervacije', (req, res) => {
    let ident = req.params.id;
    res.json(storage.rezervacije.filter((x) => x.izborPivnice == "Ilica"));
});

//dohvaćanje samo rezervacija za veceru
app.get('/rezervacije', (req, res) => {
    let ident = req.params.id;
    res.json(storage.rezervacije.filter((x) => x.tipRezervacije == "vecera"));
});

//dohvaćanje samo rezervacija za rucak
app.get('/rezervacije', (req, res) => {
    let ident = req.params.id;
    res.json(storage.rezervacije.filter((x) => x.tipRezervacije == "rucak"));
});

//dohvaćanje samo rezervacija za samo pice
app.get('/rezervacije', (req, res) => {
    let ident = req.params.id;
    res.json(storage.rezervacije.filter((x) => x.tipRezervacije == "samo pice"));
});



app.listen(port, () => console.log(`\n\n[DONE] Backend se vrti na http://localhost:${port}/\n\n`));