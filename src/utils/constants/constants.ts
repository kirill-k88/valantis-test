import { IGet_ids, IGet_items } from '../interfaces/api.interface';
import { IRequestError } from '../interfaces/IRequestError.interface';
import { IRequestErrorList } from '../interfaces/IRequestErrorList.interface';

export const RESTDB_URL_PATH = 'https://api.valantis.store:41000/';

export const PAGINATION_LIMIT = 50;

export const INIT_IDS: IGet_ids = {
  result: ['']
};

export const INITIAL_REQUEST_ERROR: IRequestError = {
  code: 0,
  message: ''
};

export const HTTP_REQUEST_ERROR_MESSAGE_LIST: IRequestErrorList = {
  400: { code: 400, message: 'Неверный запрос/Bad Request' },
  401: { code: 401, message: 'Неавторизованный запрос/Unauthorized' },
  402: { code: 402, message: 'Необходима оплата за запрос/Payment Required' },
  403: { code: 403, message: 'Доступ к ресурсу запрещен/Forbidden' },
  404: { code: 404, message: 'Ресурс не найден/Not Found' },
  405: { code: 405, message: 'Недопустимый метод/Method Not Allowed' },
  406: { code: 406, message: 'Неприемлемый запрос/Not Acceptable' },
  407: {
    code: 407,
    message: 'Требуется идентификация прокси, файервола/Proxy Authentication Required'
  },
  408: { code: 408, message: 'Время запроса истекло/Request Timeout' },
  409: { code: 409, message: 'Конфликт/Conflict' },
  410: { code: 410, message: 'Ресурс недоступен/Gone' },
  411: { code: 411, message: 'Необходимо указать длину/Length Required' },
  412: { code: 412, message: 'Сбой при обработке предварительного условия/Precondition Failed' },
  413: { code: 413, message: 'Тело запроса превышает допустимый размер/Request Entity Too Large' },
  414: { code: 414, message: 'Недопустимая длина URI запроса/Request-URI Too Long' },
  415: { code: 415, message: 'Неподдерживаемый MIME тип/Unsupported Media Type' },
  416: { code: 416, message: 'Диапазон не может быть обработан/Requested Range Not Satisfiable' },
  417: { code: 417, message: 'Сбой при ожидании/Expectation Failed' },
  422: { code: 422, message: 'Необрабатываемый элемент/Unprocessable Entity' },
  423: { code: 423, message: 'Заблокировано/Locked' },
  424: { code: 424, message: 'Неверная зависимость/Failed Dependency' },
  426: { code: 426, message: 'Требуется обновление/Upgrade Required' },
  429: { code: 429, message: 'Слишком много запросов/Too Many Requests' },
  500: { code: 500, message: 'Внутренняя ошибка сервера/Internal Server Error' },
  501: { code: 501, message: 'Метод не поддерживается/Not Implemented' },
  502: { code: 502, message: 'Ошибка шлюза/Bad Gateway' },
  503: { code: 503, message: 'Служба недоступна/Service Unavailable' },
  504: { code: 504, message: 'Время прохождения через межсетевой шлюз истекло/Gateway Timeout' },
  505: { code: 505, message: 'Версия НТТР не поддерживается/Version Not Supported' },
  507: { code: 507, message: 'Недостаточно места/Not Extended' },
  510: { code: 510, message: 'Отсутствуют расширения/Not Extended' }
};
