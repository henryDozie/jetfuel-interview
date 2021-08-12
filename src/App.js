import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [campaigns, setCampaign] = useState([]);

  useEffect(() => {
    fetch(`https://www.plugco.in/public/take_home_sample_feed`)
      .then(res => res.json())
      .then(json => setCampaign([...json.campaigns]))
    // console.log(campaigns));
  }, [campaigns]);



  return (

    < div className="app" >
      <h1 className="app-Title">PLUGS</h1>
      {campaigns.map(campaign => (
        <div className="camp-body">
          <div className="item-Top">
            <img className="camp-icon" src={campaign.campaign_icon_url} alt="item-icon" />
            <span className="icon-Title-Area">
              <h2 className="camp-name">{campaign.campaign_name}</h2>
              <p className="camp-inst"><span className="install-number">{campaign.pay_per_install}</span> per install</p>
            </span>

          </div>
          <div className="camp-imgs-container">
            {campaign.medias.map(media => (
              <div className="camp-imgs">
                <img className="sliding-Images" src={media.cover_photo_url} alt="img-icon" />
                {/* <span className="links">
                      <a href={media.tracking_link} className="trkLink"><img src="./images/link.png" /></a>
                      <a href={media.download_url} className="dlLink"><img src="./images/dl.png"/></a>
                    </span> */}
              </div>
            ))}
          </div>
        </div>
      ))}

    </div >
  )
}
export default App;
