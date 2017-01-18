# Notif Cosmos EI - Front

Ce projet à été généré avec [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.21.

# Installation

## Etape 1, cloner le dépôt

```bash
git clone git@github.com:ValentinCro/NotifCosmoEI-front.git # via ssh
git clone https://github.com/ValentinCro/NotifCosmoEI-front.git # via http

cd NotifCosmoEI-front
```

## Etape 2, Configurer l'application

Toutes les routes sont consignées dans un fichier se trouvant src/app/http-service.service.ts, elles pointent vers l'ip local. 
Il est possible de changer la variable baseUrl si vous voulez
déployer le back et le front sur deux serveurs distincts.

## Etape 3, lancer le serveur

Pour tester le front vous pouvez executer la commande `ng serve` pour lancer un serveur de dev. Naviguez jusqu'à `http://localhost:4200/`. L'application va automatiquement se recharger si les sources sont modifiées.

# Technologies

Pour le front nous avons utilisé deux technologies :
- [angular2](https://angular.io/) : un framework JS utilisant [TypeScript 2](http://www.typescriptlang.org/)
- [Bulma](http://bulma.io/) : un framework CSS n'utilisant pas de JS
- [Font Awesome 4.7.0](http://fontawesome.io/icons/) : framework CSS permettant l'ajout d'un grand nombre d'icons

# Fonctionnalités

## Authentification

Il est possible de s'inscrire, il faut alors renseigner une adresse mail, un nom d'utilisateur, un prénom, un nom et un mot de passe. 
Le front reçoit alors le token de l'utilisateur qui est alors stocké dans le LocalStorage. L'utilisateur reste connecté tant que 
le LocalStorage n'est pas supprimé où qu'il est volontairement utilisé la Fonctionnalité de déconnexion. Une fois inscrit l'utilisateur peut 
s'inscrire en renseignant son nom d'utilisateur et son mot de passe.

## Création

Pour la création l'utilisateur doit être authentifié. Pour les produits, les ingrédients et les effets indésirables il est impossible
de créer deux fois la même entité.

### Notification

Il est possible de créer une notification de A à Z. On peut alors rechercher des produits existant où les créer.
Ensuite on peut rechercher des effets indésirable déjà existant où les créer. On peut renseigner le code de sont département
récupéré depuis l'api [https://geo.api.gouv.fr](https://geo.api.gouv.fr).
Une fois la notification créée l'utilisateur est redirigé vers la page de détail de cette notification.

### Produit

Il est possible de créer un produit de A à Z. On peut alors rechercher les ingrédients existant ou de les créer. Lorsque
le produit est créé l'utilisateur est alors redirigé vers la page de détail du produit.

### ingrédient

Il est possible de créer un ingrédient. Lorsque l'ingrédient est créé l'utilisateur est alors redirigé vers la page de détail de l'ingrédient.

### Effets indésirables

Il est possible de créer un effet indésirable. Lorsque l'effet indésirable est créé l'utilisateur est alors redirigé vers la page de détail de l'effet indésirable.

## Recherche

Une page de recherche permet à l'utilisateur de faire une recherche parmis les produits, les ingrédients et les effets indésirables.
Via les produits il est possible d'accéder à la page de détail du produit et d'y voir alors les ingrédients que composent ce produit.

## Lecture

Chaque entité peut être consultée via une page détaillant l'entité. A l'adresse /entité/{id de l'entité}. Si l'id de l'entité n'existe pas
l'utilisateur est redirigé vers une page 404.

## Accueil

Sur l'accueil est affiché deux tableaux. L'un affichant les effets secondaires les plus reportés l'autre affichant les effets indésirables 
les plus lourds (en poid) cf partie back du rapport.