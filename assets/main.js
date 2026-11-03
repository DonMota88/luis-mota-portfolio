(function(){
  var root = document.documentElement;
  var titles = {
    es: root.getAttribute("data-title-es") || document.title,
    en: root.getAttribute("data-title-en") || document.title
  };
  var btn = document.querySelector(".lang-btn");
  function setLang(l){
    root.setAttribute("data-lang", l);
    root.setAttribute("lang", l);
    document.title = titles[l];
    if (btn){
      var other = l === "es" ? "en" : "es";
      btn.textContent = other.toUpperCase();
      btn.setAttribute("aria-label", l === "es" ? "Switch to English" : "Cambiar a español");
      btn.setAttribute("data-next", other);
    }
    try { localStorage.setItem("lm-lang", l); } catch(e){}
  }
  var saved = null;
  try { saved = localStorage.getItem("lm-lang"); } catch(e){}
  setLang(saved || ((navigator.language || "es").toLowerCase().indexOf("es") === 0 ? "es" : "en"));
  if (btn) btn.addEventListener("click", function(){ setLang(btn.getAttribute("data-next")); });
})();

/* ---- draft mode: pending notes and the CAD example only show locally or with ?borrador ---- */
(function(){
  var draft = location.protocol === "file:" || /^(localhost|127\.)/.test(location.hostname) || /[?&]borrador\b/.test(location.search);
  if (draft) document.documentElement.classList.add("draft");
})();

/* ---- mobile menu ---- */
(function(){
  var b = document.querySelector(".menu-btn"), n = document.getElementById("mnav");
  if (!b || !n) return;
  b.addEventListener("click", function(){
    var open = b.getAttribute("aria-expanded") === "true";
    b.setAttribute("aria-expanded", String(!open)); n.hidden = open;
  });
  n.addEventListener("click", function(e){ if (e.target.tagName === "A"){ b.setAttribute("aria-expanded","false"); n.hidden = true; } });
})();

/* ---- motion: staggered entrances per section, launch respects reduced motion ---- */
(function(){
  var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce){
    document.querySelectorAll(".launch animateMotion").forEach(function(a){ a.setAttribute("dur","0.01s"); a.setAttribute("begin","0s"); });
    return;
  }
  if (!("IntersectionObserver" in window)) return;
  var groups = [
    ".sec-head", ".sec-title", ".skill", ".about .lead", ".side > *",
    ".exp > li", ".feature", ".proj", ".awards li", ".cols > *",
    ".contact h2", ".contact p", ".contact .cta",
    ".p-head > *", ".meta", ".cover", ".blk", ".spec", ".gallery .media", ".cad-cta", ".cad", ".next", ".stat"
  ];
  var els = [];
  groups.forEach(function(sel){ document.querySelectorAll(sel).forEach(function(el){ if (els.indexOf(el) < 0) els.push(el); }); });
  // stagger index within each parent
  var counts = new Map();
  els.forEach(function(el){
    var k = el.parentNode, i = counts.get(k) || 0; counts.set(k, i + 1);
    el.style.setProperty("--d", Math.min(i, 8) * 75 + "ms");
    el.classList.add("rv");
  });
  document.documentElement.classList.add("rv-ready");
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){ if (e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
  els.forEach(function(el){ io.observe(el); });
  // safety net: never leave content hidden
  setTimeout(function(){ els.forEach(function(el){ if (el.getBoundingClientRect().top < innerHeight) el.classList.add("in"); }); }, 1800);
})();

/* ---- clips: respect reduced motion; tap to pause/play ---- */
(function(){
  var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.querySelectorAll(".clip video").forEach(function(v){
    if (reduce){ v.removeAttribute("autoplay"); v.pause(); v.setAttribute("controls",""); }
    v.addEventListener("click", function(){ v.paused ? v.play() : v.pause(); });
  });
})();

/* ---- gallery lightbox ---- */
(function(){
  var figs = document.querySelectorAll(".gallery .media");
  if (!figs.length) return;
  var lb = document.createElement("div");
  lb.className = "lb"; lb.hidden = true; lb.setAttribute("role","dialog"); lb.setAttribute("aria-modal","true");
  lb.innerHTML = '<img alt=""><button type="button">✕</button>';
  document.body.appendChild(lb);
  var img = lb.querySelector("img"), btn = lb.querySelector("button"), last = null;
  function close(){ lb.hidden = true; if (last) last.focus(); }
  figs.forEach(function(f){
    var i = f.querySelector("img"); if (!i) return;
    f.tabIndex = 0; f.setAttribute("role","button"); f.setAttribute("aria-label", i.alt || "Ampliar foto");
    function open(){ last = f; img.src = i.currentSrc || i.src; img.alt = i.alt; lb.hidden = false; btn.focus(); }
    f.addEventListener("click", open);
    f.addEventListener("keydown", function(e){ if (e.key === "Enter" || e.key === " "){ e.preventDefault(); open(); } });
  });
  lb.addEventListener("click", function(e){ if (e.target !== img) close(); });
  document.addEventListener("keydown", function(e){ if (e.key === "Escape" && !lb.hidden) close(); });
})();
