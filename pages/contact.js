import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import ContactForm from "../components/contact/ContactForm";
import Heading from "../components/layout/Heading";

export default function Contact() {
    return (
        <>
            <Head title="Contact" />
            <Layout>
                <Heading h1="Contact" />
                <ContactForm />
            </Layout>
        </>
    );
}
