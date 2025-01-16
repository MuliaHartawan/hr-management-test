import { Flex, Input, Stack, Table } from "@chakra-ui/react";
import { Button } from "../../../../components/ui/button";
import attendance from "../../../../utils/constants/attendances.json";

const Tabel = () => {
  return (
    <Flex direction="column" w="full" gap="10px">
      <Flex alignItems="center" gap="20px">
        <Input placeholder="Cari..." w="300px" />
        <Button bgColor="teal" variant="solid" color="white" textAlign="center">
          Approve
        </Button>
        <Button bgColor="red" variant="solid" color="white" textAlign="center">
          Reject
        </Button>
      </Flex>
      <Stack gap="8px">
        <Table.Root>
          <Table.Header border="solid 1px" borderColor="#D9DDE3" rounded="2xl">
            <Table.Row bgColor="#FAFAFA">
              <Table.ColumnHeader color="black" borderColor="#D9DDE3">
                Date
              </Table.ColumnHeader>
              <Table.ColumnHeader color="black" borderColor="#D9DDE3">
                Employee
              </Table.ColumnHeader>
              <Table.ColumnHeader color="black" borderColor="#D9DDE3">
                Clock in
              </Table.ColumnHeader>
              <Table.ColumnHeader color="black" borderColor="#D9DDE3">
                Clock out
              </Table.ColumnHeader>
              <Table.ColumnHeader color="black" borderColor="#D9DDE3">
                Status
              </Table.ColumnHeader>
              <Table.ColumnHeader color="black" borderColor="#D9DDE3">
                Verified by
              </Table.ColumnHeader>
              <Table.ColumnHeader color="black" borderColor="#D9DDE3">
                Verified at
              </Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {attendance.map((data, index) => {
              return (
                <Table.Row key={index} border="solid 1px" borderColor="#D9DDE3">
                  <Table.Cell bgColor="white" color="bl" border="none">
                    {data.date}
                  </Table.Cell>
                  <Table.Cell bgColor="white" color="bl" border="none">
                    {data.employee.name}
                  </Table.Cell>
                  <Table.Cell bgColor="white" color="bl" border="none">
                    {data.clock_in}
                  </Table.Cell>
                  <Table.Cell
                    bgColor="white"
                    color="bl"
                    border="none"
                    textAlign="center"
                  >
                    {data.clock_out || "-"}
                  </Table.Cell>
                  <Table.Cell bgColor="white" color="bl" border="none">
                    {data.status}
                  </Table.Cell>
                  <Table.Cell
                    bgColor="white"
                    color="bl"
                    border="none"
                    textAlign="center"
                  >
                    {data.verifiedBy?.email || "-"}
                  </Table.Cell>
                  <Table.Cell
                    bgColor="white"
                    color="bl"
                    border="none"
                    textAlign="center"
                  >
                    {data.verified_at || "-"}
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

export default Tabel;
