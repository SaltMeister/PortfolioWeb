import React from 'react';
import './App.css';


import AboutComponent from './components/AboutComponent';
import ContactComponent from './components/ContactComponent';
import DisplayBoxComponent from './components/DisplayBoxComponent';
import DisplayComponent from './components/DisplayComponent';
import HeaderComponent from './components/HeaderComponent';

// Images for items

import codeReview1 from "./images/codeReview1.PNG"
import codeReview2 from "./images/codeReview2.PNG"
import codeReview3 from "./images/codeReview3.PNG"



import checkers from "./images/checkers.png";
import checkers1 from "./images/checkers1.png";
import checkers2 from "./images/checkers2.png";

import bitCoin from "./images/defender.png";

import fitFlow from "./images/fitFlowHome.png";
import fitFlow2 from "./images/fitFlow2.png";
import fitFlow3 from "./images/fitFlow3.png";

import mp3 from "./images/mp3Player.png";
import ppal from "./images/ppal.png";

import eduTrade1 from "./images/eduTrade1.png";
import eduTrade2 from "./images/eduTrade2.png";
import eduTrade3 from "./images/eduTrade3.png";
import eduTrade4 from "./images/eduTrade4.png";
import eduTrade5 from "./images/eduTrade5.png";

import rental1 from "./images/rental1.PNG"
import rental2 from "./images/rental2.PNG"
import rental3 from "./images/rental3.PNG"
import SkillsComponent from './components/SkillsComponent';

const desc1 = "A simple game of checkers created using react.";

const desc2 ="A Tower Defence android game where you protect your precious graphics cards from the bitcoin miners. Choose between 2 weapons and survive for 2 minutes.";

const desc3 ="A Music player application created with C# and the .Net framework. Select folders you wish to look for mp3 files and play them.";

const desc4 = "A website created for CitroHacks 2023 that uses the OpenAI api to generate weekly plans for the user. I worked on the back-end communications for this project.";

const desc5 ="A website that allows users to search and save recipes. Users can sign up and keep their list of saved recipes, and view them at any time. I worked on the user authentication between the client and server/database and the login/signup page."

const eduDesc = ["A used item selling website built to help students find items that other students no longer need. Users can sell or give away their old school supplies to others in the local area. Users can search and filter their interests by location and communicate through live chatting to confirm their meetup location.", <br />, "I developed the database communication from the client, the search query and location filters, and the front end for the item displays for each listing."]
const rentABikeDesc = "A bike rental site that allows users to rent out bikes from a list of available bikes. Users can rent out 1 bike at a time and must be registered to do so. The website communicates with a backend api to get user authentication and the ability to view listed bikes to rent out."
const codeReviewDescription = "A webtool that allows teams to perform the code review process online. Users can upload their changes files locally, but can also import their branch from github and push the reviewed changes back into github. This was a group project under the mentorship of a senior Google employee. I worked on the Full-Stack, establishing cloud database, and some prompt engineering for our LLM."

function App() {
  return (
    <div className="App">
      <header>
        <HeaderComponent headerText="Simon Huang" arrayOfHeaders={["Home", "Projects", "Resume", "Contact"]}/>
      </header>
      <section>
        <div id="Home">
          <AboutComponent/>          
        </div>
        {/* Skills */}
        {/* <div id="Skills">
          <SkillsComponent/>
        </div> */}
        {/* Project Section */}
        <div className='Projects' id="Projects" >
          <DisplayBoxComponent>

            <DisplayComponent
              title = "Code Review Webtool"
              description = {codeReviewDescription}
              gitLink = "https://github.com/fnkzhang/codereview"
              technologyUsed = "React - Flask - Tailwind CSS - MySql - Google Buckets - Google Cloud SQL - Google Vertex AI - Docker - NGinX - Jest"
              images = {[codeReview1, codeReview3, codeReview2]}
              isLiveLink = {true}
              liveLink= "https://franktest1-alz74memjq-wl.a.run.app/"
              direction="right"
            />
              
            <DisplayComponent
              title = "RentABike"
              description = {rentABikeDesc}
              gitLink = "https://github.com/SaltMeister/BikeRentalSite"
              technologyUsed="React - Flask - Tailwind CSS - MongoDB"
              images = {[rental1, rental2, rental3]}
              isLiveLink = {false}
              liveLink = ""
              direction="left"
            />
            <DisplayComponent
              title = "EduTrade"
              description = {eduDesc}
              gitLink = "https://github.com/Jeffuz/EduTrade"
              technologyUsed="React - Firebase/Firestore - Tailwind CSS"
              images = {[eduTrade1, eduTrade2, eduTrade3, eduTrade4, eduTrade5]}
              isLiveLink = {true}
              liveLink = "https://jeffuz.github.io/EduTrade/"
              direction="right"
            />
            <DisplayComponent 
              title = "Pantry Pal" 
              description = {desc5} 
              gitLink = "https://github.com/Jeffuz/Pantry-Pals"
              technologyUsed = "React - Flask - MongoDB - Tailwind CSS"
              images = {[ppal]}
              isLiveLink = {false}
              liveLink=""
              direction="left"
              />


            <DisplayComponent 
              title = "FitFlow" 
              description = {desc4} 
              gitLink = "https://github.com/Jeffuz/FitFlow"
              technologyUsed  ="React - Flask - MongoDB - Tailwind CSS"
              images = {[fitFlow, fitFlow2, fitFlow3]}
              isLiveLink = {true}
              liveLink = "https://devpost.com/software/fitflow-pacuwy"
              direction="right"
              />
            
            <DisplayComponent
              title = "Mp3 Player"
              description = {desc3}
              gitLink = "https://github.com/SaltMeister/Mp3Player"
              technologyUsed="C# - .Net - WPF"
              images = {[mp3]}
              isLiveLink = {false}
              liveLink=""
              direction="left"/>

            <DisplayComponent
              title = "Checkers"
              description = {desc1}
              gitLink = "https://github.com/SaltMeister/checkers"
              technologyUsed = "React"
              images = {[checkers1, checkers2, checkers]}
              isLiveLink = {true}
              liveLink = "https://saltmeister.github.io/checkers/"
              direction="right"
              />

            <DisplayComponent
              title = "Bitcoin Defender"
              description = {desc2}
              gitLink = ""
              technologyUsed = "Java - LibGDX"
              images = {[bitCoin]}
              isLiveLink = {false}
              liveLink=""
              direction="left"
            />
          </DisplayBoxComponent>
        </div>

        <div className='Contact' id="Contact">
          <ContactComponent/>
        </div>
      </section>
     
      <footer className="footer">
        <p>All Rights Reserved Simon Huang © 2024</p>
      </footer>
    </div>
  );
}

export default App;
