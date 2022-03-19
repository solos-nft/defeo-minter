import NextHead from 'next/head' // can come out when using layout
// import { Layout } from '@create-nft-dao/shared'
// import { Minter } from '../components/Minter'
import { Video } from '../components/Video'
import { Center, Container, SimpleGrid, Grid, GridItem, Heading, Text, Flex, Image, Link, Button } from '@chakra-ui/react'
// import { NavbarLinks } from '../components/NavbarLinks'

const Mint = () => {
  const layoutProps = {
    title: 'Solos – Palindrones',
    description: 'Palindrones is an audio-visual collage NFT project from the SOLOS team. Audio stems are matched to visual traits and exported into a 1:31 long drone track + animation.'
  }

  return (
    <>
      <NextHead>
        <title>{layoutProps.title}</title>
        <meta content={layoutProps.description} name="description" />
        <meta property="og:type" content='website' />
        <meta property="og:site_name" content={layoutProps.title} />
        <meta property="og:description" content={layoutProps.description} />
        <meta property="og:title" content={layoutProps.title} />
        <meta name="twitter:title" content={layoutProps.title} />
        <meta name="twitter:description" content={layoutProps.description} />
      </NextHead>
      <Container maxWidth="container.xl" pb={'5rem'}> 
        <Container maxW="container.lg" pt={'3rem'}>
          <Flex alignItems={'center'} justifyContent='space-between'>
            <Image src='/images/solos-logo.svg' objectFit='cover' width={100}/>
            <Text color={'gray.400'}>
              A <Link href='http://solos.so' target={'_blank'} textDecoration={'underline'} >solos.so</Link> project
            </Text>
          </Flex>
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

          {/* <Container p={'5rem'} bg="salmon" rounded={10} mb="10rem" id="mint">
            <Heading as='h2' textAlign={'center'} mb="2rem" color="white" css={{'font-family': 'EB Garamond', 'font-size': '2rem'}}>
              Mint your Drone
            </Heading>
            <Center>
              <Minter />
            </Center>
          </Container> */}
          
          <Container p={'5rem'} bg="salmon" rounded={10} mb="10rem" id="mint">
            <Heading as='h2' textAlign={'center'} mb="2rem" color="white" css={{'font-family': 'EB Garamond', 'font-size': '2rem'}}>
              Tokens Drop on April 1nd
            </Heading>
            <Center>
              <Button
                as="a"
                w="100%"
                href='https://discord.gg/v6DK8gWMXh'
              >
                Join the Discord for updates
              </Button>
            </Center>
          </Container>
          
          <Heading as='h3' pb={'20px'} css={{'font-family': 'EB Garamond', 'font-size': '2rem'}}>
            Meet the Drones
          </Heading>

          <Grid
            templateColumns={['repeat(1, 0fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)', 'repeat(4, 1fr)']}
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
          <Heading as='h3' pt="10rem" pb={'10px'} css={{'font-family': 'EB Garamond', 'font-size': '2rem'}}>
            Matched Audio Visual Features
          </Heading>
          <Text fontWeight={'semibold'}>
            Over 65 audio loops combine to create more than 11 million possible outcomes.
          </Text>
          <Text fontWeight={'semibold'} pb={'20px'}>
            Each loop is paired with a visual feature which also has a possible variant. Rare clips have special items.
          </Text>
          <Grid 
            templateColumns={['repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(3, 1fr)', 'repeat(6, 1fr)']}
            gap={2}
          >
            <GridItem rowSpan={1} colSpan={1} paddingLeft={[25, 15]} paddingTop={[25, 15]} backgroundImage={'/images/layers.svg'}>
              <Video videoSrc="https://palindrones.s3.amazonaws.com/bg.mp4" hoverPlay/>
            </GridItem>
            <GridItem rowSpan={1} colSpan={1} paddingLeft={15} paddingTop={15} backgroundImage={'/images/layers.svg'}>
              <Video videoSrc="https://palindrones.s3.amazonaws.com/fx.mp4" hoverPlay/>
            </GridItem>
            <GridItem rowSpan={1} colSpan={1} paddingLeft={15} paddingTop={15} backgroundImage={'/images/layers.svg'}>
              <Video videoSrc="https://palindrones.s3.amazonaws.com/pad.mp4" hoverPlay/>
            </GridItem>
            <GridItem rowSpan={1} colSpan={1} paddingLeft={15} paddingTop={15} backgroundImage={'/images/layers.svg'}>
              <Video videoSrc="https://palindrones.s3.amazonaws.com/rhythm.mp4" hoverPlay/>
            </GridItem>
            <GridItem rowSpan={1} colSpan={1} paddingLeft={15} paddingTop={15} backgroundImage={'/images/layers.svg'}>
              <Video videoSrc="https://palindrones.s3.amazonaws.com/melody.mp4" hoverPlay/>
            </GridItem>
            <GridItem rowSpan={1} colSpan={1} paddingLeft={15} paddingTop={15} backgroundImage={'/images/layers.svg'}>
              <Video videoSrc="https://palindrones.s3.amazonaws.com/incidental.mp4" hoverPlay/>
            </GridItem>
          </Grid>
          <Heading as='h3' pt="10rem" pb={'20px'} css={{'font-family': 'EB Garamond', 'font-size': '2rem'}}>
            Meet the team
          </Heading>
          <Grid
            templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
            gap={0}
          >
            <GridItem rowSpan={1} colSpan={1} bg="grey" position="relative">
              <Image src='/images/jer.jpg' objectFit='cover'/>
              <Image src='/images/jer_hover.jpg' transition={'opacity 0.3s'} _hover={{ opacity: 1 }} opacity={0} objectFit='cover' position="absolute" top="0" left="0"/>
              <Text width={'100%'} fontSize="2xl" color={'white'} textAlign="center" fontWeight={'semibold'} position="absolute" bottom="10px">
                Jer Palecek
              </Text>
            </GridItem>
            <GridItem rowSpan={1} colSpan={1} bg="grey" position="relative">
              <Image src='/images/sam.jpg'objectFit='cover'/>
              <Image src='/images/sam_hover.jpg' transition={'opacity 0.3s'} _hover={{ opacity: 1 }} opacity={0} objectFit='cover' position="absolute" top="0" left="0"/>
              <Text width={'100%'} fontSize="2xl" color={'white'} textAlign="center" fontWeight={'semibold'} position="absolute" bottom="10px">
                Sam Gittis
              </Text>
            </GridItem>
            <GridItem rowSpan={1} colSpan={1} bg="grey" position="relative">
              <Image src='/images/ryan.jpg' objectFit='cover'/>
              <Image src='/images/ryan_hover.jpg' transition={'opacity 0.3s'} _hover={{ opacity: 1 }} opacity={0} objectFit='cover' position="absolute" top="0" left="0"/>
              <Text width={'100%'} fontSize="2xl" color={'white'} textAlign="center" fontWeight={'semibold'} position="absolute" bottom="10px">
                Ryan Cole
              </Text>
            </GridItem>
          </Grid>
        </Container>
      </Container>
    </>
  )
}

export default Mint
