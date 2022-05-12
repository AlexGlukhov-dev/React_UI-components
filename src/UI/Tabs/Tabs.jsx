import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import'./tabs.scss'


const UITabs = ({tabsInfo}) => (
  <Tabs>
		<TabList className='react-tabs__tab-list'>
			{tabsInfo.map(tab => <Tab className='react-tabs__tab' key={tab.title}><span>{tab.title}</span></Tab>)}
    </TabList>

    {tabsInfo.map((tab, i) => <TabPanel key={tab.title + i}>
      <p className='react-tabs__content'>{tab.content}</p>
    </TabPanel>)}
  </Tabs>
);

export default UITabs;