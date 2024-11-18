import React from "react";

const Freelancer = () => {
  return (
    <div className="text-slate-300">
      <div className="flex flex-wrap">
        <a href="https://www.freelancer.com/affiliates/email/78227726/">
          <img
            src="https://cdn6.f-cdn.com/ppic/249545628/logo/78227726/profile_logo_78227726.jpg"
            style={{
              float: "left",
              marginRight: 20,
              marginBottom: 10,
              width: 100,
              maxHeight: 100,
              borderRadius: 5,
            }}
          />
        </a>
        <div style={{ minHeight: 40 }}>
          <a
            style={{ textDecoration: "underline", fontWeight: "bold" }}
            href="https://www.freelancer.com/affiliates/email/78227726/"
          >
            KaungMyatKywal
          </a>
          <p
            style={{
              margin: 0,
              marginBottom: 6,
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
          >
            React Developer
          </p>
          <p style={{ margin: 0 }}>
            <strong>P:</strong> +66966498913
          </p>
          <p style={{ margin: 0 }}>
            <strong>E:</strong> kmkywal.nolan@gmail.com
          </p>
          <p style={{ margin: 0 }}>
            <strong>A:</strong>
            281/18 Moo 4 Suksawat 40 Rd. Khwang Bang Pakok, Khet Rat Burana Bangkok 10140, Thailand​
          </p>
        </div>
      </div>
      <img
        src="https://www.freelancer.com/static/css/images/landingpage/hireme-widget-builder/fl-bird-icon.png"
        style={{ clear: "left", float: "left", margin: "10px 0" }}
      />
      <a
        href="https://www.freelancer.com/affiliates/email/78227726/"
        style={{
          display: "block",
          textDecoration: "underline",
          margin: "10px 0 10px 10px",
          verticalAlign: "middle",
          height: 21,
          float: "left",
        }}
      >
        Hire me on Freelancer.com
      </a>
    
    </div>
  );
};

export default Freelancer;
