import ResponsePkg from "./responsive-pkg";
import CmsPkg from "./cms-pkg";
import EcommercePkg from "./ecommerce-pkg";


import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const WebPkg = ()=>{
	return(
		<div class="packages-box">
            <Tabs>
            <div className="nested-tabs">
                <TabList>
                    <Tab><a href={()=>false}>Responsive Website </a></Tab>
                    <Tab><a href={()=>false}>CMS Website </a></Tab>
                    <Tab><a href={()=>false}>Ecommerce Website </a></Tab>

                </TabList>
           
             <TabPanel>
             <ResponsePkg/>
             </TabPanel>
             <TabPanel>
             <CmsPkg/>
             </TabPanel>
             <TabPanel>
             <EcommercePkg/>
             </TabPanel>
            
            </div>                
            </Tabs>
            </div>
                      
	)
}
export default WebPkg