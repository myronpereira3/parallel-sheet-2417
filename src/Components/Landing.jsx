import React from "react";
import "./Landing.css";
import {
  Button,
  Center,
  TabPanels,
  TabPanel,
  Tabs,
  Tab,
  TabList,
  Box,
  Text
} from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  
} from "@chakra-ui/react";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";
import { Footer } from "./Footer";
import BasicExample from "./Navbar";
const Landing = () => {
  return (
    <>
      <BasicExample />
      <section id="top" className="backgroundTop">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 left">
              <h1 style={{ textAlign: "left" }} className="seoHeader">
                Free time tracking software
              </h1>
              <h2 className="subheader">
                Happy to see you <br /> again!
                <br />
                Book TimeCamp <br /> set-up call
              </h2>

              <div className="form">
                <ul>
                  <li>✓ Showing how TimeCamp works in 15 minutes</li>
                  <li>✓ Best practices from 5000+ implementations</li>
                  <li>✓ Help with dedicated setup</li>
                </ul>
                <div
                  style={{ display: "flex", gap: "40px", paddingTop: "40px" }}
                >
                  <Button size="lg" style={{ backgroundColor: "#25cf60" }}>
                    Book a demo
                  </Button>
                  <p>or</p>
                  <Button size="lg" style={{ backgroundColor: "#25cf60" }}>
                    Go to App
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 ue-hero-main display">
              <div className="circle-content">
                <img
                  src="https://cdn-m.timecamp.com/img/person.jpg"
                  alt="review author"
                  className="review-author"
                />
              </div>
              <p className="strong">
                Adam Wagner, Co-owner and Chief Strategy Officer
              </p>
              <p>
                „TimeCamp proved to be an essential management tool that gives
                us clear insight into a project’s efficiency and helps to avoid
                an overblown workload for our team.”
              </p>
              <img
                className="small-img"
                src="https://cdn-m.timecamp.com/img/raindrop_logo.svg"
                alt="review company"
                className="review-company"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------companies------------
       */}
      <section>
        <p
          style={{
            color: "white",
            backgroundColor: "#25cf60",
            paddingTop: "38px",
            fontSize: "20px",
            fontWeight: "600",
          }}
        >
          Trusted by 18,000 teams from all over the world (and still growing!)
        </p>
        <div
          style={{
            backgroundColor: "#25cf60",
            display: "flex",
            justifyContent: "center",
            alignItems: Center,
            gap: "80px",
            padding: "30px 0",
          }}
        >
          <div>
            <img
              src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/usp-logo-white.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/dsv-logo-white.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/raindrop-logo-white.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/saatchi-logo-white.png"
              alt=""
            />
          </div>

          <div>
            <img
              src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/blitz-logo-white.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://cdn-m.timecamp.com/img/greenbranding/social-proof-section/havas-logo-white.png"
              alt=""
            />
          </div>
        </div>
      </section>
      {/* ------------------book a demo=--------------------- */}
      <section style={{ paddingTop: "70px", paddingBottom: "110px" }}>
        <p
          style={{
            color: "black",
            fontSize: "15px",
            fontWeight: "600",
            paddingBottom: "70px",
          }}
        >
          Want to track time in your team ?
          <span
            style={{ color: "#25cf60", fontSize: "15px", fontWeight: "600" }}
          >
            {" "}
            &nbsp; &nbsp; Book a Demo >
          </span>
        </p>
        <h2 style={{ fontSize: "35px", color: "black", fontWeight: "700" }}>
          Try an automatic, easy-to-use time tracker for the entire <br />
          organization!
        </h2>
      </section>

      {/* --------------------------track1==============
       */}
      <section>
        <div
          style={{
            display: "flex",
            width: "75%",
            margin: "auto",
            textAlign: "left",
          }}
        >
          <div>
            <p
              style={{
                color: "#25cf60",
                fontWeight: "600",
                paddingBottom: "40px",
              }}
            >
              FOR EMPLOYEES{" "}
            </p>
            <h2
              style={{
                fontSize: "46px",
                fontWeight: "600",
                paddingBottom: "30px",
              }}
            >
              Track your <br /> employees <br /> working time
            </h2>
            <p style={{ color: "#303030", fontWeight: "600" }}>
              Log working hours of your employees automatically or <br />{" "}
              manually and make sure they are billed fairly.
            </p>
            <h3
              style={{
                paddingTop: "32px",
                paddingBottom: "10px",
                fontSize: "18px",
                fontWeight: "600",
                borderBottom: "2px solid #25cf60",
                width: "70%",
                marginBottom: "20px",
              }}
            >
              Check logged time on the handy Timesheet
            </h3>
            <p style={{ paddingBottom: "20px" }}>
              Enjoy the transparency - check your employees time records with
              more detailed information on the handy timesheet or a graphical,
              calendar-like view.
            </p>
            <p style={{ fontSize: "18px", color: "grey" }}>
              Try our easy-to-use-desktop app
            </p>
            <br />
            <p
              style={{ fontSize: "18px", color: "grey", paddingBottom: "40px" }}
            >
              Track your activites automatically
            </p>
            <Button
              size="lg"
              style={{
                backgroundColor: "#25cf60",
                color: "white",
                borderRadius: "20px",
              }}
            >
              Track employees time
            </Button>
          </div>
          <div style={{ paddingTop: "160px" }}>
            <img
              src="https://cdn-m.timecamp.com/img/greenbranding/features/img-home-features.png"
              alt=""
            />
          </div>
        </div>
      </section>
      {/* -------------task2--------------- */}
      <section style={{ paddingTop: "65px" }}>
        <div
          style={{
            display: "flex",
            width: "75%",
            margin: "auto",
            textAlign: "left",
            gap: "80px",
          }}
        >
          <div style={{ paddingTop: "160px" }}>
            <img
              src="https://cdn-m.timecamp.com/img/greenbranding/features/reporting-features.png"
              alt=""
            />
          </div>
          <div>
            <p
              style={{
                color: "#25cf60",
                fontWeight: "600",
                paddingBottom: "40px",
              }}
            >
              FOR MANAGERS{" "}
            </p>
            <h2
              style={{
                fontSize: "46px",
                fontWeight: "600",
                paddingBottom: "30px",
              }}
            >
              Track your <br /> employees <br /> working time
            </h2>
            <p style={{ color: "#303030", fontWeight: "600" }}>
              Log working hours of your employees automatically or <br />{" "}
              manually and make sure they are billed fairly.
            </p>
            <h3
              style={{
                paddingTop: "32px",
                paddingBottom: "10px",
                fontSize: "18px",
                fontWeight: "600",
                borderBottom: "2px solid #25cf60",
                width: "70%",
                marginBottom: "20px",
              }}
            >
              Check logged time on the handy Timesheet
            </h3>
            <p style={{ paddingBottom: "20px" }}>
              Enjoy the transparency - check your employees time records with
              more detailed information on the handy timesheet or a graphical,
              calendar-like view.
            </p>
            <p style={{ fontSize: "18px", color: "grey" }}>
              Try our easy-to-use-desktop app
            </p>
            <br />
            <p
              style={{ fontSize: "18px", color: "grey", paddingBottom: "40px" }}
            >
              Track your activites automatically
            </p>
            <Button
              size="lg"
              style={{
                backgroundColor: "#25cf60",
                color: "white",
                borderRadius: "20px",
              }}
            >
              Increase team productivity
            </Button>
          </div>
        </div>
      </section>
      {/* ====================track3-------------------------------- */}
      <section style={{ paddingTop: "65px" }}>
        <div
          style={{
            display: "flex",
            width: "75%",
            margin: "auto",
            textAlign: "left",
            gap: "70px",
          }}
        >
          <div>
            <p
              style={{
                color: "#25cf60",
                fontWeight: "600",
                paddingBottom: "40px",
              }}
            >
              ENTERPRISE
            </p>
            <h2
              style={{
                fontSize: "46px",
                fontWeight: "600",
                paddingBottom: "30px",
              }}
            >
              Try enterprise <br /> time tracking at the highest level
            </h2>
            <p style={{ color: "#303030", fontWeight: "600" }}>
              Custom needs? No problem! Contact us, and we will <br />{" "}
              definitely find a perfect solution for your enterprise.
            </p>
            <h3
              style={{
                paddingTop: "32px",
                paddingBottom: "10px",
                fontSize: "18px",
                fontWeight: "600",
                borderBottom: "2px solid #25cf60",
                width: "70%",
                marginBottom: "20px",
              }}
            >
              Transfer multilevel project structures
            </h3>
            <p style={{ paddingBottom: "20px" }}>
              No matter how many projects your team is currently <br /> working
              on, with TimeCamp you'll be able to organize work <br /> time
              without any problem.
            </p>
            <p style={{ fontSize: "18px", color: "grey" }}>
              Try our easy-to-use-desktop app
            </p>
            <br />
            <p
              style={{ fontSize: "18px", color: "grey", paddingBottom: "40px" }}
            >
              Track your activites automatically
            </p>
            <Button
              size="lg"
              style={{
                backgroundColor: "#25cf60",
                color: "white",
                borderRadius: "20px",
              }}
            >
              Track employees time
            </Button>
          </div>
          <div style={{ paddingTop: "160px" }}>
            <img
              src="https://cdn-m.timecamp.com/img/greenbranding/features/project-structure.png"
              alt=""
            />
          </div>
        </div>
      </section>
      {/* =--------------------tack---5----black------------ */}
      <section style={{ paddingTop: "65px", paddingBottom: "70px" }}>
        <div
          style={{
            display: "flex",
            width: "75%",
            margin: "auto",
            textAlign: "left",
            gap: "80px",
          }}
        >
          <div style={{ paddingTop: "160px" }}>
            <img
              src="https://cdn-m.timecamp.com/img/greenbranding/features/attendance-features.png"
              alt=""
            />
          </div>
          <div>
            <p
              style={{
                color: "#25cf60",
                fontWeight: "600",
                paddingBottom: "40px",
              }}
            >
              FOR HR{" "}
            </p>
            <h2
              style={{
                fontSize: "46px",
                fontWeight: "600",
                paddingBottom: "30px",
              }}
            >
              Check Timesheets <br /> and control <br /> attendance in one{" "}
              <br /> place
            </h2>
            <p style={{ color: "#303030", fontWeight: "600" }}>
              Log working hours of your employees automatically or <br />{" "}
              manually and make sure they are billed fairly.
            </p>
            <h3
              style={{
                paddingTop: "32px",
                paddingBottom: "10px",
                fontSize: "18px",
                fontWeight: "600",
                borderBottom: "2px solid #25cf60",
                width: "70%",
                marginBottom: "20px",
              }}
            >
              Check logged time on the handy Timesheet
            </h3>
            <p style={{ paddingBottom: "20px" }}>
              Enjoy the transparency - check your employees time records with
              more detailed information on the handy timesheet or a graphical,
              calendar-like view.
            </p>
            <p style={{ fontSize: "18px", color: "grey" }}>
              Try our easy-to-use-desktop app
            </p>
            <br />
            <p
              style={{ fontSize: "18px", color: "grey", paddingBottom: "40px" }}
            >
              Track your activites automatically
            </p>
            <Button
              size="lg"
              style={{
                backgroundColor: "#25cf60",
                color: "white",
                borderRadius: "20px",
              }}
            >
              Make HR's work easier
            </Button>
          </div>
        </div>
      </section>
      {/* ----------------------black section --------------------- */}
      <section
        style={{
          backgroundColor: "black",
          height: "500px",
          paddingTop: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            textAlign: "left",
            marginLeft: "20%",
            gap: "170px",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "46px",
                fontWeight: "600",
                paddingBottom: "30px",
                color: "white",
              }}
            >
              Want a product tour? <br /> Here you can book a call demo with our{" "}
              <br /> expert.
            </h2>
            <p
              style={{
                color: "#303030",
                fontWeight: "600",
                color: "white",
                paddingBottom: "20px",
              }}
            >
              Learn all of the time tracking basics of TimeCamp and track time
              like a true pro.
            </p>

            <Button
              size="lg"
              style={{
                backgroundColor: "#f7b801",
                color: "white",
                borderRadius: "20px",
              }}
            >
              Book a demo
            </Button>
          </div>
          <div style={{ paddingTop: "100px", width: "80%" }}>
            <img
              src="https://cdn-m.timecamp.com/img/greenbranding/features/black_cta_img-platform.png"
              alt=""
            />
          </div>
        </div>
      </section>
      {/* ---------------slider-------------------------- */}
      <section style={{ paddingTop: "80px" }}>
        <p style={{ textAlign: "center", color: "#25cf60" }}>PRICING</p>
        <p
          style={{ textAlign: "center", paddingTop: "40px", fontSize: "32px" }}
        >
          Your time cost more
        </p>
        <p
          style={{
            textAlign: "center",
            paddingTop: "40px",
            fontSize: "18px",
            color: "grey",
          }}
        >
          Use free forever plan or subscribe to a paid plan to get more <br />{" "}
          features!
        </p>
        <div
          style={{
            display: "flex",
            alignItem: "center",
            justifyContent: "center",
            padding: "20px 0",
          }}
        >
          <Tabs variant="soft-rounded" colorScheme="green">
            <TabList
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "50px",
              }}
            >
              <Tab style={{ padding: "10px 70px" }}>Annually 10% discount</Tab>
              <Tab style={{ padding: "10px 70px" }}>Monthly</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <div style={{ display: "flex", gap: "35px" }}>
                  <div
                    style={{
                      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                      padding: "0px 30px 90px 30px",
                      borderRadius: "20px",
                    }}
                  >
                    <p
                      style={{
                        color: "#25cf60",
                        fontSize: "45px",
                        fontWeight: "600",
                        paddingTop: "50px",
                      }}
                    >
                      Free
                    </p>
                    <p
                      style={{
                        color: "grey",
                        borderBottom: "1px solid #25cf60",
                        paddingBottom: "20px",
                      }}
                    >
                      Free forever plan
                    </p>
                    <p style={{ paddingBottom: "20px" }}>
                      Measure on which activities you <br /> spend time while
                      working
                    </p>
                    <Button
                      size="lg"
                      style={{
                        borderRadius: "20px",
                        padding: "0px 50px",
                        backgroundColor: "#25cf60",
                        color: "white",
                      }}
                    >
                      Join for free
                    </Button>
                    <ul style={{ paddingTop: "30px", textAlign: "left" }}>
                      <li>Unlimited users</li>
                      <li>Unlimited Projects & tasks</li>
                      <li>Desktop & Mobile app</li>
                    </ul>
                  </div>
                  <div
                    style={{
                      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                      padding: "0px 30px 90px 30px",
                      borderRadius: "20px",
                    }}
                  >
                    <p style={{fontSize:"12px",color:"#25cf60",paddingBottom:"40px"}}>BASIC</p>
                    <p style={{fontSize:"30px"}}>$ 6.3</p>
                    <p  style={{
                        color: "grey",
                        borderBottom: "1px solid #25cf60",
                        paddingBottom: "20px",
                      }}>user/mo</p>
                    <p style={{ paddingBottom: "20px" }}>
                      Be more transparent and gain <br /> customers' trust
                    </p>
                    <Button size="lg"
                      style={{
                        borderRadius: "20px",
                        padding: "0px 50px",
                        backgroundColor: "#25cf60",
                        color: "white",
                      }}>Start your free trail</Button>
                    <ul style={{paddingTop:"20px"}}>
                      <li>Time rounding</li>
                      <li>Custom report</li>
                      <li>Hide time from users</li>
                      <li>Management roles</li>
                      <li>Team productivity tracking</li>
                      <li>XLS reports export</li>
                      <li>Unlimited integrations</li>
                      <li>Billable time & budgeting</li>
                    </ul>
                  </div>
                  
                  {/* ---------repre-------------------- */}
                  <div
                    style={{
                      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                      padding: "0px 30px 90px 30px",
                      borderRadius: "20px",
                    }}
                  >
                    <p
                      style={{
                        color: "#25cf60",
                        fontSize: "45px",
                        fontWeight: "600",
                        paddingTop: "50px",
                      }}
                    >
                      Free
                    </p>
                    <p
                      style={{
                        color: "grey",
                        borderBottom: "1px solid #25cf60",
                        paddingBottom: "20px",
                      }}
                    >
                      Free forever plan
                    </p>
                    <p style={{ paddingBottom: "20px" }}>
                      Measure on which activities you <br /> spend time while
                      working
                    </p>
                    <Button
                      size="lg"
                      style={{
                        borderRadius: "20px",
                        padding: "0px 50px",
                        backgroundColor: "#25cf60",
                        color: "white",
                      }}
                    >
                      Join for free
                    </Button>
                    <ul style={{ paddingTop: "30px", textAlign: "left" }}>
                      <li>Unlimited users</li>
                      <li>Unlimited Projects & tasks</li>
                      <li>Desktop & Mobile app</li>
                    </ul>
                  </div>
                  <div
                    style={{
                      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                      padding: "0px 30px 90px 30px",
                      borderRadius: "20px",
                    }}
                  >
                    <p style={{fontSize:"12px",color:"#25cf60",paddingBottom:"40px"}}>BASIC</p>
                    <p style={{fontSize:"30px"}}>$ 16.3</p>
                    <p  style={{
                        color: "grey",
                        borderBottom: "1px solid #25cf60",
                        paddingBottom: "20px",
                      }}>user/mo</p>
                    <p style={{ paddingBottom: "20px" }}>
                      Be more transparent and gain <br /> customers' trust
                    </p>
                    <Button size="lg"
                      style={{
                        borderRadius: "20px",
                        padding: "0px 50px",
                        backgroundColor: "#25cf60",
                        color: "white",
                      }}>Start your free trail</Button>
                    <ul style={{paddingTop:"20px"}}>
                      <li>Time rounding</li>
                      <li>Custom report</li>
                      <li>Hide time from users</li>
                      <li>Management roles</li>
                      <li>Team productivity tracking</li>
                      <li>XLS reports export</li>
                      <li>Unlimited integrations</li>
                      <li>Billable time & budgeting</li>
                    </ul>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div style={{ display: "flex", gap: "35px" }}>
                <div
                    style={{
                      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                      padding: "0px 30px 90px 30px",
                      borderRadius: "20px",
                    }}
                  >
                    <p
                      style={{
                        color: "#25cf60",
                        fontSize: "45px",
                        fontWeight: "600",
                        paddingTop: "50px",
                      }}
                    >
                      Free
                    </p>
                    <p
                      style={{
                        color: "grey",
                        borderBottom: "1px solid #25cf60",
                        paddingBottom: "20px",
                      }}
                    >
                      Free forever plan
                    </p>
                    <p style={{ paddingBottom: "20px" }}>
                      Measure on which activities you <br /> spend time while
                      working
                    </p>
                    <Button
                      size="lg"
                      style={{
                        borderRadius: "20px",
                        padding: "0px 50px",
                        backgroundColor: "#25cf60",
                        color: "white",
                      }}
                    >
                      Join for free
                    </Button>
                    <ul style={{ paddingTop: "30px", textAlign: "left" }}>
                      <li>Unlimited users</li>
                      <li>Unlimited Projects & tasks</li>
                      <li>Desktop & Mobile app</li>
                    </ul>
                  </div>
                  <div
                    style={{
                      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                      padding: "0px 30px 90px 30px",
                      borderRadius: "20px",
                    }}
                  >
                    <p style={{fontSize:"12px",color:"#25cf60",paddingBottom:"40px"}}>BASIC</p>
                    <p style={{fontSize:"30px"}}>$ 6.3</p>
                    <p  style={{
                        color: "grey",
                        borderBottom: "1px solid #25cf60",
                        paddingBottom: "20px",
                      }}>user/mo</p>
                    <p style={{ paddingBottom: "20px" }}>
                      Be more transparent and gain <br /> customers' trust
                    </p>
                    <Button size="lg"
                      style={{
                        borderRadius: "20px",
                        padding: "0px 50px",
                        backgroundColor: "#25cf60",
                        color: "white",
                      }}>Start your free trail</Button>
                    <ul style={{paddingTop:"20px"}}>
                      <li>Time rounding</li>
                      <li>Custom report</li>
                      <li>Hide time from users</li>
                      <li>Management roles</li>
                      <li>Team productivity tracking</li>
                      <li>XLS reports export</li>
                      <li>Unlimited integrations</li>
                      <li>Billable time & budgeting</li>
                    </ul>
                  </div>
                  
                  {/* ---------repre-------------------- */}
                  <div
                    style={{
                      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                      padding: "0px 30px 90px 30px",
                      borderRadius: "20px",
                    }}
                  >
                    <p
                      style={{
                        color: "#25cf60",
                        fontSize: "45px",
                        fontWeight: "600",
                        paddingTop: "50px",
                      }}
                    >
                      Free
                    </p>
                    <p
                      style={{
                        color: "grey",
                        borderBottom: "1px solid #25cf60",
                        paddingBottom: "20px",
                      }}
                    >
                      Free forever plan
                    </p>
                    <p style={{ paddingBottom: "20px" }}>
                      Measure on which activities you <br /> spend time while
                      working
                    </p>
                    <Button
                      size="lg"
                      style={{
                        borderRadius: "20px",
                        padding: "0px 50px",
                        backgroundColor: "#25cf60",
                        color: "white",
                      }}
                    >
                      Join for free
                    </Button>
                    <ul style={{ paddingTop: "30px", textAlign: "left" }}>
                      <li>Unlimited users</li>
                      <li>Unlimited Projects & tasks</li>
                      <li>Desktop & Mobile app</li>
                    </ul>
                  </div>
                  <div
                    style={{
                      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                      padding: "0px 30px 90px 30px",
                      borderRadius: "20px",
                    }}
                  >
                    <p style={{fontSize:"12px",color:"#25cf60",paddingBottom:"40px"}}>BASIC</p>
                    <p style={{fontSize:"30px"}}>$ 7.3</p>
                    <p  style={{
                        color: "grey",
                        borderBottom: "1px solid #25cf60",
                        paddingBottom: "20px",
                      }}>user/mo</p>
                    <p style={{ paddingBottom: "20px" }}>
                      Be more transparent and gain <br /> customers' trust
                    </p>
                    <Button size="lg"
                      style={{
                        borderRadius: "20px",
                        padding: "0px 50px",
                        backgroundColor: "#25cf60",
                        color: "white",
                      }}>Start your free trail</Button>
                    <ul style={{paddingTop:"20px"}}>
                      <li>Time rounding</li>
                      <li>Custom report</li>
                      <li>Hide time from users</li>
                      <li>Management roles</li>
                      <li>Team productivity tracking</li>
                      <li>XLS reports export</li>
                      <li>Unlimited integrations</li>
                      <li>Billable time & budgeting</li>
                    </ul>
                  </div>
                  
                   
                  
                   
                </div>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </section>
      {/* ------------------------form------------------------------- */}
      <form
        action="
"
      ></form>
      {/* ----------------------------qna-------------- */}
      <p style={{fontSize:"30px",fontWeight:"700",paddingBottom:"20px"}}>FAQ</p>
      <div style={{width:"75%",margin:"auto"}}>
      <Accordion allowMultiple>
      

        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                  <Box p="20px" ml="15px" flex="1" textAlign="left" fontWeight="bold" fontSize="20px" >
                    
               What is time tracker?
                  </Box>
                 
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} textAlign="left" >
              
               <Text my="10px">A time tracker is computer software or a web app that allows teams, managers, and freelancers to measure time spent on tasks and projects. It is used in many industries (law firms, accounting, creative agencies, IT teams) for settling up with hourly workers and billing clients for work.
               </Text>

               <Text my="10px">You can integrate a time tracker with third-party tools for project management, accounting, customer service, to-do lists, and many more.
               </Text>

               <Text my="10px">  Speaking shortly, a time tracker helps you understand which practices in your business lead to time waste. With this knowledge, you can reduce bad practices and optimize workflow.</Text>
              
              </AccordionPanel>
            </>
          )}
        </AccordionItem>

        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                  <Box p="20px" ml="15px" flex="1" textAlign="left" fontWeight="bold" fontSize="20px" >
                    
               Why use time tracker?
                  </Box>
                 
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} textAlign="left" >
              
               <Text my="10px">A time tracker is computer software or a web app that allows teams, managers, and freelancers to measure time spent on tasks and projects. It is used in many industries (law firms, accounting, creative agencies, IT teams) for settling up with hourly workers and billing clients for work.
               </Text>

               <Text my="10px">You can integrate a time tracker with third-party tools for project management, accounting, customer service, to-do lists, and many more.
               </Text>

               <Text my="10px">  Speaking shortly, a time tracker helps you understand which practices in your business lead to time waste. With this knowledge, you can reduce bad practices and optimize workflow.</Text>
              
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                  <Box p="20px" ml="15px" flex="1" textAlign="left" fontWeight="bold" fontSize="20px" >
                    
               What are the benefits of time tracker?
                  </Box>
                 
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} textAlign="left" >
              
               <Text my="10px">A time tracker is computer software or a web app that allows teams, managers, and freelancers to measure time spent on tasks and projects. It is used in many industries (law firms, accounting, creative agencies, IT teams) for settling up with hourly workers and billing clients for work.
               </Text>

               <Text my="10px">You can integrate a time tracker with third-party tools for project management, accounting, customer service, to-do lists, and many more.
               </Text>

               <Text my="10px">  Speaking shortly, a time tracker helps you understand which practices in your business lead to time waste. With this knowledge, you can reduce bad practices and optimize workflow.</Text>
              
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                  <Box p="20px" ml="15px" flex="1" textAlign="left" fontWeight="bold" fontSize="20px" >
                    
               What is time tracker?
                  </Box>
                 
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} textAlign="left" >
              
               <Text my="10px">A time tracker is computer software or a web app that allows teams, managers, and freelancers to measure time spent on tasks and projects. It is used in many industries (law firms, accounting, creative agencies, IT teams) for settling up with hourly workers and billing clients for work.
               </Text>

               <Text my="10px">You can integrate a time tracker with third-party tools for project management, accounting, customer service, to-do lists, and many more.
               </Text>

               <Text my="10px">  Speaking shortly, a time tracker helps you understand which practices in your business lead to time waste. With this knowledge, you can reduce bad practices and optimize workflow.</Text>
              
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                  <Box p="20px" ml="15px" flex="1" textAlign="left" fontWeight="bold" fontSize="20px" >
                    
               What is time tracker?
                  </Box>
                 
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} textAlign="left" >
              
               <Text my="10px">A time tracker is computer software or a web app that allows teams, managers, and freelancers to measure time spent on tasks and projects. It is used in many industries (law firms, accounting, creative agencies, IT teams) for settling up with hourly workers and billing clients for work.
               </Text>

               <Text my="10px">You can integrate a time tracker with third-party tools for project management, accounting, customer service, to-do lists, and many more.
               </Text>

               <Text my="10px">  Speaking shortly, a time tracker helps you understand which practices in your business lead to time waste. With this knowledge, you can reduce bad practices and optimize workflow.</Text>
              
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                  <Box p="20px" ml="15px" flex="1" textAlign="left" fontWeight="bold" fontSize="20px" >
                    
               What is time tracker?
                  </Box>
                 
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} textAlign="left" >
              
               <Text my="10px">A time tracker is computer software or a web app that allows teams, managers, and freelancers to measure time spent on tasks and projects. It is used in many industries (law firms, accounting, creative agencies, IT teams) for settling up with hourly workers and billing clients for work.
               </Text>

               <Text my="10px">You can integrate a time tracker with third-party tools for project management, accounting, customer service, to-do lists, and many more.
               </Text>

               <Text my="10px">  Speaking shortly, a time tracker helps you understand which practices in your business lead to time waste. With this knowledge, you can reduce bad practices and optimize workflow.</Text>
              
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
      </div>

      <Footer />
    </>
  );
};

export default Landing;
