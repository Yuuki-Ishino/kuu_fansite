function MainVisual() {
  return (
    <section className="h-[700px] w-full no-bg">
      {/* <div className="absolute inset-0 -z-10">
				<img 
				src="/images/top-image.jpg" 
				alt="top-page-bg" 
				className="w-full h-full object-cover fixed top-0 left-0"
				/>
			</div> */}
      <div className="w-[90%] max-w-[1280px] mx-auto h-full relative">
        <div className="absolute bottom-[40px] left-0 w-full bg-black/20">
          <h1 className="text-[70px] font-bold text-white ">Ku</h1>
          <p className="text-[24px] font-black text-white">
            #ライブ・会場・ルール・特典のご案内
          </p>
        </div>
      </div>
    </section>
  );
}

export default MainVisual;
