import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      title: "Веб-разработка",
      description: "Создание современных сайтов и веб-приложений",
      price: "от 50 000 ₽",
      features: [
        "React/Vue.js",
        "Адаптивный дизайн",
        "SEO-оптимизация",
        "Интеграция с API",
      ],
      icon: "Code",
      popular: false,
    },
    {
      title: "Мобильные приложения",
      description: "Разработка iOS и Android приложений",
      price: "от 150 000 ₽",
      features: [
        "React Native",
        "Нативная разработка",
        "UI/UX дизайн",
        "Публикация в Store",
      ],
      icon: "Smartphone",
      popular: true,
    },
    {
      title: "E-commerce решения",
      description: "Интернет-магазины и торговые платформы",
      price: "от 100 000 ₽",
      features: [
        "Интеграция платежей",
        "Управление товарами",
        "Аналитика продаж",
        "CRM система",
      ],
      icon: "ShoppingCart",
      popular: false,
    },
    {
      title: "Консультации",
      description: "Техническое консультирование и аудит",
      price: "от 5 000 ₽/час",
      features: [
        "Анализ архитектуры",
        "Code Review",
        "Оптимизация",
        "Менторинг",
      ],
      icon: "Users",
      popular: false,
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
            <Link to="/services" className="text-blue-600 font-medium">
              Услуги
            </Link>
            <Link
              to="/portfolio"
              className="hover:text-blue-600 transition-colors"
            >
              Портфолио
            </Link>
            <Link to="/team" className="hover:text-blue-600 transition-colors">
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
            Наши услуги
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Полный спектр IT-услуг для развития вашего бизнеса. От идеи до
            готового продукта с поддержкой на всех этапах.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden hover:shadow-xl transition-all duration-300 ${service.popular ? "ring-2 ring-blue-500" : ""}`}
              >
                {service.popular && (
                  <Badge className="absolute top-4 right-4 bg-blue-500">
                    Популярно
                  </Badge>
                )}
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Icon
                        name={service.icon}
                        size={24}
                        className="text-blue-600"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <div className="text-2xl font-bold text-blue-600 mt-1">
                        {service.price}
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Icon
                          name="Check"
                          size={16}
                          className="text-green-500"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">Заказать услугу</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Как мы работаем
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Анализ", desc: "Изучаем задачи и цели" },
              {
                step: "2",
                title: "Планирование",
                desc: "Создаем техническое задание",
              },
              { step: "3", title: "Разработка", desc: "Реализуем проект" },
              { step: "4", title: "Запуск", desc: "Тестируем и внедряем" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы начать проект?</h2>
          <p className="text-xl mb-8 opacity-90">
            Свяжитесь с нами для обсуждения деталей
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Получить консультацию
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              Посмотреть портфолио
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
