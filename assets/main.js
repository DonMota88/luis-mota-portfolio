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
