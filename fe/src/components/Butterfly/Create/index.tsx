import React from 'react';
import { useForm } from 'react-hook-form';
import { Butterfly } from '../../../../../server/controllers/butterfly/types';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const styles = require('./create.css').default;

const CreateButterfly = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Butterfly>();

  const sendButterfly = (data: Butterfly) => {
    axios
        .post(`http://localhost:8000/butterflies`, data)
        .then(() => {
          navigate('/butterflies');
        })
        .catch((error) => {
          console.error(error);
        });
  };

  return (
    <div>
      <form
        className={styles.form}
        onSubmit={handleSubmit(sendButterfly)}
      >
        <label htmlFor="name">name</label>
        <input
          {...register('name', { required: 'This field is required' })}
          id="name"
        />
        {errors.name && <p className={styles.errorMessage}
        >{errors.name.message}</p>}

        <label htmlFor="species">species</label>
        <input
          {...register('species', {
            required: 'This field is required',
            maxLength: {
              value: 20,
              message: 'You exceeded the max length',
            },
          })}
        />
          {errors.species && <p className={styles.errorMessage}
          >{errors.species.message}</p>}

        <label htmlFor="image_url">image url</label>
        <input
          {...register('image_url', {
            required: 'This field is required',
          })}
        />
          {errors.image_url && <p className={styles.errorMessage}
          >{errors.image_url.message}</p>}


        <label htmlFor="link">link</label>
        <input
          {...register('link', {
            required: 'This field is required',
          })}
        />
          {errors.link && <p className={styles.errorMessage}
          >{errors.link.message}</p>}

          <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateButterfly;
