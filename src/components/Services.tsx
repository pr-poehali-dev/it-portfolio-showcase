import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Globe",
      title: "Веб-разработка",
      description:
        "Создание современных веб-приложений и сайтов с использованием передовых технологий",
    },
    {
      icon: "Smartphone",
      title: "Мобильные приложения",
      description:
        "Разработка нативных и кроссплатформенных мобильных приложений для iOS и Android",
    },
    {
      icon: "Database",
      title: "Системная интеграция",
      description:
        "Интеграция различных систем и создание единой IT-инфраструктуры для вашего бизнеса",
    },
    {
      icon: "Users",
      title: "IT-консалтинг",
      description:
        "Консультации по выбору технологий, архитектуре решений и оптимизации процессов",
    },
    {
      icon: "Shield",
      title: "Кибербезопасность",
      description:
        "Обеспечение защиты данных и создание безопасной IT-среды для вашего бизнеса",
    },
    {
      icon: "Wrench",
      title: "Техподдержка",
      description:
        "Круглосуточная техническая поддержка и сопровождение IT-решений",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Полный спектр IT-услуг для развития вашего бизнеса
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-xl hover:bg-purple-50 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                <Icon
                  name={service.icon}
                  size={24}
                  className="text-purple-600"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
