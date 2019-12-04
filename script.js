const requestGetGare = async(searchParam) => {
    try {
        var response = await fetch(`https://ressources.data.sncf.com/api/records/1.0/search/?dataset=referentiel-gares-voyageurs&q=${searchParam}`);

    } catch (error) {
        console.log(" fetch failes");
    }

    try {
        let listOfGare = await response.json();
        return listOfGare.records.map(function(gare) {
            return gare.fields.gare_ut_libelle;
        });
    } catch (error) {
        console.log("gare not found")
    }
};

requestGetGare("lill")
    .then(data => console.log(data));
