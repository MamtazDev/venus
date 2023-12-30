import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { joinLeague } from "../../api/league";
import { RotatingLines } from "react-loader-spinner";
import Swal from "sweetalert2";

const JoinLeague = () => {
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const inviteCode = queryParams.get("inviteCode");

  const navigate = useNavigate();

  const joiningLeague = async () => {
    try {
      const res = await joinLeague(inviteCode);
      if (res?.data?.success) {
        navigate("/");
      }
    } catch (error) {
      console.error("Error:", error.message);
      if (error?.response?.data?.message) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error?.response?.data?.message}`,
        });
        // navigate("/");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error?.message}`,
        });
        // navigate("/");
      }
    } finally {
    }
  };

  useEffect(() => {
    joiningLeague();
  }, [inviteCode]);

  return (
    <div style={{ height: "80vh", display: "flex", justifyContent: "center" }}>
      <RotatingLines
        visible={true}
        height="96"
        width="96"
        strokeColor="#9aa8d1"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default JoinLeague;
