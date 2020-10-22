import Head from 'next/head'

export const Meta = ({ title }) => {
  const defaultTitle = 'PoolTogether'
  title = title ? `${title} - ${defaultTitle}` : defaultTitle

  const url = `https://pooltogether.com`
  const description = `PoolTogether`
  const keywords = 'ethereum'
  const twitterHandle = '@PoolTogether_'

  return (
    <>
      <Head>
        <title>{title}</title>

        <meta name='viewport' content='width=device-width,initial-scale=1,shrink-to-fit=no' />
        <meta charSet='utf-8' />

        {/* <link rel='stylesheet' href='https://use.typekit.net/ezg2vko.css' /> */}
        {/* <link rel="stylesheet" href="https://use.typekit.net/taj2nrx.css"></link> */}

        <link key='favicon' rel='icon' type='image/png' href='/favicon.png' />
        
        <link key='animate-stylesheet' rel='stylesheet' href='/animate.css' />

        <meta key='theme-color' name='theme-color' content='#1a083a' />
        <meta key='description' name='description' content={description} />
        <meta key='keywords' name='keywords' content={keywords} />
        <meta key='author' name='author' content='PoolTogether LLC' />
        <meta key='copyright' name='copyright' content={`Copyright ${new Date().getFullYear()}`} />

        <meta property='og:title' content={title} />
        <meta key='og:description' property='og:description' content={description} />
        <meta key='og:site_name' property='og:site_name' content={title} />
        <meta key='og:url' property='og:url' content={url} />
        <meta key='og:type' property='og:type' content='website' />
        <meta key='og:image' property='og:image' content={`${url}/pooltogether-facebook-share-image-1200-630@2x.png`} />
        <meta key='og:rich_attachment' property='og:rich_attachment' content='true' />
        <meta key='og:image:width' property='og:image:width' content='1200' />
        <meta key='og:image:height' property='og:image:height' content='630' />
        
        <meta property='twitter:title' content={title} />
        <meta key='twitter:card' property='twitter:card' content='summary_large_image' />
        <meta key='twitter:site' property='twitter:site' content={twitterHandle} />
        <meta key='twitter:image' property='twitter:image' content={`${url}/pooltogether-twitter-share-image-1200-675@2x.png`} />
        {/* <meta key='twitter:image:src' property='twitter:image:src' content={`${url}/pooltogether-twitter-share-image-1200-675@2x.png`} /> */}
        <meta property='twitter:url' content={url} />
        <meta key='twitter:creator' property='twitter:creator' content={twitterHandle} />
      </Head>
    </>
  )
}