import React from 'react'
import Layout from '../components/Layout/Layout.js'
import { HallList } from '../pages/HallList.js'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'

function Hall() {
  return (
    <Layout> <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
    {
      HallList.map((Hall) => (
        <Card sx={{ maxWidth: '300px', display: 'flex', m: 0 }}>
          <CardActionArea>
            <CardMedia sx={{ minHeight: '400px' }} component={'img'} src={Hall.image} alt={Hall.name} />
            <CardContent>
              <Typography variant='h5' gutterBottom component={"div"}>
                {Hall.name}<br/>
                {Hall.price}
              </Typography>
              <Typography variant='body2'>{Hall.description}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))
    }
  </Box>
  </Layout>
     
    
  )
}

export default Hall
