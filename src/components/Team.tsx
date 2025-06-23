const Team = () => {
  const team = [
    {
      name: "Алексей Иванов",
      position: "Технический директор",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      skills: ["React", "Node.js", "DevOps"],
    },
    {
      name: "Мария Петрова",
      position: "Lead Frontend Developer",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b332c1c2?w=400&h=400&fit=crop&crop=face",
      skills: ["Vue.js", "TypeScript", "UI/UX"],
    },
    {
      name: "Дмитрий Смирнов",
      position: "Backend Architect",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      skills: ["Python", "PostgreSQL", "AWS"],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Наша команда
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Опытные специалисты, которые воплотят ваши идеи в жизнь
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 rounded-full bg-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="text-purple-600 font-medium mb-4">
                {member.position}
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {member.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
