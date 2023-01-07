import { validateEmail } from "@shared/utils";
import { ChangeEvent, useEffect, useState } from "react";

export function useContactForm() {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    const debouncer = setTimeout(() => {
      if (text.trim() !== "" && validateEmail(email)) {
        setIsDisabled(false);
      } else {
        setIsDisabled(true);
      }
    }, 200);
    () => clearTimeout(debouncer);
  }, [text, email]);

  const handleChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    type: "text" | "email"
  ) => {
    if (type === "text") {
      setText(e.target.value);
    } else {
      setEmail(e.target.value);
    }
  };

  return { handleChange, form: { text, email, isDisabled } };
}
