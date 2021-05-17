import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getAllDataAction
} from '../../redux/modules/home/home.actions';


const ReportsList = (props) => {
  const { getAllDataAction } = props;
  const [allData, setAllData] = useState([]);


  useEffect(() => {
    getAllDataAction();
    // eslint-disable-next-line
  }, []);

  // get data from reducer
  const homeDataResp = useSelector((state) => (
    state.Home.GetAllData ? state.Home.GetAllData : {}
  ));
  useEffect(() => {
    if (homeDataResp.length !== allData.length) {
      setAllData(homeDataResp);
    }
    // eslint-disable-next-line
  }, [homeDataResp]);

  return (
    <div>
      {allData && allData.length > 0 && allData.map((a, i) => (
        <div key={i} style={{ border: "1px solid #000", margin: "5px", padding: "10px", overflow: "hidden" }}>
          <div style={{ textTransform: "capitalize", fontSize: "20px", fontWeight: "bold" }}>{a.title}</div>
          <div>{a.body}</div>
        </div>
      ))}
    </div>
  );
};

// for reducer
const mapStateToProps = (state) => ({
  GetAllData: state.Home.GetAllData,
}
);

// for action
const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    getAllDataAction,
  }, dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(ReportsList);
