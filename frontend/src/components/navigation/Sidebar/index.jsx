import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import menuhr from "../../../utils/constants/sidebar-hrd.json";
import menukaryawan from "../../../utils/constants/sidebar-employe.json";
import { useState } from "react";
import { useProfileStore } from "../../../utils/libs/store";
import { Else, If, Then } from "react-if";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("manajemen");

  const profileStore = useProfileStore();
  const navigate = useNavigate();

  const handleNavigation = (index, link) => {
    setActiveTab(index);
    navigate(link);
  };
  console.log(profileStore.data.role.name);

  return (
    <Flex
      direction="column"
      p="20px"
      h="100vh"
      gap="16px"
      w="328px"
      justifyContent="space-between"
    >
      <Flex direction="column">
        <Text fontSize="20px" fontWeight="700">
          HRDSI
        </Text>
        <Flex direction="column" gap="8px">
          <Text fontSize="16px" fontWeight="400">
            Main menu
          </Text>
          <Flex direction="column" gap="2px">
            <If condition={profileStore.data.role.name === "HRD"}>
              <Then>
                {menuhr.map((menu, index) => {
                  return (
                    <Flex
                      cursor="pointer"
                      key={index}
                      px="14px"
                      py="10px"
                      alignItems="center"
                      gap="8px"
                      _hover={{
                        bgColor: "#ffffff",
                        border: "solid 1px",
                        borderColor: "#D9DDE3",
                      }}
                      rounded="lg"
                      onClick={() => handleNavigation(index, menu.link)}
                    >
                      <Image src={menu.icon} alt="menu_img" w="auto" h="16px" />
                      <Text fontSize="16px" fontWeight="400">
                        {menu.menu}
                      </Text>
                    </Flex>
                  );
                })}
              </Then>
              <Else>
                {menukaryawan.map((menu, index) => {
                  return (
                    <Flex
                      cursor="pointer"
                      key={index}
                      px="14px"
                      py="10px"
                      alignItems="center"
                      gap="8px"
                      _hover={{
                        bgColor: "#ffffff",
                        border: "solid 1px",
                        borderColor: "#D9DDE3",
                      }}
                      rounded="lg"
                      onClick={() => handleNavigation("/contact")}
                      bgColor={activeTab === index ? "#ffffff" : "none"}
                      border={activeTab === index ? "solid 1px" : "none"}
                      borderColor={activeTab === index ? "#D9DDE3" : "none"}
                    >
                      <Image src={menu.icon} alt="menu_img" w="auto" h="16px" />
                      <Text fontSize="16px" fontWeight="400">
                        {menu.menu}
                      </Text>
                    </Flex>
                  );
                })}
              </Else>
            </If>
          </Flex>
        </Flex>
      </Flex>
      <Flex direction="column" gap="8px">
        <Flex gap="16px">
          <Box rounded="full" h="40px" w="40px" bgColor="#D9DDE3" />
          <Flex direction="column">
            <Text fontSize="14px" fontWeight="600">
              {profileStore.data.email}
            </Text>
            <Text fontSize="14px" fontWeight="400">
              {profileStore.data.email}
            </Text>
          </Flex>
        </Flex>
        <Link href="/login">
          <Flex
            gap="8px"
            px="14px"
            py="10px"
            alignItems="center"
            // onClick={handleClick()}
            cursor="pointer"
          >
            <Image src="/bitmap/logout.png" alt="logout" w="auto" h="16px" />
            <Text fontSize="14px" fontWeight="400">
              Logout
            </Text>
          </Flex>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Sidebar;
