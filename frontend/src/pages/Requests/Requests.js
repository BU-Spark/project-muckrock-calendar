import proj from '../../images/Vectorproj.png';
import filter from '../../images/Vectorfilter.png';
import ProjectCard from '../../components/project/Project';
import RequestCard from '../../components/request/Request';
import Blue from '../../images/Bluesquare.png';
import Green from '../../images/Greensquare.png';
import Red from '../../images/Redsquare.png';
import Yellow from '../../images/Yellowsquare.png';
import './Requests.css';
import Navbar from '../../components/navbar/Navbar';
import SidebarComp from '../../components/sidebar/Sidebar';

const Requests = () => {
    return (
        <div className="RequestsPage">
            <Navbar />
            <SidebarComp />

            <header className="App-header">
            <span className="headerP">Your Projects</span>
            <span className="projects">Projects</span>
            <span className="requests">Requests</span>
            <span className="Sort">Sort by: </span>
            <button className="Sortbtn">Last Updated </button>
            
            <hr className="PChecker"/>
            <hr className="RChecker"/>
            <hr className="divider"/>
            <div className="ProjContainer" >
          <RequestCard
            img={Blue}
            title="Request Title"
            name="Agency Name" 
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor, quisque in lorem accumsan massa ullamcorper."
          />
          <RequestCard
            img={Blue}
            title="Request Title"
            name="Agency Name"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor, quisque in lorem accumsan massa ullamcorper."
          />
          <RequestCard
            img={Red}
            title="Request Title"
            name="Agency Name"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor, quisque in lorem accumsan massa ullamcorper."
          />
          <RequestCard
            img={Green}
            title="Request Title"
            name="Agency Name"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor, quisque in lorem accumsan massa ullamcorper."
          />
          <RequestCard
            img={Red}
            title="Request Title"
            name="Agency Name"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor, quisque in lorem accumsan massa ullamcorper."
          />
          <RequestCard
            img= {Yellow}
            title="Request Title"
            name="Agency Name"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor, quisque in lorem accumsan massa ullamcorper."
          />
        </div>
        </header>
    </div>
    );
}

export default Requests