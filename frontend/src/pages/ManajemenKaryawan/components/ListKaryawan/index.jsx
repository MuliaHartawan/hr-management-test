import { Flex, Input, Stack, Table, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { fetchEmployee } from "../../queries/fetchEmployees";
import { useEmployeesStore } from "../../store";

const ListKaryawan = () => {
  const employeeStore = useEmployeesStore();

  useEffect(() => {
    fetchEmployee();
  }, []);

  return (
    <Flex
      rounded="2xl"
      bgColor="#ffffff"
      border="solid 1px"
      borderColor="#D9DDE3"
      direction="column"
      p="10px"
      gap="8px"
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Text>Daftar Karyawan</Text>
        <Input placeholder="Cari..." w="300px" />
      </Flex>
      <Stack gap="8px">
        <Table.Root>
          <Table.Header border="solid 1px" borderColor="#D9DDE3" rounded="2xl">
            <Table.Row bgColor="#FAFAFA">
              <Table.ColumnHeader color="black" borderColor="#D9DDE3">
                Nama
              </Table.ColumnHeader>
              <Table.ColumnHeader color="black" borderColor="#D9DDE3">
                No Telpon
              </Table.ColumnHeader>
              <Table.ColumnHeader color="black" borderColor="#D9DDE3">
                Alamat
              </Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {employeeStore.data.map((data, index) => {
              return (
                <Table.Row key={index} border="solid 1px" borderColor="#D9DDE3">
                  <Table.Cell bgColor="white" color="bl" border="none">
                    {data.first_name} {data.last_name}
                  </Table.Cell>
                  <Table.Cell bgColor="white" color="bl" border="none">
                    {data.phone}
                  </Table.Cell>
                  <Table.Cell bgColor="white" color="bl" border="none">
                    {data.address}
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table.Root>
      </Stack>
    </Flex>
  );
};

export default ListKaryawan;
