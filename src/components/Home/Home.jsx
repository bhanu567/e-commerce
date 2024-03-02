import React from "react";
import { Row } from "react-bootstrap";
import TableContent from "./TableContent";
import pausePlayButton from "../../Images/pause-play.png";

const TourData = [
  {
    date: "JUL 16",
    place: "DETROIT, MI",
    name: "DTE ENERGY MUSIC THEATRE",
  },
  {
    date: "JUL 19",
    place: "TORONTO,ON ",
    name: "BUDWEISER STAGE ",
  },
  {
    date: "JUL 22",
    place: "BRISTOW, VA",
    name: "JIGGY LUBE LIVE",
  },
  {
    date: "JUL 29",
    place: "PHOENIX, AZ",
    name: "AK-CHIN PAVILION",
  },
  {
    date: "AUG 2",
    place: "LAS VEGAS, NV",
    name: "T-MOBILE ARENA",
  },
  {
    date: "AUG 7",
    place: "CONCORD, CA",
    name: "CONCORD PAVILION",
  },
];

const Home = () => {
  return (
    <>
      <div style={{ backgroundColor: "#777"}}>
        <Row className="justify-content-center">
          <div className="border border-info text-light col-3 py-2 fw-bold" style={{fontSize:"23px", textAlign:"center"}}>
            Get Our Latest Album
          </div>
        </Row>
        <Row className="justify-content-center">
            <div className="justify-content-center my-3"
              style={{width: "100px", border:"1px solid #0dcaf0", borderRadius:"50%", margin:"20px auto", display: "grid", alignItems:"center"}}
            ><img src={pausePlayButton}></img></div>
        </Row>
      </div>
      <h2 style={{ textAlign: "center"}} className="m-5">TOURS</h2>
      <div style={{marginBottom:"50px"}}>
        {TourData.map((data, index) => (
          <TableContent tableData={data} key={index}></TableContent>
        ))}
        </div>
    </>
  );
};

export default Home;
