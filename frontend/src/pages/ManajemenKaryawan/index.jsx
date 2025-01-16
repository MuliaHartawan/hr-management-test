import { Flex, Heading, Text } from "@chakra-ui/react";
import { Responsive, Wrapper } from "../../components/layout";
import { ListKaryawan } from "./components";

const ManajemenKaryawan = () => {
  return (
    <Wrapper>
      <Responsive gap="20px">
        <Flex direction="column">
          <Heading>Manajeman Karyawan</Heading>
          <Text fontSize="14px" fontWeight="400">
            Welcome to manajemen karyawan dexa.
          </Text>
        </Flex>
        <ListKaryawan />
      </Responsive>
    </Wrapper>
  );
};

export default ManajemenKaryawan;
