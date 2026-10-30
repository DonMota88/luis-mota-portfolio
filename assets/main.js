(function(){
  var root = document.documentElement;
  var titles = {
    es: root.getAttribute("data-title-es") || document.title,
    en: root.getAttribute("data-title-en") || document.title
  };
  function setLang(l){
    root.setAttribute("data-lang", l);
    root.setAttribute("lang", l);
    document.title = titles[l];
    document.querySelectorAll(".lang button").forEach(function(b){
      b.setAttribute("aria-pressed", b.getAttribute("data-set") === l ? "true" : "false");
    });
    try { localStorage.setItem("lm-lang", l); } catch(e){}
  }
  var saved = null;
  try { saved = localStorage.getItem("lm-lang"); } catch(e){}
  var initial = saved || ((navigator.language || "es").toLowerCase().indexOf("es") === 0 ? "es" : "en");
  setLang(initial);
  document.querySelectorAll(".lang button").forEach(function(b){
    b.addEventListener("click", function(){ setLang(b.getAttribute("data-set")); });
  });
})();
