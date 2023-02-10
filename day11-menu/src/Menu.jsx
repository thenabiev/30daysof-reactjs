import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';


export default function Menu({items}) {
  return (
    <div className='container'>
      <Grid container spacing={2}>
        {
            items.map(item=>(
                <Grid key={item.id} item xs={6} lg={3} md={4}>
                    <Card >
                    <CardMedia
                        sx={{ height: 200 }}                        
                        image={item.img}
                        title={item.title}
                        />
                        <CardContent>
                            <Grid container >
                                <Grid item xs={8}>
                                    <Typography style={{textTransform:'capitalize', fontWeight:"600"}} >
                                        {item.title}
                                    </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography  textAlign='right' >
                                        {item.price}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <br />
                            <Typography typography="p">
                                {item.desc}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))
        }
 
      </Grid>
    </div>
  )
}
