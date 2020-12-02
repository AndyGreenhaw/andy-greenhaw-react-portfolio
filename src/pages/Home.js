import React from "react";
// import CarouselCard from "../CarouselCard/CarouselCard.js";
// import allProjects from "../json/heroProjects.json";

function Home() {
  
  // const [heroProjects, setHeroProjects] = useState([])
  // // const [heroProject, setHeroProject] = useState({
  // //   name: "",
  // //   thumb: "",
  // //   link:  "",
  // //   description: "", 
  // //   alt: ""
  // // })

  // useEffect(() => {
  //   loadProjects()
  // }, []);

  // function loadProjects() {

  //   setHeroProjects(allProjects)
  //   console.log(allProjects)

  // }

  return (
    <>
    <div className="row">
      <div className="col-12 mainTitle">
        Andy Greenhaw
      </div>
    </div>
    <div className="row"> 
      <div className="col-12 taglineTitle">
          <div class="dropdown">
            What <a href="/portfolio" class="dropbtn">Skills</a> Do You Need?
          
          <div class="dropdown-content">
            <a href="/portfolio">Full-Stack Development</a>
            <a href="/portfolio">Animation</a>
            <a href="/portfolio">Video Editing</a>
            <a href="/portfolio">Writing</a>
            <a href="/portfolio">See All Projects</a>
          </div>
          </div>
      </div>
    </div>  


    {/* <div class="dropdown">
      <button class="dropbtn">Skills</button>
      <div class="dropdown-content">
        <a href="/portfolio">Full-Stack Development</a>
        <a href="/portfolio">Animation</a>
        <a href="/portfolio">Video Editing</a>
        <a href="/portfolio">Writing</a>
        <a href="/portfolio">See All Projects</a>
      </div>
    </div> */}
    </>
  );
}

export default Home;