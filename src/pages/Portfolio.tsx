import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce платформа",
      category: "Веб-разработка",
      description:
        "Современная платформа электронной коммерции с интуитивным интерфейсом, системой управления заказами и интеграцией с платежными системами.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      features: [
        "Адаптивный дизайн",
        "Система корзины и заказов",
        "Панель администратора",
        "Интеграция с оплатой",
      ],
      link: "#",
      status: "Завершен",
    },
    {
      id: 2,
      title: "Мобильное приложение банка",
      category: "Мобильная разработка",
      description:
        "Безопасное банковское приложение с функциями перевода средств, оплаты счетов и управления счетами.",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
      technologies: ["React Native", "TypeScript", "Firebase", "Biometric API"],
      features: [
        "Биометрическая аутентификация",
        "Переводы и платежи",
        "История операций",
        "Push-уведомления",
      ],
      link: "#",
      status: "В разработке",
    },
    {
      id: 3,
      title: "CRM система",
      category: "Корпоративные решения",
      description:
        "Комплексная система управления взаимоотношениями с клиентами для повышения эффективности продаж.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      technologies: ["Vue.js", "Laravel", "MySQL", "Redis"],
      features: [
        "Управление лидами",
        "Автоматизация продаж",
        "Аналитика и отчеты",
        "Интеграция с email",
      ],
      link: "#",
      status: "Завершен",
    },
    {
      id: 4,
      title: "Платформа онлайн-обучения",
      category: "EdTech",
      description:
        "Интерактивная образовательная платформа с видео-курсами, тестами и системой прогресса студентов.",
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
      technologies: ["Next.js", "MongoDB", "AWS", "Socket.io"],
      features: [
        "Видео-плеер с закладками",
        "Система тестирования",
        "Прогресс обучения",
        "Чат с преподавателем",
      ],
      link: "#",
      status: "Завершен",
    },
    {
      id: 5,
      title: "IoT Dashboard",
      category: "Интернет вещей",
      description:
        "Панель мониторинга и управления IoT устройствами в реальном времени с визуализацией данных.",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
      technologies: ["React", "D3.js", "MQTT", "InfluxDB"],
      features: [
        "Мониторинг в реальном времени",
        "Графики и диаграммы",
        "Система алертов",
        "Управление устройствами",
      ],
      link: "#",
      status: "В разработке",
    },
    {
      id: 6,
      title: "Социальная сеть для стартапов",
      category: "Социальные сети",
      description:
        "Платформа для нетворкинга предпринимателей с функциями поиска партнеров и инвесторов.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      technologies: ["React", "GraphQL", "PostgreSQL", "Redis"],
      features: [
        "Профили пользователей",
        "Система мэтчинга",
        "Чат и видеозвонки",
        "Инвестиционные предложения",
      ],
      link: "#",
      status: "Завершен",
    },
  ];

  const categories = [
    "Все проекты",
    "Веб-разработка",
    "Мобильная разработка",
    "Корпоративные решения",
    "EdTech",
    "Интернет вещей",
    "Социальные сети",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Портфолио проектов
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Изучите наши успешно реализованные проекты и убедитесь в качестве
            нашей работы
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border border-gray-200 hover:border-purple-600 hover:bg-purple-50 transition-colors duration-200"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-purple-100 text-purple-600 text-sm rounded-full font-medium">
                      {project.category}
                    </span>
                    <span
                      className={`px-3 py-1 text-sm rounded-full font-medium ${
                        project.status === "Завершен"
                          ? "bg-green-100 text-green-600"
                          : "bg-yellow-100 text-yellow-600"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">
                      Ключевые функции:
                    </h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <Icon
                            name="Check"
                            size={14}
                            className="text-green-500 mr-2 flex-shrink-0"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">
                      Технологии:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button className="flex-1 bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors duration-200 flex items-center justify-center">
                      <Icon name="ExternalLink" size={16} className="mr-2" />
                      Подробнее
                    </button>
                    <button className="px-6 py-3 border border-gray-200 text-gray-600 rounded-lg font-medium hover:border-gray-300 transition-colors duration-200">
                      <Icon name="Github" size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Готовы реализовать свой проект?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Свяжитесь с нами для обсуждения вашей идеи и получения консультации
          </p>
          <button className="bg-purple-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-purple-700 transition-colors duration-200 inline-flex items-center">
            <Icon name="MessageCircle" size={20} className="mr-2" />
            Начать проект
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
