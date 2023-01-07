import { Container, Heading, Box, VStack } from '@chakra-ui/react';
import { FadeOnView } from '@components/animations/FadeOnView';
import { AttractionCard } from './AttractionCard';

const attractions = [
  {
    isReversed: true,
    heading: 'Lorem Ipsum',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente corporis aperiam, nisi at, et magnam culpa totam sit ab, illo ducimus id ratione iure consequuntur dicta tempora ex veniam! Quidem, laborum. Optio, aliquam delectus! Autem unde assumenda culpa accusamus beatae laudantium molestias minus suscipit nihil. Quis ad accusamus ducimus a! Aliquam numquam consectetur pariatur neque possimus non error? Tempora cum cumque dolorem harum id doloribus culpa! Maiores voluptatem, deserunt iste eveniet optio velit ad, delectus odit incidunt mollitia blanditiis inventore enim sapiente accusantium reprehenderit veniam sed aspernatur minus corrupti! Obcaecati, ex ut voluptatem voluptas nisi doloremque reiciendis nobis vel nihil.',
    imageFileName: 'entrance.jpg',
    imageAlt: '',
  },
  {
    isReversed: false,
    heading: 'Lorem Ipsum',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente corporis aperiam, nisi at, et magnam culpa totam sit ab, illo ducimus id ratione iure consequuntur dicta tempora ex veniam! Quidem, laborum. Optio, aliquam delectus! Autem unde assumenda culpa accusamus beatae laudantium molestias minus suscipit nihil. Quis ad accusamus ducimus a! Aliquam numquam consectetur pariatur neque possimus non error? Tempora cum cumque dolorem harum id doloribus culpa! Maiores voluptatem, deserunt iste eveniet optio velit ad, delectus odit incidunt mollitia blanditiis inventore enim sapiente accusantium reprehenderit veniam sed aspernatur minus corrupti! Obcaecati, ex ut voluptatem voluptas nisi doloremque reiciendis nobis vel nihil.',
    imageFileName: 'entrance.jpg',
    imageAlt: '',
  },
  {
    isReversed: true,
    heading: 'Lorem Ipsum',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente corporis aperiam, nisi at, et magnam culpa totam sit ab, illo ducimus id ratione iure consequuntur dicta tempora ex veniam! Quidem, laborum. Optio, aliquam delectus! Autem unde assumenda culpa accusamus beatae laudantium molestias minus suscipit nihil. Quis ad accusamus ducimus a! Aliquam numquam consectetur pariatur neque possimus non error? Tempora cum cumque dolorem harum id doloribus culpa! Maiores voluptatem, deserunt iste eveniet optio velit ad, delectus odit incidunt mollitia blanditiis inventore enim sapiente accusantium reprehenderit veniam sed aspernatur minus corrupti! Obcaecati, ex ut voluptatem voluptas nisi doloremque reiciendis nobis vel nihil.',
    imageFileName: 'entrance.jpg',
    imageAlt: '',
  },
  {
    isReversed: false,
    heading: 'Lorem Ipsum',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente corporis aperiam, nisi at, et magnam culpa totam sit ab, illo ducimus id ratione iure consequuntur dicta tempora ex veniam! Quidem, laborum. Optio, aliquam delectus! Autem unde assumenda culpa accusamus beatae laudantium molestias minus suscipit nihil. Quis ad accusamus ducimus a! Aliquam numquam consectetur pariatur neque possimus non error? Tempora cum cumque dolorem harum id doloribus culpa! Maiores voluptatem, deserunt iste eveniet optio velit ad, delectus odit incidunt mollitia blanditiis inventore enim sapiente accusantium reprehenderit veniam sed aspernatur minus corrupti! Obcaecati, ex ut voluptatem voluptas nisi doloremque reiciendis nobis vel nihil.',
    imageFileName: 'entrance.jpg',
    imageAlt: '',
  },
];

export function Attractions() {
  return (
    <FadeOnView>
      <Container
        maxW="container.lg"
        id="attractions"
        textAlign={{ base: 'center', lg: 'left' }}
        mb="5rem"
      >
        <Heading as="h3" mb="5rem">
          Attractions
        </Heading>
        <Box>
          <VStack spacing={{ base: '3rem', lg: '5rem' }}>
            {attractions.map((attraction) => (
              <AttractionCard
                key={attraction.heading}
                isReversed={attraction.isReversed}
                heading={attraction.heading}
                description={attraction.description}
                imageFileName={attraction.imageFileName}
                imageAlt={attraction.imageAlt}
              />
            ))}
          </VStack>
        </Box>
      </Container>
    </FadeOnView>
  );
}
