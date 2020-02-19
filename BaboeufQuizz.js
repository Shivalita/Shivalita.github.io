/* Ceci est mon tout premier projet. Avant ça, je n'ai fait que de petits exercices, rien d'aussi "complexe" et de loin (on se moque pas, merci !).
Le code est sûrement brouillon, voire bizarre, et pas du tout optimisé... Mais je l'ai fait à ma manière, avec les connaissances dont je disposais.
J'espère que mes commentaires vous aideront à y voir plus clair, et que vous serez indulgent envers la débutante que je suis. Bonne lecture ^^ */


/* Crée une classe pour les questions avec comme propriétés :
Le nom : la question à afficher.
Les choix : les 3 propositions de réponses, contenues dans un tableau.
La réponse : la bonne réponse à la question, sous forme d'index numérique (correspondant à son emplacement dans le tableau des propositions).
Le nom propre : un booléen déterminant si la réponse est un nom propre ou non. */
class Topic {
    constructor(name, choices, answer, properNoun = false) {
        this.name = name;
        this.choices = choices;
        this.answer = answer;
        this.properNoun = properNoun;
    }
}

var listOfQuestions = [
    new Topic("Quelle est la capitale de l’Australie ?", ["Melbourne", "Sydney", "Canberra"], 2, true),
    new Topic("Quelle est la capitale du Brésil ?", ["Brasilia", "Rio de Janeiro", "Sao Paulo"], 0, true),
    new Topic("L'assassinat de John F. Kennedy a eu lieu en quelle année ?", ["1958", "1963", "1968"], 1),
    new Topic("De combien de syllabes est composé un alexandrin ?", ["8 syllabes", "10 syllabes", "12 syllabes"], 2),
    new Topic("Quel est le symbole chimique de l’azote ?", ["N", "S", "At"], 0, true),
    new Topic("Quel est le symbole chimique du sodium ?", ["K", "Na", "Si"], 1, true),
    new Topic("Quel est le symbole chimique du carbone ?", ["C", "Ca", "Cr"], 0, true),
    new Topic("Le pourcentage d'eau douce sur Terre est de ?", ["3%", "9%", "15%"], 0),
    new Topic("L’art de cultiver les bonsaïs est originaire de quel pays ?", ["Indonésie", "Inde", "Japon"], 2, true),
    new Topic("Le kiwi est un fruit mais aussi un animal, lequel ?", ["un reptile", "un oiseau", "un poisson"], 1),
    new Topic("Les 'gouttes' qui se forment au plafond des grottes se nomment ?", ["Des stalagmites", "Des stalagdites", "Des stalactites"], 2),
    new Topic("Au coeur de l'ouragan Katrina, les vents ont pu atteindre ?", ["180 kilomètres/heure", "280 kilomètres/heure", "380 kilomètres/heure"], 1),
    new Topic("De quel poisson proviennent les œufs que l'on nomme caviar ?", ["Le saumon", "Le brochet", "L’esturgeon"], 2),
    new Topic("L'océan Pacifique a une profondeur maximale de ?", ["3.000 mètres", "7.000 mètres", "11.000 mètres"], 2),
    new Topic("Combien y a-t-il de volcans actifs sur Terre ?", ["100", "500", "1500"], 2),
    new Topic("La couleur externe de l'arc de cercle d'un arc-en-ciel est ?", ["Le bleu", "Le rouge", "Le vert"], 1),
    new Topic("L'évènement astronomique du jour le plus long de l'année se nomme ?", ["Solstice d'été", "Équinoxe d'été", "Sextant d'été"], 0),
    new Topic("Les cellules du sang qui jouent un rôle de défense immunitaire sont ?", ["Les globules rouges", "Les globules blancs", "Les plaquettes"], 1),
    new Topic("La lumière se déplace à une vitesse constante de ?", ["3.000 kilomètres/seconde", "30.000 kilomètres/seconde", "300.000 kilomètres/seconde"], 2),
    new Topic("En conditions normales, le son se déplace dans l'air à une vitesse de ?", ["34 mètres/seconde", "340 mètres/seconde", "3.400 mètres/seconde"], 1),
    new Topic("La bile, qui intervient dans la digestion, est sécrétée par ?", ["L'estomac", "Le foie", "Le pancréas"], 1),
    new Topic("Lequel de ces os ne se situe pas dans le bras ?", ["L'humérus", "Le radius", "Le sacrum"], 2),
    new Topic("Lequel de ces os ne se situe pas dans la jambe ?", ["Le fémur", "Le cubitus", "Le péroné"], 1),
    new Topic("La dentition définitive d’un adulte compte ?", ["24 dents", "28 dents", "32 dents"], 2),
    new Topic("Le squelette d’un homme adulte est constitué de ?", ["106 os", "206 os", "306 os"], 1),
    new Topic("Le corps humain contient environ ?", ["1 litre de sang", "3 litres de sang", "5 litres de sang"], 2),
    new Topic("En un an, les cheveux poussent d'environ ?", ["6 centimètres", "12 centimètres", "24 centimètres"], 1),
    new Topic("Chez quelle ethnie les cheveux poussent-ils le plus vite ?", ["Le type asiatique", "Le type africain", "Le type caucasien"], 0),
    new Topic("L'élément dont le soleil est composé aux trois quarts est ?", ["L'hydrogène", "L'azote", "L'oxygène"], 0),
    new Topic("Quand la puissance d'un son double, on lui ajoute ?", ["3 décibels", "15 décibels", "30 décibels"], 0),
    new Topic("Quelle est la température qui règne à la surface du soleil ?", ["Environ 5.000°C", "Environ 50.000°C", "Environ 500.000°C"], 0),
    new Topic("Sur le poids total d'un adulte, le squelette représente ?", ["Environ 7%", "Environ 15%", "Environ 30%"], 1),
    new Topic("De la naissance à 1 an, le poids d'un bébé est multiplié par ?", ["Deux", "Trois", "Quatre"], 1),
    new Topic("Quelle langue ne fait pas partie des 3 plus parlées dans le monde ?", ["Arabe", "Mandarin", "Hindi"], 2),
    new Topic("Le Mont Blanc est le plus haut sommet d'Europe et culmine à environ ?", ["2800 mètres", "3800 mètres", "4800 mètres"], 2),
    new Topic("L'Everest est le plus haut sommet du monde et culmine à environ ?", ["7800 mètres", "8800 mètres", "9800 mètres"], 1),
    new Topic("En chiffres romains, 500 s'écrit ?", ["D", "L", "M"], 0, true),
    new Topic("Comment appelle-t-on un voyageur spatial européen ?", ["Un spationaute", "Un astronaute", "Un cosmonaute"], 0),
    new Topic("Lequel de ces pays n'est pas une monarchie mais une république ?", ["Norvège", "Danemark", "Finlande"], 2, true),
    new Topic("Laquelle de ces villes ne fait pas partie des 3 plus peuplées au monde ?", ["Bombay", "Sao Paulo", "Tokyo"], 0, true),
    new Topic("Laquelle de ces villes est la plus peuplée ?", ["New York", "Mexico", "Le Caire"], 2, true),
    new Topic("La découverte du premier antibiotique, la pénicilline, a eu lieu en ?", ["1928", "1938", "1948"], 0),
    new Topic("La première télécommande de télévision sans fil a été commercialisée en ?", ["1945", "1955", "1965"], 1),
    new Topic("Les premières briques Lego ont été commercialisées en ?", ["1954", "1964", "1974"], 0),
    new Topic("La première greffe du coeur a eu lieu en ?", ["1947", "1957", "1967"], 2),
    new Topic("Le premier téléphone portable a été commercialisé en ?", ["1980", "1984", "1988"], 1),
    new Topic("La Game Boy est sortie en Europe en ?", ["1986", "1990", "1994"], 1),
    new Topic("Wikipédia a été créé en ?", ["2001", "2003", "2005"], 0),
    new Topic("Le premier iPhone a été commercialisé en ?", ["2005", "2007", "2009"], 1),
    new Topic("Le chef-d'oeuvre Disney Le Roi Lion est sorti en ?", ["1992", "1994", "1996"], 1),
    new Topic("Youri Gagarine a été le premier homme à aller dans l'espace en ?", ["1961", "1964", "1967"], 0),
    new Topic("Le premier long métrage d'animation de Disney est ?", ["Bambi", "Pinocchio", "Blanche-Neige et les Sept Nains"], 2, true),
    new Topic("Le Machu Picchu se trouve dans quel pays ?", ["Pérou", "Argentine", "Bolivie"], 0, true),
    new Topic("La Terre a une circonférence d'environ ?", ["20.000 kilomètres", "40.000 kilomètres", "60.000 kilomètres"], 1),
    new Topic("La Terre est âgée d'environ ?", ["2,5 milliards d'années", "4,5 milliards d'années", "6,5 milliards d'années"], 1),
    new Topic("Combien y a-t-il de consonnes dans l'alphabet ?", ["20", "22", "24"], 0),
    new Topic("Le Grand Canyon se situe dans quel état ?", ["Colorado", "Nevada", "Arizona"], 2, true),
    new Topic("Où trouve-t-on des ours et des renards polaires ?", ["Arctique", "Antarctique", "Arctique et Antarctique"], 0, true),
    new Topic("Le poids du grand anaconda peut atteindre ?", ["100 kilogrammes", "150 kilogrammes", "200 kilogrammes"], 2),
    new Topic("Le lama est de la même famille que ?", ["Le chameau", "Le mouton", "Le bison"], 0),
    new Topic("L'autruche court à une vitesse moyenne de ?", ["30 kilomètres/heure", "50 kilomètres/heure", "70 kilomètres/heure"], 2),
    new Topic("Le guépard peut atteindre une vitesse de sprint de ?", ["90 kilomètres/heure", "110 kilomètres/heure", "130 kilomètres/heure"], 1),
    new Topic("Le kangourou saute jusqu'à une hauteur de ?", ["3,5 mètres", "4,5 mètres", "5,5 mètres"], 0),
    new Topic("Le dauphin peut sauter hors de l'eau jusqu'à une hauteur de ?", ["3 mètres", "5 mètres", "7 mètres"], 2),
    new Topic("La panthère des neiges peut faire des sauts d'une longueur de ?", ["9 mètres", "12 mètres", "15 mètres"], 2),
    new Topic("Le lapin peut faire des sauts d'une longueur de ?", ["3 mètres", "4 mètres", "5 mètres"], 0),
    new Topic("Le requin du Groenland peut vivre jusqu'à près de ?", ["100 ans", "200 ans", "400 ans"], 2),
    new Topic("Lequel de ces insectes peut vivre jusqu'à 6 mois ?", ["La libellule", "La fourmi ouvrière", "L'abeille ouvrière"], 0),
    new Topic("Le chien peut percevoir des sons jusqu'à une distance de ?", ["15 kilomètres", "25 kilomètres", "35 kilomètres"], 1),
    new Topic("L'ours polaire peut détecter l'odeur d'une proie jusqu'à une distance de ?", ["5 kilomètres", "10 kilomètres", "20 kilomètres"], 2),
    new Topic("Une baleine bleue à la naissance pèse déjà jusqu'à ?", ["300 kilogrammes", "1 tonne", "3 tonnes"], 2),
    new Topic("La baleine bleue peut atteindre une longueur de ?", ["15 mètres", "25 mètres", "35 mètres"], 1),
    new Topic("Le chameau peut vivre jusqu'à combien de temps sans boire ?", ["2 semaines", "4 semaines", "8 semaines"], 1),
    new Topic("En quelques minutes, un chameau peut boire plus de ?", ["20 litres d'eau", "50 litres d'eau", "100 litres d'eau"], 2),
    new Topic("Combien de joueurs y a-t-il sur le terrain lors d'un match de volley-ball ?", ["8", "10", "12"], 2),
    new Topic("Au basket-ball, un panier peut valoir jusqu'à ?", ["2 points", "3 points", "5 points"], 1),
    new Topic("Usain Bolt a atteint une vitesse de pointe de plus de ?", ["34 kilomètres/heure", "44 kilomètres/heure", "54 kilomètres/heure"], 1),
    new Topic("Le record du monde du saut en hauteur est d'environ ?", ["2,5 mètres", "3 mètres", "3,5 mètres"], 0),
    new Topic("Le record du monde du saut en longueur est d'environ ?", ["7 mètres", "9 mètres", "11 mètres"], 1),
    new Topic("Le cachemire provient de quel animal ?", ["La chèvre", "Le mouton", "Le lama"], 0),
    new Topic("Dans quelle ville a été inauguré le tout premier métro ?", ["Londres", "Paris", "New York"], 0, true),
    new Topic("Qui a composé l'Ode à la joie ?", ["Ludwig van Beethoven", "Wolfgang Amadeus Mozart", "Jean-Sébastien Bach"], 0, true),
    new Topic("Qui a composé La Marche Turque ?", ["Ludwig van Beethoven", "Wolfgang Amadeus Mozart", "Jean-Sébastien Bach"], 1, true),
    new Topic("La figure totalitaire de Big Brother apparaît dans le roman ?", ["1984", "Si c'est un homme", "Le Meilleur des mondes"], 0, true),
    new Topic("William Shakespeare a pour héroïne Ophélie dans sa pièce ?", ["Hamlet", "Macbeth", "La Mégère apprivoisée"], 0, true),
    new Topic("Quelle diva chantait dans le groupe The Supremes ?", ["Whitney Houston", "Aretha Franklin", "Diana Ross"], 2, true),
    new Topic("Lequel de ces albums s'est le plus vendu ?", ["Oops!... I Did It Again de Britney Spears", "Back in Black de AC/DC", "Like a Virgin de Madonna"], 1, true),
    new Topic("Lequel de ces albums s'est le plus vendu ?", ["Saturday Night Fever des Bee Gees", "Spice des Spice Girls", "Back to Black d'Amy Winehouse"], 0, true),
    new Topic("Lequel de ces singles s'est le plus vendu ?", ["Smells Like Teen Spirit de Nirvana", "Rivers of Babylon de Boney M.", "I Will Always Love You de Whitney Houston"], 2, true),
    new Topic("Lequel de ces singles s'est le plus vendu ?", ["Maria de Ricky Martin", "Y.M.C.A. des Village People", "Waterloo de ABBA"], 1, true),
    new Topic("Lequel de ces films a eu le plus gros succès au box-office mondial ?", ["Star Wars, épisode VII : Le Réveil de la Force", "Jurassic Park", "Harry Potter à l'école des sorciers"], 0, true),
    new Topic("Lequel de ces films a eu le plus gros succès au box-office mondial ?", ["Pirates des Caraïbes : Le Secret du coffre maudit", "Fast and Furious 7", "The Dark Knight : Le Chevalier noir"], 1, true),
    new Topic("Stephen King a écrit plus de ?", ["20 romans", "40 romans", "60 romans"], 2),
    new Topic("Charlie Chaplin a joué dans ?", ["11 longs métrages", "21 longs métrages", "31 longs métrages"], 0),
    new Topic("Où se situait le territoire de la civilisation Aztèque ?", ["Pérou", "Argentine", "Mexique"], 2, true),
    new Topic("Où se situait le territoire de la civilisation Inca ?", ["Pérou", "Venezuela", "Mexique"], 0, true),   
    new Topic("Lequel de ces fleuves est le plus long ?", ["Nil", "Mékong", "Rio Grande"], 0, true),
    new Topic("Lequel de ces fleuves est le plus long ?", ["Congo", "Niger", "Mississippi"], 2, true),
    new Topic("Qu'est-ce que le diaphragme ?", ["Un os", "Un muscle", "Un tendon"], 1),
    new Topic("Quelle est l'unité de résistance électrique ?", ["L'ampère", "L'ohm", "Le volt"], 1),
    new Topic("Quelles sont les deux plus grosses planètes du système solaire ?", ["Jupiter et Saturne", "Saturne et Neptune", "Jupiter et Venus"], 0, true),
]

var options = document.getElementsByName("options");
var winLoose = document.getElementById("winLoose");
var report = document.getElementById("report");
var score = document.getElementById("score");
var counterScreen = document.getElementById("counter");
var caption = document.getElementById("caption");
var counter = 1;
var points = 0;
var list;
var n;
// Variable destinée à contenir la bonne réponse à la question, à la fois sous forme littéraire et numérique (son emplacement dans le tableau des propositions).
var goodAnswer;


// Stocke la liste de questions chez l'utilisateur.
function storage(listToStore) {
    var stringList = JSON.stringify(listToStore);
    localStorage.setItem("localList", stringList);
}

// Si la liste n'est pas déjà stockée chez l'utilisateur, la stocke et la récupère pour agir dessus (pour éviter les répétitions de questions d'une partie sur l'autre).
if(!localStorage.getItem("localList")) {
    storage(listOfQuestions);   
} else 

list = JSON.parse(localStorage.getItem("localList"));
if(!list) {
    list = listToStore;
}

// S'il reste 10 questions ou moins dans la liste, remet toutes les questions.
if(list.length <= 10) {
    storage(listOfQuestions);
    list = JSON.parse(localStorage.getItem("localList"));
}


function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function defineQuestion() {

    // Fait de n un nombre aléatoire grâce à la fonction randomNumber ci-dessus.
    n = randomNumber(0, (list.length -1));  

    // Affiche la question correspondant à ce nombre dans la liste des questions.  
    document.querySelector("#question").innerHTML = list[n].name;

    // Stocke la bonne réponse dans goodAnswer.
    goodAnswer = [list[n].choices[list[n].answer], list[n].answer];

    // Affiche les propositions de réponses.
    for (let i = 0; i < 3; i++) {
        document.getElementsByTagName("label")[i].innerHTML = list[n].choices[i];      
    }
}


// Démarre le jeu en changeant le display des différentes div selon leur utilité.
function startGame() {

    document.getElementById("mainPicture").style.display = "none";
    document.getElementById("picture").style.display = "block";
    document.getElementById("startButton").style.display = "none";
    document.getElementById("presentation").style.display = "none";
    document.getElementById("score").style.display = "block";
    document.getElementById("choices").style.display = "block";
    document.getElementById("question").style.display = "block";
    document.getElementById("validationButton").style.display = "block";
    document.getElementById("counter").style.display = "block";
    document.getElementById("score").innerHTML = "SCORE : 0";

    changeImage("images/judgy");
    caption.innerHTML="Minou te regarde. Et te juge.";

    // Définit une 1ère question.
    defineQuestion();
}


var goodAnswerDisplay;


function lowerCaseAnswer(answer) {

    if(list[n].properNoun == false) {
        // Si ce n'est pas un nom propre, convertit la réponse à afficher en minuscules.
        goodAnswerDisplay = answer.toLowerCase();   

    } else {
        // Si c'est un nom propre, la stocke telle quelle. 
        goodAnswerDisplay = answer;
    }
}

// Modifie la source de l'image selon la catégorie à afficher.
function changeImage(imgCategory) {
    document.getElementById("picture").src = imgCategory + Math.round(Math.random()*15) + ".jpg";
}


var selected;
var checked;

function checkAnswer() {

    document.getElementById("results").style.visibility = "visible"; 
    document.getElementById("winLoose").style.display = "block";

    // Vérifie si une réponse a été choisie. Si oui, enregistre qu'un choix a été fait (checked) et stocke la réponse choisie dans selected.
    for(var i = 0; i < options.length; i++){

        if(options[i].checked){
            selected = options[i].value;
            checked = true;
        } 
    }

    // Si rien n'a été stocké dans selected, enregistre qu'aucun choix n'a été fait.
    if(selected == "") {
        checked = false;
    }

    if(checked == true) {

        // Vérifie si la réponse choisie est juste en la comparant avec la bonne réponse (par son index numérique).
        if(selected == goodAnswer[1]) {

            // Si oui, affiche le texte correspondant, attribue 1 point et affiche une image aléatoire de chat content avec sa légende.
            document.getElementById("winLoose").className = "win";
            document.getElementById("caption").className = "win";
            winLoose.innerHTML = "BONNE RÉPONSE !";
            report.innerHTML = "Tu gagnes 1 point.";            
            points += 1;
            changeImage("images/happy");
            caption.innerHTML = "Minou est content."

        } else {

            // Si non, affiche le texte correspondant, formate la bonne réponse et l'affiche, et affiche une image aléatoire de chat pas content avec sa légende.   
            document.getElementById("winLoose").className = "loose";   
            document.getElementById("caption").className = "loose";   
            winLoose.innerHTML = "LOUPÉ !";
            lowerCaseAnswer(goodAnswer[0]);
            report.innerHTML = "Il fallait répondre " + goodAnswerDisplay + ".";
            changeImage("images/angry");
            caption.innerHTML = "Minou n'est pas content."
        }

    } else {

        // Si aucune réponse n'a été choisie, demande de choisir une réponse.
        winLoose.innerHTML = "";
        report.innerHTML = "Choisis une réponse !";
    }

    // Actualise l'affichage du score.
    score.innerHTML = "SCORE : " + points;
    
    // Réinitialise le choix de réponse (décrète toutes les options décochées).
    for(var i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// Vide la variable qui stocke la réponse choisie.
function clearChoice() {
    selected = "";
}

// Supprime la question de la liste pour éviter les répétitions.
function clearQuestion() {
    list.splice(n, 1);
}


function quizz() {

    // Vérifie la réponse.
    checkAnswer();

    // Puis, si une réponse a bien été choisie (sinon ne fait rien, forçant l'utilisateur à choisir une réponse pour poursuivre) : 
    if(checked) {

        // Incrémente le compteur et le compteur affiché à l'écran, supprime la question de la liste, définit une nouvelle question, et remet à zéro la réponse choisie.
        counter += 1;
        counterScreen.innerHTML = counter + "/10";
        clearQuestion();
        defineQuestion();            
        clearChoice();
        // Renvoie la liste à l'utilisateur (pour éviter les répétitions de questions en cas de rechargement de la page).
        storage(list);
    }
}


var status = "inGame";

function game() { 

    switch (status) {

    // Si en cours de jeu :
    case "inGame":

        // Arrête le jeu après 10 questions.
        if(counter < 10) {
            quizz();

        // A la dernière question, change le display et le statut du jeu.
        } else {
            checkAnswer();
            document.getElementById("counter").style.display = "none";
            document.getElementById("question").style.display = "none";
            document.getElementById("choices").style.display = "none";
            status = "outcome";
        }
        break;

    // Si le jeu est en statut bilan :
    case "outcome":

        // Affiche le rapport du score selon le nombre de points obtenu.
        if(points == 10) {
            document.getElementById("picture").src = "images/score10.jpg";
            report.innerHTML = ("Waouh score parfait, félicitations ! Minou est K.O, il ne s'en remettra jamais...<br>Tu n'es définitivement plus un baboeuf à ses yeux. Tu as gagné son infini respect et son immense admiration... Victoire absolue !");
        
        } else if(points == 9) {
            document.getElementById("picture").src = "images/score9.jpg";
            report.innerHTML = ("Tu as marqué 9 points, presque un sans-faute bravo ! Minou est totalement sidéré...<br>Tu n'es définitivement plus un baboeuf à ses yeux. Tu as gagné son plus grand respect et sa profonde admiration... Victoire totale !");
        
        } else if(points == 8) {
            document.getElementById("picture").src = "images/score8.jpg";
            report.innerHTML = ("Tu as marqué 8 points, excellent score bravo ! Minou est totalement ébloui...<br>Tu n'es définitivement plus un baboeuf à ses yeux. Tu as gagné tout son respect et sa sincère admiration... Victoire totale !");
       
        } else if(points == 7) {
            document.getElementById("picture").src = "images/score7.jpg";
            report.innerHTML = ("Tu as marqué 7 points, joli score bravo ! Minou est épaté et te félicite, il est fier de toi...<br>Tu n'es plus un baboeuf à ses yeux. Tu as gagné son respect et une certaine admiration... Victoire !");
        
        } else if(points == 6) {
            document.getElementById("picture").src = "images/score6.jpg";
            report.innerHTML = ("Tu as marqué 6 points, pas mal ! Tu es au-dessus de la moyenne, youpi ! Minou est content de toi...<br>Tu n'es plus un baboeuf à ses yeux. Tu as gagné son respect... Victoire !");
       
        } else if(points == 5){
            document.getElementById("picture").src = "images/score5.jpg";
            report.innerHTML = ("Tu as marqué 5 points, pas trop mal ! La moyenne, juste ce qu'il faut pour être confortable. Minou est satisfait...<br>Tu n'es plus vraiment un baboeuf à ses yeux. Tu as gagné un certain respect... Victoire !");
       
        } else if(points == 4) {
            document.getElementById("picture").src = "images/score4.jpg";
            report.innerHTML = ("Tu as marqué 4 points, peut mieux faire ! Tu es en-dessous de la moyenne. Minou n'est pas convaincu...<br>Tu es toujours un baboeuf à ses yeux. Tu n'as pas gagné son respect... Dommage !");
       
        } else if(points == 3) {
            document.getElementById("picture").src = "images/score3.jpg";
            report.innerHTML = ("Tu as marqué 3 points, pas terrible ! Minou ricane devant ta performance...<br>Tu es toujours un baboeuf à ses yeux. Tu as perdu un peu de son respect, et tu n'en avais déjà pas beaucoup... Oups !");
        
        } else if(points == 2) {
            document.getElementById("picture").src = "images/score2.jpg";
            report.innerHTML = ("Tu as marqué 2 points, une misère ! Minou se marre franchement devant ta performance...<br>Tu es toujours un baboeuf à ses yeux. Tu as perdu un peu de son respect, et tu n'en avais déjà pas beaucoup... Oups !");
       
        } else if(points == 1) {
            document.getElementById("picture").src = "images/score1.jpg";
            report.innerHTML = ("Tu as marqué 1 point, aïe ! Minou se fend la poire devant ta performance...<br>Tu es définitivement un baboeuf à ses yeux. Tu as perdu le peu de respect qu'il avait pour toi... Oups !");
       
        } else {
            document.getElementById("picture").src = "images/score0.jpg";
            report.innerHTML = ("Tu n'as marqué aucun point, la cata ! Minou est mort de rire devant ta performance...<br>Tu es définitivement un baboeuf à ses yeux. Tu as perdu le peu de respect qu'il avait pour toi... Oups !");
        }
        
        // Change le display et le statut du jeu.
        document.getElementById("winLoose").style.display="none";   
        caption.innerHTML = "";
        status = "endText";
        break;

    // Si le jeu est en statut texte de fin :
    case "endText":

        document.getElementById("results").style="visibility:hidden"; 
        document.getElementById("caption").className = "text"; 

        // Affiche une phrase de fin en fonction du score obtenu.
        if(points >= 7) {
            caption.innerHTML = "Tu peux relancer une partie, les questions seront différentes.<br>Prouve à minou que ce n'était pas qu'un coup de chance !";
        
        } else if(points >= 5){
           caption.innerHTML = "Tu peux relancer une partie, les questions seront différentes.<br>Essaie d'obtenir un meilleur score pour impressionner minou !"; 
        
        } else if(points >= 3){
            caption.innerHTML = "Tu peux relancer une partie, les questions seront différentes.<br>Essaie de gagner le respect de minou cette fois !"; 
        
        } else {
            caption.innerHTML = "Tu peux relancer une partie, les questions seront différentes.<br>Essaie de récupérer le peu de respect que t'accordait minou !";
        }

        // Change le display et le statut du jeu.
        document.getElementById("picture").src = "images/end.jpg";          
        document.getElementById("score").style.display = "none";
        document.getElementById("validateButton").value = "Terminer";
        status = "endGame";
        break;

    // Si le jeu est en statut fin du jeu : Recharge la page pour redémarrer.
    case "endGame":
        window.location.reload();
        break;

    default:
        break;
    }
}