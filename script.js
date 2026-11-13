const menuToggle=document.getElementById('menuToggle');
const navMenu=document.getElementById('navMenu');
menuToggle.addEventListener('click',()=>navMenu.classList.toggle('open'));
navMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>navMenu.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();

const phone='5598984560444';
document.querySelectorAll('[data-plan]').forEach(btn=>btn.addEventListener('click',()=>{
  document.getElementById('studentPlan').value=btn.dataset.plan;
}));
document.getElementById('enrollForm').addEventListener('submit',e=>{
  e.preventDefault();
  const name=document.getElementById('studentName').value.trim();
  const contact=document.getElementById('studentPhone').value.trim();
  const plan=document.getElementById('studentPlan').value;
  const message=document.getElementById('studentMessage').value.trim();
  const text=`Olá! Meu nome é ${name}. Meu WhatsApp para contato é ${contact}. Tenho interesse em: ${plan}.${message?' Mensagem: '+message:''} Gostaria de receber informações sobre a REDGRAM+.`;
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`,'_blank');
});

const chatPanel=document.getElementById('chatPanel');
document.getElementById('chatLaunch').addEventListener('click',()=>chatPanel.classList.add('open'));
document.getElementById('chatClose').addEventListener('click',()=>chatPanel.classList.remove('open'));
const messages=document.getElementById('chatMessages');
function addMessage(text,who){const div=document.createElement('div');div.className=who==='user'?'user-message':'bot-message';div.textContent=text;messages.appendChild(div);messages.scrollTop=messages.scrollHeight;}
function answer(q){
 const s=q.toLowerCase();
 if(s.includes('valor')||s.includes('preço')||s.includes('preco')||s.includes('mensal')) return 'A monitoria individual online custa R$ 150,00 por mês, com aula de 50 minutos, 1 dia por semana. A correção avulsa custa R$ 30,00 por redação. Para mensalidade presencial, consulte a equipe.';
 if(s.includes('funciona')||s.includes('curso')||s.includes('metodologia')) return 'O curso virtual oferece acompanhamento individualizado, monitorias, correções comentadas, orientação de repertório sociocultural, construção de argumentos e preparação para as competências do ENEM e critérios da UEMA.';
 if(s.includes('inscri')||s.includes('matr')||s.includes('vaga')) return 'Para iniciar sua inscrição, preencha o formulário nesta página ou fale diretamente pelo WhatsApp (98) 98456-0444. A disponibilidade de horários é confirmada pela equipe.';
 if(s.includes('endereço')||s.includes('endereco')||s.includes('local')) return 'Nosso endereço de referência é Escola José de Anchieta, Rua Tiradentes, 313, Centro, Pinheiro – MA. O curso descrito na proposta é virtual.';
 if(s.includes('contato')||s.includes('email')||s.includes('e-mail')) return 'Você pode falar conosco pelo WhatsApp (98) 98456-0444 ou pelo e-mail redgramais@gmail.com.';
 return 'Obrigado por entrar em contato com a REDGRAM+! Para receber atendimento personalizado, fale com nossa equipe pelo WhatsApp (98) 98456-0444 ou pelo e-mail redgramais@gmail.com.';
}
function sendChat(q){if(!q.trim())return;addMessage(q,'user');setTimeout(()=>addMessage(answer(q),'bot'),250);}
document.getElementById('chatForm').addEventListener('submit',e=>{e.preventDefault();const input=document.getElementById('chatInput');sendChat(input.value);input.value='';});
document.querySelectorAll('.quick-questions button').forEach(b=>b.addEventListener('click',()=>sendChat(b.dataset.question)));
