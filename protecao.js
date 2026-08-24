/* Proteção de conteúdo — O Protocolo Comercial
   Deterrentes anti-cópia/download + registro de tentativas no Supabase.
   IMPORTANTE: nenhum site consegue bloquear 100% (gravação de tela é sempre possível).
   Isto para 95% das pessoas e robôs/IA comuns, e AVISA quando alguém tenta. */
(function(){
  var SB_URL="https://peqwcrkcgzbpfvrwcwlo.supabase.co";
  var SB_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBlcXdjcmtjZ3picGZ2cndjd2xvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEyMjczOTUsImV4cCI6MjA5NjgwMzM5NX0.ub2cInuad6_27oGPrUtq14hgvuYo8mAF7nAdOnVYVpE";
  var _t=(document.title||location.pathname);
  var PAGE=_t.indexOf('·')>=0 ? _t.split('·').pop().trim() : _t.trim();
  var last={};

  function logEvent(type, detail){
    try{
      var now=Date.now();
      if(last[type] && now-last[type]<8000) return; // evita spam: 1 registro/tipo a cada 8s
      last[type]=now;
      var payload={
        page:PAGE,
        event_type:type,
        detail:detail||null,
        path:location.pathname+location.search,
        user_agent:navigator.userAgent,
        screen:(window.screen?screen.width+"x"+screen.height:null),
        referrer:document.referrer||null
      };
      // 1) grava no banco (painel de relatório)
      fetch(SB_URL+"/rest/v1/security_events",{
        method:"POST",
        headers:{
          "apikey":SB_KEY,
          "Authorization":"Bearer "+SB_KEY,
          "Content-Type":"application/json",
          "Prefer":"return=minimal"
        },
        body:JSON.stringify(payload),
        keepalive:true
      }).catch(function(){});
      // 2) dispara e-mail de alerta (só envia se a RESEND_API_KEY estiver configurada no Supabase)
      fetch(SB_URL+"/functions/v1/notify-tentativa",{
        method:"POST",
        headers:{"apikey":SB_KEY,"Authorization":"Bearer "+SB_KEY,"Content-Type":"application/json"},
        body:JSON.stringify(payload),
        keepalive:true
      }).catch(function(){});
    }catch(e){}
  }
  window.__logSec=logEvent;

  // 1) Botão direito (menu "Salvar imagem/página como")
  document.addEventListener('contextmenu', function(e){ e.preventDefault(); logEvent('botao_direito'); });

  // 2) Atalhos de teclado (salvar, ver código, devtools, imprimir, print)
  document.addEventListener('keydown', function(e){
    var k=(e.key||'').toLowerCase();
    var ctrl=e.ctrlKey||e.metaKey;
    if(k==='f12'){ e.preventDefault(); logEvent('devtools','F12'); return; }
    if(ctrl && e.shiftKey && (k==='i'||k==='j'||k==='c')){ e.preventDefault(); logEvent('devtools','Ctrl+Shift+'+k.toUpperCase()); return; }
    if(ctrl && k==='u'){ e.preventDefault(); logEvent('ver_codigo','Ctrl+U'); return; }
    if(ctrl && k==='s'){ e.preventDefault(); logEvent('salvar_pagina','Ctrl+S'); return; }
    if(ctrl && k==='p'){ e.preventDefault(); logEvent('imprimir','Ctrl+P'); return; }
    if(k==='printscreen'){ logEvent('print_screen','PrintScreen'); }
  });

  // 3) Arrastar imagens para fora
  document.addEventListener('dragstart', function(e){ if(e.target && e.target.tagName==='IMG'){ e.preventDefault(); logEvent('arrastar_imagem'); } });

  // 4) Copiar / recortar texto
  document.addEventListener('copy', function(){ logEvent('copiar_texto'); });
  document.addEventListener('cut', function(){ logEvent('copiar_texto','cut'); });

  // 5) Imprimir (Cmd/ctrl+P ou menu)
  window.addEventListener('beforeprint', function(){ logEvent('imprimir','beforeprint'); });

  // 6) Detecção de DevTools aberto (heurística de tamanho da janela)
  var devtoolsOpen=false;
  setInterval(function(){
    var t=170;
    var open=(window.outerWidth-window.innerWidth>t)||(window.outerHeight-window.innerHeight>t);
    if(open && !devtoolsOpen){ devtoolsOpen=true; logEvent('devtools','janela de inspeção aberta'); }
    else if(!open){ devtoolsOpen=false; }
  }, 1500);
})();
