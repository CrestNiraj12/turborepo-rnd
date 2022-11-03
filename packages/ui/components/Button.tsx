import { useRouter } from "next/router";
import { Button as ChakraButton, color } from "@chakra-ui/react";
import { MouseEventHandler } from "react";

type Props = {
  linkButton?: Boolean;
  link?: string;
  children: string;
  back?: Boolean;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: MouseEventHandler;
  colorScheme?: string;
};

export const Button: React.FC<Props> = ({
  linkButton = true,
  link,
  children,
  back = false,
  className,
  type = "button",
  onClick = () => null,
  colorScheme = "red",
}) => {
  const router = useRouter();
  return (
    <ChakraButton
      type={type}
      colorScheme={colorScheme}
      className={className ? className : ""}
      onClick={
        linkButton ? () => (back ? router.back() : router.push(link!)) : onClick
      }
    >
      {children}
    </ChakraButton>
  );
};
