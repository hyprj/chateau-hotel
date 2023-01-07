import { Textarea, Input, Button } from "@chakra-ui/react";
import { useContactForm } from "./hooks/useContactForm";

export function ContactForm() {
  const { handleChange, form } = useContactForm();

  return (
    <form>
      <Textarea
        value={form.text}
        placeholder="Text here"
        resize="none"
        mb=".4rem"
        onChange={(e) => handleChange(e, "text")}
      />
      <Input
        value={form.email}
        placeholder="Email address"
        type="email"
        mb="1.4rem"
        onChange={(e) => handleChange(e, "email")}
      />
      <Button width="100%" colorScheme="yellow" isDisabled={form.isDisabled}>
        send
      </Button>
    </form>
  );
}
