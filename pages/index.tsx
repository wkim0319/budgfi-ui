import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Container } from "react-bootstrap";
import HeroBanner from "../components/HeroBanner";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Budgfi</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container style={{marginTop: '10%'}}>
                <HeroBanner></HeroBanner>
            </Container>
        </>
    );
};

export default Home;
