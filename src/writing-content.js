// Original practice material. Verified source links: 10 October 2026.
export const writingSources = [
  {
    id: "ielts-criteria",
    title: "IELTS: как оценивают Writing",
    url: "https://ielts.org/take-a-test/preparation-resources/writing-test-resources",
    type: "Официальные критерии",
    description:
      "Видео с разбором четырёх критериев, структуры ответа, overview и развития аргументов.",
    checkedAt: "2026-10-10",
  },
  {
    id: "ielts-descriptors",
    title: "Writing Band Descriptors",
    url: "https://ielts.org/cdn/ielts-guides/ielts-writing-band-descriptors.pdf",
    type: "Официальная шкала",
    description:
      "Публичная шкала IELTS, версия May 2023. Самопроверка помогает учиться, но не выдаёт официальный балл.",
    checkedAt: "2026-10-10",
  },
  {
    id: "ielts-samples",
    title: "IELTS Academic: sample tasks",
    url: "https://ielts.org/take-a-test/preparation-resources/sample-test-questions/academic-test",
    type: "Официальные задания",
    description:
      "Бесплатные примеры формата теста. Это образцы, а не прогноз тем ближайшего экзамена.",
    checkedAt: "2026-10-10",
  },
  {
    id: "bc-writing",
    title: "British Council: Writing practice",
    url: "https://takeielts.britishcouncil.org/prepare/ielts-free-practice-mock-tests/academic/writing",
    type: "Официальная практика",
    description:
      "Task 1 и Task 2, примеры ответов с баллами и комментариями экзаменаторов.",
    checkedAt: "2026-10-10",
  },
  {
    id: "idp-topics",
    title: "IDP: распространённые темы Task 2",
    url: "https://ielts.idp.com/prepare/article-common-topics-for-ielts-writing-task-2",
    type: "Официальные рекомендации",
    description:
      "Образование, технологии, здоровье, окружающая среда и общество. IDP подчёркивает: конкретные вопросы предсказать нельзя.",
    checkedAt: "2026-10-10",
  },
  {
    id: "cambridge21",
    title: "Cambridge IELTS 21 · 2026",
    url: "https://shop.cambridge.org/english/product/2700255600",
    type: "Официальный платный сборник",
    description:
      "Четыре аутентичных экзаменационных варианта и Writing samples. Издан 16 июля 2026; доступ к полному банку приобретается отдельно.",
    checkedAt: "2026-10-10",
  },
];

export const writingTasks = [
  {
    id: "school-life",
    task: 2,
    type: "opinion",
    title: "Школа и самостоятельная жизнь",
    topic: "Education",
    prompt:
      "Schools should give practical life skills, such as managing money and resolving disagreements, the same importance as academic subjects. To what extent do you agree or disagree?",
    minutes: 40,
    minWords: 250,
    label: "Авторская практика",
    sourceStatus: "original",
    constraints: [
      {
        text: "the same importance",
        kind: "scope",
        why: "Речь о равной важности, а не о полном отказе от академических предметов.",
      },
      {
        text: "To what extent do you agree or disagree?",
        kind: "instruction",
        why: "Это действие, которое должен выполнить ответ. Проверь каждую часть, прежде чем писать.",
      },
    ],
    annotations: [
      {
        text: "the same importance",
        kind: "scope",
        why: "Речь о равной важности, а не о полном отказе от академических предметов.",
      },
      {
        text: "To what extent do you agree or disagree?",
        kind: "instruction",
        why: "Это действие, которое должен выполнить ответ. Проверь каждую часть, прежде чем писать.",
      },
    ],
    plan: [
      {
        label: "Позиция",
        help: "Ответь на степень согласия. Можно согласиться частично, но чётко объясни границы.",
      },
      {
        label: "Аргумент 1",
        help: "Одна релевантная причина → механизм → короткий конкретный пример.",
      },
      {
        label: "Аргумент 2",
        help: "Вторая причина либо обоснованное ограничение первой. Свяжи с твоей позицией.",
      },
      {
        label: "Вывод",
        help: "Повтори итог решения вопроса; не вводи новую идею.",
      },
    ],
    ideaSeeds:
      "Финансовые решения после школы; время в учебном плане; навыки можно встроить в существующие предметы.",
    pitfalls: [
      "Речь о равной важности, а не о полном отказе от академических предметов.",
      "Не выдумывай статистику или исследования. Достаточно понятного релевантного примера.",
    ],
    selfReview: [
      {
        criterion: "Task Response",
        items: [
          "Все части вопроса получили ответ?",
          "Позиция и вывод согласованы?",
          "Речь о равной важности, а не о полном отказе от академических предметов.",
        ],
      },
      {
        criterion: "Coherence & Cohesion",
        items: [
          "У каждого абзаца одна центральная мысль?",
          "Объяснено, как пример поддерживает аргумент?",
        ],
      },
      {
        criterion: "Lexical Resource",
        items: [
          "Слова точны для этого контекста?",
          "Перефразирование не изменило смысл вопроса?",
        ],
      },
      {
        criterion: "Grammar",
        items: [
          "Проверены согласование подлежащего и глагола, артикли и границы предложений?",
          "Сложные конструкции помогают выразить связь, а не только удлиняют текст?",
        ],
      },
    ],
    sources: ["ielts-criteria", "ielts-descriptors", "idp-topics"],
  },
  {
    id: "ai-homework",
    task: 2,
    type: "opinion",
    title: "AI в домашних заданиях",
    topic: "Technology",
    prompt:
      "Students should be allowed to use artificial intelligence tools for homework, provided that they explain how they used them. To what extent do you agree or disagree?",
    minutes: 40,
    minWords: 250,
    label: "Авторская практика",
    sourceStatus: "original",
    constraints: [
      {
        text: "provided that they explain",
        kind: "scope",
        why: "Условие прозрачности — часть утверждения. Не отвечай только про запрет AI вообще.",
      },
      {
        text: "To what extent do you agree or disagree?",
        kind: "instruction",
        why: "Это действие, которое должен выполнить ответ. Проверь каждую часть, прежде чем писать.",
      },
    ],
    annotations: [
      {
        text: "provided that they explain",
        kind: "scope",
        why: "Условие прозрачности — часть утверждения. Не отвечай только про запрет AI вообще.",
      },
      {
        text: "To what extent do you agree or disagree?",
        kind: "instruction",
        why: "Это действие, которое должен выполнить ответ. Проверь каждую часть, прежде чем писать.",
      },
    ],
    plan: [
      {
        label: "Позиция",
        help: "Ответь на степень согласия. Можно согласиться частично, но чётко объясни границы.",
      },
      {
        label: "Аргумент 1",
        help: "Одна релевантная причина → механизм → короткий конкретный пример.",
      },
      {
        label: "Аргумент 2",
        help: "Вторая причина либо обоснованное ограничение первой. Свяжи с твоей позицией.",
      },
      {
        label: "Вывод",
        help: "Повтори итог решения вопроса; не вводи новую идею.",
      },
    ],
    ideaSeeds:
      "Обратная связь и доступность; самостоятельное мышление; раскрытие использования и проверка источников.",
    pitfalls: [
      "Условие прозрачности — часть утверждения. Не отвечай только про запрет AI вообще.",
      "Не выдумывай статистику или исследования. Достаточно понятного релевантного примера.",
    ],
    selfReview: [
      {
        criterion: "Task Response",
        items: [
          "Все части вопроса получили ответ?",
          "Позиция и вывод согласованы?",
          "Условие прозрачности — часть утверждения. Не отвечай только про запрет AI вообще.",
        ],
      },
      {
        criterion: "Coherence & Cohesion",
        items: [
          "У каждого абзаца одна центральная мысль?",
          "Объяснено, как пример поддерживает аргумент?",
        ],
      },
      {
        criterion: "Lexical Resource",
        items: [
          "Слова точны для этого контекста?",
          "Перефразирование не изменило смысл вопроса?",
        ],
      },
      {
        criterion: "Grammar",
        items: [
          "Проверены согласование подлежащего и глагола, артикли и границы предложений?",
          "Сложные конструкции помогают выразить связь, а не только удлиняют текст?",
        ],
      },
    ],
    sources: ["ielts-criteria", "ielts-descriptors", "idp-topics"],
  },
  {
    id: "healthy-streets",
    task: 2,
    type: "opinion",
    title: "Город для здоровья",
    topic: "Health",
    prompt:
      "Improving public spaces is a more effective way to encourage healthy lifestyles than running public information campaigns. To what extent do you agree or disagree?",
    minutes: 40,
    minWords: 250,
    label: "Авторская практика",
    sourceStatus: "original",
    constraints: [
      {
        text: "more effective",
        kind: "scope",
        why: "Нужно сравнить две меры, а не просто перечислить пользу парков.",
      },
      {
        text: "To what extent do you agree or disagree?",
        kind: "instruction",
        why: "Это действие, которое должен выполнить ответ. Проверь каждую часть, прежде чем писать.",
      },
    ],
    annotations: [
      {
        text: "more effective",
        kind: "scope",
        why: "Нужно сравнить две меры, а не просто перечислить пользу парков.",
      },
      {
        text: "To what extent do you agree or disagree?",
        kind: "instruction",
        why: "Это действие, которое должен выполнить ответ. Проверь каждую часть, прежде чем писать.",
      },
    ],
    plan: [
      {
        label: "Позиция",
        help: "Ответь на степень согласия. Можно согласиться частично, но чётко объясни границы.",
      },
      {
        label: "Аргумент 1",
        help: "Одна релевантная причина → механизм → короткий конкретный пример.",
      },
      {
        label: "Аргумент 2",
        help: "Вторая причина либо обоснованное ограничение первой. Свяжи с твоей позицией.",
      },
      {
        label: "Вывод",
        help: "Повтори итог решения вопроса; не вводи новую идею.",
      },
    ],
    ideaSeeds:
      "Безопасные маршруты снимают барьеры; кампании дают знания; инфраструктура не решает все личные ограничения.",
    pitfalls: [
      "Нужно сравнить две меры, а не просто перечислить пользу парков.",
      "Не выдумывай статистику или исследования. Достаточно понятного релевантного примера.",
    ],
    selfReview: [
      {
        criterion: "Task Response",
        items: [
          "Все части вопроса получили ответ?",
          "Позиция и вывод согласованы?",
          "Нужно сравнить две меры, а не просто перечислить пользу парков.",
        ],
      },
      {
        criterion: "Coherence & Cohesion",
        items: [
          "У каждого абзаца одна центральная мысль?",
          "Объяснено, как пример поддерживает аргумент?",
        ],
      },
      {
        criterion: "Lexical Resource",
        items: [
          "Слова точны для этого контекста?",
          "Перефразирование не изменило смысл вопроса?",
        ],
      },
      {
        criterion: "Grammar",
        items: [
          "Проверены согласование подлежащего и глагола, артикли и границы предложений?",
          "Сложные конструкции помогают выразить связь, а не только удлиняют текст?",
        ],
      },
    ],
    sources: ["ielts-criteria", "ielts-descriptors", "idp-topics"],
  },
  {
    id: "repair-right",
    task: 2,
    type: "opinion",
    title: "Ремонт вместо замены",
    topic: "Environment",
    prompt:
      "Manufacturers should be required to make household products easy to repair, even if this increases their purchase price. To what extent do you agree or disagree?",
    minutes: 40,
    minWords: 250,
    label: "Авторская практика",
    sourceStatus: "original",
    constraints: [
      {
        text: "even if this increases their purchase price",
        kind: "scope",
        why: "Стоимость — явный компромисс, который необходимо рассмотреть.",
      },
      {
        text: "To what extent do you agree or disagree?",
        kind: "instruction",
        why: "Это действие, которое должен выполнить ответ. Проверь каждую часть, прежде чем писать.",
      },
    ],
    annotations: [
      {
        text: "even if this increases their purchase price",
        kind: "scope",
        why: "Стоимость — явный компромисс, который необходимо рассмотреть.",
      },
      {
        text: "To what extent do you agree or disagree?",
        kind: "instruction",
        why: "Это действие, которое должен выполнить ответ. Проверь каждую часть, прежде чем писать.",
      },
    ],
    plan: [
      {
        label: "Позиция",
        help: "Ответь на степень согласия. Можно согласиться частично, но чётко объясни границы.",
      },
      {
        label: "Аргумент 1",
        help: "Одна релевантная причина → механизм → короткий конкретный пример.",
      },
      {
        label: "Аргумент 2",
        help: "Вторая причина либо обоснованное ограничение первой. Свяжи с твоей позицией.",
      },
      {
        label: "Вывод",
        help: "Повтори итог решения вопроса; не вводи новую идею.",
      },
    ],
    ideaSeeds:
      "Срок службы и отходы; первоначальная доступность; суммарная стоимость владения.",
    pitfalls: [
      "Стоимость — явный компромисс, который необходимо рассмотреть.",
      "Не выдумывай статистику или исследования. Достаточно понятного релевантного примера.",
    ],
    selfReview: [
      {
        criterion: "Task Response",
        items: [
          "Все части вопроса получили ответ?",
          "Позиция и вывод согласованы?",
          "Стоимость — явный компромисс, который необходимо рассмотреть.",
        ],
      },
      {
        criterion: "Coherence & Cohesion",
        items: [
          "У каждого абзаца одна центральная мысль?",
          "Объяснено, как пример поддерживает аргумент?",
        ],
      },
      {
        criterion: "Lexical Resource",
        items: [
          "Слова точны для этого контекста?",
          "Перефразирование не изменило смысл вопроса?",
        ],
      },
      {
        criterion: "Grammar",
        items: [
          "Проверены согласование подлежащего и глагола, артикли и границы предложений?",
          "Сложные конструкции помогают выразить связь, а не только удлиняют текст?",
        ],
      },
    ],
    sources: ["ielts-criteria", "ielts-descriptors", "idp-topics"],
  },
  {
    id: "university-route",
    task: 2,
    type: "discussion",
    title: "Университет или профессиональный путь",
    topic: "Education",
    prompt:
      "Some people think universities should prepare students for specific careers, while others believe their main role is to develop broad intellectual skills. Discuss both views and give your own opinion.",
    minutes: 40,
    minWords: 250,
    label: "Авторская практика",
    sourceStatus: "original",
    constraints: [
      {
        text: "Discuss both views and give your own opinion",
        kind: "scope",
        why: "Нужны обе позиции и твоя собственная, а не только любимая сторона.",
      },
      {
        text: "Discuss both views and give your own opinion.",
        kind: "instruction",
        why: "Это действие, которое должен выполнить ответ. Проверь каждую часть, прежде чем писать.",
      },
    ],
    annotations: [
      {
        text: "Discuss both views and give your own opinion",
        kind: "scope",
        why: "Нужны обе позиции и твоя собственная, а не только любимая сторона.",
      },
      {
        text: "Discuss both views and give your own opinion.",
        kind: "instruction",
        why: "Это действие, которое должен выполнить ответ. Проверь каждую часть, прежде чем писать.",
      },
    ],
    plan: [
      {
        label: "Позиция",
        help: "Назови обе стороны и свою позицию; сформулируй, что сравниваешь.",
      },
      {
        label: "Первая сторона",
        help: "Объясни, почему разумный человек поддерживает первый взгляд; не делай карикатуру.",
      },
      {
        label: "Вторая сторона",
        help: "Развей второй взгляд и покажи, как он соотносится с твоей позицией.",
      },
      {
        label: "Вывод",
        help: "Итог обеих позиций и твоё решение. Это рабочая структура, не обязательный шаблон IELTS.",
      },
    ],
    ideaSeeds:
      "Подготовка к регулируемым профессиям; адаптация при смене работы; сочетание практики и аналитического мышления.",
    pitfalls: [
      "Нужны обе позиции и твоя собственная, а не только любимая сторона.",
      "Не выдумывай статистику или исследования. Достаточно понятного релевантного примера.",
    ],
    selfReview: [
      {
        criterion: "Task Response",
        items: [
          "Все части вопроса получили ответ?",
          "Позиция и вывод согласованы?",
          "Нужны обе позиции и твоя собственная, а не только любимая сторона.",
        ],
      },
      {
        criterion: "Coherence & Cohesion",
        items: [
          "У каждого абзаца одна центральная мысль?",
          "Объяснено, как пример поддерживает аргумент?",
        ],
      },
      {
        criterion: "Lexical Resource",
        items: [
          "Слова точны для этого контекста?",
          "Перефразирование не изменило смысл вопроса?",
        ],
      },
      {
        criterion: "Grammar",
        items: [
          "Проверены согласование подлежащего и глагола, артикли и границы предложений?",
          "Сложные конструкции помогают выразить связь, а не только удлиняют текст?",
        ],
      },
    ],
    sources: ["ielts-criteria", "ielts-descriptors", "idp-topics"],
  },
  {
    id: "arts-budget",
    task: 2,
    type: "discussion",
    title: "Бюджет города и культура",
    topic: "Government",
    prompt:
      "Some people believe local governments should spend more on public art, while others prefer this money to be spent on basic services. Discuss both views and give your own opinion.",
    minutes: 40,
    minWords: 250,
    label: "Авторская практика",
    sourceStatus: "original",
    constraints: [
      {
        text: "local governments",
        kind: "scope",
        why: "Масштаб вопроса — муниципальный бюджет, а не всё государственное финансирование.",
      },
      {
        text: "Discuss both views and give your own opinion.",
        kind: "instruction",
        why: "Это действие, которое должен выполнить ответ. Проверь каждую часть, прежде чем писать.",
      },
    ],
    annotations: [
      {
        text: "local governments",
        kind: "scope",
        why: "Масштаб вопроса — муниципальный бюджет, а не всё государственное финансирование.",
      },
      {
        text: "Discuss both views and give your own opinion.",
        kind: "instruction",
        why: "Это действие, которое должен выполнить ответ. Проверь каждую часть, прежде чем писать.",
      },
    ],
    plan: [
      {
        label: "Позиция",
        help: "Назови обе стороны и свою позицию; сформулируй, что сравниваешь.",
      },
      {
        label: "Первая сторона",
        help: "Объясни, почему разумный человек поддерживает первый взгляд; не делай карикатуру.",
      },
      {
        label: "Вторая сторона",
        help: "Развей второй взгляд и покажи, как он соотносится с твоей позицией.",
      },
      {
        label: "Вывод",
        help: "Итог обеих позиций и твоё решение. Это рабочая структура, не обязательный шаблон IELTS.",
      },
    ],
    ideaSeeds:
      "Доступ к культуре и общим пространствам; транспорт и обслуживание; приоритеты при ограниченном бюджете.",
    pitfalls: [
      "Масштаб вопроса — муниципальный бюджет, а не всё государственное финансирование.",
      "Не выдумывай статистику или исследования. Достаточно понятного релевантного примера.",
    ],
    selfReview: [
      {
        criterion: "Task Response",
        items: [
          "Все части вопроса получили ответ?",
          "Позиция и вывод согласованы?",
          "Масштаб вопроса — муниципальный бюджет, а не всё государственное финансирование.",
        ],
      },
      {
        criterion: "Coherence & Cohesion",
        items: [
          "У каждого абзаца одна центральная мысль?",
          "Объяснено, как пример поддерживает аргумент?",
        ],
      },
      {
        criterion: "Lexical Resource",
        items: [
          "Слова точны для этого контекста?",
          "Перефразирование не изменило смысл вопроса?",
        ],
      },
      {
        criterion: "Grammar",
        items: [
          "Проверены согласование подлежащего и глагола, артикли и границы предложений?",
          "Сложные конструкции помогают выразить связь, а не только удлиняют текст?",
        ],
      },
    ],
    sources: ["ielts-criteria", "ielts-descriptors", "idp-topics"],
  },
  {
    id: "remote-team",
    task: 2,
    type: "discussion",
    title: "Команда из дома или офиса",
    topic: "Work",
    prompt:
      "Some employers believe staff work best when everyone is in the office, while others favour letting employees choose where to work. Discuss both views and give your own opinion.",
    minutes: 40,
    minWords: 250,
    label: "Авторская практика",
    sourceStatus: "original",
    constraints: [
      {
        text: "letting employees choose",
        kind: "scope",
        why: "Вторая позиция — право выбора, а не обязательная удалёнка для всех.",
      },
      {
        text: "Discuss both views and give your own opinion.",
        kind: "instruction",
        why: "Это действие, которое должен выполнить ответ. Проверь каждую часть, прежде чем писать.",
      },
    ],
    annotations: [
      {
        text: "letting employees choose",
        kind: "scope",
        why: "Вторая позиция — право выбора, а не обязательная удалёнка для всех.",
      },
      {
        text: "Discuss both views and give your own opinion.",
        kind: "instruction",
        why: "Это действие, которое должен выполнить ответ. Проверь каждую часть, прежде чем писать.",
      },
    ],
    plan: [
      {
        label: "Позиция",
        help: "Назови обе стороны и свою позицию; сформулируй, что сравниваешь.",
      },
      {
        label: "Первая сторона",
        help: "Объясни, почему разумный человек поддерживает первый взгляд; не делай карикатуру.",
      },
      {
        label: "Вторая сторона",
        help: "Развей второй взгляд и покажи, как он соотносится с твоей позицией.",
      },
      {
        label: "Вывод",
        help: "Итог обеих позиций и твоё решение. Это рабочая структура, не обязательный шаблон IELTS.",
      },
    ],
    ideaSeeds:
      "Обучение новичков и координация; фокус и дорога; различия между задачами.",
    pitfalls: [
      "Вторая позиция — право выбора, а не обязательная удалёнка для всех.",
      "Не выдумывай статистику или исследования. Достаточно понятного релевантного примера.",
    ],
    selfReview: [
      {
        criterion: "Task Response",
        items: [
          "Все части вопроса получили ответ?",
          "Позиция и вывод согласованы?",
          "Вторая позиция — право выбора, а не обязательная удалёнка для всех.",
        ],
      },
      {
        criterion: "Coherence & Cohesion",
        items: [
          "У каждого абзаца одна центральная мысль?",
          "Объяснено, как пример поддерживает аргумент?",
        ],
      },
      {
        criterion: "Lexical Resource",
        items: [
          "Слова точны для этого контекста?",
          "Перефразирование не изменило смысл вопроса?",
        ],
      },
      {
        criterion: "Grammar",
        items: [
          "Проверены согласование подлежащего и глагола, артикли и границы предложений?",
          "Сложные конструкции помогают выразить связь, а не только удлиняют текст?",
        ],
      },
    ],
    sources: ["ielts-criteria", "ielts-descriptors", "idp-topics"],
  },
  {
    id: "tourism-heritage",
    task: 2,
    type: "discussion",
    title: "Туристы и исторические места",
    topic: "Culture",
    prompt:
      "Some people think historic sites should welcome as many visitors as possible, while others favour strict limits on visitor numbers. Discuss both views and give your own opinion.",
    minutes: 40,
    minWords: 250,
    label: "Авторская практика",
    sourceStatus: "original",
    constraints: [
      {
        text: "strict limits on visitor numbers",
        kind: "scope",
        why: "Обе позиции о доступе посетителей; не уходи в общий спор о туризме.",
      },
      {
        text: "Discuss both views and give your own opinion.",
        kind: "instruction",
        why: "Это действие, которое должен выполнить ответ. Проверь каждую часть, прежде чем писать.",
      },
    ],
    annotations: [
      {
        text: "strict limits on visitor numbers",
        kind: "scope",
        why: "Обе позиции о доступе посетителей; не уходи в общий спор о туризме.",
      },
      {
        text: "Discuss both views and give your own opinion.",
        kind: "instruction",
        why: "Это действие, которое должен выполнить ответ. Проверь каждую часть, прежде чем писать.",
      },
    ],
    plan: [
      {
        label: "Позиция",
        help: "Назови обе стороны и свою позицию; сформулируй, что сравниваешь.",
      },
      {
        label: "Первая сторона",
        help: "Объясни, почему разумный человек поддерживает первый взгляд; не делай карикатуру.",
      },
      {
        label: "Вторая сторона",
        help: "Развей второй взгляд и покажи, как он соотносится с твоей позицией.",
      },
      {
        label: "Вывод",
        help: "Итог обеих позиций и твоё решение. Это рабочая структура, не обязательный шаблон IELTS.",
      },
    ],
    ideaSeeds:
      "Доход и доступность; износ и толпы; бронирование и дифференцированные ограничения.",
    pitfalls: [
      "Обе позиции о доступе посетителей; не уходи в общий спор о туризме.",
      "Не выдумывай статистику или исследования. Достаточно понятного релевантного примера.",
    ],
    selfReview: [
      {
        criterion: "Task Response",
        items: [
          "Все части вопроса получили ответ?",
          "Позиция и вывод согласованы?",
          "Обе позиции о доступе посетителей; не уходи в общий спор о туризме.",
        ],
      },
      {
        criterion: "Coherence & Cohesion",
        items: [
          "У каждого абзаца одна центральная мысль?",
          "Объяснено, как пример поддерживает аргумент?",
        ],
      },
      {
        criterion: "Lexical Resource",
        items: [
          "Слова точны для этого контекста?",
          "Перефразирование не изменило смысл вопроса?",
        ],
      },
      {
        criterion: "Grammar",
        items: [
          "Проверены согласование подлежащего и глагола, артикли и границы предложений?",
          "Сложные конструкции помогают выразить связь, а не только удлиняют текст?",
        ],
      },
    ],
    sources: ["ielts-criteria", "ielts-descriptors", "idp-topics"],
  },
  {
    id: "subscription-life",
    task: 2,
    type: "advantages",
    title: "Жизнь по подписке",
    topic: "Consumer society",
    prompt:
      "More people now pay monthly subscriptions for products and services instead of owning them. What are the advantages and disadvantages of this trend?",
    minutes: 40,
    minWords: 250,
    label: "Авторская практика",
    sourceStatus: "original",
    constraints: [
      {
        text: "advantages and disadvantages",
        kind: "scope",
        why: "Покрой преимущества и недостатки. Сравнительный итог outweigh здесь не обязателен.",
      },
      {
        text: "What are the advantages and disadvantages of this trend?",
        kind: "instruction",
        why: "Это действие, которое должен выполнить ответ. Проверь каждую часть, прежде чем писать.",
      },
    ],
    annotations: [
      {
        text: "advantages and disadvantages",
        kind: "scope",
        why: "Покрой преимущества и недостатки. Сравнительный итог outweigh здесь не обязателен.",
      },
      {
        text: "What are the advantages and disadvantages of this trend?",
        kind: "instruction",
        why: "Это действие, которое должен выполнить ответ. Проверь каждую часть, прежде чем писать.",
      },
    ],
    plan: [
      {
        label: "Введение",
        help: "Перефразируй конкретную тенденцию, не расширяя её.",
      },
      {
        label: "Преимущества",
        help: "Выбери 1–2 эффекта и объясни, для кого они возникают.",
      },
      {
        label: "Недостатки",
        help: "Развей 1–2 обратных эффекта с примером или условием.",
      },
      {
        label: "Вывод",
        help: "Кратко подведи итог плюсов и минусов; не объявляй победителя без необходимости.",
      },
    ],
    ideaSeeds:
      "Низкий входной платёж; постоянные расходы; доступ прекращается после отмены.",
    pitfalls: [
      "Покрой преимущества и недостатки. Сравнительный итог outweigh здесь не обязателен.",
      "Не выдумывай статистику или исследования. Достаточно понятного релевантного примера.",
    ],
    selfReview: [
      {
        criterion: "Task Response",
        items: [
          "Все части вопроса получили ответ?",
          "Позиция и вывод согласованы?",
          "Покрой преимущества и недостатки. Сравнительный итог outweigh здесь не обязателен.",
        ],
      },
      {
        criterion: "Coherence & Cohesion",
        items: [
          "У каждого абзаца одна центральная мысль?",
          "Объяснено, как пример поддерживает аргумент?",
        ],
      },
      {
        criterion: "Lexical Resource",
        items: [
          "Слова точны для этого контекста?",
          "Перефразирование не изменило смысл вопроса?",
        ],
      },
      {
        criterion: "Grammar",
        items: [
          "Проверены согласование подлежащего и глагола, артикли и границы предложений?",
          "Сложные конструкции помогают выразить связь, а не только удлиняют текст?",
        ],
      },
    ],
    sources: ["ielts-criteria", "ielts-descriptors", "idp-topics"],
  },
  {
    id: "shared-living",
    task: 2,
    type: "advantages",
    title: "Совместное жильё взрослых",
    topic: "Housing",
    prompt:
      "In many cities, adults share rented accommodation with people who are not members of their family. What are the advantages and disadvantages of this arrangement?",
    minutes: 40,
    minWords: 250,
    label: "Авторская практика",
    sourceStatus: "original",
    constraints: [
      {
        text: "people who are not members of their family",
        kind: "scope",
        why: "Это совместная аренда с другими взрослыми, а не проживание с родителями.",
      },
      {
        text: "What are the advantages and disadvantages of this arrangement?",
        kind: "instruction",
        why: "Это действие, которое должен выполнить ответ. Проверь каждую часть, прежде чем писать.",
      },
    ],
    annotations: [
      {
        text: "people who are not members of their family",
        kind: "scope",
        why: "Это совместная аренда с другими взрослыми, а не проживание с родителями.",
      },
      {
        text: "What are the advantages and disadvantages of this arrangement?",
        kind: "instruction",
        why: "Это действие, которое должен выполнить ответ. Проверь каждую часть, прежде чем писать.",
      },
    ],
    plan: [
      {
        label: "Введение",
        help: "Перефразируй конкретную тенденцию, не расширяя её.",
      },
      {
        label: "Преимущества",
        help: "Выбери 1–2 эффекта и объясни, для кого они возникают.",
      },
      {
        label: "Недостатки",
        help: "Развей 1–2 обратных эффекта с примером или условием.",
      },
      {
        label: "Вывод",
        help: "Кратко подведи итог плюсов и минусов; не объявляй победителя без необходимости.",
      },
    ],
    ideaSeeds:
      "Распределение расходов; взаимная помощь; приватность и бытовые конфликты.",
    pitfalls: [
      "Это совместная аренда с другими взрослыми, а не проживание с родителями.",
      "Не выдумывай статистику или исследования. Достаточно понятного релевантного примера.",
    ],
    selfReview: [
      {
        criterion: "Task Response",
        items: [
          "Все части вопроса получили ответ?",
          "Позиция и вывод согласованы?",
          "Это совместная аренда с другими взрослыми, а не проживание с родителями.",
        ],
      },
      {
        criterion: "Coherence & Cohesion",
        items: [
          "У каждого абзаца одна центральная мысль?",
          "Объяснено, как пример поддерживает аргумент?",
        ],
      },
      {
        criterion: "Lexical Resource",
        items: [
          "Слова точны для этого контекста?",
          "Перефразирование не изменило смысл вопроса?",
        ],
      },
      {
        criterion: "Grammar",
        items: [
          "Проверены согласование подлежащего и глагола, артикли и границы предложений?",
          "Сложные конструкции помогают выразить связь, а не только удлиняют текст?",
        ],
      },
    ],
    sources: ["ielts-criteria", "ielts-descriptors", "idp-topics"],
  },
  {
    id: "cashless-city",
    task: 2,
    type: "advantages",
    title: "Город без наличных",
    topic: "Technology",
    prompt:
      "An increasing number of businesses accept only electronic payments. What are the advantages and disadvantages of this development?",
    minutes: 40,
    minWords: 250,
    label: "Авторская практика",
    sourceStatus: "original",
    constraints: [
      {
        text: "only electronic payments",
        kind: "scope",
        why: "Важно слово only: рассматривай исключение наличных, а не просто популярность карт.",
      },
      {
        text: "What are the advantages and disadvantages of this development?",
        kind: "instruction",
        why: "Это действие, которое должен выполнить ответ. Проверь каждую часть, прежде чем писать.",
      },
    ],
    annotations: [
      {
        text: "only electronic payments",
        kind: "scope",
        why: "Важно слово only: рассматривай исключение наличных, а не просто популярность карт.",
      },
      {
        text: "What are the advantages and disadvantages of this development?",
        kind: "instruction",
        why: "Это действие, которое должен выполнить ответ. Проверь каждую часть, прежде чем писать.",
      },
    ],
    plan: [
      {
        label: "Введение",
        help: "Перефразируй конкретную тенденцию, не расширяя её.",
      },
      {
        label: "Преимущества",
        help: "Выбери 1–2 эффекта и объясни, для кого они возникают.",
      },
      {
        label: "Недостатки",
        help: "Развей 1–2 обратных эффекта с примером или условием.",
      },
      {
        label: "Вывод",
        help: "Кратко подведи итог плюсов и минусов; не объявляй победителя без необходимости.",
      },
    ],
    ideaSeeds: "Удобство и учёт; сбои; доступ людей без банковского счёта.",
    pitfalls: [
      "Важно слово only: рассматривай исключение наличных, а не просто популярность карт.",
      "Не выдумывай статистику или исследования. Достаточно понятного релевантного примера.",
    ],
    selfReview: [
      {
        criterion: "Task Response",
        items: [
          "Все части вопроса получили ответ?",
          "Позиция и вывод согласованы?",
          "Важно слово only: рассматривай исключение наличных, а не просто популярность карт.",
        ],
      },
      {
        criterion: "Coherence & Cohesion",
        items: [
          "У каждого абзаца одна центральная мысль?",
          "Объяснено, как пример поддерживает аргумент?",
        ],
      },
      {
        criterion: "Lexical Resource",
        items: [
          "Слова точны для этого контекста?",
          "Перефразирование не изменило смысл вопроса?",
        ],
      },
      {
        criterion: "Grammar",
        items: [
          "Проверены согласование подлежащего и глагола, артикли и границы предложений?",
          "Сложные конструкции помогают выразить связь, а не только удлиняют текст?",
        ],
      },
    ],
    sources: ["ielts-criteria", "ielts-descriptors", "idp-topics"],
  },
  {
    id: "gap-year",
    task: 2,
    type: "advantages",
    title: "Год между школой и вузом",
    topic: "Education",
    prompt:
      "Some school leavers spend a year working or travelling before starting university. What are the advantages and disadvantages of taking such a year?",
    minutes: 40,
    minWords: 250,
    label: "Авторская практика",
    sourceStatus: "original",
    constraints: [
      {
        text: "working or travelling",
        kind: "scope",
        why: "Год может быть и работой, и путешествием. Не предполагай, что все отдыхают или богаты.",
      },
      {
        text: "What are the advantages and disadvantages of taking such a year?",
        kind: "instruction",
        why: "Это действие, которое должен выполнить ответ. Проверь каждую часть, прежде чем писать.",
      },
    ],
    annotations: [
      {
        text: "working or travelling",
        kind: "scope",
        why: "Год может быть и работой, и путешествием. Не предполагай, что все отдыхают или богаты.",
      },
      {
        text: "What are the advantages and disadvantages of taking such a year?",
        kind: "instruction",
        why: "Это действие, которое должен выполнить ответ. Проверь каждую часть, прежде чем писать.",
      },
    ],
    plan: [
      {
        label: "Введение",
        help: "Перефразируй конкретную тенденцию, не расширяя её.",
      },
      {
        label: "Преимущества",
        help: "Выбери 1–2 эффекта и объясни, для кого они возникают.",
      },
      {
        label: "Недостатки",
        help: "Развей 1–2 обратных эффекта с примером или условием.",
      },
      {
        label: "Вывод",
        help: "Кратко подведи итог плюсов и минусов; не объявляй победителя без необходимости.",
      },
    ],
    ideaSeeds:
      "Зрелость и опыт; расходы; возвращение к учёбе и отложенный доход.",
    pitfalls: [
      "Год может быть и работой, и путешествием. Не предполагай, что все отдыхают или богаты.",
      "Не выдумывай статистику или исследования. Достаточно понятного релевантного примера.",
    ],
    selfReview: [
      {
        criterion: "Task Response",
        items: [
          "Все части вопроса получили ответ?",
          "Позиция и вывод согласованы?",
          "Год может быть и работой, и путешествием. Не предполагай, что все отдыхают или богаты.",
        ],
      },
      {
        criterion: "Coherence & Cohesion",
        items: [
          "У каждого абзаца одна центральная мысль?",
          "Объяснено, как пример поддерживает аргумент?",
        ],
      },
      {
        criterion: "Lexical Resource",
        items: [
          "Слова точны для этого контекста?",
          "Перефразирование не изменило смысл вопроса?",
        ],
      },
      {
        criterion: "Grammar",
        items: [
          "Проверены согласование подлежащего и глагола, артикли и границы предложений?",
          "Сложные конструкции помогают выразить связь, а не только удлиняют текст?",
        ],
      },
    ],
    sources: ["ielts-criteria", "ielts-descriptors", "idp-topics"],
  },
  {
    id: "automation-service",
    task: 2,
    type: "outweigh",
    title: "Автоматизация обслуживания",
    topic: "Work",
    prompt:
      "Self-service machines are replacing staff in shops and transport facilities. Do the advantages of this change outweigh the disadvantages?",
    minutes: 40,
    minWords: 250,
    label: "Авторская практика",
    sourceStatus: "original",
    constraints: [
      {
        text: "outweigh the disadvantages",
        kind: "scope",
        why: "Нужно вынести сравнительный вердикт: какая сторона сильнее и почему.",
      },
      {
        text: "Do the advantages of this change outweigh the disadvantages?",
        kind: "instruction",
        why: "Это действие, которое должен выполнить ответ. Проверь каждую часть, прежде чем писать.",
      },
    ],
    annotations: [
      {
        text: "outweigh the disadvantages",
        kind: "scope",
        why: "Нужно вынести сравнительный вердикт: какая сторона сильнее и почему.",
      },
      {
        text: "Do the advantages of this change outweigh the disadvantages?",
        kind: "instruction",
        why: "Это действие, которое должен выполнить ответ. Проверь каждую часть, прежде чем писать.",
      },
    ],
    plan: [
      {
        label: "Вердикт",
        help: "Скажи, какая сторона перевешивает. Определи основание сравнения.",
      },
      {
        label: "Слабее",
        help: "Признай релевантную противоположную сторону и её ограничения.",
      },
      {
        label: "Сильнее",
        help: "Покажи, почему важность, масштаб или длительность этого эффекта больше.",
      },
      {
        label: "Вывод",
        help: "Сравнительный итог, согласующийся с аргументами.",
      },
    ],
    ideaSeeds:
      "Скорость стандартных операций; потеря помощи; доступность и поддержка при ошибках.",
    pitfalls: [
      "Нужно вынести сравнительный вердикт: какая сторона сильнее и почему.",
      "Не выдумывай статистику или исследования. Достаточно понятного релевантного примера.",
    ],
    selfReview: [
      {
        criterion: "Task Response",
        items: [
          "Все части вопроса получили ответ?",
          "Позиция и вывод согласованы?",
          "Нужно вынести сравнительный вердикт: какая сторона сильнее и почему.",
        ],
      },
      {
        criterion: "Coherence & Cohesion",
        items: [
          "У каждого абзаца одна центральная мысль?",
          "Объяснено, как пример поддерживает аргумент?",
        ],
      },
      {
        criterion: "Lexical Resource",
        items: [
          "Слова точны для этого контекста?",
          "Перефразирование не изменило смысл вопроса?",
        ],
      },
      {
        criterion: "Grammar",
        items: [
          "Проверены согласование подлежащего и глагола, артикли и границы предложений?",
          "Сложные конструкции помогают выразить связь, а не только удлиняют текст?",
        ],
      },
    ],
    sources: ["ielts-criteria", "ielts-descriptors", "idp-topics"],
  },
  {
    id: "city-densify",
    task: 2,
    type: "outweigh",
    title: "Больше домов в существующем городе",
    topic: "Housing",
    prompt:
      "Many cities are building more homes in established neighbourhoods instead of expanding outwards. Do the benefits of this approach outweigh the drawbacks?",
    minutes: 40,
    minWords: 250,
    label: "Авторская практика",
    sourceStatus: "original",
    constraints: [
      {
        text: "instead of expanding outwards",
        kind: "scope",
        why: "Сравнение плотной застройки с расширением важно для вывода.",
      },
      {
        text: "Do the benefits of this approach outweigh the drawbacks?",
        kind: "instruction",
        why: "Это действие, которое должен выполнить ответ. Проверь каждую часть, прежде чем писать.",
      },
    ],
    annotations: [
      {
        text: "instead of expanding outwards",
        kind: "scope",
        why: "Сравнение плотной застройки с расширением важно для вывода.",
      },
      {
        text: "Do the benefits of this approach outweigh the drawbacks?",
        kind: "instruction",
        why: "Это действие, которое должен выполнить ответ. Проверь каждую часть, прежде чем писать.",
      },
    ],
    plan: [
      {
        label: "Вердикт",
        help: "Скажи, какая сторона перевешивает. Определи основание сравнения.",
      },
      {
        label: "Слабее",
        help: "Признай релевантную противоположную сторону и её ограничения.",
      },
      {
        label: "Сильнее",
        help: "Покажи, почему важность, масштаб или длительность этого эффекта больше.",
      },
      {
        label: "Вывод",
        help: "Сравнительный итог, согласующийся с аргументами.",
      },
    ],
    ideaSeeds:
      "Ближе услуги и транспорт; нагрузка и зелёные зоны; разумные условия уплотнения.",
    pitfalls: [
      "Сравнение плотной застройки с расширением важно для вывода.",
      "Не выдумывай статистику или исследования. Достаточно понятного релевантного примера.",
    ],
    selfReview: [
      {
        criterion: "Task Response",
        items: [
          "Все части вопроса получили ответ?",
          "Позиция и вывод согласованы?",
          "Сравнение плотной застройки с расширением важно для вывода.",
        ],
      },
      {
        criterion: "Coherence & Cohesion",
        items: [
          "У каждого абзаца одна центральная мысль?",
          "Объяснено, как пример поддерживает аргумент?",
        ],
      },
      {
        criterion: "Lexical Resource",
        items: [
          "Слова точны для этого контекста?",
          "Перефразирование не изменило смысл вопроса?",
        ],
      },
      {
        criterion: "Grammar",
        items: [
          "Проверены согласование подлежащего и глагола, артикли и границы предложений?",
          "Сложные конструкции помогают выразить связь, а не только удлиняют текст?",
        ],
      },
    ],
    sources: ["ielts-criteria", "ielts-descriptors", "idp-topics"],
  },
  {
    id: "online-health",
    task: 2,
    type: "outweigh",
    title: "Онлайн-консультации врачей",
    topic: "Health",
    prompt:
      "Medical appointments are increasingly conducted through video calls rather than in person. Do the advantages outweigh the disadvantages?",
    minutes: 40,
    minWords: 250,
    label: "Авторская практика",
    sourceStatus: "original",
    constraints: [
      {
        text: "rather than in person",
        kind: "scope",
        why: "Не описывай только пользу интернета. Сравни способы приёма пациента.",
      },
      {
        text: "Do the advantages outweigh the disadvantages?",
        kind: "instruction",
        why: "Это действие, которое должен выполнить ответ. Проверь каждую часть, прежде чем писать.",
      },
    ],
    annotations: [
      {
        text: "rather than in person",
        kind: "scope",
        why: "Не описывай только пользу интернета. Сравни способы приёма пациента.",
      },
      {
        text: "Do the advantages outweigh the disadvantages?",
        kind: "instruction",
        why: "Это действие, которое должен выполнить ответ. Проверь каждую часть, прежде чем писать.",
      },
    ],
    plan: [
      {
        label: "Вердикт",
        help: "Скажи, какая сторона перевешивает. Определи основание сравнения.",
      },
      {
        label: "Слабее",
        help: "Признай релевантную противоположную сторону и её ограничения.",
      },
      {
        label: "Сильнее",
        help: "Покажи, почему важность, масштаб или длительность этого эффекта больше.",
      },
      {
        label: "Вывод",
        help: "Сравнительный итог, согласующийся с аргументами.",
      },
    ],
    ideaSeeds:
      "Доступность и поездки; необходимость осмотра; пригодность для повторных консультаций.",
    pitfalls: [
      "Не описывай только пользу интернета. Сравни способы приёма пациента.",
      "Не выдумывай статистику или исследования. Достаточно понятного релевантного примера.",
    ],
    selfReview: [
      {
        criterion: "Task Response",
        items: [
          "Все части вопроса получили ответ?",
          "Позиция и вывод согласованы?",
          "Не описывай только пользу интернета. Сравни способы приёма пациента.",
        ],
      },
      {
        criterion: "Coherence & Cohesion",
        items: [
          "У каждого абзаца одна центральная мысль?",
          "Объяснено, как пример поддерживает аргумент?",
        ],
      },
      {
        criterion: "Lexical Resource",
        items: [
          "Слова точны для этого контекста?",
          "Перефразирование не изменило смысл вопроса?",
        ],
      },
      {
        criterion: "Grammar",
        items: [
          "Проверены согласование подлежащего и глагола, артикли и границы предложений?",
          "Сложные конструкции помогают выразить связь, а не только удлиняют текст?",
        ],
      },
    ],
    sources: ["ielts-criteria", "ielts-descriptors", "idp-topics"],
  },
  {
    id: "global-food",
    task: 2,
    type: "outweigh",
    title: "Еда со всего мира",
    topic: "Globalisation",
    prompt:
      "Supermarkets sell food imported from many countries throughout the year. Do the benefits of this development outweigh its disadvantages?",
    minutes: 40,
    minWords: 250,
    label: "Авторская практика",
    sourceStatus: "original",
    constraints: [
      {
        text: "throughout the year",
        kind: "scope",
        why: "Круглогодичный импорт связан с выбором, поставками и сезонностью.",
      },
      {
        text: "Do the benefits of this development outweigh its disadvantages?",
        kind: "instruction",
        why: "Это действие, которое должен выполнить ответ. Проверь каждую часть, прежде чем писать.",
      },
    ],
    annotations: [
      {
        text: "throughout the year",
        kind: "scope",
        why: "Круглогодичный импорт связан с выбором, поставками и сезонностью.",
      },
      {
        text: "Do the benefits of this development outweigh its disadvantages?",
        kind: "instruction",
        why: "Это действие, которое должен выполнить ответ. Проверь каждую часть, прежде чем писать.",
      },
    ],
    plan: [
      {
        label: "Вердикт",
        help: "Скажи, какая сторона перевешивает. Определи основание сравнения.",
      },
      {
        label: "Слабее",
        help: "Признай релевантную противоположную сторону и её ограничения.",
      },
      {
        label: "Сильнее",
        help: "Покажи, почему важность, масштаб или длительность этого эффекта больше.",
      },
      {
        label: "Вывод",
        help: "Сравнительный итог, согласующийся с аргументами.",
      },
    ],
    ideaSeeds:
      "Разнообразие и надёжность; транспорт и местные производители; баланс доступности и воздействия.",
    pitfalls: [
      "Круглогодичный импорт связан с выбором, поставками и сезонностью.",
      "Не выдумывай статистику или исследования. Достаточно понятного релевантного примера.",
    ],
    selfReview: [
      {
        criterion: "Task Response",
        items: [
          "Все части вопроса получили ответ?",
          "Позиция и вывод согласованы?",
          "Круглогодичный импорт связан с выбором, поставками и сезонностью.",
        ],
      },
      {
        criterion: "Coherence & Cohesion",
        items: [
          "У каждого абзаца одна центральная мысль?",
          "Объяснено, как пример поддерживает аргумент?",
        ],
      },
      {
        criterion: "Lexical Resource",
        items: [
          "Слова точны для этого контекста?",
          "Перефразирование не изменило смысл вопроса?",
        ],
      },
      {
        criterion: "Grammar",
        items: [
          "Проверены согласование подлежащего и глагола, артикли и границы предложений?",
          "Сложные конструкции помогают выразить связь, а не только удлиняют текст?",
        ],
      },
    ],
    sources: ["ielts-criteria", "ielts-descriptors", "idp-topics"],
  },
  {
    id: "food-waste",
    task: 2,
    type: "causes-solutions",
    title: "Пищевые отходы дома",
    topic: "Environment",
    prompt:
      "Households throw away large quantities of edible food. What causes this problem, and what measures could reduce it?",
    minutes: 40,
    minWords: 250,
    label: "Авторская практика",
    sourceStatus: "original",
    constraints: [
      {
        text: "edible food",
        kind: "scope",
        why: "Вопрос о пригодной к употреблению еде в домохозяйствах, а не промышленных отходах.",
      },
      {
        text: "What causes this problem, and what measures could reduce it?",
        kind: "instruction",
        why: "Это действие, которое должен выполнить ответ. Проверь каждую часть, прежде чем писать.",
      },
    ],
    annotations: [
      {
        text: "edible food",
        kind: "scope",
        why: "Вопрос о пригодной к употреблению еде в домохозяйствах, а не промышленных отходах.",
      },
      {
        text: "What causes this problem, and what measures could reduce it?",
        kind: "instruction",
        why: "Это действие, которое должен выполнить ответ. Проверь каждую часть, прежде чем писать.",
      },
    ],
    plan: [
      {
        label: "Диагноз",
        help: "Назови проблему точно и обозначь линии ответа.",
      },
      {
        label: "Причины",
        help: "Объясни механизмы 1–2 причин; не ограничивайся списком.",
      },
      {
        label: "Решения",
        help: "Привяжи каждую меру к названной причине: кто действует и почему это поможет.",
      },
      {
        label: "Вывод",
        help: "Краткий итог причин и реалистичных действий без нового материала.",
      },
    ],
    ideaSeeds:
      "Покупки без плана и непонимание маркировки; планирование порций и информация о хранении.",
    pitfalls: [
      "Вопрос о пригодной к употреблению еде в домохозяйствах, а не промышленных отходах.",
      "Не выдумывай статистику или исследования. Достаточно понятного релевантного примера.",
    ],
    selfReview: [
      {
        criterion: "Task Response",
        items: [
          "Все части вопроса получили ответ?",
          "Позиция и вывод согласованы?",
          "Вопрос о пригодной к употреблению еде в домохозяйствах, а не промышленных отходах.",
        ],
      },
      {
        criterion: "Coherence & Cohesion",
        items: [
          "У каждого абзаца одна центральная мысль?",
          "Объяснено, как пример поддерживает аргумент?",
        ],
      },
      {
        criterion: "Lexical Resource",
        items: [
          "Слова точны для этого контекста?",
          "Перефразирование не изменило смысл вопроса?",
        ],
      },
      {
        criterion: "Grammar",
        items: [
          "Проверены согласование подлежащего и глагола, артикли и границы предложений?",
          "Сложные конструкции помогают выразить связь, а не только удлиняют текст?",
        ],
      },
    ],
    sources: ["ielts-criteria", "ielts-descriptors", "idp-topics"],
  },
  {
    id: "lonely-city",
    task: 2,
    type: "causes-solutions",
    title: "Одиночество в больших городах",
    topic: "Society",
    prompt:
      "Many people living in large cities report feeling socially isolated. Why might this happen, and how could cities help people build connections?",
    minutes: 40,
    minWords: 250,
    label: "Авторская практика",
    sourceStatus: "original",
    constraints: [
      {
        text: "how could cities help",
        kind: "scope",
        why: "Решения должны включать действия города; одних советов отдельному человеку мало.",
      },
      {
        text: "Why might this happen, and how could cities help people build connections?",
        kind: "instruction",
        why: "Это действие, которое должен выполнить ответ. Проверь каждую часть, прежде чем писать.",
      },
    ],
    annotations: [
      {
        text: "how could cities help",
        kind: "scope",
        why: "Решения должны включать действия города; одних советов отдельному человеку мало.",
      },
      {
        text: "Why might this happen, and how could cities help people build connections?",
        kind: "instruction",
        why: "Это действие, которое должен выполнить ответ. Проверь каждую часть, прежде чем писать.",
      },
    ],
    plan: [
      {
        label: "Диагноз",
        help: "Назови проблему точно и обозначь линии ответа.",
      },
      {
        label: "Причины",
        help: "Объясни механизмы 1–2 причин; не ограничивайся списком.",
      },
      {
        label: "Решения",
        help: "Привяжи каждую меру к названной причине: кто действует и почему это поможет.",
      },
      {
        label: "Вывод",
        help: "Краткий итог причин и реалистичных действий без нового материала.",
      },
    ],
    ideaSeeds:
      "Нестабильное жильё и долгие поездки; доступные местные центры и пространства для регулярных встреч.",
    pitfalls: [
      "Решения должны включать действия города; одних советов отдельному человеку мало.",
      "Не выдумывай статистику или исследования. Достаточно понятного релевантного примера.",
    ],
    selfReview: [
      {
        criterion: "Task Response",
        items: [
          "Все части вопроса получили ответ?",
          "Позиция и вывод согласованы?",
          "Решения должны включать действия города; одних советов отдельному человеку мало.",
        ],
      },
      {
        criterion: "Coherence & Cohesion",
        items: [
          "У каждого абзаца одна центральная мысль?",
          "Объяснено, как пример поддерживает аргумент?",
        ],
      },
      {
        criterion: "Lexical Resource",
        items: [
          "Слова точны для этого контекста?",
          "Перефразирование не изменило смысл вопроса?",
        ],
      },
      {
        criterion: "Grammar",
        items: [
          "Проверены согласование подлежащего и глагола, артикли и границы предложений?",
          "Сложные конструкции помогают выразить связь, а не только удлиняют текст?",
        ],
      },
    ],
    sources: ["ielts-criteria", "ielts-descriptors", "idp-topics"],
  },
  {
    id: "skills-mismatch",
    task: 2,
    type: "causes-solutions",
    title: "Навыки и первые рабочие места",
    topic: "Work",
    prompt:
      "Some graduates struggle to find work even when employers say they cannot recruit suitable staff. What might cause this mismatch, and what could be done about it?",
    minutes: 40,
    minWords: 250,
    label: "Авторская практика",
    sourceStatus: "original",
    constraints: [
      {
        text: "this mismatch",
        kind: "scope",
        why: "Объясни одновременно трудности выпускников и нехватку подходящих кандидатов.",
      },
      {
        text: "What might cause this mismatch, and what could be done about it?",
        kind: "instruction",
        why: "Это действие, которое должен выполнить ответ. Проверь каждую часть, прежде чем писать.",
      },
    ],
    annotations: [
      {
        text: "this mismatch",
        kind: "scope",
        why: "Объясни одновременно трудности выпускников и нехватку подходящих кандидатов.",
      },
      {
        text: "What might cause this mismatch, and what could be done about it?",
        kind: "instruction",
        why: "Это действие, которое должен выполнить ответ. Проверь каждую часть, прежде чем писать.",
      },
    ],
    plan: [
      {
        label: "Диагноз",
        help: "Назови проблему точно и обозначь линии ответа.",
      },
      {
        label: "Причины",
        help: "Объясни механизмы 1–2 причин; не ограничивайся списком.",
      },
      {
        label: "Решения",
        help: "Привяжи каждую меру к названной причине: кто действует и почему это поможет.",
      },
      {
        label: "Вывод",
        help: "Краткий итог причин и реалистичных действий без нового материала.",
      },
    ],
    ideaSeeds:
      "Разрыв навыков и требований опыта; стажировки, обучение и точнее описание вакансий.",
    pitfalls: [
      "Объясни одновременно трудности выпускников и нехватку подходящих кандидатов.",
      "Не выдумывай статистику или исследования. Достаточно понятного релевантного примера.",
    ],
    selfReview: [
      {
        criterion: "Task Response",
        items: [
          "Все части вопроса получили ответ?",
          "Позиция и вывод согласованы?",
          "Объясни одновременно трудности выпускников и нехватку подходящих кандидатов.",
        ],
      },
      {
        criterion: "Coherence & Cohesion",
        items: [
          "У каждого абзаца одна центральная мысль?",
          "Объяснено, как пример поддерживает аргумент?",
        ],
      },
      {
        criterion: "Lexical Resource",
        items: [
          "Слова точны для этого контекста?",
          "Перефразирование не изменило смысл вопроса?",
        ],
      },
      {
        criterion: "Grammar",
        items: [
          "Проверены согласование подлежащего и глагола, артикли и границы предложений?",
          "Сложные конструкции помогают выразить связь, а не только удлиняют текст?",
        ],
      },
    ],
    sources: ["ielts-criteria", "ielts-descriptors", "idp-topics"],
  },
  {
    id: "school-stress",
    task: 2,
    type: "causes-solutions",
    title: "Стресс у школьников",
    topic: "Education",
    prompt:
      "School students in some societies experience high levels of academic pressure. What are the main causes, and what steps could schools and families take to address them?",
    minutes: 40,
    minWords: 250,
    label: "Авторская практика",
    sourceStatus: "original",
    constraints: [
      {
        text: "schools and families",
        kind: "scope",
        why: "Задание просит меры от двух участников. Не оставляй семью или школу без ответа.",
      },
      {
        text: "What are the main causes, and what steps could schools and families take to address them?",
        kind: "instruction",
        why: "Это действие, которое должен выполнить ответ. Проверь каждую часть, прежде чем писать.",
      },
    ],
    annotations: [
      {
        text: "schools and families",
        kind: "scope",
        why: "Задание просит меры от двух участников. Не оставляй семью или школу без ответа.",
      },
      {
        text: "What are the main causes, and what steps could schools and families take to address them?",
        kind: "instruction",
        why: "Это действие, которое должен выполнить ответ. Проверь каждую часть, прежде чем писать.",
      },
    ],
    plan: [
      {
        label: "Диагноз",
        help: "Назови проблему точно и обозначь линии ответа.",
      },
      {
        label: "Причины",
        help: "Объясни механизмы 1–2 причин; не ограничивайся списком.",
      },
      {
        label: "Решения",
        help: "Привяжи каждую меру к названной причине: кто действует и почему это поможет.",
      },
      {
        label: "Вывод",
        help: "Краткий итог причин и реалистичных действий без нового материала.",
      },
    ],
    ideaSeeds:
      "Высокая цена экзаменов и сравнение; обратная связь, realistic workload и ожидания родителей.",
    pitfalls: [
      "Задание просит меры от двух участников. Не оставляй семью или школу без ответа.",
      "Не выдумывай статистику или исследования. Достаточно понятного релевантного примера.",
    ],
    selfReview: [
      {
        criterion: "Task Response",
        items: [
          "Все части вопроса получили ответ?",
          "Позиция и вывод согласованы?",
          "Задание просит меры от двух участников. Не оставляй семью или школу без ответа.",
        ],
      },
      {
        criterion: "Coherence & Cohesion",
        items: [
          "У каждого абзаца одна центральная мысль?",
          "Объяснено, как пример поддерживает аргумент?",
        ],
      },
      {
        criterion: "Lexical Resource",
        items: [
          "Слова точны для этого контекста?",
          "Перефразирование не изменило смысл вопроса?",
        ],
      },
      {
        criterion: "Grammar",
        items: [
          "Проверены согласование подлежащего и глагола, артикли и границы предложений?",
          "Сложные конструкции помогают выразить связь, а не только удлиняют текст?",
        ],
      },
    ],
    sources: ["ielts-criteria", "ielts-descriptors", "idp-topics"],
  },
  {
    id: "career-switch",
    task: 2,
    type: "two-part",
    title: "Смена профессии",
    topic: "Work",
    prompt:
      "More adults change careers several times during their working lives. Why is this happening? Is it a positive or negative development?",
    minutes: 40,
    minWords: 250,
    label: "Авторская практика",
    sourceStatus: "original",
    constraints: [
      {
        text: "Why is this happening?",
        kind: "scope",
        why: "Нужны причины и оценка; положительные последствия не заменяют объяснение причин.",
      },
      {
        text: "Why is this happening? Is it a positive or negative development?",
        kind: "instruction",
        why: "Это действие, которое должен выполнить ответ. Проверь каждую часть, прежде чем писать.",
      },
    ],
    annotations: [
      {
        text: "Why is this happening?",
        kind: "scope",
        why: "Нужны причины и оценка; положительные последствия не заменяют объяснение причин.",
      },
      {
        text: "Why is this happening? Is it a positive or negative development?",
        kind: "instruction",
        why: "Это действие, которое должен выполнить ответ. Проверь каждую часть, прежде чем писать.",
      },
    ],
    plan: [
      {
        label: "Карта ответа",
        help: "Явно ответь на обе части задания.",
      },
      {
        label: "Первый вопрос",
        help: "Развей ответ с причинной связью или конкретным примером.",
      },
      {
        label: "Второй вопрос",
        help: "Дай самостоятельный развёрнутый ответ; не повторяй предыдущий абзац.",
      },
      {
        label: "Вывод",
        help: "Сведи ответы в итог без смены позиции.",
      },
    ],
    ideaSeeds:
      "Изменение отраслей и интересов; возможность адаптации против затрат на переобучение.",
    pitfalls: [
      "Нужны причины и оценка; положительные последствия не заменяют объяснение причин.",
      "Не выдумывай статистику или исследования. Достаточно понятного релевантного примера.",
    ],
    selfReview: [
      {
        criterion: "Task Response",
        items: [
          "Все части вопроса получили ответ?",
          "Позиция и вывод согласованы?",
          "Нужны причины и оценка; положительные последствия не заменяют объяснение причин.",
        ],
      },
      {
        criterion: "Coherence & Cohesion",
        items: [
          "У каждого абзаца одна центральная мысль?",
          "Объяснено, как пример поддерживает аргумент?",
        ],
      },
      {
        criterion: "Lexical Resource",
        items: [
          "Слова точны для этого контекста?",
          "Перефразирование не изменило смысл вопроса?",
        ],
      },
      {
        criterion: "Grammar",
        items: [
          "Проверены согласование подлежащего и глагола, артикли и границы предложений?",
          "Сложные конструкции помогают выразить связь, а не только удлиняют текст?",
        ],
      },
    ],
    sources: ["ielts-criteria", "ielts-descriptors", "idp-topics"],
  },
  {
    id: "news-creators",
    task: 2,
    type: "two-part",
    title: "Новости от независимых авторов",
    topic: "Media",
    prompt:
      "More people receive news from independent online creators rather than established news organisations. Why do people choose these sources? How can readers judge whether the information is reliable?",
    minutes: 40,
    minWords: 250,
    label: "Авторская практика",
    sourceStatus: "original",
    constraints: [
      {
        text: "How can readers judge",
        kind: "scope",
        why: "Вторая часть — проверка надёжности читателями, а не твоё отношение к блогерам.",
      },
      {
        text: "Why do people choose these sources? How can readers judge whether the information is reliable?",
        kind: "instruction",
        why: "Это действие, которое должен выполнить ответ. Проверь каждую часть, прежде чем писать.",
      },
    ],
    annotations: [
      {
        text: "How can readers judge",
        kind: "scope",
        why: "Вторая часть — проверка надёжности читателями, а не твоё отношение к блогерам.",
      },
      {
        text: "Why do people choose these sources? How can readers judge whether the information is reliable?",
        kind: "instruction",
        why: "Это действие, которое должен выполнить ответ. Проверь каждую часть, прежде чем писать.",
      },
    ],
    plan: [
      {
        label: "Карта ответа",
        help: "Явно ответь на обе части задания.",
      },
      {
        label: "Первый вопрос",
        help: "Развей ответ с причинной связью или конкретным примером.",
      },
      {
        label: "Второй вопрос",
        help: "Дай самостоятельный развёрнутый ответ; не повторяй предыдущий абзац.",
      },
      {
        label: "Вывод",
        help: "Сведи ответы в итог без смены позиции.",
      },
    ],
    ideaSeeds:
      "Доступность и близкий язык; первичные источники, подтверждение другими редакциями и исправления.",
    pitfalls: [
      "Вторая часть — проверка надёжности читателями, а не твоё отношение к блогерам.",
      "Не выдумывай статистику или исследования. Достаточно понятного релевантного примера.",
    ],
    selfReview: [
      {
        criterion: "Task Response",
        items: [
          "Все части вопроса получили ответ?",
          "Позиция и вывод согласованы?",
          "Вторая часть — проверка надёжности читателями, а не твоё отношение к блогерам.",
        ],
      },
      {
        criterion: "Coherence & Cohesion",
        items: [
          "У каждого абзаца одна центральная мысль?",
          "Объяснено, как пример поддерживает аргумент?",
        ],
      },
      {
        criterion: "Lexical Resource",
        items: [
          "Слова точны для этого контекста?",
          "Перефразирование не изменило смысл вопроса?",
        ],
      },
      {
        criterion: "Grammar",
        items: [
          "Проверены согласование подлежащего и глагола, артикли и границы предложений?",
          "Сложные конструкции помогают выразить связь, а не только удлиняют текст?",
        ],
      },
    ],
    sources: ["ielts-criteria", "ielts-descriptors", "idp-topics"],
  },
  {
    id: "rural-youth",
    task: 2,
    type: "two-part",
    title: "Молодёжь и малые города",
    topic: "Society",
    prompt:
      "Many young adults leave small towns to live in major cities. What effects can this have on small towns? Should governments encourage young people to stay?",
    minutes: 40,
    minWords: 250,
    label: "Авторская практика",
    sourceStatus: "original",
    constraints: [
      {
        text: "effects can this have on small towns",
        kind: "scope",
        why: "Последствия нужны для малых городов, а не только для переехавших людей.",
      },
      {
        text: "What effects can this have on small towns? Should governments encourage young people to stay?",
        kind: "instruction",
        why: "Это действие, которое должен выполнить ответ. Проверь каждую часть, прежде чем писать.",
      },
    ],
    annotations: [
      {
        text: "effects can this have on small towns",
        kind: "scope",
        why: "Последствия нужны для малых городов, а не только для переехавших людей.",
      },
      {
        text: "What effects can this have on small towns? Should governments encourage young people to stay?",
        kind: "instruction",
        why: "Это действие, которое должен выполнить ответ. Проверь каждую часть, прежде чем писать.",
      },
    ],
    plan: [
      {
        label: "Карта ответа",
        help: "Явно ответь на обе части задания.",
      },
      {
        label: "Первый вопрос",
        help: "Развей ответ с причинной связью или конкретным примером.",
      },
      {
        label: "Второй вопрос",
        help: "Дай самостоятельный развёрнутый ответ; не повторяй предыдущий абзац.",
      },
      {
        label: "Вывод",
        help: "Сведи ответы в итог без смены позиции.",
      },
    ],
    ideaSeeds:
      "Рабочая сила и возрастная структура; добровольные возможности работы вместо ограничений на переезд.",
    pitfalls: [
      "Последствия нужны для малых городов, а не только для переехавших людей.",
      "Не выдумывай статистику или исследования. Достаточно понятного релевантного примера.",
    ],
    selfReview: [
      {
        criterion: "Task Response",
        items: [
          "Все части вопроса получили ответ?",
          "Позиция и вывод согласованы?",
          "Последствия нужны для малых городов, а не только для переехавших людей.",
        ],
      },
      {
        criterion: "Coherence & Cohesion",
        items: [
          "У каждого абзаца одна центральная мысль?",
          "Объяснено, как пример поддерживает аргумент?",
        ],
      },
      {
        criterion: "Lexical Resource",
        items: [
          "Слова точны для этого контекста?",
          "Перефразирование не изменило смысл вопроса?",
        ],
      },
      {
        criterion: "Grammar",
        items: [
          "Проверены согласование подлежащего и глагола, артикли и границы предложений?",
          "Сложные конструкции помогают выразить связь, а не только удлиняют текст?",
        ],
      },
    ],
    sources: ["ielts-criteria", "ielts-descriptors", "idp-topics"],
  },
  {
    id: "digital-childhood",
    task: 2,
    type: "two-part",
    title: "Детство с цифровыми устройствами",
    topic: "Technology",
    prompt:
      "Children are introduced to digital devices at increasingly young ages. What skills can they gain from this? What responsibilities should parents have when allowing children to use these devices?",
    minutes: 40,
    minWords: 250,
    label: "Авторская практика",
    sourceStatus: "original",
    constraints: [
      {
        text: "What skills can they gain",
        kind: "scope",
        why: "Покажи конкретные навыки и отдельно роль родителей; не превращай всё в запрет экранов.",
      },
      {
        text: "What skills can they gain from this? What responsibilities should parents have when allowing children to use these devices?",
        kind: "instruction",
        why: "Это действие, которое должен выполнить ответ. Проверь каждую часть, прежде чем писать.",
      },
    ],
    annotations: [
      {
        text: "What skills can they gain",
        kind: "scope",
        why: "Покажи конкретные навыки и отдельно роль родителей; не превращай всё в запрет экранов.",
      },
      {
        text: "What skills can they gain from this? What responsibilities should parents have when allowing children to use these devices?",
        kind: "instruction",
        why: "Это действие, которое должен выполнить ответ. Проверь каждую часть, прежде чем писать.",
      },
    ],
    plan: [
      {
        label: "Карта ответа",
        help: "Явно ответь на обе части задания.",
      },
      {
        label: "Первый вопрос",
        help: "Развей ответ с причинной связью или конкретным примером.",
      },
      {
        label: "Второй вопрос",
        help: "Дай самостоятельный развёрнутый ответ; не повторяй предыдущий абзац.",
      },
      {
        label: "Вывод",
        help: "Сведи ответы в итог без смены позиции.",
      },
    ],
    ideaSeeds:
      "Поиск информации и творчество; возрастные ограничения, совместное использование и приватность.",
    pitfalls: [
      "Покажи конкретные навыки и отдельно роль родителей; не превращай всё в запрет экранов.",
      "Не выдумывай статистику или исследования. Достаточно понятного релевантного примера.",
    ],
    selfReview: [
      {
        criterion: "Task Response",
        items: [
          "Все части вопроса получили ответ?",
          "Позиция и вывод согласованы?",
          "Покажи конкретные навыки и отдельно роль родителей; не превращай всё в запрет экранов.",
        ],
      },
      {
        criterion: "Coherence & Cohesion",
        items: [
          "У каждого абзаца одна центральная мысль?",
          "Объяснено, как пример поддерживает аргумент?",
        ],
      },
      {
        criterion: "Lexical Resource",
        items: [
          "Слова точны для этого контекста?",
          "Перефразирование не изменило смысл вопроса?",
        ],
      },
      {
        criterion: "Grammar",
        items: [
          "Проверены согласование подлежащего и глагола, артикли и границы предложений?",
          "Сложные конструкции помогают выразить связь, а не только удлиняют текст?",
        ],
      },
    ],
    sources: ["ielts-criteria", "ielts-descriptors", "idp-topics"],
  },
  {
    id: "commute-bar",
    task: 1,
    type: "bar",
    title: "Как добираются до работы",
    topic: "Academic Task 1",
    prompt:
      "The chart shows the percentage of commuters using four main methods of transport in the fictional city of Bellford in 2010 and 2025. Summarise the information by selecting the main features, and make comparisons where relevant.",
    minutes: 20,
    minWords: 150,
    label: "Авторская практика · данные вымышлены",
    sourceStatus: "original",
    visual: {
      type: "bar",
      caption: "Main commuting method · Bellford",
      columns: ["Method", "2010", "2025"],
      rows: [
        ["Car", 55, 35],
        ["Bus", 25, 30],
        ["Bicycle", 10, 25],
        ["Walking", 10, 10],
      ],
      unit: "% of commuters",
    },
    constraints: [
      {
        text: "Summarise the information",
        kind: "instruction",
        why: "Сделай краткое описание главных особенностей, а не список каждого значения.",
      },
      {
        text: "make comparisons where relevant",
        kind: "comparison",
        why: "Сравни связанные группы и заметные различия; не добавляй причин, которых нет в данных.",
      },
    ],
    annotations: [
      {
        text: "Summarise the information",
        kind: "instruction",
        why: "Сделай краткое описание главных особенностей, а не список каждого значения.",
      },
      {
        text: "make comparisons where relevant",
        kind: "comparison",
        why: "Сравни связанные группы и заметные различия; не добавляй причин, которых нет в данных.",
      },
    ],
    plan: [
      {
        label: "Введение",
        help: "Что представлено, где/когда и в каких единицах. Перефразируй подпись.",
      },
      {
        label: "Overview",
        help: "Главное: доля машины упала, велосипеда выросла, ходьба не изменилась. Сначала попробуй сформулировать это без чисел.",
      },
      {
        label: "Детали: группа 1",
        help: "Сравни машину и автобус в начале и конце.",
      },
      {
        label: "Детали: группа 2",
        help: "Сопоставь велосипед и ходьбу; выдели наибольшее изменение.",
      },
    ],
    pitfalls: [
      "Проценты здесь показывают долю людей, а не количество поездок; 20 percentage points не равно 20%.",
      "Не добавляй своё мнение или причины: задача описывает только предоставленную информацию.",
    ],
    selfReview: [
      {
        criterion: "Task Achievement",
        items: [
          "Есть ясный overview основных особенностей?",
          "Проценты здесь показывают долю людей, а не количество поездок; 20 percentage points не равно 20%.",
          "Важные особенности подкреплены точными данными или расположением?",
        ],
      },
      {
        criterion: "Coherence & Cohesion",
        items: ["Детали сгруппированы логически, а не перечислены подряд?"],
      },
      {
        criterion: "Lexical Resource",
        items: ["Слова сравнения и направления изменений точны?"],
      },
      {
        criterion: "Grammar",
        items: [
          "Время глаголов соответствует датам?",
          "Единицы, числа и сравнительные конструкции проверены?",
        ],
      },
    ],
    sources: ["ielts-criteria", "ielts-descriptors", "bc-writing"],
  },
  {
    id: "library-line",
    task: 1,
    type: "line",
    title: "Печатные и цифровые займы",
    topic: "Academic Task 1",
    prompt:
      "The chart shows the number of printed and digital items borrowed from a fictional library between 2015 and 2025. Summarise the information by selecting the main features, and make comparisons where relevant.",
    minutes: 20,
    minWords: 150,
    label: "Авторская практика · данные вымышлены",
    sourceStatus: "original",
    visual: {
      type: "line",
      caption: "Items borrowed per year",
      columns: ["Year", "Printed", "Digital"],
      rows: [
        ["2015", 120, 20],
        ["2017", 118, 35],
        ["2019", 110, 60],
        ["2021", 85, 110],
        ["2023", 92, 130],
        ["2025", 95, 145],
      ],
      unit: "thousand items",
    },
    constraints: [
      {
        text: "Summarise the information",
        kind: "instruction",
        why: "Сделай краткое описание главных особенностей, а не список каждого значения.",
      },
      {
        text: "make comparisons where relevant",
        kind: "comparison",
        why: "Сравни связанные группы и заметные различия; не добавляй причин, которых нет в данных.",
      },
    ],
    annotations: [
      {
        text: "Summarise the information",
        kind: "instruction",
        why: "Сделай краткое описание главных особенностей, а не список каждого значения.",
      },
      {
        text: "make comparisons where relevant",
        kind: "comparison",
        why: "Сравни связанные группы и заметные различия; не добавляй причин, которых нет в данных.",
      },
    ],
    plan: [
      {
        label: "Введение",
        help: "Что представлено, где/когда и в каких единицах. Перефразируй подпись.",
      },
      {
        label: "Overview",
        help: "Цифровые займы выросли и обогнали печатные между 2019 и 2021; печатные сократились с частичным восстановлением.",
      },
      {
        label: "Детали: группа 1",
        help: "Печатная серия: падение, минимум, восстановление.",
      },
      {
        label: "Детали: группа 2",
        help: "Цифровая серия: рост, переход к лидерству, разрыв к концу.",
      },
    ],
    pitfalls: [
      "Нет данных о точном годе пересечения между 2019 и 2021; не называй выдуманный год.",
      "Не добавляй своё мнение или причины: задача описывает только предоставленную информацию.",
    ],
    selfReview: [
      {
        criterion: "Task Achievement",
        items: [
          "Есть ясный overview основных особенностей?",
          "Нет данных о точном годе пересечения между 2019 и 2021; не называй выдуманный год.",
          "Важные особенности подкреплены точными данными или расположением?",
        ],
      },
      {
        criterion: "Coherence & Cohesion",
        items: ["Детали сгруппированы логически, а не перечислены подряд?"],
      },
      {
        criterion: "Lexical Resource",
        items: ["Слова сравнения и направления изменений точны?"],
      },
      {
        criterion: "Grammar",
        items: [
          "Время глаголов соответствует датам?",
          "Единицы, числа и сравнительные конструкции проверены?",
        ],
      },
    ],
    sources: ["ielts-criteria", "ielts-descriptors", "bc-writing"],
  },
  {
    id: "water-table",
    task: 1,
    type: "table",
    title: "Потребление воды в домах",
    topic: "Academic Task 1",
    prompt:
      "The table compares average daily household water use in three fictional towns in 2025. Summarise the information by selecting the main features, and make comparisons where relevant.",
    minutes: 20,
    minWords: 150,
    label: "Авторская практика · данные вымышлены",
    sourceStatus: "original",
    visual: {
      type: "table",
      caption: "Average household water use · 2025",
      columns: ["Town", "Kitchen", "Bathroom", "Garden", "Total"],
      rows: [
        ["Alder", 45, 110, 65, 220],
        ["Birch", 40, 95, 25, 160],
        ["Cedar", 50, 100, 90, 240],
      ],
      unit: "litres per household per day",
    },
    constraints: [
      {
        text: "Summarise the information",
        kind: "instruction",
        why: "Сделай краткое описание главных особенностей, а не список каждого значения.",
      },
      {
        text: "make comparisons where relevant",
        kind: "comparison",
        why: "Сравни связанные группы и заметные различия; не добавляй причин, которых нет в данных.",
      },
    ],
    annotations: [
      {
        text: "Summarise the information",
        kind: "instruction",
        why: "Сделай краткое описание главных особенностей, а не список каждого значения.",
      },
      {
        text: "make comparisons where relevant",
        kind: "comparison",
        why: "Сравни связанные группы и заметные различия; не добавляй причин, которых нет в данных.",
      },
    ],
    plan: [
      {
        label: "Введение",
        help: "Что представлено, где/когда и в каких единицах. Перефразируй подпись.",
      },
      {
        label: "Overview",
        help: "Cedar использует больше всего воды, Birch меньше всего; bathroom крупнейшая категория во всех трёх.",
      },
      {
        label: "Детали: группа 1",
        help: "Сравни общие значения и bathroom.",
      },
      {
        label: "Детали: группа 2",
        help: "Сравни garden — самый заметный разрыв между городами — и кухню.",
      },
    ],
    pitfalls: [
      "Цифры на домохозяйство, а не на человека. Total уже включает остальные категории; не складывай его с ними снова.",
      "Не добавляй своё мнение или причины: задача описывает только предоставленную информацию.",
    ],
    selfReview: [
      {
        criterion: "Task Achievement",
        items: [
          "Есть ясный overview основных особенностей?",
          "Цифры на домохозяйство, а не на человека. Total уже включает остальные категории; не складывай его с ними снова.",
          "Важные особенности подкреплены точными данными или расположением?",
        ],
      },
      {
        criterion: "Coherence & Cohesion",
        items: ["Детали сгруппированы логически, а не перечислены подряд?"],
      },
      {
        criterion: "Lexical Resource",
        items: ["Слова сравнения и направления изменений точны?"],
      },
      {
        criterion: "Grammar",
        items: [
          "Время глаголов соответствует датам?",
          "Единицы, числа и сравнительные конструкции проверены?",
        ],
      },
    ],
    sources: ["ielts-criteria", "ielts-descriptors", "bc-writing"],
  },
  {
    id: "course-bar",
    task: 1,
    type: "bar",
    title: "Обучение взрослых",
    topic: "Academic Task 1",
    prompt:
      "The chart compares the percentage of adults taking four types of evening course in two fictional districts in 2025. Summarise the information by selecting the main features, and make comparisons where relevant.",
    minutes: 20,
    minWords: 150,
    label: "Авторская практика · данные вымышлены",
    sourceStatus: "original",
    visual: {
      type: "bar",
      caption: "Participation in evening courses",
      columns: ["Course", "North district", "South district"],
      rows: [
        ["Languages", 35, 25],
        ["Computing", 30, 40],
        ["Arts", 20, 25],
        ["Cooking", 15, 10],
      ],
      unit: "% of surveyed participants",
    },
    constraints: [
      {
        text: "Summarise the information",
        kind: "instruction",
        why: "Сделай краткое описание главных особенностей, а не список каждого значения.",
      },
      {
        text: "make comparisons where relevant",
        kind: "comparison",
        why: "Сравни связанные группы и заметные различия; не добавляй причин, которых нет в данных.",
      },
    ],
    annotations: [
      {
        text: "Summarise the information",
        kind: "instruction",
        why: "Сделай краткое описание главных особенностей, а не список каждого значения.",
      },
      {
        text: "make comparisons where relevant",
        kind: "comparison",
        why: "Сравни связанные группы и заметные различия; не добавляй причин, которых нет в данных.",
      },
    ],
    plan: [
      {
        label: "Введение",
        help: "Что представлено, где/когда и в каких единицах. Перефразируй подпись.",
      },
      {
        label: "Overview",
        help: "Languages лидирует на севере, computing на юге; cooking наименьшая категория в обоих районах.",
      },
      {
        label: "Детали: группа 1",
        help: "Сравни ведущие языковые и компьютерные курсы.",
      },
      {
        label: "Детали: группа 2",
        help: "Сопоставь arts и cooking; выдели одинаковые направления или разрывы.",
      },
    ],
    pitfalls: [
      "Это сравнение в одном году: не описывай рост или падение во времени.",
      "Не добавляй своё мнение или причины: задача описывает только предоставленную информацию.",
    ],
    selfReview: [
      {
        criterion: "Task Achievement",
        items: [
          "Есть ясный overview основных особенностей?",
          "Это сравнение в одном году: не описывай рост или падение во времени.",
          "Важные особенности подкреплены точными данными или расположением?",
        ],
      },
      {
        criterion: "Coherence & Cohesion",
        items: ["Детали сгруппированы логически, а не перечислены подряд?"],
      },
      {
        criterion: "Lexical Resource",
        items: ["Слова сравнения и направления изменений точны?"],
      },
      {
        criterion: "Grammar",
        items: [
          "Время глаголов соответствует датам?",
          "Единицы, числа и сравнительные конструкции проверены?",
        ],
      },
    ],
    sources: ["ielts-criteria", "ielts-descriptors", "bc-writing"],
  },
  {
    id: "electricity-line",
    task: 1,
    type: "line",
    title: "Источники электроэнергии",
    topic: "Academic Task 1",
    prompt:
      "The chart shows electricity generated from solar, wind and gas in a fictional region from 2010 to 2025. Summarise the information by selecting the main features, and make comparisons where relevant.",
    minutes: 20,
    minWords: 150,
    label: "Авторская практика · данные вымышлены",
    sourceStatus: "original",
    visual: {
      type: "line",
      caption: "Electricity generation by source",
      columns: ["Year", "Solar", "Wind", "Gas"],
      rows: [
        ["2010", 5, 20, 100],
        ["2015", 15, 35, 95],
        ["2020", 40, 55, 85],
        ["2025", 75, 70, 65],
      ],
      unit: "GWh",
    },
    constraints: [
      {
        text: "Summarise the information",
        kind: "instruction",
        why: "Сделай краткое описание главных особенностей, а не список каждого значения.",
      },
      {
        text: "make comparisons where relevant",
        kind: "comparison",
        why: "Сравни связанные группы и заметные различия; не добавляй причин, которых нет в данных.",
      },
    ],
    annotations: [
      {
        text: "Summarise the information",
        kind: "instruction",
        why: "Сделай краткое описание главных особенностей, а не список каждого значения.",
      },
      {
        text: "make comparisons where relevant",
        kind: "comparison",
        why: "Сравни связанные группы и заметные различия; не добавляй причин, которых нет в данных.",
      },
    ],
    plan: [
      {
        label: "Введение",
        help: "Что представлено, где/когда и в каких единицах. Перефразируй подпись.",
      },
      {
        label: "Overview",
        help: "Solar и wind выросли, gas снизился; solar стал крупнейшим из трёх показанных источников к 2025.",
      },
      {
        label: "Детали: группа 1",
        help: "Сравни стартовое лидерство gas с концом периода.",
      },
      {
        label: "Детали: группа 2",
        help: "Покажи рост solar и wind и изменение их относительного положения.",
      },
    ],
    pitfalls: [
      "Показаны три источника, а не вся электроэнергия региона; долю от неизвестного общего объёма считать нельзя.",
      "Не добавляй своё мнение или причины: задача описывает только предоставленную информацию.",
    ],
    selfReview: [
      {
        criterion: "Task Achievement",
        items: [
          "Есть ясный overview основных особенностей?",
          "Показаны три источника, а не вся электроэнергия региона; долю от неизвестного общего объёма считать нельзя.",
          "Важные особенности подкреплены точными данными или расположением?",
        ],
      },
      {
        criterion: "Coherence & Cohesion",
        items: ["Детали сгруппированы логически, а не перечислены подряд?"],
      },
      {
        criterion: "Lexical Resource",
        items: ["Слова сравнения и направления изменений точны?"],
      },
      {
        criterion: "Grammar",
        items: [
          "Время глаголов соответствует датам?",
          "Единицы, числа и сравнительные конструкции проверены?",
        ],
      },
    ],
    sources: ["ielts-criteria", "ielts-descriptors", "bc-writing"],
  },
  {
    id: "packaging-process",
    task: 1,
    type: "process",
    title: "Производство бумажной упаковки",
    topic: "Academic Task 1",
    prompt:
      "The diagram shows how paper packaging is produced at a fictional recycling facility. Summarise the information by selecting the main features, and make comparisons where relevant.",
    minutes: 20,
    minWords: 150,
    label: "Авторская практика · данные вымышлены",
    sourceStatus: "original",
    visual: {
      type: "process",
      caption: "Paper packaging production",
      steps: [
        "Used paper is collected",
        "Paper is sorted; unsuitable material is removed",
        "Paper is mixed with water to make pulp",
        "Pulp is cleaned and pressed into sheets",
        "Sheets are dried",
        "Sheets are cut and folded into boxes",
        "Finished boxes are delivered",
      ],
    },
    constraints: [
      {
        text: "Summarise the information",
        kind: "instruction",
        why: "Сделай краткое описание главных особенностей, а не список каждого значения.",
      },
      {
        text: "make comparisons where relevant",
        kind: "comparison",
        why: "Сравни связанные группы и заметные различия; не добавляй причин, которых нет в данных.",
      },
    ],
    annotations: [
      {
        text: "Summarise the information",
        kind: "instruction",
        why: "Сделай краткое описание главных особенностей, а не список каждого значения.",
      },
      {
        text: "make comparisons where relevant",
        kind: "comparison",
        why: "Сравни связанные группы и заметные различия; не добавляй причин, которых нет в данных.",
      },
    ],
    plan: [
      {
        label: "Введение",
        help: "Что представлено, где/когда и в каких единицах. Перефразируй подпись.",
      },
      {
        label: "Overview",
        help: "Линейный процесс из семи этапов: от сбора использованной бумаги до доставки коробок.",
      },
      {
        label: "Детали: группа 1",
        help: "Сбор, сортировка и превращение в pulp.",
      },
      {
        label: "Детали: группа 2",
        help: "Очистка, формование, сушка и изготовление готовой упаковки.",
      },
    ],
    pitfalls: [
      "Не добавляй температуры, химикаты или продолжительность: схема их не задаёт.",
      "Не добавляй своё мнение или причины: задача описывает только предоставленную информацию.",
    ],
    selfReview: [
      {
        criterion: "Task Achievement",
        items: [
          "Есть ясный overview основных особенностей?",
          "Не добавляй температуры, химикаты или продолжительность: схема их не задаёт.",
          "Важные особенности подкреплены точными данными или расположением?",
        ],
      },
      {
        criterion: "Coherence & Cohesion",
        items: ["Детали сгруппированы логически, а не перечислены подряд?"],
      },
      {
        criterion: "Lexical Resource",
        items: ["Слова сравнения и направления изменений точны?"],
      },
      {
        criterion: "Grammar",
        items: [
          "Время глаголов соответствует датам?",
          "Единицы, числа и сравнительные конструкции проверены?",
        ],
      },
    ],
    sources: ["ielts-criteria", "ielts-descriptors", "bc-writing"],
  },
  {
    id: "park-map",
    task: 1,
    type: "map",
    title: "Парк до и после реконструкции",
    topic: "Academic Task 1",
    prompt:
      "The plans show changes to a fictional public park between 2005 and 2025. North is at the top of each plan. Summarise the information by selecting the main features, and make comparisons where relevant.",
    minutes: 20,
    minWords: 150,
    label: "Авторская практика · данные вымышлены",
    sourceStatus: "original",
    visual: {
      type: "map",
      caption: "Meadow Park · 2005 → 2025",
      before: [
        "North-west: woodland",
        "North-east: pond",
        "Centre: grass field",
        "South-west: car park",
        "South-east: tennis court",
        "South centre: main entrance; straight path to grass field",
      ],
      after: [
        "North-west: woodland unchanged",
        "North-east: pond unchanged; viewing platform added on its southern edge",
        "Centre: grass field reduced; circular walking path added around it",
        "South-west: car park replaced by community garden",
        "South-east: tennis court replaced by playground",
        "South centre: main entrance unchanged; new café immediately to its east",
      ],
    },
    constraints: [
      {
        text: "Summarise the information",
        kind: "instruction",
        why: "Сделай краткое описание главных особенностей, а не список каждого значения.",
      },
      {
        text: "make comparisons where relevant",
        kind: "comparison",
        why: "Сравни связанные группы и заметные различия; не добавляй причин, которых нет в данных.",
      },
    ],
    annotations: [
      {
        text: "Summarise the information",
        kind: "instruction",
        why: "Сделай краткое описание главных особенностей, а не список каждого значения.",
      },
      {
        text: "make comparisons where relevant",
        kind: "comparison",
        why: "Сравни связанные группы и заметные различия; не добавляй причин, которых нет в данных.",
      },
    ],
    plan: [
      {
        label: "Введение",
        help: "Что представлено, где/когда и в каких единицах. Перефразируй подпись.",
      },
      {
        label: "Overview",
        help: "Парк стал более разнообразным по функциям, сохранив северные природные зоны и главный вход.",
      },
      {
        label: "Детали: группа 1",
        help: "Сохранившиеся элементы и новое пространство у пруда.",
      },
      {
        label: "Детали: группа 2",
        help: "Замены в южной части, новый café и walking path.",
      },
    ],
    pitfalls: [
      "Не утверждай, что площадь всего парка увеличилась: изменилась планировка внутри него.",
      "Не добавляй своё мнение или причины: задача описывает только предоставленную информацию.",
    ],
    selfReview: [
      {
        criterion: "Task Achievement",
        items: [
          "Есть ясный overview основных особенностей?",
          "Не утверждай, что площадь всего парка увеличилась: изменилась планировка внутри него.",
          "Важные особенности подкреплены точными данными или расположением?",
        ],
      },
      {
        criterion: "Coherence & Cohesion",
        items: ["Детали сгруппированы логически, а не перечислены подряд?"],
      },
      {
        criterion: "Lexical Resource",
        items: ["Слова сравнения и направления изменений точны?"],
      },
      {
        criterion: "Grammar",
        items: [
          "Время глаголов соответствует датам?",
          "Единицы, числа и сравнительные конструкции проверены?",
        ],
      },
    ],
    sources: ["ielts-criteria", "ielts-descriptors", "bc-writing"],
  },
  {
    id: "visitors-table",
    task: 1,
    type: "table",
    title: "Посетители двух музеев",
    topic: "Academic Task 1",
    prompt:
      "The table shows annual visitor numbers and the proportion of international visitors at two fictional museums in 2015 and 2025. Summarise the information by selecting the main features, and make comparisons where relevant.",
    minutes: 20,
    minWords: 150,
    label: "Авторская практика · данные вымышлены",
    sourceStatus: "original",
    visual: {
      type: "table",
      caption: "Museum visitors",
      columns: [
        "Museum",
        "Visitors 2015",
        "Visitors 2025",
        "International 2015",
        "International 2025",
      ],
      rows: [
        ["Museum A", 180000, 240000, "20%", "35%"],
        ["Museum B", 220000, 200000, "40%", "30%"],
      ],
      unit: "people per year; international visitors as % of each total",
    },
    constraints: [
      {
        text: "Summarise the information",
        kind: "instruction",
        why: "Сделай краткое описание главных особенностей, а не список каждого значения.",
      },
      {
        text: "make comparisons where relevant",
        kind: "comparison",
        why: "Сравни связанные группы и заметные различия; не добавляй причин, которых нет в данных.",
      },
    ],
    annotations: [
      {
        text: "Summarise the information",
        kind: "instruction",
        why: "Сделай краткое описание главных особенностей, а не список каждого значения.",
      },
      {
        text: "make comparisons where relevant",
        kind: "comparison",
        why: "Сравни связанные группы и заметные различия; не добавляй причин, которых нет в данных.",
      },
    ],
    plan: [
      {
        label: "Введение",
        help: "Что представлено, где/когда и в каких единицах. Перефразируй подпись.",
      },
      {
        label: "Overview",
        help: "A вырос и обогнал B по общему числу посетителей; международная доля в A выросла, в B уменьшилась.",
      },
      {
        label: "Детали: группа 1",
        help: "Общие числа обоих музеев в двух годах.",
      },
      {
        label: "Детали: группа 2",
        help: "Доли иностранных посетителей, явно отделённые от абсолютных чисел.",
      },
    ],
    pitfalls: [
      "Рост доли и рост числа — разные утверждения; если вычисляешь число иностранных посетителей, проверь оба компонента.",
      "Не добавляй своё мнение или причины: задача описывает только предоставленную информацию.",
    ],
    selfReview: [
      {
        criterion: "Task Achievement",
        items: [
          "Есть ясный overview основных особенностей?",
          "Рост доли и рост числа — разные утверждения; если вычисляешь число иностранных посетителей, проверь оба компонента.",
          "Важные особенности подкреплены точными данными или расположением?",
        ],
      },
      {
        criterion: "Coherence & Cohesion",
        items: ["Детали сгруппированы логически, а не перечислены подряд?"],
      },
      {
        criterion: "Lexical Resource",
        items: ["Слова сравнения и направления изменений точны?"],
      },
      {
        criterion: "Grammar",
        items: [
          "Время глаголов соответствует датам?",
          "Единицы, числа и сравнительные конструкции проверены?",
        ],
      },
    ],
    sources: ["ielts-criteria", "ielts-descriptors", "bc-writing"],
  },
];

export const writingLessons = [
  {
    id: "decode",
    title: "Сначала разбери задание",
    summary: "Вопрос задаёт границы ответа. Тема сама по себе ещё не план.",
    steps: [
      "Выдели действие: agree, discuss, explain causes или compare.",
      "Отметь ограничения: кто, где, при каком условии.",
      "Преврати каждую часть инструкции в пункт самопроверки.",
    ],
    weak: "Technology is important in modern life.",
    strong:
      "Schools may use AI tools for homework, but students should disclose that use so teachers can distinguish assistance from independent understanding.",
    why: "Во втором примере сохранены участники, контекст и условие; первый применим почти к любой теме.",
    source: "ielts-criteria",
  },
  {
    id: "develop",
    title: "Аргумент — это цепочка",
    summary:
      "Развивай мысль через механизм, а не через количество красивых тезисов.",
    steps: [
      "Утверждение: назови один эффект.",
      "Объяснение: покажи, как и почему он возникает.",
      "Пример: сделай механизм конкретным.",
      "Связь: верни эффект к позиции.",
    ],
    weak: "Remote work is good. It saves time and is convenient.",
    strong:
      "Remote work can make demanding tasks easier to complete because employees can protect uninterrupted time. For example, an analyst who would otherwise commute for an hour could use part of that time for a focused planning session.",
    why: "Причина и пример объясняют эффект. Это авторский пример развития идеи, а не эссе с присвоенным band.",
    source: "ielts-criteria",
  },
  {
    id: "outweigh",
    title: "Outweigh требует сравнения",
    summary: "Список плюсов и минусов не отвечает на вопрос, что перевешивает.",
    steps: [
      "Выбери основание: масштаб, серьёзность или длительность эффекта.",
      "Объясни обе стороны.",
      "Сравни их по выбранному основанию.",
    ],
    weak: "There are benefits and drawbacks to video appointments.",
    strong:
      "Although video appointments cannot replace physical examinations, their ability to reduce routine travel is valuable for follow-up care. The benefits therefore outweigh the drawbacks when clinics reserve in-person appointments for cases that need examination.",
    why: "Вердикт и его границы ясны; показано, почему одна сторона сильнее при конкретном условии.",
    source: "ielts-criteria",
  },
  {
    id: "overview",
    title: "Overview — главная картина Task 1",
    summary:
      "Введение объясняет, что показано; overview сообщает, что главное в данных.",
    steps: [
      "Найди направление, лидера, исключение или крупную перемену.",
      "Выбери 2–3 основные особенности.",
      "Отдели общую картину от детальных чисел.",
    ],
    weak: "The chart shows transport use in Bellford in two years.",
    strong:
      "Overall, car use became less common while cycling gained popularity, and the proportion of people walking remained unchanged.",
    why: "Первое — введение. Второе сообщает тенденции и исключение, которое читатель должен запомнить.",
    source: "ielts-criteria",
  },
  {
    id: "accuracy",
    title: "Не меняй данные красивым словом",
    summary: "Точность важнее эффектной замены каждого слова.",
    steps: [
      "Проверь единицу и знаменатель процента.",
      "Отличи percentage points от percent.",
      "Не приписывай статическим категориям рост во времени.",
    ],
    weak: "Car use fell by 20 percent, from 55% to 35%.",
    strong:
      "The share of commuters travelling by car fell by 20 percentage points, from 55% to 35%.",
    why: "20 процентных пунктов — разница долей; относительное снижение было бы примерно 36%. Единица устраняет двусмысленность.",
    source: "ielts-criteria",
  },
  {
    id: "scope",
    title: "Не теряй вторую часть",
    summary:
      "Проверяй смысловые пары в условии, даже если инструкция состоит из одного вопроса.",
    steps: [
      "Найди and, both и plural nouns.",
      "Убедись, что оба участника или эффекта развиты.",
      "Проверь, что пример не охватывает только половину утверждения.",
    ],
    weak: "Schools should reduce pressure by giving less homework.",
    strong:
      "Schools can reduce unnecessary workload, while families can avoid treating every result as a judgement of the child’s ability. These actions address different sources of pressure.",
    why: "Когда вопрос просит меры schools and families, ответ только о школе остаётся неполным.",
    source: "ielts-criteria",
  },
  {
    id: "cohesion",
    title: "Связность не равна списку связок",
    summary:
      "Логика, местоимения и повтор ключевого понятия тоже связывают текст.",
    steps: [
      "Проверь порядок аргумент → объяснение → пример.",
      "Используй however только при реальном противопоставлении.",
      "Убери связки, которые ничего не добавляют.",
    ],
    weak: "Firstly, shared homes cost less. Moreover, however, privacy is difficult.",
    strong:
      "Shared homes allow tenants to divide rent and bills. This saving can be substantial, although sharing a kitchen and bathroom may reduce privacy.",
    why: "Отношения понятны из синтаксиса. Набор лишних связок не делает текст лучше.",
    source: "ielts-criteria",
  },
  {
    id: "vocabulary",
    title: "Точное простое слово лучше случайного сложного",
    summary: "Проверь сочетание и смысл, прежде чем использовать редкое слово.",
    steps: [
      "Сначала вырази мысль ясно.",
      "Проверь глагол + существительное и предлог.",
      "Избегай замены слова, если синоним меняет значение.",
    ],
    weak: "This policy will eradicate all educational problems.",
    strong:
      "This policy could reduce the gap between classroom learning and practical skills.",
    why: "Первое обещание чрезмерно и неточно; второе ограничивает масштаб и показывает конкретный эффект.",
    source: "ielts-criteria",
  },
  {
    id: "plan-time",
    title: "Планируй и оставляй время на проверку",
    summary:
      "Практический режим: 20 минут Task 1 и 40 минут Task 2 внутри общего часа.",
    steps: [
      "Выдели несколько минут на анализ и план.",
      "Пиши основную часть без постоянной перестройки введения.",
      "Оставь время проверить покрытие вопроса и частые ошибки.",
    ],
    weak: "I completely agree. However, the policy should not be introduced.",
    strong:
      "I support the policy in schools that can provide teacher training, but not as an immediate requirement for every school.",
    why: "Проверка согласованности позиции ценнее, чем добавление ещё одного красивого слова в последние минуты.",
    source: "ielts-criteria",
  },
  {
    id: "proofread",
    title: "Проверяй повторяющиеся ошибки",
    summary:
      "Одна системная ошибка в каждом предложении мешает сильнее, чем единичная оговорка.",
    steps: [
      "Проверь окончания и согласование.",
      "Найди обрывки предложений и comma splices.",
      "Проверь артикли, число существительных и знакомые сложные конструкции.",
    ],
    weak: "The number of commuters are increasing, they uses buses.",
    strong:
      "The number of commuters is increasing, and more of them are using buses.",
    why: "Подлежащее number требует is; независимые части соединены корректно. Это локальный пример, не оценка всего эссе.",
    source: "ielts-criteria",
  },
];

export const writingBankNotice = {
  checkedAt: "2026-10-10",
  title: "Темы для практики, а не прогноз экзамена",
  text: "Здесь авторские задания по распространённым темам IELTS. В проверенных официальных источниках не найден сезонный выпуск Writing тем за сентябрь–октябрь. Списки recalled и predicted topics на сторонних сайтах не подтверждают, что вопрос появится на экзамене. Официальные sample tasks и критерии открываются в разделе источников.",
  task1:
    "Все города, организации и данные в наших Task 1 вымышлены; тренируем описание информации, не обсуждаем реальные статистические факты.",
};
