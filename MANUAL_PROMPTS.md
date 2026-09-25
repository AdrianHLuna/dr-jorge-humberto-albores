# Manual de Prompts de Imágenes e Ilustraciones Médicas (AISO v3.1)
## Dr. Jorge Humberto Albores Mejía — Ginecología, Obstetricia & Cirugía Oncológica de la Mama
**Ciudad:** Tuxtla Gutiérrez, Chiapas (Calle 23 Poniente Sur #710, Col. Santa Elena, C.P. 29060)  
**Especialidad:** Ginecología y Obstetricia  
**Altas Especialidades:** Cirugía Oncológica de la Mama & Cirugía Endoscópica Ginecológica  
**Certificación:** Consejo Mexicano de Ginecología y Obstetricia (CMGO) | Alta Especialidad Avalada por FUCAM / UNAM  

**Nota de discreción clínica y bioética:** la ginecología, la obstetricia y la mastología oncológica abordan la salud íntima femenina, la gestación y la patología mamaria. Todos los prompts de este manual están redactados bajo **estrictos estándares de dignidad clínica, bioética y seguridad visual**: diagramas anatómicos 3D de libro de texto médico, renders biomédicos estériles, monitores de ultrasonido volumétrico HD, colposcopios digitales, estaciones quirúrgicas de mínima invasión y fotografía editorial de consultorio centrada en el diálogo empático médico-paciente — **jamás fotografía de desnudez explícita, genitales expuestos, incisiones cruentas ni contenido gráfico desagradable**. Esto garantiza una imagen de marca de máximo prestigio médico privado y permite una generación fluida y libre de bloqueos en Midjourney v6, OpenAI ChatGPT / DALL-E 3 y Google Imagen / Gemini.

Cada prompt indica entre paréntesis la ruta de archivo a la que corresponde en el sitio (`public/images/...webp`), para saber exactamente dónde colocar la imagen generada.

---

## 🤖 PROMPT INICIAL DE CONTEXTO MASTER PARA GEMINI / CHATGPT / MIDJOURNEY

```text
Rol: Experto en generación de imágenes e ilustraciones médicas fotorrealistas de nivel premium para marketing de salud, portales clínicos de alta especialidad y sitios web médicos de prestigio internacional.
Tono: Empático, sobrio, de absoluta autoridad clínica y académica (Ginecología, Obstetricia de Alto Riesgo, Cirugía Oncológica de la Mama y Laparoscopía Ginecológica Avanzada), elegante y editorial — nunca explícito ni gráfico.
Estilo: Fotorrealismo y renders 3D de texturas orgánicas médicas estériles para anatomía y patología; fotografía clínica y editorial de alta gama para procedimientos, consultas y escenas con pacientes.
Restricciones: Cero desnudez o anatomía genital/mamaria expuesta de forma explícita — usar diagramas anatómicos esquemáticos de libro de texto, modelos biomédicos didácticos, ecógrafos de alta definición, estaciones de trabajo o encuadres discretos (manos enguantadas, instrumental estéril, expresión facial de diálogo y calidez) en su lugar. Sin sangre explícita, cortes cruentos ni contenido gráfico desagradable. Todo debe transmitir higiene estéril, tecnología diagnóstica de punta y calidez humana. Prohibidos hologramas de ciencia ficción, luces de neón estridentes o interfaces irreales tipo HUD/cyberpunk. Cero palabras, marcas de agua, firmas, texto o números.
Formato: Imagen panorámica horizontal de aspecto 16:9 (--ar 16:9 --v 6.0).

Instrucciones generales de color y estilo:
- Lighting: Clean, bright luxury medical studio lighting, soft natural warm sidelight, gentle clinical shadows.
- Color Palette: Brand Deep Wine / Plum (#653A57), Soft Rose / Blush (#E8B7B7), Warm Cream (#FAF7F5), Pure Clinical White (#FFFFFF), Polished Surgical Silver, Subtle Rose Gold accents.
- Composition: Focused clinical macro, dignified patient consultation medium shot, or symmetrical editorial medical view.
- Suffixes: realistic medical CGI, 8k, photorealistic textures, unreal engine 5 style, hyper-detailed --ar 16:9 --v 6.0
- Negative Prompt: hologram, sci-fi, futuristic, spaceship, cyberpunk, neon, glowing digital UI, hud, data rings, blueprints, user interface, text, words, letters, watermark, signature, blood, explicit nudity, exposed breasts, graphic content, genital nudity, gore, open wounds.
```

---

## 🩺 SECCIÓN 1: PROMPTS PARA ENFERMEDADES GINECOLÓGICAS, OBSTÉTRICAS Y MAMARIAS (30)

### 1. Cáncer de Mama (`public/images/enfermedades/cancer-de-mama.webp`)
```text
Aesthetic 3D medical cross-section illustration of the female breast anatomy highlighting glandular lobules and ductal network, showing a discrete focal cellular alteration in the upper-outer quadrant, clean clinical oncology textbook style, non-explicit.

Lighting: Clean, bright luxury medical studio lighting, soft clinical shadows.
Color Palette: Brand Deep Wine (#653A57), Soft Rose (#E8B7B7), Warm Cream (#FAF7F5), Clinical White, Silver.
Composition: Symmetrical focused clinical cross-section of glandular breast tissue.
Suffixes: realistic medical CGI, 8k, photorealistic textures, unreal engine 5 style --ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, neon, glowing digital UI, hud, text, words, watermark, signature, blood, explicit nudity, exposed body, graphic content.
```

### 2. Fibroadenoma Mamario (`public/images/enfermedades/fibroadenoma.webp`)
```text
Aesthetic 3D anatomical illustration of breast glandular tissue demonstrating a well-circumscribed, smooth oval benign nodule surrounded by healthy stromal collagen fibers, educational medical illustration style.

Lighting: Balanced clinical studio lighting with soft diffuse highlights.
Color Palette: Brand Deep Wine (#653A57), Soft Rose (#E8B7B7), Pure White, Neutral Silver.
Composition: Focused anatomical macro view of the glandular stroma and benign lesion.
Suffixes: realistic medical CGI, 8k, photorealistic textures --ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, neon, text, words, watermark, signature, blood, explicit nudity, graphic content.
```

### 3. Quistes Mamarios Simples y Complicados (`public/images/enfermedades/quistes-mamarios.webp`)
```text
High-definition medical 3D rendering of breast ductal architecture showing a fluid-filled anechoic round micro-cyst with smooth borders within healthy lobular tissue, clean clinical diagnostic illustration.

Lighting: Soft translucent backlighting showcasing fluid clarity within the cyst capsule.
Color Palette: Brand Deep Wine (#653A57), Soft Rose (#E8B7B7), Translucent Aqua, Clinical White.
Composition: Symmetrical close-up cross-section of a mammary lobule.
Suffixes: realistic medical CGI, 8k, photorealistic textures --ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, neon, text, words, watermark, signature, blood, nudity, gore.
```

### 4. Mastopatía Fibroquística (`public/images/enfermedades/mastopatia-fibroquistica.webp`)
```text
Educational 3D anatomical visual of dense fibroglandular breast tissue showing areas of fibrous stromal proliferation and tiny benign microcysts, medical pathology textbook style.

Lighting: Bright laboratory illumination, soft organic depth.
Color Palette: Brand Deep Wine (#653A57), Soft Rose (#E8B7B7), Cream (#FAF7F5), Silver.
Composition: Cross-sectional anatomical overview of dense parenchymal tissue.
Suffixes: realistic medical CGI, 8k, photorealistic textures --ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, neon, text, words, watermark, signature, blood, nudity.
```

### 5. Papiloma Intraductal (`public/images/enfermedades/papiloma-intraductal.webp`)
```text
3D precision medical render of a lactiferous milk duct cross-section showing a small arborescent papillary benign growth within the ductal lumen, clean micro-anatomical illustration.

Lighting: Focused clinical micro-spotlight highlighting the interior ductal epithelium.
Color Palette: Brand Deep Wine (#653A57), Soft Rose (#E8B7B7), Warm Amber, Clinical White.
Composition: Longitudinal micro-cross-section of a mammary duct.
Suffixes: realistic medical CGI, 8k, photorealistic textures --ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, neon, text, words, watermark, signature, blood, nudity.
```

### 6. Mastitis y Absceso Mamario (`public/images/enfermedades/mastitis.webp`)
```text
3D anatomical illustration of a mammary glandular lobule presenting localized hyperemic inflammatory response within ductal walls, educational clinical pathology rendering, clean and non-graphic.

Lighting: Warm clinical lighting with soft subtle focal illumination on the inflamed lobule.
Color Palette: Brand Deep Wine (#653A57), Soft Rose (#E8B7B7), Warm Peach, Clinical White.
Composition: Focused lobular anatomical view, schematic and dignified.
Suffixes: realistic medical CGI, 8k, photorealistic textures --ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, neon, text, words, watermark, signature, blood, pus, gore, nudity, graphic content.
```

### 7. Cáncer Cervicouterino (`public/images/enfermedades/cancer-cervicouterino.webp`)
```text
Aesthetic medical illustration of the uterine cervix showing the transformation zone and squamocolumnar junction with highlighted cellular dysplastic remodeling, educational oncological diagram style.

Lighting: Bright sterile diagnostic illumination, soft natural shadows.
Color Palette: Brand Deep Wine (#653A57), Soft Rose (#E8B7B7), Lavender Silver, Clinical White.
Composition: Coronal schematic anatomical view of the lower uterine segment and cervix.
Suffixes: realistic medical CGI, 8k, educational diagram style --ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, neon, text, words, watermark, signature, blood, explicit nudity, graphic content.
```

### 8. Virus del Papiloma Humano (VPH) (`public/images/enfermedades/vph.webp`)
```text
3D scientific molecular visualization of the icosahedral Human Papillomavirus (HPV) viral capsid in high resolution, floating in a clean microscopic biomedical background with soft depth of field.

Lighting: High-end scientific darkfield lighting with soft magenta and wine rim illumination.
Color Palette: Brand Deep Wine (#653A57), Soft Rose (#E8B7B7), Deep Violet, Polished White.
Composition: Macro centered view of the viral particle with soft out-of-focus molecular particles.
Suffixes: realistic biomedical CGI, 8k, scientific render, unreal engine 5 --ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, neon, cartoon, text, words, watermark, signature, blood.
```

### 9. Miomatosis Uterina (`public/images/enfermedades/miomatosis-uterina.webp`)
```text
3D anatomical cross-section render of the human uterus showing benign intramural and subserosal leiomyoma nodules within the smooth myometrial wall, clean medical textbook illustration.

Lighting: Bright studio lighting highlighting tissue layer separation (endometrium, myometrium).
Color Palette: Brand Deep Wine (#653A57), Soft Rose (#E8B7B7), Warm Cream (#FAF7F5), Silver.
Composition: Coronal cross-section view of the uterine body and myometrial walls.
Suffixes: realistic medical CGI, 8k, photorealistic textures --ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, neon, text, words, watermark, signature, blood, graphic nudity.
```

### 10. Pólipos Endometriales (`public/images/enfermedades/polipos-endometriales.webp`)
```text
High-precision 3D illustration of the uterine cavity showing a small vascularized endometrial polyp projecting into the lumen from the mucosal lining, sterile hysteroscopy perspective.

Lighting: Clear endoluminal surgical light with soft diffuse reflection on mucosal tissue.
Color Palette: Brand Deep Wine (#653A57), Soft Rose (#E8B7B7), Warm Blush, Clinical White.
Composition: Longitudinal internal perspective of the endometrial cavity.
Suffixes: realistic medical CGI, 8k, photorealistic textures --ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, neon, text, words, watermark, signature, blood, gore.
```

### 11. Endometriosis y Adenomiosis (`public/images/enfermedades/endometriosis.webp`)
```text
3D anatomical diagram of the female pelvic organs and retroperitoneal spaces illustrating ectopic endometrial tissue foci and adenomyotic myometrial remodeling, educational clinical illustration.

Lighting: Clean studio illumination with subtle highlighted zones of peritoneal implants.
Color Palette: Brand Deep Wine (#653A57), Soft Rose (#E8B7B7), Champagne Gold, Clinical White.
Composition: Coronal view of pelvic anatomy and uterosacral ligaments.
Suffixes: realistic medical CGI, 8k, photorealistic textures --ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, neon, text, words, watermark, signature, blood, explicit nudity.
```

### 12. Quistes Ováricos y Tumores Benignos (`public/images/enfermedades/quistes-de-ovario.webp`)
```text
3D medical cross-section render of a human ovary showing a smooth follicular cyst alongside normal ovarian stroma and developing follicles, clean reproductive endocrinology illustration.

Lighting: Soft studio spotlighting with translucent depth through the follicle capsule.
Color Palette: Brand Deep Wine (#653A57), Soft Rose (#E8B7B7), Translucent Pearl, Clinical White.
Composition: Close-up coronal cross-section of the ovary and infundibulopelvic structures.
Suffixes: realistic medical CGI, 8k, photorealistic textures --ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, neon, text, words, watermark, signature, blood, nudity.
```

### 13. Síndrome de Ovario Poliquístico (SOP) (`public/images/enfermedades/sop.webp`)
```text
Aesthetic 3D anatomical illustration of an enlarged ovary with multiple small subcortical peripheral follicles arranged in a characteristic string-of-pearls pattern, clean medical textbook diagram.

Lighting: Bright clinical laboratory lighting with soft peripheral highlights on the cortex.
Color Palette: Brand Deep Wine (#653A57), Soft Rose (#E8B7B7), Warm Cream (#FAF7F5), Silver.
Composition: Macro anatomical view of the ovarian cortex and peripheral follicles.
Suffixes: realistic medical CGI, 8k, photorealistic textures --ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, neon, text, words, watermark, signature, blood, nudity.
```

### 14. Hiperplasia Endometrial (`public/images/enfermedades/hiperplasia-endometrial.webp`)
```text
3D anatomical cross-section of the uterine wall comparing normal endometrial thickness to a thickened hyperplastic glandular endometrium, clear comparative medical textbook style.

Lighting: Clean studio lighting with clear demarcation between mucosal and muscular layers.
Color Palette: Brand Deep Wine (#653A57), Soft Rose (#E8B7B7), Velvet Plum, Clinical White.
Composition: Symmetrical comparative cross-section of uterine tissue layers.
Suffixes: realistic medical CGI, 8k, photorealistic textures --ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, neon, text, words, watermark, signature, blood, nudity.
```

### 15. Prolapso de Órganos Pélvicos (`public/images/enfermedades/prolapso-pelvico.webp`)
```text
3D anatomical diagram of the female pelvic floor showing the levator ani muscle sling, endopelvic fascia and ligamentous suspension supports, clean biomechanical anatomy illustration.

Lighting: Clear educational lighting with subtle warm accents along supportive fascial bands.
Color Palette: Brand Deep Wine (#653A57), Soft Rose (#E8B7B7), Neutral Sand, Clinical White.
Composition: Midsagittal schematic pelvic floor model, textbook diagram framing.
Suffixes: realistic medical CGI, 8k, educational diagram style --ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, neon, text, words, watermark, signature, blood, explicit nudity.
```

### 16. Incontinencia Urinaria Femenina (`public/images/enfermedades/incontinencia-urinaria.webp`)
```text
Aesthetic 3D medical illustration of the bladder neck, female urethra and pubourethral ligamentous support mechanism, clean urogyn anatomy textbook illustration.

Lighting: Clean, bright luxury medical studio lighting, soft clinical shadows.
Color Palette: Brand Deep Wine (#653A57), Soft Rose (#E8B7B7), Ice Blue, Clinical White.
Composition: Focused sagittal cross-section of the lower urinary tract and urethral sphincter.
Suffixes: realistic medical CGI, 8k, photorealistic textures --ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, neon, text, words, watermark, signature, blood, nudity.
```

### 17. Infecciones Vaginales Recurrentes (`public/images/enfermedades/infecciones-vaginales.webp`)
```text
Microscopic 3D scientific visualization of the vaginal mucosal microenvironment showing protective Lactobacillus crispatus rods alongside localized microflora imbalance, clean medical microbiology visual.

Lighting: Soft darkfield biomedical illumination with warm plum and blush luminescence.
Color Palette: Brand Deep Wine (#653A57), Soft Rose (#E8B7B7), Pearl White, Soft Cyan.
Composition: Centered scientific cellular landscape with shallow depth of field.
Suffixes: realistic biomedical CGI, 8k, scientific render, unreal engine 5 --ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, neon, text, words, watermark, signature, blood, nudity.
```

### 18. Enfermedad Pélvica Inflamatoria (EPI) (`public/images/enfermedades/epi.webp`)
```text
3D anatomical illustration of the upper genital tract (uterus, fallopian tubes and fimbriae) showing localized tubal hyperemia and edema, clean gynecological pathology textbook style.

Lighting: Focused studio spotlighting on the fallopian tube and adnexal architecture.
Color Palette: Brand Deep Wine (#653A57), Soft Rose (#E8B7B7), Coral Blush, Clinical White.
Composition: Symmetrical coronal overview of the internal female reproductive tract.
Suffixes: realistic medical CGI, 8k, photorealistic textures --ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, neon, text, words, watermark, signature, blood, gore, nudity.
```

### 19. Amenorrea y Oligomenorrea (`public/images/enfermedades/amenorrea.webp`)
```text
Aesthetic 3D medical diagram illustrating the hypothalamic-pituitary-ovarian hormonal axis, showing neuroendocrine signaling pathways with subtle luminous connecting lines, endocrinology textbook style.

Lighting: Clean modern medical studio lighting, soft depth gradients.
Color Palette: Brand Deep Wine (#653A57), Soft Rose (#E8B7B7), Warm Gold, Clinical White.
Composition: Vertical schematic flow from brain pituitary gland to ovarian target.
Suffixes: realistic medical CGI, 8k, educational diagram style --ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, neon, text, words, watermark, signature, blood, nudity.
```

### 20. Sangrado Uterino Anormal (SUA) (`public/images/enfermedades/sangrado-anormal.webp`)
```text
3D anatomical illustration of the uterine cavity highlighting the endometrial microvascular network according to the FIGO PALM-COEIN classification framework, clean educational visual.

Lighting: Soft diffuse clinical illumination along the uterine lining.
Color Palette: Brand Deep Wine (#653A57), Soft Rose (#E8B7B7), Crimson, Pure White.
Composition: Longitudinal cross-section of the endometrial cavity and subendometrial vessels.
Suffixes: realistic medical CGI, 8k, photorealistic textures --ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, neon, text, words, watermark, signature, pools of blood, gore, nudity.
```

### 21. Dismenorrea Severa (`public/images/enfermedades/dismenorrea-severa.webp`)
```text
3D medical rendering of uterine myometrial muscle fibers showing coordinated contractile tension and localized prostaglandin-mediated vascular tone, scientific medical illustration.

Lighting: Balanced clinical studio lighting, subtle shadow contouring.
Color Palette: Brand Deep Wine (#653A57), Soft Rose (#E8B7B7), Warm Cream (#FAF7F5), Silver.
Composition: Close-up cross-section of myometrial smooth muscle architecture.
Suffixes: realistic medical CGI, 8k, photorealistic textures --ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, neon, text, words, watermark, signature, blood, nudity.
```

### 22. Embarazo de Alto Riesgo (`public/images/enfermedades/embarazo-alto-riesgo.webp`)
```text
High-fidelity 3D anatomical render of a mature placenta showing the fetal and maternal vascular interface with umbilical cord insertion and chorionic plate vessels, maternal-fetal medicine textbook style.

Lighting: Warm luxury clinical lighting with soft golden highlights on placental vessels.
Color Palette: Brand Deep Wine (#653A57), Soft Rose (#E8B7B7), Warm Amber, Clinical White.
Composition: Detailed oblique view of placental vascular anatomy and umbilical vessels.
Suffixes: realistic medical CGI, 8k, photorealistic textures --ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, neon, text, words, watermark, signature, blood, nudity, gore.
```

### 23. Preeclampsia y Trastornos Hipertensivos (`public/images/enfermedades/preeclampsia.webp`)
```text
3D biomedical visualization of uterine spiral arteries undergoing incomplete physiological remodeling with high-resistance vascular flow, maternal-fetal pathology illustration.

Lighting: Clean studio lighting with soft directional accent on arterial wall thickness.
Color Palette: Brand Deep Wine (#653A57), Soft Rose (#E8B7B7), Rose Gold, Clinical White.
Composition: Microscopic cross-section of decidual spiral arterioles and trophoblast cells.
Suffixes: realistic biomedical CGI, 8k, scientific render --ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, neon, text, words, watermark, signature, blood, nudity.
```

### 24. Diabetes Gestacional (`public/images/enfermedades/diabetes-gestacional.webp`)
```text
3D medical illustration representing glucose transport across placental syncytiotrophoblast microvilli via GLUT transporters, clinical metabolic endocrinology concept.

Lighting: Bright clean scientific lighting with translucent cellular membranes.
Color Palette: Brand Deep Wine (#653A57), Soft Rose (#E8B7B7), Soft Teal, Clinical White.
Composition: Microscopic cell membrane cross-section showing glucose molecule receptors.
Suffixes: realistic biomedical CGI, 8k, scientific render --ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, neon, text, words, watermark, signature, blood, cartoon.
```

### 25. Amenaza de Aborto y Parto Pretérmino (`public/images/enfermedades/parto-pretermino.webp`)
```text
3D anatomical illustration of the uterine cervix showing internal os status and cervical canal length (cervicometry concept), obstetrics ultrasound anatomy textbook style.

Lighting: Clean clinical studio illumination, soft depth shadows.
Color Palette: Brand Deep Wine (#653A57), Soft Rose (#E8B7B7), Neutral Sand, Clinical White.
Composition: Sagittal cross-section view of the lower uterine segment and internal os.
Suffixes: realistic medical CGI, 8k, educational diagram style --ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, neon, text, words, watermark, signature, blood, gore, nudity.
```

### 26. Pérdida Recurrente del Embarazo (`public/images/enfermedades/perdida-recurrente.webp`)
```text
Photorealistic empathetic scene of a doctor's consultation desk with a detailed anatomical uterine diagram, medical genetics folder, and a small stethoscope on clean warm oak surface, dignified compassionate care.

Lighting: Warm morning daylight through consultation room window, soft natural shadows.
Color Palette: Brand Deep Wine (#653A57), Soft Rose (#E8B7B7), Natural Oak Wood, Cream.
Composition: Editorial still-life perspective across the physician's consultation desk.
Suffixes: high-fidelity clinical photography, depth of field, 8k --ar 16:9 --v 6.0
Negative Prompt: cartoon, CGI, text, watermark, signature, blood, sad faces, tragedy, tears.
```

### 27. Embarazo Ectópico (`public/images/enfermedades/embarazo-ectopico.webp`)
```text
3D anatomical cross-section illustration of the ampullary portion of a fallopian tube with an early ectopic gestational sac, clean emergency gynecology textbook visual, non-graphic.

Lighting: Focused clinical spotlighting with soft subtle illumination on the tubal wall.
Color Palette: Brand Deep Wine (#653A57), Soft Rose (#E8B7B7), Warm Blush, Clinical White.
Composition: Close-up cross-section of the fallopian tube lumen and gestational implant.
Suffixes: realistic medical CGI, 8k, photorealistic textures --ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, neon, text, words, watermark, signature, blood, gore, rupture, nudity.
```

### 28. Placenta Previa (`public/images/enfermedades/placenta-previa.webp`)
```text
3D anatomical sagittal illustration of the pregnant uterus demonstrating placenta previa covering the internal cervical os, clear maternal-fetal anatomy textbook diagram.

Lighting: Clean studio illumination distinguishing placental tissue from myometrial wall.
Color Palette: Brand Deep Wine (#653A57), Soft Rose (#E8B7B7), Warm Peach, Clinical White.
Composition: Midsagittal view of the gravid uterus, lower uterine segment and cervix.
Suffixes: realistic medical CGI, 8k, educational diagram style --ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, neon, text, words, watermark, signature, blood, nudity, gore.
```

### 29. Restricción del Crecimiento Intrauterino (RCIU) (`public/images/enfermedades/rciu.webp`)
```text
3D medical rendering of umbilical artery and middle cerebral artery Doppler waveform vectors surrounding a stylized fetal biometry diagram, maternal-fetal hemodynamics illustration.

Lighting: High-contrast clinical studio lighting with soft luminous Doppler flow streamlines.
Color Palette: Brand Deep Wine (#653A57), Soft Rose (#E8B7B7), Crimson, Cobalt Silver.
Composition: Symmetrical medical diagram centered on umbilical cord hemodynamics.
Suffixes: realistic medical CGI, 8k, photorealistic textures --ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, neon, text, words, watermark, signature, blood, nudity.
```

### 30. Embarazo Múltiple (Gemelar) (`public/images/enfermedades/embarazo-gemelar.webp`)
```text
3D anatomical illustration of a diamniotic dichorionic twin pregnancy showing twin gestational sacs separated by an intervening chorionic dividing membrane, clear obstetrical textbook style.

Lighting: Warm gentle maternal-fetal studio lighting with translucent amniotic sacs.
Color Palette: Brand Deep Wine (#653A57), Soft Rose (#E8B7B7), Warm Gold, Clinical White.
Composition: Coronal overview of the gravid uterus with twin gestational sacs.
Suffixes: realistic medical CGI, 8k, photorealistic textures --ar 16:9 --v 6.0
Negative Prompt: hologram, sci-fi, neon, text, words, watermark, signature, blood, nudity.
```

---

## 🏥 SECCIÓN 2: PROMPTS PARA SERVICIOS Y PROCEDIMIENTOS GINECO-OBSTÉTRICOS Y MASTOLÓGICOS (11)

### 1. Consulta Ginecológica Integral (`public/images/servicios/consulta-ginecologica.webp`)
```text
Clinical photorealistic photo of an empathetic male gynecologist in his late 30s wearing a clean white doctor's coat, sitting across from an adult female patient at a modern consultation desk, reviewing test results on a high-definition tablet, warm private practice interior.

Lighting: Soft natural morning light streaming through sheer curtains, gentle rim lighting.
Color Palette: Brand Deep Wine (#653A57), Soft Rose (#E8B7B7), Natural Wood, Clinical White.
Composition: Medium editorial shot over patient's shoulder focusing on the doctor's respectful expression.
Suffixes: high-fidelity clinical photography, depth of field, 8k --ar 16:9 --v 6.0
Negative Prompt: plastic, CGI, 3D render, text, watermark, blood, neon, nudity, cold hospital.
```

### 2. Control Prenatal y Embarazo de Alto Riesgo (`public/images/servicios/control-prenatal.webp`)
```text
Photorealistic close-up shot of an obstetrician's gloved hands applying sterile coupling gel with an ultrasound probe on an expectant mother's abdomen draped in clinical linens, high-definition ultrasound monitor visible in soft background blur.

Lighting: Warm soothing clinic room lighting with soft focused light on the transducer.
Color Palette: Brand Deep Wine (#653A57), Soft Rose (#E8B7B7) linens, Pure White, Silver.
Composition: Close-up macro centered on the ultrasound probe and draped abdomen, no exposed body parts.
Suffixes: high-fidelity clinical photography, depth of field, 8k --ar 16:9 --v 6.0
Negative Prompt: plastic, CGI, 3D render, text, watermark, blood, explicit nudity, exposed breasts.
```

### 3. Consulta Especializada de Mastología (Mama) (`public/images/servicios/consulta-mastologia.webp`)
```text
Photorealistic editorial photo of a breast surgical oncologist pointing to a clear acrylic anatomical breast and lymph node model on a marble desk while explaining benign anatomy to a patient, modern oncology office.

Lighting: Bright luxury medical consultation room lighting, soft natural shadows.
Color Palette: Brand Deep Wine (#653A57), Soft Rose (#E8B7B7), Light Oak, Marble White.
Composition: Medium shot capturing the physician's hand gesturing toward the anatomical teaching model.
Suffixes: high-fidelity clinical photography, depth of field, 8k --ar 16:9 --v 6.0
Negative Prompt: plastic, CGI, 3D render, text, watermark, blood, nudity, exposed breasts.
```

### 4. Paquete Check-up Ginecológico Básico (`public/images/servicios/checkup-basico.webp`)
```text
Still-life clinical photography of a pristine stainless steel examination tray prepared for preventive women's check-up, containing sterile speculum, cytobrush, liquid-based cytology vial, and a fresh blush pink orchid on a clean clinical counter.

Lighting: Clean, bright luxury medical studio lighting, sparkling reflections on metal.
Color Palette: Brand Deep Wine (#653A57), Soft Rose (#E8B7B7), Polished Silver, Pure White.
Composition: Symmetrical top-angle perspective of organized sterile instruments.
Suffixes: high-fidelity clinical photography, macro textures, 8k --ar 16:9 --v 6.0
Negative Prompt: plastic, CGI, 3D render, text, watermark, blood, dirt, disorganization.
```

### 5. Paquete Check-up Ginecológico Completo (`public/images/servicios/checkup-completo.webp`)
```text
Photorealistic image of a modern high-end digital colposcopy workstation with high-intensity LED light source and articulated optical arm, high-definition monitor in background showing magnified diagnostic grid, luxury gynecological suite.

Lighting: Clean clinical studio lighting with soft blue and rose accent reflections on the hardware.
Color Palette: Brand Deep Wine (#653A57), Soft Rose (#E8B7B7), Brushed Aluminum, Clinical White.
Composition: Editorial three-quarter view of the specialized colposcope equipment.
Suffixes: high-fidelity clinical photography, depth of field, 8k --ar 16:9 --v 6.0
Negative Prompt: plastic, CGI, 3D render, text, watermark, blood, nudity, messy cables.
```

### 6. Paquete Check-up Ginecológico y Mastológico Integral (`public/images/servicios/checkup-integral.webp`)
```text
Panoramic wide-angle photorealistic view of a comprehensive women's health diagnostic suite featuring an advanced ultrasound console, digital colposcope, and physician consultation desk with fresh flowers and warm leather chairs.

Lighting: Soft ambient architectural lighting with bright clinical focal points, luxury aesthetic.
Color Palette: Brand Deep Wine (#653A57), Soft Rose (#E8B7B7), Champagne Gold, Warm Gray, White.
Composition: Wide interior architectural shot showcasing state-of-the-art diagnostic technology.
Suffixes: high-fidelity clinical photography, architectural interior, 8k --ar 16:9 --v 6.0
Negative Prompt: plastic, CGI, 3D render, text, watermark, blood, dark room, cluttered space.
```

### 7. Biopsia de Mama con Aguja de Corte (Core Biopsy) (`public/images/servicios/biopsia-core-mama.webp`)
```text
Macro clinical close-up of an automatic core needle biopsy instrument (tru-cut) resting on a sterile surgical drape beside a high-frequency linear breast ultrasound probe, gloved hands of the surgeon visible in background.

Lighting: Surgical spotlighting with crisp precision highlights on stainless steel cannula.
Color Palette: Brand Deep Wine (#653A57), Soft Rose (#E8B7B7), Surgical Blue, Metallic Silver, White.
Composition: Macro product-style shot of sterile biopsy device on surgical tray.
Suffixes: high-fidelity clinical photography, depth of field, 8k --ar 16:9 --v 6.0
Negative Prompt: blood, text, watermark, signature, sci-fi, neon, nudity, open wounds, flesh.
```

### 8. Histeroscopia Diagnóstica de Consultorio (`public/images/servicios/histeroscopia-diagnostica.webp`)
```text
Photorealistic clinical image of a compact office hysteroscopy tower with an ultra-thin rigid optical micro-camera and HD medical monitor displaying anatomical illustrations, sterile outpatient procedure room.

Lighting: Clean, bright medical equipment lighting with soft reflection on glass lenses.
Color Palette: Brand Deep Wine (#653A57), Soft Rose (#E8B7B7), Polished Silver, Pure White.
Composition: Focused perspective along the micro-endoscope sheath toward the HD display.
Suffixes: high-fidelity clinical photography, depth of field, 8k --ar 16:9 --v 6.0
Negative Prompt: plastic, CGI, 3D render, text, watermark, blood, neon, nudity.
```

### 9. Ultrasonido Mamario y Ginecológico de Alta Resolución (`public/images/servicios/ultrasonido-mamario-ginecologico.webp`)
```text
Close-up product photograph of a modern high-resolution ultrasound transducer probe emitting a subtle blue-white diagnostic ring light, resting on an ergonomic medical console with multi-frequency touch controls.

Lighting: Studio spotlighting with soft reflections on the acoustic lens and console surface.
Color Palette: Brand Deep Wine (#653A57), Soft Rose (#E8B7B7), Sleek Gray, Clinical White.
Composition: Dramatic close-up angle of the transducer probe resting in its cradle.
Suffixes: high-fidelity clinical photography, depth of field, 8k --ar 16:9 --v 6.0
Negative Prompt: plastic, CGI, 3D render, text, watermark, blood, neon, messy cords.
```

### 10. Colposcopia y Papanicolaou Especializado (`public/images/servicios/colposcopia-papanicolaou.webp`)
```text
Photorealistic close-up of a specialized gynecologist wearing sterile nitrile gloves handling a thin-layer liquid cytology specimen vial and precision cervical sampling brush next to a digital colposcope lens.

Lighting: Focused clinical spotlighting on sterile hands and diagnostic vials.
Color Palette: Brand Deep Wine (#653A57), Soft Rose (#E8B7B7), Clear Glass, Sterile White.
Composition: Close-up shot focused on the physician's gloved hands preparing the sample.
Suffixes: high-fidelity clinical photography, depth of field, 8k --ar 16:9 --v 6.0
Negative Prompt: plastic, CGI, 3D render, text, watermark, blood, nudity, exposed patients.
```

### 11. Cirugía Ginecológica y Mastológica Quirúrgica (`public/images/servicios/cirugia-ginecologica-mastologica.webp`)
```text
Photorealistic image of a state-of-the-art minimally invasive operating room with laparoscopic surgical tower, overhead LED surgical lights, and sterile surgical team focused on high-definition laparoscopy monitors, seen from behind.

Lighting: Bright surgical overhead theater lighting with deep contrast on sterile drapes.
Color Palette: Brand Deep Wine (#653A57), Soft Rose (#E8B7B7), Surgical Blue (#1E3A8A), Stainless Steel.
Composition: Wide editorial perspective of the sterile operating room team and monitors.
Suffixes: high-fidelity clinical photography, depth of field, 8k --ar 16:9 --v 6.0
Negative Prompt: blood, gore, open wounds, flesh, text, watermark, cartoon, sci-fi.
```

---

## 🩹 SECCIÓN 3: PROMPTS PARA SÍNTOMAS Y MOTIVOS DE CONSULTA GINECO-OBSTÉTRICOS Y MAMARIOS (18)

### 1. Bolita o Bulto Palpable en la Mama o Axila (`public/images/sintomas/bolita-nodulo-mama.webp`)
```text
Aesthetic photorealistic shot of an adult woman sitting in a sunlit bedroom in comfortable linen loungewear, placing one hand gently near her upper collarbone/chest area with a thoughtful, attentive expression as if performing a gentle self-check, tasteful chest-up framing, zero nudity.

Lighting: Soft warm morning window daylight, gentle shadow transitions.
Color Palette: Brand Deep Wine (#653A57) clothing accent, Soft Rose (#E8B7B7), Neutral Beige, White.
Composition: Medium shot from the chest up, completely dressed in soft linen.
Suffixes: realistic clinical photography, high-fidelity textures, 8k --ar 16:9 --v 6.0
Negative Prompt: cartoon, CGI, text, watermark, signature, nudity, exposed breasts, underwear, eroticism.
```

### 2. Dolor Mamario (Mastalgia Cíclica y No Cíclica) (`public/images/sintomas/dolor-mamario-mastalgia.webp`)
```text
Photorealistic photo of a woman sitting on the edge of a bed holding a warm cup of herbal tea in both hands, resting a hand gently against her upper torso with a subtle expression of mild tension, peaceful home setting.

Lighting: Soft natural morning light filtering through curtains.
Color Palette: Brand Deep Wine (#653A57), Soft Rose (#E8B7B7), Warm Cream, Soft Taupe.
Composition: Medium shot focused on facial expression and comforting posture.
Suffixes: realistic clinical photography, high-fidelity textures, 8k --ar 16:9 --v 6.0
Negative Prompt: cartoon, CGI, text, watermark, signature, nudity, exposed skin, agony.
```

### 3. Secreción o Salida de Líquido por el Pezón (`public/images/sintomas/secrecion-pezon.webp`)
```text
Photorealistic shot of a woman in a clean bathroom getting ready in the morning, looking down at the fabric of her silk pajama top with a puzzled, slightly concerned expression, completely dressed and tasteful, no exposed body parts.

Lighting: Bright clean morning bathroom daylight, soft reflections in mirror.
Color Palette: Brand Deep Wine (#653A57), Soft Rose (#E8B7B7), Pure White, Neutral Gray.
Composition: Medium portrait from the chest up, focused on facial nuance.
Suffixes: realistic clinical photography, high-fidelity textures, 8k --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, nudity, exposed breasts, fluids, graphic content.
```

### 4. Retracción o Hundimiento Reciente del Pezón o la Areola (`public/images/sintomas/retraccion-pezon.webp`)
```text
Photorealistic photo of an adult woman standing in front of a vanity mirror, buttoning up a stylish silk blouse and pausing mid-motion with a focused, observant look in her eyes as she notices a change in the mirror, tasteful editorial framing.

Lighting: Warm flattering vanity light with soft diffuse daylight from the side.
Color Palette: Brand Deep Wine (#653A57), Soft Rose (#E8B7B7), Champagne, Warm Wood.
Composition: Medium upper-body shot reflected in the vanity mirror, fully dressed.
Suffixes: realistic clinical photography, high-fidelity textures, 8k --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, nudity, exposed breasts, underwear.
```

### 5. Cambios en la Piel del Seno (Piel de Naranja, Enrojecimiento) (`public/images/sintomas/piel-naranja-mama.webp`)
```text
Close-up photorealistic shot of an open medical textbook on breast health and lymphatics resting on a clean wooden desk, with a specialist's reading glasses and stethoscope placed next to detailed anatomical charts, academic and clinical approach.

Lighting: Warm library study lighting with soft desk lamp glow.
Color Palette: Brand Deep Wine (#653A57), Soft Rose (#E8B7B7), Warm Oak Wood, Cream Paper.
Composition: Top-down diagonal still life on the clinical study desk.
Suffixes: high-fidelity clinical photography, depth of field, 8k --ar 16:9 --v 6.0
Negative Prompt: cartoon, CGI, text, watermark, signature, gruesome skin, open lesions, nudity.
```

### 6. Asimetría Mamaria o Cambio Rápido de Tamaño (`public/images/sintomas/asimetria-mamaria.webp`)
```text
Photorealistic shot of a woman trying on a tailored blazer in front of a dressing mirror, smoothing down the lapel while looking with slight concern at the garment's fit across the chest, fully clothed, dignified lifestyle framing.

Lighting: Soft warm boutique dressing room lighting.
Color Palette: Brand Deep Wine (#653A57) jacket, Soft Rose (#E8B7B7), Warm Cream, Neutral Ivory.
Composition: Medium three-quarter profile facing the mirror.
Suffixes: realistic clinical photography, high-fidelity textures, 8k --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, nudity, exposed breasts, underwear.
```

### 7. Sangrado Vaginal Anormal o Manchado Intermenstrual (`public/images/sintomas/sangrado-vaginal-anormal.webp`)
```text
Photorealistic photo of an adult woman sitting at a clean minimalist home office desk, looking with a concerned expression at her monthly digital calendar on a tablet while gently resting a hand on her lower abdomen, fully clothed in cozy sweater.

Lighting: Bright soft natural daylight from an adjacent window.
Color Palette: Brand Deep Wine (#653A57), Soft Rose (#E8B7B7) sweater, Pure White, Light Wood.
Composition: Medium shot framing the woman, the calendar tablet and her thoughtful posture.
Suffixes: realistic clinical photography, high-fidelity textures, 8k --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, blood, bodily fluids, graphic content.
```

### 8. Flujo Vaginal Inusual, Prurito o Mal Olor (`public/images/sintomas/flujo-vaginal-inusual.webp`)
```text
Photorealistic image of a woman sitting on the edge of a comfortable sofa holding an unopened box of prescribed feminine probiotics and a glass of pure water, reflecting health awareness, discreet home interior.

Lighting: Warm ambient home daylight, soft shadows.
Color Palette: Brand Deep Wine (#653A57), Soft Rose (#E8B7B7), Soft Gray, Linen Cream.
Composition: Medium close-up focusing on hands holding the glass and thoughtful expression.
Suffixes: realistic clinical photography, high-fidelity textures, 8k --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, nudity, discharge, graphic content.
```

### 9. Dolor Pélvico Crónico o Agudo en el Vientre Bajo (`public/images/sintomas/dolor-pelvico.webp`)
```text
Photorealistic photo of a woman sitting curled gently on a plush armchair, resting a warm ceramic mug and one hand against her lower abdomen with a subtle wince of discomfort, comforting living room atmosphere.

Lighting: Soft warm evening lamp lighting with cozy ambient shadows.
Color Palette: Brand Deep Wine (#653A57) throw blanket, Soft Rose (#E8B7B7), Warm Sand, Charcoal.
Composition: Medium shot focused on posture and hands pressing softly on lower abdomen.
Suffixes: realistic clinical photography, high-fidelity textures, 8k --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, nudity, agony, blood.
```

### 10. Dolor Durante las Relaciones Sexuales (Dispareunia) (`public/images/sintomas/dolor-relaciones-dispareunia.webp`)
```text
Photorealistic shot of a woman sitting thoughtfully on the edge of a bed in morning attire, looking toward a sunlit window with a contemplative and introspective expression, implying intimacy concerns, emotionally respectful and tasteful framing.

Lighting: Gentle morning sunbeam across the bedroom floor, soft atmospheric mood.
Color Palette: Brand Deep Wine (#653A57), Soft Rose (#E8B7B7) bed linens, Warm Ivory, Soft Beige.
Composition: Side medium profile capturing emotional depth and dignity, fully clothed.
Suffixes: realistic clinical photography, high-fidelity textures, 8k --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, nudity, explicit scenes, erotica.
```

### 11. Menstruaciones Muy Abundantes o Prolongadas (Menorragia) (`public/images/sintomas/menstruaciones-abundantes.webp`)
```text
Photorealistic shot of a woman in an office setting taking a brief pause at her desk, holding her head gently with one hand showing signs of mild fatigue, holding a warm beverage, conveying subtle anemia-related exhaustion without exaggeration.

Lighting: Clean daylight in modern corporate or home office.
Color Palette: Brand Deep Wine (#653A57), Soft Rose (#E8B7B7), Warm Slate, Clinical White.
Composition: Medium seated portrait from the chest up.
Suffixes: realistic clinical photography, high-fidelity textures, 8k --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, blood, sanitary pads, graphic content.
```

### 12. Retraso, Irregularidad o Ausencia del Periodo Menstrual (`public/images/sintomas/retraso-menstrual.webp`)
```text
Still-life photorealistic photo on a clean marble nightstand showing a minimalist modern wellness journal open to a monthly cycle tracker with hand-marked circles, alongside a stylish smartwatch and a delicate flower.

Lighting: Soft natural morning daylight, delicate cast shadows.
Color Palette: Brand Deep Wine (#653A57), Soft Rose (#E8B7B7), Marble White, Rose Gold.
Composition: Top-angle still-life perspective across the nightstand.
Suffixes: high-fidelity clinical photography, depth of field, 8k --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, messy notes, clutter.
```

### 13. Cólicos Menstruales Severos e Incapacitantes (Dismenorrea) (`public/images/sintomas/colicos-severos.webp`)
```text
Photorealistic photo of a woman resting on a cozy sofa wrapped in a soft knit blanket, pressing a hot water bottle wrapped in soft pink fleece against her lower abdomen with a peaceful sigh of relief.

Lighting: Warm gentle living room lamp lighting, cozy evening ambiance.
Color Palette: Brand Deep Wine (#653A57), Soft Rose (#E8B7B7) fleece, Cream Wool, Soft Gray.
Composition: Medium shot focused on the hot water bottle, hands, and resting posture.
Suffixes: realistic clinical photography, high-fidelity textures, 8k --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, nudity, agony, screaming.
```

### 14. Sensación de Bulto, Presión o Peso Vaginal (Prolapso) (`public/images/sintomas/sensacion-peso-vaginal.webp`)
```text
Photorealistic photo of an adult woman pausing while standing after carrying a bag of groceries, resting one hand against a kitchen counter and gently pressing her lower pelvis with a subtle look of pelvic heaviness, fully clothed.

Lighting: Natural bright afternoon kitchen light.
Color Palette: Brand Deep Wine (#653A57), Soft Rose (#E8B7B7), Warm Wood, Soft White.
Composition: Medium shot from the waist up, discreet and relatable posture.
Suffixes: realistic clinical photography, high-fidelity textures, 8k --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, nudity, exposed pelvis, graphic content.
```

### 15. Pérdida Involuntaria de Orina (Incontinencia Urinaria Femenina) (`public/images/sintomas/incontinencia-urinaria.webp`)
```text
Photorealistic shot of a woman in activewear pausing during an outdoor morning walk in a pleasant park, turning slightly to adjust her jacket with a momentary expression of self-conscious concern, healthy active lifestyle context.

Lighting: Fresh golden morning sunlight through trees, gentle flare.
Color Palette: Brand Deep Wine (#653A57) windbreaker, Soft Rose (#E8B7B7), Forest Green, Sand.
Composition: Medium full-body outdoor shot, natural movement.
Suffixes: realistic clinical photography, high-fidelity textures, 8k --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, wet clothing, embarrassing fluids, nudity.
```

### 16. Molestias, Ardor o Dolor al Orinar (Disuria) (`public/images/sintomas/ardor-al-orinar.webp`)
```text
Photorealistic photo of a woman in the bathroom standing near the washbasin, holding a clean glass of water and gently touching her lower abdomen with an expression of mild discomfort, bathroom clean and elegant.

Lighting: Bright clean morning bathroom light, soft tile reflections.
Color Palette: Brand Deep Wine (#653A57), Soft Rose (#E8B7B7), Ceramic White, Neutral Stone.
Composition: Medium shot from the waist up, focused on facial expression and posture.
Suffixes: realistic clinical photography, high-fidelity textures, 8k --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, toilet bowl, urine, nudity.
```

### 17. Náuseas y Vómitos Excesivos en el Embarazo (Hiperémesis) (`public/images/sintomas/nauseas-embarazo.webp`)
```text
Photorealistic shot of an expectant pregnant mother in early second trimester sitting by a bright kitchen table, holding a fresh glass of water with lemon and ginger slices, gently massaging her temple with an expression of weary patience.

Lighting: Crisp bright morning kitchen daylight, hopeful warmth.
Color Palette: Brand Deep Wine (#653A57), Soft Rose (#E8B7B7) dress, Citrus Yellow, Clean White.
Composition: Medium portrait showing subtle pregnant silhouette and thoughtful expression.
Suffixes: realistic clinical photography, high-fidelity textures, 8k --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, vomiting, sink, mess, distress.
```

### 18. Contracciones Tempranas, Dolor Abdominal o Salida de Líquido (`public/images/sintomas/contracciones-tempranas.webp`)
```text
Photorealistic photo of a third-trimester pregnant woman sitting comfortably on a nursery armchair, resting both hands gently on her belly while looking down attentively as if timing a Braxton-Hicks or early contraction, telephone within reach on table.

Lighting: Soft gentle nursery lighting with warm afternoon sunbeam.
Color Palette: Brand Deep Wine (#653A57) knitwear, Soft Rose (#E8B7B7), Warm Cream, Soft Wood.
Composition: Medium three-quarter profile focused on maternal hands on abdomen and clock.
Suffixes: realistic clinical photography, high-fidelity textures, 8k --ar 16:9 --v 6.0
Negative Prompt: cartoon, text, watermark, signature, CGI, hospital trauma, emergency chaos, panic.
```

---

## 👤 SECCIÓN 4: PROMPTS PARA FOTOGRAFÍA DE MARCA PERSONAL Y CONSULTORIO

### 1. Retrato Médico Principal — Hero (`public/images/doctor-hero.webp`)
```text
Editorial medical portrait of a distinguished Hispanic male gynecologist and breast surgeon in his late 30s with a warm, empathetic and reassuring expression. He is wearing a tailored modern dark wine-plum scrubs top under an open pristine white doctor coat with a minimalist stethoscope draped around his neck. Modern high-end private medical consultation room in the background with soft rose-gold and deep wine accents, natural window light from the side, clean architectural lines, depth of field, 85mm lens portrait.

Lighting: Soft luxury studio sidelight combined with natural window daylight, gentle shadow contouring.
Color Palette: Brand Deep Wine (#653A57), Soft Rose (#E8B7B7), Pristine White, Brushed Silver.
Composition: Three-quarter upper-body editorial portrait, direct confident and kind eye contact.
Suffixes: realistic medical photography, 85mm lens, 8k resolution, depth of field, Hasselblad medium format --ar 16:9 --v 6.0
Negative Prompt: cartoon, CGI, 3D render, text, watermark, harsh shadows, unnatural skin smoothing, fake smile, stethoscope tangled.
```

### 2. Fotografía Editorial de Trayectoria y Semblanza — About (`public/images/doctor-about.webp`)
```text
Professional medium shot of a specialist male surgeon in a spotless white coat reviewing high-resolution digital breast ultrasound scans and mammography dossier on a dual medical diagnostic monitor in a high-tech clinic office. Soft ambient lighting, clean aesthetic, authoritative and compassionate atmosphere, ultra-detailed medical interior.

Lighting: Balanced clinical studio lighting with soft glow from diagnostic screens on the doctor's profile.
Color Palette: Brand Deep Wine (#653A57), Soft Rose (#E8B7B7), High-Tech Slate Blue, White.
Composition: Medium profile shot of the doctor interacting with diagnostic workstation.
Suffixes: high-fidelity clinical photography, depth of field, 8k, cinematic editorial --ar 16:9 --v 6.0
Negative Prompt: cartoon, CGI, text, watermark, signature, messy desk, outdated CRT monitors, plastic look.
```

### 3. Suite Médica y Consultorio de Especialidades (`public/images/consultorio-suite.webp`)
```text
Architectural interior photograph of a private luxury gynecological and breast health consultation suite in Tuxtla Gutiérrez, featuring modern ergonomic examination furniture, digital ultrasound workstation, physician desk with fresh blush florals, and comfortable patient seating.

Lighting: Warm architectural cove lighting combined with abundant natural daylight through expansive windows.
Color Palette: Brand Deep Wine (#653A57), Soft Rose (#E8B7B7), Warm Cream (#FAF7F5), Polished Marble, Champagne Gold.
Composition: Wide-angle architectural perspective showcasing calm, dignified and spotless medical luxury.
Suffixes: architectural interior photography, 8k, ultra-realistic, Hasselblad medium format --ar 16:9 --v 6.0
Negative Prompt: cartoon, CGI, text, watermark, cluttered cords, hospital chaos, dirty floor, dim lighting.
```
