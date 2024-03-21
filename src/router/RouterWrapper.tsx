import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { unloggedRouter, loggedRouter } from "./router";
import { onAuthStateChanged } from "firebase/auth";
import { auth, usersCollection } from "../firebase";
import { getDocs, query, where } from "firebase/firestore";
import { useUser } from "../contexts/User";

const RouterWrapper = () => {
  const [currentRouter, setCurrentRouter] = useState(unloggedRouter);
  const { login, logout, isLogged } = useUser();

  useEffect(() => {
    onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const userSnapshot = await getDocs(
          query(usersCollection, where("id", "==", firebaseUser.uid))
        );
        login(userSnapshot.docs[0].data());
        setCurrentRouter(loggedRouter);
      } else {
        if (isLogged) {
          logout();
        }

        setCurrentRouter(unloggedRouter);
      }
    });
  }, []);

  return <RouterProvider router={currentRouter} />;
};

export default RouterWrapper;
