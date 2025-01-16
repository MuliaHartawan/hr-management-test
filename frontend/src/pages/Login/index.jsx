import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "../../utils/api/auth";
import { useProfileStore } from "../../utils/libs/store";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const respon = await getToken({ email: email, password: password });
      localStorage.setItem("token", respon.access_token);

      useProfileStore.setState({ data: respon.data, status: "resolve" });

      navigate("/", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Flex
      w="100vw"
      h="100vh"
      justifyContent="center"
      alignItems="center"
      bg="#fafafa"
    >
      <Flex
        direction="column"
        w="400px"
        gap="10px"
        p="10px"
        bgColor="white"
        border="solid 1px"
        borderColor="#D9DDE3"
        rounded="2xl"
      >
        <Text fontWeight="700" fontSize="20">
          Sign In
        </Text>
        <form onSubmit={handleSubmit}>
          <Flex direction="column" gap="8px">
            {" "}
            <Text>Email</Text>
            <Input
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Text>Password</Text>
            <Input
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
            <Button color="white" type="submit" w="full">
              Login
            </Button>
          </Flex>
        </form>
        <Text textAlign="center">Register</Text>
      </Flex>
    </Flex>
  );
};

export default Login;
