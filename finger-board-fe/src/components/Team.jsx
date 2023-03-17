import { Link } from "react-router-dom";


function Team() {
    return (
      <div id="team-container">
            <div className="logo">
            <Link to='/'><h1>Finger Board Team</h1></Link> 
            </div>


      <div id="team-member">
          <div className="member item">
            <img
              src="https://media.istockphoto.com/id/1353577638/vector/cute-skier-boy-skiing-and-falling-lying-in-snowdrift-on-mountain-slope-due-to-broken-ski.jpg?s=612x612&w=0&k=20&c=FkJ-gXyookPjrRj2jUkOxppOJbZMCF4UGUEGpcTZlW8="
              alt="Hoa"
              width={"200px"}
            />
            <p>HOA</p>
            <div className="icon-link">
              <a href="https://github.com/HuaHuaCamCam" target={"_blank"}>
                <p className="icon">
                  <i className="fa-brands fa-github"></i>
                </p>
              </a>
              <a href="https://github.com/HuaHuaCamCam" target={"_blank"}>
                <p className="icon">
                  <i className="fa-brands fa-linkedin"></i>
                </p>
              </a>

              <a href="https://github.com/HuaHuaCamCam" target={"_blank"}>
                <p className="icon">
                  <i className="fa-brands fa-tiktok"></i>
                </p>
              </a>
            </div>
          </div>

          <div className="member item">
            <img
              src="https://media.istockphoto.com/id/1353577638/vector/cute-skier-boy-skiing-and-falling-lying-in-snowdrift-on-mountain-slope-due-to-broken-ski.jpg?s=612x612&w=0&k=20&c=FkJ-gXyookPjrRj2jUkOxppOJbZMCF4UGUEGpcTZlW8="
              alt="Özgür"
              width={"200px"}
            />
            <p>ÖZGÜR</p>
            <div className="icon-link">
              <a href="https://github.com/ozturk-ozgur" target={"_blank"}>
                <p className="icon">
                  <i className="fa-brands fa-github"></i>
                </p>
              </a>
              <a href="https://github.com/ozturk-ozgur" target={"_blank"}>
                <p className="icon">
                  <i className="fa-brands fa-linkedin"></i>
                </p>
              </a>

              <a href="https://github.com/ozturk-ozgur" target={"_blank"}>
                <p className="icon">
                  <i className="fa-brands fa-tiktok"></i>
                </p>
              </a>
            </div>
          </div>

          <div className="member item">
              <img
                src="https://media.istockphoto.com/id/1353577638/vector/cute-skier-boy-skiing-and-falling-lying-in-snowdrift-on-mountain-slope-due-to-broken-ski.jpg?s=612x612&w=0&k=20&c=FkJ-gXyookPjrRj2jUkOxppOJbZMCF4UGUEGpcTZlW8="
                alt="Hannes"
                width={"200px"}
              />
              <p>HANNES</p>
              <div className="icon-link">
                <a href="https://github.com/HannesHerbert" target={"_blank"}>
                  <p className="icon">
                    <i className="fa-brands fa-github"></i>
                  </p>
                </a>
                <a href="https://github.com/HannesHerbert" target={"_blank"}>
                  <p className="icon">
                    <i className="fa-brands fa-linkedin"></i>
                  </p>
                </a>

                <a href="https://github.com/HannesHerbert" target={"_blank"}>
                  <p className="icon">
                    <i className="fa-brands fa-tiktok"></i>
                  </p>
                </a>
              </div>
          </div>

          <div className="member item">
            <img
              src="https://media.istockphoto.com/id/1353577638/vector/cute-skier-boy-skiing-and-falling-lying-in-snowdrift-on-mountain-slope-due-to-broken-ski.jpg?s=612x612&w=0&k=20&c=FkJ-gXyookPjrRj2jUkOxppOJbZMCF4UGUEGpcTZlW8="
              alt="Özgür"
              width={"200px"}
            />
            <p>Ramon</p>
            <div className="icon-link">
              <a href="https://github.com/ozturk-ozgur" target={"_blank"}>
                <p className="icon">
                  <i className="fa-brands fa-github"></i>
                </p>
              </a>
              <a href="https://github.com/ozturk-ozgur" target={"_blank"}>
                <p className="icon">
                  <i className="fa-brands fa-linkedin"></i>
                </p>
              </a>

              <a href="https://github.com/ozturk-ozgur" target={"_blank"}>
                <p className="icon">
                  <i className="fa-brands fa-tiktok"></i>
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Team;
