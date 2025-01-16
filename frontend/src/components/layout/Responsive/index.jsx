import { Flex } from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
const Responsive = ({ children, ...props }) => {
  return (
    <Flex py="8px" pr="8px" w="full">
      <Flex
        w="full"
        direction="column"
        rounded="2xl"
        bgColor="#ffffff"
        border="solid 1px"
        borderColor="#D9DDE3"
        position="relative"
        py="10px"
        px="15px"
        {...props}
      >
        {children}
      </Flex>
    </Flex>
  );
};

export default Responsive;
