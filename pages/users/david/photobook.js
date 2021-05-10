import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import style from '../../../styles/pages/photobook.module.css';
import React from 'react';
import fetch from 'isomorphic-unfetch';
import useSWR from 'swr';

const API_URL = 'http://192.168.1.129:8081/listUsers';

async function fetcher(url) {
  const res = await fetch(url);
  const json = await res.json();
  return json;
}

export default function PhotoBook () {
  
  const { data, error } = useSWR( API_URL, fetcher );

  if(error) return <div>failed to load</div>;
  if(!data) return <div>loading...</div>;

  return(
    <div className={style.BodyContainer}>
      <div className={style.EventContainer}>    
        {data}
      </div>
    </div>
  )
}

function Event() {}
