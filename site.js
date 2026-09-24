/* Éléments communs : en-tête, pied de page, utilitaires */
const PAGES = [
  ["index.html", "Accueil"],
  ["actualites.html", "Actualités"],
  ["calendriers.html", "Calendriers"],
  ["tournois.html", "Tournois"],
  ["club.html", "Le club"],
  ["contact.html", "Contact"],
];

function esc(s) {
  return String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
}
/* Affiche en surbrillance jaune les valeurs [à compléter] */
function ph(s) {
  s = esc(s);
  return /^\[.*\]$/.test(s) ? `<span class="placeholder">${s}</span>` : s;
}
function fmtDate(iso, long) {
  const d = new Date(iso + "T12:00:00");
  return d.toLocaleDateString("fr-FR", long
    ? { weekday: "long", day: "numeric", month: "long", year: "numeric" }
    : { weekday: "short", day: "2-digit", month: "2-digit", year: "numeric" });
}
const cap = s => s.charAt(0).toUpperCase() + s.slice(1);
const todayISO = () => new Date().toISOString().slice(0, 10);

/* Matchs d'une équipe : [{ronde, date, heure, blancs, noirs, lieu, dom}] ou repos */
function matchsEquipe(nom) {
  return RONDES.map(r => {
    const m = r.matchs.find(x => x[0] === nom || x[1] === nom);
    if (!m) return { ronde: r.n, date: r.date, heure: r.heure, repos: true };
    return {
      ronde: r.n, date: r.date, heure: r.heure,
      blancs: m[0], noirs: m[1], lieu: m[2], dom: m[0] === nom,
      res: RESULTATS[`${r.n}-${m[0]}-${m[1]}`] || "",
    };
  });
}
function prochainMatch(nom) {
  return matchsEquipe(nom).find(m => !m.repos && m.date >= todayISO());
}

(function () {
  document.head.insertAdjacentHTML("beforeend", '<link rel="icon" type="image/png" href="favicon.png">');
  const here = location.pathname.split("/").pop() || "index.html";
  const nav = PAGES.map(([h, l]) =>
    `<a href="${h}"${h === here ? ' aria-current="page"' : ""}>${l}</a>`).join("");
  document.body.insertAdjacentHTML("afterbegin", `
    <header class="site"><div class="wrap">
      <a class="brand" href="index.html"><img src="logo.png" alt="" width="44" height="44">${esc(CLUB.nom)}</a>
      <nav class="main" aria-label="Navigation principale">${nav}</nav>
    </div></header>`);
  document.body.insertAdjacentHTML("beforeend", `
    <footer class="site"><div class="wrap">
      <span>© ${new Date().getFullYear()} ${esc(CLUB.nom)}</span>
      <span>Club affilié à la <a href="${CLUB.ffe}" rel="noopener">Fédération Française des Échecs</a></span>
    </div></footer>`);
})();
