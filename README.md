Проект мессенджера.
написан с помощью TS.
Для сборки html используется HandleBars.
Для реализации FLUX написан EventBus.
Для компонентов написан класс Block на основе EventBus.
Для хранения данных реализован Store на основе EventBus.
Для HTTP запросов запросов написан класс HTTPTransport с помощью XMLHttpRequest.
Для подписки компонентов на Store написана функция Connect.
Для использования HTTPTransport написаны API для разных сущностей.
Для связи компонентов с приложением написаны сервисы в которых расположена бизнес логика.
Для сборки проекта используется WebPack в котором для сборки TS использован Babel.
Для запуска приложения в изолированной среде Docker написан Dockerfile.
Тестами покрыты Block, Store, Router, Route и HTTPTransport.
Для тестов использованы библиотеки Mocha, Chai.
Настроен precommit для предотвращения комита и наличием ошибок в тестах.
ссылка на проект развернутый на render.com(взамен Heroku) - https://message-travel.onrender.com/
ссылка на проект развернутый на netlify - https://deploy--eloquent-bunny-4276bd.netlify.app/
