const path = require('path');

const gatsbyRequiredRules = path.join(
  process.cwd(),
  'node_modules',
  'gatsby',
  'dist',
  'utils',
  'eslint-rules',
);

module.exports = {
  siteMetadata: {
    title: 'HOW Stanica',
    siteUrl: 'https://www.yourdomain.tld',
  },
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      accessToken: 'Z4Ko14_QTyR5VAirbXZT-e8E1f-CcUNgVHzNnujqU8U',
      spaceId: 'i9ibumq63mrh',
    },
  },
  'gatsby-plugin-image',
  'gatsby-plugin-sharp',
  {
    resolve: 'gatsby-plugin-root-import',
    options: {
      assets: path.join(__dirname, 'src', 'assets'),
      utils: path.join(__dirname, 'src', 'components'),
    },
  },
  {
    resolve: 'gatsby-plugin-google-fonts',
    options: {
      fonts: [
        'joti one',
        'montserrat\:200,400,700',
      ],
      display: 'swap',
    },
  },
  'gatsby-transformer-sharp',
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-styled-components',
  {
    resolve: 'gatsby-plugin-eslint',
    options: {
      rulePaths: [gatsbyRequiredRules],
      stages: ['develop'],
      extensions: ['js', 'jsx', 'ts', 'tsx'],
      exclude: ['node_modules', 'bower_components', '.cache', 'public'],
    },
  },
  {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      trackingId: 'i9ibumq63mrh',
    },
  },
  'gatsby-plugin-sitemap', {
    resolve: 'gatsby-plugin-manifest',
    options: {
      icon: 'src/assets/images/icon.png',
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: './src/assets/images/',
    },
    __key: 'images',
  }],
};
