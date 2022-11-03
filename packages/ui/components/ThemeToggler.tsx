import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { Button, useColorMode } from "@chakra-ui/react";

export const ThemeToggler = ({ className }: { className: string }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div className={className}>
      <div className="flex">
        <Button
          leftIcon={colorMode === "light" ? <SunIcon /> : <MoonIcon />}
          colorScheme="blue"
          variant="solid"
          onClick={toggleColorMode}
        >
          {colorMode === "light" ? "Light" : "Dark"} Mode
        </Button>
      </div>
    </div>
  );
};
