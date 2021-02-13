import React, { Component } from 'react';
import { useUser } from '@auth0/nextjs-auth0';

export default function Profile(){
  const user = useUser();

  return {
    props: {
      user
    }
  }

}