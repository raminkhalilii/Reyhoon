import React from 'react';
import "./AppDownload.style.css"
import googlePlay from "../../assets/frontend_assets/play_store.png"
import appStore from "../../assets/frontend_assets/app_store.png"


function AppDownload() {
    return (
        <div className="AppDownload" id="AppDownload">
            <div>
                <p>For better experience download <br/> Reyhoon App </p>
                <div className="AppDownloadPlatforms">
                    <img src={googlePlay} alt=""/>
                    <img src={appStore} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default AppDownload;