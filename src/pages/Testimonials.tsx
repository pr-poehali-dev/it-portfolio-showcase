import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Михаил Андреев",
      company: "TechStart LLC",
      role: "CEO",
      photo:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      text: "Команда WebStudio превзошла все наши ожидания. Создали потрясающее веб-приложение для нашего стартапа. Профессиональный подход, соблюдение сроков и отличное качество кода.",
      project: "Веб-приложение для стартапа",
      date: "Декабрь 2023",
    },
    {
      name: "Елена Соколова",
      company: "Fashion Boutique",
      role: "Владелец",
      photo:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      text: "Благодаря новому сайту продажи выросли на 40%! Дизайн получился стильным и современным, а функционал работает без сбоев. Клиенты часто хвалят удобство покупок.",
      project: "Интернет-магазин одежды",
      date: "Ноябрь 2023",
    },
    {
      name: "Александр Петров",
      company: "MedClinic",
      role: "Директор",
      photo:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      text: "Мобильное приложение для записи к врачам стало настоящим хитом среди наших пациентов. Интуитивный интерфейс и быстрая работа. Рекомендуем WebStudio!",
      project: "Мобильное приложение",
      date: "Октябрь 2023",
    },
    {
      name: "Ирина Кузнецова",
      company: "EduPlatform",
      role: "Основатель",
      photo:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      text: "Создали для нас образовательную платформу с нуля. Теперь у нас более 1000 активных пользователей. Система стабильно работает даже при высоких нагрузках.",
      project: "Образовательная платформа",
      date: "Сентябрь 2023",
    },
    {
      name: "Сергей Морозов",
      company: "RestaurantChain",
      role: "IT-директор",
      photo:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      text: "Автоматизировали процессы в наших ресторанах. Система управления заказами работает безупречно. Персонал быстро освоил новый интерфейс.",
      project: "CRM система для ресторанов",
      date: "Август 2023",
    },
    {
      name: "Анна Волкова",
      company: "FinanceGroup",
      role: "Руководитель проектов",
      photo:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      text: "Впечатляющая работа по созданию финансового дашборда. Сложные данные представлены в понятном и красивом виде. Клиенты в восторге от нового интерфейса.",
      project: "Финансовый дашборд",
      date: "Июль 2023",
    },
  ];

  const stats = [
    { number: "50+", label: "Довольных клиентов" },
    { number: "4.9", label: "Средняя оценка" },
    { number: "100%", label: "Проектов в срок" },
    { number: "2 года", label: "Средняя поддержка" },
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
            <Link to="/team" className="hover:text-blue-600 transition-colors">
              Команда
            </Link>
            <Link to="/testimonials" className="text-blue-600 font-medium">
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
            Отзывы клиентов
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Узнайте, что говорят о нас наши клиенты. Каждый проект — это история
            успеха и долгосрочного партнерства.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={16}
                        className="text-yellow-400 fill-current"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-700 mb-6 italic">
                    "{testimonial.text}"
                  </p>

                  {/* Project Info */}
                  <div className="mb-4">
                    <Badge variant="outline" className="text-xs">
                      {testimonial.project}
                    </Badge>
                    <div className="text-xs text-gray-500 mt-1">
                      {testimonial.date}
                    </div>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.photo}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-sm">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role}
                      </div>
                      <div className="text-xs text-blue-600">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Кейсы успеха</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Рост продаж на 150%",
                description: "Интернет-магазин модной одежды",
                metric: "+150%",
                icon: "TrendingUp",
              },
              {
                title: "10K+ активных пользователей",
                description: "Образовательная платформа",
                metric: "10K+",
                icon: "Users",
              },
              {
                title: "Сокращение времени на 80%",
                description: "Автоматизация бизнес-процессов",
                metric: "-80%",
                icon: "Clock",
              },
            ].map((caseStudy, index) => (
              <div
                key={index}
                className="text-center p-6 border rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={caseStudy.icon}
                    size={32}
                    className="text-blue-600"
                  />
                </div>
                <div className="text-2xl font-bold text-blue-600 mb-2">
                  {caseStudy.metric}
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {caseStudy.title}
                </h3>
                <p className="text-gray-600 text-sm">{caseStudy.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Станьте следующей историей успеха
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Присоединяйтесь к нашим довольным клиентам
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacts" className="inline-block">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Начать проект
              </button>
            </Link>
            <Link to="/portfolio" className="inline-block">
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Посмотреть работы
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
