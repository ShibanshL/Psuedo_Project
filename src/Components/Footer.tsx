import React from 'react'
import {Group,Grid, Text, Badge} from '@mantine/core';

function Footer() {
  return (
    <Grid>
        <Grid.Col p='10px' span={12}>
            <Group>
                <Text>
                    India
                </Text>
            </Group>
        </Grid.Col>
        <Grid.Col p='10px' span={12}>
            <Grid>
                <Grid.Col span={6}>
                    <Group>
                        <Text>About</Text>
                        <Text>Advertising</Text>
                        <Text>Business</Text>
                        <Text>How Search Works!</Text>
                    </Group>
                </Grid.Col>
                <Grid.Col span={6}>
                    <Group position='right'>
                        <Text>Privacy</Text>
                        <Text>Terms</Text>
                        <Text>Settings</Text>
                    </Group>
                </Grid.Col>
            </Grid>
        </Grid.Col>
    </Grid>
  )
}

export default Footer