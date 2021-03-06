import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';

const SignupPage = ({ data }) => {
	const page = data?.takeshape?.getSignup;
	return (
		<Layout pageName='about'>
			<Helmet>
				<title>{page.title}</title>
      </Helmet>
      <div className="hero hero--text">
        <div className="container">
          <div className="hero__content">
            <h1>{page.hero.heading}</h1>
            <p>{page.hero.text}</p>
            <a href={page.button.url} className="button">{page.button.text}</a>
          </div>
        </div>
      </div>
		</Layout>
	);
};

export const pageQuery = graphql`
	query {
		takeshape {
			getSignup {
				hero {
					header
					text
				}
				button {
					text
					url
				}
				title
			}
		}
	}
`;

export default SignupPage;
