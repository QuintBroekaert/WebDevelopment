const testValues = () => {
    if (test1 === test2) {
        let temp = '{"voornaam":"Jan","familienaam":"Janssens","geboorteDatum":"1993-12-31T00:00:00.000Z","adres":{"straat":"Kerkstraat 13","postcode":"8500","gemeente":"Kortrijk"},"isIngeschreven":true,"namenVanExen":["Sofie","Berta","Philip","Albertoooo"],"aantalAutos":2}'

        let test1 = JSON.parse(temp);
        let test2 = {
            voornaam : "Jan",
            familienaam : "Janssens",
            geboorteDatum : new Date("1993-12-31"),
            adres : { // een object
                straat : "Kerkstraat 13",
                postcode : "8500",
                gemeente : "Kortrijk"
            },
            isIngeschreven : true,
            namenVanExen : ["Sofie", "Berta", "Philip", "Albertoooo"], // een array
            aantalAutos : 2
        }
        console.log("De waarden zijn gelijk");
    }
    window.addEventListener('load', testValues);
}