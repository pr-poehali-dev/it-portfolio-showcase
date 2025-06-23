import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-purple-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Код и{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
              Разработка
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Создаем цифровые решения, которые делают бизнес эффективнее
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2">
              <span>Начать проект</span>
              <Icon name="ArrowRight" size={20} />
            </button>
            <button className="border border-gray-300 hover:border-purple-300 text-gray-700 px-8 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2">
              <Icon name="Play" size={20} />
              <span>Смотреть презентацию</span>
            </button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-purple-600">150+</div>
            <div className="text-gray-600">Проектов реализовано</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-purple-600">5 лет</div>
            <div className="text-gray-600">На рынке IT</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-purple-600">24/7</div>
            <div className="text-gray-600">Поддержка клиентов</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
