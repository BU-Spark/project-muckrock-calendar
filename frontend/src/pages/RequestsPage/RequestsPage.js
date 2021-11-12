import proj from '../../images/Vectorproj.png';
import filter from '../../images/Vectorfilter.png';
import RequestCard from '../../components/RequestCard/RequestCard';
import Blue from '../../images/Bluesquare.png';
import Green from '../../images/Greensquare.png';
import Red from '../../images/Redsquare.png';
import Yellow from '../../images/Yellowsquare.png';
import './RequestsPage.css';
import Navbar from '../../components/NavBar/Navbar';
import RequestListing from '../../components/RequestListing/RequestListing';
import ListingHeader from '../../components/ListingHeader/ListingHeader';
import { getFOIA, get_headers } from '../../service/foia';
import { useState, createContext, useContext } from 'react';
import axios from 'axios';

export const RequestsContext = createContext();

const RequestsPage = () => {

  // requestsList is the list of requests that will be displayed
  // Calling setrequestsList will cause a re-render to display updated requestsList
  const [requestsList, setRequestsList] = useState([]);

  /**
   *  Get list of requests from '/request' and set requestsList to it
   */
  const handleGetRequests = async() => {
    try{
        const requests = await axios.get(process.env.REACT_APP_MUCKROCK_BASE_URL + '/foia/', {
            headers: get_headers,
            withCredentials: true
        });
        const res = requests.data

        // We take only "results" from the data as it contains the list of requests 
        const {results} = res

        console.log(typeof(results))
        console.log(requests)

        // console.log("requests Test")
        // console.log(results)

        setRequestsList(results)
    } catch (err) {
        console.error(err)
    }
  }

  handleGetRequests()
    return (
      <RequestsContext.Provider value={{requestsList, setRequestsList}}>
      <ListingHeader headerTitle="Request"/>

      <div className="container">
        <span className="Requestnum">{requestsList.length} Active Requests</span>
      </div>

      <div className="contentContainer">
        <RequestListing requests={ requestsList }/>

      </div>

    </RequestsContext.Provider>
    );
}

export default RequestsPage;