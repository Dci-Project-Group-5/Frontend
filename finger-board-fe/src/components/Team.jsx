import { Link } from "react-router-dom"

function Team () {
    return (
        <div id="team-container">
            <div className="logo">
            <Link to='/'><h1>Finger Board Shop</h1></Link> 

            </div>
            
            <div id="team-member">
                <a href="https://github.com/HuaHuaCamCam" target={'_blank'}>
                    <div className="member item">
                        <img src="https://media.istockphoto.com/id/1353577638/vector/cute-skier-boy-skiing-and-falling-lying-in-snowdrift-on-mountain-slope-due-to-broken-ski.jpg?s=612x612&w=0&k=20&c=FkJ-gXyookPjrRj2jUkOxppOJbZMCF4UGUEGpcTZlW8=" alt="Hoa" width={'200px'} />
                        <p>HOA</p>
                    <p></p>
                    </div>
                </a>
               
                <a href="https://github.com/ozturk-ozgur" target={'_blank'}>
                    <div className="member item">
                        <img src="https://media.istockphoto.com/id/1353577638/vector/cute-skier-boy-skiing-and-falling-lying-in-snowdrift-on-mountain-slope-due-to-broken-ski.jpg?s=612x612&w=0&k=20&c=FkJ-gXyookPjrRj2jUkOxppOJbZMCF4UGUEGpcTZlW8=" alt="Özgür" width={'200px'} />
                        <p>ÖZGÜR</p>
                    <p></p>
                    </div>
                </a>

                <a href="https://github.com/HannesHerbert" target={'_blank'}>
                    <div className="member item">
                        <img src="https://media.istockphoto.com/id/1353577638/vector/cute-skier-boy-skiing-and-falling-lying-in-snowdrift-on-mountain-slope-due-to-broken-ski.jpg?s=612x612&w=0&k=20&c=FkJ-gXyookPjrRj2jUkOxppOJbZMCF4UGUEGpcTZlW8=" alt="Hannes" width={'200px'} />
                        <p>HANNES</p>
                    <p></p>
                    </div>
                </a>

            </div>
        </div>
    )
}


export default Team