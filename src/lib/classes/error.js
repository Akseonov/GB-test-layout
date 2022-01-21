/**
 * Базовый класс ошибок
 */
class MyError extends Error {
    constructor( message ) {
        super( message );
        this.name = this.constructor.name;
        this.message = `${ this.name }: ${ this.message }`;
    }
}

/**
 * Класс ошибок ответа API
 */
export class ApiResponseError extends MyError {}

/**
 * Класс ошибок сетевых запросов
 */
export class RequestError extends MyError {
    constructor( statusCode, statusText ) {
        super( `${ statusCode } ${ statusText }` );
        this.statusCode = statusCode;
        this.statusText = statusText;
    }
}

/**
 * Класс ошибок валидации
 */
export class ValidationError extends MyError {}

/**
 * Уточняющий класс ошибок валидации: Некорректный тип
 */
export class TypeValidationError extends ValidationError {
    constructor( expected, got ) {
        super( `Expected value with type "${ expected }", got - "${ got }"` );

        this.expected = expected;
        this.got = got;
    }
}
