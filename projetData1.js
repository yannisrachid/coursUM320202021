var result;
fetch('https://opendata.arcgis.com/datasets/fa5ab237190945f58eb210b0ffad40ee_4.geojson', { method: 'GET',
                    headers: {},
                    mode: 'cors',
                    cache: 'default'}).then(
            function(response){
                response.json().then(
                    function(data){
                        console.log(data);
                        result=data;
                    }
                )
            }
        );

var result;
fetch('https://api.cquest.org/dvf?code_postal=89110', { method: 'GET',
            headers: {},
            mode: 'cors',
            cache: 'default'}).then(
    function(response){
        response.json().then(
            function(data){
                console.log(data);
                result=data;
            }
        )
    }
);

var tableau = ['code_commune';'valeur_fonciere';'surface_terrain']
var tableauPop = ['Code INSEE de la commune';'Nom de la commune';'nb_pop';'pct_evo_pop';'nb_p_age_0';'nb_p_age_5';'nb_p_age_15';'nb_p_age_20';'nb_p_age_25';'nb_p_age_30';'nb_p_age_35';'nb_p_age_40';'nb_p_age_45';'nb_p_age_50';'nb_p_age_55';'nb_p_age_60';'nb_p_age_65';'nb_p_age_70';'nb_p_age_75';'nb_p_age_80';'nb_p_age_85';'nb_p_age_90p';'pct_age_019';'pct_age_60p','pct_age_65p';'pct_age_75p';'nb_etranger';'pct_etranger']
