import petPoject01 from "./../img/petProjects/01.png";
import petProject01Big from "./../img/petProjects/01-big.png";

import petPoject02 from "./../img/petProjects/02.png";
import petProject02Big from "./../img/petProjects/02-big.png";

import petPoject03 from "./../img/petProjects/03.png";
import petProject03Big from "./../img/petProjects/03-big.png";

import petProject04 from "./../img/petProjects/04.png";
import petProject04Big from "./../img/petProjects/04-big.png";

import petProject05 from "./../img/petProjects/05.png";
import petProject05Big from "./../img/petProjects/05-big.png";

import petProject06 from "./../img/petProjects/06.png";
import petProject06Big from "./../img/petProjects/06-big.png";

const petProjects = [
	{
		title: 'Счетчик',
		description: 'простой и удобный счётчик, реализованный на React с использованием хуков useState. Позволяет увеличивать и уменьшать текущее значение по нажатию кнопок «Плюс» и «Минус».',
		target: 'данный пет-проект создан для практики работы с React, освоения управления состоянием через хуки и применения современных подходов к стилизации компонентов.',
		skills: 'React (hooks), SCSS, JavaScript',
		img: petPoject01,
		imgBig: petProject01Big,
		gif: '',
		gitHubLink: 'https://github.com',
	},
	{
		title: 'Конвертор валют',
		description: 'простой и удобный конвертор валют на React с использованием хуков useState и useEffect. Позволяет конвертировать суммы между рублём и основными иностранными валютами по актуальным курсам Центрального банка РФ.',
		target: 'пет-проект создан для практики работы с React, освоения управления состоянием через хуки и работы с внешними API для получения актуальных данных.',
		skills: 'React (hooks), SCSS, JavaScript, API',
		img: petPoject02,
		imgBig: petProject02Big,
		gif: '',
		gitHubLink: 'https://github.com',
	},
	{
		title: 'Модальное окно',
		description: 'простой и функциональный компонент модального окна на React с использованием хуков useState. Позволяет открывать и закрывать окно с анимацией, а также отображать любое содержимое внутри.',
		target: 'пет-проект создан для практики работы с React, управления состоянием и создания переиспользуемых компонентов с современным подходом к стилизации через SCSS.',
		skills: 'React (hooks), SCSS, JavaScript',
		img: petPoject03,
		imgBig: petProject03Big,
		gif: '',
		gitHubLink: 'https://github.com',
	},
	{
		title: 'React-викторина',
		description: 'интерактивная викторина на React с использованием хука useState. Приложение отображает вопросы, фиксирует выбор пользователя и подсчитывает количество правильных ответов с прогресс-баром.',
		target: 'пет-проект разработан для отработки навыков работы с React-хуками, условной отрисовки компонентов и базового взаимодействия с пользователем. Также используется стилизация через SCSS.',
		skills: 'React (hooks), SCSS, JavaScript',
		img: petProject04,
		imgBig: petProject04Big,
		gif: '',
		gitHubLink: 'https://github.com',
	},
	{
		title: 'Список гостей',
		description: 'приложение на React с загрузкой списка пользователей с API, возможностью поиска по имени, добавления в список приглашённых и отображением результата. Используется динамическая фильтрация, условная отрисовка и хук useEffect для асинхронной загрузки данных.',
		target: 'пет-проект создан для отработки навыков работы с React-хуками, управления состоянием, фильтрации массива данных, взаимодействия с REST API и организации логики взаимодействия с пользователем. Также реализована базовая адаптивная верстка и стилизация с помощью SCSS.',
		skills: 'React (hooks), REST API, JavaScript, SCSS',
		img: petProject05,
		imgBig: petProject05Big,
		gif: '',
		gitHubLink: 'https://github.com'
	},
	{
		title: 'Коллекция фотографий',
		description: 'фото-галерея на React с фильтрацией по категориям, поиском и пагинацией. Данные загружаются с mockAPI, отображаются в виде карточек с изображениями, и обновляются в зависимости от выбранной категории и страницы.',
		target: 'пет-проект создан для практики работы с React-хуками, асинхронной загрузки данных, фильтрации по поисковому запросу, условной отрисовки и организации постраничной навигации. Также реализован базовый UI с адаптивной версткой и SCSS.',
		skills: 'React (hooks, useEffect, useState), REST API, JavaScript, SCSS',
		img: petProject06,
		imgBig: petProject06Big,
		gif: '',
		gitHubLink: 'https://github.com'
	},
];

export {petProjects}