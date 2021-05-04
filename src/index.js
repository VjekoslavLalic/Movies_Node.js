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
//dodavanje piva
app.post('/pivo', (req, res) => {
    let doc = req.body

    storage.pivo.push(doc)
    res.json({ status: 'OK' });
});
//dodavanje pivovare
app.post('/pivovare', (req, res) => {
    let doc = req.body

    storage.pivovare.push(doc)
    res.json({ status: 'OK' });
});

//dohvat svih pivovara
app.get('/pivovare', (req, res) => {
    res.json(storage.pivovare);
});

//lista rezervacija
app.get('/rezervacije', (req, res) => {
    res.json(storage.rezervacije);
});
// dodavanje rezervacija
app.post('/rezervacije', (req, res) => {
    let doc = req.body

    storage.rezervacije.push(doc)
    res.json({ status: 'OK' });
});


//dohvaćanje samo rezervacija za ilicu
app.get('/rezervacije', (req, res) => {
    let ident = req.params.id;
    res.json(storage.rezervacije.filter((x) => x.izborPivnice == "Ilica"));
});

//dohvaćanje samo rezervacija za veceru
app.get('/rezervacije/vecera', (req, res) => {
    let rezervacija = req.params.tipRezervacije;
    console.log('Sve narudžbe za večeru', rezervacija)
    res.json(storage.rezervacije.filter((x) => x.tipRezervacije == "vecera"))
});

//dohvaćanje samo rezervacija za rucak
app.get('/rezervacije/rucak', (req, res) => {
    let rezervacija = req.params.tipRezervacije;
    res.json(storage.rezervacije.filter((x) => x.tipRezervacije == "rucak"));
});

//dohvaćanje samo rezervacija za samo pice
app.get('/rezervacije/pice', (req, res) => {
    let rezervacija = req.params.tipRezervacije;
    res.json(storage.rezervacije.filter((x) => x.tipRezervacije == "pice"));
});



app.listen(port, () => console.log(`\n\n[DONE] Backend se vrti na http://localhost:${port}/\n\n`));


