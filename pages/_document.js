import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
        <meta name="google-site-verification" content="ev2zqiEtNbe8-uwfHM4WMVMk4cyoWIn13FaJiKH6WfE" />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />

          <script async src="https://www.googletagmanager.com/gtag/js?id=G-4HVF16RL4C"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-4HVF16RL4C');
              `,
            }}
          />
        </Head>

        <body>
      
        
          <header>
            <nav>
              <ul>
                <li>
                  <h1><a href="/">Download Youtube Thumbnails</a></h1>
                </li>
                
              </ul>
            </nav>
          </header>

       

          <Main />
          <NextScript />
          
    

<footer>
  
		
              
               
             
       
                <p>  <a href="/privacy">Privacy Policy</a>
                </p>
        <p style={{ textAlign: "center", color: "black"  }}>
              © {new Date().getFullYear()} Copyright 2023. Made by love With iScript All rights reserved.
              </p>
              
              
            

</footer>
        </body>
      </Html>
    );
  }
}

export default MyDocument;