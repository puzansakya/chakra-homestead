import { Avatar } from "@chakra-ui/avatar";
import { VStack, Divider } from "@chakra-ui/layout";
import { Icon, Tooltip } from "@chakra-ui/react";
import { HiChip, HiOutlineCog } from "react-icons/hi";
import IconWrapper from "./IconWrapper";
import TooltipIconWrapper from "./TooltipIconWrapper";

const SidebarFooter = () => {
  return (
    <VStack my={6} direction="column" align="center" spacing="6">
      <VStack spacing="2">
        <TooltipIconWrapper tooltipLabel="Chip">
          <Icon width={6} height={6} as={HiChip} />
        </TooltipIconWrapper>
        <TooltipIconWrapper tooltipLabel="Setting">
          <Icon width={6} height={6} as={HiOutlineCog} />
        </TooltipIconWrapper>
      </VStack>
      <Divider bg="#7f56d9" width={12} />

      <Tooltip label="Hover me" hasArrow placement="right">
        <Avatar
          width={12}
          height={12}
          name="Kent Dodds"
          src="https://bit.ly/kent-c-dodds"
        />
      </Tooltip>
    </VStack>
  );
};

export default SidebarFooter;
