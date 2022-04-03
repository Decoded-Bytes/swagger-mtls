import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import dynamic from "next/dynamic";
import "swagger-ui-react/swagger-ui.css"

export default function Home() {

  const SwaggerUI = dynamic(() => import('swagger-ui-react'), {ssr: false});

  return (
      <SwaggerUI url="https://petstore.swagger.io/v2/swagger.json" docExpansion="list"/>
  )
}
