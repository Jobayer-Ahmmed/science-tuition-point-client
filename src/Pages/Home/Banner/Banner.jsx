import banner from "../../../assets/video/banner.mp4"

const Banner = () => {
  return (
    <div className="video-background ">
    <video autoPlay muted>
      <source src={banner} type="video/mp4" />
      banner Image Not found
    </video>
  </div>
  )
}

export default Banner