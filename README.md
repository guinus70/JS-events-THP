Fonctionnalité 1 : On commence par un petit échauffement : lorsque l'utilisateur va cliquer sur le footer (portant le tag

), tu vas afficher le mot "clique" en console.
Cette fonctionnalité doit être codée avec un addEventListener("click", function(){ } car c'est une bonne habitude à prendre ! innocent

Fonctionnalité 1-bis : Maintenant on va upgrader cette première fonctionnalité : lorsque l'utilisateur va cliquer sur le footer, tu vas afficher en console "clic numéro x" avec x qui commence à 1 et s'incrémente de +1 à chaque clic.

Indice : Rien de très compliqué par rapport à la version précédente : déclare une variable qui va servir de compteur et incrémente-la quand l'évènement a lieu !

Fonctionnalité 2 : On va enfin faire fonctionner ce satané "Hamburger Menu" qui s'affiche depuis le début mais qui n'actionne rien quand on clique dessus. C'est quoi un "hamburger menu" ? C'est ça, ce bouton avec trois lignes horizontales en haut à droite de la navbar.

Tu vas faire que si quelqu'un clique sur ce bouton, l'élément HTML portant l'Id navbarHeader perde sa classe collapse. Une fois que ça, ça marche, fait que si on clique à nouveau dessus, la classe collapse soit rajoutée à nouveau à l'élément portant l'Id navbarHeader

Indice : Il existe une fonction qui permet de rajouter une classe si elle n'est pas déjà présente et l'enlever si elle est déjà présente. C'est "toggle". Tu peux l'utiliser ainsi : elementDuDOM.classList.toggle("nomDeLaClasse")

Fonctionnalité 3 : À présent, on va faire cela : si on clique sur le bouton "Edit" de la première card, le texte de la card va se mettre en rouge de façon irréversible (sauf si on recharge la page). À toi de jouer !

Indice : Commence par bien pointer sur la première card en entier (stocke-la dans une variable puis affiche-la en console pour confirmer que tu l'as bien pointé). Puis pointe vers le bouton Edit de cette card (idem : stocke-le dans une variable et affiche-le en console). Une fois que ça c'est bien fait, tu peux facilement rajoute un style ="color: red" au texte de la card !

Fonctionnalité 4 : On va faire quelque chose de similaire à la fonctionnalité 3 mais un peu plus complexe : si on clique sur le bouton "Edit" de la deuxième card, le texte de la card va se mettre en vert. Si on re-clique dessus, il redevient comme avant ! Tu l'as compris, il va falloir que tu cherches comment faire un "toggle" sur le style du texte. C'est plus compliqué que sur une classe.

Indice : Reprend le code de la fonctionnalité 3 et adapte-le pour qu'il marche sur la 2ème card (et en remplaçant le rouge par du vert). Maintenant, pour le toggle, il va falloir te faire un petit if / else dans ton AddEventListener. On te donne le début : if (secondCard.style.color === 'green'){ secondCard.style.color = '' ; }else …

Fonctionnalité 5 : Pour le fun, on va implémenter une fonctionnalité à la sauce radioactive"nucléaire"exploding_head. Et comme elle est un peu dangereuse, on va la cacher… Voici comment elle doit marcher : si un utilisateur double clique sur la navbar en haut, tout Bootstrap disparaît et la page s'affiche comme si on avait oublié de mettre le CDN qui la relie au fichier CSS. Si possible, rends cette fonctionnalité réversible (un nouveau double-clic fait tout revenir à la normale).

Indice : Cherche sur Google comment désactiver le tag avec JavaScript.

Fonctionnalité 6 : T'as déjà implémenté 5 fonctionnalités d'interaction ! C'est top ! On va commencer à corser les choses.

La fonctionnalité sera la suivante : si un utilisateur passe sa souris sur le bouton "View" d'une card (n'importe laquelle), celle-ci va se réduire. Cela veut dire que le texte disparaît, l'image n'apparaîtra qu'à 20 % de sa taille d'origine et les boutons "Edit" / "View" restent visibles. Cette fonction sera réversible : s'il repasse sa souris, la card redevient normale !

Indice 1 : Commence par implémenter cette fonctionnalité sur une card avant d'essayer de les faire toutes.

Indice 2 : Tu vas devoir appliquer les leçons apprises sur la fonctionnalité 2 (toggle de la classe "collapse") et sur la fonctionnalité 3 (toggle sur le style appliqué à l'image : tantôt on lui rajoute "width: 20 %;", tantôt on lui enlève).

Indice 3 : Une fois que ça marche sur une card, fait une boucle for sur la liste des 6 cards (a priori tu as extrait la card d'une liste d'éléments HTML non?) pour appliquer un addEventListener à chacune. /!\ mets bien le compteur de ta boucle en "let", sinon tu vas avoir des surprises… => clique ici pour accéder à une ressource qui parle de ça

Fonctionnalité 7 : Allez on va rajouter un peu de WTF dans la page : si un utilisateur clique sur le bouton gris ==>, la dernière card (en bas à droite) va passer en premier (en haut à gauche). On va pouvoir faire tourner les cards !

Indice : Cette fonctionnalité n'est pas ultra complexe en fait : il faut pointer sur le noeud-parent des 6 cards puis déplacer la card n°6 en premier avec un insertBefore.

Petite remarque : tu vas réaliser que si tu mélanges les cards, il est fort probable que la fonctionnalité 6 va se mettre à faire n'importe quoi. Si tu survoles un bouton "View", c'est une autre card qui va se réduire. Si tu arrives à corriger ça, c'est cool mais la consigne est d'ignorer ce souci pour le moment.

Fonctionnalité 8 : Évidemment tu t'y attendais : on va faire tourner les card dans l'autre sens aussi. Donc si un utilisateur clique sur le bouton bleu <==, la première card devra passer en dernier. À première vue, tu te dis que si tu as réussi à faire la fonctionnalité précédente, celle-ci c'est du gateau... sauf qu'il y a quelques pièges. smiling_imp

Indice 1 : Premier piège : il y a un lien HTML sur le bouton et si tu cliques dessus, une page s'ouvre ! Il faut que tu bloques ce comportement par défaut (via l'objet event - cf le cours).

Indice 2 : Deuxième piège : tu as utilisé "insertBefore" pour la fonctionnalité précédente mais il n'y a pas de "insertAfter". Une solution est de considérer qu'un "insertAfter un élément A" serait, s'il existait, équivalent à faire un "insertBefore sur le nœud APRES l'élément A". Et tu peux pointer sur un noeud APRES un élément en faisant "lastCard.nextSibling".

Fonctionnalité 9 : Bon si t'es arrivé jusque-là, c'est que t'as besoin d'un peu de challenge. Du coup je t'ai concocté une fonctionnalité de derrière les fagots, spécialement conçue pour les moussaillons pas piqués des hannetons (this sentence is brought to you by www.vieilles-expressions.fr). Voici ce qu'elle va devoir faire :

La fonctionnalité se déclenchera si le logo de la page (JS & Events) est sélectionné et qu'on appuie sur une touche spécifique du clavier. Si l'utilisateur presse la touche "a", l'ensemble de la page va être condensé sur 4 colonnes Bootstrap à gauche de l'écran. Si l'utilisateur presse la touche "y", l'ensemble de la page va être condensé sur 4 colonnes Bootstrap au milieu de l'écran. Si l'utilisateur presse la touche "p", l'ensemble de la page va être condensé sur 4 colonnes Bootstrap à droite de l'écran. Si l'utilisateur presse la touche "b", tout redevient normal.
