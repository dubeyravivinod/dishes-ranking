import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Image,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

const Rankings = () => {
  const dishes = useSelector((state) => state.mostLikedDishes);
  const data = dishes.items;
  const sortedData = data
    .slice()
    .sort((x, y) => (x.count > y.count ? 1 : x.count < y.count ? -1 : 0));
  sortedData.reverse();
  return (
    <TableContainer>
      <Table
        variant="simple"
        size="sm"
        colorScheme="whatsapp"
        fontWeight="bold"
        fontFamily="sans-serif"
      >
        <Thead>
          <Tr>
            <Th p={5} fontSize={16}>
              Rank
            </Th>
            <Th p={5} fontSize={16}>
              Dish
            </Th>
            <Th p={5} fontSize={16}>
              Dish Name
            </Th>
            <Th p={5} fontSize={16}>
              Votes
            </Th>
            <Th p={5} fontSize={16}>
              Points
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {sortedData.slice(0, 3).map((dish, i) => (
            <Tr key={dish.id}>
              <Td>{i + 1}</Td>
              <Td>
                <Image src={dish.image} width={150} />
              </Td>
              <Td>{dish.dishName}</Td>
              <Td>{dish.count}</Td>
              { i+1 === 1 && <Td>30</Td>}
              { i+1 === 2 && <Td>20</Td>}
              { i+1 === 3 && <Td>10</Td>}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default Rankings;
