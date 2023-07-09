import { Button, Stack, Flex, Spacer, Box } from "@chakra-ui/react";

const Navbar = ({ loggedInUser, loggedIn, setLogout }) => {

  const logoutHandler = () => {
    setLogout(false);
  }

  console.log(loggedInUser);
  return (
    <Box boxShadow="dark-lg" p={2} rounded="md" bg="white">
      <Stack direction="row" spacing={4} align="center">
        <Button colorScheme="teal" variant="ghost">
          Dish Poll
        </Button>
        <Spacer />
        <Flex gap={4}>
          {loggedIn && (
            <Button colorScheme="teal" variant="link">
              {loggedInUser}
            </Button>
          )}
          <Button colorScheme="teal" variant="solid" onClick={logoutHandler} >
            Logout
          </Button>
        </Flex>
      </Stack>
    </Box>
  );
};

export default Navbar;
