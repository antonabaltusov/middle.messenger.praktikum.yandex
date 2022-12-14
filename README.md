<h1 align="center">Проект мессенджера.</h1><br>
<br>
написан с помощью TS.<br>
Для сборки html используется HandleBars.<br>
Для реализации FLUX написан EventBus.<br>
Для компонентов написан класс Block на основе EventBus.<br>
Для хранения данных реализован Store на основе EventBus.<br>
Для HTTP запросов запросов написан класс HTTPTransport с помощью XMLHttpRequest.<br>
Для подписки компонентов на Store написана функция Connect.<br>
Для использования HTTPTransport написаны API для разных сущностей.<br>
Для связи компонентов с приложением написаны сервисы в которых расположена бизнес логика.<br>
<br>
Для сборки проекта используется WebPack в котором для сборки TS использован Babel.<br>
Для запуска приложения в изолированной среде Docker написан Dockerfile.<br>
Тестами покрыты Block, Store, Router, Route и HTTPTransport.<br>
Для тестов использованы библиотеки Mocha, Chai.<br>
Настроен precommit для предотвращения комита и наличием ошибок в тестах.<br>
<br>
ссылка на проект развернутый на render.com(взамен Heroku) - https://message-travel.onrender.com/ <br>ссылка на проект развернутый на netlify - https://deploy--eloquent-bunny-4276bd.netlify.app/
