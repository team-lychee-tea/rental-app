import { doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { userConverter } from "@/firebase/users/converter";

export const createUserDoc = async (user: User) => {
  const docRef = doc(db, "users", user.id).withConverter(userConverter);
  await setDoc(docRef, {
    id: user.id,
    name: user.name,
    photo: user.photo,
  });
};
