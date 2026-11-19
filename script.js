/* =========================================================
   LÓGICA INTERACTIVA - PORTAFOLIO DE NAHIR
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

    // 1. EFECTO DE ESCRITURA EN EL HERO (Typewriter Effect)
    const phrases = [
        "Pensamiento lógico y metódico.",
        "Aprendiendo Python desde cero con pasión.",
        "Futura estudiante de Ingeniería en Sistemas.",
        "Aspirante a especialista en Ciberseguridad."
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typedElement = document.getElementById('typed-text');

    function typeWriter() {
        if (!typedElement) return;
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            typedElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typedElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 35 : 75;

        if (!isDeleting && charIndex === currentPhrase.length) {
            typeSpeed = 1800; // Pausa al terminar de escribir la frase
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeSpeed = 400; // Pausa antes de iniciar la siguiente
        }

        setTimeout(typeWriter, typeSpeed);
    }
    typeWriter();


    // 2. INSPECCIÓN DE CÓDIGO EN HERO
    const runHeroCodeBtn = document.getElementById('run-hero-code');
    const heroCodeOutput = document.getElementById('hero-code-output');

    if (runHeroCodeBtn && heroCodeOutput) {
        runHeroCodeBtn.addEventListener('click', () => {
            heroCodeOutput.classList.remove('hidden');
            heroCodeOutput.innerHTML = `
                <div class="text-slate-400">>>> nahir = Desarrolladora()</div>
                <div class="text-slate-400">>>> print(nahir.nombre, "|", nahir.metodologia)</div>
                <div class="text-emerald-400 font-bold font-mono">Nahir | Altamente lógica y metódica</div>
                <div class="text-slate-400 mt-1">>>> print(nahir.potencial())</div>
                <div class="text-cyan-300 font-mono">"En constante expansión de conocimiento 🚀"</div>
                <div class="text-purple-400 mt-1">[STATUS]: Objeto instanciado con éxito en memoria.</div>
            `;
            runHeroCodeBtn.innerHTML = `<i data-lucide="check" class="w-3.5 h-3.5"></i> Inspección completada`;
            lucide.createIcons();
        });
    }


    // 3. PESTAÑAS DEL LABORATORIO INTERACTIVO
    const tabBtns = document.querySelectorAll('.lab-tab-btn');
    const tabContents = document.querySelectorAll('.lab-tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');

            tabBtns.forEach(b => {
                b.classList.remove('active', 'text-cyan-400', 'bg-slate-800');
                b.classList.add('text-slate-400');
            });
            btn.classList.add('active', 'text-cyan-400', 'bg-slate-800');
            btn.classList.remove('text-slate-400');

            tabContents.forEach(content => {
                content.classList.add('hidden');
                content.classList.remove('block');
            });

            const activeContent = document.getElementById(`tab-${targetTab}`);
            if (activeContent) {
                activeContent.classList.remove('hidden');
                activeContent.classList.add('block');
            }
        });
    });


    // 4. TERMINAL CLI INTERACTIVA
    const terminalOutput = document.getElementById('terminal-output');
    const terminalInput = document.getElementById('terminal-input');
    const sendCmdBtn = document.getElementById('send-cmd-btn');
    const clearTermBtn = document.getElementById('clear-term-btn');
    const quickCmdBtns = document.querySelectorAll('.quick-cmd');

    const commands = {
        help: `
            <div class="text-cyan-400 font-bold mb-1">[COMANDOS DISPONIBLES]:</div>
            <div class="grid grid-cols-2 gap-1 text-slate-300">
                <div><span class="text-emerald-400">help</span> : Muestra esta ayuda</div>
                <div><span class="text-emerald-400">about</span> : Historia y por qué elegí programar</div>
                <div><span class="text-emerald-400">skills</span> : Habilidades lógicas y lenguajes actuales</div>
                <div><span class="text-emerald-400">goals</span> : Metas a corto y mediano plazo</div>
                <div><span class="text-emerald-400">roadmap</span> : Ruta hacia Ingeniería y Ciberseguridad</div>
                <div><span class="text-emerald-400">projects</span> : Estado de proyectos y prácticas</div>
                <div><span class="text-emerald-400">matrix</span> : Mensaje de ciberseguridad</div>
                <div><span class="text-emerald-400">contacto</span> : Información para conectar con Nahir</div>
                <div><span class="text-emerald-400">clear</span> : Limpia la pantalla de la terminal</div>
            </div>
        `,
        about: `
            <div class="text-amber-300 font-bold">[HISTORIA DE NAHIR]:</div>
            <p class="text-slate-300 leading-relaxed">
                En el curso donde estoy inscrita nos enseñaron muchos temas y debíamos elegir el que más nos gustara.
                Elegí <span class="text-cyan-300 font-bold">programación</span> porque me pareció súper entretenida y descubrí que tengo facilidad natural para ella.
                Mi forma de pensar es 100% lógica y metódica.
            </p>
        `,
        skills: `
            <div class="text-emerald-400 font-bold">[HABILIDADES & STACK]:</div>
            <p><span class="text-cyan-300 font-semibold">• Python:</span> Variables, bucles, condicionales, funciones y algoritmos básicos (en curso activo).</p>
            <p><span class="text-amber-300 font-semibold">• Scratch:</span> Pensamiento algorítmico por bloques, lógica espacial y secuencial.</p>
            <p><span class="text-purple-300 font-semibold">• Soft Skill Clave:</span> Descomposición metódica de problemas complejos en pasos lógicos.</p>
        `,
        goals: `
            <div class="text-purple-400 font-bold">[METAS TÉCNICAS]:</div>
            <p>1. Expandir exponencialmente mi dominio de la programación durante los próximos meses del curso.</p>
            <p>2. Sentar las bases para estudiar la carrera universitaria de <span class="text-emerald-400 font-semibold">Ingeniería en Sistemas</span>.</p>
            <p>3. Especializarme en <span class="text-cyan-300 font-semibold">Ciberseguridad</span> y defensa de sistemas.</p>
        `,
        roadmap: `
            <div class="text-cyan-300 font-bold">[MAPA DE APRENDIZAJE]:</div>
            <p class="text-slate-300">[1] Scratch & Lógica -> <span class="text-emerald-400">[Completado]</span></p>
            <p class="text-slate-300">[2] Python Fundamentals -> <span class="text-cyan-400">[En progreso actual]</span></p>
            <p class="text-slate-300">[3] POO y Estructuras -> <span class="text-amber-400">[Siguiente módulo]</span></p>
            <p class="text-slate-300">[4] Redes & Linux -> <span class="text-purple-400">[Mediano plazo]</span></p>
            <p class="text-slate-300">[5] Ing. en Sistemas & Ciberseguridad -> <span class="text-emerald-400">[Meta profesional]</span></p>
        `,
        projects: `
            <div class="text-amber-300 font-bold">[PROYECTOS]:</div>
            <p class="text-slate-300">• Algoritmos de lógica en Python (ejercicios y validadores)</p>
            <p class="text-slate-300">• Modelado lógico y prototipos en Scratch</p>
            <p class="text-slate-300">• Identidad visual & Logo empresarial: Nahir Pérez Programadora</p>
            <p class="text-slate-400 italic">• Espacios modulares reservados en este portafolio para nuevos proyectos.</p>
        `,
        matrix: `
            <div class="text-emerald-400 font-mono">
                [+] ACCESO CONCEDIDO A LA MATRIZ DE SEGURIDAD...<br>
                "La curiosidad es la llave; la disciplina lógica es el cerrojo."<br>
                Seguridad informática no es solo código: es entender la mente de quien crea y de quien ataca.
            </div>
        `,
        contacto: `
            <div class="text-cyan-400 font-bold">[CANAL DE CONTACTO]:</div>
            <p class="text-slate-300">Desplázate a la sección final del portafolio o envía tus comentarios directamente a través del formulario de transmisión del sistema.</p>
        `
    };

    function executeCommand(rawCmd) {
        const cmd = rawCmd.trim().toLowerCase();
        if (!cmd) return;

        // Añadir el comando escrito por el usuario
        const userLine = document.createElement('div');
        userLine.className = 'text-slate-400 flex items-center gap-2 term-line-enter';
        userLine.innerHTML = `<span class="text-emerald-400 font-bold">nahir@terminal:~$</span> <span class="text-white">${rawCmd}</span>`;
        terminalOutput.appendChild(userLine);

        // Procesar comando
        const responseLine = document.createElement('div');
        responseLine.className = 'my-1 term-line-enter';

        if (cmd === 'clear') {
            terminalOutput.innerHTML = '';
            terminalInput.value = '';
            return;
        } else if (commands[cmd]) {
            responseLine.innerHTML = commands[cmd];
        } else if (cmd === 'sudo' || cmd.startsWith('sudo')) {
            responseLine.innerHTML = `<span class="text-rose-400">[ALERTA]: El usuario 'nahir' tiene privilegios en modo aprendizaje. No necesitas sudo para explorar.</span>`;
        } else {
            responseLine.innerHTML = `<span class="text-rose-400">Comando no reconocido: '${rawCmd}'. Escribe <span class="text-cyan-300 underline font-bold cursor-pointer" onclick="document.getElementById('terminal-input').value='help'; document.getElementById('send-cmd-btn').click();">'help'</span> para ver la lista.</span>`;
        }

        terminalOutput.appendChild(responseLine);
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
        terminalInput.value = '';
    }

    if (sendCmdBtn && terminalInput) {
        sendCmdBtn.addEventListener('click', () => {
            executeCommand(terminalInput.value);
        });

        terminalInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                executeCommand(terminalInput.value);
            }
        });
    }

    if (clearTermBtn) {
        clearTermBtn.addEventListener('click', () => {
            terminalOutput.innerHTML = `
                <p class="text-emerald-400">Terminal reiniciada. Escribe <span class="text-cyan-300 font-bold">'help'</span> para opciones.</p>
            `;
        });
    }

    quickCmdBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const cmd = btn.getAttribute('data-cmd');
            if (cmd) executeCommand(cmd);
        });
    });


    // 5. EJECUTOR PYTHON SIMULADO
    const runPyScriptBtn = document.getElementById('run-py-script-btn');
    const pyOutput = document.getElementById('py-output');

    if (runPyScriptBtn && pyOutput) {
        runPyScriptBtn.addEventListener('click', () => {
            pyOutput.innerHTML = `<span class="text-cyan-400 animate-pulse">Compilando e interpretando script Python...</span>`;
            
            setTimeout(() => {
                pyOutput.innerHTML = `
                    <div class="text-emerald-400">[+] Iniciando análisis para Nahir...</div>
                    <div class="text-slate-400 mt-1">> Evaluando condicional (gusto == "programación"): <span class="text-emerald-300">True</span></div>
                    <div class="text-slate-400">> Evaluando enfoque (enfoque == "lógica"): <span class="text-emerald-300">True</span></div>
                    <div class="text-amber-300 mt-2 font-bold">> Resultado del diccionario retornado:</div>
                    <div class="pl-3 text-cyan-300 border-l border-cyan-800">
                        {<br>
                        &nbsp;&nbsp;'estado': 'Talento confirmado',<br>
                        &nbsp;&nbsp;'ruta': 'Ingeniería en Sistemas',<br>
                        &nbsp;&nbsp;'especialidad': 'Ciberseguridad'<br>
                        }
                    </div>
                    <div class="text-emerald-400 mt-2 font-semibold font-mono">Process finished with exit code 0.</div>
                `;
            }, 600);
        });
    }


    // 6. MÓDULO CRIPTOGRÁFICO DE CIBERSEGURIDAD
    const cryptoInput = document.getElementById('crypto-input');
    const cryptoShift = document.getElementById('crypto-shift');
    const shiftVal = document.getElementById('shift-val');
    const cryptoOutput = document.getElementById('crypto-output');
    const cryptoHash = document.getElementById('crypto-hash');

    function updateCrypto() {
        if (!cryptoInput || !cryptoShift || !cryptoOutput || !cryptoHash) return;
        const text = cryptoInput.value || "";
        const shift = parseInt(cryptoShift.value, 10);
        shiftVal.textContent = shift;

        // Cifrado César simple
        let encrypted = "";
        for (let i = 0; i < text.length; i++) {
            let charCode = text.charCodeAt(i);
            // Letras mayúsculas
            if (charCode >= 65 && charCode <= 90) {
                encrypted += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
            }
            // Letras minúsculas
            else if (charCode >= 97 && charCode <= 122) {
                encrypted += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
            } else {
                encrypted += text.charAt(i);
            }
        }
        cryptoOutput.textContent = encrypted || "[Texto vacío]";

        // Pseudo hash hexadecimal simulado para ilustrar ciberseguridad
        let hash = 0;
        for (let i = 0; i < text.length; i++) {
            hash = ((hash << 5) - hash) + text.charCodeAt(i);
            hash |= 0;
        }
        const pseudoHex = Math.abs(hash).toString(16).padStart(8, '0');
        const fakeSha = `0x${pseudoHex}9f2c${(shift * 1234).toString(16)}e7b1a45...[sha256-demo]`;
        cryptoHash.textContent = fakeSha;
    }

    if (cryptoInput && cryptoShift) {
        cryptoInput.addEventListener('input', updateCrypto);
        cryptoShift.addEventListener('input', updateCrypto);
        updateCrypto();
    }


    // 7. FORMULARIO DE CONTACTO SIMULADO
    const contactForm = document.getElementById('contact-form');
    const contactAlert = document.getElementById('contact-alert');

    if (contactForm && contactAlert) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('contact-name').value;
            contactAlert.classList.remove('hidden');
            contactAlert.innerHTML = `
                ✅ <strong>[TRANSMISIÓN EXITOSA]:</strong> ¡Gracias, <strong>${name}</strong>! Tu mensaje ha sido registrado exitosamente en la consola de Nahir.
            `;
            contactForm.reset();
            setTimeout(() => {
                contactAlert.classList.add('hidden');
            }, 6000);
        });
    }


    // 8. FONDO DE LLUVIA DE CÓDIGO MATRIX EN CANVAS
    const canvas = document.getElementById('matrix-canvas');
    let matrixActive = true;
    const toggleCanvasBtn = document.getElementById('toggle-canvas-btn');

    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        });

        const chars = '01';
        const fontSize = 14;
        const columns = Math.floor(width / fontSize);
        const drops = [];

        for (let i = 0; i < columns; i++) {
            drops[i] = Math.floor(Math.random() * -50);
        }

        function drawMatrix() {
            if (!matrixActive) return;

            ctx.fillStyle = 'rgba(9, 13, 22, 0.08)';
            ctx.fillRect(0, 0, width, height);

            ctx.fillStyle = '#00f2fe';
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = chars.charAt(Math.floor(Math.random() * chars.length));
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
            requestAnimationFrame(drawMatrix);
        }

        drawMatrix();

        if (toggleCanvasBtn) {
            toggleCanvasBtn.addEventListener('click', () => {
                matrixActive = !matrixActive;
                if (matrixActive) {
                    toggleCanvasBtn.innerHTML = `<i data-lucide="sparkles" class="w-3.5 h-3.5"></i> <span class="hidden sm:inline">Efectos: ON</span>`;
                    canvas.style.opacity = '0.2';
                    drawMatrix();
                } else {
                    toggleCanvasBtn.innerHTML = `<i data-lucide="sparkles" class="w-3.5 h-3.5"></i> <span class="hidden sm:inline">Efectos: OFF</span>`;
                    canvas.style.opacity = '0';
                    ctx.clearRect(0, 0, width, height);
                }
                lucide.createIcons();
            });
        }
    }

    // 8. MODAL VISOR DE IMAGEN (PROYECTOS)
    const imageModal = document.getElementById('image-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const modalImg = document.getElementById('image-modal-img');
    const modalTitle = document.getElementById('image-modal-title');
    const modalLink = document.getElementById('image-modal-link');

    window.openImageModal = function(src, title) {
        if (!imageModal) return;
        if (modalImg) modalImg.src = src;
        if (modalTitle) modalTitle.innerHTML = `<i data-lucide="image" class="w-4 h-4"></i> ${title || 'Vista Previa'}`;
        if (modalLink) modalLink.href = src;
        imageModal.classList.remove('hidden');
        imageModal.classList.add('flex');
        if (window.lucide) lucide.createIcons();
    };

    window.closeImageModal = function() {
        if (!imageModal) return;
        imageModal.classList.add('hidden');
        imageModal.classList.remove('flex');
    };

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', window.closeImageModal);
    }

    if (imageModal) {
        imageModal.addEventListener('click', (e) => {
            if (e.target === imageModal) {
                window.closeImageModal();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            window.closeImageModal();
        }
    });

});
