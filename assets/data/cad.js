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
    titulo:  { es: "Cohete de Ignitia — ensamble completo", en: "Ignitia rocket — full assembly" },
    descripcion: {
      es: "Ensamble completo en SolidWorks 2025 del cohete de Ignitia: cono, fuselaje en tres secciones (aviónica, recuperación y motor), aletas, motor con tobera, torre de aviónica con PCB y computadora de vuelo, y acoples de recuperación. El video muestra la vista explosionada del ensamble. Incluye el modelo 3D en STEP (comprimido en .zip).",
      en: "Full SolidWorks 2025 assembly of the Ignitia rocket: nose cone, three-section airframe (avionics, recovery and motor), fins, motor with nozzle, avionics tower with PCB and flight computer, and recovery couplers. The video shows the exploded view of the assembly. Includes the 3D model as STEP (zipped)."
    },
    software: ["SolidWorks"],
    imagen: "cad/img/ignitia-cohete.jpg",
    video: { src: "cad/video/ignitia-cohete-explosion.mp4", poster: "cad/video/ignitia-cohete-explosion.jpg",
             label: { es: "Vista explosionada del cohete", en: "Exploded view of the rocket" } },
    archivos: [
      { nombre: "Cohete Ignitia (STEP, .zip)", url: "cad/archivos/COHETE_IGNITIA_STEP.zip" }
    ],
    proyecto: "ignitia",
    grabcad: ""
  },

  {
    titulo:  { es: "Robot FRC 2025 — ensamble completo", en: "FRC 2025 robot — full assembly" },
    descripcion: {
      es: "Ensamble completo en SolidWorks del robot de Daedalus 7102 para la temporada 2025 de FRC: chasis con bumper, torre elevadora y mecanismo manipulador con ruedas. Algunas vistas lo muestran junto a elementos del campo para revisar alcance y holguras. Incluye el modelo 3D en STEP (comprimido en .tar.xz; se abre con 7-Zip o con Windows 11).",
      en: "Full SolidWorks assembly of Daedalus 7102's robot for the 2025 FRC season: bumpered chassis, elevator tower and wheeled manipulator. Some views show it next to field elements to check reach and clearances. Includes the 3D model as STEP (.tar.xz archive; opens with 7-Zip or Windows 11)."
    },
    software: ["SolidWorks"],
    imagen: "cad/img/frc-2025-1.jpg",
    imagenes: [
      "cad/img/frc-2025-1.jpg", "cad/img/frc-2025-2.jpg", "cad/img/frc-2025-3.jpg",
      "cad/img/frc-2025-4.jpg", "cad/img/frc-2025-5.jpg", "cad/img/frc-2025-6.jpg",
      "cad/img/frc-2025-7.jpg", "cad/img/frc-2025-8.jpg", "cad/img/frc-2025-9.jpg"
    ],
    archivos: [
      { nombre: "Robot FRC 2025 (STEP, .tar.xz)", url: "cad/archivos/ROBOT_FRC_2025_STEP.tar.xz" }
    ],
    proyecto: "frc-daedalus",
    grabcad: ""
  },

  {
    titulo:  { es: "ORPHEUS — robot FRC 2024 (ensamble completo)", en: "ORPHEUS — FRC 2024 robot (full assembly)" },
    descripcion: {
      es: "Ensamble completo en SolidWorks 2025 del robot ORPHEUS de Daedalus 7102 para la temporada 2024 de FRC. Incluye chasis con módulos swerve SDS MK4i, intake, shooter, climber con pistones neumáticos y la electrónica de control. Descargas: modelo 3D en STEP (comprimido en .zip) y paquete de 41 hojas de planos de fabricación con listas de materiales.",
      en: "Full SolidWorks 2025 assembly of Daedalus 7102's ORPHEUS robot for the 2024 FRC season. Includes the chassis with SDS MK4i swerve modules, intake, shooter, climber with pneumatic pistons and the control electronics. Downloads: 3D model as STEP (zipped) and a 41-sheet manufacturing drawing package with bills of materials."
    },
    software: ["SolidWorks"],
    imagen: "cad/img/frc-orpheus-2024.jpg",
    archivos: [
      { nombre: "ORPHEUS_2024 (STEP, .zip)", url: "cad/archivos/ORPHEUS_2024_STEP.zip" },
      { nombre: "Planos ORPHEUS 2024 (PDF)", url: "cad/archivos/ORPHEUS_planos_2024.pdf" }
    ],
    proyecto: "frc-daedalus",
    grabcad: ""
  },

  {
    titulo:  { es: "Intake para el robot de FRC (v6)", en: "Intake for the FRC robot (v6)" },
    descripcion: {
      es: "Ensamble del intake (versión 6) diseñado en SolidWorks para un robot de FRC Daedalus 7102.",
      en: "Intake assembly (version 6) designed in SolidWorks for an FRC Daedalus 7102 robot."
    },
    software: ["SolidWorks"],
    imagen: "cad/img/frc-pieza-1.jpg",
    archivos: [],
    proyecto: "frc-daedalus",
    grabcad: "",
    pendiente: "Pendiente: temporada de este intake, cómo funciona, material y archivo STEP."
  },

];
