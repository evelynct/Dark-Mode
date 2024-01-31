document.addEventListener('DOMContentLoaded', function () {
    const modo_diurno = document.getElementById('modo_diurno');
    const modo_noturno = document.getElementById('modo_noturno');
    const body = document.body;

    modo_diurno.addEventListener('click', function () {
        // Adiciona ou remove a classe 'modo-noturno' ao corpo
        body.classList.toggle('modo_diurno');
    });
    modo_noturno.addEventListener('click', function () {

        body.classList.toggle('modo_noturno')
    });
});
