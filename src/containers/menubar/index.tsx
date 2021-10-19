import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  HStack,
  Menu,
  Text,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import Colors from "../../constant/colors";
import { MenuData } from "../../data/menu";

const Menubar = () => {
  return (
    <Flex width="100%" bg={Colors.menuBackground}>
      {MenuData.map((menu) => {
        return (
          <Menu>
            <MenuButton
              px={4}
              py={6}
              as={Button}
              rightIcon={<ChevronDownIcon />}
              fontSize="sm"
              fontWeight="medium"
              bg={Colors.menuBackground}
              color={Colors.menuText}
              borderRadius="none"
              _hover={{ bg: Colors.menuHover, color: Colors.menuText }}
              _active={{ bg: Colors.menuActive, color: Colors.menuText }}
            >
              <HStack spaceing={2}>
                {menu.icon}
                <Text>{menu.name}</Text>
              </HStack>
            </MenuButton>
            <MenuList bg={Colors.menuBackground} color={Colors.menuText}>
              {menu.items.map((item) => {
                return (
                  <MenuItem
                    fontSize="sm"
                    fontWeight="medium"
                    _hover={{ bg: Colors.menuHover, color: Colors.menuText }}
                    _active={{ bg: Colors.menuActive, color: Colors.menuText }}
                    _focus={{ bg: Colors.menuFocus, color: Colors.menuText }}
                  >
                    {item}
                  </MenuItem>
                );
              })}
            </MenuList>
          </Menu>
        );
      })}
    </Flex>
  );
};

export default Menubar;
