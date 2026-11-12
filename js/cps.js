const TEST_DURATION = 5000;

        const arena = document.getElementById("arena");
        const timer = document.getElementById("timer");
        const clicksDisplay = document.getElementById("clicks");

        const arenaCounter = document.getElementById("arenaCounter");
        const arenaText = document.getElementById("arenaText");

        const result = document.getElementById("result");
        const resultCps = document.getElementById("resultCps");
        const resultClicks = document.getElementById("resultClicks");

        const restartButton = document.getElementById("restart");

        let clicks = 0;
        let startTime = 0;
        let endTime = 0;

        let interval = null;
        let running = false;
        let finished = false;


        function startTest() {
            if (running || finished) return;

            running = true;
            startTime = performance.now();

            arena.classList.add("is-running");

            arenaText.textContent = "Keep clicking!";
            arenaCounter.textContent = "0";

            result.classList.remove("is-visible");

            updateTimer();

            interval = setInterval(updateTimer, 10);
        }


        function registerClick() {
            if (finished) return;

            if (!running) {
                startTest();
            }

            if (!running) return;

            clicks++;

            clicksDisplay.textContent = clicks;
            arenaCounter.textContent = clicks;

            updateTimer();
        }


        function updateTimer() {
            if (!running) return;

            const elapsed = performance.now() - startTime;
            const remaining = Math.max(0, TEST_DURATION - elapsed);

            timer.textContent = (remaining / 1000).toFixed(2) + "s";

            if (remaining <= 0) {
                finishTest();
            }
        }


        function finishTest() {
            if (!running) return;

            running = false;
            finished = true;

            endTime = performance.now();

            clearInterval(interval);

            timer.textContent = "0.00s";

            arena.classList.remove("is-running");
            arena.classList.add("is-finished");

            arenaText.textContent = "Test completed!";

            const actualDuration = (endTime - startTime) / 1000;
            const cps = clicks / actualDuration;

            resultCps.textContent = cps.toFixed(2);
            resultClicks.textContent = clicks;

            result.classList.add("is-visible");
        }


        function resetTest() {
            clearInterval(interval);

            clicks = 0;
            startTime = 0;
            endTime = 0;

            running = false;
            finished = false;

            timer.textContent = "5.00s";
            clicksDisplay.textContent = "0";
            arenaCounter.textContent = "0";

            arenaText.textContent = "Click here to start";

            arena.classList.remove("is-running", "is-finished");

            result.classList.remove("is-visible");
        }


        arena.addEventListener("click", registerClick);

        arena.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                registerClick();
            }
        });

        restartButton.addEventListener("click", resetTest);