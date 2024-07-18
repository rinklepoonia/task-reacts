import React from "react";

const ParamTabs = () => {
  const datatab = [
    {
      tabBtn: "home",
      tabContent: "i am home section",
    },
    {
      tabBtn: "about",
      tabContent: "i am about section",
    },
    {
      tabBtn: "faq",
      tabContent: "i am faq section",
    },
  ];

  const location = window.location.pathname;
  console.log(location);
  return (
    <div>
      <div>
        {datatab.map((obj, index) => (
          <a
            key={index}
            href={`/${obj.tabBtn}`}
            className="px-5 mx-3 bg-black text-white"
          >
            {obj.tabBtn}
          </a>
        ))}
        <div>
            {location === "/home" && `${datatab[0].tabContent}`}
            {location === "/about" && `${datatab[1].tabContent}`}
            {location === "/faq" && `${datatab[2].tabContent}`}
        </div>
      </div>
    </div>
  );
};

export default ParamTabs;
