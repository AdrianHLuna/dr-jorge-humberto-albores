import { Symptom } from "@/types/schema";

export const symptoms: Symptom[] = [
  {
    "id": "bolita-o-nodulo-en-la-mama",
    "slug": "bolita-o-nodulo-en-la-mama",
    "name": "Bolita o Bulto Palpable en la Mama o Axila",
    "category": "mama",
    "colloquialNames": [
      "Masa mamaria",
      "Nódulo en el seno",
      "Bulto en la axila"
    ],
    "description": "Palpación de una masa circunscrita, dura o blanda, móvil o fija, en el tejido glandular mamario o en el hueco axilar. Es el principal motivo de consulta en mastología.",
    "urgencyLevel": "alta",
    "causes": [
      "Quistes mamarios simples o complejos con contenido líquido",
      "Fibroadenomas (tumores benignos frecuentes en mujeres jóvenes)",
      "Mastopatía fibroquística y cambios hormonales del ciclo",
      "Lesiones proliferativas o neoplasias mamarias (cáncer de mama)",
      "Procesos inflamatorios o adenopatías reactivas en axila"
    ],
    "alarmSigns": [
      "Nódulo duro, de bordes irregulares y fijo a planos profundos o piel",
      "Crecimiento rápido en pocas semanas o meses",
      "Presencia simultánea de ganglios duros en la axila o por encima de la clavícula",
      "Hundimiento de la piel o pezón sobre el área del bulto"
    ],
    "whyConsult": "La inmensa mayoría de las bolitas en la mama son benignas, pero solo la evaluación de un mastólogo con ultrasonido o biopsia core puede descartar malignidad con certeza absoluta.",
    "relatedConditions": [
      "cancer-de-mama",
      "fibroadenoma-mamario",
      "quistes-mamarios"
    ],
    "image": "/images/sintomas/bolita-nodulo-mama.webp",
    "seo": {
      "title": "Bolita en el Seno o Nódulo Mamario en Tuxtla | Dr. Jorge Albores",
      "description": "Evaluación especializada de masas y bolitas en la mama por mastólogo de FUCAM en Tuxtla Gutiérrez, Chiapas.",
      "keywords": [
        "bolita en el seno tuxtla",
        "nodulo mamario mastologo",
        "bulto en la axila chiapas",
        "estudio de masa mamaria"
      ]
    },
    "faqs": [
      {
        "question": "¿Toda bolita en el seno es cáncer?",
        "answer": "No. Más del 80% de los nódulos palpables en mujeres en edad fértil corresponden a condiciones benignas como quistes o fibroadenomas. Sin embargo, toda masa debe ser revisada por un especialista."
      },
      {
        "question": "¿Qué estudio debo realizarme primero?",
        "answer": "En menores de 40 años el ultrasonido mamario de alta resolución es el estudio de primera elección. En mujeres de 40 años o más se solicita mastografía bilateral complementada con ultrasonido."
      }
    ]
  },
  {
    "id": "dolor-mamario-mastalgia",
    "slug": "dolor-mamario-mastalgia",
    "name": "Dolor Mamario (Mastalgia Cíclica y No Cíclica)",
    "category": "mama",
    "colloquialNames": [
      "Dolor en los senos",
      "Punzadas en los senos",
      "Tensión mamaria"
    ],
    "description": "Sensación de tirantez, pesadez, ardor o punzadas en una o ambas mamas, frecuentemente exacerbada en la fase premenstrual o de carácter constante.",
    "urgencyLevel": "moderada",
    "causes": [
      "Sensibilidad mamaria al estímulo hormonal de estrógenos y progesterona",
      "Mastopatía fibroquística y quistes en tensión",
      "Uso de sostenes inadecuados o con varillas opresivas",
      "Procesos infecciosos (mastitis) o contractura muscular torácica"
    ],
    "alarmSigns": [
      "Dolor unilateral muy localizado que no cede y no cambia con la regla",
      "Acompañado de enrojecimiento intenso, calor local o fiebre (sospecha de mastitis/absceso)",
      "Dolor asociado a un nódulo palpable o salida de secreción sanguinolenta"
    ],
    "whyConsult": "Aunque el dolor mamario rara vez es signo inicial de cáncer, una valoración mastológica descarta quistes a tensión y brinda alivio integral sin recurrir a tratamientos innecesarios.",
    "relatedConditions": [
      "fibroadenoma-mamario",
      "quistes-mamarios"
    ],
    "image": "/images/sintomas/dolor-mamario-mastalgia.webp",
    "seo": {
      "title": "Dolor en los Senos (Mastalgia) en Tuxtla | Dr. Jorge Albores",
      "description": "Diagnóstico y alivio del dolor mamario cíclico y mastopatía fibroquística en Tuxtla Gutiérrez con el Dr. Jorge Albores.",
      "keywords": [
        "dolor en senos tuxtla",
        "mastalgia tratamiento chiapas",
        "punzadas en la mama",
        "mastopatia fibroquistica dolor"
      ]
    },
    "faqs": [
      {
        "question": "¿El dolor de senos significa cáncer?",
        "answer": "Por lo general el cáncer de mama en etapas tempranas no produce dolor. El dolor suele relacionarse con cambios hormonales benignos o quistes."
      }
    ]
  },
  {
    "id": "secrecion-anormal-por-el-pezon",
    "slug": "secrecion-anormal-por-el-pezon",
    "name": "Secreción o Salida de Líquido por el Pezón (Telorrea / Telorragia)",
    "category": "mama",
    "colloquialNames": [
      "Líquido por el pezón",
      "Sangre por el pezón",
      "Salida de leche sin estar embarazada"
    ],
    "description": "Emisión espontánea o a la compresión de líquido seroso, lechoso, transparente o sanguinolento a través de los conductos galactóforos del pezón.",
    "urgencyLevel": "alta",
    "causes": [
      "Papiloma intraductal (tumor benigno dentro de los conductos de la leche)",
      "Ectasia ductal mamaria (dilatación de conductos)",
      "Hiperprolactinemia (elevación de hormona prolactina)",
      "Carcinoma intraductal de la mama"
    ],
    "alarmSigns": [
      "Secreción espontánea (sale sola sin apretar el pezón)",
      "Líquido sanguinolento (rojo) o transparente tipo agua de roca",
      "Secreción por un solo pezón (unilateral) y por un solo orificio",
      "Asociada a bulto palpable cercano a la areola"
    ],
    "whyConsult": "La secreción unilateral sanguinolenta o transparente requiere evaluación mastológica inmediata para estudiar los conductos mamarios y descartar papilomas o carcinomas.",
    "relatedConditions": [
      "cancer-de-mama"
    ],
    "image": "/images/sintomas/secrecion-pezon.webp",
    "seo": {
      "title": "Secreción por el Pezón en Tuxtla Gutiérrez | Dr. Jorge Albores",
      "description": "Atención especializada de sangrado o líquido por el pezón por cirujano oncólogo de mama en Tuxtla Gutiérrez.",
      "keywords": [
        "sangre por pezon tuxtla",
        "liquido por el pezon chiapas",
        "papiloma intraductal mastologo",
        "telorrea tratamiento"
      ]
    },
    "faqs": [
      {
        "question": "¿Cuándo es peligrosa la secreción del pezón?",
        "answer": "Cuando es espontánea (mancha la ropa sin exprimir), proviene de una sola mama y es de color café, rojizo (sangre) o cristalina como agua."
      }
    ]
  },
  {
    "id": "retraccion-o-hundimiento-del-pezon",
    "slug": "retraccion-o-hundimiento-del-pezon",
    "name": "Retracción o Hundimiento Reciente del Pezón o la Areola",
    "category": "mama",
    "colloquialNames": [
      "Pezón hundido de repente",
      "Inversión del pezón",
      "Pezón desviado"
    ],
    "description": "Modificación en la orientación o aplanamiento del pezón que tiende a introducirse hacia el interior de la glándula mamaria de forma adquirida y reciente.",
    "urgencyLevel": "alta",
    "causes": [
      "Tracción de conductos galactóforos por fibrosis o tumor subyacente",
      "Ectasia ductal con inflamación periductal crónica",
      "Cáncer de mama con compromiso del complejo areola-pezón"
    ],
    "alarmSigns": [
      "Hundimiento de reciente aparición que no puede revertirse manualmente",
      "Desviación o fijación del pezón hacia un lado",
      "Presencia de engrosamiento o masa palpable debajo de la areola"
    ],
    "whyConsult": "Mientras que los pezones planos o invertidos congénitos desde la adolescencia son normales, un pezón que se hunde repentinamente en la adultez es un signo de sospecha cardinal que debe revisarse de inmediato.",
    "relatedConditions": [
      "cancer-de-mama"
    ],
    "image": "/images/sintomas/retraccion-pezon.webp",
    "seo": {
      "title": "Pezón Hundido o Retraído en Tuxtla | Dr. Jorge Albores",
      "description": "Valoración urgente de retracción o inversión de pezón en Tuxtla Gutiérrez por especialista en mastología oncológica.",
      "keywords": [
        "pezon hundido tuxtla",
        "retraccion de pezon mastologia",
        "signos cancer de mama",
        "pezon hacia adentro chiapas"
      ]
    },
    "faqs": [
      {
        "question": "Siempre he tenido pezones planos, ¿debo preocuparme?",
        "answer": "No si es tu condición natural desde la pubertad y es bilateral. La señal de alerta ocurre cuando un pezón que antes sobresalía normalmente comienza a hundirse de manera reciente en una sola mama."
      }
    ]
  },
  {
    "id": "sangrado-vaginal-anormal",
    "slug": "sangrado-vaginal-anormal",
    "name": "Sangrado Vaginal Anormal o Manchado Intermenstrual",
    "category": "ginecologico",
    "colloquialNames": [
      "Sangrado fuera de tiempo",
      "Manchado entre periodos",
      "Sangrado después de la menopausia"
    ],
    "description": "Hemorragia o manchado uterino que ocurre fuera del ciclo menstrual regular, tras las relaciones sexuales o meses después de haber ingresado a la menopausia.",
    "urgencyLevel": "alta",
    "causes": [
      "Miomas uterinos submucosos o intramurales",
      "Pólipos endometriales o cervicales",
      "Hiperplasia endometrial",
      "Lesiones cervicales por VPH o cáncer cervicouterino",
      "Atrofia endometrial o desequilibrios hormonales"
    ],
    "alarmSigns": [
      "Cualquier sangrado después de un año de no menstruar (posmenopausia)",
      "Sangrado inmediato tras el contacto sexual (sinusorragia)",
      "Pérdida sanguínea profusa con coágulos que causa mareo o palidez"
    ],
    "whyConsult": "El sangrado posmenopáusico o intermenstrual abundante debe ser investigado siempre mediante ultrasonido pélvico o histeroscopia para descartar pólipos, hiperplasia o lesiones malignas.",
    "relatedConditions": [
      "cancer-cervicouterino",
      "infeccion-vph",
      "miomatosis-uterina"
    ],
    "image": "/images/sintomas/sangrado-vaginal-anormal.webp",
    "seo": {
      "title": "Sangrado Vaginal Anormal en Tuxtla | Dr. Jorge Albores",
      "description": "Diagnóstico de sangrados intermenstruales y posmenopáusicos en Tuxtla Gutiérrez con histeroscopia y ultrasonido.",
      "keywords": [
        "sangrado fuera de tiempo tuxtla",
        "sangrado menopausia chiapas",
        "hemorragia uterina ginecologo",
        "manchado marron"
      ]
    },
    "faqs": [
      {
        "question": "¿Qué significa sangrar después de la menopausia?",
        "answer": "Todo sangrado en la posmenopausia se considera patológico hasta demostrar lo contrario. Requiere revisión prioritaria mediante ecografía e histeroscopia para evaluar el grosor del endometrio."
      }
    ]
  },
  {
    "id": "flujo-vaginal-inusual",
    "slug": "flujo-vaginal-inusual",
    "name": "Flujo Vaginal Inusual, Prurito o Mal Olor",
    "category": "ginecologico",
    "colloquialNames": [
      "Flujo blanco grumoso",
      "Mal olor íntimo",
      "Infección vaginal"
    ],
    "description": "Cambio en la coloración (amarillento, verdoso, grisáceo o blanquecino como requesón), consistencia u olor del flujo vaginal, frecuentemente acompañado de comezón y ardor.",
    "urgencyLevel": "moderada",
    "causes": [
      "Vaginitis por hongos (Candidiasis)",
      "Vaginosis bacteriana por alteración de la flora vaginal",
      "Tricomoniasis u otras infecciones de transmisión sexual",
      "Cervicitis asociada a VPH o gérmenes oportunistas"
    ],
    "alarmSigns": [
      "Olor fétido a pescado",
      "Dolor pélvico bajo asociado o fiebre",
      "Presencia de ampollas, llagas o verrugas en genitales externos"
    ],
    "whyConsult": "Automedicarse óvulos comerciales sin cultivo o exploración favorece la resistencia microbiana e infecciones recurrentes. Una revisión ginecológica identifica la causa precisa.",
    "relatedConditions": [
      "cancer-cervicouterino",
      "infeccion-vph"
    ],
    "image": "/images/sintomas/flujo-vaginal-inusual.webp",
    "seo": {
      "title": "Flujo Vaginal e Infecciones en Tuxtla | Dr. Jorge Albores",
      "description": "Tratamiento eficaz de infecciones vaginales recurrentes y flujo anormal en Tuxtla Gutiérrez, Chiapas.",
      "keywords": [
        "flujo vaginal tuxtla",
        "infeccion vaginal recurrente chiapas",
        "mal olor intimo tratamiento",
        "candidiasis ginecologo"
      ]
    },
    "faqs": [
      {
        "question": "¿Por qué mis infecciones vaginales regresan cada mes?",
        "answer": "Suele deberse a tratamientos incompletos, desbalances del pH por jabones perfumados, glucemia elevada o no tratar a la pareja cuando es necesario."
      }
    ]
  },
  {
    "id": "dolor-pelvico-cronico-o-agudo",
    "slug": "dolor-pelvico-cronico-o-agudo",
    "name": "Dolor Pélvico Crónico o Agudo en el Vientre Bajo",
    "category": "ginecologico",
    "colloquialNames": [
      "Dolor en el vientre",
      "Cólico constante en ovarios",
      "Presión en la pelvis"
    ],
    "description": "Molestia dolorosa persistente (más de 6 meses) o súbita e intensa en la región del abdomen inferior, útero o fosas ilíacas.",
    "urgencyLevel": "alta",
    "causes": [
      "Endometriosis pélvica profunda y adherencias",
      "Torsión o rotura de quistes de ovario",
      "Enfermedad pélvica inflamatoria (EPI)",
      "Miomas uterinos con degeneración o compresión de estructuras"
    ],
    "alarmSigns": [
      "Dolor súbito incapacitante con náuseas o mareo (sospecha de torsión o rotura)",
      "Fiebre mayor a 38 °C con flujo vaginal o dolor al caminar",
      "Dolor progresivo que no responde a analgésicos convencionales"
    ],
    "whyConsult": "El dolor pélvico no es normal. La alta especialidad en cirugía laparoscópica del Dr. Albores permite diagnosticar y liberar adherencias o focos de endometriosis con mínima invasión.",
    "relatedConditions": [
      "miomatosis-uterina",
      "endometriosis",
      "quistes-de-ovario",
      "sindrome-ovario-poliquistico",
      "preeclampsia-y-trastornos-hipertensivos"
    ],
    "image": "/images/sintomas/dolor-pelvico.webp",
    "seo": {
      "title": "Dolor Pélvico en Tuxtla Gutiérrez | Dr. Jorge Albores",
      "description": "Diagnóstico y tratamiento por laparoscopia del dolor pélvico y endometriosis en Tuxtla Gutiérrez, Chiapas.",
      "keywords": [
        "dolor pelvico tuxtla",
        "endometriosis chiapas laparoscopia",
        "dolor bajo vientre mujer",
        "especialista dolor pelvico"
      ]
    },
    "faqs": [
      {
        "question": "¿El dolor pélvico constante puede causar infertilidad?",
        "answer": "Sí, cuando es provocado por patologías como endometriosis o enfermedad pélvica inflamatoria, las cuales generan cicatrices que pueden obstruir las trompas de Falopio."
      }
    ]
  },
  {
    "id": "dolor-en-las-relaciones-sexuales",
    "slug": "dolor-en-las-relaciones-sexuales",
    "name": "Dolor Durante las Relaciones Sexuales (Dispareunia)",
    "category": "ginecologico",
    "colloquialNames": [
      "Molestia al tener intimidad",
      "Ardor con la penetración",
      "Dolor profundo en relaciones"
    ],
    "description": "Sensación de dolor, ardor o malestar intenso en la entrada vaginal o en la profundidad pélvica durante o después del coito.",
    "urgencyLevel": "moderada",
    "causes": [
      "Focos de endometriosis en ligamentos úterosacros o tabique rectovaginal",
      "Infecciones vaginales o cervicitis activas",
      "Sequedad vaginal por deficiencia estrogénica o lactancia",
      "Adherencias pélvicas o miomas"
    ],
    "alarmSigns": [
      "Dolor punzante profundo que persiste horas después del coito",
      "Acompañado de sangrado posterior a las relaciones",
      "Imposibilidad total de mantener intimidad por el dolor"
    ],
    "whyConsult": "La intimidad no debe doler. Identificar la raíz anatómica o inflamatoria devuelve la tranquilidad y salud sexual a la paciente.",
    "relatedConditions": [
      "cancer-cervicouterino",
      "endometriosis"
    ],
    "image": "/images/sintomas/dolor-relaciones-dispareunia.webp",
    "seo": {
      "title": "Dolor en las Relaciones (Dispareunia) en Tuxtla | Dr. Jorge Albores",
      "description": "Manejo médico de dolor durante las relaciones íntimas y endometriosis en Tuxtla Gutiérrez, Chiapas.",
      "keywords": [
        "dolor relaciones sexuales tuxtla",
        "dispareunia ginecologo",
        "endometriosis dolor intimo",
        "ardor en intimidad mujer"
      ]
    },
    "faqs": [
      {
        "question": "¿Por qué siento un dolor profundo como una punzada al fondo?",
        "answer": "El dolor profundo en el fondo pélvico es un síntoma muy característico de endometriosis en los ligamentos de sostén del útero, requiriendo valoración especializada."
      }
    ]
  },
  {
    "id": "menstruaciones-abundantes-o-prolongadas",
    "slug": "menstruaciones-abundantes-o-prolongadas",
    "name": "Menstruaciones Muy Abundantes o Prolongadas (Menorragia)",
    "category": "ginecologico",
    "colloquialNames": [
      "Reglas muy abundantes",
      "Sangrado con coágulos grandes",
      "Periodo dura más de 8 días"
    ],
    "description": "Sangrado menstrual que dura más de 7 u 8 días continuos o con un flujo excesivo que empapa una o más toallas o tampones cada hora durante varias horas seguidas.",
    "urgencyLevel": "alta",
    "causes": [
      "Miomas uterinos submucosos o intramurales",
      "Pólipos endometriales",
      "Adenomiosis (engrosamiento de la pared del útero)",
      "Coagulopatías o disfunciones ovulatorias"
    ],
    "alarmSigns": [
      "Expulsión continua de coágulos mayores al tamaño de una moneda",
      "Cansancio extremo, mareo, palidez o fatiga al subir escaleras (anemia)",
      "Empapar compresas de maternidad en menos de dos horas"
    ],
    "whyConsult": "Perder tanta sangre en cada periodo conduce a anemia severa y deteriora la energía vital. La histeroscopia de consultorio permite diagnosticar la causa exacta en 20 minutos.",
    "relatedConditions": [
      "miomatosis-uterina",
      "sindrome-ovario-poliquistico"
    ],
    "image": "/images/sintomas/menstruaciones-abundantes.webp",
    "seo": {
      "title": "Reglas Abundantes y Sangrado Excesivo en Tuxtla | Dr. Jorge Albores",
      "description": "Atención de menorragia, miomas y pólipos causantes de anemia en Tuxtla Gutiérrez por cirujano endoscopista.",
      "keywords": [
        "menstruacion abundante tuxtla",
        "coagulos en la regla chiapas",
        "miomas sangrado ginecologo",
        "periodos muy largos tratamiento"
      ]
    },
    "faqs": [
      {
        "question": "¿Es normal tener que cambiarme la toalla cada hora?",
        "answer": "No, no es normal. Cambiar toallas o tampones cada hora indica menorragia y requiere estudio ginecológico para detectar miomas o pólipos antes de que cause anemia."
      }
    ]
  },
  {
    "id": "colicos-menstruales-incapacitantes",
    "slug": "colicos-menstruales-incapacitantes",
    "name": "Cólicos Menstruales Severos e Incapacitantes (Dismenorrea Severa)",
    "category": "ginecologico",
    "colloquialNames": [
      "Cólicos muy fuertes",
      "Dolor de regla que no me deja pararme",
      "Dismenorrea"
    ],
    "description": "Dolor abdominal espasmódico e intenso que inicia antes o durante la menstruación, impidiendo levantarse de la cama o realizar actividades laborales o escolares.",
    "urgencyLevel": "alta",
    "causes": [
      "Endometriosis",
      "Adenomiosis en la pared del miometrio",
      "Miomas uterinos",
      "Estenosis cervical u obstrucciones anatómicas"
    ],
    "alarmSigns": [
      "Dolor que empeora con cada año que pasa en lugar de mejorar",
      "Cólicos acompañados de náuseas, vómito, diarrea o desmayo",
      "Falta total de alivio con antiinflamatorios estándar"
    ],
    "whyConsult": "Normalizar el dolor menstrual extremo es un error frecuente. La dismenorrea severa es la principal manifestación de endometriosis, la cual debe tratarse para preservar la fertilidad.",
    "relatedConditions": [
      "miomatosis-uterina",
      "endometriosis",
      "quistes-de-ovario"
    ],
    "image": "/images/sintomas/colicos-severos.webp",
    "seo": {
      "title": "Cólicos Menstruales Severos en Tuxtla | Dr. Jorge Albores",
      "description": "Alivio y diagnóstico de dismenorrea severa y endometriosis en Tuxtla Gutiérrez por cirujano endoscopista.",
      "keywords": [
        "colicos menstruales fuertes tuxtla",
        "dismenorrea tratamiento chiapas",
        "dolor de regla insoportable",
        "endometriosis colicos"
      ]
    },
    "faqs": [
      {
        "question": "¿Es normal que el cólico me impida ir a trabajar o a la escuela?",
        "answer": "Definitivamente no. El dolor menstrual que incapacita no es normal y es una señal clínica que obliga a descartar endometriosis o adenomiosis."
      }
    ]
  }
];
