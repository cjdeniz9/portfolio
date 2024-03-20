export default function TechnicalSkills() {
  const techStack = [
    {
      id: 1,
      name: "React",
      img: "react-original",
    },
    {
      id: 2,
      name: "JavaScript",
      img: "javascript-plain",
    },
    {
      id: 3,
      name: "Node.js",
      img: "nodejs-plain",
    },
    {
      id: 4,
      name: "Express.js",
      img: "express-original",
    },
    {
      id: 5,
      name: "ASP.NET",
      img: "dot-net-plain",
    },
    {
      id: 6,
      name: "Firebase",
      img: "firebase-plain",
    },
    {
      id: 7,
      name: "Tailwind CSS",
      img: "tailwindcss-original",
    },

    {
      id: 8,
      name: "CSS",
      img: "css3-plain",
    },
    {
      id: 9,
      name: "HTML5",
      img: "html5-plain",
    },
  ];
  return (
    <div className="w-5/6">
      <span className="block text-xl mb-8 text-left">Technical Skills</span>
      <div className="flex">
        {techStack.map((item) => {
          return (
            <div key={item.id} className="w-[11.11%]">
              <div className="w-full flex justify-center mb-4">
                <i
                  className={`devicon-${item.img} text-[#666666] text-4xl`}
                ></i>
              </div>
              <span className="text-sm font-light">{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
