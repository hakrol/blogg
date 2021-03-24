import NextHead from "next/head";
import { number, string, oneOfType } from 'prop-types';

export default function Head({ title = "" }) {
	return (
		<NextHead>
			<title>
				{title}
				{title ? " | " : ""}Create Next App
			</title>
			<link rel="icon" href="/favicon.ico" />
		</NextHead>
	);
}

Head.propTypes = {
    title: oneOfType([number, string]),
}