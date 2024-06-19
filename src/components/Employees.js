import React from "react";
import EmployeeItem from "./EmployeeItem";

function Employees() {
  const employees = [
    {
      imgSrc: "http://localhost:3000/specialist-1.jpg",
      name: "Una [ barista ]",
      description: `I reflect on my time as a barista with so much fondness. At
                  the time, I definitely took it for granted and stressed way
                  too much about the little things. My best recommendation is to
                  HAVE FUN.`,
    },
    {
      imgSrc: "http://localhost:3000/specialist-2.jpg",
      name: "Peter [ barista ]",
      description: `First of all, I LOVE coffee. I know waaaaay too much about it
                  to not work with it, but I have just made the final transition
                  out of it. I spent about 8 years trying to make it my career
                  and only found stress and a paycheck-to-paycheck lifestyle.`,
    },
  ];

  return (
    <section className="section container">
      <section id="about">
        <h2 className="section-heading">Our specialists</h2>
      </section>
      <ul className="specialist-list">
        {employees.map((employee, index) => (
          <EmployeeItem
            key={index}
            imgSrc={employee.imgSrc}
            name={employee.name}
            description={employee.description}
          />
        ))}
      </ul>
    </section>
  );
}

export default Employees;
