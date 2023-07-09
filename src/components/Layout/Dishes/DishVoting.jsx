import { Fragment } from "react";
import Display from "../Display/Display";
import { Container, Box, Center } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateList } from "../../Store/mostLikedDishesReducer";

const DishVoting = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const data =
        localStorage.getItem("dishes-data") !== null
          ? JSON.parse(localStorage.getItem("dishes-data"))
          : [];
      console.log("data:: ", data);
      if (data) {
        setIsLoading(false);
      } else {
        try {
          setIsLoading(true);
          const response = await axios.get(
            "https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json"
          );
          // const response = await axios.get(
          //   "https://mocki.io/v1/36c25d3d-e2fe-4326-83b0-ccc23f3e1764"
          // );
          console.log(response.data);
          const data = response.data;
          const new_data = data.map((item) => ({ ...item, count: 0 }));
          dispatch(updateList(new_data));
          setIsLoading(false);

          localStorage.setItem("dishes-data", JSON.stringify(new_data));
        } catch (error) {
          console.log(error);
          setIsLoading(false);
        }
      }
    };
    fetchData();

    return () => {};
  }, [dispatch]);

  return (
    <Fragment>
      {isLoading ? (
        <Container>
          <Box>
            <Center>
              <h1>Loading...</h1>
            </Center>
          </Box>
        </Container>
      ) : (
        <Display />
      )}
    </Fragment>
  );
};

export default DishVoting;
