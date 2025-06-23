import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Contacts = () => {
  const contactInfo = [
    {
      icon: "Phone",
      title: "Телефон",
      info: "+7 (495) 123-45-67",
      link: "tel:+74951234567",
    },
    {
      icon: "Mail",
      title: "Email",
      info: "hello@webstudio.ru",
      link: "mailto:hello@webstudio.ru",
    },
    {
      icon: "MapPin",
      title: "Адрес",
      info: "Москва, ул. Тверская, д. 15, офис 301",
      link: "#",
    },
    {
      icon: "Clock",
      title: "Режим работы",
      info: "Пн-Пт: 9:00-18:00",
      link: "#",
    },
  ];

  const socialLinks = [
    { icon: "Github", name: "GitHub", link: "#" },
    { icon: "Linkedin", name: "LinkedIn", link: "#" },
    { icon: "Twitter", name: "Twitter", link: "#" },
    { icon: "Instagram", name: "Instagram", link: "#" },
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
            <Link
              to="/testimonials"
              className="hover:text-blue-600 transition-colors"
            >
              Отзывы
            </Link>
            <Link to="/contacts" className="text-blue-600 font-medium">
              Контакты
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Свяжитесь с нами
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Готовы обсудить ваш проект? Мы всегда на связи и готовы ответить на
            все вопросы. Выберите удобный способ связи или заполните форму ниже.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((contact, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow text-center"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon
                      name={contact.icon}
                      size={24}
                      className="text-blue-600"
                    />
                  </div>
                  <h3 className="font-semibold mb-2">{contact.title}</h3>
                  <a
                    href={contact.link}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {contact.info}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Напишите нам</CardTitle>
                <p className="text-gray-600">
                  Заполните форму, и мы свяжемся с вами в течение 24 часов
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Имя *</Label>
                    <Input id="firstName" placeholder="Введите ваше имя" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Фамилия</Label>
                    <Input id="lastName" placeholder="Введите вашу фамилию" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>

                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>

                <div>
                  <Label htmlFor="company">Компания</Label>
                  <Input id="company" placeholder="Название вашей компании" />
                </div>

                <div>
                  <Label htmlFor="project">Тип проекта</Label>
                  <select className="w-full p-2 border border-gray-300 rounded-md">
                    <option>Выберите тип проекта</option>
                    <option>Веб-сайт</option>
                    <option>Мобильное приложение</option>
                    <option>E-commerce</option>
                    <option>Консультация</option>
                    <option>Другое</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="budget">Бюджет проекта</Label>
                  <select className="w-full p-2 border border-gray-300 rounded-md">
                    <option>Выберите бюджет</option>
                    <option>До 100 000 ₽</option>
                    <option>100 000 - 300 000 ₽</option>
                    <option>300 000 - 500 000 ₽</option>
                    <option>500 000 - 1 000 000 ₽</option>
                    <option>Свыше 1 000 000 ₽</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message">Сообщение *</Label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder="Расскажите подробнее о вашем проекте..."
                  />
                </div>

                <Button className="w-full" size="lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить сообщение
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  * Обязательные поля
                </p>
              </CardContent>
            </Card>

            {/* Map & Office Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <Card>
                <CardContent className="p-0">
                  <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <Icon name="MapPin" size={48} className="mx-auto mb-2" />
                      <p>Интерактивная карта</p>
                      <p className="text-sm">Москва, ул. Тверская, д. 15</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Office Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Building" size={24} />
                    Наш офис
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Мы находимся в самом центре Москвы, рядом с метро
                    "Тверская". В нашем офисе всегда рады встретить клиентов для
                    личных встреч и обсуждения проектов.
                  </p>

                  <div className="space-y-2">
                    <p className="font-semibold">Как добраться:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Метро "Тверская" - 2 минуты пешком</li>
                      <li>• Метро "Пушкинская" - 5 минут пешком</li>
                      <li>• Парковка рядом со зданием</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card>
                <CardHeader>
                  <CardTitle>Мы в социальных сетях</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.link}
                        className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-100 hover:text-blue-600 transition-colors"
                        title={social.name}
                      >
                        <Icon name={social.icon} size={20} />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Часто задаваемые вопросы
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "Сколько времени занимает разработка?",
                answer:
                  "Время разработки зависит от сложности проекта. Простой сайт - 2-4 недели, сложное приложение - 2-6 месяцев.",
              },
              {
                question: "Предоставляете ли поддержку после запуска?",
                answer:
                  "Да, мы предоставляем техническую поддержку и обслуживание проектов. Условия обсуждаются индивидуально.",
              },
              {
                question: "Работаете ли с международными клиентами?",
                answer:
                  "Да, мы работаем с клиентами по всему миру. Поддерживаем коммуникацию на английском языке.",
              },
              {
                question:
                  "Можно ли внести изменения в проект в процессе разработки?",
                answer:
                  "Конечно! Мы используем гибкую методологию разработки, которая позволяет вносить изменения на любом этапе.",
              },
            ].map((faq, index) => (
              <div key={index} className="space-y-2">
                <h3 className="font-semibold text-lg">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
