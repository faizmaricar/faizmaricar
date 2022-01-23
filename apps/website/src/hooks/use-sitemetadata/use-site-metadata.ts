import { useStaticQuery, graphql } from 'gatsby';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UseSiteMetadata {
  defaultTitle: string;
  titleTemplate: string;
  defaultDescription: string;
  siteUrl: string;
  defaultImage: string;
  twitterUsername: string;
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        twitterUsername
      }
    }
  }
`;

export function useSiteMetadata(): UseSiteMetadata {
  const { site } = useStaticQuery(query);

  return site.siteMetadata;
}

export default useSiteMetadata;
