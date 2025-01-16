import { Flex } from "@chakra-ui/react";
import { Sidebar } from "../../navigation";

// eslint-disable-next-line react/prop-types
const Wrapper = ({ children }) => {
  return (
    <Flex position="relative" h="min-content" bg="#fafafa">
      <Sidebar />
      <Flex as={"main"} w="full">
        {children}
      </Flex>
    </Flex>
  );
};

export default Wrapper;
