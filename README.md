# Projet API sur la valeur foncière du logement à Paris en fonction de la population
L'objectif de notre projet était de construire une API qui relie deux APIs différentes pour observer s'il existe des corrélations entre les deux, tout en proposant deux formats de récupération des données. Après de nombreuses recherches d'APIs, nous avons décidé de regrouper des données sur les valeurs foncières de tous les logements parisiens, et des données sur la démographie à Paris.

## Etape 1 - Choix des API
L'objectif majeur du projet était la création d'une application simple d'utilisation, et pertinente. Ainsi, à partir du nom d'un arrondissement parisien choisi par l'utilisateur (avec le nom ou le code INSEE), l'application renvoie un ensemble de données sur la démographie de l'arrondissement, comme la répartition des âges, et la valeur foncière moyenne (en euros).

Notre première API renvoie des données sur les logements en France. Elle comporte des données telles que la valeur foncière, le nombre de pièce, le code INSEE et le nom de la commune où elle se situe...  Cette API s'appelle "Micro-API DVF" et est disponible sur : https://www.data.gouv.fr/fr/reuses/micro-api-dvf-demande-de-valeurs-foncieres/.

Notre deuxièlme API, intitulée "RECENSEMENT COMMUNE POPULATION" , que l'on peut retrouver à l'adresse suivante : https://opendata.apur.org/datasets/recensement-commune-population?geometry=-1.324%2C48.192%2C6.087%2C49.458&page=14, comporte, pour chaque commune d'une partie de la région Île-de-France (75, 93, 94, 95, 91), les données sur la démographie associée, comme la répartition de la population selon l'âge, le nombre d'habitants, son évolution ou encore le pourcentage d'étrangers.

Ces deux APIs sont jointes par le code INSEE de la commune.

On a remarqué que l'on retrouvait essentiellement à Paris les logements ayant une grande valeur.

## Etape 2 - Côté client
Grâce au fichier HTML créé dans un second temps, l'accès à l'API peut s'effectuer à partir d'un champ : L'utilisateur clique sur le nom d'un arrondissement parisien dans le tableau, et en réponse sera affiché des informations sur l'arrondissement choisi : le prix moyen de la valeur foncière, un graphique de la répartition des âges au sein de cet arrondissement, et un graphique en barre de la valeur foncière moyenne en fonction du nombre de pièces principales.

Explications Tableau, requêtes: EN gros, nous avons deux tableaux, l'un qui contient les données concernant les ventes de maisons faites sur Paris et un autre tableau où on a les informations démographiques. L'idée est de 
joindre ces deux tables provenant de deux liens différentes par leur code insee commune. On a donc un grand tableau qui contient toutes les données de ventes à notre disposition qui nous permet de générer sur notre page web les arrondisseent sur lesquels on a des infos ventes, et de petits tableaux par commune jointe au tableau contenant les informations démographiques de cette commune. Ainsi d'entrée, on génère dans le site les arrondissments sur lesquels on a des infos grâce au grand tableau qui contient tous les arronissments, et une fois qu'on clique sur un arrondissement, on a à la fois des infos démographiques et des infos ventes de maisons provenant de la jointure entre le tableau des vente de maisons de la commune et celle qui contient les informations démographiques de l'ensemble des communes de Paris. 
## Les difficultés rencontrées
- Le choix de l'API

La première difficulté rencontrée a été de trouver deux APIs dont l'étude pouvait être cohérente. En effet, au début nous voulions utiliser une API sur la météo, ce que le professeur nous a déconseillé car c'était peu pertinent, et beaucoup de groupes l'avaient et voulaient l'utiliser les années précédentes. Ayant trouvés une API sur la valeur foncière, on s'est dit qu'il était intéressant d'observer la population qui vivait au sein de ces logements. Par exemple, si dans les arrondissements où le prix foncier moyen était élevé, la population est plutôt vieille. Ou encore si dans les arrondissements où le prix foncier est plus faible, est-ce que plus de personnes jeunes ou étrangères y résident ?

- L'affichage des graphiques :

On a eu un gros souci avec l'asyncronicité du fetch. EN effet, en générant nos diagrammes et les listes des arrondissements dont on a les infos, on a d'abord tout naturellement voulu parcourir le fichier qui contenait les données et les exploiter. Cependant, à cause de l'asyncronité, si on code en dehors du fetch, la longueur du tableau qu'on veut exploiter est toujours 0 car js l'execute le temps d'aller chercher les données. DU coup, il a fallu changer de méthode et tout mettre dans le fetch pour pouvoir exploiter les données fetchée. Aussi dans un premier temps, on avait tenté de joindre directement les deux grands tables contenant toutes les données et ensuite sélectionner les infos de la commune qui nous intéresse pour l'afficher. On s'est heurté à un problème de taille: en fetchant les informations sur les ventes, on cherches l'informations sur plusieurs liens qui chacun correspondent à un arrondissement(2e, 4e, 18e, etc...). DU coup en faisont la jointure avec la table des données démographiques qui ,elle, n'a besoin que d'un fetch, la table final est largement incomplète vu que la jointure s'applique une fois. DOnc on a réglé le problème comme suit: créer un grand tableau commune qui contiendra tous les arrondissements, générer le tableau des ventes d'un arrondissement, le joindre avec le tableau contenant les infos démographiques et mettre le bloc dans le grand tableau commune. Ainsi, on aura les infos de toutes les communes disponibles, et ceci nous facilitera grâce à la clé qui est le code commune, de générer des graphiques une fois qu'on clique sur une commune en cherchant directement dans le grand tableau commune la clé correspondante.

## Participants

Cheikh DIOP, Thibaut ESCALANTE, Sophie NGOTALA, Yannis RACHID
