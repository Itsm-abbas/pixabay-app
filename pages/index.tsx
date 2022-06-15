import React from "react";
import Main from "../components/Main";
import Form from "../components/Form";
import Head from "next/head";
import { GetServerSideProps } from "next";
type Props = {
  data: any[];
  search: string;
};
const Home = ({ data, search }: Props) => {
  return (
    <React.Fragment>
      <Head>
        <title>DreamPixa</title>
      </Head>
      <Form />
      <Main data={data} search={search} />
    </React.Fragment>
  );
};

export default Home;
export const getServerSideProps: GetServerSideProps = async (context) => {
  const search = context.query.search || "computer";
  const api_key = process.env.API_KEY;
  const data = await fetch(
    `https://pixabay.com/api/?key=${api_key}&q=${search}`
  );
  const result = await data.json();
  return {
    props: {
      data: result.hits,
      search: search,
    },
  };
};
