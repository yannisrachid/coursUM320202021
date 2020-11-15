function test(){
    alert("Welcome to Paris !");
}

    //Tableau des ventes à Paris//

// fonction qui génère le tableau_de_données de données
function tableau_de_données(){
    return {"code_insee_commune":[], "commune":[],  "numero_voie": [], "voie": [],
    "date_mutation":[], "nombre_pieces_principales": [], "valeur_fonciere":[]}
}

// FONCTION FETCH

function fetch_par_département(tableau_de_données, plus_petit_num_commune, plus_grand_num_commune){
    for (num_commune=plus_petit_num_commune; num_commune<=plus_grand_num_commune; num_commune++){
        fetch('https://api.cquest.org/dvf?code_commune='+num_commune+'&nature_mutation=Vente&type_local=Maison', { method: 'GET',
                    headers: {},
                    mode: 'cors',
                    cache: 'default'}).then(
            function(response){
                response.json().then(
                    function(data){ 
                        num=data.resultats[0]['code_commune']
                        commune=data.resultats[0]["commune"]
                        code_html="<tr class='commune' code_com='"+num+"'><td>"+num+"</td><td>"+commune+"</td></tr>"
                        $(".ligne").append(code_html)
                        $(".commune").click(function(){
                        num_commune=parseInt($(this).attr('code_com'))  
                        $(this).append(camembert(ventes_démo_par_commune[num_commune]["commune"][0], ventes_démo_par_commune[num_commune]["part_moins_20ans"][0], ventes_démo_par_commune[num_commune]["part_20_60ans"][0], ventes_démo_par_commune[num_commune]["part_plus_60ans"][0]))
                        $('.moyenne').html("<h2>Prix moyen d'une maison : "+Math.round(moyenne(ventes_démo_par_commune[num_commune]["valeur_fonciere"]))+" </h2>")
                        
                        })

                        if (data.resultats.length>0){//si on a accès à des ventes de la commune dans l'url
                            for (i=0; i<data.resultats.length;i++) {
                                tableau_de_données["code_insee_commune"].push(data.resultats[i]["code_commune"]);
                                tableau_de_données["commune"].push(data.resultats[i]["commune"]);
                                tableau_de_données["date_mutation"].push(data.resultats[i]["date_mutation"]);
                                tableau_de_données["nombre_pieces_principales"].push(data.resultats[i]["nombre_pieces_principales"]);
                                tableau_de_données["numero_voie"].push(data.resultats[i]["numero_voie"]);
                                tableau_de_données["voie"].push(data.resultats[i]["voie"]);
                                tableau_de_données["valeur_fonciere"].push(data.resultats[i]["valeur_fonciere"]);
                            }
                            select_distinct(noms_communes_distinct, vente_paris["commune"])
                            select_distinct(codes_communes_distinct, vente_paris["code_insee_commune"])
                        }
                        
                    }
                )
            }
        );
    }
};

function fetch_vente_par_commune(tableau_commune, num_commune){
        fetch('https://api.cquest.org/dvf?code_commune='+num_commune+'&nature_mutation=Vente&type_local=Maison', { method: 'GET',
                    headers: {},
                    mode: 'cors',
                    cache: 'default'}).then(
            function(response){
                response.json().then(
                    function(data){ 
                        if (data.resultats.length>0){//si on a accès à des ventes de la commune dans l'url
                            for (i=0; i<data.resultats.length;i++) {
                                tableau_commune["code_insee_commune"].push(data.resultats[i]["code_commune"]);
                                tableau_commune["commune"].push(data.resultats[i]["commune"]);
                                tableau_commune["date_mutation"].push(data.resultats[i]["date_mutation"]);
                                tableau_commune["nombre_pieces_principales"].push(data.resultats[i]["nombre_pieces_principales"]);
                                tableau_commune["numero_voie"].push(data.resultats[i]["numero_voie"]);
                                tableau_commune["voie"].push(data.resultats[i]["voie"]);
                                tableau_commune["valeur_fonciere"].push(data.resultats[i]["valeur_fonciere"]);
                            }
                            infos_sup=tableau_commune_paris()
                            fetch_infos_commune_distincte(tableau_commune,infos_sup);//il appelle le 2e fetch
                        }
                        
                    }
                )
            }
        );
};

        
        //Tableau des infos sur la démographie à Paris//

//fonction initialisation
function tableau_commune_paris(){
    return {"code_insee_commune":[], "population_actuelle":[], "evolution_pop":[], "densité":[], 
    "part_moins_20ans":[], "part_20_60ans":[], "part_plus_60ans":[],
    "pourcentage_etranger":[], "evolution_etranger":[] };
}

function fetch_infos_commune_paris(tableau){
    //fetch 
    fetch('https://opendata.arcgis.com/datasets/fa5ab237190945f58eb210b0ffad40ee_4.geojson', { method: 'GET',
                headers: {},
                mode: 'cors',
                cache: 'default'}).then(
            function(response){
                response.json().then(
                    function(data){ 
                        for (i=0; i<data.features.length; i++){
                            //info général
                            tableau["code_insee_commune"].push(data.features[i].properties["c_cainsee"]);
                            tableau["population_actuelle"].push(data.features[i].properties["nb_pop"]);
                            tableau["evolution_pop"].push(data.features[i].properties["pct_evo_pop_n5"]);
                            tableau["densité"].push(data.features[i].properties["nb_densite"]);
                            //pop en fonction de l'age
                            tableau["part_moins_20ans"].push(data.features[i].properties["pct_age_019"]);
                            tableau["part_20_60ans"].push( 100 - data.features[i].properties["pct_age_019"] - data.features[i].properties["pct_age_60p"]);
                            tableau["part_plus_60ans"].push(data.features[i].properties["pct_age_60p"]);
                            //les etrangers
                            tableau["pourcentage_etranger"].push(data.features[i].properties["pct_etranger"]);
                            tableau["evolution_etranger"].push(data.features[i].properties["pct_evo_etranger"]);
                        }
                    }
                )
            }
    );
};


function fetch_infos_commune_distincte(tableau_commune,infos_sup){
    //fetch 
    fetch('https://opendata.arcgis.com/datasets/fa5ab237190945f58eb210b0ffad40ee_4.geojson', { method: 'GET',
                headers: {},
                mode: 'cors',
                cache: 'default'}).then(
            function(response){
                response.json().then(
                    function(data){ 
                        for (i=0; i<data.features.length; i++){
                            //info général
                            infos_sup["code_insee_commune"].push(data.features[i].properties["c_cainsee"]);
                            infos_sup["population_actuelle"].push(data.features[i].properties["nb_pop"]);
                            infos_sup["evolution_pop"].push(data.features[i].properties["pct_evo_pop_n5"]);
                            infos_sup["densité"].push(data.features[i].properties["nb_densite"]);
                            //pop en fonction de l'age
                            infos_sup["part_moins_20ans"].push(data.features[i].properties["pct_age_019"]);
                            infos_sup["part_20_60ans"].push( 100 - data.features[i].properties["pct_age_019"] - data.features[i].properties["pct_age_60p"]);
                            infos_sup["part_plus_60ans"].push(data.features[i].properties["pct_age_60p"]);
                            //les etrangers
                            infos_sup["pourcentage_etranger"].push(data.features[i].properties["pct_etranger"]);
                            infos_sup["evolution_etranger"].push(data.features[i].properties["pct_evo_etranger"]);

                        }
                        jointure(tableau_commune,infos_sup, "code_insee_commune", "code_insee_commune")
                        
                    }
                )
            }
    );
};

    //Enrichissement de la table des vente à Paris par la table contenant la démographie à Paris//

function jointure(dico_cible, dico_pour_ajout, var_jointure_dico_cible, var_jointure_dico_pour_ajout){
    /*Entré: deux dico json l'un de base et l'autre pour enrichir le 1er, et leurs clés de jointure
        Opération: enrichi le 1er dico_cible avec les info du dico pour ajour
        Sortie: rien*/

    //les clés à ajouter au dico cible
    clés_dico_pour_ajout=Object.keys(dico_pour_ajout);
    
    //ajout des clés de dico_ajout à dico_cible
    for (i=0; i<clés_dico_pour_ajout.length;i++  ){
        if (dico_cible[clés_dico_pour_ajout[i]]==undefined && clés_dico_pour_ajout[i]!=var_jointure_dico_pour_ajout){//car les var jointure peuvent avoir nom différente//
            dico_cible[clés_dico_pour_ajout[i]]=[];
        }
    }
    // Remplir les info si on trouve mm clé sinon on insère vide. parseInt() sur les index car l'un est en chiffre et l'autre en caractere
    for (pos_dico_cible=0; pos_dico_cible<dico_cible[var_jointure_dico_cible].length; pos_dico_cible++){
        index1=parseInt(dico_cible[var_jointure_dico_cible][pos_dico_cible]);
        for (pos_dico_ajout=0; pos_dico_ajout<dico_pour_ajout[var_jointure_dico_pour_ajout].length; pos_dico_ajout++){
            index2=parseInt(dico_pour_ajout[var_jointure_dico_pour_ajout][pos_dico_ajout]);
            if (index1==index2){//s'il trouve le bon index il push les info correspondant au mm niveau de dico_cible
            for (z=0; z<clés_dico_pour_ajout.length; z++){
                    if (clés_dico_pour_ajout[z]!=var_jointure_dico_pour_ajout){
                        dico_cible[clés_dico_pour_ajout[z]][pos_dico_cible]=dico_pour_ajout[clés_dico_pour_ajout[z]][pos_dico_ajout];
                    }//les place vide représentent les jointures qui n'ont pas de correspondance//
                }
            }
        }
    }
}

function select_distinct(tableau_distinct, tableau_de_base){
    for (i=0; i<tableau_de_base.length;i++){
        trouvé=false;


        for (j=0; j<tableau_distinct.length;j++){
            if (tableau_de_base[i] == tableau_distinct[j]){
                trouvé=true;
            }
        }
        if (trouvé==false){
            tableau_distinct.push(tableau_de_base[i])
        }
    }
}

//Code pour générer les infos vente et démo sur paris sans jointure 
// infos sur les ventes dans tout paris//
vente_paris=tableau_de_données()
fetch_par_département(vente_paris, 75101, 75156)

//infos pour la demo dans tout paris//
infos_communes_paris=tableau_commune_paris();
fetch_infos_commune_paris(infos_communes_paris);


//par commune les infos sur les ventes et la démographie//
ventes_démo_par_commune={}
for (i=75101; i<=75156; i++){
    tableau_par_commune=tableau_de_données()
    fetch_vente_par_commune(tableau_par_commune, i)
    ventes_démo_par_commune[String(i)]=tableau_par_commune;
}

// Select distinct pour faciliter les affichage et diagrammes//
//noms et codes communes distinctes 
codes_communes_distinct=[]
noms_communes_distinct=[]
//ils vont être rempli automatiquement après le fetch dans tout paris

// DIagramme//

function camembert(nom_commune, part_moins_20ans, part_20_60ans, part_plus_60ans){
	Chart.defaults.global.title.display = true;
	Chart.defaults.global.title.text = "La répartition de la population en fonction de l'âge";
	Chart.defaults.global.title.fontSize = 18;

	var ctx = document.getElementById('myChart').getContext('2d');
	
	var chart = new Chart(ctx, {
		// The type of chart we want to create
		type: 'pie',

		// The data for our dataset
		data: {
			datasets: [{
				data : [
					part_moins_20ans,
					part_20_60ans,
					part_plus_60ans,
				],
				backgroundColor : [
					'rgba(255, 205, 86, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(201, 203, 207, 0.2))',
				],
				label: "La répartition de la population en fonction de l'âge de "+nom_commune
			}],
			labels: [
				'0 à 20 ans',
				'20 à 60 ans',
				'plus de 60 ans'
			]
		},
	// Configuration options go here
	options: {
		legend: {
			display: true,
			position: 'right'
		},
	}
});
}


function moyenne(liste){
    s=0;
    n=0;
    for (i=0; i<liste.length; i++){

        if (liste[i]!=undefined){
            s+=liste[i]
            n+=1
        }
    }
    return s/n
}

function barre(nom_commune, liste_nb_chambre, liste_prix){
    liste_nb_chambre_distinct=select_distinct(liste_nb_chambre);//type maisons

    liste_prix_moyen=[]
    for (i=0; i<liste_nb_chambre_distinct.length; i++){
        liste=[]
        for (j=0; j<liste_nb_chambre.length; j++){
            if(liste_nb_chambre[j]==liste_nb_chambre_distinct[i]){
                liste.push(liste_prix[j])
            }
        }
        liste_prix_moyen.push(moyenne(liste))
    }

    var ctx = document.getElementById("myChart2").getContext("2d");
    var data = {
        labels : liste_nb_chambre_distinct,
        datasets : [
        {
            label : "Valeur Foncière par nombre de pièce",
            data : liste_prix_moyen,
            backgroundColor : [
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
            ],
            borderWidth : 1
        }
        ]
    };

    var options = {
    title : {
        display : true,
        position : "top",
        text : "BarGraph"
    }
    };
    var chart = new Chart( ctx, {
    type :"horizontalBar",
    data : data,
    options : options
    });

}



