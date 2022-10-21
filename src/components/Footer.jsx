import React from "react";

export default function Footer() {
  let cdate = new Date();
  cdate = cdate.getFullYear();
  return (
    <div>
      <div className="container text-slab">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top container-fluid">
          <div className="col-md-4 d-flex align-items-center">
            <span>&copy; {cdate} LueurTech, Inc</span>
          </div>
          <div className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5290/5290058.png"
              alt="Logo of Utilisauras"
              width="30"
              height="30"
            />
          </div>
        </footer>
      </div>
    </div>
  );
}
