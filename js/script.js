$(function(){

    // Faire une requête AJAX en GET :
    $.ajax({

        // Header de la requête :
        url: 'json/data.json',
        type: 'GET',
        dataType: 'JSON',

        // Corps de la requête :
        success: function(data) {
            // Faire une boucle for sur les data récup depuis le flux JSON :
            for (var i=0; i<data.length; i++) {
                // Ajouter du contenu dans le DOM :
                $('footer ul').append('<li>' + data[i].name + ' - ' + data[i].age + ' ans</li>');
            }
        },
        error: function(err) {
            console.log(err);
        }

    });

    // Faire une requête AJAX en POST déclenché par la soumission d'un formulaire :
    $('form').submit(function(e){
        e.preventDefault();

        $.ajax({

            // Header de la requête :
            url: 'connexion.php',
            type: 'POST',
            // La méthode POST envoie des données dans le fichier référencé dans l'URL :
            data: $('form').serialize(),

            // Corps de la requête :
            success: function(data) {
                // Vérifier le retour du PHP :
                if (data == 1) {
                    alert('Utilisateur connecté');
                } else {
                    alert('Utilisateur inconnu');
                };
            },
            error: function(err) {
                // déclenchée si le header de la requête est erroné :
                alert(err);
            }

        });

    });

});