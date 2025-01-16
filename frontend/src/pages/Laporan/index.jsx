import { Flex, Heading, Text } from "@chakra-ui/react";
import { Responsive, Wrapper } from "../../components/layout";

const Laporan = () => {
  return (
    <Wrapper>
      <Responsive gap="20px">
        <Flex direction="column">
          <Heading>Laporan</Heading>
          <Text fontSize="14px" fontWeight="400">
            Welcome to laporan dexa.
          </Text>
        </Flex>
      </Responsive>
    </Wrapper>
  );
};

export default Laporan;
