import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  GridItem,
  Heading,
  Input,
  SimpleGrid,
  Text,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';
import { Butterfly } from '../../../../../server/controllers/butterfly/types';
import isURL from '../../../../../utils/utils';

const CreateButterfly = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isDirty,
      isSubmitting,
    },
  } = useForm<Butterfly>();

  const sendButterfly = (data: Butterfly) => {
    axios
      .post('http://localhost:8000/butterflies', data)
      .then(() => {
        navigate('/butterflies');
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const colSpan = useBreakpointValue({
    base: 2,
    md: 1,
  });

  return (
    <VStack w="full" h="full" p={0} spacing={10} alignItems="flex-start">
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">Create a new 🦋</Heading>
        <Text>Butterflies love company!</Text>
      </VStack>
      <form
        onSubmit={handleSubmit(sendButterfly)}
      >
        <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
          <GridItem colSpan={colSpan}>
            <FormControl isInvalid={!!errors.name}>
              <FormLabel htmlFor="name">Butterfly name</FormLabel>
              <Input
                id="name"
                placeholder="name"
                {...register('name', {
                  required: 'This is required',
                  minLength: {
                    value: 4,
                    message: 'Minimum length should be 4',
                  },
                })}
              />
              <FormErrorMessage>
                {errors.name && errors.name.message}
              </FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem colSpan={colSpan}>
            <FormControl isInvalid={!!errors.species}>
              <FormLabel htmlFor="species">Species</FormLabel>
              <Input
                id="species"
                placeholder="species"
                {...register('species', {
                  required: 'This is required',
                })}
              />
              <FormErrorMessage>
                {errors.species && errors.species.message}
              </FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl isInvalid={!!errors.image_url}>
              <FormLabel htmlFor="image_url">Link to the picture</FormLabel>
              <Input
                id="image_url"
                placeholder="image_url"
                {...register('image_url', {
                  validate: (value) => isURL(value) || 'Field value has to be a valid url',
                  required: 'This is required',
                })}
              />
              <FormErrorMessage>
                {errors.image_url && errors.image_url.message}
              </FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl isInvalid={!!errors.link}>
              <FormLabel htmlFor="link">Link to wiki page</FormLabel>
              <Input
                id="link"
                placeholder="link"
                {...register('link', {
                  validate: (value) => isURL(value) || 'Field value has to be a valid url',
                  required: 'This is required',
                })}
              />
              <FormErrorMessage>
                {errors.link && errors.link.message}
              </FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
              Let's create a butterfly!
            </Button>
          </GridItem>
        </SimpleGrid>
      </form>
    </VStack>
  );
  //
  // return (
  //   <div>
  //     <form
  //       className={styles.form}
  //       onSubmit={handleSubmit(sendButterfly)}
  //     >
  //       <label htmlFor="name">name</label>
  //       <input
  //         {...register('name', { required: 'This field is required' })}
  //         id="name"
  //       />
  //       {errors.name && <p className={styles.errorMessage}
  //       >{errors.name.message}</p>}
  //
  //       <label htmlFor="species">species</label>
  //       <input
  //         {...register('species', {
  //           required: 'This field is required',
  //           maxLength: {
  //             value: 20,
  //             message: 'You exceeded the max length',
  //           },
  //         })}
  //       />
  //       {errors.species && <p className={styles.errorMessage}
  //       >{errors.species.message}</p>}
  //
  //       <label htmlFor="image_url">image url</label>
  //       <input
  //         {...register('image_url', {
  //           required: 'This field is required',
  //         })}
  //       />
  //       {errors.image_url && <p className={styles.errorMessage}
  //       >{errors.image_url.message}</p>}
  //
  //
  //       <label htmlFor="link">link</label>
  //       <input
  //         {...register('link', {
  //           required: 'This field is required',
  //         })}
  //       />
  //       {errors.link && <p className={styles.errorMessage}
  //       >{errors.link.message}</p>}
  //
  //       <button type="submit">Submit</button>
  //     </form>
  //   </div>
  // );
};

// <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
//
//   <GridItem colSpan={colSpan}>
//     <FormControl>
//       <FormLabel>Name</FormLabel>
//       <Input placeholder="John"/>
//     </FormControl>
//   </GridItem>
//   <GridItem colSpan={colSpan}>
//     <FormControl>
//       <FormLabel>Species</FormLabel>
//       <Input placeholder="Doe"/>
//     </FormControl>
//   </GridItem>
//   <GridItem colSpan={2}>
//     <FormControl>
//       <FormLabel>Image URL</FormLabel>
//       <Input placeholder="Blvd. Broken Dreams 21"/>
//     </FormControl>
//   </GridItem>
//   <GridItem colSpan={colSpan}>
//     <FormControl>
//       <FormLabel>Link</FormLabel>
//       <Input placeholder="San Francisco"/>
//     </FormControl>
//   </GridItem>
//   <GridItem colSpan={2}>
//     <Button variant="primary" size="lg" w="full" isLoading={isSubmitting} type="submit">
//       Let's create a butterfly!
//     </Button>
//   </GridItem>
// </form>
// </SimpleGrid>

export default CreateButterfly;
