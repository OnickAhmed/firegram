import { useEffect, useState } from "react";
import { projectFireStore } from "../Firebase/config";

const useFireStore = (collection) => {
  const [docs, setDocs] = useState([]);
  useEffect(() => {
    const unSub = projectFireStore
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
      });
    //Cleanup Function - that is blanks the function so than when its not in use it wil be free
    return () => unSub();
  }, [collection]);
  return { docs };
};

export default useFireStore;
