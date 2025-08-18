import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"; // ✅ correct
import Footer from '../components/Footer';



const AboutUs = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
    return (
      <div>
<header className="my-20 py-12 bg-gradient-to-r from-blue-900 to-red-700 text-white text-center relative overflow-hidden">
  <div className="max-w-6xl mx-auto px-4">
    <h1 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block after:block after:w-20 after:h-1 after:bg-orange-500 after:mx-auto after:mt-2">
      About Our Rotary Club
    </h1>
    <p className="text-lg max-w-3xl mx-auto">
      For over 50 years, we've been serving our community...
    </p>
  </div>
</header>
    
      <div class="container-about">
          <section id="club-profile">
              <div class="card">
                  <h2 className='headings'>Club Profile</h2>
                  <p>Established in 1972, our Rotary Club has grown to become one of the most active service organizations in the region. With over 150 members from diverse professional backgrounds, we work together to create lasting change in our communities and around the world.</p>
                  <p>Our mission is to provide humanitarian service, encourage high ethical standards in all vocations, and help build goodwill and peace in the world. We achieve this through local community projects, international service initiatives, and youth programs.</p>
                  <p>Some of our signature projects include clean water initiatives, literacy programs, polio eradication efforts, and vocational training for underprivileged communities.</p>
              </div>
          </section>
    
          <section id="golden-jubilee">
              <h2 className='headings'>Golden Jubilee Story</h2>
              <p>Celebrating 50 years of service, fellowship, and community impact, our Golden Jubilee marks a significant milestone in our club's history. Below is a timeline of memorable moments:</p>
    
              <div class="timeline">
                  <div class="timeline-item-about left">
                      <div class="timeline-content">
                          <div class="timeline-year">1972</div>
                          <p>Club founded with 25 charter members under the sponsorship of Rotary Club of Downtown</p>
                      </div>
                  </div>
                  <div class="timeline-item-about right">
                      <div class="timeline-content">
                          <div class="timeline-year">1985</div>
                          <p>First major international project launched, providing medical equipment to hospitals in South America</p>
                      </div>
                  </div>
                  <div class="timeline-item-about left">
                      <div class="timeline-content">
                          <div class="timeline-year">1992</div>
                          <p>20th anniversary celebration attended by past RI President Clem Renouf</p>
                      </div>
                  </div>
                  <div class="timeline-item-about right">
                      <div class="timeline-content">
                          <div class="timeline-year">2005</div>
                          <p>Received RI Presidential Citation for outstanding polio eradication fundraising</p>
                      </div>
                  </div>
                  <div class="timeline-item-about left">
                      <div class="timeline-content">
                          <div class="timeline-year">2012</div>
                          <p>Launched youth scholarship program benefiting 100 students annually</p>
                      </div>
                  </div>
                  <div class="timeline-item-about right">
                      <div class="timeline-content">
                          <div class="timeline-year">2022</div>
                          <p>Golden Jubilee celebrations with special projects impacting all areas of our community</p>
                      </div>
                  </div>
              </div>
    
              <div class="gallery">
                  <div className="gallery-item transform hover:scale-105 transition duration-300">
                <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/031e0266-f2ff-4cd9-bf6b-72c4f708fbfc.png" 
                     alt="Black and white photo of the original 1972 Rotary Club charter members standing outside city hall" 
                     className="w-full h-64 object-cover" />
                <div className="gallery-caption bg-opacity-80">Charter Members - 1972</div>
              </div>
                  <div class="gallery-item">
                      <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3918af37-a15d-438e-914a-189f99879928.png" alt="Colorful celebration scene from 1992 anniversary with members cutting a large cake"/>
                      <div class="gallery-caption">20th Anniversary - 1992</div>
                  </div>
                  <div class="gallery-item">
                      <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/29dc208b-907e-4ff7-b972-9c8a889c00b7.png" alt="Group photo of Rotary members with polio vaccination volunteers in a rural health clinic"/>
                      <div class="gallery-caption">Polio Eradication Team - 2005</div>
                  </div>
                  <div class="gallery-item">
                      <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fe29fd8e-0911-499d-9bb9-98f03d5d6a6e.png" alt="Current Rotary Club members standing together at the 50th anniversary gala event"/>
                      <div class="gallery-caption">Golden Jubilee Celebration - 2022</div>
                  </div>
              </div>
          </section>
    
          <section id="past-presidents">
              <h2 className='headings' >Presidents Over the Years</h2>
              <p>Our club has been fortunate to have these dedicated leaders who have guided our organization through periods of growth and service:</p>
    
              <div class="gallery">
                  <div class="gallery-item">
                      <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3e4f882e-fa75-4076-a748-4838795ac148.png" alt="Portrait of John A. Smith, the Rotary Club's first president in 1972 wearing a business suit"/>
                      <div class="gallery-caption">John A. Smith (1972-1973)</div>
                  </div>
                  <div class="gallery-item">
                      <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4c36f683-8aee-4abc-b8ba-46f8a6dbb74f.png" alt="Photo of Mary L. Johnson, our first female president in 1988 wearing a Rotary pin"/>
                      <div class="gallery-caption">Mary L. Johnson (1988-1989)</div>
                  </div>
                  <div class="gallery-item">
                      <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/dad712db-db5b-479a-b5ac-24493be96bb0.png" alt="Headshot of Robert T. Williams, president during club's 25th anniversary wearing glasses"/>
                      <div class="gallery-caption">Robert T. Williams (1996-1997)</div>
                  </div>
                  <div class="gallery-item">
                      <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/84a78fc4-c299-4481-bcca-a1ed2dffacab.png" alt="Official portrait of Susan K. Chen, president during major membership expansion"/>
                      <div class="gallery-caption">Susan K. Chen (2005-2006)</div>
                  </div>
                  <div class="gallery-item">
                      <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/06c77687-4948-44be-a546-50029cfc146e.png" alt="Smiling photo of David M. Rodriguez at Rotary international conference"/>
                      <div class="gallery-caption">David M. Rodriguez (2014-2015)</div>
                  </div>
                  <div class="gallery-item">
                      <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2a17f5f3-e6bd-42cf-b07e-d032dfe486f4.png" alt="Current president Elizabeth P. Wong speaking at golden jubilee event"/>
                      <div class="gallery-caption">Elizabeth P. Wong (Present)</div>
                  </div>
              </div>
          </section>
    
          <section id="board-directors">
              <h2 className='headings'>Board of Directors 2025–26</h2>
              <p>The current leadership team guiding our club's activities and strategic direction:</p>
    
              <div class="team-grid">
                  <div class="team-member">
                      <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/af113b4b-09eb-4ec6-b6e8-3d332216de97.png" alt="Elizabeth P. Wong, Club President smiling in professional attire"/>
                      <div class="member-name">Elizabeth P. Wong</div>
                      <div class="member-role">President</div>
                      <p>Director, Community Health Services</p>
                  </div>
                  <div class="team-member">
                      <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/40c7c403-e9f0-4ca7-8a9f-56784a36b389.png" alt="Michael R. Thompson, President-Elect standing in front of Rotary banner"/>
                      <div class="member-name">Michael R. Thompson</div>
                      <div class="member-role">President-Elect</div>
                      <p>Principal, Thompson & Associates</p>
                  </div>
                  <div class="team-member">
                      <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0e3b8d7a-7685-4860-b981-bb9ce2847e26.png" alt="Sarah J. Greenberg, Vice President gesturing during a meeting"/>
                      <div class="member-name">Sarah J. Greenberg</div>
                      <div class="member-role">Vice President</div>
                      <p>Attorney at Law</p>
                  </div>
                  <div class="team-member">
                      <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/89c96c38-5201-42b2-994a-525edd0d1af3.png" alt="James K. Wilson, Secretary reviewing documents"/>
                      <div class="member-name">James K. Wilson</div>
                      <div class="member-role">Secretary</div>
                      <p>Financial Advisor</p>
                  </div>
                  <div class="team-member">
                      <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e2ce299c-0716-433f-ae4a-0570214ab1a9.png" alt="Patricia L. Martin, Treasurer holding calculator"/>
                      <div class="member-name">Patricia L. Martin</div>
                      <div class="member-role">Treasurer</div>
                      <p>Chief Financial Officer</p>
                  </div>
                  <div class="team-member">
                      <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e6dbb230-6c0e-464b-89d1-39394476ccfb.png" alt="Dr. Robert S. Chen, Club Service Director in lab coat"/>
                      <div class="member-name">Dr. Robert S. Chen</div>
                      <div class="member-role">Club Service Director</div>
                      <p>Medical Practitioner</p>
                  </div>
                  <div class="team-member">
                      <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ab7f8e85-5b3a-4d21-88d9-74b5f9b7479d.png" alt="Angela M. Delgado, Community Service Director speaking at event"/>
                      <div class="member-name">Angela M. Delgado</div>
                      <div class="member-role">Community Service Director</div>
                      <p>Nonprofit Executive</p>
                  </div>
                  <div class="team-member">
                      <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1145ab8a-49be-4b1f-a690-c0987feae276.png" alt="Thomas E. Franklin, International Service Director with globe"/>
                      <div class="member-name">Thomas E. Franklin</div>
                      <div class="member-role">International Service Director</div>
                      <p>International Business Consultant</p>
                  </div>
              </div>
          </section>
    
          <section id="sap-members">
              <h2 className='headings'>SAP Members & Roles</h2>
              <p>Our Strategic Action Panel guides long-term planning and major initiatives:</p>
    
              <div class="team-grid">
                  <div class="team-member">
                      <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1f1f0c9c-11cd-4c81-af33-a60bf407d919.png" alt="Dr. Amanda P. Jacobs, SAP Chair reviewing strategic report"/>
                      <div class="member-name">Dr. Amanda P. Jacobs</div>
                      <div class="member-role">SAP Chair</div>
                      <p>Strategic Planning Lead</p>
                  </div>
                  <div class="team-member">
                      <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f7262a40-dda7-4f8d-95cc-7625c98c4493.png" alt="Richard B. Owens, Membership Development specialist speaking"/>
                      <div class="member-name">Richard B. Owens</div>
                      <div class="member-role">Membership Development</div>
                      <p>HR Director</p>
                  </div>
                  <div class="team-member">
                      <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/73518027-fe4d-4e08-8270-e20738f38edc.png" alt="Laura S. Kim, Fundraising Coordinator holding charts"/>
                      <div class="member-name">Laura S. Kim</div>
                      <div class="member-role">Fundraising Coordinator</div>
                      <p>Development Officer</p>
                  </div>
                  <div class="team-member">
                      <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7284ddc6-6ab1-4e78-b024-51644e042710.png" alt="George T. Williams, Technology Lead at computer workstation"/>
                      <div class="member-name">George T. Williams</div>
                      <div class="member-role">Technology Lead</div>
                      <p>IT Director</p>
                  </div>
                  <div class="team-member">
                      <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cedaf3aa-62d7-4791-8064-1daa65f59df5.png" alt="Nina R. Patel, Youth Programs specialist with students"/>
                      <div class="member-name">Nina R. Patel</div>
                      <div class="member-role">Youth Programs</div>
                      <p>Education Consultant</p>
                  </div>
                  <div class="team-member">
                      <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a700e19e-a514-441e-8ac5-f16adf6dae0f.png" alt="Mark D. Johnson, Community Partnerships shaking hands"/>
                      <div class="member-name">Mark D. Johnson</div>
                      <div class="member-role">Community Partnerships</div>
                      <p>Business Owner</p>
                  </div>
              </div>
          </section>
    
          <section id="affiliated-clubs">
              <h2 className='headings'>Affiliated Clubs</h2>
              <p>We sponsor and collaborate with several youth and service organizations:</p>
    
              <div class="affiliated-clubs">
                  <div class="club-card">
                      <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c90cd0d3-8853-43e9-a42e-f47357c1791b.png" alt="Rotaract Club logo in blue and gold colors" class="club-logo"/>
                      <div class="club-info">
                          <div class="club-name">Rotaract Club of TIT</div>
                          <div class="club-description">Young professionals aged 18-30 working to improve their communities</div>
                          <a href="#" class="btn">Learn More</a>
                      </div>
                  </div>
                  <div class="club-card">
                      <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/82f56eea-326d-4693-9b56-57154ec85b4c.png" alt="Rotaract Club of Science logo with atom symbol" class="club-logo"/>
                      <div class="club-info">
                          <div class="club-name">Rotaract Club of Science</div>
                          <div class="club-description">Focusing on STEM education and technology-based service projects</div>
                          <a href="#" class="btn">Learn More</a>
                      </div>
                  </div>
                  <div class="club-card">
                      <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9fa731ca-b6a0-4e08-bdc5-062febd91b5c.png" alt="Interact Club logo with youth silhouettes" class="club-logo"/>
                      <div class="club-info">
                          <div class="club-name">Interact Club</div>
                          <div class="club-description">High school students developing leadership through service</div>
                          <a href="#" class="btn">Learn More</a>
                      </div>
                  </div>
              </div>
          </section>
    
          <div class="founders-section">
              <div class="container-about">
                  <h2 className='headings-members'>Founding Members</h2>
                  <p>We honor the visionaries who established our Rotary Club 50 years ago. Two of our original charter members remain active today.</p>
    
                  <div class="founders-container">
                      <div class="founder-card">
                          <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a5cdab4e-de04-42a4-b295-1270c357f6ef.png" alt="Portrait of Dr. Henry W. Baker, founding member smiling in Rotary attire"/>
                          <h3 className='text-[1.5rem] mt-[25px] mb-[15px] text-[var(--secondary-color)]'>Dr. Henry W. Baker</h3>
                          <p>Charter President Emeritus</p>
                          <p>Retired Physician, Age 89</p>
                          <p class="founder-quote">Service above self isn't just our motto - it's a way of life that transforms both the giver and receiver.</p>
                      </div>
                      <div class="founder-card">
                          <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/90efeb00-1f39-459f-8a00-8c4621714e85.png" alt="Portrait of Margaret E. Simmons, founding member with Rotary pin"/>
                          <h3 className='text-[1.5rem] mt-[25px] mb-[15px] text-[var(--secondary-color)]'>Margaret E. Simmons</h3>
                          <p>Charter Secretary</p>
                          <p>Retired Educator, Age 86</p>
                          <p class="founder-quote">The friendships forged through Rotary service endure for lifetimes - that's the magic of this organization.</p>
                      </div>
                  </div>
              </div>
          </div>
    
          <section id="district-link">
              <h2>RI District 3040 Link</h2>
              <div class="card">
                  <p>Our club is proud to be part of Rotary International District 3040, which includes clubs from our region working together on larger-scale service initiatives.</p>
                  <p>The District provides resources, training opportunities, and facilitates collaboration between clubs to maximize our impact.</p>
                  <a href="#" class="btn">Visit District 3040 Website</a>
              </div>
          </section>
      </div>
      <Footer />  
    
      {/* <footer className=" footer-about bg-gray-800 text-white py-12 text-center">
          <div className="container-about mx-auto px-4">
            <p>&copy; 2025 Rotary Club. All Rights Reserved.</p>
            <p className="italic">"Service Above Self"</p>
            <div className="flex justify-center mt-5 space-x-4">
              <a href="#" className="text-white hover:text-blue-400 transition">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a href="#" className="text-white hover:text-blue-400 transition">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a href="#" className="text-white hover:text-blue-400 transition">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a href="#" className="text-white hover:text-blue-400 transition">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
            </div>
          </div>
        </footer> */}
    
        {/* <button 
          id="backToTop"
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-900 text-white w-12 h-12 rounded-full flex items-center justify-center opacity-0 invisible transition-all duration-300 hover:bg-blue-700"
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button> */}
      </div>
    );
    };
    
    export default AboutUs;
    

