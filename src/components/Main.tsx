import Icon from "@chakra-ui/icon";
import { Input } from "@chakra-ui/input";
import {
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  Spacer,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/layout";
import { SimpleGrid, Switch } from "@chakra-ui/react";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/tabs";
import { FC } from "react";
import { HiPlus } from "react-icons/hi";
import Colors from "../constant/colors";
import { GridData } from "../data/integrationGrid";

const ContentTabs1 = () => {
  return (
    <Tabs width="100%" mt={8}>
      <TabList>
        <Tab
          p={4}
          fontWeight="medium"
          lineHeight="20px"
          fontSize="14px"
          color="gray.400"
        >
          My Details
        </Tab>
        <Tab
          p={4}
          fontWeight="medium"
          lineHeight="20px"
          fontSize="14px"
          color="gray.400"
        >
          Profile
        </Tab>
        <Tab
          p={4}
          fontWeight="medium"
          lineHeight="20px"
          fontSize="14px"
          color="gray.400"
        >
          Password
        </Tab>
        <Tab
          p={4}
          fontWeight="medium"
          lineHeight="20px"
          fontSize="14px"
          color="gray.400"
        >
          Team
        </Tab>
        <Tab
          p={4}
          fontWeight="medium"
          lineHeight="20px"
          fontSize="14px"
          color="gray.400"
        >
          Plan
        </Tab>
        <Tab
          p={4}
          fontWeight="medium"
          lineHeight="20px"
          fontSize="14px"
          color="gray.400"
        >
          Billing
        </Tab>
        <Tab
          p={4}
          fontWeight="medium"
          lineHeight="20px"
          fontSize="14px"
          color="gray.400"
        >
          Email
        </Tab>
        <Tab
          p={4}
          fontWeight="medium"
          lineHeight="20px"
          fontSize="14px"
          color="gray.400"
        >
          Notifications
        </Tab>
        <Tab
          p={4}
          fontWeight="medium"
          lineHeight="20px"
          fontSize="14px"
          color="gray.400"
        >
          Integrations
        </Tab>
        <Tab
          p={4}
          fontWeight="medium"
          lineHeight="20px"
          fontSize="14px"
          color="gray.400"
        >
          Api
        </Tab>
      </TabList>
    </Tabs>
  );
};

const ContentTabs2 = () => {
  return (
    <Tabs width="100%" mt={5}>
      <TabList>
        <Tab
          p={4}
          fontWeight="medium"
          lineHeight="20px"
          fontSize="14px"
          color="gray.400"
        >
          View All
        </Tab>
        <Tab
          p={4}
          fontWeight="medium"
          lineHeight="20px"
          fontSize="14px"
          color="gray.400"
        >
          Developer Tools
        </Tab>
        <Tab
          p={4}
          fontWeight="medium"
          lineHeight="20px"
          fontSize="14px"
          color="gray.400"
        >
          Communication
        </Tab>
        <Tab
          p={4}
          fontWeight="medium"
          lineHeight="20px"
          fontSize="14px"
          color="gray.400"
        >
          Productivity
        </Tab>
        <Tab
          p={4}
          fontWeight="medium"
          lineHeight="20px"
          fontSize="14px"
          color="gray.400"
        >
          Browser Tools
        </Tab>
        <Tab
          p={4}
          fontWeight="medium"
          lineHeight="20px"
          fontSize="14px"
          color="gray.400"
        >
          Marketplace
        </Tab>
      </TabList>
    </Tabs>
  );
};

const ContentHeading = () => {
  return (
    <Flex align="center">
      <Heading fontWeight="medium" lineHeight="36px" size="lg">
        Settings
      </Heading>
      <Spacer />
      <Input
        bg="white"
        border="1px"
        borderColor="gray.300"
        p={2}
        lineHeight="24px"
        width={80}
        borderRadius="md"
        placeholder="Search"
      />
    </Flex>
  );
};

const Info = () => {
  return (
    <Flex mt={8}>
      <VStack flex={1} spacing={1} align="start">
        <Heading
          fontWeight="medium"
          lineHeight="28px"
          color="gray.900"
          fontSize="18px"
        >
          Integration and connected apps
        </Heading>
        <Text lineHeight="20px" color="gray.500" fontSize="14px">
          Supercharge your workflow and connect the tool you use everyday.
        </Text>
      </VStack>
      <HStack
        spacing={2}
        as="button"
        bg="white"
        border="1px"
        borderColor="gray.300"
        align="center"
        fontWeight="medium"
        lineHeight="20px"
        height="38px"
        px={4}
        borderRadius="md"
        color="gray.700"
        fontSize="14px"
        transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
        _hover={{ bg: "#53389e", color: "white" }}
        _active={{
          bg: "#53389e",
        }}
        _focus={{
          boxShadow:
            "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
        }}
      >
        <Icon width={5} height={5} as={HiPlus} />

        <Text>Request Integration</Text>
      </HStack>
    </Flex>
  );
};

interface IntegrationCardProps {
  name: string;
  description: string;
}
const IntegrationCard: FC<IntegrationCardProps> = ({ name, description }) => {
  return (
    <Box borderRadius="md" shadow="md" bg="white">
      <Box px={4} py={6} spacing={7}>
        <Flex align="start">
          <HStack flex={1} align="center" spacing={4}>
            <Box bg="gray.200" h={12} borderRadius="md" width={12}></Box>
            <Text fontWeight="medium" lineHeight="24px" color="gray.900">
              {name}
            </Text>
          </HStack>
          <Switch defaultChecked size="md" colorScheme="purple" />
        </Flex>
        <Text lineHeight="20px" color="gray.500" fontSize="14px" mt={7}>
          {description}
        </Text>
      </Box>

      <Flex borderTop="1px" borderColor="gray.200" px={6} py={4}>
        <Spacer />
        <Box
          as="button"
          bg="white"
          fontWeight="medium"
          lineHeight="20px"
          height="38px"
          px={4}
          borderRadius="md"
          color={Colors.primary700}
          fontSize="14px"
          transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
          _hover={{ bg: Colors.primary600, color: "white" }}
          _active={{
            bg: "#53389e",
          }}
          _focus={{
            boxShadow:
              "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
          }}
        >
          <Text>View Integration</Text>
        </Box>
      </Flex>
    </Box>
  );
};
const CardGrid = () => {
  return (
    <SimpleGrid columns={3} spacing={6} mt={5}>
      {GridData.map((data) => {
        return (
          <IntegrationCard name={data.name} description={data.description} />
        );
      })}
    </SimpleGrid>
  );
};

const Main = () => {
  return (
    <Box bg="gray.50" flex={1} overflowY="auto" pl="20">
      <Box p={8}>
        <ContentHeading />
        <ContentTabs1 />
        <Info />
        <ContentTabs2 />
        <CardGrid />
      </Box>
    </Box>
  );
};

export default Main;
