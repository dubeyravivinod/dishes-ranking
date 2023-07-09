import {
  Card,
  CardBody,
  Heading,
  CardFooter,
  Button,
  ButtonGroup,
  Stack,
  Text,
  Flex,
  Spacer,
  Image,
  SimpleGrid,
  Container,
  Center,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateList } from "../../Store/mostLikedDishesReducer";
import { useEffect } from "react";

const Display = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [likeCount, setLikeCount] = useState(0);
  const dishes = useSelector((state) => state.mostLikedDishes);
  const dispatch = useDispatch();

  const likeClickHandler = (id) => {
    setSelectedId(id);
    setLikeCount(likeCount + 1);
  };

  useEffect(() => {
    const updatedItems = dishes.items.map((dish) => {
      if (dish.id === selectedId) {
        return {
          ...dish,
          count: dish.count + likeCount,
        };
      } else {
        return dish;
      }
    });
    dispatch(updateList(updatedItems));
    localStorage.setItem('dishes-data', JSON.stringify(updatedItems))
    setLikeCount(0);
  }, [likeCount])

  // const updateCount = () => {
  // };

  return (
    <Center>
      <Container m="100px auto" maxW="max-content">
        <Flex wrap="wrap" alignItems="center" gap="2">
          {dishes.items.map((dish) => (
            <SimpleGrid
              minChildWidth="120px"
              spacing="40px"
              border="2px solid black"
            >
              <Card maxW="sm" height="40rem">
                <CardBody>
                  <Image
                    src={dish.image}
                    alt={dish.dishName}
                    borderRadius="lg"
                    width="100%"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{dish.dishName}</Heading>
                    <Text>{dish.description}</Text>
                  </Stack>
                </CardBody>
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <Button
                      key={dish.id}
                      variant="outline"
                      colorScheme="red"
                      value={selectedId}
                      onClick={() => likeClickHandler(dish.id)}
                    >
                      Vote
                    </Button>
                  </ButtonGroup>
                  <Spacer />
                  <Text as="b" fontSize="lg">
                    {dish.count}
                  </Text>
                </CardFooter>
              </Card>
            </SimpleGrid>
          ))}
        </Flex>
      </Container>
    </Center>
  );
};

export default Display;
