import "../styles/index.css";
import { Fragment } from "react";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <DefaultSeo
        title="Youtube Thumbnail Download 4k -  Save yt thumbnail"
        description="Download youtube thumbnail image and Grab any youtube video thumbnails images easy way get Thumbnail Image and save youtube short video thumbnail with our free online thumbnail downloader tool"
        canonical="https://youtube-thumbnail-viewer.com"
        openGraph={{
          url: "https://youtube-thumbnail-viewer.com",
          title: "Youtube Thumbnail Download 4k -  Save yt thumbnail",
          description: "Download youtube thumbnail image and Grab any youtube video thumbnails images easy way get Thumbnail Image and save youtube short video thumbnail with our free online thumbnail downloader tool",
          site_name: "Youtube Thumbnail Downloader",
        }}
      />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
