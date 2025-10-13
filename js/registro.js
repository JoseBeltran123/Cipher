// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getFirestore, collection, addDoc, doc, Timestamp, getDocs, query, where} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0gT4C0SOKmIeaulQjW1oh7YjrplWwQ10",
  authDomain: "cipher-3bdc7.firebaseapp.com",
  projectId: "cipher-3bdc7",
  storageBucket: "cipher-3bdc7.firebasestorage.app",
  messagingSenderId: "532286032747",
  appId: "1:532286032747:web:aa9a1ab4737c51ee3a1a2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// //FUNCION PARA AGREGAR REGISTRO A LA TABLA DE APARTADOS
// async function agregarApartado() {
//     const coleccionSalas = "salas";
//     const idSala = "Kz6BRWR99Oo82loYs65i";
//     const referenciaSala = doc(db, coleccionSalas, idSala);

//     try {
//         const docRef = await addDoc(collection(db, "apartados"), {
//             sala: referenciaSala,
//             nombre: "Luis Mendez",
//             fecha: Timestamp.fromDate(new Date("December 10, 1815")),
//         });
//         console.log("Documento escrito con ID: ", docRef.id);
//     } catch (e) {
//         console.error("Error al añadir documento: ", e);
//     }
// }

async function obtenerSalas() {
    console.log("\n--- Obteniendo Salas de Firestore y Asignando IDs al HTML ---");
    try {
        // Crear y ejecutar la consulta a la colección "salas"
        const q = query(collection(db, "salas"));
        const querySnapshot = await getDocs(q);
        
        // Usaremos un índice incremental (1, 2, 3...) para mapear 
        // los documentos a los IDs genéricos de tu HTML.
        let index = 1; 

        querySnapshot.forEach((documento) => {
            const data = documento.data();
            
            // Buscar el elemento HTML por su ID (ej: '1', '2')
            const elementoHtml = document.getElementById(index.toString());

            if (elementoHtml) {
                // 1. Asignar el ID real de Firestore a un atributo personalizado
                //    Esto es crucial para que sepas qué sala de Firebase representa el DIV.
                elementoHtml.setAttribute('data-firebase-id', documento.id);
          
            } else {
                console.warn(`Advertencia: No se encontró el elemento HTML con ID: ${index}. 
                             Se esperan IDs '1', '2', '3', etc.`);
            }

            index++;
        });
        
    } catch (e) {
        console.error("Error al obtener documentos de Salas: ", e);
    }
}

obtenerSalas();
// agregarApartado();
