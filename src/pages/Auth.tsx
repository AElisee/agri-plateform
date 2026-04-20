import { useState } from "react";
import { supabase } from "../services/supabaseClient";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) console.log(error);
    else console.log("Compte créé", data);
  };

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) console.log(error);
    else console.log("Connecté", data);
  };

  return (
    <div className="p-4 flex flex-col gap-3">
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2"
      />

      <input
        type="password"
        placeholder="Mot de passe"
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2"
      />

      <button onClick={handleLogin} className="bg-green-500 text-white p-2">
        Se connecter
      </button>

      <button onClick={handleSignUp} className="bg-blue-500 text-white p-2">
        S'inscrire
      </button>
    </div>
  );
};

export default Auth;