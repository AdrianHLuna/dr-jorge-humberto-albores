import { MedicalCondition } from "@/types/schema";

export const diseases: MedicalCondition[] = [
  {
    "id": "cancer-de-mama",
    "slug": "cancer-de-mama",
    "name": "Cáncer de Mama",
    "technicalName": "Carcinoma Mamario (Ductal / Lobulillar Infiltrante o In Situ)",
    "category": "mastologia",
    "description": "Proliferación maligna no controlada de las células del epitelio de los conductos o lobulillos mamarios. Es el tumor maligno más frecuente en la mujer y su detección temprana mediante mastografía y biopsia core salva vidas.",
    "symptoms": [
      "Nódulo o masa palpable indolora y pétrea en la mama o región axilar",
      "Hundimiento o retracción reciente del pezón",
      "Cambios en la textura de la piel con aspecto de piel de naranja",
      "Salida espontánea de secreción sanguinolenta o serosa por un solo orificio del pezón",
      "Enrojecimiento, descamación persistente de la areola o asimetría súbita"
    ],
    "causes": [
      "Mutaciones genéticas adquiridas o hereditarias en genes supresores (como BRCA1 y BRCA2)",
      "Exposición estrogénica prolongada a lo largo de la vida fértil",
      "Proliferación celular atípica previa no tratada"
    ],
    "riskFactors": [
      "Edad mayor a 40 años",
      "Antecedentes familiares directos de cáncer mamario u ovárico",
      "Menarquia temprana (antes de los 12 años) o menopausia tardía (después de los 55 años)",
      "Densidad mamaria elevada en mastografía previa",
      "Tabaquismo, obesidad e inactividad física"
    ],
    "mexicoStats": "Es la primera causa de muerte por cáncer en mujeres en México, con más de 27,000 nuevos casos anuales diagnosticados.",
    "complications": [
      "Diseminación linfática axilar y metástasis a distancia (huesos, pulmones, hígado)",
      "Compromiso cutáneo y ulceración mamaria",
      "Impacto severo en la calidad de vida sin diagnóstico oportuno"
    ],
    "treatments": [
      "Biopsia de corte guiada por ultrasonido para tipificación molecular e inmunohistoquímica",
      "Cirugía conservadora de la mama con márgenes oncológicos libres y técnicas oncoplásticas",
      "Biopsia de ganglio centinela con mapeo linfático para evitar linfedema",
      "Mastectomía con reconstrucción inmediata cuando esté indicada",
      "Protocolo de terapia sistémica adyuvante/neoadyuvante y radioterapia según comitología oncológica"
    ],
    "faqs": [
      {
        "question": "¿A partir de qué edad debo hacerme la mastografía?",
        "answer": "A partir de los 40 años de manera anual en mujeres asintomáticas sin factores de riesgo genéticos, o 10 años antes de la edad de diagnóstico del familiar directo más joven."
      },
      {
        "question": "¿Qué es la cirugía oncoplástica mamaria?",
        "answer": "Es la combinación de principios oncológicos de resección completa del tumor con técnicas de cirugía plástica para remodelar el tejido de la mama y preservar su simetría y contorno natural."
      },
      {
        "question": "¿Si me detectan un bulto siempre requeriré quitar toda la mama?",
        "answer": "No. En la actualidad, gracias a las técnicas de detección temprana y la formación en FUCAM del Dr. Albores, la mayoría de los casos son candidatos a cirugía conservadora preservando la mama."
      }
    ],
    "relatedServices": [
      "consulta-mastologia",
      "biopsia-core-mama",
      "ultrasonido-mamario-ginecologico",
      "checkup-integral",
      "cirugia-ginecologica-mastologica"
    ],
    "relatedSymptoms": [
      "bolita-o-nodulo-en-la-mama",
      "secrecion-anormal-por-el-pezon",
      "retraccion-o-hundimiento-del-pezon"
    ],
    "image": "/enfermedades/cancer-de-mama.jpg",
    "seo": {
      "title": "Cáncer de Mama en Tuxtla Gutiérrez | Dr. Jorge Albores",
      "description": "Diagnóstico oportuno y cirugía oncológica de mama en Tuxtla Gutiérrez por cirujano oncólogo de mama egresado de FUCAM.",
      "keywords": [
        "cancer de mama tuxtla",
        "mastologo cancer chiapas",
        "biopsia mama tuxtla gutierrez",
        "cirugia oncologica mama"
      ]
    }
  },
  {
    "id": "fibroadenoma-mamario",
    "slug": "fibroadenoma-mamario",
    "name": "Fibroadenoma Mamario",
    "technicalName": "Fibroadenoma Simple y Complejo de la Mama",
    "category": "mastologia",
    "description": "Tumor benigno común compuesto por tejido glandular y estromal fibroso. Es la lesión sólida mamaria más habitual en mujeres entre los 15 y 35 años de edad.",
    "symptoms": [
      "Nódulo firme, liso, bien delimitado y móvil bajo los dedos al palparlo",
      "Generalmente indoloro, aunque puede generar leve molestia antes de la menstruación",
      "Crecimiento lento a lo largo de los meses"
    ],
    "causes": [
      "Respuesta exagerada del tejido mamario al estímulo fisiológico de los estrógenos"
    ],
    "riskFactors": [
      "Edad reproductiva joven (15 a 30 años)",
      "Embarazo o terapia hormonal que puede acelerar temporalmente su tamaño"
    ],
    "mexicoStats": "Representa hasta el 50% de todas las biopsias y escrutinios mamarios en mujeres jóvenes en México.",
    "complications": [
      "Crecimiento desmedido en variantes gigantes que deforma el contorno del seno",
      "Ansiedad y confusión diagnóstica con tumores filodes si no se realiza ecografía"
    ],
    "treatments": [
      "Vigilancia ecográfica periódica con correlación BI-RADS en lesiones pequeñas y estables",
      "Biopsia core con aguja de corte bajo visión ecográfica para confirmación patológica definitiva",
      "Escisión quirúrgica conservadora mediante incisión periareolar estética si supera los 2-3 cm o causa molestia"
    ],
    "faqs": [
      {
        "question": "¿El fibroadenoma se puede convertir en cáncer?",
        "answer": "El fibroadenoma simple es completamente benigno y no se transforma en cáncer de mama, aunque siempre debe documentarse por ultrasonido o biopsia."
      },
      {
        "question": "¿Es indispensable operarlo?",
        "answer": "No todos se operan. Si mide menos de 2 cm, no causa dolor y sus características ecográficas son benignas, se puede mantener bajo vigilancia periódica."
      },
      {
        "question": "¿Deja cicatriz si se decide extirpar?",
        "answer": "El Dr. Jorge Albores utiliza técnicas de incisión oncoplástica alrededor de la areola o en pliegues naturales para que la cicatriz sea prácticamente imperceptible."
      }
    ],
    "relatedServices": [
      "consulta-mastologia",
      "ultrasonido-mamario-ginecologico",
      "biopsia-core-mama",
      "checkup-integral",
      "cirugia-ginecologica-mastologica"
    ],
    "relatedSymptoms": [
      "bolita-o-nodulo-en-la-mama",
      "dolor-mamario-mastalgia"
    ],
    "image": "/enfermedades/fibroadenoma.jpg",
    "seo": {
      "title": "Fibroadenoma Mamario en Tuxtla Gutiérrez | Dr. Jorge Albores",
      "description": "Diagnóstico y tratamiento conservador o quirúrgico de fibroadenomas de mama en Tuxtla Gutiérrez, Chiapas.",
      "keywords": [
        "fibroadenoma tuxtla",
        "bolita benigna seno",
        "tumor benigno mama chiapas",
        "mastologo fibroadenoma"
      ]
    }
  },
  {
    "id": "quistes-mamarios",
    "slug": "quistes-mamarios",
    "name": "Quistes Mamarios Simples y Complicados",
    "category": "mastologia",
    "description": "Sacos llenos de líquido originados por la dilatación de las unidades lobulillares terminales de la glándula mamaria. Son sumamente frecuentes y benignos.",
    "symptoms": [
      "Bulto blando o elástico que puede fluctuar de tamaño con el ciclo menstrual",
      "Dolor o sensibilidad mamaria localizada que aumenta antes del periodo",
      "Sensación de tensión mamaria súbita"
    ],
    "causes": [
      "Acumulación de líquido glandular por variaciones hormonales de estrógenos y progesterona",
      "Obstrucción benigna de los conductillos terminales"
    ],
    "riskFactors": [
      "Mujeres entre 35 y 50 años",
      "Etapa de perimenopausia con fluctuaciones hormonales marcadas"
    ],
    "mexicoStats": "Presentes en más del 30% de las mujeres entre 35 y 50 años en estudios de ultrasonido rutinario.",
    "complications": [
      "Inflamación o sobreinfección en quistes complicados",
      "Tensión dolorosa intensa que dificulta el uso de ropa ajustada"
    ],
    "treatments": [
      "Diferenciación ecográfica precisa (quiste simple vs. complicado vs. complejo)",
      "Punción y aspiración con aguja fina bajo guía ecográfica para descompresión inmediata del dolor",
      "Vigilancia clínica periódica sin necesidad de cirugía en quistes simples asintomáticos"
    ],
    "faqs": [
      {
        "question": "¿Un quiste mamario puede reventarse?",
        "answer": "Raramente pueden romperse generando una molestia inflamatoria transitoria que se reabsorbe por el propio tejido circundante."
      },
      {
        "question": "¿Los quistes se operan en quirófano?",
        "answer": "Casi nunca requieren quirófano. Si generan dolor por tensión, se evacúan en el consultorio mediante una punción milimétrica guiada por ultrasonido en pocos segundos."
      },
      {
        "question": "¿Tomar café influye en los quistes?",
        "answer": "El exceso de cafeína y metilxantinas puede acentuar la hipersensibilidad y el dolor mamario en algunas pacientes, por lo que moderar su consumo ayuda a reducir síntomas."
      }
    ],
    "relatedServices": [
      "consulta-mastologia",
      "ultrasonido-mamario-ginecologico",
      "biopsia-core-mama"
    ],
    "relatedSymptoms": [
      "bolita-o-nodulo-en-la-mama",
      "dolor-mamario-mastalgia"
    ],
    "image": "/enfermedades/quistes-mamarios.jpg",
    "seo": {
      "title": "Quistes en los Senos en Tuxtla Gutiérrez | Dr. Jorge Albores",
      "description": "Diagnóstico por ultrasonido y aspiración de quistes mamarios en consultorio en Tuxtla Gutiérrez, Chiapas.",
      "keywords": [
        "quistes mamarios tuxtla",
        "quistes en senos tratamiento",
        "aspiracion de quiste mama chiapas",
        "dolor por quistes"
      ]
    }
  },
  {
    "id": "cancer-cervicouterino",
    "slug": "cancer-cervicouterino",
    "name": "Cáncer Cervicouterino",
    "technicalName": "Carcinoma Invasor del Cuello Uterino (Epidermoide / Adenocarcinoma)",
    "category": "ginecologia",
    "description": "Tumor maligno originado en las células de la zona de transformación del cérvix, prevenible en casi el 100% de los casos mediante detección precoz de VPH y displasias.",
    "symptoms": [
      "En etapas tempranas suele ser totalmente asintomático",
      "Sangrado vaginal anormal intermenstrual o después de la relación sexual (sinusorragia)",
      "Flujo vaginal acuoso, sanguinolento o con olor desagradable",
      "Dolor pélvico en fases más avanzadas"
    ],
    "causes": [
      "Infección persistente por serotipos oncogénicos del Virus del Papiloma Humano (VPH 16 y 18 principalmente)"
    ],
    "riskFactors": [
      "Falta de estudios periódicos de Papanicolaou y colposcopia",
      "Inicio temprano de vida sexual y multiplicidad de parejas",
      "Tabaquismo crónico e inmunosupresión"
    ],
    "mexicoStats": "Segunda causa de muerte por neoplasias en mujeres mexicanas, con alta incidencia en el sureste del país.",
    "complications": [
      "Invasión a vejiga, recto y ganglios linfáticos pélvicos",
      "Anemia severa por hemorragias continuas"
    ],
    "treatments": [
      "Conización cervical con asa diatérmica (LEEP) o cono frío para lesiones tempranas e in situ",
      "Histerectomía radical laparoscópica con linfadenectomía pélvica",
      "Protocolos oncológicos avanzados de quimiorradioterapia para estadios invasores"
    ],
    "faqs": [
      {
        "question": "¿El cáncer de cuello de la matriz avisa con dolor?",
        "answer": "Lamentablemente en sus etapas iniciales y premalignas no causa dolor ni molestias; por ello es vital la revisión anual con colposcopia y Papanicolaou."
      },
      {
        "question": "¿Qué es una conización cervical?",
        "answer": "Es un procedimiento ambulatorio que retira una pequeña porción en forma de cono del cuello uterino con las células alteradas, curando la lesión y preservando el útero."
      },
      {
        "question": "¿Se puede prevenir?",
        "answer": "Sí, mediante la vacunación contra el VPH y el control ginecológico oportuno que detecte las displasias antes de que evolucionen a cáncer."
      }
    ],
    "relatedServices": [
      "colposcopia-papanicolaou",
      "consulta-ginecologica",
      "checkup-ginecologico-completo",
      "checkup-integral",
      "cirugia-ginecologica-mastologica"
    ],
    "relatedSymptoms": [
      "sangrado-vaginal-anormal",
      "flujo-vaginal-inusual",
      "dolor-en-las-relaciones-sexuales"
    ],
    "image": "/enfermedades/cancer-cervicouterino.jpg",
    "seo": {
      "title": "Prevención de Cáncer Cervicouterino en Tuxtla | Dr. Jorge Albores",
      "description": "Detección temprana con colposcopia y conización cervical en Tuxtla Gutiérrez, Chiapas.",
      "keywords": [
        "cancer cervicouterino tuxtla",
        "conizacion cervical chiapas",
        "colposcopia cancer cérvix",
        "ginecologo papanicolaou tuxtla"
      ]
    }
  },
  {
    "id": "infeccion-vph",
    "slug": "infeccion-vph",
    "name": "Virus del Papiloma Humano (VPH)",
    "technicalName": "Infección por Virus del Papiloma Humano y Neoplasia Intraepitelial Cervical (NIC)",
    "category": "ginecologia",
    "description": "Infección viral de transmisión sexual más extendida. Determinados serotipos de alto riesgo provocan lesiones celulares precursoras en el cuello uterino que requieren seguimiento colposcópico.",
    "symptoms": [
      "Frecuentemente cursa sin síntomas visibles en el cuello uterino",
      "Presencia de condilomas o verrugas genitales en vulva, periné o vagina en cepas de bajo riesgo",
      "Flujo vaginal persistente o pequeñas molestias tras el coito"
    ],
    "causes": [
      "Transmisión por contacto directo piel con piel o mucosa durante las relaciones íntimas"
    ],
    "riskFactors": [
      "Relaciones sexuales sin protección de barrera",
      "Deficiencias en el sistema inmunológico",
      "No haber recibido la vacuna preventiva"
    ],
    "mexicoStats": "Más del 75% de las personas sexualmente activas entrarán en contacto con el virus en algún momento de su vida.",
    "complications": [
      "Desarrollo de displasias de bajo y alto grado (NIC 1, NIC 2, NIC 3)",
      "Evolución a cáncer cervicouterino si no se trata en años"
    ],
    "treatments": [
      "Colposcopia de alta magnificación y tipificación viral por PCR",
      "Electrocirugía con asa diatérmica (esferólisis o cono LEEP) para remoción de epitelio atípico",
      "Eliminación de verrugas genitales con termocoagulación o criocirugía en consultorio",
      "Esquema de vacunación profiláctica para refuerzo inmunológico"
    ],
    "faqs": [
      {
        "question": "¿Tener VPH significa que tendré cáncer?",
        "answer": "No. En la gran mayoría de las mujeres el sistema inmune aclara el virus o la lesión se detecta y elimina a tiempo con procedimientos sencillos en consultorio."
      },
      {
        "question": "¿Mi pareja también debe revisarse?",
        "answer": "Sí, es recomendable la valoración urológica para descartar lesiones subclínicas y proteger la salud compartida."
      },
      {
        "question": "¿Vale la pena vacunarme si ya tuve el virus?",
        "answer": "Sí, la vacuna protege contra múltiples serotipos oncogénicos a los que aún no has estado expuesta y estimula las defensas locales."
      }
    ],
    "relatedServices": [
      "colposcopia-papanicolaou",
      "checkup-basico",
      "checkup-ginecologico-completo",
      "checkup-integral",
      "consulta-ginecologica"
    ],
    "relatedSymptoms": [
      "flujo-vaginal-inusual",
      "sangrado-vaginal-anormal"
    ],
    "image": "/enfermedades/vph.jpg",
    "seo": {
      "title": "Tratamiento de VPH en Tuxtla Gutiérrez | Dr. Jorge Albores",
      "description": "Diagnóstico con colposcopia y eliminación de lesiones por VPH en Tuxtla Gutiérrez, Chiapas.",
      "keywords": [
        "vph tuxtla gutierrez",
        "tratamiento virus papiloma chiapas",
        "verrugas genitales ginecologo",
        "colposcopia vph"
      ]
    }
  },
  {
    "id": "miomatosis-uterina",
    "slug": "miomatosis-uterina",
    "name": "Miomatosis Uterina (Miomas o Fibromas)",
    "technicalName": "Leiomiomatosis Uterina (Submucosos, Intramurales, Subserosos)",
    "category": "ginecologia",
    "description": "Tumores benignos del tejido muscular liso del útero (miometrio). Pueden provocar sangrados menstruales abundantes, anemia, dolor pélvico o infertilidad.",
    "symptoms": [
      "Menstruaciones muy abundantes y con coágulos grandes",
      "Sensación de pesadez o aumento del perímetro abdominal inferior",
      "Frecuencia urinaria aumentada por compresión de la vejiga",
      "Dificultad para lograr o mantener el embarazo"
    ],
    "causes": [
      "Sensibilidad y proliferación clonal de células musculares bajo influencia de estrógenos y progesterona"
    ],
    "riskFactors": [
      "Mujeres entre 30 y 45 años",
      "Antecedente familiar directo (madre o hermanas con miomas)",
      "Nuliparidad (no haber tenido hijos)"
    ],
    "mexicoStats": "Presentes en hasta el 40-50% de las mujeres mayores de 35 años en México.",
    "complications": [
      "Anemia ferropénica crónica severa",
      "Compresión de uréteres o intestinos en miomas gigantes"
    ],
    "treatments": [
      "Histeroscopia quirúrgica de consultorio para resección de miomas submucosos sin heridas",
      "Miomectomía laparoscópica mínimamente invasiva conservando el útero para pacientes con deseos reproductivos",
      "Histerectomía laparoscópica en pacientes con paridad satisfecha o miomatosis múltiple sintomática"
    ],
    "faqs": [
      {
        "question": "¿Se puede retirar un mioma sin quitar la matriz?",
        "answer": "Sí. Mediante miomectomía laparoscópica o histeroscópica se extraen únicamente los miomas conservando el útero intacto para futuros embarazos."
      },
      {
        "question": "¿Los miomas se vuelven malignos?",
        "answer": "Es sumamente raro (menos del 0.5% se asocian a leiomiosarcomas). Los miomas son tumores benignos que se operan por los síntomas que generan."
      },
      {
        "question": "¿Cuánto tiempo toma recuperarse de una cirugía laparoscópica de miomas?",
        "answer": "Gracias a la técnica mínimamente invasiva, la mayoría de las pacientes reanudan sus actividades cotidianas en 7 a 14 días."
      }
    ],
    "relatedServices": [
      "consulta-ginecologica",
      "histeroscopia-diagnostica",
      "ultrasonido-mamario-ginecologico",
      "cirugia-ginecologica-mastologica"
    ],
    "relatedSymptoms": [
      "menstruaciones-abundantes-o-prolongadas",
      "dolor-pelvico-cronico-o-agudo",
      "colicos-menstruales-incapacitantes",
      "sangrado-vaginal-anormal"
    ],
    "image": "/enfermedades/miomatosis-uterina.jpg",
    "seo": {
      "title": "Miomas Uterinos en Tuxtla Gutiérrez | Dr. Jorge Albores",
      "description": "Cirugía laparoscópica e histeroscópica de miomas uterinos en Tuxtla Gutiérrez por cirujano endoscopista.",
      "keywords": [
        "miomas tuxtla gutierrez",
        "miomectomia laparoscopica chiapas",
        "histeroscopia miomas",
        "sangrado por miomas tratamiento"
      ]
    }
  },
  {
    "id": "endometriosis",
    "slug": "endometriosis",
    "name": "Endometriosis y Adenomiosis",
    "technicalName": "Endometriosis Pélvica Profunda y Adenomiosis Uterina",
    "category": "ginecologia",
    "description": "Presencia ectópica de tejido similar al endometrio fuera de la cavidad uterina (ovarios, trompas, peritoneo, ligamentos pélvicos), provocando inflamación crónica, adherencias y dolor severo.",
    "symptoms": [
      "Cólicos menstruales incapacitantes (dismenorrea severa) que no ceden con analgésicos comunes",
      "Dolor pélvico crónico persistente",
      "Dolor intenso durante o después de las relaciones sexuales (dispareunia)",
      "Dolor al defecar u orinar durante la menstruación",
      "Dificultad para lograr el embarazo (infertilidad)"
    ],
    "causes": [
      "Menstruación retrógrada con implantación ectópica",
      "Factores inmunológicos y predisposición genética"
    ],
    "riskFactors": [
      "Ciclos menstruales cortos con sangrados prolongados",
      "Inicio temprano de la menstruación",
      "Familiares de primer grado con endometriosis"
    ],
    "mexicoStats": "Afecta a más de 2 millones de mujeres en México, con un retraso diagnóstico promedio de 7 a 9 años por normalizar el dolor menstrual.",
    "complications": [
      "Formación de quistes ováricos endometriósicos (endometriomas o quistes de chocolate)",
      "Adherencias pélvicas severas que congelan la pelvis y comprometen la fertilidad"
    ],
    "treatments": [
      "Laparoscopia ginecológica de alta especialidad para resección y vaporización de implantes",
      "Liberación de adherencias pélvicas y cistectomía ovárica con preservación del tejido ovárico sano",
      "Plan médico personalizado de modulación hormonal para supresión de la actividad inflamatoria"
    ],
    "faqs": [
      {
        "question": "¿Por qué tardan tanto en diagnosticar la endometriosis?",
        "answer": "Porque históricamente se ha normalizado que la menstruación duela. Cuando el dolor impide realizar actividades diarias, debe sospecharse y diagnosticarse con un especialista en laparoscopia."
      },
      {
        "question": "¿La endometriosis produce esterilidad definitiva?",
        "answer": "No definitiva. El tratamiento oportuno por laparoscopia libera las trompas y restaura la anatomía pélvica, mejorando notablemente las tasas de fertilidad natural o asistida."
      },
      {
        "question": "¿Qué papel juega la cirugía laparoscópica?",
        "answer": "Es el estándar para confirmar el diagnóstico y eliminar los focos dolorosos con magnificación óptica y mínimo trauma tisular."
      }
    ],
    "relatedServices": [
      "consulta-ginecologica",
      "histeroscopia-diagnostica",
      "cirugia-ginecologica-mastologica",
      "ultrasonido-mamario-ginecologico"
    ],
    "relatedSymptoms": [
      "colicos-menstruales-incapacitantes",
      "dolor-pelvico-cronico-o-agudo",
      "dolor-en-las-relaciones-sexuales"
    ],
    "image": "/enfermedades/endometriosis.jpg",
    "seo": {
      "title": "Endometriosis en Tuxtla Gutiérrez | Dr. Jorge Albores",
      "description": "Tratamiento de endometriosis y dolor pélvico severo por laparoscopia avanzada en Tuxtla Gutiérrez, Chiapas.",
      "keywords": [
        "endometriosis tuxtla gutierrez",
        "dolor menstrual severo chiapas",
        "laparoscopia endometriosis",
        "especialista en endometriosis"
      ]
    }
  },
  {
    "id": "quistes-de-ovario",
    "slug": "quistes-de-ovario",
    "name": "Quistes Ováricos y Tumores Benignos de Ovario",
    "technicalName": "Quistes Fisiológicos, Endometriomas, Teratomas y Cistoadenomas",
    "category": "ginecologia",
    "description": "Formaciones saculares rellenas de líquido o tejido sólido dentro o sobre el ovario. La mayoría son benignos pero requieren monitoreo para descartar torsión o malignidad.",
    "symptoms": [
      "Dolor pélvico unilateral sordo o punzante",
      "Sensación de plenitud o distensión abdominal baja",
      "Dolor súbito e intenso si el quiste se rompe o sufre torsión",
      "Alteraciones en el ciclo menstrual"
    ],
    "causes": [
      "Falta de rotura folicular durante la ovulación (quiste funcional)",
      "Tejido endometrial ectópico (endometrioma)",
      "Células germinales embrionarias (teratoma o quiste dermoide)"
    ],
    "riskFactors": [
      "Edad reproductiva",
      "Tratamientos de inducción ovulatoria",
      "Antecedente previo de quistes ováricos"
    ],
    "mexicoStats": "Motivo del 15% de las urgencias quirúrgicas ginecológicas por torsión ovárica aguda.",
    "complications": [
      "Torsión del pedículo ovárico con compromiso vascular y riesgo de necrosis ovárica",
      "Ruptura de quiste con hemorragia interna hacia la cavidad peritoneal"
    ],
    "treatments": [
      "Vigilancia ecográfica seriada con Doppler color en quistes funcionales menores a 5 cm",
      "Cistectomía ovárica laparoscópica preservando la corteza ovárica y reserva folicular",
      "Abordaje de urgencia por mínima invasión en casos de torsión o sangrado activo"
    ],
    "faqs": [
      {
        "question": "¿Todos los quistes de ovario necesitan operación?",
        "answer": "No. Los quistes foliculares o de cuerpo lúteo suelen reabsorberse espontáneamente en 2 o 3 ciclos menstruales. Solo se operan los quistes dermoides, endometriomas o aquellos mayores a 5-6 cm persistentes."
      },
      {
        "question": "¿Si me operan un quiste me quitan el ovario?",
        "answer": "La prioridad del Dr. Albores es siempre la preservación ovárica (cistectomía conservadora), extirpando únicamente la cápsula del quiste y cuidando la fertilidad futura."
      },
      {
        "question": "¿Qué síntomas indican que un quiste se torció?",
        "answer": "Un dolor súbito, intensísimo en un lado del bajo vientre, acompañado de náuseas, vómitos y sudoración fría. Es una urgencia médica que debe atenderse de inmediato."
      }
    ],
    "relatedServices": [
      "consulta-ginecologica",
      "ultrasonido-mamario-ginecologico",
      "cirugia-ginecologica-mastologica"
    ],
    "relatedSymptoms": [
      "dolor-pelvico-cronico-o-agudo",
      "colicos-menstruales-incapacitantes"
    ],
    "image": "/enfermedades/quistes-de-ovario.jpg",
    "seo": {
      "title": "Quistes en los Ovarios en Tuxtla | Dr. Jorge Albores",
      "description": "Cirugía laparoscópica conservadora y tratamiento de quistes ováricos en Tuxtla Gutiérrez, Chiapas.",
      "keywords": [
        "quistes de ovario tuxtla",
        "laparoscopia quiste ovarico chiapas",
        "cistectomia ovarica",
        "dolor de ovarios tratamiento"
      ]
    }
  },
  {
    "id": "sindrome-ovario-poliquistico",
    "slug": "sindrome-ovario-poliquistico",
    "name": "Síndrome de Ovario Poliquístico (SOP)",
    "technicalName": "Síndrome de Hiperandrogenismo y Disfunción Ovulatoria",
    "category": "ginecologia",
    "description": "Trastorno endocrino y metabólico caracterizado por desequilibrio hormonal, ovulación irregular o nula, niveles elevados de andrógenos y múltiples microfolículos en los ovarios.",
    "symptoms": [
      "Ciclos menstruales muy irregulares, retrasos prolongados o ausencia de regla",
      "Exceso de vello en rostro, barbilla, pecho o abdomen (hirsutismo)",
      "Acné persistente en la edad adulta y piel grasa",
      "Aumento de peso con dificultad para perderlo y oscurecimiento en el cuello (acantosis nigricans)"
    ],
    "causes": [
      "Resistencia a la insulina con hiperinsulinemia compensatoria",
      "Disfunción en el eje hipotálamo-hipófisis-ovario con elevación de LH y andrógenos"
    ],
    "riskFactors": [
      "Antecedentes familiares de SOP o diabetes mellitus tipo 2",
      "Sobrepeso y sedentarismo"
    ],
    "mexicoStats": "Afecta a entre el 6% y el 12% de las mujeres en edad reproductiva en México.",
    "complications": [
      "Infertilidad por anovulación crónica",
      "Riesgo aumentado de diabetes tipo 2, hipertensión y esteatosis hepática",
      "Hiperplasia endometrial por estímulo estrogénico continuo sin oposición de progesterona"
    ],
    "treatments": [
      "Evaluación ultrasonográfica de morfología ovárica y panel hormonal completo",
      "Plan integral de intervención metabólica, nutrición de bajo índice glucémico y ejercicio",
      "Protocolo para inducción de la ovulación si existe deseo de fertilidad inmediata",
      "Monitoreo ecográfico endometrial periódico"
    ],
    "faqs": [
      {
        "question": "¿Tener ovarios con aspecto poliquístico en ultrasonido es lo mismo que tener el Síndrome (SOP)?",
        "answer": "No. Muchas mujeres jóvenes tienen ovarios con aspecto multirreticular sin tener el síndrome. Para diagnosticar SOP se requieren al menos dos de tres criterios: reglas irregulares, exceso de andrógenos y ecografía compatible."
      },
      {
        "question": "¿El SOP se cura?",
        "answer": "Es una condición metabólica que no se cura pero se controla eficazmente, logrando regularizar la menstruación, revertir el acné y permitir embarazos saludables."
      },
      {
        "question": "¿Podré tener hijos si tengo SOP?",
        "answer": "Sí, absolutamente. Con el manejo médico adecuado para estimular la ovulación, la gran mayoría de las pacientes logran embarazos exitosos."
      }
    ],
    "relatedServices": [
      "consulta-ginecologica",
      "ultrasonido-mamario-ginecologico",
      "checkup-basico"
    ],
    "relatedSymptoms": [
      "menstruaciones-abundantes-o-prolongadas",
      "dolor-pelvico-cronico-o-agudo"
    ],
    "image": "/enfermedades/sop.jpg",
    "seo": {
      "title": "Síndrome de Ovario Poliquístico en Tuxtla | Dr. Jorge Albores",
      "description": "Diagnóstico y control integral del SOP y desbalances hormonales en Tuxtla Gutiérrez, Chiapas.",
      "keywords": [
        "sop tuxtla gutierrez",
        "ovario poliquistico tratamiento chiapas",
        "retraso menstrual sop",
        "hirsutismo ginecologo"
      ]
    }
  },
  {
    "id": "preeclampsia-y-trastornos-hipertensivos",
    "slug": "preeclampsia-y-trastornos-hipertensivos",
    "name": "Preeclampsia y Trastornos Hipertensivos del Embarazo",
    "technicalName": "Preeclampsia con y sin Criterios de Severidad / Síndrome HELLP",
    "category": "obstetricia",
    "description": "Complicación gestacional grave caracterizada por elevación de la presión arterial (igual o mayor a 140/90 mmHg) después de la semana 20, con daño a órganos como riñón o hígado.",
    "symptoms": [
      "Dolor de cabeza intenso y pulsátil que no cede (cefalea)",
      "Visión borrosa, destellos de luz (fosfenos) o zumbido en los oídos (acúfenos)",
      "Dolor agudo en la boca del estómago o debajo de las costillas derechas (epigastralgia)",
      "Hinchazón rápida y súbita en cara, manos y pies (edema generalizado)"
    ],
    "causes": [
      "Desarrollo anómalo de los vasos sanguíneos de la placenta (isquemia placentaria)",
      "Disfunción del endotelio vascular materno mediado por factores antiangiogénicos"
    ],
    "riskFactors": [
      "Primer embarazo (primigestas)",
      "Antecedente de preeclampsia en gestación previa o historia familiar directa",
      "Hipertensión arterial crónica, diabetes o enfermedad renal",
      "Embarazo múltiple"
    ],
    "mexicoStats": "Principal causa de muerte materna y parto prematuro inducido en los hospitales de México.",
    "complications": [
      "Eclampsia (convulsiones maternas potencialmente fatales)",
      "Síndrome HELLP (destrucción de glóbulos rojos, enzimas hepáticas altas y plaquetas bajas)",
      "Desprendimiento prematuro de placenta normoinserta y sufrimiento fetal"
    ],
    "treatments": [
      "Tamizaje de preeclampsia en semanas 11-14 con Doppler de arterias uterinas y prevención oportuna",
      "Monitoreo hemodinámico estricto y perfil de laboratorio toxémico seriado",
      "Estabilización y resolución del embarazo en tiempo óptimo hospitalario para proteger a la madre y al feto"
    ],
    "faqs": [
      {
        "question": "¿Se puede predecir la preeclampsia antes de que suba la presión?",
        "answer": "Sí. Mediante el ultrasonido genético de semana 11 a 14 y Doppler de arterias uterinas se puede calcular el riesgo y pautar medidas preventivas que reducen drásticamente su incidencia."
      },
      {
        "question": "¿Qué debo hacer si veo lucecitas y me duele la cabeza en el embarazo?",
        "answer": "Debes tomarte la presión de inmediato y comunicarte de urgencia al 961 249 6398 con el Dr. Jorge Albores; son signos clásicos de preeclampsia severa."
      },
      {
        "question": "¿La preeclampsia desaparece al nacer el bebé?",
        "answer": "La resolución del embarazo es el único tratamiento definitivo, aunque la paciente debe mantenerse bajo estrecha vigilancia médica las primeras 48 a 72 horas del posparto."
      }
    ],
    "relatedServices": [
      "control-prenatal",
      "ultrasonido-mamario-ginecologico",
      "consulta-ginecologica"
    ],
    "relatedSymptoms": [
      "dolor-pelvico-cronico-o-agudo"
    ],
    "image": "/enfermedades/preeclampsia.jpg",
    "seo": {
      "title": "Preeclampsia y Presión Alta en Embarazo en Tuxtla | Dr. Jorge Albores",
      "description": "Detección temprana y manejo de preeclampsia en Tuxtla Gutiérrez, Chiapas. Línea de urgencias obstétricas.",
      "keywords": [
        "preeclampsia tuxtla gutierrez",
        "presion alta en embarazo chiapas",
        "sindrome hellp",
        "urgencias obstetricas tuxtla"
      ]
    }
  }
];
