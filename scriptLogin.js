// Código del carrusel
let currentIndex = 0;
const images = document.querySelectorAll(".carousel-image");

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.toggle("active", i === index);
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

setInterval(nextImage, 3000);

// Cargar Firebase de manera asíncrona
(async () => {
    const { initializeApp } = await import("https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js");
    const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } = await import("https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js");
    const { getFirestore, collection, addDoc } = await import("https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js");

    // Configuración de Firebase
    const firebaseConfig = {
        // Tu configuración de Firebase aquí
    };

    // Inicializar Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getFirestore(app);
})();