
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Overview from './Overview';


const AboutTabs = () => {
    return (
        <div className="  ">

                <div className=" flex justify-center mb-10 mt-10  ml-10 mr-10  ">
                
                <div className=' flex-col md:flex-row lg:flex-row'>
                
                  
                
                <Tabs defaultIndex={1} onSelect={(index) => console.log(index)}>
                  <TabList>
                    <Tab>Overview </Tab>
                    <Tab>Locations </Tab>
                    <Tab>Reviews </Tab>
                    <Tab> Business</Tab>
                   
                  </TabList>
                  
                  <TabPanel>
                    <Overview></Overview>
                  </TabPanel>
                  <TabPanel>
              
                  </TabPanel>
                  <TabPanel>
                   
                  </TabPanel>
                  <TabPanel>
                 
                  </TabPanel>
                  <TabPanel>
             
                  </TabPanel>
                </Tabs>
                
                </div>

            </div>
            
        </div>
    );
};

export default AboutTabs;