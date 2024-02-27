
    document.addEventListener('DOMContentLoaded', function () {
        let type = new Typed('#text', {
            strings: ['Front-end developer', 'Java developer'],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,
        });

        document.getElementById("downloadResume").addEventListener("click", function () {
            const resumePath = "../portfolio/ARUNA S.pdf";

            const a = document.createElement("a");
            a.href = resumePath;
            a.download = "YourResume.pdf";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        });
    });

    function toggleSection(sectionId) {
        var sections = ["home", "about", "skills", "portfolio", "contact"];
        for (var i = 0; i < sections.length; i++) {
            var section = document.getElementById(sections[i]);
            section.style.display = (sections[i] === sectionId) ? "flex" : "none";
        }
    }
