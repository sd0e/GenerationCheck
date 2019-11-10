function findGeneration() {
    input = document.getElementById('yearInput').value;
    if (input > 1889 && input < 1902) {
        document.getElementById('generation').innerHTML = "The Lost Generation";
        document.getElementById('yearGroups').innerHTML = "(1890 - 1901)";
    } else if (input > 1913 && input < 1916) {
        document.getElementById('generation').innerHTML = "The Lost Generation & The Greatest Generation";
        document.getElementById('yearGroups').innerHTML = "(1914 - 1915)";
    } else if (input > 1900 && input < 1910) {
        document.getElementById('generation').innerHTML = "The Interbellum Generation & The Lost Generation";
        document.getElementById('yearGroups').innerHTML = "(1901 - 1913)";
    } else if (input > 1909 && input < 1914) {
        document.getElementById('generation').innerHTML = "The Interbellum Generation & The Lost Generation & The Greatest Generation";
        document.getElementById('yearGroups').innerHTML = "(1910 - 1913)";
    } else if (input > 1915 && input < 1925) {
        document.getElementById('generation').innerHTML = "The Greatest Generation";
        document.getElementById('yearGroups').innerHTML = "(1916 - 1924)";
    } else if (input > 1924 && input < 1946) {
        document.getElementById('generation').innerHTML = "The Silent Generation";
        document.getElementById('yearGroups').innerHTML = "(1925 - 1945)";
    } else if (input > 1945 && input < 1965) {
        document.getElementById('generation').innerHTML = "Baby Boomer Generation (OK Boomer)";
        document.getElementById('yearGroups').innerHTML = "(1946 - 1964)";
    } else if (input > 1964 && input < 1975) {
        document.getElementById('generation').innerHTML = "Generation X (Baby Bust)";
        document.getElementById('yearGroups').innerHTML = "(1965 - 1974)";
    } else if (input > 1974 && input < 1980) {
        document.getElementById('generation').innerHTML = "Generation X (Baby Bust) & Xennial";
        document.getElementById('yearGroups').innerHTML = "(1975 - 1979)";
    } else if (input > 1979 && input < 1986) {
        document.getElementById('generation').innerHTML = "Millenial (Generation Y) & Xennial";
        document.getElementById('yearGroups').innerHTML = "(1980 - 1985)";
    } else if (input > 1985 && input < 1995) {
        document.getElementById('generation').innerHTML = "Millenial (Generation Y)";
        document.getElementById('yearGroups').innerHTML = "(1980 - 1994)";
    } else if (input > 1994 && input < 2013) {
        document.getElementById('generation').innerHTML = "Generation Z";
        document.getElementById('yearGroups').innerHTML = "(1995 - 2012)";
    } else if (input > 2012 && input < 2026) {
        document.getElementById('generation').innerHTML = "Gen Alpha";
        document.getElementById('yearGroups').innerHTML = "(2013 - 2025)";
    } else {
        document.getElementById('generation').innerHTML = "Hmm, you don't seem to exist!";
        document.getElementById('yearGroups').innerHTML = "Try again and make sure the year was entered correctly.";
    };
    document.getElementById('generationDiv').style.display = "block";
}