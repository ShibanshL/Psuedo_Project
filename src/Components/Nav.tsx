import React from 'react'
import {Group,Grid, Text, Badge} from '@mantine/core';

function Nav() {
  return (
    <Grid>
        <Grid.Col p='10px' span={12}>
            <Group position='right' align='right'>
                <Text>Gmail</Text>
                <Text>Images</Text>
                <Badge radius='xl' size='xl'>S</Badge>
            </Group>
        </Grid.Col>
    </Grid>
  )
}

export default Nav