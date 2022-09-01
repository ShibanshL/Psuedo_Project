import React from 'react'
import {Group,Grid,Image, Text, Badge,Button, TextInput} from '@mantine/core';
import {AiOutlineSearch} from 'react-icons/ai'
import {BiMicrophone} from 'react-icons/bi'

function Mid() {
  return (
    <Grid p='26vh 0'>
        <Grid.Col span={12}>
            <Group position='center' align='center'>
                <Image width='25vw' src='https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'/>
            </Group>
        </Grid.Col>
        <Grid.Col p='0 25vw' span={12}>
            <TextInput 
                icon={<AiOutlineSearch />}
                rightSection={<BiMicrophone />}
            />
        </Grid.Col>
        <Grid.Col span={12}>
            <Group position='center'>
                <Button>Google Search</Button>
                <Button>I'm Feeling Lucky</Button>
            </Group>
        </Grid.Col>
    </Grid>
  )
}

export default Mid