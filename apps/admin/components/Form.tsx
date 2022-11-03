import { FormEvent } from "react";
import { Button } from "ui";
import { Text } from "@chakra-ui/react";

export default function Form({
  errorMessage,
  onSubmit,
}: {
  errorMessage: string;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <form className="flex flex-col" onSubmit={onSubmit}>
      <label className="flex flex-col">
        <Text className="font-bold mb-2">Type your GitHub username</Text>
        <input type="text" name="username" required />
      </label>
      {errorMessage && (
        <Text className="text-red-500 my-2">{errorMessage}</Text>
      )}

      <Button
        className="mt-3"
        colorScheme="teal"
        type="submit"
        linkButton={false}
      >
        Login
      </Button>

      <style jsx>{`
        input {
          padding: 8px;
          margin: 0.3rem 0 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
      `}</style>
    </form>
  );
}
