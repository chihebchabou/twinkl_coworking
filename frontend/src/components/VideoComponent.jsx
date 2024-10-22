const VideoComponent = ({showVideo, setShowVideo}) => {
    window.onkeyup = (e) => e.code ==="Escape" && setShowVideo({src:"", isOpen:false})
  return showVideo.isOpen && (
    <div className="flex justify-center">
      <div className="text-red-900 fixed z-20 h-full w-full  top-0 bg-black opacity-90" onClick={()=> setShowVideo({src:"", isOpen:false})}></div>
      <video
        className="text-yellow-100 fixed top-28 sm:top-16 md:top-7 z-40 w-[270px] sm:w-[300px] md:w-[320px]"
        // width="340"
        // height="240"
        controls
        autoPlay
      >
        <source src={showVideo.src} type="video/mp4" />
        <source src="movie.ogg" type="video/ogg" />
      </video>
    </div>
  );
};

export default VideoComponent;
