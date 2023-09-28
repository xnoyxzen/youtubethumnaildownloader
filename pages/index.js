import { useState } from "react";
import copy from "copy-to-clipboard";

const Index = () => {
  const [videoURL, setVideoURL] = useState("");
  const [thumbnailOptions, setThumbnailOptions] = useState([]);

  const getYouTubeThumbnail = (url) => {
    let regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
    let match = url.match(regExp);

    if (match && match[1].length === 11) {
      const videoURL = match[1];
      const thumbnailBaseUrl = "http://img.youtube.com/vi/";

      const options = [
        { resolution: "HD (1280x720)", code: "maxresdefault" },
        { resolution: "SD (640x480)", code: "sddefault" },
        { resolution: "Normal (480x360)", code: "hqdefault" },
        { resolution: "Medium (320x180)", code: "mqdefault" },
        { resolution: "Low (120x90)", code: "default" },
      ];

      const thumbnailOptions = options.map((option) => ({
        resolution: option.resolution,
        url: `${thumbnailBaseUrl}${videoURL}/${option.code}.jpg`,
      }));

      setThumbnailOptions(thumbnailOptions);
      setVideoURL("");
    } else {
      setThumbnailOptions([]);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8">
       
        <p className="text-gray-600">
        Get high-quality thumbnail images for free with our Image Grabber tool. Easily download YouTube thumbnail images and photos of various qualities using this application. Simply paste the video's thumbnail URL into the input box below and click 'Get Youtube Thumbnail'.</p>
      </header>
      <div className="text-center">
        <input
          type="text"
          className="w-full md:w-1/2 px-4 py-2 border rounded"
          placeholder="Enter YouTube URL"
          value={videoURL}
          onChange={(e) => setVideoURL(e.target.value)}
        />
        <button
          className="btn-blue mt-2"
          onClick={() => getYouTubeThumbnail(videoURL)}
        >
          Get Thumbnails images
        </button>
      </div>
      {thumbnailOptions.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Thumbnail Options</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {thumbnailOptions.map((option, index) => (
              <div key={index} className="thumbnail-option">
                <img src={option.url} alt={`Thumbnail ${index + 1}`} />
                <button
                  className="btn-blue mt-2"
                  onClick={() => copy(option.url)}
                >
                  Copy Image URL
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
	  
    <div>




</div>
	  
    </div>
    
  );
};

<div>

     <p></p>
 <p></p>
 <h2 dir="auto">Unlocking Success: The Importance of YouTube Thumbnails and Strategies for Creating Attractive Images</h2>
<h3 dir="auto">Introduction:</h3>
<div dir="auto">In the ever-expanding world of digital content consumption, YouTube thumbnails serve as crucial gateways to capturing viewers' attention. These clickable images play a pivotal role in attracting potential viewers, enticing them to click on your videos amidst the overwhelming sea of content. In this article, we will shed light on the significance of YouTube thumbnails and delve into various types of attractive thumbnails that can skyrocket your video's click-through rate.</div>
<div dir="auto">&nbsp;</div>
<h3 dir="auto">1. The Power of YouTube Thumbnails:</h3>
<div dir="auto">- Understanding the visual impact: A well-crafted thumbnail can instantly convey the message and essence of your video, piquing viewers' curiosity.</div>
<div dir="auto">- Increasing click-through rates: Compelling thumbnails act as compelling visual invitations, encouraging viewers to click and watch your content.</div>
<div dir="auto">- Boosting video discoverability: Thumbnails can also influence YouTube's algorithm, leading to higher rankings and increased exposure.</div>
<div dir="auto">&nbsp;</div>
<h3 dir="auto">2. Types of Attractive Thumbnails:</h3>
<div dir="auto">a) Eye-catching Imagery:</div>
<div dir="auto">- Vibrant colors and high contrast: Utilize bold and captivating color schemes to make your thumbnails stand out in a crowded feed.</div>
<div dir="auto">- Emotive expressions: Incorporate faces expressing relevant emotions or reactions to generate intrigue and curiosity.</div>
<div dir="auto">- Thumbnail text overlays: Include concise and captivating text overlays that supplement the visual appeal, highlighting your video's value proposition.</div>
<div dir="auto">&nbsp;</div>
<h3 dir="auto">b) Storytelling through Thumbnails:</h3>
<div dir="auto">- Visual storytelling: Craft thumbnails that depict an intriguing scene or a sneak peek into the content, creating anticipation and engagement.</div>
<div dir="auto">- Sequenced Thumbnails: Create a series of thumbnails with a consistent visual theme, narrating a story across multiple videos, and building brand recognition.</div>
<div dir="auto">&nbsp;</div>
<h3 dir="auto">c) Branding and Consistency:</h3>
<div dir="auto">- Establishing brand consistency: Use consistent color schemes, font styles, and design elements that align with your channel's branding to foster recognition and trust.</div>
<div dir="auto">- Unique style: Develop a distinct visual style that sets your thumbnails apart, making them instantly recognizable and memorable.</div>
<div dir="auto">&nbsp;</div>
<h3 dir="auto">3. Tools for Downloading YouTube Thumbnails:</h3>
<div dir="auto">To ensure you optimize the design and layout of your eye-catching thumbnails, you may need to download and work with them directly. Here are some popular tools for downloading YouTube thumbnails:</div>
<div dir="auto">- YouTube Thumbnail Downloader</div>
<div dir="auto">- YouTube Thumbnail Grabber</div>
<div dir="auto">- Download YouTube Thumbnail</div>
<div dir="auto">- YT Image Downloader</div>
<div dir="auto">- Image YouTube Download</div>
<div dir="auto">- YouTube Image View Ads Download</div>
<div dir="auto">&nbsp;</div>

  <h2>How click-worthy thumbnails can impact your channel's success</h2>

  <h2>Section 1: The Art of Click-Worthy Thumbnails</h2>
  <h3>1.1 Understanding the psychology behind click-worthy thumbnails</h3>
  <p>The power of visual cues</p>
  <p>Utilizing emotions to engage viewers</p>

  <h3>1.2 The key elements of an irresistible YouTube thumbnail</h3>
  <p>Eye-catching colors and contrast</p>
  <p>Effective use of text and fonts</p>

  <h3>1.3 Thumbnail design techniques that grab attention</h3>
  <p>Using compelling visuals</p>
  <p>Storytelling through thumbnails</p>

  <h2>Section 2: Double Your Views with These Proven YouTube Thumbnail Hacks</h2>
  <h3>2.1 Leveraging trends and popular topics</h3>
  <p>Researching and capitalizing on trending topics</p>
  <p>Navigating the fine line between relevance and clickbait</p>

  <h3>2.2 Optimizing thumbnail size and format</h3>
  <p>Ideal dimensions and formats for YouTube thumbnails</p>
  <p>Ensuring compatibility across devices</p>

  <h3>2.3 A/B testing and analyzing thumbnail performance</h3>
  <p>Experimenting with different thumbnail variations</p>
  <p>Utilizing analytics to evaluate effectiveness</p>

  <h2>Section 3: The Ultimate Guide to Design Jaw-Dropping YouTube Thumbnails</h2>
  <h3>3.1 Tools and software for creating stunning thumbnails</h3>
  <p>Overview of popular thumbnail creation tools</p>
  <p>Step-by-step tutorial for designing professional-looking thumbnails</p>

  <h3>3.2 Tips and tricks from successful YouTubers</h3>
  <p>Insights from top creators on thumbnail strategies</p>
  <p>Case studies showcasing effective thumbnail techniques</p>

  <h3>3.3 Thumbnail optimization for search visibility</h3>
  <p>Incorporating relevant keywords in thumbnails</p>
  <p>Maximizing thumbnail visibility in search results</p>

  <h3 dir="auto">Conclusion:</h3>
<div dir="auto">In the fierce competition for viewer attention on YouTube, thumbnails act as your first impression and can make or break the success of your videos. By leveraging attractive thumbnails and employing diverse strategies, you can boost your video's click-through rates, increaseTitle: "Unlocking Success: The Importance of YouTube Thumbnails and Strategies for Creating Attractive Images"</div>
  <p>The importance of YouTube thumbnails ivn attracting views</p>

  

</div>

export default Index;
