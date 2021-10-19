import { Box, Flex, Spacer } from "@chakra-ui/react";
import SidebarFooter from "./SidebarFooter";
import SidebarHeader from "./SidebarHeader";

const Sidebar = () => {
  return (
    <Box
      bg="#6941c6"
      height="100vh"
      minHeight="100vh"
      width="20"
      color="white"
      position="fixed"
    >
      <Flex direction="column" height="100%">
        <SidebarHeader />
        <Spacer />
        <SidebarFooter />
      </Flex>
    </Box>
  );
};
export default Sidebar;
