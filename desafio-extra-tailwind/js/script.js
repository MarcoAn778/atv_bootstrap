'use strict';

const botaoMenu = document.querySelector('#botao-menu');
const menu = document.querySelector('#menu');
function alterarMenu(aberto) {
  menu.classList.toggle('hidden', !aberto);
  menu.classList.toggle('flex', aberto);
  botaoMenu.setAttribute('aria-expanded', String(aberto));
  botaoMenu.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
}
botaoMenu.addEventListener('click', () => alterarMenu(botaoMenu.getAttribute('aria-expanded') !== 'true'));
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => alterarMenu(false)));
document.addEventListener('keydown', evento => {
  if (evento.key === 'Escape' && botaoMenu.getAttribute('aria-expanded') === 'true') {
    alterarMenu(false);
    botaoMenu.focus();
  }
});
window.matchMedia('(min-width: 1024px)').addEventListener('change', () => alterarMenu(false));

// carrossel
const trilho = document.querySelector('#trilho');
const slides = document.querySelectorAll('[data-slide]');
const indicadores = document.querySelectorAll('[data-indicador]');
let slideAtual = 0;
function mostrarSlide(indice) {
  slideAtual = (indice + slides.length) % slides.length;
  trilho.style.transform = `translateX(-${slideAtual * 100}%)`;
  slides.forEach((slide, i) => {
    slide.setAttribute('aria-hidden', String(i !== slideAtual));
    slide.inert = i !== slideAtual;
  });
  indicadores.forEach((botao, i) => {
    const ativo = i === slideAtual;
    botao.classList.toggle('bg-blue-700', ativo);
    botao.classList.toggle('text-white', ativo);
    botao.classList.toggle('bg-white', !ativo);
    botao.classList.toggle('text-blue-700', !ativo);
    if (ativo) botao.setAttribute('aria-current', 'true');
    else botao.removeAttribute('aria-current');
  });
  document.querySelector('#status-slide').textContent = `Slide ${slideAtual + 1} de ${slides.length}`;
}
document.querySelector('#anterior').addEventListener('click', () => mostrarSlide(slideAtual - 1));
document.querySelector('#proximo').addEventListener('click', () => mostrarSlide(slideAtual + 1));
indicadores.forEach(botao => botao.addEventListener('click', () => mostrarSlide(Number(botao.dataset.indicador))));
document.querySelector('#carrossel').addEventListener('keydown', evento => {
  if (evento.key === 'ArrowLeft' || evento.key === 'ArrowRight') {
    evento.preventDefault();
    mostrarSlide(slideAtual + (evento.key === 'ArrowRight' ? 1 : -1));
  }
});

// formulario
const formulario = document.querySelector('#formulario');
const feedback = document.querySelector('#feedback');
formulario.addEventListener('submit', evento => {
  evento.preventDefault();
  const nome = document.querySelector('#nome').value.trim();
  feedback.textContent = `${nome}, sua mensagem está preenchida corretamente. O envio on-line ainda não está disponível.`;
  feedback.classList.remove('hidden');
  formulario.reset();
});
formulario.addEventListener('input', () => feedback.classList.add('hidden'));

// modal
const modal = document.querySelector('#modal');
const abrirModal = document.querySelector('#abrir-modal');
let irAoContato = false;
let rolagemAnterior = '';
abrirModal.addEventListener('click', () => {
  irAoContato = false;
  rolagemAnterior = document.body.style.overflow;
  modal.showModal();
  document.body.style.overflow = 'hidden';
});
document.querySelectorAll('[data-fechar-modal]').forEach(botao => botao.addEventListener('click', () => modal.close()));
document.querySelector('#confirmar-modal').addEventListener('click', () => {
  irAoContato = true;
  modal.close();
});
modal.addEventListener('click', evento => {
  const caixa = modal.getBoundingClientRect();
  if (evento.target === modal && (evento.clientX < caixa.left || evento.clientX > caixa.right || evento.clientY < caixa.top || evento.clientY > caixa.bottom)) modal.close();
});
modal.addEventListener('close', () => {
  document.body.style.overflow = rolagemAnterior;
  if (irAoContato) {
    document.querySelector('#contato').scrollIntoView();
    document.querySelector('#nome').focus({ preventScroll: true });
  } else abrirModal.focus({ preventScroll: true });
});
