import { Box } from "@chakra-ui/layout";
import Main from "../../components/Main";
import Sidebar from "../../components/Sidebar";

const DashboardContainer = () => {
  return (
    <Box height="100vh" position="relative">
      <Sidebar />
      <Main />
    </Box>
  );
};

export default DashboardContainer;
