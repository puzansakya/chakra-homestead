import { Flex } from "@chakra-ui/react";
import { FC } from "react";

interface IconWrapperProps {
  children: any;
}

const IconWrapper: FC<IconWrapperProps> = ({ children }) => {
  return (
    <Flex
      as="button"
      height={12}
      width={12}
      align="center"
      justify="center"
      borderRadius="md"
      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
      _hover={{ bg: "#53389e" }}
      _active={{
        bg: "#53389e",
      }}
      _focus={{
        boxShadow:
          "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
      }}
    >
      {children}
    </Flex>
  );
};

export default IconWrapper;
