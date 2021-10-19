import { SearchIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Icon, Tooltip, VStack } from "@chakra-ui/react";
import {
  HiDatabase,
  HiHome,
  HiOutlineChartBar,
  HiOutlineCheckCircle,
  HiOutlineFlag,
  HiOutlineUsers,
} from "react-icons/hi";
import IconWrapper from "./IconWrapper";
import TooltipIconWrapper from "./TooltipIconWrapper";

const SidebarHeader = () => {
  return (
    <VStack spacing="6" direction="column" align="center" paddingTop="8">
      <Box bg="gray.300" height={8} width={8} borderRadius="md"></Box>
      <VStack spacing="2">
        <TooltipIconWrapper tooltipLabel="Home">
          <Icon width={6} height={6} as={HiHome} />
        </TooltipIconWrapper>

        <TooltipIconWrapper tooltipLabel="Chart">
          <Icon width={6} height={6} as={HiOutlineChartBar} />
        </TooltipIconWrapper>

        <TooltipIconWrapper tooltipLabel="Database">
          <Icon width={6} height={6} as={HiDatabase} />
        </TooltipIconWrapper>
        <TooltipIconWrapper tooltipLabel="Check">
          <Icon width={6} height={6} as={HiOutlineCheckCircle} />
        </TooltipIconWrapper>

        <TooltipIconWrapper tooltipLabel="Flag">
          <Icon width={6} height={6} as={HiOutlineFlag} />
        </TooltipIconWrapper>

        <TooltipIconWrapper tooltipLabel="User">
          <Icon width={6} height={6} as={HiOutlineUsers} />
        </TooltipIconWrapper>
      </VStack>
    </VStack>
  );
};

export default SidebarHeader;
