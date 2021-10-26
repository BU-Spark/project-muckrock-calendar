import { getFOIA } from '../../service/foia';
import axios from 'axios';
import './Project.css';

const Project = (props) => {
    // Key == project ID
    const { title, num_articles, summary, img} = props;

    return (
        <div className="ProjectContainer">
            <img src={img} className="ProjectImage"/>                     
            <div className="ProjectTitle">{title}</div>
            <div className="ProjectNum">[{num_articles} Articles]</div>
            <div className="ProjectSummary">{summary}</div>
            <div className="ProjectInfoContainer">
                <div className="ProjectProgress1"/>
                <div className="ProjectProgress2"/>
                <div className="ProjectTag1"><span className="TagName">Tag</span></div>
                <div className="ProjectTag2"><span className="TagName">Tag</span></div>
            </div>
            
        </div>
    )
};

export default Project;