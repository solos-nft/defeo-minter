import { Layout } from '@create-nft-dao/shared'
import { Minter } from '../components/Minter'
import { Video } from '../components/Video'
import { Center, Container, SimpleGrid, Grid, GridItem, Heading, Text, Flex } from '@chakra-ui/react'
import { NavbarLinks } from '../components/NavbarLinks'

const Mint = () => {
  const layoutProps = {
    title: 'Mint',
  }

  return (
    <Layout customMeta={layoutProps} navbarLinks={NavbarLinks}>
      <Container maxW="container.lg">
        <SimpleGrid columns={2} minChildWidth={'200px'} spacing={0} mt={'5rem'} mb={'10rem'}>
          <Flex alignItems={'center'}>
            <div>
              <Heading as='h1' pb={'10px'} css={{'font-family': 'EB Garamond', 'font-size': '5rem !important'}}>
                Palindrones
              </Heading>
              <Text fontSize='2xl' css={{'padding-bottom': '20px'}}>
                A highly unique audio-visual NFT project brought to you by the SOLOS team
              </Text>
            </div>
          </Flex>
          <div>
            <Video videoSrc="https://palindrones.s3.amazonaws.com/1.mp4" hoverPlay/>
          </div>
        </SimpleGrid>

        <Container p={'5rem'} bg="salmon" rounded={10} mb="10rem">
          <Heading as='h2' textAlign={'center'} mb="2rem" color="white" css={{'font-family': 'EB Garamond', 'font-size': '2rem'}}>
            Mint your Drone
          </Heading>
          <Center>
            <Minter />
          </Center>
        </Container>
        
        <Heading as='h3' pb={'20px'} css={{'font-family': 'EB Garamond', 'font-size': '2rem'}}>
          Meet the Drones
        </Heading>

        <Grid
          templateColumns={['repeat(1, 0fr)', 'repeat(1, 0fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)']}
          gap={0}
        >
          <GridItem rowSpan={1} colSpan={1}>
            <Video videoSrc="https://palindrones.s3.amazonaws.com/palindrone-03-tn.mp4" hoverPlay/>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}>
            <Video videoSrc="https://palindrones.s3.amazonaws.com/palindrone-01-tn.mp4" hoverPlay/>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}>
            <Video videoSrc="https://palindrones.s3.amazonaws.com/palindrone-05-tn.mp4" hoverPlay/>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}>
            <Video videoSrc="https://palindrones.s3.amazonaws.com/palindrone-09-tn.mp4" hoverPlay/>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}>
            <Video videoSrc="https://palindrones.s3.amazonaws.com/palindrone-07-tn.mp4" hoverPlay/>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}>
            <Video videoSrc="https://palindrones.s3.amazonaws.com/palindrone-02-tn.mp4" hoverPlay/>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}>
            <Video videoSrc="https://palindrones.s3.amazonaws.com/palindrone-06-tn.mp4" hoverPlay/>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}>
            <Video videoSrc="https://palindrones.s3.amazonaws.com/palindrone-04-tn.mp4" hoverPlay/>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}>
            <Video videoSrc="https://palindrones.s3.amazonaws.com/palindrone-10-tn.mp4" hoverPlay/>
          </GridItem>
          <GridItem rowSpan={1} colSpan={1}>
            <Video videoSrc="https://palindrones.s3.amazonaws.com/palindrone-08-tn.mp4" hoverPlay/>
          </GridItem>
          <GridItem rowSpan={1} colSpan={2} bg='salmon'>
            <Flex justifyContent={'center'} direction={'column'} height={'100%'}>
              <Flex alignItems={'end'} mb={'0.5rem'}>
                <Heading as='h3' size='lg' mr={'1rem'} color='white' width={'30%'} textAlign={'right'} css={{'font-family': 'EB Garamond'}}>
                  86
                </Heading>
                <Text width={'70%'} color={'white'} fontWeight={'semibold'}>
                  Audio stems with matching visual traits
                </Text>
              </Flex>
              <Flex alignItems={'end'} mb={'0.5rem'}>
                <Heading as='h3' size='lg' mr={'1rem'} color='white' width={'30%'} textAlign={'right'} css={{'font-family': 'EB Garamond'}}>
                  1:31
                </Heading>
                <Text width={'70%'} color={'white'} fontWeight={'semibold'}>
                  second long looping videos
                </Text>
              </Flex>
              <Flex alignItems={'end'} mb={'0.5rem'}>
                <Heading as='h3' size='lg' mr={'1rem'} color='white' width={'30%'} textAlign={'right'} css={{'font-family': 'EB Garamond'}}>
                  11,113,200
                </Heading>
                <Text width={'70%'} color={'white'} fontWeight={'semibold'}>
                  possible combinations
                </Text>
              </Flex>
              <Flex alignItems={'end'} mb={'0.5rem'}>
                <Heading as='h3' size='lg' mr={'1rem'} color='white' width={'30%'} textAlign={'right'} css={{'font-family': 'EB Garamond'}}>
                  323
                </Heading>
                <Text width={'70%'} color={'white'} fontWeight={'semibold'}>
                  NFTs for this limited drop
                </Text>
              </Flex>
            </Flex>
          </GridItem>
        </Grid>
      </Container>
    </Layout>
  )
}

export default Mint
