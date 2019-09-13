import React from "react";
import Cell from "./Cell";
import Aircraft from "./Aircraft";

function Puzzle() {
  const renderCell = () => {
    return <Cell />;
  };

  const renderAircraft = () => {
    return <Aircraft />;
  };

  return (
    <div className="inline">
      <div>
        <div>{renderCell()}</div>
        <div className='aircraft'></div>
        <div>{renderCell()}</div>
        <div>{renderCell()}</div>
        <div>{renderCell()}</div>
        <div>{renderCell()}</div>
        <div>{renderCell()}</div>
      </div>
      <div>
        <div>{renderCell()}</div>
        <div>{renderCell()}</div>
        <div>{renderCell()}</div>
        <div>{renderCell()}</div>
        <div className='aircraft'></div>
        <div>{renderCell()}</div>
        <div>{renderCell()}</div>
      </div>
      <div>
        <div>{renderCell()}</div>
        <div>{renderCell()}</div>
        <div>{renderCell()}</div>
        <div>{renderCell()}</div>
        <div>{renderCell()}</div>
        <div>{renderCell()}</div>
        <div>{renderCell()}</div>
      </div>
      <div>
        <div>{renderCell()}</div>
        <div>{renderCell()}</div>
        <div>{renderCell()}</div>
        <div>{renderCell()}</div>
        <div>{renderCell()}</div>
        <div>{renderCell()}</div>
        <div>{renderCell()}</div>
      </div>
      <div>
        <div>{renderCell()}</div>
        <div>{renderCell()}</div>
        <div>{renderCell()}</div>
        <div>{renderCell()}</div>
        <div>{renderCell()}</div>
        <div>{renderCell()}</div>
        <div>{renderCell()}</div>
      </div>
      <div>
        <div>{renderCell()}</div>
        <div>{renderCell()}</div>
        <div>{renderCell()}</div>
        <div>{renderCell()}</div>
        <div>{renderCell()}</div>
        <div>{renderCell()}</div>
        <div>{renderCell()}</div>
      </div>
      <div>
        <div>{renderCell()}</div>
        <div>{renderCell()}</div>
        <div>{renderCell()}</div>
        <div>{renderCell()}</div>
        <div>{renderCell()}</div>
        <div>{renderCell()}</div>
        <div>{renderCell()}</div>
      </div>
    </div>
  );
}

export default Puzzle;
