import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Team = () => {
  const team = [
    {
      name: "Алексей Смирнов",
      role: "Lead Developer",
      experience: "8 лет",
      photo:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      skills: ["React", "Node.js", "TypeScript", "AWS"],
      description:
        "Эксперт в области фронтенд и бэкенд разработки. Руководит командой разработчиков.",
    },
    {
      name: "Мария Петрова",
      role: "UI/UX Designer",
      experience: "6 лет",
      photo:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      skills: ["Figma", "Adobe XD", "Sketch", "Prototyping"],
      description:
        "Создает интуитивные и красивые интерфейсы, ориентированные на пользователя.",
    },
    {
      name: "Дмитрий Иванов",
      role: "Mobile Developer",
      experience: "5 лет",
      photo:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      skills: ["React Native", "Flutter", "iOS", "Android"],
      description:
        "Специализируется на разработке мобильных приложений для всех платформ.",
    },
    {
      name: "Анна Козлова",
      role: "Project Manager",
      experience: "7 лет",
      photo:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      skills: ["Scrum", "Agile", "Jira", "Planning"],
      description:
        "Координирует проекты и обеспечивает своевременную доставку результатов.",
    },
    {
      name: "Сергей Волков",
      role: "DevOps Engineer",
      experience: "6 лет",
      photo:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      skills: ["Docker", "Kubernetes", "CI/CD", "AWS"],
      description:
        "Настраивает инфраструктуру и автоматизирует процессы развертывания.",
    },
    {
      name: "Елена Николаева",
      role: "QA Engineer",
      experience: "4 года",
      photo:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face",
      skills: ["Testing", "Automation", "Selenium", "API Testing"],
      description:
        "Обеспечивает высокое качество продуктов через тщательное тестирование.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            WebStudio
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link to="/" className="hover:text-blue-600 transition-colors">
              Главная
            </Link>
            <Link
              to="/services"
              className="hover:text-blue-600 transition-colors"
            >
              Услуги
            </Link>
            <Link
              to="/portfolio"
              className="hover:text-blue-600 transition-colors"
            >
              Портфолио
            </Link>
            <Link to="/team" className="text-blue-600 font-medium">
              Команда
            </Link>
            <Link
              to="/testimonials"
              className="hover:text-blue-600 transition-colors"
            >
              Отзывы
            </Link>
            <Link
              to="/contacts"
              className="hover:text-blue-600 transition-colors"
            >
              Контакты
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Наша команда
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Профессионалы своего дела, которые создают выдающиеся цифровые
            продукты. Каждый участник команды — эксперт в своей области.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Проектов завершено</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">6</div>
              <div className="text-gray-600">Специалистов</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">5</div>
              <div className="text-gray-600">Лет опыта</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Довольных клиентов</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90">
                      {member.experience}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    {member.description}
                  </p>

                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Icon name="Code" size={16} />
                        Навыки
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill, idx) => (
                          <Badge
                            key={idx}
                            variant="outline"
                            className="text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Наши ценности
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "Target",
                title: "Качество",
                description: "Мы стремимся к совершенству в каждом проекте",
              },
              {
                icon: "Users",
                title: "Командная работа",
                description: "Вместе мы достигаем больших результатов",
              },
              {
                icon: "Lightbulb",
                title: "Инновации",
                description: "Используем передовые технологии и подходы",
              },
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={value.icon} size={32} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Присоединяйтесь к нашей команде
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Мы всегда ищем талантливых специалистов
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacts" className="inline-block">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Связаться с нами
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
