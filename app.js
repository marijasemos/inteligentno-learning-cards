// OVDE UBACI SVOJ questions ARRAY (vec pripremljen)
const questions = [
  { q: "Kakav je odnos između stepena složenosti i efektivnosti?", a: "Porast stepena složenosti, dovodi do pada stepena efektivnosti." },

  { q: "Odnos stanja U RADU i stanja U OTKAZU je uslovljen veličinama?", a: "1) složenošću strukture\n2) stabilnošću uslova okoline i parametara rada\n3) kvalitetom menadžerskog mehanizma preduzeća" },

  { q: "Navedite pet najvažnijih uzroka složenosti međuljudskih odnosa u poslovnom sistemu?", a: "Statički karakter: uslovi rada, zaštita na radu, neodređenost nosioca informacija\nDinamički karakter: nekvalitetna ishrana, loši međusobni odnosi u kolektivu" },

  { q: "Konflikti međuljudskih odnosa mogu biti?", a: "Funkcionalni u smislu da dejstvuju konstruktivno, podržavaju ciljeve, postupke rada u kolektivu i poboljšavaju radni učinak.\nDisfunkcionalni u smislu destruktivnog dejstva, sprečavanja efektivnog ostvarenja ciljeva kolektiva." },

  { q: "U kom smeru raste stepen složenosti funkcija poslovnog sistema?", a: "Stepen SLOŽENOSTI raste od funkcije upravljanja, preko ostalih funkcija, pogonskog i odeljenskog menadžmenta do radioničkog menadžmenta i izvršnog menadžmenta na osnovnim radnim mestima." },

  { q: "Navedite tri uzroka rasta stepena složenosti u poslovnom sistemu?", a: "Kvalitet postupaka upravljanja\nOrganizaciona kultura preduzeća\nOdgovornost i ponašanje učesnika u procesima rada" },

  { q: "Kako se može uticati na smanjenje stepena složenosti?", a: "Postojanog učenja/obrazovanja zaposlenih u svim funkcijama.\nPrečišćavanja i revitalizacije svih materijalnih, informacionih i energetskih tokova u preduzeću.\nUređenje činilaca, procesa i veza/relacija u preduzeću na principu neophodnog minimuma.\nPrečišćavanje potrebnih/nepotrebnih podataka informacija i skupova relevantnih veličina procesa rada.\nAžuriranja i održavanja baza podataka u funkciji promena relevantnih veličina procesa rada" },

  { q: "Tradicionalni sistem privređivanja je zasnovan na dva osnovna principa, koja?", a: "Proizvodnja za skladište\nGuranje radnih naloga duž toka" },

  { q: "Navedite tri najvažnija doprinosa GT prilaza?", a: "Uprošćavanja tokova materijala i tokova informacija na principima sličnosti predmeta rada.\nSvođenje pripremno/završnih, međuoperacionih i ostalih pasivnih vremena na nivo neophodnog minimum.\nRazbijanje programa N-radnih naloga na N/r naloga u RJ." },

  { q: "Šta su osnovni doprinosi JIT prilaza?", a: "Eliminacija svih dejstava u procesu privređivanja koja ne stvaraju novu/dodatu vrednost i povećanja kvaliteta programa rada.\nSvođenja pasivnih vremena u procesu privređivanja na nivo neophodnog minimum.\nSniženja zaliha svih vrsta: novčanih, materijalnih, informacionih.\nSkraćenja vremena trajanja ciklusa rada u procesima privređivanja.\nRazvoj efektivnih upravljačkih postupaka." },

  { q: "Četiri osnovna područja LEAN privređivanja su?", a: "filozofija (Philosophy)\nprocesi (Process)\nzaposleni/partneri (People and Partners)\nrešavanje problema (Problem Solving)" },

  { q: "Na kom principu je zasnovan Mass Customization prilaz?", a: "Mass Customization je koncept \"potpunog prilagođavanja potrošaču\", i u najvećoj meri vezan za proizvodne programe široke potrošnje, programe koji prihvataju primenu STANDARDNIH elemenata i UNIFICIRANIH MODULA u razvoju proizvoda." },

  { q: "Na kojim principima je zasnovan razvoj Agilnih sistema privređivanja?", a: "Dugoročno orijentisanog razvoja struktura LJUDSKIH RESURSA\nDinamički razvijene RADNE strukture visokog stepena fleksibilnosti\nRazvoja informaciono – komunikacione strukture" },

  { q: "Znanje kao elemenat intelektualnog kapitala je karaktera?", a: "Stečenog u procesu učenja\nSkrivenog, odnosno ugrađenog u biće čoveka kao kreativna sposobnost po osnovu nasleđa DNA i razvijene inovativne sklonosti uslovljene zahtevima realnih procesa rada\nIskustvenog – ostvarenog u procesima rada preduzeća" },

  { q: "Navedite tri osnovne karakteristike koje treba da poseduje efektivni menadžment?", a: "Sposobnosti za napuštanje aktivnosti koje ne daju rezultat\nSposobnosti stalnog unapređenja organizacije procesa\nSposobnosti korišćenja pozitivnih i negativnih pojava za poboljšanje procesa" },

  { q: "Kreativnost učesnika u procesima rada je rezultat?", a: "Znanja, sposobnosti predviđanja događaja/vizionarstva, mašte, iskustva i strasti" },

  { q: "Potreba izgradnje sistema motivacije nastaje zbog?", a: "Suprotnost, ODREĐENOST NOSILACA INFORMACIJA upravljačkog sistema preduzeća na jednoj i STEPENA SLOBODE ponašanja učesnika u procesima rada na drugoj strani, predstavlja osnovu potrebe izgradnje SISTEMA MOTIVACIJE preduzeća." },

  { q: "Stepen motivacije i ponašanje učesnika u procesima rada je u funkciji?", a: "IDENTITETA RADA – IR\nTEHNOLOŠKE SLOŽENOSTI – TS\nZNAČAJA RADA – ZR\nAUTONOMIJE PROCESA – AP\nSAZNANJA O EFEKTU RADA – SE" },

  { q: "Od čega, u najvećoj meri, zavisi odgovornost učesnika u procesima rada?", a: "Ostvarenje ciljeva preduzeća je uslovljeno, u najvećoj meri ODGOVORNOŠĆU UČESNIKA u procesima rada preduzeća i izgradnjom sistema planiranja – P, dejstva – D, kontrole – S i stalnog unapređenja – A." },

  { q: "Princip neophodnog minimuma se odnosi na?", a: "Osnovu prilaza unapređenja procesa rada u smislu: (min. Tp), (min. Cc), (min. Xk), (min. E), (min. I), sve na nivou neophodnom za ostvarenje projektovanog kvaliteta i potrebne efikasnosti." },

  { q: "Šta je menadžment poslovnih procesa (MPP)?", a: "Menadžment poslovnih procesa vodi ka poslovnim inovacijama i optimizaciji kroz implementaciju poslovnih strategija putem modelovanja, razvoja, razmeštaja i upravljanja poslovnim procesima tokom čitavog životnog ciklusa." },

  { q: "Koje su četiri faze u razvoju sistema upravljanja poslovnim procesima?", a: "Proces dokumentovan\nAnaliza\nOptimizacija\nSprovođenje promene" },

  { q: "Šta su ključni indikatori performanse?", a: "Ključni indikatori performanse (KPI) predstavljaju skup mera usredsređenih na one aspekte performanse organizacije koje su najkritičnije za aktualnu i buduću uspešnost organizacije." },

  { q: "Koji su osnovni efekti uvođenja sistema upravljanja poslovnim procesima?", a: "Smanjen trošak procesa\nPovećan kvalitet procesa\nKraće vreme trajanja procesa\nKraće vreme obuke zaposlenih\nSmanjen broj internih zahteva za podrškom\nSmanjen broj pritužbi korisnika\nPovećana mogućnost planiranja i predviđanja situacija" },

  { q: "Šta pojam Poslovna inteligencija (BI-Business Intelligence) obuhvata?", a: "Arhitekturu, alate, baze podataka, aplikacije i metodologiju, zajedno integrisane u jedinstveno softversko rešenje." },

  { q: "Tipični korisnici poslovne inteligencije (BI)?", a: "IT osoblje\nUprava\nIzvršni rukovodioci\nMenadžeri funkcija\nPovremeni klijenti\nPartneri\nKorisnici" },

  { q: "Koje su koristi od upotrebe BI?", a: "Ušteda vremena\nEfikasniji procesi\nSmanjenje troškova" },

  { q: "OLTP (Online Transaction Processing) sistemi su?", a: "Sistemi za online obradu transakcija koji rukuju rutinskim poslovima u preduzeću. Primer: čitač bar koda, bankomat." },

  { q: "Šta je Data Warehouse (DW)?", a: "Fizičko skladište u kome su relacioni podaci organizovani tako da obezbede prečišćene podatke u standardizovanom formatu širom preduzeća." },

  { q: "Tri dela Data Warehousing-a (DW) su?", a: "DW sa podacima i softverom\nBack-end softver za rukovanje podacima\nFront-end softver za pristup i analizu" },

  { q: "Data Mart je?", a: "Departmanski organizovan data warehouse koji čuva samo relevantne podatke." },

  { q: "Šta su metapodaci?", a: "Podaci o podacima koji opisuju sadržaj i način korišćenja data warehouse-a." },

  { q: "Šta je Data mining (DM)?", a: "Vrsta analize informacija koja traži skrivene veze u podacima radi predviđanja budućeg ponašanja." },

  { q: "Koje vrste izveštavanja postoje?", a: "Rutinski izveštaji\nAd hoc izveštaji\nVišejezična podrška\nScorecards and dashboard\nIzveštaji o isporuci i uzbunjivanju\nDistribucija izveštaja kroz bilo koji touchpoint" }
];

let stats = {};
let current = null;
let showingAnswer = false;
let used = [];

function startGame() {
  stats = {};
  used = [];
  questions.forEach(q => stats[q.q] = { correct: 0, wrong: 0, shown: false });
  switchScreen("game");
  nextQuestion();
}

function nextQuestion() {
  showingAnswer = false;
  document.getElementById("actions").style.display = "none";
  const remaining = questions.filter(q => !used.includes(q.q));
  if (!remaining.length) return;
  current = remaining[Math.floor(Math.random() * remaining.length)];
  used.push(current.q);
  stats[current.q].shown = true;
  document.getElementById("card").innerText = current.q;
}

function flipCard() {
  if (!showingAnswer) {
    document.getElementById("card").innerText = current.a;
    document.getElementById("actions").style.display = "flex";
    showingAnswer = true;
  }
}

function answer(isCorrect) {
  if (isCorrect) stats[current.q].correct++;
  else stats[current.q].wrong++;
  nextQuestion();
}

function endGame() {
  const table = document.getElementById("resultsTable");
  table.innerHTML = "<tr><th>Pitanje</th><th>✔</th><th>✖</th></tr>";
  questions.forEach(q => {
    const s = stats[q.q];
    table.innerHTML += `
      <tr onclick="showAnswer('${q.q}')">
        <td>${q.q}</td>
        <td>${s.shown ? s.correct : "null"}</td>
        <td>${s.shown ? s.wrong : "null"}</td>
      </tr>`;
  });
  switchScreen("results");
}

function openAllQuestions() {
  const table = document.getElementById("allQuestionsTable");
  table.innerHTML = "<tr><th>Pitanje</th></tr>";
  questions.forEach(q => {
    table.innerHTML += `<tr onclick="showStatic('${q.q}')"><td>${q.q}</td></tr>`;
  });
  switchScreen("allQuestions");
}

function showAnswer(questionText) {
  const q = questions.find(x => x.q === questionText);
  alert(q.q + "\n\n" + q.a);
}

function showStatic(questionText) {
  showAnswer(questionText);
}

function goHome() {
  switchScreen("home");
}

function switchScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}
