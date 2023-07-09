import { Fragment, useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
  Spacer,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import user_details from "../../DB/user.json";
import TabMenu from "../Tabs/TabMenu";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Login = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [invalid, setInvalid] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);

  const onClickHandler = (username, password) => {
    const filteredUser = user_details.filter(
      (user) => user.email === email && user.password === password
    );
    if (filteredUser.length === 0) {
      console.log(filteredUser);
      setInvalid(true);
    } else {
      setInvalid(false);
      const username_ = filteredUser[0].username;
      setIsSuccess(true);
      props.getUser(username_);
    }
  };

  return (
    <Fragment>
      {isSuccess && props.loggedIn ? (
        <TabMenu />
      ) : (
        <Flex
          flexDirection="column"
          width="100wh"
          height="100vh"
          backgroundColor="gray.200"
          justifyContent="center"
          alignItems="center"
        >
          <Stack
            flexDir="column"
            mb="2"
            justifyContent="center"
            alignItems="center"
          >
            <Avatar bg="teal.500" />
            <Heading color="teal.400">Welcome</Heading>
            <Box minW={{ base: "90%", md: "468px" }}>
              <form>
                <Stack
                  spacing={4}
                  p="1rem"
                  backgroundColor="whiteAlpha.900"
                  boxShadow="md"
                >
                  <FormControl>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents="none"
                        children={<CFaUserAlt color="gray.300" />}
                      />
                      <Input
                        type="email"
                        placeholder="email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </InputGroup>
                  </FormControl>
                  <FormControl>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents="none"
                        color="gray.300"
                        children={<CFaLock color="gray.300" />}
                      />
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                          {showPassword ? "Hide" : "Show"}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                    <FormHelperText textAlign="right">
                      <Flex>
                        <p style={{ color: "red", fontWeight: "bold" }}>
                          {invalid ? "Invalid Username or Password" : ""}
                        </p>
                        <Spacer />
                        <Link>forgot password?</Link>
                      </Flex>
                    </FormHelperText>
                  </FormControl>
                  <Button
                    borderRadius={0}
                    type="submit"
                    variant="solid"
                    colorScheme="teal"
                    width="full"
                    onClick={() => onClickHandler(email, password)}
                  >
                    Login
                  </Button>
                </Stack>
              </form>
            </Box>
          </Stack>
          <Box>
            New to us?{" "}
            <Link color="teal.500" href="#">
              Sign Up
            </Link>
          </Box>
        </Flex>
      )}
    </Fragment>
  );
};

export default Login;
