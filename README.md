# Projet API sur le valeur foncière du logement à Paris en fonction de la population
L'objectif de notre projet était de construire une API qui relie deux APIs différentes pour observer s'il existe des corrélations entre les deux ou non, tout en proposant deux formats de récupération des données. Après de nombreuses recherches d'APIs, nous avons décidé de regrouper des données sur les valeurs foncières de tous les logements parisiens, et des données sur la démographie à Paris.

## Etape 1 - Choix des API
L'objectif majeur du projet était la création d'une application simple d'utilisation, et pertinente. Ainsi, à partir du nom d'un arrondissement parisien choisi par l'utilisateur (avec le nom ou le code INSEE), l'application renvoie un ensemble de données sur la démographie de l'arrondissement, comme la répartition des âges, et la valeur foncière moyenne.

Notre première API renvoie des données sur les logements en France. Elle comporte des données telles que la valeur foncière, le nombre de pièce, le code INSEE et le nom de la commune où elle se situe...  Cette API s'appelle "Micro-API DVF" et est disponible sur : https://www.data.gouv.fr/fr/reuses/micro-api-dvf-demande-de-valeurs-foncieres/.

Notre deuxièlme API, intitulée "RECENSEMENT COMMUNE POPULATION" , que l'on peut retrouver à l'adresse suivant : https://opendata.apur.org/datasets/recensement-commune-population?geometry=-1.324%2C48.192%2C6.087%2C49.458&page=14, comporte, pour chaque commune d'une partie de la région Île-de-France (75, 93, 94, 95, 91), les données sur la démographie associée, comme la répartition de la population selon l'âge, le nombre d'habitants, son évolution ou encore le pourcentage d'étrangers.

Ces deux APIs sont jointes par le code INSEE de la commune.

## Etape 2 - Côté client
Grâce au fichier HTML créé dans un second temps, l'accès à l'API peut s'effectuer à partir d'un champ : L'utilisateur saisi le nom d'un arrondissement parisien, et en réponse sera affiché un tableau avec des informations sur l'arrondissement choisi : le prix moyen de la valeur foncière, un graphique de la répartition des âges au sein de cet arrondissement, et un graphique en barre de la valeur foncière moyenne en fonction du nombre de pièces principales.

Explications Tableau, requêtes (à compléter)

## Les difficultés rencontrées
- Le choix de l'API

La première difficultée rencontrée a été de trouver deux APIs dont l'étude pouvait être cohérente. En effet, au début nous voulions utiliser une API sur la météo, ce que le professeur nous a déconseillé car c'était peu pertinent, et beaucoup de groupes l'avaient et voulaient l'utiliser les années précédentes. Ayant trouvés une API sur la valeur foncière, on s'est dit qu'il était intéressant d'observer la population qui vivait au sein de ces logements. Par exemple, si dans les arrondissements où le prix foncier moyen était élevé, la population est plutôt vieille. Ou encore si dans les arrondissements où le prix foncier est plus faible, est-ce que plus de personnes jeunes ou étrangères y résident ?

- L'affichage des graphiques :

(à compléter)


## Participants

Cheikh DIOP, Thibaut ESCALANTE, Sophie NGOTALA, Yannis RACHID
