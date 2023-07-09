import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import DishVoting from "../Dishes/DishVoting";
import Rankings from "../Result/Result";

const TabMenu = () => {
    return (
        <Tabs isFitted variant='enclosed'>
            <TabList>
                <Tab fontSize={16} fontWeight="bold">Polling</Tab>
                <Tab fontSize={16} fontWeight="bold">Rankings</Tab>
            </TabList>
            <TabPanels>
                <TabPanel><DishVoting /></TabPanel>
                <TabPanel><Rankings /></TabPanel>
            </TabPanels>
        </Tabs>
    );
}

export default TabMenu;