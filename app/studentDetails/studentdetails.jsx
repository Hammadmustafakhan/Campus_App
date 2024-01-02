import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';
import { Qualification } from '../Data/studentFormData';
const Studentdetails = () => {
    const [qualification, setQualification] = React.useState('');

    const handleChange = (event) => {
        setQualification(event.target.value);
    };
  return (
<>
<FormControl sx={{marginTop:"20px", width:"100%" ,display:'flex',flexDirection:"row" ,gap:"20px"}} size="small">
      <InputLabel sx={{width:1000}} id="demo-select-small-label">Qualification</InputLabel>
      <Select
      sx={{width:500}}
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={qualification}
        label="Qualification"
        onChange={handleChange}
      >
        {/* <MenuItem value={10}>Matric</MenuItem> */}
      {Qualification?.map((elem)=>{
        return(
          <MenuItem value={elem.Qualification}>{elem?.Qualification}</MenuItem>

        )
      })

      }
      </Select>

<TextField sx={{width:500}} variant='outlined' label="Skill"/>

    </FormControl>

</>
  )
}

export default Studentdetails