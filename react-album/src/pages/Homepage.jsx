import data from "../helper/data";
import Picture from "../components/Picture"




const Homepage = () => {
  console.log(data);
  return (
    <div className="container">
      <h4>Bilge Panter © 2023</h4>
      <h1>Image Gallery</h1>
      <Picture veri={data}/>
    </div>
  )
}

export default Homepage