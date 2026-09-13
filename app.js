const A='accent', S='small', T='tiny';
const slides=[
  {c:['SE IO NON SO','IL FUTURO','PERCHÉ DOVREI','ENTRARE A MERCATO?'],a:[1,3],title:1},
  {c:['ENTRIAMO PERCHÉ NEL MERCATO','DELLE OPZIONI','C’È CHI NON PUÒ SCEGLIERE','LA DIREZIONE.','MA È OBBLIGATO A COPRIRSI.','E QUANDO SI COPRE, COMPRA O VENDE.','QUELLA COMPRA/VENDITA SPOSTA IL PREZZO.'],a:[2,3,6],size:T},
  {c:['LE OPZIONI','CI PERMETTONO','DI CAPIRE DOVE SONO','POSIZIONATI QUEI SOLDI.'],a:[1,3]},
  {c:['IN QUESTO MERCATO','CI SONO','2 OPERATORI'],a:[2],title:1},
  {c:['1. TRADER RETAIL, FONDI DI INVESTIMENTO,','TUTTI QUELLI CHE HANNO UN’OPINIONE,','UNA TEORIA, UN’IPOTESI,','LONG O SHORT.'],a:[1,2,3],size:S},
  {c:['2. I DEALER','LORO NON HANNO UN’OPINIONE.','GLI ARRIVA UN ORDINE DI 1.000 CALL,','TE LE VENDONO E SONO COSTRETTI A COPRIRSI','COMPRANDO E VENDENDO AZIONI.'],a:[0,1,4],size:S},
  {c:['A LORO NON INTERESSA AVERE RAGIONE,','LONG O SHORT.','LORO GUADAGNANO SU SPREAD E COMMISSIONI.'],a:[1],size:S},
  {c:['IL DEALER È COME UN FORNAIO.','TU ORDINI 1.000 TORTE AL CIOCCOLATO.','IL FORNAIO NON STA TIFANDO CIOCCOLATO.','DEVE ANDARE A COMPRARE IL CIOCCOLATO','PER INCASSARE QUELL’ORDINE.'],a:[0,3,4],size:S,v:'fornaio-intro.png'},
  {c:['L’ORDINE = L’OPZIONE','IL CIOCCOLATO = LE AZIONI DI QQQ','IL FORNAIO = IL DEALER'],a:[0,1,2],size:S,v:'fornaio-intro.png'},
  {c:['IL CLIENTE ENTRA E DICE:','“SABATO VOGLIO 1.000 TORTE AL CIOCCOLATO.','PAGO L’ORDINE.”','IL FORNAIO DICE: “VA BENE.”','MA NON HA 1.000 TORTE IN VETRINA.','DEVE CORRERE A PRENDERE IL CIOCCOLATO.','COPERTURA FORZATA.'],a:[2,6],size:T,v:'fornaio-copertura.png'},
  {c:['IL DEALER NON HA SCELTA.','QUANDO TI VENDE UN’OPZIONE, DEVE COPRIRSI.','COPRIRSI = COMPRARE O VENDERE IL TITOLO.','QUELLA COPERTURA LASCIA UN’IMPRONTA SUL NASTRO.','NOI SEGUIAMO L’IMPRONTA, NON L’OPINIONE.'],a:[2,4],size:T,v:'fornaio-copertura.png'},
  {c:['NOI NON SIAMO IL FORNAIO','E NON SIAMO IL CLIENTE.','SIAMO QUELLI CHE STANNO FUORI DAL FORNO','E CONTANO GLI ORDINI.','SE GLI ORDINI SONO TANTI SU UN GUSTO,','SAPPIAMO CHE IL FORNAIO DOVRÀ MUOVERSI.'],a:[2,3,5],size:T,v:'fornaio-copertura.png'},
  {c:['TRADOTTO','IL CLIENTE SCEGLIE.','IL DEALER SERVE E DEVE RESTARE PIATTO/NEUTRALE.','RESTARE PIATTO = COMPRARE O VENDERE IL TITOLO, PER FORZA.','QUELLA FORZA È IL MOTIVO PER CUI ENTRIAMO.'],a:[0,3,4],size:T},
  {c:['OPEN INTEREST','E MAGNETE'],a:[0,1],title:1,v:'oi-magnet.png'},
  {c:['OPEN INTEREST = QUANTI ORDINI','SONO ANCORA APERTI.','MAGNETE = IL NUMERO, LO STRIKE,','DOVE GLI ORDINI SONO TANTISSIMI.','LÌ I DEALER HANNO PIÙ LAVORO.'],a:[0,2,3],size:S,v:'oi-magnet.png'},
  {c:['OI = CONTRATTI ANCORA APERTI.','OI NON SI AGGIORNA DURANTE IL GIORNO.','LO VEDI IN PRE-OPEN.','OI NON DICE SE QUEI CONTRATTI SONO LONG O SHORT.','UN CONTRATTO APERTO È UN CONTRATTO APERTO. PUNTO.'],a:[0,2,4],size:T},
  {c:['CALL CON TANTO OI','NON VUOL DIRE RIALZO.','PUT CON TANTO OI','NON VUOL DIRE RIBASSO.','VUOL DIRE SOLO: QUI C’È UN MUCCHIO','DI ORDINI ANCORA APERTI.'],a:[0,2,4,5],size:S},
  {c:['QUEL MUCCHIO, PER IL DEALER,','È COMPITI A CASA.','DEVE RESTARE PIATTO SU QUEGLI ORDINI.','ECCO PERCHÉ CI INTERESSA.'],a:[1,3],size:S,v:'preopen-dealer.png'},
  {c:['PERCHÉ L’OI FA DA MAGNETE','IL PREZZO NON VIENE ATTIRATO','PERCHÉ L’OI È MAGICO.'],a:[0],size:S,v:'oi-magnet.png'},
  {c:['GLI ORDINI APERTI STANNO SU UN NUMERO.','ESEMPIO: 710, 715, 720 SU QQQ.','IL DEALER DEVE RESTARE PIATTO SU QUEGLI ORDINI.','IL LAVORO DEL DEALER È PIÙ GROSSO','QUANDO IL PREZZO È VICINO A QUEL NUMERO.','QUINDI COMPRA E VENDE DI PIÙ.','QUELLA COMPRA/VENDITA SPOSTA IL PREZZO,','SPESSO VERSO QUEL NUMERO.'],a:[1,4,5,7],size:T,v:'oi-magnet.png'},
  {c:['IL MAGNETE È LO STRIKE','CON PIÙ ORDINI APERTI','VICINO AL PREZZO.','NON PERCHÉ “VUOLE” IL PREZZO.','PERCHÉ LÌ I DEALER DEVONO FARE PIÙ SPESA.'],a:[0,1,2,4],size:S,v:'oi-magnet.png'},
  {c:['PERCHÉ LO USIAMO','PRIMA DELL’APERTURA'],a:[1],title:1,v:'preopen-dealer.png'},
  {c:['IN PRE-OPEN, QUELLO CHE ABBIAMO','SONO GLI OI DI IERI:','GLI ORDINI RIMASTI APERTI,','AGGIORNATI AL MATTINO.','SULLE OPZIONI, QUELLI SONO I COMPITI','CHE I DEALER SI RITROVANO GIÀ IN MANO','QUANDO SUONA LA CAMPANA.'],a:[1,3,6],size:T,v:'preopen-dealer.png'},
  {c:['PRIMA DELL’OPEN, L’OI NON È LA DIREZIONE.','È LA DOMANDA:','DOVE È IL MUCCHIO PIÙ GROSSO','VICINO AL PREZZO?','LÌ IL PREZZO HA UN MOTIVO PER ANDARE.'],a:[1,2,3,4],size:S},
  {c:['OI = DOVE SONO GLI ORDINI APERTI.','MAGNETE = DOVE GLI ORDINI SONO DI PIÙ.','I DEALER LAVORANO LÌ.','IL PREZZO SPESSO CI VA.','NON È LONG. NON È SHORT.','È UN POSTO.'],a:[0,1,5],size:S},
  {c:['GAMMA','E GEX'],a:[0,1],title:1},
  {c:['QUANDO IL DEALER COMPRA E VENDE…','AIUTA A FERMARE IL PREZZO,','O LO SPINGE PIÙ FORTE?'],a:[1,2],size:S},
  {c:['QUELLA RISPOSTA','SI CHIAMA GAMMA.','PENSIAMO AL PREZZO','COME A UNA PALLA.'],a:[1,3],size:S,v:'gamma-positive-bowl.png'},
  {c:['GAMMA POSITIVO =','PALLA DENTRO UNA CIOTOLA.','LA SPINGI A DESTRA: TORNA AL CENTRO.','LA SPINGI A SINISTRA: TORNA AL CENTRO.'],a:[0,1],green:[0],size:S,v:'gamma-positive-bowl.png'},
  {c:['PERCHÉ IL DEALER FA','IL CONTRARIO DEL PREZZO:','IL PREZZO SALE: LUI VENDE.','IL PREZZO SCENDE: LUI COMPRA.'],a:[2,3],size:S,v:'gamma-positive-bowl.png'},
  {c:['LUI È IL BORDO DELLA CIOTOLA.','TI TIRA SEMPRE INDIETRO.','GIORNO FERMO. CHOP. RANGE. NOIA.'],a:[0,1],size:S,v:'gamma-positive-bowl.png'},
  {c:['GAMMA NEGATIVO =','METTI LA STESSA PALLA','IN CIMA A UNA COLLINA.','SE NON LA TOCCHI, STA LÌ.','NON CADE DA SOLA.'],a:[0,1,2],red:[0],size:S,v:'gamma-negative-hill.png'},
  {c:['MA SE LA SPINGI UN PO’,','IN UN ATTIMO PRENDE VELOCITÀ.'],a:[0,1],title:1,v:'gamma-negative-hill.png'},
  {c:['PERCHÉ IL DEALER FA','LA STESSA COSA DEL PREZZO:','IL PREZZO SALE: LUI COMPRA ANCORA.','IL PREZZO SCENDE: LUI VENDE ANCORA.','LUI NON PARTE.','SPINGE QUELLO CHE È GIÀ PARTITO.'],a:[1,2,3,5],size:T,v:'gamma-negative-hill.png'},
  {c:['NON ACCENDE IL FUOCO,','MA SE SCOPPIA L’INCENDIO,','LONG O SHORT,','BUTTA ANCORA PIÙ BENZINA.'],a:[0,3],size:S,v:'fire-fuel.png'},
  {c:['LA DIREZIONE LA DÀ','CHI COMPRA E VENDE.','IL GAMMA DICE SOLO','SE I DEALER FRENANO O SPINGONO.'],a:[0,1,3],size:S},
  {c:['IL GEX CI DICE','QUANTO È LARGA LA CIOTOLA','O QUANTO È ALTA E RIPIDA','LA COLLINA.'],a:[0,1,2,3],size:S,v:'gex-bowl-hill.png'},
  {c:['QUINDI IL GEX TRASFORMA L’IDEA ASTRATTA','DEL GAMMA IN UNA MISURA CONCRETA.','NON SOLO: “FRENANO”, MA QUANTO FRENANO.','NON SOLO: “SPINGONO”, MA QUANTO SPINGONO.'],a:[1,3],size:S},
  {c:['GAMMA = FRENO O ACCELERATORE.','GEX = QUANTO È FORTE','QUEL FRENO O QUELL’ACCELERATORE.'],a:[1,2],size:S},
  {c:['NON È','UN OROSCOPO.','È IL','CONTACHILOMETRI','DELLA COPERTURA DEI DEALER.'],a:[2,3,4],size:S,v:'speedometer.png'}
];
const deck=document.querySelector('#deck');
const startSlide=Number.parseInt(location.hash.replace('#slide-',''),10);
let current=Number.isInteger(startSlide)&&startSlide>=1&&startSlide<=slides.length?startSlide-1:0;
function render(){const s=slides[current];let accents=new Set(s.a||[]);if(s.c.length>1&&accents.size===s.c.length)accents=new Set(s.c.map((_,n)=>n).filter(n=>n%2===1));deck.innerHTML=`<section class="slide active ${s.v?'visual':''} ${s.title?'title':''}" ${s.v?`style="--visual:url('assets/${s.v}')"`:''}><div class="copy">${s.c.map((line,n)=>`<p class="line ${accents.has(n)?A:''} ${(s.green||[]).includes(n)?'positive':''} ${(s.red||[]).includes(n)?'negative':''} ${s.size||''}">${line}</p>`).join('')}</div><div class="logos"><img src="assets/emblema-trasparente.png" alt="Scalping Open Flow"><img src="assets/logo-large-trader.png" alt="Large Trader"></div></section>`;document.querySelector('#counter').textContent=`${current+1} / ${slides.length}`;history.replaceState(null,'',`#slide-${current+1}`)}
function go(n){current=(current+n+slides.length)%slides.length;render()}
document.querySelector('#previous').onclick=()=>go(-1);
document.querySelector('#next').onclick=()=>go(1);
const fullscreen=document.querySelector('#fullscreen');
async function toggleFullscreen(){if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();}
fullscreen.onclick=()=>toggleFullscreen();
document.addEventListener('fullscreenchange',()=>{fullscreen.textContent=document.fullscreenElement?'⛶':'⛶';fullscreen.setAttribute('aria-label',document.fullscreenElement?'Esci da schermo intero':'Schermo intero');});
window.addEventListener('keydown',e=>{if(['ArrowRight',' ','PageDown'].includes(e.key)){e.preventDefault();go(1)}if(['ArrowLeft','PageUp'].includes(e.key)){e.preventDefault();go(-1)}if(e.key.toLowerCase()==='f'&&!e.metaKey&&!e.ctrlKey&&!e.altKey){e.preventDefault();toggleFullscreen()}});
window.addEventListener('hashchange',()=>{const n=Number.parseInt(location.hash.replace('#slide-',''),10);if(Number.isInteger(n)&&n>=1&&n<=slides.length&&n-1!==current){current=n-1;render()}});
let start=0;
window.addEventListener('touchstart',e=>start=e.changedTouches[0].screenX,{passive:true});
window.addEventListener('touchend',e=>{const d=e.changedTouches[0].screenX-start;if(Math.abs(d)>45)go(d<0?1:-1)},{passive:true});
render();
