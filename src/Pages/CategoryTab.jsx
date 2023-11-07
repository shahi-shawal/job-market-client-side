import { useEffect } from 'react';
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const CategoryTab = ({types}) => {
    const [Cattype, setCattype]= useState([])
    const {job_type}= types
    

    useEffect(()=>{
        fetch("http://localhost:5000/jobs")
        .then(res=> res.json())
        .then(data=> setCattype(data))
    },[])

    const jobtabs = Cattype.filter((tabscat)=> tabscat.jb_category === job_type)
    console.log(jobtabs);
    return (
        <div>
              <Tabs defaultIndex={1} onSelect={(index) => console.log(index)}>
    <TabList>
      <Tab>{job_type}</Tab>
     
    </TabList>

    <TabPanel>
      {/* <p>
        <b>Mario</b> (<i>Japanese: マリオ Hepburn: Mario, [ma.ɾʲi.o]</i>) (<i>English:
        /ˈmɑːrioʊ/; Italian: [ˈmaːrjo]</i>) is a fictional character in the Mario video
        game franchise, owned by Nintendo and created by Japanese video game designer
        Shigeru Miyamoto. Serving as the company's mascot and the eponymous protagonist
        of the series, Mario has appeared in over 200 video games since his creation.
        Depicted as a short, pudgy, Italian plumber who resides in the Mushroom
        Kingdom, his adventures generally center upon rescuing Princess Peach from the
        Koopa villain Bowser. His younger brother and sidekick is Luigi.
      </p> */}
      
    </TabPanel>
   
  </Tabs> 
        </div>
    );
};

export default CategoryTab;