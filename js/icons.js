
const Icons = (() => {
    const registry = new Map();
    const SVG_NS = "http://www.w3.org/2000/svg";

    function register(name, paths, viewBox = "0 0 24 24") {
        registry.set(name, { paths, viewBox });
    }

    function create(name) {
        const icon = registry.get(name);

        if (!icon) {
            console.warn(`[Icons] Unknown icon: "${name}"`);
            return null;
        }

        const svg = document.createElementNS(SVG_NS, "svg");

        svg.setAttribute("xmlns", SVG_NS);
        svg.setAttribute("viewBox", icon.viewBox);
        //svg.setAttribute("aria-hidden", "true");
        //svg.setAttribute("focusable", "false");
        svg.setAttribute("width", 24);
        svg.setAttribute("height", 24);
        svg.setAttribute("fill", "none");
        svg.setAttribute("stroke", "currentColor");
        svg.setAttribute("stroke-width", 2);
        svg.setAttribute("stroke-linecap", "round");
        svg.setAttribute("stroke-linejoin", "round");
        svg.setAttribute("class", `lucide lucide-${name} preview-icon`);
        //<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shrimp preview-icon"><path d="M10 2a3.28 3.28 0 003.227 1.798l6.17-.561A1 1 0 1119.614 8H8.5a6.44 6.44 0 00-5.63 9.75A6.5 6.5 0 008.5 21c1.38 0 2-.5 2.5-1"/><path d="M10 8a8.5 8.5 0 000 8"/><path d="M11 22c-.5-.5-1.12-1-2.5-1a1 1 0 010-5H12a7 7 0 007-7V8"/><path d="M13 12h.01"/><path d="M8 16c-2 0-4.5-4-4-6"/></svg>

        icon.paths.forEach(pathData => {
            if (typeof pathData === "string" && pathData.trim().startsWith("<path")) {
                const parser = new DOMParser();
                const parsed = parser.parseFromString(
                    `<svg xmlns="${SVG_NS}">${pathData}</svg>`,
                    "image/svg+xml"
                );

                const SVG_ELEMENTS = [
                    "path",
                    "rect",
                    "circle",
                    "ellipse",
                    "line",
                    "polyline",
                    "polygon"
                ];
                
                icon.paths.forEach(element => {
                    const parser = new DOMParser();
                
                    const parsed = parser.parseFromString(
                        `<svg xmlns="${SVG_NS}">${element}</svg>`,
                        "image/svg+xml"
                    );
                
                    SVG_ELEMENTS.forEach(tag => {
                        parsed.querySelectorAll(tag).forEach(node => {
                            svg.appendChild(document.importNode(node, true));
                        });
                    });
                });

                return;
            }

            const path = document.createElementNS(SVG_NS, "path");

            path.setAttribute("d", pathData);
            path.setAttribute("fill", "currentColor");

            svg.appendChild(path);
        });

        return svg;
    }

    function render(element) {
        const name = element.dataset.icon;

        if (!name || element.dataset.iconRendered === "true") {
            return;
        }

        const svg = create(name);

        if (!svg) return;

        element.replaceChildren(svg);
        element.dataset.iconRendered = "true";
    }

    function renderAll(root = document) {
        if (root.matches?.("[data-icon]")) {
            render(root);
        }

        root.querySelectorAll?.("[data-icon]").forEach(render);
    }

    function observe() {
        const observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        renderAll(node);
                    }
                });
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    //<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shrimp preview-icon"><path d="M10 2a3.28 3.28 0 003.227 1.798l6.17-.561A1 1 0 1119.614 8H8.5a6.44 6.44 0 00-5.63 9.75A6.5 6.5 0 008.5 21c1.38 0 2-.5 2.5-1"/><path d="M10 8a8.5 8.5 0 000 8"/><path d="M11 22c-.5-.5-1.12-1-2.5-1a1 1 0 010-5H12a7 7 0 007-7V8"/><path d="M13 12h.01"/><path d="M8 16c-2 0-4.5-4-4-6"/></svg>
    // Dolphin icon
    register("shrimp", [
        '<path d="M10 2a3.28 3.28 0 003.227 1.798l6.17-.561A1 1 0 1119.614 8H8.5a6.44 6.44 0 00-5.63 9.75A6.5 6.5 0 008.5 21c1.38 0 2-.5 2.5-1"/>',
        '<path d="M10 8a8.5 8.5 0 000 8"/>',
        '<path d="M11 22c-.5-.5-1.12-1-2.5-1a1 1 0 010-5H12a7 7 0 007-7V8"/>',
        '<path d="M13 12h.01"/>',
        '<path d="M8 16c-2 0-4.5-4-4-6"/><'
    ]);

    register("keyboard", [
        '<path d="M10 8h.01"/>',
        '<path d="M12 12h.01"/>',
        '<path d="M14 8h.01"/>',
        '<path d="M16 12h.01"/>',
        '<path d="M18 8h.01"/>',
        '<path d="M6 8h.01"/>',
        '<path d="M7 16h10"/>',
        '<path d="M8 12h.01"/>',
        '<rect width="20" height="16" x="2" y="4" rx="2"/>'
    ]);

    register("mouse", [
        '<rect x="5" y="2" width="14" height="20" rx="7"/>',
        '<path d="M12 6v4"/>'
    ]);

    return {
        register,
        create,
        render,
        renderAll,
        observe
    };
})();

function initializeIcons() {
    Icons.renderAll();
    Icons.observe();
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeIcons);
} else {
    initializeIcons();
}
