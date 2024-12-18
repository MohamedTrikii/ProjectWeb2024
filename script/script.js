function verifier() {
    var score = 0; // Initialiser score
    var correctAnswers = ["6", "20", "42", "72", "24", "25", "81", "56", "27", "100"]; // les réponses correctes
    var feedback = ""; // Initialiser feedback

    // Parcours des 10 questions
    for (var i = 0; i < 10; i++) {
        var question = document.getElementsByName("q" + (i + 1)); // Recupere les boutons radio pour chaque question
        var answered = false; // Vérifie si une réponse est cochée

        // Parcours pour trouver la réponse cochée
        for (var j = 0; j < question.length; j++) {
            if (question[j].checked) {
                answered = true;
                if (question[j].value === correctAnswers[i]) {
                    score++; // si Réponse correcte
                } else {
                    feedback += "Question " + (i + 1) + ": faux réponse. La bonne réponse est " + correctAnswers[i] + ".\n"; // si Reponse faux
                }
                break;
            }
        }

        if (!answered) {  //si reponse non coché 
            feedback += "Question " + (i + 1) + ": Vous n'avez pas répondu.\n";
        }
    }

    // Affichage  résultat w  feedback fi "alert"
    alert("Votre score est : " + score + "/10 \n\n" + feedback);
}    
