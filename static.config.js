// import axios from 'axios'
import React from 'react'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

export default {
  siteRoot: 'https://conradlo.com',
  getSiteData: () => ({
    title: 'Conrad Lo',
  }),
  Document: ({ Html, Head, Body, children, siteData }) => (
    <Html lang="en-US">
      <Head>
        <title>{siteData.title}</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=9, chrome=1"/>
        <meta name='viewport' content='user-scalable=no, width=device-width, initial-scale=1.0'/>
        <link rel="icon" type="image/png" href="favicon-32x32.png" sizes="32x32"/>
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
  getRoutes: async () => {
    // const { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return [
      {
        path: '/',
        component: 'src/containers/Home',
      },
      // {
      //   path: '/about',
      //   component: 'src/containers/About',
      // },
      // {
      //   path: '/blog',
      //   component: 'src/containers/Blog',
      //   getData: () => ({
      //     posts,
      //   }),
      //   children: posts.map(post => ({
      //     path: `/post/${post.id}`,
      //     component: 'src/containers/Post',
      //     getData: () => ({
      //       post,
      //     }),
      //   })),
      // },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
  paths: {
    dist: 'docs', // The production output directory.
  },
  webpack: (config, { defaultLoaders, stage }) => {
    let loaders = []

    if (stage === 'dev') {
      loaders = [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }]
    } else {
      loaders = [
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            minimize: stage === 'prod',
            sourceMap: false,
          },
        },
        {
          loader: 'sass-loader',
          options: { includePaths: ['src/'] },
        },
      ]

      // Don't extract css to file during node build process
      if (stage !== 'node') {
        loaders = ExtractTextPlugin.extract({
          fallback: {
            loader: 'style-loader',
            options: {
              sourceMap: false,
              hmr: false,
            },
          },
          use: loaders,
        })
      }
    }

    config.module.rules = [
      {
        oneOf: [
          {
            test: /\.s(a|c)ss$/,
            use: loaders,
          },
          defaultLoaders.cssLoader,
          defaultLoaders.jsLoader,
          defaultLoaders.fileLoader,
        ],
      },
    ]
    return config
  },
}
