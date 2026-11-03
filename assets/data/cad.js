/* =============================================================
   PORTAFOLIO CAD
   Para agregar un CAD nuevo:
   1. Pon la imagen (render o captura) en  cad/img/
   2. Pon los archivos descargables en     cad/archivos/
      (recomendado: .STEP para que cualquiera lo abra, y el
      archivo nativo .SLDPRT / .SLDASM / .f3d si quieres)
   3. Copia un bloque { ... } de abajo y cambia los datos.

   proyecto: "ignitia", "frc-daedalus", "ftc-ikarus", "nasa-iasp"
             o "" si no pertenece a ninguno.
   grabcad:  enlace a tu modelo en GrabCAD (opcional, puede ir "").
   ============================================================= */
window.CADS = [

  {
    titulo:  { es: "Pieza para el robot de FRC", en: "Part for the FRC robot" },
    descripcion: {
      es: "Pieza diseñada en SolidWorks para el robot de FRC Daedalus 7102.",
      en: "Part designed in SolidWorks for the FRC Daedalus 7102 robot."
    },
    software: ["SolidWorks"],
    imagen: "cad/img/frc-pieza-1.jpg",
    archivos: [],
    proyecto: "frc-daedalus",
    grabcad: "",
    pendiente: "Pendiente: nombre de la pieza, qué hace en el robot, material y archivo STEP."
  },

  {
    titulo:  { es: "Estructura para el robot de FRC", en: "Structure for the FRC robot" },
    descripcion: {
      es: "Ensamble estructural en SolidWorks para el robot de FRC Daedalus 7102.",
      en: "Structural assembly in SolidWorks for the FRC Daedalus 7102 robot."
    },
    software: ["SolidWorks"],
    imagen: "cad/img/frc-pieza-2.jpg",
    archivos: [],
    proyecto: "frc-daedalus",
    grabcad: "",
    pendiente: "Pendiente: qué mecanismo es, cómo funciona, material y archivo STEP."
  },

  {
    ejemplo: true,   /* <- borra este bloque completo cuando agregues tus CAD reales */
    titulo:  { es: "Ejemplo: aleta de cohete", en: "Example: rocket fin" },
    descripcion: {
      es: "Describe aquí qué es la pieza, para qué sirve, qué material usaste y qué análisis hiciste (por ejemplo, FEA con factor de seguridad de 2.5).",
      en: "Describe the part, its purpose, the material and the analysis you ran (for example, FEA with a safety factor of 2.5)."
    },
    software: ["SolidWorks", "FEA"],
    imagen: "cad/img/ejemplo.jpg",
    archivos: [
      { nombre: "aleta.STEP",   url: "cad/archivos/aleta.STEP" },
      { nombre: "aleta.SLDPRT", url: "cad/archivos/aleta.SLDPRT" }
    ],
    proyecto: "ignitia",
    grabcad: ""
  },

];
