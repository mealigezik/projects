import "../styles/style.css";

const Picture = ({veri}) => {
  return (
    <div className="pictures">
      {veri.map(({photographer, src}) => {
        return(
          <div className="pictures-in">
            <div className="main-pic">
              <img src={src.large} alt="resim" />
            </div>
            <div className="info">
              <p>{photographer}</p>
            </div>
          </div>
        )})}
      picture
    </div>
  )
}
export default Picture