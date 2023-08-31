

const AppleVideo = () => {
  return (
    <div className="apple-video" style={{width:'100%', height:'100%'}}> {/* Video with full width */}
      <iframe width="100%"
              height="100%"
              src="https://www.youtube.com/embed/xpmfTNjpF8U" 
              title="YouTube video player" 
              frameborder="0" 
              allow="autoplay;" 
              allowfullscreen>
      </iframe>
    </div>
  );
};

export default AppleVideo;