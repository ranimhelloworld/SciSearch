function deadlineBadge(daysLeft) {
  if (daysLeft === null) return `<span class="deadline deadlineok">Ouvert</span>`;
  if (daysLeft <= 7)     return `<span class="deadline deadlineurgent">${daysLeft} jours</span>`;
  return `<span class="deadline deadlineok">${daysLeft} jours</span>`;
}

function formatDate(str) {
  const months = ["Janvier","Février","Mars","Avril","Mai","Juin",
  "Juillet","Août","Septembre","Octobre","Novembre","Décembre"];
  const d = new Date(str);
  return `${String(d.getDate()).padStart(2,'0')} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

function buildCard(ev) {
  return `
    <div class="col-md-6 col-lg-4" data-id="${ev.id}">
      <div class="eventcard">
        <div class="cardstripe"></div>
        <div class="cardcontent">
          <span class="eventtype">${ev.type}</span>
          <h3 class="eventtitle">${ev.title}</h3>
          <p>${ev.desc}</p>
          <div class="eventdetails">
            <div class="detailitem">📍 ${ev.ville}, ${ev.pays}</div>
            <div class="detailitem">📅 ${formatDate(ev.date)}</div>
            <div class="detailitem">Date limite : ${deadlineBadge(ev.daysLeft)}</div>
          </div>
        </div>
      </div>
    </div>`;
}

function getParams() {
  return Object.fromEntries(new URLSearchParams(window.location.search));
}

function pushParams(params) {
  const q = new URLSearchParams(params).toString();
  history.replaceState(null, '', '?' + q);
}

function showToast(msg, ok = true) {
  let t = document.getElementById('scisearchtoast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'scisearchtoast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.className = 'scisearchtoast ' + (ok ? 'toastok' : 'toasterr') + ' toastshow';
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('toastshow'), 3500);
}