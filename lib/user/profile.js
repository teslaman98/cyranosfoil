import React, { Component } from 'react';
import { useUser } from '@auth0/nextjs-auth0';

export default function ProfileInfo(){
  const user = useUser();

  return {
    props: {
      user
    }
  }

}
