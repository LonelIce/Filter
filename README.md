# Каталог и фильтр

### Начало  
Дорогая сестра, этот репозиторий создан лишь для того, чтобы показать тебе код. Я сделал легкий адаптив, но не претендую на пиксельную точность. Я прошу, чтобы ты посмотрела саму логику проекта и подсказа мне как улучшить код для работы с React, JS и Redux, игнорируя верстку.

Описание задания: https://docs.google.com/document/d/1MGIHgxYc_xNUb2MYby3WKExlZ-Z0x8ThaKzlyfDCrgg/edit

Макет: https://www.figma.com/file/roeCgkTrFbhGJXXbrcFZEq/Тестовое-задание-front-end-Веб-Секрет?node-id=0%3A1 
> На макете представлена другая категория товаров, это связано с тем, что API представленый в описании тестового задания был для категории "Объективы".  

> Также там дизайн всего для 2х экранов, поэтому переходы между ними несколько некрасивы, я знаю это и доработаю стили чуть позже...  

Деплой: https://filter-six.vercel.app  
> Стартовая страница содержит лишь одну ссылку. Это сделано мной специально, дабы показать переход на страницу с новым query.  

>Ты можешь увидеть надпись "Товыры не найдены";  Я не стилизовал её, оставил на потом... При превом загрузке страници список товаров прокидывается пустой из стора, лишь затем идет первый запрос за товарами(опираясь на фильтры), это я сделал дабы не отправлять 2 запроса на сервер при первом открытии страницы. (Если можешь посказать другой способ реалтзации, то буду благодарен). 

> Некоторые картинки не грузятся, это норма. Атрибут alt я не прописывал намеренно, так как использую компоненту <Image> из NextJS.
>> Можно и прописать, но тогда итоговый результат некрасивый и не соответсвует реальному сайту с этими объективами.

>Цена товаров- это число с ".00", это не ошибка, хотя и сделано не по макету (на реальном сайте именно вещественные числа). 

>Фильрация на сервере, при изменении фильтров всегда приходит новый список продуктов. 

>Я знаю что:
>>В коде есть комментарии, они мне пока нужны,
>> Я намерренно не делал карточки продуктов ссылками
>> Я намеренно не добавлял onClick на "В корзину" и не изменял состояние сердечка.

## Cтруктура
./pages/ _app.jsx => index.jsx => shop.jsx => ./components  
>Папка "pages", файл _app.jsx и index.js должны быть, это связано со спецификой работы NextJS. 

>Файл shop.jsx находится в папке "pages", так как таким образом определяется query и содержание страници для него 

Стили:  
Глобальные : ./styles/globale.scss.  
Переменные : ./slyles/variables.scss.  
Частные: находятся каждый рядом со своей компонентой.

## Технологии
* "React",
* "NextJS",
* "SASS/SCSS",
* "Eslint/Prettier",
* "Redux".

## Костыль: 
Файл Helper в попке ./store/helper 
> Он ужасен в моем видении.

#### Самое прикольное: 

Реальный сайт с этими объективами: https://getlens-master.stage.dev.family/obektivy  
> Я поздно его увидел потому и некоторые элементы (по сравнению с ним) не соответствуют, отсутствуют, либо функционируют немного по-другому.