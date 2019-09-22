import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Form, Input } from '@rocketseat/unform';

import { updateProfileRequest } from '~/store/modules/user/actions';

import AvatarInput from './AvatarInput';

import { Container } from './styles';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);

  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />

        <Input name="name" placeholder="Full name" />
        <Input name="email" type="email" placeholder="Email address" />

        <hr />

        <Input
          name="oldPassword"
          type="password"
          placeholder="Your current password"
        />

        <Input
          name="password"
          type="password"
          placeholder="Your new password"
        />

        <Input
          name="confirmPassword"
          type="password"
          placeholder="Password confirmation"
        />

        <button type="submit">Update Profile</button>
      </Form>

      <button type="button">Logout</button>
    </Container>
  );
}
