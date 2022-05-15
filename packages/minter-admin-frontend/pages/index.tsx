// import NextHead from 'next/head' // can come out when using layout
import { Layout } from '@create-nft-dao/shared'
import { Minter } from '../components/Minter'
import { Center, Container, Grid, GridItem, Heading, Text, Flex, Image, Link } from '@chakra-ui/react'
import { NavbarLinks } from '../components/NavbarLinks'

const Mint = () => {
  const layoutProps = {
    title: 'Solos | Horizons by Johnny Defeo',
    description: 'The scenes in my paintings could be omens, dreamy premonitions, or stolen glances of the inevitable-- a soft eyed look at our lands unpopulated, when the wild and untamed is punctuated with moments of serenity with no one there to see it.'
  }

  return (
    <Layout customMeta={layoutProps} navbarLinks={NavbarLinks}>
      <Container maxWidth="container.xl" pb="2rem">
        <Flex alignItems={'center'} justifyContent='space-between'>
          <Image src='/images/solos-logo.svg' objectFit='cover' width={100}/>
          <Text color={'gray.400'}>
            A <Link href='http://solos.so' target={'_blank'} textDecoration={'underline'} >solos.so</Link> project
          </Text>
        </Flex>
      </Container>
      <Container maxWidth="container.xl" pt={'10rem'} pb={'10rem'} backgroundImage={'images/header_1.jpg'} backgroundRepeat={'no-repeat'} backgroundSize="cover">
        <Flex alignItems={'center'} flexDir={'column'}>
          <Heading as='h1' color="white" css={{ 'textAlign': 'center', 'fontFamily': 'Abril Fatface', 'fontSize': '5rem !important'}}>
            Johnny Defeo
          </Heading>
          <Text fontSize='2xl' color="white" css={{ 'textAlign': 'center'}}>
            An exclusive painting NFT project brought to you by SOLOS
          </Text>
        </Flex>
      </Container>
      <Container maxWidth="container.xl" >
        <Container maxW="container.lg">
          <Container p={'10rem'} id="mint" display={'none'}>
            <Heading as='h2' textAlign={'center'} mb="2rem" css={{'fontFamily': 'Abril Fatface', 'fontSize': '2rem'}}>
              Mint your Piece
            </Heading>
            <Center>
              <Minter />
            </Center>
          </Container>
          
          <Heading as='h3' pb={'3rem'} pt="10rem" textAlign="center" css={{'fontFamily': 'Abril Fatface', 'fontSize': '2rem'}}>
            Escape digital brutalism
          </Heading>
          <Flex justifyContent={'center'} direction={'column'} height={'100%'}>
            <Flex alignItems={'center'} justifyContent="center" mb={'2rem'}>
              <Heading as='h3' size='lg' mr={'1rem'} width={'50%'} textAlign={'right'} css={{'fontFamily': 'Abril Fatface'}}>
                232
              </Heading>
              <Text width={'50%'} fontWeight={'semibold'}>
                NFTs for this limited drop
              </Text>
            </Flex>
            <Flex alignItems={'center'} justifyContent="center" mb={'2rem'}>
              <Heading as='h3' size='lg' mr={'1rem'} width={'50%'} textAlign={'right'} css={{'fontFamily': 'Abril Fatface'}}>
                3000px &times; 1000px
              </Heading>
              <Text width={'50%'} fontWeight={'semibold'}>
                Header images
              </Text>
            </Flex>
            <Flex alignItems={'center'} justifyContent="center" mb={'2rem'}>
              <Heading as='h3' size='lg' mr={'1rem'} width={'50%'} textAlign={'right'} css={{'fontFamily': 'Abril Fatface'}}>
                30+
              </Heading>
              <Text width={'50%'} fontWeight={'semibold'}>
                Layers with variations
              </Text>
            </Flex>
            <Flex alignItems={'center'} justifyContent="center" mb={'2rem'}>
              <Heading as='h3' size='lg' mr={'1rem'} width={'50%'} textAlign={'right'} css={{'fontFamily': 'Abril Fatface'}}>
                Billions
              </Heading>
              <Text width={'50%'} fontWeight={'semibold'}>
                of possible combinations
              </Text>
            </Flex>
            <Flex alignItems={'center'} justifyContent="center" mb={'2rem'}>
              <Heading as='h3' size='lg' mr={'1rem'} width={'50%'} textAlign={'right'} css={{'fontFamily': 'Abril Fatface'}}>
                100%
              </Heading>
              <Text width={'50%'} fontWeight={'semibold'}>
                Hand painted artwork
              </Text>
            </Flex>
          </Flex>
          <Container maxW="container.xl" pt="10rem">
            <Image src='/images/render1.jpg' mb="2rem" borderRadius="10px" width="100%"/>
            <Image src='/images/render2.jpg' mb="2rem" borderRadius="10px" width="100%"/>
            <Image src='/images/render3.jpg' mb="2rem" borderRadius="10px" width="100%"/>
            <Image src='/images/render4.jpg' mb="2rem" borderRadius="10px" width="100%"/>
            <Image src='/images/render5.jpg' mb="2rem" borderRadius="10px" width="100%"/>
            <Image src='/images/render6.jpg' mb="2rem" borderRadius="10px" width="100%"/>
          </Container>
          <Grid
            templateColumns={['repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)']}
            gap={0} mt="10rem"
          >
            <GridItem rowSpan={1} colSpan={2} position="relative">
              <Image src='/images/bio_pics.png' width="100%"/>
            </GridItem>
            <GridItem rowSpan={1} colSpan={2} position="relative">
              <Heading as='h3' pl={['0', '0', '4rem']} css={{'fontFamily': 'Abril Fatface', 'fontSize': '2rem'}}>
                About the Work
              </Heading>
              <Text width={'100%'} fontSize="xl" color={'black'} textAlign="left" pl={['0', '0', '4rem']} pb="1rem">
                In my paintings I imagine a time that predates the daily rituals, bloody fights, healing ceremonies, and protective structures created by humans. Or maybe a time when all of us are gone and there are just herds of wild horses roaming the plains, coyotes skulking through the long shadows of day’s end, and mountain vistas devoid of vacation homes, forest roads, and ski lifts. I oscillate regularly, as I am sure many do, between wishing to save the world, to commit myself to the best course and fight for a better future, and wishing the planet would just hurry up and get it over with already. The scenes in my paintings could be omens, dreamy premonitions, or stolen glances of the inevitable-- a soft eyed look at our lands unpopulated, when the wild and untamed is punctuated with moments of serenity with no one there to see it. 
              </Text>
              <Link href='https://www.instagram.com/johnnycakesdefeo/' target="_blank" color={'blue.400'} pl={['0', '0', '4rem']}>Artist Instagram</Link>
            </GridItem>
          </Grid>
          <Container maxW="container.lg" pt="10rem">
            <Heading as='h3' textAlign="center" mb="1rem" css={{'fontFamily': 'Abril Fatface', 'fontSize': '2rem'}}>
              5% of all proceeds go to&nbsp;
              <Link href="https://www.nature.org/en-us/" target="_blank" color={'blue.400'}>Nature Conservancy</Link>
            </Heading>
          </Container>
          <Container maxW="container.lg" pt="10rem">
            <Heading as='h3' textAlign="center" mb="1rem" css={{'fontFamily': 'Abril Fatface', 'fontSize': '2rem'}}>
              Get to know Johnny
            </Heading>
            <iframe width="100%" height="500" src="https://www.youtube-nocookie.com/embed/q_eayEoL-Ro" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
          </Container>
        </Container>
      </Container>
    </Layout>
  )
}

export default Mint
