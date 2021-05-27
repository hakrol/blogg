import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import Heading from "../components/layout/Heading";

export default function Admin() {
    return (
        <>
            <Head title="Admin" />

            <Layout>
                <Heading h1="Admin" />
                <p>Here you can admin all you want</p>
            </Layout>
        </>
    );
}
