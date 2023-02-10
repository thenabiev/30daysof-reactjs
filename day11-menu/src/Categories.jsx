import { Button, Stack } from '@mui/material'
import React from 'react'

export default function Categories({filterItems, categories}) {

  return (
    <Stack direction='row' spacing={2} justifyContent='center' alignItems='center' >
        {
            categories.map((category, index)=>(
                <Button
                    key={index}
                    onClick={()=>filterItems(category)} 
                    color='warning'>{category}</Button>
            ))
        }
    </Stack>
  )
}
