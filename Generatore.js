const lunghezzaPassword = document.getElementById('lunghezza');
        const caratteriMinuscoli = document.getElementById('caratteri-minuscoli');
        const caratteriMaiuscoli = document.getElementById('caratteri-maiuscoli');
        const caratteriNumerici = document.getElementById('caratteri-numerici');
        const caratteriSpeciali = document.getElementById('caratteri-speciali');
        const btnPassword = document.getElementById('genera-password');
        const risultatoDiv = document.getElementById('risultato');

        const listaCaratteriMinuscoli = "abcdefghilmnopqrstuvz";
        const listaCaratteriMaiuscoli = "ABCDEFGHILMNOPQRSTUVZ";
        const listaCaratteriNumerici = "0123456789";
        const listaCaratteriSpeciali = "£$%&/!?";

        btnPassword.addEventListener('click', creaPassword);

        function creaPassword(){
            let stringaIniziale = "";
            let risultato = "";
            if (caratteriMinuscoli.checked) stringaIniziale += listaCaratteriMinuscoli;
            if (caratteriMaiuscoli.checked) stringaIniziale += listaCaratteriMaiuscoli;
            if (caratteriNumerici.checked) stringaIniziale += listaCaratteriNumerici;
            if (caratteriSpeciali.checked) stringaIniziale += listaCaratteriSpeciali;

            for (let i = 0; i < lunghezzaPassword.value; i++) {
                risultato += stringaIniziale.charAt(
                    Math.floor(Math.random()*stringaIniziale.length)
                )
            }

            risultatoDiv.innerHTML = "";
            risultatoDiv.innerHTML = risultato;
        }