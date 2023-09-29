import { Badge, Button,  MenuItem,  MenuList,  Popover, Typography } from '@mui/material'
import React, { useState } from 'react'
import {BiCart} from "react-icons/bi"
import {AiOutlineDown} from "react-icons/ai"
import { SecondaryHeader } from './SecondaryHeader'
export const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    console.log(event)
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <div className='bg-green-900 justify-around px-10 py-5 items-center flex text-white' >
        <div className='flex justify-between w-[20%] '>
            <h1>Reeco</h1>
            <p>Store</p>
            <p>Orders</p>
            <p>Analytics</p>
        </div>
        <div className='flex justify-between w-[15%] items-center '>
            <Badge color="success" badgeContent={4}>
            {/* <IconButton></IconButton> */}
            <BiCart className='text-2xl' />
            </Badge>
            <Button variant='ghost' onClick={handleClick} endIcon={<AiOutlineDown/>} >Hello, user</Button>
            <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
            <Typography sx={{ p: 2 }}>
              <MenuList>
                <MenuItem> 
                  Account
                </MenuItem>
                <MenuItem> 
                  Profile
                </MenuItem>
                <MenuItem> 
                  settings
                </MenuItem>
                <MenuItem> 
                  Logout
                </MenuItem>
              </MenuList>
            </Typography>
          </Popover>
        </div>
    </div>
    <SecondaryHeader/>
    </div>
  )
}
