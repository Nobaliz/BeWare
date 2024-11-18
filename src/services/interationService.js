
import { getDatabase, ref, set, get, child } from 'firebase/database';

// Función para escribir datos en Firebase
export const escribirDatosEnFirebase = (ruta, datos) => {
  const db = getDatabase();
  const referencia = ref(db, `${ruta}/${Date.now()}`); // Guarda cada registro con un timestamp único
  set(referencia, datos)
    .then(() => {
      console.log('Datos escritos correctamente en Firebase');
    })
    .catch((error) => {
      console.error('Error al escribir en Firebase:', error);
    });
};

// Función para leer datos de Firebase
export const leerDatosDeFirebase = (ruta) => {
  const db = getDatabase();
  const dbRef = ref(db);
  return get(child(dbRef, ruta))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        console.log('No se encontraron datos');
        return null;
      }
    })
    .catch((error) => {
      console.error('Error al leer datos de Firebase:', error);
      throw error;
    });
};