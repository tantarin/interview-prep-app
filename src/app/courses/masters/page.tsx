"use client";

import { useState } from "react";
import Link from "next/link";

export default function MastersCourse() {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="max-w-4xl mx-auto">
      <Link href="/courses" className="inline-block mb-6 text-blue-600 hover:underline">
        ← Вернуться к курсам
      </Link>
      
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-4">Курс по выбору магистратуры в сфере IT</h1>
        <div className="w-full h-64 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mb-6 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">Подготовка к поступлению в IT-магистратуру</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">8 недель</h3>
          <p>Продолжительность курса с практическими заданиями</p>
        </div>
        <div className="bg-purple-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">12 модулей</h3>
          <p>Подробные материалы и пошаговые инструкции</p>
        </div>
        <div className="bg-indigo-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Персональная консультация</h3>
          <p>Индивидуальная стратегия поступления</p>
        </div>
      </div>
      
      <div className="mb-8 border-b border-gray-200">
        <div className="flex flex-wrap -mb-px">
          <button 
            className={`inline-block p-4 border-b-2 ${activeTab === 'about' ? 'border-blue-600 text-blue-600' : 'border-transparent'}`}
            onClick={() => setActiveTab('about')}
          >
            О курсе
          </button>
          <button 
            className={`inline-block p-4 border-b-2 ${activeTab === 'program' ? 'border-blue-600 text-blue-600' : 'border-transparent'}`}
            onClick={() => setActiveTab('program')}
          >
            Программа курса
          </button>
          <button 
            className={`inline-block p-4 border-b-2 ${activeTab === 'mipt' ? 'border-blue-600 text-blue-600' : 'border-transparent'}`}
            onClick={() => setActiveTab('mipt')}
          >
            Магистратура МФТИ
          </button>
          <button 
            className={`inline-block p-4 border-b-2 ${activeTab === 'faq' ? 'border-blue-600 text-blue-600' : 'border-transparent'}`}
            onClick={() => setActiveTab('faq')}
          >
            Вопросы и ответы
          </button>
        </div>
      </div>
      
      {activeTab === 'about' && (
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4">О курсе</h2>
          <p className="mb-4">
            Курс разработан для тех, кто планирует поступление в магистратуру по IT-направлениям. 
            Вы получите полное понимание процесса поступления, требований различных вузов и стратегий подготовки.
          </p>
          <p className="mb-4">
            Курс ведет Таринская Татьяна, Software Developer с опытом работы в крупных IT-компаниях и 
            успешным опытом поступления в магистратуру по направлению Computer Science.
          </p>
          <p className="mb-6">
            В рамках курса мы рассмотрим ведущие технические вузы России, включая МФТИ, МГТУ им. Баумана, 
            НИУ ВШЭ, ИТМО и другие. Вы узнаете о специфике каждого учебного заведения, особенностях 
            вступительных испытаний и перспективах трудоустройства после окончания.
          </p>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <p className="font-semibold">Важно!</p>
            <p>
              Сроки подачи документов в магистратуру большинства вузов начинаются в июне. 
              Рекомендуем начать подготовку заранее, чтобы успеть качественно подготовиться 
              к вступительным испытаниям и собрать все необходимые документы.
            </p>
          </div>
        </div>
      )}
      
      {activeTab === 'program' && (
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Программа курса</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold">Модуль 1: Обзор IT-магистратур</h3>
              <p className="text-gray-600">Сравнение программ, рейтинги, специализации</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold">Модуль 2: Требования к поступающим</h3>
              <p className="text-gray-600">Экзамены, портфолио, мотивационные письма</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold">Модуль 3: Подготовка к вступительным испытаниям</h3>
              <p className="text-gray-600">Алгоритмы подготовки, типовые задания</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold">Модуль 4: Составление идеального CV</h3>
              <p className="text-gray-600">Структура, акценты, примеры успешных резюме</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold">Модуль 5: Мотивационное письмо</h3>
              <p className="text-gray-600">Как выделиться среди других кандидатов</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold">Модуль 6: Научная работа и публикации</h3>
              <p className="text-gray-600">Как начать научную деятельность и получить публикации</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold">Модуль 7: Подготовка к собеседованию</h3>
              <p className="text-gray-600">Типичные вопросы и успешные стратегии ответов</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold">Модуль 8: Финансирование обучения</h3>
              <p className="text-gray-600">Стипендии, гранты, целевое обучение</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold">Модуль 9: Подготовка к техническим экзаменам</h3>
              <p className="text-gray-600">Математика, информатика, профильные предметы</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold">Модуль 10: Выбор научного руководителя</h3>
              <p className="text-gray-600">Как найти подходящего научрука и установить контакт</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold">Модуль 11: Подготовка документов</h3>
              <p className="text-gray-600">Пошаговая инструкция по сбору всех необходимых документов</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold">Модуль 12: Индивидуальная стратегия поступления</h3>
              <p className="text-gray-600">Составление персонального плана действий</p>
            </div>
          </div>
        </div>
      )}
      
      {activeTab === 'mipt' && (
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Магистратура МФТИ</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Ключевые даты приемной кампании 2025</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Начало приема документов на бюджет: <span className="font-semibold">20 июня 2025</span></li>
              <li>Подача документов: лично, через Госуслуги или по почте</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Физтех-школы МФТИ</h3>
            <p className="mb-2">МФТИ предлагает различные направления магистратуры через систему физтех-школ:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Физтех-школа прикладной математики и информатики</li>
              <li>Физтех-школа физики и исследований им. Ландау</li>
              <li>Физтех-школа биологической и медицинской физики</li>
              <li>Физтех-школа электроники, фотоники и молекулярной физики</li>
              <li>Физтех-школа аэрокосмических технологий</li>
              <li>Физтех-школа радиотехники и компьютерных технологий</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Вступительные испытания</h3>
            <p className="mb-2">Для поступления в магистратуру МФТИ необходимо пройти вступительные испытания, которые обычно включают:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Профильный экзамен по выбранному направлению</li>
              <li>Собеседование с представителями кафедры</li>
            </ul>
            <p className="mt-2 text-sm">Расписание вступительных испытаний публикуется на официальном сайте МФТИ.</p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Подготовка к поступлению</h3>
            <p className="mb-2">МФТИ предлагает онлайн-курсы для поступающих в магистратуру, которые помогут подготовиться к вступительным испытаниям.</p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Контакты приемной комиссии МФТИ</h3>
            <ul className="space-y-1">
              <li><span className="font-semibold">Адрес:</span> 141701, Московская область, г. Долгопрудный, Институтский переулок, д. 9, МФТИ, Главный корпус, 2 этаж</li>
              <li><span className="font-semibold">Телефон:</span> +7 (495) 408-48-00</li>
              <li><span className="font-semibold">Email для вопросов по магистратуре:</span> pk.magistr@mipt.ru</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm">Информация актуальна на момент создания курса. Для получения самой свежей информации рекомендуем посетить <a href="https://pk.mipt.ru/master/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">официальный сайт приемной комиссии МФТИ</a>.</p>
          </div>
        </div>
      )}
      
      {activeTab === 'faq' && (
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Часто задаваемые вопросы</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-1">Когда начинается курс?</h3>
              <p className="text-gray-600">Курс доступен сразу после оплаты. Вы можете проходить его в удобном для вас темпе.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Как долго будет доступен материал?</h3>
              <p className="text-gray-600">Доступ к материалам курса предоставляется на 1 год с момента покупки.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Можно ли получить консультацию по конкретному вузу?</h3>
              <p className="text-gray-600">Да, в рамках курса предусмотрена индивидуальная консультация по выбору программы.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Подходит ли курс для поступающих в зарубежные вузы?</h3>
              <p className="text-gray-600">Курс в первую очередь ориентирован на российские вузы, но многие принципы и стратегии применимы и для зарубежных университетов. Для поступления за границу мы рекомендуем дополнительную консультацию.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Есть ли гарантия поступления после прохождения курса?</h3>
              <p className="text-gray-600">Мы не можем гарантировать поступление, так как это зависит от множества факторов, включая вашу подготовку и конкурсную ситуацию. Однако курс значительно повышает ваши шансы на успешное поступление.</p>
            </div>
          </div>
        </div>
      )}
      
      <div className="bg-gray-100 p-6 rounded-lg mb-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold mb-2">Стоимость курса</h2>
            <p className="text-gray-600 mb-4">Полный доступ ко всем материалам и консультациям</p>
            <p className="text-3xl font-bold text-blue-600">19 900 ₽</p>
          </div>
          <button 
            onClick={() => setShowModal(true)}
            className="mt-4 md:mt-0 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Записаться на курс
          </button>
        </div>
      </div>
      
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Запись на курс</h2>
            <p className="mb-4">Оставьте свои контактные данные, и мы свяжемся с вами для оформления доступа к курсу.</p>
            <form className="space-y-4">
              <div>
                <label className="block mb-1">Имя</label>
                <input type="text" className="w-full border border-gray-300 rounded p-2" />
              </div>
              <div>
                <label className="block mb-1">Email</label>
                <input type="email" className="w-full border border-gray-300 rounded p-2" />
              </div>
              <div>
                <label className="block mb-1">Телефон</label>
                <input type="tel" className="w-full border border-gray-300 rounded p-2" />
              </div>
              <div className="flex justify-end space-x-4">
                <button 
                  type="button" 
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded"
                >
                  Отмена
                </button>
                <button 
                  type="button"
                  className="px-4 py-2 bg-blue-600 text-white rounded"
                >
                  Отправить
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
} 