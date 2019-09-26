module.exports = {
  rules: {
    // В функциях после запятой всегда должен быть пробел
    "function-comma-space-after": 'always',
    // В функциях перед запятой не должно быть пробела
    "function-comma-space-before": 'never',
    // Запретить значения направления в вызовах `linear-gradient()`, недопустимые по стандартному синтаксису
    "function-linear-gradient-no-nonstandard-direction": true,
    // Названия функций должны быть в нижнем регистре
    "function-name-case": 'lower',
    // олжны быть пробелы в скобках функций
    "function-parentheses-space-inside": 'always',
    // Значение в `url()` дожно быть в кавычках
    "function-url-quotes": 'always',
    // Должны быть пробелы между функциями
    "function-whitespace-after": 'always',
    // Количество пробелов в отступах
    "indentation": 2,
    // Не должно быть `!important` в анимациях
    "keyframe-declaration-no-important": true,
    // Шаблон для названия анимаций, значение - regexp-строка
    "keyframes-name-pattern": '',
    // Запретить единицы измерения для 0
    "length-zero-no-unit": true,
    // Максимальное количество пустых строк между блоками
    "max-empty-lines": 1,
    // Количество символов в строке
    "max-line-length": 100,
    // Запретить дублирование `@import`
    "no-duplicate-at-import-rules": true,
    // Запретить дублирование селекторов
    "no-duplicate-selectors": true,
    // Не должно быть пустой строки в начале файла
    "no-empty-first-line": true,
    // Файл не должен быть пустым
    "no-empty-source": true,
    // Не должно быть пробелов в конце строки
    "no-eol-whitespace": true,
    // Зпретить лишние точки с запятой
    "no-extra-semicolons": true,
    // В конце файла должна быть пустая строка
    "no-missing-end-of-source-newline": true,
    // Никогда не должно быть ведущего нуля в дробных значениях
    "number-leading-zero": 'never',
    // Количество знаков после точки в дробных значениях
    "number-max-precision": 3,
    // Запретить ненужные нули в дробных значениях
    "number-no-trailing-zeros": true,
    // Названия свойств должны быть в нижнем регистре
    "property-case": 'lower',
    // Запретить префиксы
    "property-no-vendor-prefix": true,
    // Перед правилами всегда должна быть пустая строка
    "rule-empty-line-before": [
      'always',
      {
        except: [
          // Отмените основной параметр для вложенных правил и первого дочернего элемента их родительского узла
          'first-nested',
        ],
        ignore: [
          // Игнорировать правила, следующие за комментарием
          'after-comment',
        ],
      },
    ],
    // Запретить неэкранированные переводы строк
    "string-no-newline": true,
    // Вокруг строк должны быть только одинарные ковычки
    "string-quotes": 'single',
    // Минимальное значение для миллисекунд
    "time-min-milliseconds": 20,
    // Единицы измерения должны быть в нижнем регистре
    "unit-case": 'lower',
    // Значения свойств должны быть в нижнем регистре
    "value-keyword-case": 'lower',
    // После запятых всегда должен быть один пробел
    "value-list-comma-space-after": 'always',
    // Никогда не должно быть пробелов перед запятыми
    "value-list-comma-space-before": 'never',
    // Количество пустых строк в списке значений
    "value-list-max-empty-lines": 0,
    // Запретить префиксы значений
    "value-no-vendor-prefix": true,
  }
};
