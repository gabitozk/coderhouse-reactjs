import { useEffect, useState } from "react"
import { getFirestore } from "../firebase";

export const useDataFromFirestore = (nameCollection) => {
    const [data, setData] = useState([]);
    const [isLoad, setIsLoad] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = db.collection(nameCollection);    
        
        const getDataFromFirestore = async () => {
            try {
                const response = await itemsCollection.get();
                if(response.empty) console.log("No hay items");
                setData(response.docs.map((doc) => ({...doc.data(), id: doc.id})));
            } catch (err) {
                setError(err);
            } finally {
                setIsLoad(false);
            }
        }

        getDataFromFirestore();

        return data;
    
    }, [nameCollection, data]);
}

