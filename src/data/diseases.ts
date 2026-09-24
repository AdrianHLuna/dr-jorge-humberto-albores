import { MedicalCondition } from "@/types/schema";

export const diseases: MedicalCondition[] = [
  // ─── MASTOLOGÍA Y PATOLOGÍA MAMARIA (6) ────────────────────────
  {
    id: "cancer-de-mama",
    slug: "cancer-de-mama",
    name: "Cáncer de Mama",
    technicalName: "Carcinoma Mamario (Ductal / Lobulillar Infiltrante o In Situ)",
    category: "mastologia",
    description: "Proliferación maligna no controlada de las células del epitelio de los conductos o lobulillos mamarios. Es el tumor maligno más frecuente en la mujer y su detección temprana mediante mastografía y biopsia core salva vidas.",
    symptoms: [
      "Nódulo o masa palpable indolora y pétrea en la mama o región axilar",
      "Hundimiento o retracción reciente del pezón",
      "Cambios en la textura de la piel con aspecto de piel de naranja",
      "Salida espontánea de secreción sanguinolenta o serosa por un solo orificio del pezón",
      "Enrojecimiento, descamación persistente de la areola o asimetría súbita",
    ],
    causes: [
      "Mutaciones genéticas adquiridas o hereditarias en genes supresores (como BRCA1 y BRCA2)",
      "Exposición estrogénica prolongada a lo largo de la vida fértil",
      "Proliferación celular atípica previa no tratada",
    ],
    riskFactors: [
      "Edad mayor a 40 años",
      "Antecedentes familiares directos de cáncer mamario u ovárico",
      "Menarquia temprana (antes de los 12 años) o menopausia tardía (después de los 55 años)",
      "Densidad mamaria elevada en mastografía previa",
      "Tabaquismo, obesidad e inactividad física",
    ],
    mexicoStats: "Es la primera causa de muerte por cáncer en mujeres en México, con más de 27,000 nuevos casos anuales diagnosticados.",
    complications: [
      "Diseminación linfática axilar y metástasis a distancia (huesos, pulmones, hígado)",
      "Compromiso cutáneo y ulceración mamaria",
      "Impacto severo en la calidad de vida sin diagnóstico oportuno",
    ],
    treatments: [
      "Biopsia de corte guiada por ultrasonido para tipificación molecular e inmunohistoquímica",
      "Cirugía conservadora de la mama con márgenes oncológicos libres y técnicas oncoplásticas",
      "Biopsia de ganglio centinela con mapeo linfático para evitar linfedema",
      "Mastectomía con reconstrucción inmediata cuando esté indicada",
      "Protocolo de terapia sistémica adyuvante/neoadyuvante y radioterapia según comitología oncológica",
    ],
    faqs: [
      {
        question: "¿A partir de qué edad debo hacerme la mastografía?",
        answer: "A partir de los 40 años de manera anual en mujeres asintomáticas sin factores de riesgo genéticos, o 10 años antes de la edad de diagnóstico del familiar directo más joven.",
      },
      {
        question: "¿Qué es la cirugía oncoplástica mamaria?",
        answer: "Es la combinación de principios oncológicos de resección completa del tumor con técnicas de cirugía plástica para remodelar el tejido de la mama y preservar su simetría y contorno natural.",
      },
      {
        question: "¿Si me detectan un bulto siempre requeriré quitar toda la mama?",
        answer: "No. En la actualidad, gracias a las técnicas de detección temprana y la formación en FUCAM del Dr. Albores, la mayoría de los casos son candidatos a cirugía conservadora preservando la mama.",
      },
    ],
    relatedServices: [
      "consulta-mastologia",
      "biopsia-core-mama",
      "checkup-integral",
      "cirugia-ginecologica-mastologica",
    ],
    relatedSymptoms: [
      "bolita-o-nodulo-en-la-mama",
      "secrecion-anormal-por-el-pezon",
      "retraccion-o-hundimiento-del-pezon",
      "cambios-en-la-piel-de-la-mama",
      "asimetria-mamaria-de-reciente-aparicion",
    ],
    image: "/images/enfermedades/cancer-de-mama.webp",
    seo: {
      title: "Cáncer de Mama en Tuxtla Gutiérrez | Dr. Jorge Albores",
      description: "Diagnóstico oportuno y cirugía oncológica de mama en Tuxtla Gutiérrez por cirujano oncólogo de mama egresado de FUCAM.",
      keywords: ["cancer de mama tuxtla", "mastologo cancer chiapas", "biopsia mama tuxtla gutierrez", "cirugia oncologica mama"],
    },
  },
  {
    id: "fibroadenoma-mamario",
    slug: "fibroadenoma-mamario",
    name: "Fibroadenoma Mamario",
    technicalName: "Fibroadenoma Simple y Complejo de la Mama",
    category: "mastologia",
    description: "Tumor benigno común compuesto por tejido glandular y estromal fibroso. Es la lesión sólida mamaria más habitual en mujeres entre los 15 y 35 años de edad.",
    symptoms: [
      "Nódulo firme, liso, bien delimitado y móvil bajo los dedos al palparlo",
      "Generalmente indoloro, aunque puede generar leve molestia antes de la menstruación",
      "Crecimiento lento a lo largo de los meses",
    ],
    causes: [
      "Respuesta exagerada del tejido mamario al estímulo fisiológico de los estrógenos",
    ],
    riskFactors: [
      "Edad reproductiva joven (15 a 30 años)",
      "Embarazo o terapia hormonal que puede acelerar temporalmente su tamaño",
    ],
    mexicoStats: "Representa hasta el 50% de todas las biopsias y escrutinios mamarios en mujeres jóvenes en México.",
    complications: [
      "Crecimiento desmedido en variantes gigantes que deforma el contorno del seno",
      "Ansiedad y confusión diagnóstica con tumores filodes si no se realiza ecografía",
    ],
    treatments: [
      "Vigilancia ecográfica periódica con correlación BI-RADS en lesiones pequeñas y estables",
      "Biopsia core con aguja de corte bajo visión ecográfica para confirmación patológica definitiva",
      "Escisión quirúrgica conservadora mediante incisión periareolar estética si supera los 2-3 cm o causa molestia",
    ],
    faqs: [
      {
        question: "¿El fibroadenoma se puede convertir en cáncer?",
        answer: "El fibroadenoma simple es completamente benigno y no se transforma en cáncer de mama, aunque siempre debe documentarse por ultrasonido o biopsia.",
      },
      {
        question: "¿Es indispensable operarlo?",
        answer: "No todos se operan. Si mide menos de 2 cm, no causa dolor y sus características ecográficas son benignas, se puede mantener bajo vigilancia periódica.",
      },
      {
        question: "¿Deja cicatriz si se decide extirpar?",
        answer: "El Dr. Jorge Albores utiliza técnicas de incisión oncoplástica alrededor de la areola o en pliegues naturales para que la cicatriz sea prácticamente imperceptible.",
      },
    ],
    relatedServices: [
      "consulta-mastologia",
      "ultrasonido-mamario-ginecologico",
      "biopsia-core-mama",
      "cirugia-ginecologica-mastologica",
    ],
    relatedSymptoms: [
      "bolita-o-nodulo-en-la-mama",
      "asimetria-mamaria-de-reciente-aparicion",
    ],
    image: "/images/enfermedades/fibroadenoma.webp",
    seo: {
      title: "Fibroadenoma Mamario en Tuxtla Gutiérrez | Dr. Jorge Albores",
      description: "Diagnóstico y tratamiento conservador o quirúrgico de fibroadenomas de mama en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["fibroadenoma tuxtla", "bolita benigna seno", "tumor benigno mama chiapas", "mastologo fibroadenoma"],
    },
  },
  {
    id: "quistes-mamarios",
    slug: "quistes-mamarios",
    name: "Quistes Mamarios Simples y Complicados",
    category: "mastologia",
    description: "Sacos llenos de líquido originados por la dilatación de las unidades lobulillares terminales de la glándula mamaria. Son sumamente frecuentes y benignos.",
    symptoms: [
      "Bulto blando o elástico que puede fluctuar de tamaño con el ciclo menstrual",
      "Dolor o sensibilidad mamaria localizada que aumenta antes del periodo",
      "Sensación de tensión mamaria súbita",
    ],
    causes: [
      "Acumulación de líquido glandular por variaciones hormonales de estrógenos y progesterona",
      "Obstrucción benigna de los conductillos terminales",
    ],
    riskFactors: [
      "Mujeres entre 35 y 50 años",
      "Etapa de perimenopausia con fluctuaciones hormonales marcadas",
    ],
    mexicoStats: "Presentes en más del 30% de las mujeres entre 35 y 50 años en estudios de ultrasonido rutinario.",
    complications: [
      "Inflamación o sobreinfección en quistes complicados",
      "Tensión dolorosa intensa que dificulta el uso de ropa ajustada",
    ],
    treatments: [
      "Diferenciación ecográfica precisa (quiste simple vs. complicado vs. complejo)",
      "Punción y aspiración con aguja fina bajo guía ecográfica para descompresión inmediata del dolor",
      "Vigilancia clínica periódica sin necesidad de cirugía en quistes simples asintomáticos",
    ],
    faqs: [
      {
        question: "¿Un quiste mamario puede reventarse?",
        answer: "Raramente pueden romperse generando una molestia inflamatoria transitoria que se reabsorbe por el propio tejido circundante.",
      },
      {
        question: "¿Los quistes se operan en quirófano?",
        answer: "Casi nunca requieren quirófano. Si generan dolor por tensión, se evacúan en el consultorio mediante una punción milimétrica guiada por ultrasonido en pocos segundos.",
      },
      {
        question: "¿Tomar café influye en los quistes?",
        answer: "El exceso de cafeína y metilxantinas puede acentuar la hipersensibilidad y el dolor mamario en algunas pacientes, por lo que moderar su consumo ayuda a reducir síntomas.",
      },
    ],
    relatedServices: [
      "consulta-mastologia",
      "ultrasonido-mamario-ginecologico",
      "biopsia-core-mama",
      "checkup-integral",
    ],
    relatedSymptoms: [
      "bolita-o-nodulo-en-la-mama",
      "dolor-mamario-mastalgia",
    ],
    image: "/images/enfermedades/quistes-mamarios.webp",
    seo: {
      title: "Quistes en los Senos en Tuxtla Gutiérrez | Dr. Jorge Albores",
      description: "Diagnóstico por ultrasonido y aspiración de quistes mamarios en consultorio en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["quistes mamarios tuxtla", "quistes en senos tratamiento", "aspiracion de quiste mama chiapas", "dolor por quistes"],
    },
  },
  {
    id: "mastopatia-fibroquistica",
    slug: "mastopatia-fibroquistica",
    name: "Mastopatía Fibroquística",
    technicalName: "Cambios Fisiológicos Fibroquísticos de la Glándula Mamaria",
    category: "mastologia",
    description: "Condición benigna caracterizada por cambios en el tejido mamario que combinan engrosamiento fibroso, nodularidad irregular y pequeños quistes difusos con dolor cíclico.",
    symptoms: [
      "Hipersensibilidad, pesadez y dolor en ambos senos antes del periodo menstrual",
      "Sensación de nódulos múltiples o tejido mamario con textura de empedrado",
      "Disminución notable de la tensión mamaria tras el inicio del sangrado menstrual",
    ],
    causes: [
      "Respuesta tisular desequilibrada al estímulo de estrógenos frente a progesterona",
    ],
    riskFactors: [
      "Mujeres en edad reproductiva",
      "Estrés elevado y consumo habitual de cafeína, chocolate o refrescos oscuros",
    ],
    mexicoStats: "Se calcula que hasta un 60% de las mujeres experimentan algún grado de mastopatía fibroquística a lo largo de su vida fértil.",
    complications: [
      "Dolor crónico incapacitante durante varios días cada mes",
      "Dificultad diagnóstica para la autoexploración si no se cuenta con ultrasonido de control",
    ],
    treatments: [
      "Correlación clínica y ecográfica para descartar patología neoplásica subyacente",
      "Pautas higiénico-dietéticas para reducción de metilxantinas",
      "Optimización del soporte mecánico mamario con brassier adecuado",
      "Seguimiento semestral o anual con mastología",
    ],
    faqs: [
      {
        question: "¿La mastopatía fibroquística es una enfermedad peligrosa?",
        answer: "No, en realidad no es una enfermedad sino una respuesta fisiológica benigna del tejido mamario a las variaciones hormonales mensuales.",
      },
      {
        question: "¿Por qué me duelen más las mamas justo antes de reglar?",
        answer: "Porque en la fase lútea previa al sangrado los niveles hormonales provocan retención de líquido e inflamación en los lobulillos mamarios.",
      },
      {
        question: "¿Se puede curar definitivamente?",
        answer: "Los síntomas tienden a atenuarse con medidas dietéticas, soporte mamario adecuado y desaparecen casi por completo con la llegada de la menopausia.",
      },
    ],
    relatedServices: [
      "consulta-mastologia",
    ],
    relatedSymptoms: [
      "dolor-mamario-mastalgia",
    ],
    image: "/images/enfermedades/mastopatia-fibroquistica.webp",
    seo: {
      title: "Mastopatía Fibroquística en Tuxtla | Dr. Jorge Albores",
      description: "Manejo del dolor y tejido mamario fibroquístico en Tuxtla Gutiérrez, Chiapas. Especialista en mamas FUCAM/UNAM.",
      keywords: ["mastopatia fibroquistica tuxtla", "senos fibroquisticos chiapas", "dolor mamario hormonal", "mastologia tuxtla"],
    },
  },
  {
    id: "papiloma-intraductal",
    slug: "papiloma-intraductal",
    name: "Papiloma Intraductal",
    technicalName: "Papiloma Intraductal Solitario y Papilomatosis Múltiple",
    category: "mastologia",
    description: "Tumoración benigna en forma de pólipo que prolifera en el interior de los conductos galactóforos principales de la mama. Es la principal causa de sangrado por el pezón.",
    symptoms: [
      "Secreción unilateral sanguinolenta, serosanguinolenta o transparente por un solo orificio del pezón",
      "Rara vez un nódulo minúsculo palpable por debajo de la areola",
    ],
    causes: [
      "Proliferación del epitelio de los conductos mamarios sobre un eje fibrovascular",
    ],
    riskFactors: [
      "Mujeres entre los 35 y 55 años",
    ],
    mexicoStats: "Es responsable de más del 70% de los casos de telorrea patológica sanguinolenta en la consulta mastológica.",
    complications: [
      "Riesgo de atipia celular en variantes periféricas múltiples que requieran vigilancia oncológica",
    ],
    treatments: [
      "Galactografía o ecografía mamaria de alta frecuencia para localización del conducto dilatado",
      "Biopsia de corte guiada para estudio histopatológico",
      "Microdoquectomía selectiva (resección del conducto afectado preservando el resto de la glándula y el pezón)",
    ],
    faqs: [
      {
        question: "¿Si me sale sangre por el pezón siempre es cáncer?",
        answer: "No. En la gran mayoría de los casos la causa es un papiloma intraductal benigno; sin embargo, es indispensable evaluarlo con el mastólogo para confirmarlo con seguridad.",
      },
      {
        question: "¿Cómo se retira el papiloma?",
        answer: "Mediante una intervención ambulatoria llamada microdoquectomía, donde solo se extirpa el conducto que está sangrando a través de una incisión imperceptible en el borde de la areola.",
      },
      {
        question: "¿Se pierde la sensibilidad del pezón?",
        answer: "Con la técnica microquirúrgica cuidadosa que realiza el Dr. Albores, se preserva la inervación y vascularización del complejo areola-pezón.",
      },
    ],
    relatedServices: [
      "consulta-mastologia",
      "biopsia-core-mama",
    ],
    relatedSymptoms: [
      "secrecion-anormal-por-el-pezon",
    ],
    image: "/images/enfermedades/papiloma-intraductal.webp",
    seo: {
      title: "Papiloma Intraductal y Sangre en Pezón en Tuxtla | Dr. Jorge Albores",
      description: "Diagnóstico y cirugía de papilomas intraductales y sangrado por el pezón en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["papiloma intraductal tuxtla", "sangre en pezon mastologo", "microdoquectomia chiapas", "secrecion pezon cirujano"],
    },
  },
  {
    id: "mastitis-y-absceso-mamario",
    slug: "mastitis-y-absceso-mamario",
    name: "Mastitis y Absceso Mamario",
    technicalName: "Mastitis Puerperal y No Puerperal con Colección Purulenta",
    category: "mastologia",
    description: "Proceso infeccioso e inflamatorio del tejido glandular mamario, frecuente durante la lactancia (puerperal) o en conductos ectásicos (no puerperal), que puede evolucionar a absceso.",
    symptoms: [
      "Zona del seno caliente, enrojecida, hinchada y extremadamente dolorosa",
      "Fiebre mayor a 38 °C, escalofríos y malestar general parecido a una gripe",
      "Masa fluctuante dolorosa en caso de absceso consolidado",
    ],
    causes: [
      "Entrada de bacterias comunes de la piel o boca del bebé a través de grietas en el pezón",
      "Estasis de leche por conducto obstruido o vaciamiento incompleto",
    ],
    riskFactors: [
      "Primeras semanas de lactancia materna",
      "Tabaquismo en mastitis periductal no puerperal",
      "Uso de extractores de leche con copas inadecuadas",
    ],
    mexicoStats: "Afecta hasta al 10-15% de las mujeres lactantes durante los primeros meses tras el parto.",
    complications: [
      "Formación de absceso mamario tabicado que requiera drenaje",
      "Abandono involuntario de la lactancia materna por dolor no controlado",
    ],
    treatments: [
      "Técnicas de vaciamiento mamario eficaz y corrección del agarre del recién nacido",
      "Drenaje percutáneo guiado por ultrasonido bajo anestesia local en caso de absceso",
      "Manejo clínico antiinflamatorio y antimicrobiano supervisado",
    ],
    faqs: [
      {
        question: "¿Debo suspender la lactancia si tengo mastitis?",
        answer: "No. Mantener el vaciamiento frecuente del seno afectado es crucial para desobstruir el conducto y curar la infección, y no daña al bebé.",
      },
      {
        question: "¿Cómo se atiende un absceso mamario?",
        answer: "Actualmente se prefiere la aspiración o colocación de microcatéter guiado por ultrasonido en consultorio, evitando cortes quirúrgicos grandes y preservando la anatomía.",
      },
      {
        question: "¿Por qué puede dar mastitis sin estar amamantando ni embarazada?",
        answer: "Puede deberse a mastitis periductal, muy asociada al tabaquismo o a bacterias anaerobias en conductos dilatados, la cual amerita valoración mastológica integral.",
      },
    ],
    relatedServices: [
      "consulta-mastologia",
    ],
    relatedSymptoms: [
      "dolor-mamario-mastalgia",
      "cambios-en-la-piel-de-la-mama",
    ],
    image: "/images/enfermedades/mastitis.webp",
    seo: {
      title: "Mastitis y Absceso Mamario en Tuxtla | Dr. Jorge Albores",
      description: "Atención de mastitis en lactancia y drenaje de abscesos guiado por ultrasonido en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["mastitis tuxtla gutierrez", "absceso mamario drenaje", "dolor de senos lactancia chiapas", "mastologo infeccion mama"],
    },
  },

  // ─── GINECOLOGÍA Y CIRUGÍA ENDOSCÓPICA (15) ─────────────────────
  {
    id: "cancer-cervicouterino",
    slug: "cancer-cervicouterino",
    name: "Cáncer Cervicouterino",
    technicalName: "Carcinoma Invasor del Cuello Uterino (Epidermoide / Adenocarcinoma)",
    category: "ginecologia",
    description: "Tumor maligno originado en las células de la zona de transformación del cérvix, prevenible en casi el 100% de los casos mediante detección precoz de VPH y displasias.",
    symptoms: [
      "En etapas tempranas suele ser totalmente asintomático",
      "Sangrado vaginal anormal intermenstrual o después de la relación sexual (sinusorragia)",
      "Flujo vaginal acuoso, sanguinolento o con olor desagradable",
      "Dolor pélvico en fases más avanzadas",
    ],
    causes: [
      "Infección persistente por serotipos oncogénicos del Virus del Papiloma Humano (VPH 16 y 18 principalmente)",
    ],
    riskFactors: [
      "Falta de estudios periódicos de Papanicolaou y colposcopia",
      "Inicio temprano de vida sexual y multiplicidad de parejas",
      "Tabaquismo crónico e inmunosupresión",
    ],
    mexicoStats: "Segunda causa de muerte por neoplasias en mujeres mexicanas, con alta incidencia en el sureste del país.",
    complications: [
      "Invasión a vejiga, recto y ganglios linfáticos pélvicos",
      "Anemia severa por hemorragias continuas",
    ],
    treatments: [
      "Conización cervical con asa diatérmica (LEEP) o cono frío para lesiones tempranas e in situ",
      "Histerectomía radical laparoscópica con linfadenectomía pélvica",
      "Protocolos oncológicos avanzados de quimiorradioterapia para estadios invasores",
    ],
    faqs: [
      {
        question: "¿El cáncer de cuello de la matriz avisa con dolor?",
        answer: "Lamentablemente en sus etapas iniciales y premalignas no causa dolor ni molestias; por ello es vital la revisión anual con colposcopia y Papanicolaou.",
      },
      {
        question: "¿Qué es una conización cervical?",
        answer: "Es un procedimiento ambulatorio que retira una pequeña porción en forma de cono del cuello uterino con las células alteradas, curando la lesión y preservando el útero.",
      },
      {
        question: "¿Se puede prevenir?",
        answer: "Sí, mediante la vacunación contra el VPH y el control ginecológico oportuno que detecte las displasias antes de que evolucionen a cáncer.",
      },
    ],
    relatedServices: [
      "colposcopia-papanicolaou",
      "checkup-basico",
      "checkup-ginecologico-completo",
      "checkup-integral",
    ],
    relatedSymptoms: [
      "sangrado-vaginal-anormal",
    ],
    image: "/images/enfermedades/cancer-cervicouterino.webp",
    seo: {
      title: "Prevención de Cáncer Cervicouterino en Tuxtla | Dr. Jorge Albores",
      description: "Detección temprana con colposcopia y conización cervical en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["cancer cervicouterino tuxtla", "conizacion cervical chiapas", "colposcopia cancer cérvix", "ginecologo papanicolaou tuxtla"],
    },
  },
  {
    id: "infeccion-vph",
    slug: "infeccion-vph",
    name: "Virus del Papiloma Humano (VPH)",
    technicalName: "Infección por Virus del Papiloma Humano y Neoplasia Intraepitelial Cervical (NIC)",
    category: "ginecologia",
    description: "Infección viral de transmisión sexual más extendida. Determinados serotipos de alto riesgo provocan lesiones celulares precursoras en el cuello uterino que requieren seguimiento colposcópico.",
    symptoms: [
      "Frecuentemente cursa sin síntomas visibles en el cuello uterino",
      "Presencia de condilomas o verrugas genitales en vulva, periné o vagina en cepas de bajo riesgo",
      "Flujo vaginal persistente o pequeñas molestias tras el coito",
    ],
    causes: [
      "Transmisión por contacto directo piel con piel o mucosa durante las relaciones íntimas",
    ],
    riskFactors: [
      "Relaciones sexuales sin protección de barrera",
      "Deficiencias en el sistema inmunológico",
      "No haber recibido la vacuna preventiva",
    ],
    mexicoStats: "Más del 75% de las personas sexualmente activas entrarán en contacto con el virus en algún momento de su vida.",
    complications: [
      "Desarrollo de displasias de bajo y alto grado (NIC 1, NIC 2, NIC 3)",
      "Evolución a cáncer cervicouterino si no se trata en años",
    ],
    treatments: [
      "Colposcopia de alta magnificación y tipificación viral por PCR",
      "Electrocirugía con asa diatérmica (esferólisis o cono LEEP) para remoción de epitelio atípico",
      "Eliminación de verrugas genitales con termocoagulación o criocirugía en consultorio",
      "Esquema de vacunación profiláctica para refuerzo inmunológico",
    ],
    faqs: [
      {
        question: "¿Tener VPH significa que tendré cáncer?",
        answer: "No. En la gran mayoría de las mujeres el sistema inmune aclara el virus o la lesión se detecta y elimina a tiempo con procedimientos sencillos en consultorio.",
      },
      {
        question: "¿Mi pareja también debe revisarse?",
        answer: "Sí, es recomendable la valoración urológica para descartar lesiones subclínicas y proteger la salud compartida.",
      },
      {
        question: "¿Vale la pena vacunarme si ya tuve el virus?",
        answer: "Sí, la vacuna protege contra múltiples serotipos oncogénicos a los que aún no has estado expuesta y estimula las defensas locales.",
      },
    ],
    relatedServices: [
      "colposcopia-papanicolaou",
      "checkup-basico",
      "checkup-ginecologico-completo",
      "checkup-integral",
    ],
    relatedSymptoms: [
      "flujo-vaginal-inusual",
    ],
    image: "/images/enfermedades/vph.webp",
    seo: {
      title: "Tratamiento de VPH en Tuxtla Gutiérrez | Dr. Jorge Albores",
      description: "Diagnóstico con colposcopia y eliminación de lesiones por VPH en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["vph tuxtla gutierrez", "tratamiento virus papiloma chiapas", "verrugas genitales ginecologo", "colposcopia vph"],
    },
  },
  {
    id: "miomatosis-uterina",
    slug: "miomatosis-uterina",
    name: "Miomatosis Uterina (Miomas o Fibromas)",
    technicalName: "Leiomiomatosis Uterina (Submucosos, Intramurales, Subserosos)",
    category: "ginecologia",
    description: "Tumores benignos del tejido muscular liso del útero (miometrio). Pueden provocar sangrados menstruales abundantes, anemia, dolor pélvico o infertilidad.",
    symptoms: [
      "Menstruaciones muy abundantes y con coágulos grandes",
      "Sensación de pesadez o aumento del perímetro abdominal inferior",
      "Frecuencia urinaria aumentada por compresión de la vejiga",
      "Dificultad para lograr o mantener el embarazo",
    ],
    causes: [
      "Sensibilidad y proliferación clonal de células musculares bajo influencia de estrógenos y progesterona",
    ],
    riskFactors: [
      "Mujeres entre 30 y 45 años",
      "Antecedente familiar directo (madre o hermanas con miomas)",
      "Nuliparidad (no haber tenido hijos)",
    ],
    mexicoStats: "Presentes en hasta el 40-50% de las mujeres mayores de 35 años en México.",
    complications: [
      "Anemia ferropénica crónica severa",
      "Compresión de uréteres o intestinos en miomas gigantes",
    ],
    treatments: [
      "Histeroscopia quirúrgica de consultorio para resección de miomas submucosos sin heridas",
      "Miomectomía laparoscópica mínimamente invasiva conservando el útero para pacientes con deseos reproductivos",
      "Histerectomía laparoscópica en pacientes con paridad satisfecha o miomatosis múltiple sintomática",
    ],
    faqs: [
      {
        question: "¿Se puede retirar un mioma sin quitar la matriz?",
        answer: "Sí. Mediante miomectomía laparoscópica o histeroscópica se extraen únicamente los miomas conservando el útero intacto para futuros embarazos.",
      },
      {
        question: "¿Los miomas se vuelven malignos?",
        answer: "Es sumamente raro (menos del 0.5% se asocian a leiomiosarcomas). Los miomas son tumores benignos que se operan por los síntomas que generan.",
      },
      {
        question: "¿Cuánto tiempo toma recuperarse de una cirugía laparoscópica de miomas?",
        answer: "Gracias a la técnica mínimamente invasiva, la mayoría de las pacientes reanudan sus actividades cotidianas en 7 a 14 días.",
      },
    ],
    relatedServices: [
      "consulta-ginecologica",
      "histeroscopia-diagnostica",
      "ultrasonido-mamario-ginecologico",
      "checkup-integral",
      "cirugia-ginecologica-mastologica",
    ],
    relatedSymptoms: [
      "sangrado-vaginal-anormal",
      "menstruaciones-abundantes-o-prolongadas",
      "colicos-menstruales-incapacitantes",
    ],
    image: "/images/enfermedades/miomatosis-uterina.webp",
    seo: {
      title: "Miomas Uterinos en Tuxtla Gutiérrez | Dr. Jorge Albores",
      description: "Cirugía laparoscópica e histeroscópica de miomas uterinos en Tuxtla Gutiérrez por cirujano endoscopista.",
      keywords: ["miomas tuxtla gutierrez", "miomectomia laparoscopica chiapas", "histeroscopia miomas", "sangrado por miomas tratamiento"],
    },
  },
  {
    id: "polipos-endometriales",
    slug: "polipos-endometriales",
    name: "Pólipos Endometriales",
    technicalName: "Pólipos de la Mucosa Endometrial y Cervical",
    category: "ginecologia",
    description: "Crecimientos carnosos benignos pedunculados o sésiles que sobresalen hacia el interior de la cavidad uterina desde la capa endometrial, causando manchados erráticos.",
    symptoms: [
      "Manchado intermenstrual o sangrado ligero tras el coito",
      "Menstruaciones prolongadas e impredecibles",
      "Sangrado uterino en la posmenopausia",
      "Infertilidad por interferencia en la implantación embrionaria",
    ],
    causes: [
      "Sobrecrecimiento focalizado de glándulas y estroma endometrial bajo estímulo estrogénico",
    ],
    riskFactors: [
      "Edad entre 40 y 50 años",
      "Hipertensión, obesidad o uso de moduladores hormonales",
    ],
    mexicoStats: "Hallados en hasta el 25% de las mujeres evaluadas por sangrado uterino anormal.",
    complications: [
      "Riesgo de hiperplasia endometrial atípica en mujeres posmenopáusicas",
    ],
    treatments: [
      "Histeroscopia diagnóstica de consultorio con visualización directa de la cavidad",
      "Polipectomía histeroscópica ambulatoria con asa fría o electrodo bipolar bajo visión directa",
      "Estudio histopatológico de la pieza para confirmación definitiva",
    ],
    faqs: [
      {
        question: "¿Cómo se diagnostica con certeza un pólipo en la matriz?",
        answer: "El ultrasonido transvaginal puede sospecharlo, pero la histeroscopia de consultorio es el único método que lo observa directamente y permite retirarlo en el mismo acto.",
      },
      {
        question: "¿La polipectomía histeroscópica requiere corte en la panza?",
        answer: "No. Se realiza a través de la vía natural vaginal mediante una cámara microscópica sin realizar ninguna incisión externa.",
      },
      {
        question: "¿Pueden volver a salir?",
        answer: "Aunque la gran mayoría no recurre, es recomendable realizar un control ecográfico anual para corroborar un endometrio saludable.",
      },
    ],
    relatedServices: [
      "histeroscopia-diagnostica",
    ],
    relatedSymptoms: [
      "sangrado-vaginal-anormal",
      "menstruaciones-abundantes-o-prolongadas",
    ],
    image: "/images/enfermedades/polipos-endometriales.webp",
    seo: {
      title: "Pólipos en la Matriz en Tuxtla | Dr. Jorge Albores",
      description: "Extirpación de pólipos endometriales por histeroscopia de consultorio en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["polipos endometriales tuxtla", "polipectomia histeroscopica chiapas", "sangrado por polipos", "endoscopia matriz tuxtla"],
    },
  },
  {
    id: "endometriosis",
    slug: "endometriosis",
    name: "Endometriosis y Adenomiosis",
    technicalName: "Endometriosis Pélvica Profunda y Adenomiosis Uterina",
    category: "ginecologia",
    description: "Presencia ectópica de tejido similar al endometrio fuera de la cavidad uterina (ovarios, trompas, peritoneo, ligamentos pélvicos), provocando inflamación crónica, adherencias y dolor severo.",
    symptoms: [
      "Cólicos menstruales incapacitantes (dismenorrea severa) que no ceden con analgésicos comunes",
      "Dolor pélvico crónico persistente",
      "Dolor intenso durante o después de las relaciones sexuales (dispareunia)",
      "Dolor al defecar u orinar durante la menstruación",
      "Dificultad para lograr el embarazo (infertilidad)",
    ],
    causes: [
      "Menstruación retrógrada con implantación ectópica",
      "Factores inmunológicos y predisposición genética",
    ],
    riskFactors: [
      "Ciclos menstruales cortos con sangrados prolongados",
      "Inicio temprano de la menstruación",
      "Familiares de primer grado con endometriosis",
    ],
    mexicoStats: "Afecta a más de 2 millones de mujeres en México, con un retraso diagnóstico promedio de 7 a 9 años por normalizar el dolor menstrual.",
    complications: [
      "Formación de quistes ováricos endometriósicos (endometriomas o quistes de chocolate)",
      "Adherencias pélvicas severas que congelan la pelvis y comprometen la fertilidad",
    ],
    treatments: [
      "Laparoscopia ginecológica de alta especialidad para resección y vaporización de implantes",
      "Liberación de adherencias pélvicas y cistectomía ovárica con preservación del tejido ovárico sano",
      "Plan médico personalizado de modulación hormonal para supresión de la actividad inflamatoria",
    ],
    faqs: [
      {
        question: "¿Por qué tardan tanto en diagnosticar la endometriosis?",
        answer: "Porque históricamente se ha normalizado que la menstruación duela. Cuando el dolor impide realizar actividades diarias, debe sospecharse y diagnosticarse con un especialista en laparoscopia.",
      },
      {
        question: "¿La endometriosis produce esterilidad definitiva?",
        answer: "No definitiva. El tratamiento oportuno por laparoscopia libera las trompas y restaura la anatomía pélvica, mejorando notablemente las tasas de fertilidad natural o asistida.",
      },
      {
        question: "¿Qué papel juega la cirugía laparoscópica?",
        answer: "Es el estándar para confirmar el diagnóstico y eliminar los focos dolorosos con magnificación óptica y mínimo trauma tisular.",
      },
    ],
    relatedServices: [
      "consulta-ginecologica",
      "cirugia-ginecologica-mastologica",
    ],
    relatedSymptoms: [
      "dolor-pelvico-cronico-o-agudo",
      "dolor-en-las-relaciones-sexuales",
      "colicos-menstruales-incapacitantes",
    ],
    image: "/images/enfermedades/endometriosis.webp",
    seo: {
      title: "Endometriosis en Tuxtla Gutiérrez | Dr. Jorge Albores",
      description: "Tratamiento de endometriosis y dolor pélvico severo por laparoscopia avanzada en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["endometriosis tuxtla gutierrez", "dolor menstrual severo chiapas", "laparoscopia endometriosis", "especialista en endometriosis"],
    },
  },
  {
    id: "quistes-de-ovario",
    slug: "quistes-de-ovario",
    name: "Quistes Ováricos y Tumores Benignos de Ovario",
    technicalName: "Quistes Fisiológicos, Endometriomas, Teratomas y Cistoadenomas",
    category: "ginecologia",
    description: "Formaciones saculares rellenas de líquido o tejido sólido dentro o sobre el ovario. La mayoría son benignos pero requieren monitoreo para descartar torsión o malignidad.",
    symptoms: [
      "Dolor pélvico unilateral sordo o punzante",
      "Sensación de plenitud o distensión abdominal baja",
      "Dolor súbito e intenso si el quiste se rompe o sufre torsión",
      "Alteraciones en el ciclo menstrual",
    ],
    causes: [
      "Falta de rotura folicular durante la ovulación (quiste funcional)",
      "Tejido endometrial ectópico (endometrioma)",
      "Células germinales embrionarias (teratoma o quiste dermoide)",
    ],
    riskFactors: [
      "Edad reproductiva",
      "Tratamientos de inducción ovulatoria",
      "Antecedente previo de quistes ováricos",
    ],
    mexicoStats: "Motivo del 15% de las urgencias quirúrgicas ginecológicas por torsión ovárica aguda.",
    complications: [
      "Torsión del pedículo ovárico con compromiso vascular y riesgo de necrosis ovárica",
      "Ruptura de quiste con hemorragia interna hacia la cavidad peritoneal",
    ],
    treatments: [
      "Vigilancia ecográfica seriada con Doppler color en quistes funcionales menores a 5 cm",
      "Cistectomía ovárica laparoscópica preservando la corteza ovárica y reserva folicular",
      "Abordaje de urgencia por mínima invasión en casos de torsión o sangrado activo",
    ],
    faqs: [
      {
        question: "¿Todos los quistes de ovario necesitan operación?",
        answer: "No. Los quistes foliculares o de cuerpo lúteo suelen reabsorberse espontáneamente en 2 o 3 ciclos menstruales. Solo se operan los quistes dermoides, endometriomas o aquellos mayores a 5-6 cm persistentes.",
      },
      {
        question: "¿Si me operan un quiste me quitan el ovario?",
        answer: "La prioridad del Dr. Albores es siempre la preservación ovárica (cistectomía conservadora), extirpando únicamente la cápsula del quiste y cuidando la fertilidad futura.",
      },
      {
        question: "¿Qué síntomas indican que un quiste se torció?",
        answer: "Un dolor súbito, intensísimo en un lado del bajo vientre, acompañado de náuseas, vómitos y sudoración fría. Es una urgencia médica que debe atenderse de inmediato.",
      },
    ],
    relatedServices: [
      "ultrasonido-mamario-ginecologico",
      "checkup-integral",
      "cirugia-ginecologica-mastologica",
    ],
    relatedSymptoms: [
      "dolor-pelvico-cronico-o-agudo",
    ],
    image: "/images/enfermedades/quistes-de-ovario.webp",
    seo: {
      title: "Quistes en los Ovarios en Tuxtla | Dr. Jorge Albores",
      description: "Cirugía laparoscópica conservadora y tratamiento de quistes ováricos en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["quistes de ovario tuxtla", "laparoscopia quiste ovarico chiapas", "cistectomia ovarica", "dolor de ovarios tratamiento"],
    },
  },
  {
    id: "sindrome-ovario-poliquistico",
    slug: "sindrome-ovario-poliquistico",
    name: "Síndrome de Ovario Poliquístico (SOP)",
    technicalName: "Síndrome de Hiperandrogenismo y Disfunción Ovulatoria",
    category: "ginecologia",
    description: "Trastorno endocrino y metabólico caracterizado por desequilibrio hormonal, ovulación irregular o nula, niveles elevados de andrógenos y múltiples microfolículos en los ovarios.",
    symptoms: [
      "Ciclos menstruales muy irregulares, retrasos prolongados o ausencia de regla",
      "Exceso de vello en rostro, barbilla, pecho o abdomen (hirsutismo)",
      "Acné persistente en la edad adulta y piel grasa",
      "Aumento de peso con dificultad para perderlo y oscurecimiento en el cuello (acantosis nigricans)",
    ],
    causes: [
      "Resistencia a la insulina con hiperinsulinemia compensatoria",
      "Disfunción en el eje hipotálamo-hipófisis-ovario con elevación de LH y andrógenos",
    ],
    riskFactors: [
      "Antecedentes familiares de SOP o diabetes mellitus tipo 2",
      "Sobrepeso y sedentarismo",
    ],
    mexicoStats: "Afecta a entre el 6% y el 12% de las mujeres en edad reproductiva en México.",
    complications: [
      "Infertilidad por anovulación crónica",
      "Riesgo aumentado de diabetes tipo 2, hipertensión y esteatosis hepática",
      "Hiperplasia endometrial por estímulo estrogénico continuo sin oposición de progesterona",
    ],
    treatments: [
      "Evaluación ultrasonográfica de morfología ovárica y panel hormonal completo",
      "Plan integral de intervención metabólica, nutrición de bajo índice glucémico y ejercicio",
      "Protocolo para inducción de la ovulación si existe deseo de fertilidad inmediata",
      "Monitoreo ecográfico endometrial periódico",
    ],
    faqs: [
      {
        question: "¿Tener ovarios con aspecto poliquístico en ultrasonido es lo mismo que tener el Síndrome (SOP)?",
        answer: "No. Muchas mujeres jóvenes tienen ovarios con aspecto multirreticular sin tener el síndrome. Para diagnosticar SOP se requieren al menos dos de tres criterios: reglas irregulares, exceso de andrógenos y ecografía compatible.",
      },
      {
        question: "¿El SOP se cura?",
        answer: "Es una condición metabólica que no se cura pero se controla eficazmente, logrando regularizar la menstruación, revertir el acné y permitir embarazos saludables.",
      },
      {
        question: "¿Podré tener hijos si tengo SOP?",
        answer: "Sí, absolutamente. Con el manejo médico adecuado para estimular la ovulación, la gran mayoría de las pacientes logran embarazos exitosos.",
      },
    ],
    relatedServices: [
      "consulta-ginecologica",
      "ultrasonido-mamario-ginecologico",
    ],
    relatedSymptoms: [
      "retraso-o-ausencia-del-periodo",
    ],
    image: "/images/enfermedades/sop.webp",
    seo: {
      title: "Síndrome de Ovario Poliquístico en Tuxtla | Dr. Jorge Albores",
      description: "Diagnóstico y control integral del SOP y desbalances hormonales en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["sop tuxtla gutierrez", "ovario poliquistico tratamiento chiapas", "retraso menstrual sop", "hirsutismo ginecologo"],
    },
  },
  {
    id: "hiperplasia-endometrial",
    slug: "hiperplasia-endometrial",
    name: "Hiperplasia Endometrial",
    technicalName: "Hiperplasia Endometrial Simple, Compleja y con Atipia",
    category: "ginecologia",
    description: "Engrosamiento y proliferación celular excesiva del revestimiento interno del útero (endometrio) ocasionada por un estímulo estrogénico prolongado sin el freno de la progesterona.",
    symptoms: [
      "Sangrado uterino anormal o abundante fuera de tiempo",
      "Periodos que duran más de 10 días continuos",
      "Cualquier sangrado en mujeres que ya están en la menopausia",
    ],
    causes: [
      "Exposición a estrógenos no contrarrestados (anovulación crónica, obesidad, perimenopausia)",
    ],
    riskFactors: [
      "Mujeres mayores de 40 años o posmenopáusicas",
      "Obesidad (el tejido graso convierte andrógenos en estrógenos)",
      "Diabetes mellitus y nuliparidad",
    ],
    mexicoStats: "Causa del 15% al 20% de los sangrados anormales en la perimenopausia y posmenopausia.",
    complications: [
      "Riesgo de transformación a adenocarcinoma de endometrio en variantes con atipia",
    ],
    treatments: [
      "Histeroscopia diagnóstica en consultorio con toma de biopsia dirigida bajo visión directa",
      "Protocolo hormonal intrauterino o sistémico en hiperplasias benignas sin atipia",
      "Histerectomía total por laparoscopia en hiperplasias con atipia celular",
    ],
    faqs: [
      {
        question: "¿La hiperplasia endometrial es cáncer?",
        answer: "No es cáncer, pero es una lesión que si presenta células atípicas puede evolucionar a cáncer endometrial si no se atiende oportunamente.",
      },
      {
        question: "¿Cómo se confirma el diagnóstico?",
        answer: "A través de una biopsia del endometrio guiada por histeroscopia de consultorio, la cual se analiza en patología con máxima precisión.",
      },
      {
        question: "¿Se puede tratar sin cirugía mayor?",
        answer: "Sí, las variantes sin atipia responden de forma excelente a terapias hormonales y dispositivos intrauterinos liberadores de progestágenos.",
      },
    ],
    relatedServices: [
      "histeroscopia-diagnostica",
    ],
    relatedSymptoms: [
      "sangrado-vaginal-anormal",
    ],
    image: "/images/enfermedades/hiperplasia-endometrial.webp",
    seo: {
      title: "Hiperplasia Endometrial en Tuxtla | Dr. Jorge Albores",
      description: "Diagnóstico histeroscópico y manejo de engrosamiento endometrial en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["hiperplasia endometrial tuxtla", "engrosamiento endometrio chiapas", "biopsia endometrio histeroscopia", "sangrado menopausia"],
    },
  },
  {
    id: "prolapso-organos-pelvicos",
    slug: "prolapso-organos-pelvicos",
    name: "Prolapso de Órganos Pélvicos",
    technicalName: "Cistocele, Rectocele y Prolapso Uterino (Histerocele)",
    category: "ginecologia",
    description: "Descenso de la vejiga, útero o recto a través del canal vaginal debido al debilitamiento o estiramiento de los músculos y ligamentos del suelo pélvico.",
    symptoms: [
      "Sensación de peso, presión o bulto palpable que asoma por la vagina",
      "Dificultad para vaciar la vejiga por completo o necesidad de orinar frecuentemente",
      "Incomodidad o dolor durante las relaciones sexuales",
      "Dolor lumbar o en la pelvis que empeora hacia el final del día",
    ],
    causes: [
      "Trauma obstétrico por partos vaginales múltiples o instrumentados",
      "Deterioro del colágeno por la menopausia",
      "Incremento crónico de la presión intraabdominal (tos, estreñimiento, obesidad)",
    ],
    riskFactors: [
      "Mujeres posmenopáusicas",
      "Partos vaginales con bebés de más de 4 kg",
      "Trabajos de carga pesada",
    ],
    mexicoStats: "Afecta a casi el 40% de las mujeres mayores de 50 años en diversos grados de severidad.",
    complications: [
      "Ulceración e infección de la mucosa vaginal expuesta al exterior",
      "Retención aguda de orina e infecciones urinarias de repetición",
    ],
    treatments: [
      "Ejercicios guiados de fortalecimiento del suelo pélvico en grados leves",
      "Colocación de pesarios vaginales en pacientes no candidatas a quirófano",
      "Cirugía reconstructiva pélvica de mínima invasión (colporrafia, fijación de ligamentos sacroespinosos o histerectomía vaginal)",
    ],
    faqs: [
      {
        question: "¿Qué es exactamente el cistocele?",
        answer: "Es el descenso de la pared de la vejiga urinaria hacia la vagina, lo que comúnmente se conoce como 'vejiga caída'.",
      },
      {
        question: "¿Es obligatoria la cirugía?",
        answer: "En grados iniciales se puede controlar con rehabilitación de suelo pélvico. Si el bulto ya sobresale de la vulva o causa problemas urinarios, la cirugía reconstructiva brinda una solución permanente.",
      },
      {
        question: "¿La cirugía se puede hacer sin cicatrices en el abdomen?",
        answer: "Sí, la gran mayoría de estas intervenciones se realizan por vía vaginal sin incisiones en el abdomen.",
      },
    ],
    relatedServices: [
      "cirugia-ginecologica-mastologica",
    ],
    relatedSymptoms: [
      "sensacion-de-bulto-o-peso-en-la-vagina",
    ],
    image: "/images/enfermedades/prolapso-pelvico.webp",
    seo: {
      title: "Vejiga Caída y Prolapso en Tuxtla | Dr. Jorge Albores",
      description: "Cirugía reconstructiva de suelo pélvico y prolapso genital en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["prolapso de vejiga tuxtla", "matriz caida cirugia chiapas", "cistocele tratamiento", "suelo pelvico ginecologo"],
    },
  },
  {
    id: "incontinencia-urinaria-femenina",
    slug: "incontinencia-urinaria-femenina",
    name: "Incontinencia Urinaria Femenina",
    technicalName: "Incontinencia Urinaria de Esfuerzo, de Urgencia y Mixta",
    category: "ginecologia",
    description: "Pérdida involuntaria de orina desencadenada por actividades que aumentan la presión intraabdominal (reír, toser, estornudar) o por deseos repentinos e incontrolables de micción.",
    symptoms: [
      "Fuga de gotas o chorro de orina al toser, estornudar, correr o reírse",
      "Sensación urgente e imperiosa de orinar con escape antes de llegar al sanitario",
      "Necesidad de levantarse múltiples veces en la noche a orinar (nocturia)",
    ],
    causes: [
      "Hipermovilidad del cuello vesical y deficiencia esfinteriana por daño en el suelo pélvico",
      "Contracciones involuntarias del músculo detrusor de la vejiga",
    ],
    riskFactors: [
      "Embarazos y partos vaginales previos",
      "Menopausia con hipoestrogenismo",
      "Sobrepeso, estreñimiento crónico e infecciones urinarias repetidas",
    ],
    mexicoStats: "Se calcula que 1 de cada 3 mujeres mayores de 35 años experimenta episodios de pérdida involuntaria de orina.",
    complications: [
      "Aislamiento social, afectación de la vida íntima y dermatitis en zona genital",
    ],
    treatments: [
      "Rehabilitación perineal y reeducación vesical",
      "Colocación de cintas suburetrales libres de tensión (TOT/TVT) mediante técnica mínimamente invasiva",
      "Manejo ginecológico integral de la atrofia del epitelio urogenital",
    ],
    faqs: [
      {
        question: "¿Es normal tener pérdidas de orina después de haber tenido hijos?",
        answer: "Es frecuente pero no es normal. La pérdida involuntaria de orina es una condición médica tratable que no debe asumirse como el costo natural de la maternidad.",
      },
      {
        question: "¿Cómo funciona la cirugía de cinta para incontinencia?",
        answer: "Se coloca una malla biocompatible diminuta debajo de la uretra que actúa como una hamaca de soporte; es un procedimiento ambulatorio con una tasa de éxito superior al 90%.",
      },
      {
        question: "¿Cuánto dura la intervención?",
        answer: "Aproximadamente 30 a 40 minutos, con alta el mismo día y pronta reintegración a la vida diaria.",
      },
    ],
    relatedServices: [
      "consulta-ginecologica",
      "cirugia-ginecologica-mastologica",
    ],
    relatedSymptoms: [
      "perdida-involuntaria-de-orina",
      "molestias-o-ardor-al-orinar",
    ],
    image: "/images/enfermedades/incontinencia-urinaria.webp",
    seo: {
      title: "Incontinencia Urinaria Femenina en Tuxtla | Dr. Jorge Albores",
      description: "Tratamiento y cirugía mínimamente invasiva de incontinencia urinaria en mujeres en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["incontinencia urinaria mujer tuxtla", "cirugia cinta tot chiapas", "escape de orina solucion", "ginecologo urologia tuxtla"],
    },
  },
  {
    id: "infecciones-vaginales-recurrentes",
    slug: "infecciones-vaginales-recurrentes",
    name: "Infecciones Vaginales Recurrentes (Vaginitis Crónica)",
    technicalName: "Candidiasis Recurrente, Vaginosis Bacteriana y Tricomoniasis",
    category: "ginecologia",
    description: "Episodios repetidos de inflamación de la mucosa vaginal con alteración del flujo, ardor y comezón que se presentan 4 o más veces en el transcurso de un año.",
    symptoms: [
      "Flujo vaginal blanquecino y espeso en grumos, o grisáceo con olor a pescado",
      "Prurito (comezón intensa) y ardor en la vulva y entrada vaginal",
      "Enrojecimiento, inflamación y fisuras dolorosas en genitales externos",
      "Molestia o ardor al contacto íntimo y al orinar",
    ],
    causes: [
      "Desbalance del microbioma protector vaginal (Lactobacillus)",
      "Proliferación de Candida albicans o bacterias anaerobias (Gardnerella vaginalis)",
      "Resistencia creada por automedicación frecuente con óvulos comerciales",
    ],
    riskFactors: [
      "Uso de ropa interior sintética muy ajustada o protectores diarios continuos",
      "Diabetes descontrolada o uso reciente de antibióticos por otras causas",
      "Duchas vaginales y jabones íntimos con fragancias que alteran el pH",
    ],
    mexicoStats: "Representa el 25% de todas las consultas ginecológicas de primera vez en nuestro país.",
    complications: [
      "Deterioro de la calidad de vida y malestar íntimo continuo",
      "Riesgo de infección ascendente hacia el cérvix y trompas uterinas",
    ],
    treatments: [
      "Toma de frotis en fresco, cultivo vaginal y determinación de pH en consultorio",
      "Protocolo clínico específico guiado por antibiograma o antifúngico dirigido",
      "Restauración de la barrera ácida y flora de lactobacilos vaginales",
      "Tratamiento simultáneo de la pareja en casos indicados",
    ],
    faqs: [
      {
        question: "¿Por qué no me curo con los óvulos de la farmacia?",
        answer: "Muchos óvulos comerciales contienen mezclas genéricas que no eliminan cepas resistentes o barren la flora buena, provocando que la infección regrese al poco tiempo.",
      },
      {
        question: "¿El uso de protectores diarios afecta?",
        answer: "Sí, generan humedad constante y calor en la zona íntima, creando el ambiente perfecto para la reproducción de hongos.",
      },
      {
        question: "¿La candidiasis es una enfermedad de transmisión sexual?",
        answer: "No necesariamente. La Candida vive de forma habitual en nuestro cuerpo; lo que ocurre es una sobrepoblación cuando el pH o las defensas locales se desestabilizan.",
      },
    ],
    relatedServices: [
      "consulta-ginecologica",
      "colposcopia-papanicolaou",
      "checkup-basico",
      "checkup-ginecologico-completo",
    ],
    relatedSymptoms: [
      "flujo-vaginal-inusual",
      "dolor-en-las-relaciones-sexuales",
      "molestias-o-ardor-al-orinar",
    ],
    image: "/images/enfermedades/infecciones-vaginales.webp",
    seo: {
      title: "Infecciones Vaginales Recurrentes en Tuxtla | Dr. Jorge Albores",
      description: "Diagnóstico certero con cultivo y tratamiento definitivo de vaginitis y candidiasis en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["infecciones vaginales tuxtla", "candidiasis recurrente chiapas", "flujo con mal olor tratamiento", "ginecologo vaginitis"],
    },
  },
  {
    id: "enfermedad-pelvica-inflamatoria",
    slug: "enfermedad-pelvica-inflamatoria",
    name: "Enfermedad Pélvica Inflamatoria (EPI)",
    technicalName: "Salpingitis, Ooforitis y Endometritis Infecciosa Aguda / Crónica",
    category: "ginecologia",
    description: "Infección de los órganos reproductores femeninos superiores (endometrio, trompas de Falopio y ovarios) provocada por el ascenso de bacterias desde la vagina y cérvix.",
    symptoms: [
      "Dolor continuo en el bajo vientre y pelvis de intensidad moderada a severa",
      "Flujo vaginal anormal purulento o maloliente",
      "Fiebre, escalofríos y náuseas",
      "Dolor exquisito a la movilización del cuello uterino durante el examen médico",
    ],
    causes: [
      "Infecciones bacterianas ascendentes como Chlamydia trachomatis, Neisseria gonorrhoeae y flora mixta",
    ],
    riskFactors: [
      "Múltiples parejas sexuales sin uso de preservativo",
      "Antecedente de infecciones de transmisión sexual no tratadas oportunamente",
      "Procedimientos uterinos recientes sin profilaxis previa",
    ],
    mexicoStats: "Causa prevenible de hasta el 20% de los casos de infertilidad de origen tubárico en mujeres jóvenes.",
    complications: [
      "Formación de absceso tuboovárico que comprometa la viabilidad del ovario",
      "Obstrucción de trompas de Falopio con aumento drástico del riesgo de embarazo ectópico",
      "Dolor pélvico crónico e infertilidad definitiva",
    ],
    treatments: [
      "Manejo clínico antimicrobiano protocolizado de amplio espectro",
      "Laparoscopia diagnóstica y terapéutica para drenaje de abscesos y liberación de adherencias pélvicas",
      "Estudio y tratamiento concomitante de la pareja",
    ],
    faqs: [
      {
        question: "¿Cómo sé si mi dolor de vientre es por una infección pélvica?",
        answer: "Si el dolor se acompaña de fiebre, dolor al caminar o al tener relaciones y flujo anormal, se debe sospechar EPI y acudir a valoración inmediata.",
      },
      {
        question: "¿Puede afectar mis posibilidades de tener hijos en el futuro?",
        answer: "Sí, si no se trata en los primeros días la inflamación cicatriza las trompas de Falopio cerrándolas, lo que puede impedir el paso de los óvulos.",
      },
      {
        question: "¿Se requiere hospitalización?",
        answer: "En casos moderados a severos con fiebre alta o sospecha de absceso se requiere manejo hospitalario inicial para controlar la infección de manera segura.",
      },
    ],
    relatedServices: [
      "consulta-ginecologica",
    ],
    relatedSymptoms: [
      "flujo-vaginal-inusual",
      "dolor-pelvico-cronico-o-agudo",
    ],
    image: "/images/enfermedades/epi.webp",
    seo: {
      title: "Enfermedad Pélvica Inflamatoria en Tuxtla | Dr. Jorge Albores",
      description: "Diagnóstico y tratamiento de urgencia de infecciones pélvicas en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["enfermedad pelvica inflamatoria tuxtla", "dolor pelvico infeccion chiapas", "salpingitis tratamiento", "ginecologo urgencias tuxtla"],
    },
  },
  {
    id: "amenorrea-y-oligomenorrea",
    slug: "amenorrea-y-oligomenorrea",
    name: "Amenorrea y Oligomenorrea",
    technicalName: "Trastornos de la Frecuencia Menstrual y Falla Ovárica",
    category: "ginecologia",
    description: "Ausencia de menstruación por más de 90 días (amenorrea) o ciclos muy espaciados que superan los 45 días (oligomenorrea) debido a fallas en el eje hormonal o anatómico.",
    symptoms: [
      "Falta de sangrado menstrual por meses sin embarazo",
      "Ciclos sumamente impredecibles y escasos",
      "Sofocos o cambios de humor en casos de falla ovárica prematura",
      "Brotes de acné o caída del cabello",
    ],
    causes: [
      "Anovulación por SOP",
      "Disfunción hipotalámica por restricción calórica, ejercicio exhaustivo o estrés",
      "Hiperprolactinemia o alteraciones de la glándula tiroides",
      "Insuficiencia ovárica precoz",
    ],
    riskFactors: [
      "Pérdida rápida de peso corporal",
      "Atletas de alto rendimiento",
      "Antecedente familiar de menopausia temprana",
    ],
    mexicoStats: "Afecta hasta a un 5% de la población femenina fértil fuera de las etapas de gestación y lactancia.",
    complications: [
      "Pérdida de densidad mineral ósea (osteopenia temprana) por hipoestrogenismo",
      "Infertilidad anovulatoria",
    ],
    treatments: [
      "Perfil hormonal ginecológico y tiroideo completo",
      "Ultrasonido pélvico de alta resolución para medir línea endometrial y recuento folicular",
      "Protocolo para restablecimiento del ciclo hormonal y protección endometrial",
    ],
    faqs: [
      {
        question: "¿Qué es lo primero que se debe descartar si no me baja?",
        answer: "Siempre debe descartarse un embarazo como primera medida mediante prueba inmunológica en sangre o ultrasonido.",
      },
      {
        question: "¿Es peligroso no menstruar si no estoy embarazada?",
        answer: "Sí, porque si el endometrio no se descama periódicamente puede engrosarse de forma anormal, o por el contrario, reflejar una falta de estrógenos que dañe los huesos.",
      },
      {
        question: "¿A los cuántos meses sin periodo debo ir al ginecólogo?",
        answer: "Si han pasado más de 3 meses sin menstruación (o más de 45 días de retraso) es necesario realizar una valoración clínica completa.",
      },
    ],
    relatedServices: [
      "consulta-ginecologica",
    ],
    relatedSymptoms: [
      "retraso-o-ausencia-del-periodo",
    ],
    image: "/images/enfermedades/amenorrea.webp",
    seo: {
      title: "Falta de Menstruación (Amenorrea) en Tuxtla | Dr. Jorge Albores",
      description: "Estudio hormonal y tratamiento de ausencia de regla en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["amenorrea tuxtla gutierrez", "no me baja regla chiapas", "retraso menstrual causas", "ginecologo endocrinologo tuxtla"],
    },
  },
  {
    id: "sangrado-uterino-anormal",
    slug: "sangrado-uterino-anormal",
    name: "Sangrado Uterino Anormal (SUA)",
    technicalName: "Hemorragia Uterina Disfuncional y Clasificación PALM-COEIN",
    category: "ginecologia",
    description: "Cualquier variación en la duración, frecuencia o cantidad del sangrado menstrual que difiera de los patrones biológicos regulares de la paciente.",
    symptoms: [
      "Reglas que duran más de 8 días consecutivos",
      "Sangrado intermenstrual entre periodos",
      "Expulsión continua de coágulos abundantes con fatiga y mareos",
      "Sangrado tras el inicio de la menopausia",
    ],
    causes: [
      "Causas estructurales: Pólipos, Adenomiosis, Leiomiomas, Malignidad (PALM)",
      "Causas no estructurales: Coagulopatías, Disfunción ovulatoria, Endometrial, Iatrogénica (COEIN)",
    ],
    riskFactors: [
      "Mujeres en extremos de la vida reproductiva (adolescencia y perimenopausia)",
      "Presencia de miomas o pólipos",
      "Alteraciones en la coagulación sanguínea",
    ],
    mexicoStats: "Segunda causa más común de consulta ginecológica general en mujeres mexicanas.",
    complications: [
      "Anemia ferropénica severa que amerita transfusión sanguínea",
      "Deterioro marcado del desempeño laboral y bienestar emocional",
    ],
    treatments: [
      "Evaluación histeroscópica diagnóstica en consultorio con visión HD",
      "Biopsia de endometrio ambulatoria para descarte neoplásico",
      "Resección histeroscópica o histerectomía laparoscópica según la causa de fondo",
      "Colocación de sistema intrauterino liberador de progesterona para control del flujo",
    ],
    faqs: [
      {
        question: "¿Qué es el sistema PALM-COEIN?",
        answer: "Es la clasificación internacional de la FIGO que divide las causas de sangrado en estructurales visibles (pólipos, adenomiosis, miomas) y no estructurales (hormonales o de coagulación).",
      },
      {
        question: "¿Cómo se frena una hemorragia muy abundante?",
        answer: "Dependiendo de la causa, se pueden emplear agentes hemostáticos orales, manejo hormonal guiado o procedimientos endoscópicos de consultorio para sellar la fuente.",
      },
      {
        question: "¿Es indispensable quitar la matriz si sangro mucho?",
        answer: "Casi nunca es la primera opción. Hoy en día existen técnicas endoscópicas y médicas conservadoras que preservan el útero con excelentes resultados.",
      },
    ],
    relatedServices: [
      "consulta-ginecologica",
      "histeroscopia-diagnostica",
      "checkup-ginecologico-completo",
    ],
    relatedSymptoms: [
      "sangrado-vaginal-anormal",
      "menstruaciones-abundantes-o-prolongadas",
    ],
    image: "/images/enfermedades/sangrado-anormal.webp",
    seo: {
      title: "Sangrado Uterino Anormal en Tuxtla | Dr. Jorge Albores",
      description: "Diagnóstico con histeroscopia de consultorio y tratamiento de hemorragias en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["sangrado uterino anormal tuxtla", "hemorragia uterina chiapas", "histeroscopia sangrado", "ginecologo sangrados abundantes"],
    },
  },
  {
    id: "dismenorrea-severa",
    slug: "dismenorrea-severa",
    name: "Dismenorrea Severa (Dolor Menstrual Incapacitante)",
    technicalName: "Dismenorrea Secundaria Asociada a Patología Pélvica",
    category: "ginecologia",
    description: "Dolor pélvico espasmódico e intenso que acompaña a la menstruación y que limita sustancialmente las actividades cotidianas, reflejando frecuentemente una patología de base.",
    symptoms: [
      "Dolor cólico abdominal agudo que irradia a la espalda baja y muslos",
      "Náuseas, mareo, cefalea y vómitos durante los primeros días de regla",
      "Necesidad de reposo en cama e incapacidad laboral periódica",
    ],
    causes: [
      "Producción desmedida de prostaglandinas endometriales",
      "Endometriosis pélvica",
      "Adenomiosis (islas de endometrio dentro del miometrio)",
      "Miomas submucosos o estenosis del canal cervical",
    ],
    riskFactors: [
      "Menarquia temprana",
      "Flujos menstruales abundantes",
      "Tabaquismo e historia familiar de dismenorrea",
    ],
    mexicoStats: "Afecta severamente a más del 20% de las mujeres jóvenes en edad escolar y laboral en nuestro país.",
    complications: [
      "Deterioro crónico de la calidad de vida y ausentismo laboral recurrente",
      "Progresión inadvertida de endometriosis con daño a la fertilidad",
    ],
    treatments: [
      "Ultrasonido pélvico Doppler de alta resolución para búsqueda de adenomiosis o miomas",
      "Mapeo laparoscópico de lesiones endometriósicas",
      "Protocolo de bloqueo hormonal selectivo para suspender la cascada inflamatoria",
    ],
    faqs: [
      {
        question: "¿Por qué los analgésicos comunes ya no me quitan el dolor?",
        answer: "Porque en la dismenorrea secundaria la causa es una alteración anatómica profunda (como endometriosis o adenomiosis) que supera el efecto de un analgésico simple y requiere abordaje de raíz.",
      },
      {
        question: "¿La dismenorrea mejora después de tener un bebé?",
        answer: "La dismenorrea primaria puede atenuarse tras un parto vaginal, pero la causada por endometriosis o miomas persiste hasta que se trate la afección subyacente.",
      },
      {
        question: "¿Qué estudios debo hacerme?",
        answer: "Una revisión ginecológica completa y un ultrasonido transvaginal de alta definición especializado en patología pélvica.",
      },
    ],
    relatedServices: [
      "consulta-ginecologica",
    ],
    relatedSymptoms: [
      "colicos-menstruales-incapacitantes",
    ],
    image: "/images/enfermedades/dismenorrea-severa.webp",
    seo: {
      title: "Dismenorrea y Cólicos Severos en Tuxtla | Dr. Jorge Albores",
      description: "Diagnóstico y alivio del dolor menstrual incapacitante en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["dismenorrea severa tuxtla", "colicos menstruales incapacitantes", "dolor de regla ginecologo chiapas", "tratamiento dolor menstrual"],
    },
  },

  // ─── OBSTETRICIA Y EMBARAZO (9) ────────────────────────────────
  {
    id: "embarazo-de-alto-riesgo",
    slug: "embarazo-de-alto-riesgo",
    name: "Embarazo de Alto Riesgo",
    technicalName: "Gestación con Factores de Riesgo Materno-Fetal Incrementados",
    category: "obstetricia",
    description: "Gestación en la que la salud o la vida de la madre o del feto presentan una probabilidad mayor de complicaciones debido a enfermedades preexistentes o surgidas durante el embarazo.",
    symptoms: [
      "Presión arterial elevada en revisiones médicas",
      "Pérdida de peso o ganancia ponderal exagerada",
      "Disminución en la percepción de los movimientos fetales habituales",
      "Contracciones uterinas dolorosas antes de la fecha probable de parto",
    ],
    causes: [
      "Enfermedades crónicas maternas (hipertensión, diabetes, lupus, cardiopatías)",
      "Complicaciones obstétricas previas (preeclampsia, abortos recurrentes)",
      "Gestaciones múltiples o anomalías placentarias",
    ],
    riskFactors: [
      "Edad materna menor a 18 o mayor a 35 años",
      "Cesáreas previas múltiples",
      "Obesidad severa o desnutrición",
    ],
    mexicoStats: "Hasta un 20% de los embarazos en México cumplen criterios de alto riesgo obstétrico.",
    complications: [
      "Parto prematuro con inmadurez pulmonar neonatal",
      "Restricción del crecimiento intrauterino y muerte perinatal",
      "Hemorragia obstétrica o daño a órganos blanco maternos",
    ],
    treatments: [
      "Monitoreo ecográfico Doppler de arterias uterinas, umbilical y cerebral media fetal",
      "Control prenatal de alta frecuencia con cálculo de riesgo de preeclampsia en primer trimestre",
      "Planeación del momento y vía óptima de nacimiento (parto o cesárea) en hospital con terapia intensiva neonatal",
    ],
    faqs: [
      {
        question: "¿Tener más de 35 años convierte mi embarazo en alto riesgo?",
        answer: "Se considera un factor de riesgo por mayor probabilidad de hipertensión o alteraciones cromosómicas, pero con un control prenatal riguroso la mayoría de las mujeres tienen bebés sanos.",
      },
      {
        question: "¿Cada cuánto son las consultas en un embarazo de alto riesgo?",
        answer: "A diferencia del embarazo de bajo riesgo, las citas suelen programarse cada dos o tres semanas, o incluso semanalmente según la condición que se vigile.",
      },
      {
        question: "¿El Dr. Albores cuenta con ultrasonido en consultorio para estas revisiones?",
        answer: "Sí, cada consulta incluye monitoreo ecográfico de alta definición para verificar el bienestar y vitalidad de tu bebé al instante.",
      },
    ],
    relatedServices: [
      "control-prenatal",
    ],
    relatedSymptoms: [
      "nauseas-y-vomitos-excesivos-en-embarazo",
    ],
    image: "/images/enfermedades/embarazo-alto-riesgo.webp",
    seo: {
      title: "Embarazo de Alto Riesgo en Tuxtla | Dr. Jorge Albores",
      description: "Vigilancia especializada y ultrasonido Doppler materno-fetal en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["embarazo alto riesgo tuxtla", "ginecologo obstetra chiapas", "control prenatal especializado", "complicaciones embarazo tuxtla"],
    },
  },
  {
    id: "preeclampsia-y-trastornos-hipertensivos",
    slug: "preeclampsia-y-trastornos-hipertensivos",
    name: "Preeclampsia y Trastornos Hipertensivos del Embarazo",
    technicalName: "Preeclampsia con y sin Criterios de Severidad / Síndrome HELLP",
    category: "obstetricia",
    description: "Complicación gestacional grave caracterizada por elevación de la presión arterial (igual o mayor a 140/90 mmHg) después de la semana 20, con daño a órganos como riñón o hígado.",
    symptoms: [
      "Dolor de cabeza intenso y pulsátil que no cede (cefalea)",
      "Visión borrosa, destellos de luz (fosfenos) o zumbido en los oídos (acúfenos)",
      "Dolor agudo en la boca del estómago o debajo de las costillas derechas (epigastralgia)",
      "Hinchazón rápida y súbita en cara, manos y pies (edema generalizado)",
    ],
    causes: [
      "Desarrollo anómalo de los vasos sanguíneos de la placenta (isquemia placentaria)",
      "Disfunción del endotelio vascular materno mediado por factores antiangiogénicos",
    ],
    riskFactors: [
      "Primer embarazo (primigestas)",
      "Antecedente de preeclampsia en gestación previa o historia familiar directa",
      "Hipertensión arterial crónica, diabetes o enfermedad renal",
      "Embarazo múltiple",
    ],
    mexicoStats: "Principal causa de muerte materna y parto prematuro inducido en los hospitales de México.",
    complications: [
      "Eclampsia (convulsiones maternas potencialmente fatales)",
      "Síndrome HELLP (destrucción de glóbulos rojos, enzimas hepáticas altas y plaquetas bajas)",
      "Desprendimiento prematuro de placenta normoinserta y sufrimiento fetal",
    ],
    treatments: [
      "Tamizaje de preeclampsia en semanas 11-14 con Doppler de arterias uterinas y prevención oportuna",
      "Monitoreo hemodinámico estricto y perfil de laboratorio toxémico seriado",
      "Estabilización y resolución del embarazo en tiempo óptimo hospitalario para proteger a la madre y al feto",
    ],
    faqs: [
      {
        question: "¿Se puede predecir la preeclampsia antes de que suba la presión?",
        answer: "Sí. Mediante el ultrasonido genético de semana 11 a 14 y Doppler de arterias uterinas se puede calcular el riesgo y pautar medidas preventivas que reducen drásticamente su incidencia.",
      },
      {
        question: "¿Qué debo hacer si veo lucecitas y me duele la cabeza en el embarazo?",
        answer: "Debes tomarte la presión de inmediato y comunicarte de urgencia al 961 249 6398 con el Dr. Jorge Albores; son signos clásicos de preeclampsia severa.",
      },
      {
        question: "¿La preeclampsia desaparece al nacer el bebé?",
        answer: "La resolución del embarazo es el único tratamiento definitivo, aunque la paciente debe mantenerse bajo estrecha vigilancia médica las primeras 48 a 72 horas del posparto.",
      },
    ],
    relatedServices: [
      "control-prenatal",
    ],
    relatedSymptoms: [
      "contracciones-tempranas-o-dolor-abdominal",
    ],
    image: "/images/enfermedades/preeclampsia.webp",
    seo: {
      title: "Preeclampsia y Presión Alta en Embarazo en Tuxtla | Dr. Jorge Albores",
      description: "Detección temprana y manejo de preeclampsia en Tuxtla Gutiérrez, Chiapas. Línea de urgencias obstétricas.",
      keywords: ["preeclampsia tuxtla gutierrez", "presion alta en embarazo chiapas", "sindrome hellp", "urgencias obstetricas tuxtla"],
    },
  },
  {
    id: "diabetes-gestacional",
    slug: "diabetes-gestacional",
    name: "Diabetes Gestacional",
    technicalName: "Intolerancia a los Hidratos de Carbono Diagnosticada Durante el Embarazo",
    category: "obstetricia",
    description: "Alteración metabólica en la que los niveles de glucosa en sangre se elevan por primera vez durante la gestación debido a la resistencia a la insulina provocada por las hormonas de la placenta.",
    symptoms: [
      "Frecuentemente no produce síntomas evidentes (silenciosa)",
      "Sed excesiva (polidipsia) y necesidad de orinar con mucha mayor frecuencia",
      "Cansancio inusual y visión borrosa",
      "Crecimiento fetal desproporcionadamente rápido detectado por ecografía",
    ],
    causes: [
      "Hormonas placentarias (lactógeno placentario, cortisol, estrógenos) que bloquean la acción de la insulina materna",
    ],
    riskFactors: [
      "Sobrepeso u obesidad pregestacional",
      "Antecedente de diabetes en familiares de primer grado",
      "Haber tenido un bebé con peso mayor a 4 kg (macrosomía) en un embarazo previo",
      "Edad mayor a 30 años",
    ],
    mexicoStats: "Afecta a entre el 8% y el 14% de las mujeres embarazadas en México debido a la alta carga genética nacional.",
    complications: [
      "Macrosomía fetal (bebé muy grande) con riesgo de distocia de hombros y trauma en el parto",
      "Polihidramnios (exceso de líquido amniótico) y parto pretérmino",
      "Hipoglucemia neonatal transitoria tras el nacimiento",
    ],
    treatments: [
      "Tamizaje universal con curva de tolerancia a la glucosa entre las semanas 24 y 28 de gestación",
      "Plan nutricional individualizado y monitoreo glucémico capilar diario",
      "Vigilancia ecográfica del crecimiento fetal y grosor de tejido adiposo del bebé",
    ],
    faqs: [
      {
        question: "¿La diabetes gestacional se queda después de que nazca mi bebé?",
        answer: "En la gran mayoría de las mujeres los niveles de azúcar vuelven a la normalidad horas después del nacimiento con la salida de la placenta, aunque existe riesgo a largo plazo si no se cuidan los hábitos.",
      },
      {
        question: "¿El bebé nace con diabetes?",
        answer: "No. El bebé no nace con diabetes, pero requiere vigilancia pediátrica las primeras horas de vida para prevenir bajas de glucosa en sangre.",
      },
      {
        question: "¿Es obligatoria la cesárea si tengo diabetes gestacional?",
        answer: "No siempre. Si los niveles de glucosa se mantienen bajo control estricto y el peso del bebé es adecuado, es totalmente factible un parto vaginal programado.",
      },
    ],
    relatedServices: [
      "control-prenatal",
    ],
    relatedSymptoms: [],
    image: "/images/enfermedades/diabetes-gestacional.webp",
    seo: {
      title: "Diabetes Gestacional en Tuxtla Gutiérrez | Dr. Jorge Albores",
      description: "Diagnóstico con curva de tolerancia y control de azúcar en el embarazo en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["diabetes gestacional tuxtla", "azucar alta en el embarazo chiapas", "curva de glucosa embarazo", "ginecologo control prenatal"],
    },
  },
  {
    id: "amenaza-de-aborto-y-parto-pretermino",
    slug: "amenaza-de-aborto-y-parto-pretermino",
    name: "Amenaza de Aborto y Amenaza de Parto Pretérmino",
    technicalName: "Contracciones Uterinas Prematuras y Cambios Cervicales Antes de Semana 37",
    category: "obstetricia",
    description: "Presencia de sangrado transvaginal o contracciones uterinas dolorosas y frecuentes capaces de desencadenar la pérdida gestacional o el nacimiento antes de la semana 37.",
    symptoms: [
      "Sangrado vaginal de color rojo fresco o marrón durante el primer trimestre",
      "Dolor tipo cólico menstrual en el bajo vientre o punzadas continuas",
      "Endurecimiento rítmico del abdomen (panza dura) más de 4 veces por hora antes de la semana 37",
      "Presión en la pelvis o sensación de que el bebé empuja hacia abajo",
    ],
    causes: [
      "Incompetencia o acortamiento prematuro del cuello del útero (cérvix corto)",
      "Infecciones urinarias o vaginales asintomáticas no tratadas",
      "Hematomas retrocoriales tempranos o desprendimiento marginal",
    ],
    riskFactors: [
      "Antecedente de parto prematuro en embarazos previos",
      "Embarazo gemelar",
      "Cirugías previas en el cuello de la matriz (conizaciones)",
    ],
    mexicoStats: "El parto prematuro es responsable de más del 70% de las muertes neonatales y complicaciones respiratorias en recién nacidos en el país.",
    complications: [
      "Nacimiento prematuro con síndrome de dificultad respiratoria e inmadurez de órganos",
      "Pérdida gestacional temprana",
    ],
    treatments: [
      "Ultrasonido transvaginal para cervicometría (medición de la longitud cervical)",
      "Colocación de cerclaje cervical o pesario en pacientes con cérvix corto",
      "Protocolo de tocolisis (inhibición de contracciones) y maduración pulmonar fetal en hospital",
      "Reposo relativo y erradicación estricta de infecciones subclínicas",
    ],
    faqs: [
      {
        question: "¿Un sangrado en las primeras semanas de embarazo significa que perdí a mi bebé?",
        answer: "No necesariamente. Hasta un 25% de las mujeres presentan manchado por implantación o pequeños hematomas que, con reposo y manejo oportuno, evolucionan a bebés completamente sanos.",
      },
      {
        question: "¿Qué es la cervicometría por ultrasonido?",
        answer: "Es la medición milimétrica de la longitud del cuello uterino por ecografía transvaginal; si mide menos de 25 mm antes de la semana 24, alerta sobre riesgo de parto prematuro para actuar a tiempo.",
      },
      {
        question: "¿Qué debo hacer si siento la panza dura con frecuencia?",
        answer: "Acuéstate sobre tu lado izquierdo, bebe agua y contabiliza las contracciones. Si tienes más de 4 en una hora, llama inmediatamente a la línea de urgencias 961 249 6398.",
      },
    ],
    relatedServices: [
      "control-prenatal",
    ],
    relatedSymptoms: [
      "contracciones-tempranas-o-dolor-abdominal",
    ],
    image: "/images/enfermedades/parto-pretermino.webp",
    seo: {
      title: "Amenaza de Parto Pretérmino y Aborto en Tuxtla | Dr. Jorge Albores",
      description: "Medición cervical, cerclaje y manejo de contracciones tempranas en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["amenaza de aborto tuxtla", "parto prematuro chiapas", "cervicometria ultrasonido", "panza dura embarazo urgencias"],
    },
  },
  {
    id: "perdida-recurrente-del-embarazo",
    slug: "perdida-recurrente-del-embarazo",
    name: "Pérdida Recurrente del Embarazo (Aborto de Repetición)",
    technicalName: "Pérdida Gestacional Recurrente (2 o más Pérdidas Espontáneas)",
    category: "obstetricia",
    description: "Ocurrencia consecutiva de dos o más pérdidas gestacionales espontáneas antes de la semana 20 de gestación, requiriendo un protocolo de estudio exhaustivo multifactorial.",
    symptoms: [
      "Pérdida de los síntomas habituales del embarazo (cese de náuseas y tensión mamaria)",
      "Sangrado vaginal y cólico pélvico en las primeras semanas de gestación",
      "Ausencia de latido cardíaco embrionario en la ecografía de control",
    ],
    causes: [
      "Alteraciones genéticas y cromosómicas parentales o embrionarias",
      "Anomalías anatómicas uterinas (tabique uterino, miomas submucosos, sinequias)",
      "Síndrome antifosfolípido y trombofilias adquiridas o hereditarias",
      "Factores endocrinos (insuficiencia de fase lútea, hipotiroidismo)",
    ],
    riskFactors: [
      "Edad materna mayor a 35 años",
      "Antecedente de pérdidas previas sin estudio diagnóstico",
    ],
    mexicoStats: "Afecta a cerca del 2% al 5% de las parejas que buscan tener hijos en nuestro entorno.",
    complications: [
      "Severo impacto emocional, duelo gestacional y ansiedad reproductiva",
      "Complicaciones uterinas por legrados uterinos repetitivos",
    ],
    treatments: [
      "Histeroscopia de consultorio para valoración y corrección de tabiques o adherencias uterinas",
      "Panel de trombofilias y perfil inmunológico y genético de la pareja",
      "Protocolo de soporte para futuras gestaciones bajo monitoreo continuo",
    ],
    faqs: [
      {
        question: "¿Después de cuántos abortos debo empezar a estudiarme?",
        answer: "Las guías internacionales actuales recomiendan iniciar el protocolo de estudio tras dos pérdidas espontáneas, sin esperar a una tercera pérdida.",
      },
      {
        question: "¿Se puede volver a tener un bebé sano tras varias pérdidas?",
        answer: "Sí. Una vez identificada la causa anatómica, inmunológica o endocrina y tratada de manera individualizada, más del 70% de las parejas logran un embarazo a término exitoso.",
      },
      {
        question: "¿Qué aporta la histeroscopia en estos casos?",
        answer: "Permite inspeccionar directamente si el útero tiene un tabique divisorio o cicatrices internas que impidan la correcta anidación, pudiendo corregirse en el mismo procedimiento.",
      },
    ],
    relatedServices: [
      "histeroscopia-diagnostica",
      "control-prenatal",
    ],
    relatedSymptoms: [],
    image: "/images/enfermedades/perdida-recurrente.webp",
    seo: {
      title: "Aborto Recurrente y Pérdida Gestacional en Tuxtla | Dr. Jorge Albores",
      description: "Protocolo de estudio integral y corrección histeroscópica en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["aborto recurrente tuxtla", "perdida gestacional chiapas", "histeroscopia abortos repeticion", "especialista fertilidad tuxtla"],
    },
  },
  {
    id: "embarazo-ectopico",
    slug: "embarazo-ectopico",
    name: "Embarazo Ectópico",
    technicalName: "Implantación Gestacional Extrauterina (Tubárica, Ovárica, Abdominal)",
    category: "obstetricia",
    description: "Implantación del óvulo fecundado fuera de la cavidad endometrial del útero, con mayor frecuencia en una de las trompas de Falopio. Es una emergencia médica potencialmente mortal.",
    symptoms: [
      "Dolor pélvico o abdominal agudo e intenso, frecuentemente localizado en un solo lado",
      "Manchado o sangrado vaginal oscuro intermitente con prueba de embarazo positiva",
      "Dolor irradiado al hombro y mareo severo con desmayo (en caso de rotura tubárica)",
    ],
    causes: [
      "Alteración del transporte tubárico por secuelas de enfermedad pélvica inflamatoria",
      "Cirugía previa en trompas de Falopio o adherencias pélvicas por endometriosis",
    ],
    riskFactors: [
      "Antecedente de embarazo ectópico previo",
      "Uso de dispositivo intrauterino (DIU) en el momento de concebir",
      "Tabaquismo y técnicas de reproducción asistida",
    ],
    mexicoStats: "Representa entre el 1% y el 2% de todos los embarazos y es causa relevante de choque hipovolémico en el primer trimestre.",
    complications: [
      "Rotura de la trompa de Falopio con hemorragia interna masiva y choque hipovolémico",
      "Pérdida de la trompa afectada si no se detecta a tiempo",
    ],
    treatments: [
      "Monitoreo seriado de la hormona hCG cuantitativa en correlación con ultrasonido transvaginal",
      "Tratamiento médico protocolizado en casos muy tempranos no complicados",
      "Salpingostomía conservadora o salpingectomía por laparoscopia de urgencia para control del sangrado",
    ],
    faqs: [
      {
        question: "¿Un embarazo ectópico puede llegar a término o recolocarse en el útero?",
        answer: "No. El tejido de las trompas no está preparado para expandirse y nutrir una placenta; no es viable y mantenerlo pone en riesgo inminente la vida de la mujer.",
      },
      {
        question: "¿Podré embarazarme de nuevo si me retiran una trompa?",
        answer: "Sí. La trompa del lado contrario, siempre que esté sana, puede ovular y transportar óvulos permitiendo nuevos embarazos naturales.",
      },
      {
        question: "¿Por qué duele el hombro si el problema es en la trompa?",
        answer: "Cuando la trompa se rompe y sangra hacia el abdomen, la sangre irrita el nervio frénico en el diafragma, provocando un dolor reflejo característico en el hombro.",
      },
    ],
    relatedServices: [
      "control-prenatal",
    ],
    relatedSymptoms: [
      "contracciones-tempranas-o-dolor-abdominal",
    ],
    image: "/images/enfermedades/embarazo-ectopico.webp",
    seo: {
      title: "Embarazo Ectópico en Tuxtla Gutiérrez | Dr. Jorge Albores",
      description: "Diagnóstico inmediato y cirugía laparoscópica de urgencia en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["embarazo ectopico tuxtla", "dolor de trompa embarazo", "laparoscopia embarazo ectopico chiapas", "urgencias ginecologicas tuxtla"],
    },
  },
  {
    id: "placenta-previa",
    slug: "placenta-previa",
    name: "Placenta Previa y Anomalías de Inserción Placentaria",
    technicalName: "Placenta Previa Oclusiva Total, Parcial o Marginal y Acretismo",
    category: "obstetricia",
    description: "Inserción de la placenta en el segmento inferior del útero, cubriendo de forma parcial o total el orificio cervical interno, impidiendo el parto vaginal y originando hemorragias.",
    symptoms: [
      "Sangrado vaginal súbito, indoloro, de color rojo brillante en el segundo o tercer trimestre",
      "Ausencia de contracciones o dolor al momento de sangrar",
      "Sangrado recurrente que tiende a aumentar en volumen con el paso de las semanas",
    ],
    causes: [
      "Implantación baja del blastocisto en zonas con cicatrices uterinas o vascularización alterada",
    ],
    riskFactors: [
      "Cesáreas previas o legrados instrumentales uterinos",
      "Edad materna mayor a 35 años y tabaquismo",
      "Embarazo múltiple",
    ],
    mexicoStats: "Ocurre en aproximadamente 1 de cada 200 embarazos a término, con incremento paralelo al número de cesáreas previas.",
    complications: [
      "Hemorragia obstétrica masiva materna que amenace la vida",
      "Prematurez extrema por necesidad de cesárea de emergencia",
      "Acretismo placentario (invasión anormal al miometrio o vejiga)",
    ],
    treatments: [
      "Mapeo ecográfico transvaginal de alta resolución para determinar la distancia de la placenta al orificio cervical",
      "Reposo absoluto y abstinencia de relaciones sexuales o exploraciones vaginales manuales",
      "Resolución mediante cesárea programada con equipo multidisciplinario en quirófano de alta complejidad",
    ],
    faqs: [
      {
        question: "¿Puede una placenta que está baja en la semana 20 subir más adelante?",
        answer: "Sí. Muchas placentas bajas en la mitad del embarazo se alejan del cérvix a medida que el útero crece (migración placentaria fisiológica), requiriendo control ecográfico en semana 32.",
      },
      {
        question: "¿Puedo tener parto normal con placenta previa oclusiva?",
        answer: "No. Si la placenta tapa la salida del útero, el paso del bebé ocasionaría una hemorragia masiva, por lo que la cesárea es obligatoria.",
      },
      {
        question: "¿Qué debo hacer si sangro sin dolor en el último trimestre?",
        answer: "Acudir inmediatamente a valoración hospitalaria de urgencias sin colocarte nada vaginal y llamar a tu especialista obstetra.",
      },
    ],
    relatedServices: [
      "control-prenatal",
    ],
    relatedSymptoms: [
      "contracciones-tempranas-o-dolor-abdominal",
    ],
    image: "/images/enfermedades/placenta-previa.webp",
    seo: {
      title: "Placenta Previa en Tuxtla Gutiérrez | Dr. Jorge Albores",
      description: "Diagnóstico ultrasonográfico y cesárea de alta seguridad para placenta previa en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["placenta previa tuxtla", "sangrado sin dolor embarazo chiapas", "cesarea placenta previa", "obstetra alto riesgo tuxtla"],
    },
  },
  {
    id: "restriccion-crecimiento-intrauterino",
    slug: "restriccion-crecimiento-intrauterino",
    name: "Restricción del Crecimiento Intrauterino (RCIU)",
    technicalName: "Feto Pequeño para la Edad Gestacional y Restricción del Crecimiento Fetal",
    category: "obstetricia",
    description: "Incapacidad del feto para alcanzar su potencial genético de crecimiento debido a una disminución en el aporte de oxígeno y nutrientes a través de la placenta.",
    symptoms: [
      "Menor aumento en la altura del fondo uterino durante el control médico",
      "Poco incremento de peso materno",
      "Disminución de los movimientos fetales en fases severas",
    ],
    causes: [
      "Insuficiencia placentaria e hipertensión arterial o preeclampsia",
      "Trombofilias maternas o infecciones perinatales",
      "Anomalías cromosómicas o vasculares fetales",
    ],
    riskFactors: [
      "Tabaquismo o exposición a tóxicos durante el embarazo",
      "Desnutrición o bajo peso materno",
      "Enfermedad renal o vascular crónica",
    ],
    mexicoStats: "Presente en el 5% al 8% de los embarazos, requiriendo vigilancia estrecha para evitar sufrimiento fetal.",
    complications: [
      "Hipoxia fetal intrauterina y acidosis metabólica",
      "Prematurez y bajo peso extremo al nacer",
    ],
    treatments: [
      "Monitoreo hemodinámico Doppler fetal seriado (arteria umbilical, cerebral media y ductus venoso)",
      "Monitoreo de líquido amniótico y perfil biofísico fetal",
      "Interrupción oportuna del embarazo en hospital con terapia intensiva neonatal antes de que ocurra deterioro irreversible",
    ],
    faqs: [
      {
        question: "¿Un bebé chiquito siempre tiene restricción de crecimiento?",
        answer: "No. Existen bebés constitucionalmente pequeños pero completamente sanos ('pequeños para edad gestacional'). El ultrasonido Doppler es el que distingue si la placenta funciona bien o si hay restricción patológica.",
      },
      {
        question: "¿Comer más alimentos hace que el bebé crezca si hay RCIU?",
        answer: "Desafortunadamente el problema suele radicar en la capacidad de la placenta para transferir nutrientes, por lo que el manejo se basa en la monitorización rigurosa de la circulación fetal.",
      },
      {
        question: "¿Cuándo se debe inducir el nacimiento?",
        answer: "El momento exacto se determina evaluando los flujos del Doppler fetal para garantizar el balance perfecto entre madurez pulmonar y seguridad vital.",
      },
    ],
    relatedServices: [
      "control-prenatal",
    ],
    relatedSymptoms: [
      "contracciones-tempranas-o-dolor-abdominal",
    ],
    image: "/images/enfermedades/rciu.webp",
    seo: {
      title: "Restricción de Crecimiento Fetal (RCIU) en Tuxtla | Dr. Jorge Albores",
      description: "Monitoreo ecográfico Doppler de vitalidad fetal y crecimiento en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["rciu tuxtla gutierrez", "bebe no crece embarazo chiapas", "ultrasonido doppler fetal", "crecimiento intrauterino especialista"],
    },
  },
  {
    id: "embarazo-multiple",
    slug: "embarazo-multiple",
    name: "Embarazo Múltiple (Gemelar / Mellizos)",
    technicalName: "Gestación Múltiple (Monocorial, Bicorial, Monoamniótica, Biamniótica)",
    category: "obstetricia",
    description: "Desarrollo simultáneo de dos o más fetos en el útero materno. Requiere una clasificación ecográfica rigurosa de corionicidad en el primer trimestre para prevenir complicaciones circulatorias.",
    symptoms: [
      "Crecimiento uterino mucho más acelerado que el promedio para las semanas de embarazo",
      "Náuseas y vómitos iniciales más severos por elevación mayor de hormona hCG",
      "Mayor cansancio, falta de aire y pesadez pélvica temprana",
    ],
    causes: [
      "Fertilización de dos óvulos distintos (gemelos fraternos/mellizos) o división de un solo óvulo (gemelos idénticos)",
      "Uso de técnicas de estimulación ovárica o reproducción asistida",
    ],
    riskFactors: [
      "Edad materna mayor a 30 años",
      "Historia familiar materna de gemelos",
    ],
    mexicoStats: "Constituye aproximadamente del 2% al 3% de los nacimientos totales en México.",
    complications: [
      "Parto pretérmino (casi el 60% de los gemelos nacen antes de la semana 37)",
      "Preeclampsia y diabetes gestacional con el doble de frecuencia",
      "Síndrome de transfusión feto-fetal en gemelos monocoriales",
    ],
    treatments: [
      "Determinación temprana de la corionicidad por ultrasonido entre semanas 11 y 14",
      "Cervicometría seriada para prevención de parto prematuro",
      "Monitoreo ecográfico quincenal del crecimiento armónico de ambos bebés",
      "Atención programada del nacimiento con dos equipos pediátricos en quirófano",
    ],
    faqs: [
      {
        question: "¿Por qué es tan importante saber si comparten placenta?",
        answer: "Porque los gemelos que comparten una sola placenta (monocoriales) tienen conexiones vasculares que requieren seguimiento ecográfico quincenal para descartar paso desbalanceado de sangre de un bebé al otro.",
      },
      {
        question: "¿Un embarazo gemelar siempre termina en cesárea?",
        answer: "No necesariamente. Si el primer bebé viene de cabeza (presentación cefálica) y son gemelos bicoriales, en condiciones seleccionadas puede intentarse un parto vaginal seguro; de lo contrario, la cesárea programada es la vía de elección.",
      },
      {
        question: "¿En qué semana suelen nacer los gemelos?",
        answer: "El término promedio para un embarazo gemelar sano se sitúa entre las 36 y 37 semanas de gestación.",
      },
    ],
    relatedServices: [
      "control-prenatal",
    ],
    relatedSymptoms: [
      "nauseas-y-vomitos-excesivos-en-embarazo",
    ],
    image: "/images/enfermedades/embarazo-gemelar.webp",
    seo: {
      title: "Embarazo Gemelar y Múltiple en Tuxtla | Dr. Jorge Albores",
      description: "Control prenatal especializado y ecografía de alta definición en embarazos gemelares en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["embarazo gemelar tuxtla", "control mellizos chiapas", "ultrasonido gemelos tuxtla gutierrez", "obstetra embarazo multiple"],
    },
  },
];
