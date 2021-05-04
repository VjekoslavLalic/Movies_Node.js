let storage = {

    pivo: [
        {

            id: 10001,
            naziv: "Zlatni medvjed",
            vrstaPiva: "Pilsner",
            postotakAlkohola: 4.4,
            gorcina: 22,
            uravnoteziteljSSK: "1 - 12",
            opis: "Svijetlo pivo zlatnožute boje, osvježavajućeg okusa i arome s ugodnom gorčinom. Zlatnog medvjeda kuhamo tokom cijele godine. Pilsner je u principu svijetli lager, najsličniji našim “običnim pivima”. Karakteristična mu je zlatna boja, lagan ali oštar okus zbog većeg udjela CO2. Okus mu može sadržavati slabe note gorčine koju dobiva od hmelja naziva SAAZ. Najbolje ga je služiti na 6°C.",

        },
        {
            id: 10002,
            naziv: "Crna kraljica",
            vrstaPiva: "Crni lager",
            postotakAlkohola: 4.8,
            gorcina: 20,
            uravnoteziteljSSK: "1 - 12",
            opis: "Jače zahmeljeno crno pivo s karakterističnim okusom i aromom po tamnom, prženom sladu. Crna kraljica je dostupna tokom cijele godine 4,8% alkohol 13% ekstrakt",
        },
        {
            id: 10003,
            naziv: "Grička vještica",
            vrstaPiva: "Doppelbock",
            postotakAlkohola: 7.5,
            gorcina: 21,
            uravnoteziteljSSK: "1 - 12",
            opis: "Nježne rubin crvene boje. Okus lagan, aromatičan, bogate fine slatkoće i ugodne arome. Gričku vješticu kuhamo tokom cijele godine. 7,5% alkohol 15% ekstrakt ",
        },
    ],

    pivovare: [
        {
            nazivPivovare: "Ilica",
            adresa: "Ilica 49",
            telefon: "01/4846-922",
            fax: "01 / 3646 - 559",
            radnoVrijeme: "10 - 24",
            opis: "Smještena na manje od 100 metara križanja Ilice i Frankopanske, ova pivnica svojom velikom zelenom terasom predstavlja pravu pivničku oazu koja nikoga neće ostaviti ravnodušnim. Osim toga, tu je i mala privatna terasa idealna za obiteljska druženja i sl. U Ilici vas čekaju naši poznati pivnički specijaliteti i vrhunsko Medvedgrad pivo, karakterističan hrastov namještaj te već spomenuta zelena terasa koji će vam pružiti poseban doživljaj!",
        },
        {
            nazivPivovare: "Fakin craft bar",
            adresa: "Vukovarska 68",
            telefon: "01 / 6293 - 377",
            fax: "01 / 62933 - 377",
            radnoVrijeme: "9 - 22",
            opis: "Fakin Craft Bar nastao je s namjerom da dosadašnji tip pivnica nadogradimo novim idejama i pokušamo prilagoditi današnjem vremenu. Šank s 24 pipe za točenje posebna je konstrukcija s četiri odvojene rashladne zone kojima želimo gostu pružiti užitak konzumacije piva poslužene na preporučenim temperaturama. U jednom dijelu prostora instalirana je i mikro pivovara s varionicom od 50 litara. Svatko tko želi može doći i skuhati svoje pivo na našoj opremi. Potrebno nas je kontaktirati i dogovoriti termin kuhanja.",


        },
        {
            nazivPivovare: "Mali medo",
            adresa: "Tkalčićeva 36",
            telefon: "01 / 4929 - 613",
            fax: "01 / 4929 - 614",
            radnoVrijeme: "10 - 22",
            opis: "Pivnica smještena u Tkalčićevoj ulici, nudi vam priliku okusiti djelić pivničkog šarma u srcu Zagreba. Mali Medo  davno je prestao biti mali, sada se vanjska terasa proteže velikim dijelom Tkalčićeve ulice gdje je moguće smjestiti preko 400 gostiju. Uz samu pivnicu otvorena je i suvenirnica u kojoj možete kupiti pivo u boci i pivničke suvenire s potpisom Medvedgrada; majice, krigle i sl. Zatim pizzeria, linija brze hrane s odličnim rebarcima i krilcima, slasni Mason burgeri, te Burza piva gdje nikada nećete doživjeti “crni petak”!"

        },
        {
            nazivPivovare: "Samoborska",
            adresa: "Samoborksa cesta 217",
            telefon: "098 399 319",
            fax: "01 / 3646-549",
            radnoVrijeme: "10 - 22",
            opis: "Na Samoborskoj cesti ne nalazi se samo pivnica Medvedgrad već i pogon same pivovare. Dok ispijate omiljeno pivo, kroz staklene površine imate priliku gledati kako se ono priprema. Osim naših poznatih pivničkih specijaliteta u Samoborskoj vas čeka i roštilj na drveni ugljen. U prekrasnoj dvorani na prvom katu pivnice moguće je organizirati privatne proslave za 80 ljudi, a parking je osiguran za sve naše goste. Također, možete kupiti naše pivo u bocama po vrlo povoljnim, outlet cijenama.",
        }
    ],



    rezervacije: [
        {
            broj_rezervacije: 101,
            ime: "Stela",
            prezime: "Gal",
            telefon: "0919805009",
            username: "stela@gmail.com",
            datum: 7645446873487,
            tipRezervacije: "rucak",
            vrijeme: "13:00",
            brojOsoba: 2,
            izborPivnice: "Ilica",
            napomena: "Napomena za rezervaciju"

        },

        {
            broj_rezervacije: 102,
            ime: "Petar",
            prezime: "Simic",
            telefon: "0919805119",
            username: "petar@gmail.com",
            datum: 2245489873487,
            tipRezervacije: "vecera",
            vrijeme: "19:00",
            brojOsoba: 3,
            izborPivnice: "Mali medo",
            napomena: "Napomena za rezervaciju"
        },

        {
            broj_rezervacije: 103,
            ime: "Ante",
            prezime: "Pekić",
            telefon: "0919888896",
            username: "ante@gmail.com",
            datum: 7645446873487,
            tipRezervacije: "rucak",
            vrijeme: "12:00",
            brojOsoba: 4,
            izborPivnice: "Samoborska",
            napomena: "Napomena za rezervaciju"
        },
    ]
}
export default storage;