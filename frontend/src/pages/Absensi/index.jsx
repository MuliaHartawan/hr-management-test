import { Flex, Heading, Text } from "@chakra-ui/react";
import { Responsive, Wrapper } from "../../components/layout";
import { Tabel } from "./components";

const Absensi = () => {
  return (
    <Wrapper>
      <Responsive gap="20px">
        <Flex direction="column">
          <Heading>Monitoring Absensi</Heading>
          <Text fontSize="14px" fontWeight="400">
            Welcome to monitoring absensi dexa.
          </Text>
        </Flex>
        <Tabel />
      </Responsive>
    </Wrapper>
  );
};

export default Absensi;
