import { Play } from "lucide-react";
import { useState } from "react";

export function SendMe() {
  const [isCopied, setIsCopied] = useState(false);

  return (
    <div>
      <p>click EN EL LOGO copiar ID DE DISCORD</p>
      <img
        src={isCopied ? "src/assets/Discord.gif" : "src/assets/Discord.png"}
        onClick={() =>
          navigator.clipboard
            .writeText("727258546689015870")
            .then(() => {
              setIsCopied(true);
            })
            .then(() => setTimeout(() => setIsCopied(false), 3000))
        }
        className="w-20"
      />
      {isCopied && <p>ID COPIADA</p>}
    </div>
  );
}
