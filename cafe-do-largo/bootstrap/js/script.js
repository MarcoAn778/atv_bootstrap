const formulario = document.getElementById('formularioContato');
const retorno = document.getElementById('retornoFormulario');
const campoNome = document.getElementById('nome');
const modalOficinas = document.getElementById('modalOficinas');
const botaoIrContato = document.getElementById('botaoIrContato');

formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    const nome = campoNome.value.trim();

    retorno.textContent = `${nome}, sua mensagem está preenchida corretamente. O envio on-line ainda não está disponível.`;
    retorno.hidden = false;
    formulario.reset();
});

formulario.addEventListener('input', function () {
    retorno.hidden = true;
});
botaoIrContato.addEventListener('click', function () {
    modalOficinas.addEventListener('hidden.bs.modal', function () {
        document.getElementById('contato').scrollIntoView();
        campoNome.focus({ preventScroll: true });
    }, { once: true });
});
