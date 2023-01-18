import * as React from 'react';
import Stack from '@mui/joy/Stack';
import TextField from '@mui/joy/TextField';
import { Button } from '@mui/joy';
import Divider from '@mui/joy/Divider';
// import Select, { selectClasses } from '@mui/joy/Select';
// import Option from '@mui/joy/Option';

// import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
// import EditIcon from '@mui/icons-material/Edit';
// import CheckIcon from '@mui/icons-material/Check';

export default function Search({setSearch,handleSearch}) {
   

   return (
      <Stack direction="column" spacing={2}>
         <TextField
            sx={{
               '&:active': {
                  outline: "#111"
               }
            }}
            placeholder="Search in here.."
            variant='outlined'
            onChange={(e) => setSearch(e.target.value)}
            endDecorator={
               <React.Fragment>
                  {/* <Divider orientation="vertical" />
         <Select defaultValue={5}
            onChange={(e)=>setAmount(e.target.value)}
               // indicator={<KeyboardArrowDown />}
            //    sx={{
            //       outlineColor:"transparent",
            //       [`& .${selectClasses.indicator}`]: {
            //          transition: '0.2s',
            //       [`&.${selectClasses.expanded}`]: {
            //          transform: 'rotate(-180deg)',
            //       },
            //    },
            // }}
            >
            <Option value="0">0</Option>
            <Option value="5">5</Option>
         </Select> */}
                  <Divider orientation="vertical" />
                  <Button variant='outlined' onClick={handleSearch}>Search</Button>

               </React.Fragment>
            }
         />
      </Stack>
   );
}