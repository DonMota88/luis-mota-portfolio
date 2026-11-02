(function(){
  function esc(s){ return String(s == null ? "" : s).replace(/[&<>"]/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"}[c]; }); }
  function t(o){ if (typeof o === "string") return esc(o); return '<span data-l="es">'+esc(o.es)+'</span><span data-l="en">'+esc(o.en || o.es)+'</span>'; }
  var base = document.documentElement.getAttribute("data-base") || "";

  /* ---- certifications inside each skill card ---- */
  var certs = window.CERTS || [];
  document.querySelectorAll(".certs[data-area]").forEach(function(box){
    var list = certs.filter(function(c){ return c.area === box.getAttribute("data-area"); });
    if (!list.length) { box.remove(); return; }
    box.innerHTML = '<h4>'+t({es:"Certificaciones",en:"Certifications"})+'</h4><ul>' + list.map(function(c){
      var name = c.url ? '<a href="'+esc(c.url)+'" target="_blank" rel="noopener">'+esc(c.nombre)+'</a>' : esc(c.nombre);
      return '<li>'+name+'<small>'+esc(c.emisor)+(c.fecha ? ' · '+esc(c.fecha) : '')+'</small></li>';
    }).join("") + '</ul>';
  });
  var other = document.querySelector(".certs-other");
  if (other){
    var o = certs.filter(function(c){ return c.area === "otras"; });
    if (o.length) {
      other.innerHTML = '<div class="skill"><h3>'+t({es:"Otras certificaciones",en:"Other certifications"})+'</h3><div class="certs"><ul>' + o.map(function(c){
        var name = c.url ? '<a href="'+esc(c.url)+'" target="_blank" rel="noopener">'+esc(c.nombre)+'</a>' : esc(c.nombre);
        return '<li>'+name+'<small>'+esc(c.emisor)+(c.fecha ? ' · '+esc(c.fecha) : '')+'</small></li>';
      }).join("") + '</ul></div></div>';
    } else other.remove();
  }

  /* ---- CAD portfolio ---- */
  var grid = document.getElementById("cad-grid");
  if (grid){
    var cads = window.CADS || [];
    if (!cads.length){
      grid.outerHTML = '<p class="empty">'+t({es:"Próximamente: renders y archivos de mis diseños.",en:"Coming soon: renders and files of my designs."})+'</p>';
      return;
    }
    var names = {"ignitia":"Ignitia Rocket Team","frc-daedalus":"FRC Daedalus 7102","ftc-ikarus":"FTC Ikarus 26376","nasa-iasp":"International Air and Space Program"};
    grid.innerHTML = cads.map(function(c){
      var files = (c.archivos||[]).map(function(f){
        return '<a class="btn sm" href="'+base+esc(f.url)+'" download><svg class="ico" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M8 2v8M4.5 7 8 10.5 11.5 7M2.5 13.5h11"/></svg>'+esc(f.nombre)+'</a>';
      }).join("");
      var links = "";
      if (c.proyecto && names[c.proyecto]) links += '<a class="more" href="'+base+'proyectos/'+esc(c.proyecto)+'.html">'+esc(names[c.proyecto])+'</a>';
      if (c.grabcad) links += '<a class="more" href="'+esc(c.grabcad)+'" target="_blank" rel="noopener">GrabCAD</a>';
      return '<article class="cad'+(c.ejemplo?' is-example':'')+'">'
        + '<figure class="media"><img src="'+base+esc(c.imagen)+'" alt="" loading="lazy" onerror="this.remove()"><span class="ph-txt">'+esc(c.imagen)+'</span></figure>'
        + '<div class="pbody">'
        + (c.ejemplo ? '<span class="todo" style="margin:0 0 1rem">Ejemplo: reemplázalo con tu CAD real en assets/data/cad.js</span>' : '')
        + '<h3>'+t(c.titulo)+'</h3>'
        + '<ul class="chips" style="margin:.4rem 0 1rem">'+(c.software||[]).map(function(s){return '<li>'+esc(s)+'</li>';}).join("")+'</ul>'
        + '<p>'+t(c.descripcion)+'</p>'
        + '<div class="files">'+files+'</div>'
        + (links ? '<div class="cad-links">'+links+'</div>' : '')
        + '</div></article>';
    }).join("");
  }
})();
