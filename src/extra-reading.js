// Original fictional practice passages, authored for this trainer. Not past IELTS exam papers.
export const extraPassages = [
  {
    "id": "seed-vault",
    "title": "Seeds for an uncertain future",
    "subtitle": "Количество, цель и неизвестный результат",
    "topic": "Природа и наука",
    "level": "Практика",
    "minutes": 12,
    "original": true,
    "paragraphs": [
      "At the fictional Alder Agricultural Institute, researchers established a regional seed bank in 2021. They collected seeds from 36 varieties of beans grown by small farms. Their aim was to preserve genetic diversity rather than supply commercial seed sellers. Farmers received copies of the collection records, but the institute retained the original samples. Each package carried a label identifying the farm and the date of collection. Participation was voluntary, and no farm was paid to contribute.",
      "The seeds were stored in sealed containers inside a cold room. Before storage, technicians removed damaged seeds and reduced their moisture content. Every six months, a sample from each variety was planted to check whether it could still germinate. After two years, 31 varieties maintained their initial germination rate; five showed a decline. The researchers did not compare these results with seeds kept in household cupboards. They warned that good performance in controlled storage did not guarantee successful growth in a field.",
      "The institute plans to add cereal crops next year. This expansion will require a second cold room, which a local foundation has agreed to fund. The existing bean collection will remain in place. Researchers also want to train farmers to keep smaller collections on their own land. They argue that preserving seeds in several locations would reduce the risk of losing an entire collection in one accident."
    ],
    "questions": [
      {
        "type": "tfng",
        "prompt": "Farmers were required to contribute seeds.",
        "answer": "FALSE",
        "paragraph": 0,
        "evidence": "Participation was voluntary",
        "explanation": "Required означает обязательно, voluntary — добровольно.",
        "anchors": [
          "required"
        ],
        "hint": "Найди предложение об условиях участия фермеров.",
        "alternatives": [],
        "teaching": {
          "anchor": "Найди предложение об условиях участия фермеров.",
          "paraphrases": [
            {
              "question": "required",
              "text": "voluntary"
            }
          ],
          "scope": [
            {
              "word": "required",
              "note": "Required означает обязательно, voluntary — добровольно."
            }
          ]
        }
      },
      {
        "type": "tfng",
        "prompt": "Most bean varieties retained their original germination rate.",
        "answer": "TRUE",
        "paragraph": 1,
        "evidence": "31 varieties maintained their initial germination rate",
        "explanation": "31 из 36 — большинство; maintained = retained.",
        "anchors": [
          "retained"
        ],
        "hint": "Сопоставь число сохранивших показатель с общим числом сортов.",
        "alternatives": [],
        "teaching": {
          "anchor": "Сопоставь число сохранивших показатель с общим числом сортов.",
          "paraphrases": [
            {
              "question": "retained",
              "text": "maintained"
            }
          ],
          "scope": [
            {
              "word": "Most",
              "note": "31 из 36 — большинство; maintained = retained."
            }
          ]
        }
      },
      {
        "type": "tfng",
        "prompt": "Seeds in the cold room performed better than those in cupboards.",
        "answer": "NOT GIVEN",
        "paragraph": 1,
        "evidence": "did not compare these results with seeds kept in household cupboards",
        "explanation": "Сравнение с домашним хранением не проводилось. Мы не знаем, где результат лучше.",
        "anchors": [
          "cupboards"
        ],
        "hint": "Ищи именно сравнение двух способов хранения.",
        "alternatives": [],
        "teaching": {
          "anchor": "Ищи именно сравнение двух способов хранения.",
          "paraphrases": [
            {
              "question": "cupboards",
              "text": "household cupboards"
            }
          ],
          "scope": [
            {
              "word": "better",
              "note": "Сравнение с домашним хранением не проводилось. Мы не знаем, где результат лучше."
            }
          ],
          "missing": "Сравнение с домашним хранением не проводилось. Мы не знаем, где результат лучше."
        }
      },
      {
        "type": "completion",
        "prompt": "Technicians reduced the seeds’ ___ before storage.",
        "answer": "moisture content",
        "paragraph": 1,
        "evidence": "reduced their moisture content",
        "explanation": "Нужны два слова: что именно уменьшали перед хранением.",
        "anchors": [
          "before storage"
        ],
        "hint": "Посмотри подготовку семян перед помещением в холодную комнату.",
        "alternatives": [],
        "teaching": {
          "anchor": "Посмотри подготовку семян перед помещением в холодную комнату.",
          "paraphrases": [
            {
              "question": "before storage",
              "text": "Before storage"
            }
          ],
          "scope": [
            {
              "word": "before storage",
              "note": "Нужны два слова: что именно уменьшали перед хранением."
            }
          ]
        },
        "limit": 2
      },
      {
        "type": "mc",
        "prompt": "What was the main purpose of the seed bank?",
        "answer": "Preserving genetic variety",
        "paragraph": 0,
        "evidence": "preserve genetic diversity rather than supply commercial seed sellers",
        "explanation": "Genetic variety перефразирует genetic diversity; продажа семян отвергнута.",
        "anchors": [
          "main purpose"
        ],
        "hint": "Найди цель проекта, а не способ хранения.",
        "alternatives": [],
        "teaching": {
          "anchor": "Найди цель проекта, а не способ хранения.",
          "paraphrases": [
            {
              "question": "main purpose",
              "text": "Their aim"
            }
          ],
          "scope": [
            {
              "word": "main",
              "note": "Genetic variety перефразирует genetic diversity; продажа семян отвергнута."
            }
          ]
        },
        "options": [
          "Supplying seed retailers",
          "Preserving genetic variety",
          "Paying local farmers"
        ]
      },
      {
        "type": "matching",
        "prompt": "Which paragraph describes a proposed expansion?",
        "answer": "C",
        "paragraph": 2,
        "evidence": "plans to add cereal crops next year",
        "explanation": "Расширение — добавление зерновых и второй комнаты в будущем.",
        "anchors": [
          "proposed expansion"
        ],
        "hint": "Отдели выполненную работу от будущих планов.",
        "alternatives": [],
        "teaching": {
          "anchor": "Отдели выполненную работу от будущих планов.",
          "paraphrases": [
            {
              "question": "proposed expansion",
              "text": "plans to add"
            }
          ],
          "scope": [
            {
              "word": "proposed",
              "note": "Расширение — добавление зерновых и второй комнаты в будущем."
            }
          ]
        }
      }
    ]
  },
  {
    "id": "urban-birds",
    "title": "Listening above the traffic",
    "subtitle": "Корреляция без доказательства причины",
    "topic": "Город и природа",
    "level": "Практика",
    "minutes": 12,
    "original": true,
    "paragraphs": [
      "In the fictional city of Merrow, a biology team recorded birdsong at twelve street corners and twelve garden sites. The recordings were made at dawn on dry weekdays during May. The team selected locations with similar numbers of trees, hoping to separate the effect of traffic from the availability of nesting places. Volunteers counted vehicles for fifteen minutes at each visit. They recorded the number of cars, not their speed, and did not visit the sites during the winter.",
      "At the busiest street sites, the researchers detected fewer low-pitched bird calls than in the gardens. High-pitched calls showed a smaller difference. This did not necessarily mean that fewer birds lived beside busy roads: traffic noise could simply make some calls harder to hear. The team therefore described its findings as a difference in recorded sound, rather than a census of bird populations. No individual birds were marked, and their movements between sites were not tracked.",
      "Dr Nia Patel suggested that quieter morning delivery schedules might make urban birds easier to study. She did not claim that changing delivery hours would increase the number of birds. The council agreed to test such a schedule in two streets for one month. Local businesses would still receive deliveries each day, but lorries would arrive after the recording period. Researchers intend to compare recordings before and during this trial using the same microphones."
    ],
    "questions": [
      {
        "type": "tfng",
        "prompt": "The study recorded birdsong during winter.",
        "answer": "FALSE",
        "paragraph": 0,
        "evidence": "did not visit the sites during the winter",
        "explanation": "Зимних посещений не было; May указывает месяц работы.",
        "anchors": [
          "winter"
        ],
        "hint": "Найди сезон наблюдений, а не время суток.",
        "alternatives": [],
        "teaching": {
          "anchor": "Найди сезон наблюдений, а не время суток.",
          "paraphrases": [
            {
              "question": "winter",
              "text": "during the winter"
            }
          ],
          "scope": [
            {
              "word": "during",
              "note": "Зимних посещений не было; May указывает месяц работы."
            }
          ]
        }
      },
      {
        "type": "tfng",
        "prompt": "Traffic might have concealed some bird calls.",
        "answer": "TRUE",
        "paragraph": 1,
        "evidence": "traffic noise could simply make some calls harder to hear",
        "explanation": "Might = could; concealed = harder to hear.",
        "anchors": [
          "concealed"
        ],
        "hint": "Проверь альтернативное объяснение меньшего числа записанных звуков.",
        "alternatives": [],
        "teaching": {
          "anchor": "Проверь альтернативное объяснение меньшего числа записанных звуков.",
          "paraphrases": [
            {
              "question": "concealed",
              "text": "harder to hear"
            }
          ],
          "scope": [
            {
              "word": "might",
              "note": "Might = could; concealed = harder to hear."
            }
          ]
        }
      },
      {
        "type": "tfng",
        "prompt": "Birds near roads moved to gardens more often than other birds.",
        "answer": "NOT GIVEN",
        "paragraph": 1,
        "evidence": "their movements between sites were not tracked",
        "explanation": "Перемещения птиц не отслеживали; частоту переездов сравнить нельзя.",
        "anchors": [
          "moved"
        ],
        "hint": "Ищи данные о перемещении конкретных птиц между местами.",
        "alternatives": [],
        "teaching": {
          "anchor": "Ищи данные о перемещении конкретных птиц между местами.",
          "paraphrases": [
            {
              "question": "moved",
              "text": "movements between sites"
            }
          ],
          "scope": [
            {
              "word": "more often",
              "note": "Перемещения птиц не отслеживали; частоту переездов сравнить нельзя."
            }
          ],
          "missing": "Перемещения птиц не отслеживали; частоту переездов сравнить нельзя."
        }
      },
      {
        "type": "completion",
        "prompt": "Volunteers counted vehicles for ___ at each visit.",
        "answer": "fifteen minutes",
        "paragraph": 0,
        "evidence": "counted vehicles for fifteen minutes",
        "explanation": "Укажи длительность подсчёта, а не число точек наблюдения.",
        "anchors": [
          "each visit"
        ],
        "hint": "Найди продолжительность одного подсчёта автомобилей.",
        "alternatives": [],
        "teaching": {
          "anchor": "Найди продолжительность одного подсчёта автомобилей.",
          "paraphrases": [
            {
              "question": "each visit",
              "text": "each visit"
            }
          ],
          "scope": [
            {
              "word": "for",
              "note": "Укажи длительность подсчёта, а не число точек наблюдения."
            }
          ]
        },
        "limit": 2
      },
      {
        "type": "mc",
        "prompt": "Why did the researchers choose sites with similar tree numbers?",
        "answer": "To limit a competing explanation",
        "paragraph": 0,
        "evidence": "separate the effect of traffic from the availability of nesting places",
        "explanation": "Одинаковое число деревьев помогает отделить шум от доступности мест для гнёзд.",
        "anchors": [
          "similar tree numbers"
        ],
        "hint": "Прочитай объяснение выбора похожих площадок.",
        "alternatives": [],
        "teaching": {
          "anchor": "Прочитай объяснение выбора похожих площадок.",
          "paraphrases": [
            {
              "question": "similar tree numbers",
              "text": "similar numbers of trees"
            }
          ],
          "scope": [
            {
              "word": "Why",
              "note": "Одинаковое число деревьев помогает отделить шум от доступности мест для гнёзд."
            }
          ]
        },
        "options": [
          "To increase microphone sensitivity",
          "To limit a competing explanation",
          "To count every bird"
        ]
      },
      {
        "type": "matching",
        "prompt": "Which paragraph presents a future test?",
        "answer": "C",
        "paragraph": 2,
        "evidence": "test such a schedule in two streets for one month",
        "explanation": "Будущий эксперимент с расписанием доставки описан в C.",
        "anchors": [
          "future test"
        ],
        "hint": "Ищи действие, которое совет согласился только попробовать.",
        "alternatives": [],
        "teaching": {
          "anchor": "Ищи действие, которое совет согласился только попробовать.",
          "paraphrases": [
            {
              "question": "future test",
              "text": "agreed to test"
            }
          ],
          "scope": [
            {
              "word": "future",
              "note": "Будущий эксперимент с расписанием доставки описан в C."
            }
          ]
        }
      }
    ]
  },
  {
    "id": "tool-library",
    "title": "Borrowing instead of buying",
    "subtitle": "Среднее, все участники и экономия",
    "topic": "Общество и экономика",
    "level": "Практика",
    "minutes": 12,
    "original": true,
    "paragraphs": [
      "The fictional Eastbank Tool Library opened in an empty shop in 2023. Members could borrow drills, ladders and gardening equipment after completing a short safety session. An annual membership cost thirty pounds, while individual loans carried no additional charge. Equipment had to be returned within seven days. The founders wanted to make occasional household repairs affordable, especially for residents who lacked storage space. They purchased some tools and received others as donations from local businesses.",
      "During its first year, the library recorded 940 loans to 210 members. Drills were borrowed more frequently than any other item. A survey of  eighty members found that most had avoided at least one purchase by borrowing. However, the survey did not ask how much money they had saved. Staff also noted that borrowed equipment was not always available immediately: waiting lists formed for ladders in the spring. The number of loans should therefore not be treated as the number of satisfied members.",
      "The library now offers monthly repair demonstrations led by a retired electrician. Attendance is optional and is not a condition of borrowing. A grant will pay for new shelves, but the library has not secured funding to extend its opening hours. The founders would like to introduce online reservations next year. Before doing so, they plan to ask members whether a digital system would be easier to use than the present telephone service."
    ],
    "questions": [
      {
        "type": "tfng",
        "prompt": "Members paid an extra fee each time they borrowed equipment.",
        "answer": "FALSE",
        "paragraph": 0,
        "evidence": "individual loans carried no additional charge",
        "explanation": "Членский взнос есть, но доплаты за каждую выдачу нет.",
        "anchors": [
          "extra fee"
        ],
        "hint": "Раздели ежегодное членство и цену отдельной выдачи.",
        "alternatives": [],
        "teaching": {
          "anchor": "Раздели ежегодное членство и цену отдельной выдачи.",
          "paraphrases": [
            {
              "question": "extra fee",
              "text": "no additional charge"
            }
          ],
          "scope": [
            {
              "word": "each time",
              "note": "Членский взнос есть, но доплаты за каждую выдачу нет."
            }
          ]
        }
      },
      {
        "type": "tfng",
        "prompt": "Drills were the library’s most frequently borrowed item.",
        "answer": "TRUE",
        "paragraph": 1,
        "evidence": "Drills were borrowed more frequently than any other item",
        "explanation": "More than any other item = самый часто выдаваемый предмет.",
        "anchors": [
          "most frequently"
        ],
        "hint": "Найди сравнение популярных инструментов.",
        "alternatives": [],
        "teaching": {
          "anchor": "Найди сравнение популярных инструментов.",
          "paraphrases": [
            {
              "question": "most frequently",
              "text": "more frequently than any other item"
            }
          ],
          "scope": [
            {
              "word": "most",
              "note": "More than any other item = самый часто выдаваемый предмет."
            }
          ]
        }
      },
      {
        "type": "tfng",
        "prompt": "Surveyed members saved an average of thirty pounds.",
        "answer": "NOT GIVEN",
        "paragraph": 1,
        "evidence": "did not ask how much money they had saved",
        "explanation": "Размер экономии не спрашивали. Thirty pounds — цена членства, а не средняя экономия.",
        "anchors": [
          "saved"
        ],
        "hint": "Проверь, измеряли ли сумму экономии в опросе.",
        "alternatives": [],
        "teaching": {
          "anchor": "Проверь, измеряли ли сумму экономии в опросе.",
          "paraphrases": [
            {
              "question": "saved",
              "text": "money they had saved"
            }
          ],
          "scope": [
            {
              "word": "average",
              "note": "Размер экономии не спрашивали. Thirty pounds — цена членства, а не средняя экономия."
            }
          ],
          "missing": "Размер экономии не спрашивали. Thirty pounds — цена членства, а не средняя экономия."
        }
      },
      {
        "type": "completion",
        "prompt": "Before borrowing, members completed a ___.",
        "answer": "safety session",
        "paragraph": 0,
        "evidence": "completing a short safety session",
        "explanation": "Нужна сама процедура; short необязательно и превысит лимит двух слов.",
        "anchors": [
          "Before borrowing"
        ],
        "hint": "Найди обязательную подготовку к получению инструментов.",
        "alternatives": [],
        "teaching": {
          "anchor": "Найди обязательную подготовку к получению инструментов.",
          "paraphrases": [
            {
              "question": "Before borrowing",
              "text": "after completing"
            }
          ],
          "scope": [
            {
              "word": "Before",
              "note": "Нужна сама процедура; short необязательно и превысит лимит двух слов."
            }
          ]
        },
        "limit": 2
      },
      {
        "type": "mc",
        "prompt": "What limitation did the staff identify?",
        "answer": "Some equipment required a wait",
        "paragraph": 1,
        "evidence": "waiting lists formed for ladders in the spring",
        "explanation": "Ожидание лестниц — проблема доступности; поломки не упомянуты.",
        "anchors": [
          "limitation"
        ],
        "hint": "Посмотри, что мешало немедленно получить оборудование.",
        "alternatives": [],
        "teaching": {
          "anchor": "Посмотри, что мешало немедленно получить оборудование.",
          "paraphrases": [
            {
              "question": "limitation",
              "text": "not always available immediately"
            }
          ],
          "scope": [
            {
              "word": "Some",
              "note": "Ожидание лестниц — проблема доступности; поломки не упомянуты."
            }
          ]
        },
        "options": [
          "All drills were broken",
          "Some equipment required a wait",
          "Members could borrow only once"
        ]
      },
      {
        "type": "matching",
        "prompt": "Which paragraph discusses possible service changes?",
        "answer": "C",
        "paragraph": 2,
        "evidence": "would like to introduce online reservations next year",
        "explanation": "Бронирование онлайн пока только планируется.",
        "anchors": [
          "possible service changes"
        ],
        "hint": "Найди ещё не введённую услугу библиотеки.",
        "alternatives": [],
        "teaching": {
          "anchor": "Найди ещё не введённую услугу библиотеки.",
          "paraphrases": [
            {
              "question": "possible service changes",
              "text": "would like to introduce"
            }
          ],
          "scope": [
            {
              "word": "possible",
              "note": "Бронирование онлайн пока только планируется."
            }
          ]
        }
      }
    ]
  },
  {
    "id": "festival-cups",
    "title": "The second life of a festival cup",
    "subtitle": "Многоразовое не значит без отходов",
    "topic": "Общество и экология",
    "level": "Практика",
    "minutes": 12,
    "original": true,
    "paragraphs": [
      "Organisers of the fictional Fern Music Festival replaced disposable drinking cups with reusable ones at three refreshment stalls. Other stalls kept their existing cups, creating a comparison group. Customers paid a two-pound deposit and received it back when they returned a reusable cup. The pilot lasted the entire two-day festival. Organisers hoped to reduce litter without making visitors carry their own containers. Clear signs explained the deposit, and a return desk remained open after the final performance.",
      "At the end of the event, 86 per cent of reusable cups had been returned. Litter counts were lower near the pilot stalls than near the comparison stalls. Nevertheless, the organisers did not measure the electricity or water used to wash the cups. They could not calculate the overall environmental impact of the scheme. Some visitors kept cups as souvenirs, while others reported difficulty finding the return desk. Staff did not determine which reason explained most of the missing cups.",
      "The next festival will use reusable cups at all refreshment stalls. Organisers plan to place return points beside each exit, rather than relying on a single desk. They will also record washing costs to assess whether the scheme is financially sustainable. The deposit will remain unchanged. Volunteers will explain that a cup can be returned to any collection point, even if it was purchased on the other side of the festival site."
    ],
    "questions": [
      {
        "type": "tfng",
        "prompt": "Every stall used reusable cups in the pilot.",
        "answer": "FALSE",
        "paragraph": 0,
        "evidence": "Other stalls kept their existing cups",
        "explanation": "Пилот был у трёх точек; остальные сохранили прежние стаканы.",
        "anchors": [
          "Every stall"
        ],
        "hint": "Найди границы пилотного проекта.",
        "alternatives": [],
        "teaching": {
          "anchor": "Найди границы пилотного проекта.",
          "paraphrases": [
            {
              "question": "Every stall",
              "text": "Other stalls"
            }
          ],
          "scope": [
            {
              "word": "Every",
              "note": "Пилот был у трёх точек; остальные сохранили прежние стаканы."
            }
          ]
        }
      },
      {
        "type": "tfng",
        "prompt": "Visitors could recover their deposit by returning a cup.",
        "answer": "TRUE",
        "paragraph": 0,
        "evidence": "received it back when they returned a reusable cup",
        "explanation": "Recover = получить назад; условие — возврат стакана.",
        "anchors": [
          "deposit"
        ],
        "hint": "Посмотри, когда возвращали двухфунтовый залог.",
        "alternatives": [],
        "teaching": {
          "anchor": "Посмотри, когда возвращали двухфунтовый залог.",
          "paraphrases": [
            {
              "question": "deposit",
              "text": "two-pound deposit"
            }
          ],
          "scope": [
            {
              "word": "could",
              "note": "Recover = получить назад; условие — возврат стакана."
            }
          ]
        }
      },
      {
        "type": "tfng",
        "prompt": "Washing the cups used less energy than producing disposable ones.",
        "answer": "NOT GIVEN",
        "paragraph": 1,
        "evidence": "did not measure the electricity or water used to wash the cups",
        "explanation": "Энергозатраты мытья не измеряли, сравнения с производством нет.",
        "anchors": [
          "Washing"
        ],
        "hint": "Ищи измеренное сравнение энергии, а не количество мусора.",
        "alternatives": [],
        "teaching": {
          "anchor": "Ищи измеренное сравнение энергии, а не количество мусора.",
          "paraphrases": [
            {
              "question": "Washing",
              "text": "wash the cups"
            }
          ],
          "scope": [
            {
              "word": "less energy",
              "note": "Энергозатраты мытья не измеряли, сравнения с производством нет."
            }
          ],
          "missing": "Энергозатраты мытья не измеряли, сравнения с производством нет."
        }
      },
      {
        "type": "completion",
        "prompt": "Some visitors retained cups as ___.",
        "answer": "souvenirs",
        "paragraph": 1,
        "evidence": "Some visitors kept cups as souvenirs",
        "explanation": "Retained = kept; впиши предметную причину сохранения стаканов.",
        "anchors": [
          "retained"
        ],
        "hint": "Найди одну названную причину невозврата стаканов.",
        "alternatives": [],
        "teaching": {
          "anchor": "Найди одну названную причину невозврата стаканов.",
          "paraphrases": [
            {
              "question": "retained",
              "text": "kept cups"
            }
          ],
          "scope": [
            {
              "word": "Some",
              "note": "Retained = kept; впиши предметную причину сохранения стаканов."
            }
          ]
        },
        "limit": 2
      },
      {
        "type": "mc",
        "prompt": "What will change at the next festival?",
        "answer": "The locations of return points",
        "paragraph": 2,
        "evidence": "place return points beside each exit",
        "explanation": "Меняется расположение пунктов; размер залога не меняется.",
        "anchors": [
          "will change"
        ],
        "hint": "Сравни следующие планы с правилами пилота.",
        "alternatives": [],
        "teaching": {
          "anchor": "Сравни следующие планы с правилами пилота.",
          "paraphrases": [
            {
              "question": "will change",
              "text": "plan to place"
            }
          ],
          "scope": [
            {
              "word": "next",
              "note": "Меняется расположение пунктов; размер залога не меняется."
            }
          ]
        },
        "options": [
          "The amount of the deposit",
          "The locations of return points",
          "The length of performances"
        ]
      },
      {
        "type": "matching",
        "prompt": "Which paragraph explains the limits of environmental conclusions?",
        "answer": "B",
        "paragraph": 1,
        "evidence": "could not calculate the overall environmental impact",
        "explanation": "Отсутствуют данные о мытье, поэтому общий экологический эффект неизвестен.",
        "anchors": [
          "limits"
        ],
        "hint": "Найди, чего организаторы пока не могут заключить.",
        "alternatives": [],
        "teaching": {
          "anchor": "Найди, чего организаторы пока не могут заключить.",
          "paraphrases": [
            {
              "question": "limits",
              "text": "did not measure"
            }
          ],
          "scope": [
            {
              "word": "overall",
              "note": "Отсутствуют данные о мытье, поэтому общий экологический эффект неизвестен."
            }
          ]
        }
      }
    ]
  },
  {
    "id": "remote-lessons",
    "title": "A classroom beyond the mountain",
    "subtitle": "Доступ к урокам и результат обучения",
    "topic": "Образование и технологии",
    "level": "Практика",
    "minutes": 12,
    "original": true,
    "paragraphs": [
      "In the fictional mountain district of Orin, a secondary school introduced recorded science lessons for pupils whose journeys were disrupted by snow. Lessons were copied onto memory cards because reliable internet access was uncommon. Families collected the cards from village shops each Monday. The recordings supplemented normal classes rather than replacing the school timetable. Teachers also supplied printed worksheets. Pupils were allowed to submit answers when they next attended school, so a missed bus did not automatically mean a missed deadline.",
      "Over one winter,  ninety pupils received the cards. Seventy-two returned at least one worksheet, and fifty-eight returned every worksheet. Teachers reported that diagrams were easier to follow when pupils could pause a recording. However, they did not administer a separate test before the programme began. They could not establish whether pupils learned more science than in previous winters. Several families shared one television, which sometimes prevented children from watching a lesson at the time they preferred.",
      "The school plans to produce audio versions of the lessons for families without screens. These versions will explain diagrams verbally, but teachers acknowledge that some experiments may be difficult to describe. The school will continue printing worksheets. A local charity has offered to lend portable players; it has not promised to give them away. Teachers intend to ask families about practical barriers before deciding how many players to obtain."
    ],
    "questions": [
      {
        "type": "tfng",
        "prompt": "The recordings replaced all classroom science teaching.",
        "answer": "FALSE",
        "paragraph": 0,
        "evidence": "supplemented normal classes rather than replacing the school timetable",
        "explanation": "Supplemented = дополняли; replacing прямо отрицается.",
        "anchors": [
          "replaced"
        ],
        "hint": "Найди роль записей относительно обычных занятий.",
        "alternatives": [],
        "teaching": {
          "anchor": "Найди роль записей относительно обычных занятий.",
          "paraphrases": [
            {
              "question": "replaced",
              "text": "rather than replacing"
            }
          ],
          "scope": [
            {
              "word": "all",
              "note": "Supplemented = дополняли; replacing прямо отрицается."
            }
          ]
        }
      },
      {
        "type": "tfng",
        "prompt": "A majority of participating pupils returned every worksheet.",
        "answer": "TRUE",
        "paragraph": 1,
        "evidence": "fifty-eight returned every worksheet",
        "explanation": "58 из 90 — больше половины. Не путай с 72, вернувшими хотя бы один лист.",
        "anchors": [
          "every worksheet"
        ],
        "hint": "Сопоставь завершивших все листы с числом участников.",
        "alternatives": [],
        "teaching": {
          "anchor": "Сопоставь завершивших все листы с числом участников.",
          "paraphrases": [
            {
              "question": "every worksheet",
              "text": "every worksheet"
            }
          ],
          "scope": [
            {
              "word": "majority",
              "note": "58 из 90 — больше половины. Не путай с 72, вернувшими хотя бы один лист."
            }
          ]
        }
      },
      {
        "type": "tfng",
        "prompt": "Pupils learned more science than in previous winters.",
        "answer": "NOT GIVEN",
        "paragraph": 1,
        "evidence": "could not establish whether pupils learned more science than in previous winters",
        "explanation": "Исходного теста не было; увеличение знаний по сравнению с прошлыми зимами не установлено.",
        "anchors": [
          "previous winters"
        ],
        "hint": "Проверь данные для сравнения именно уровня знаний.",
        "alternatives": [],
        "teaching": {
          "anchor": "Проверь данные для сравнения именно уровня знаний.",
          "paraphrases": [
            {
              "question": "previous winters",
              "text": "previous winters"
            }
          ],
          "scope": [
            {
              "word": "more",
              "note": "Исходного теста не было; увеличение знаний по сравнению с прошлыми зимами не установлено."
            }
          ],
          "missing": "Исходного теста не было; увеличение знаний по сравнению с прошлыми зимами не установлено."
        }
      },
      {
        "type": "completion",
        "prompt": "Lessons were distributed on ___.",
        "answer": "memory cards",
        "paragraph": 0,
        "evidence": "Lessons were copied onto memory cards",
        "explanation": "Носитель записей — memory cards; магазины являются пунктами выдачи.",
        "anchors": [
          "Lessons"
        ],
        "hint": "Найди носитель записей, а не место получения.",
        "alternatives": [],
        "teaching": {
          "anchor": "Найди носитель записей, а не место получения.",
          "paraphrases": [
            {
              "question": "Lessons",
              "text": "Lessons were copied"
            }
          ],
          "scope": [
            {
              "word": "on",
              "note": "Носитель записей — memory cards; магазины являются пунктами выдачи."
            }
          ]
        },
        "limit": 2
      },
      {
        "type": "mc",
        "prompt": "Why are audio lessons being considered?",
        "answer": "Some families lack screens",
        "paragraph": 2,
        "evidence": "for families without screens",
        "explanation": "Причина аудиоверсий — отсутствие экранов, а не прекращение печати.",
        "anchors": [
          "audio lessons"
        ],
        "hint": "Найди кому должны помочь аудиоверсии.",
        "alternatives": [],
        "teaching": {
          "anchor": "Найди кому должны помочь аудиоверсии.",
          "paraphrases": [
            {
              "question": "audio lessons",
              "text": "audio versions"
            }
          ],
          "scope": [
            {
              "word": "Why",
              "note": "Причина аудиоверсий — отсутствие экранов, а не прекращение печати."
            }
          ]
        },
        "options": [
          "Teachers will stop printing worksheets",
          "Some families lack screens",
          "All videos were lost"
        ]
      },
      {
        "type": "matching",
        "prompt": "Which paragraph describes a difficulty with access to equipment?",
        "answer": "B",
        "paragraph": 1,
        "evidence": "Several families shared one television",
        "explanation": "Общий телевизор ограничивал время просмотра урока.",
        "anchors": [
          "difficulty"
        ],
        "hint": "Найди бытовое препятствие, а не организацию выдачи.",
        "alternatives": [],
        "teaching": {
          "anchor": "Найди бытовое препятствие, а не организацию выдачи.",
          "paraphrases": [
            {
              "question": "difficulty",
              "text": "sometimes prevented children"
            }
          ],
          "scope": [
            {
              "word": "access",
              "note": "Общий телевизор ограничивал время просмотра урока."
            }
          ]
        }
      }
    ]
  },
  {
    "id": "wetland-records",
    "title": "Measuring a recovering wetland",
    "subtitle": "Место наблюдения и время выводов",
    "topic": "Природа и наука",
    "level": "Практика",
    "minutes": 12,
    "original": true,
    "paragraphs": [
      "In the fictional Lanton Wetland, conservation workers blocked three drainage channels in an attempt to retain more water. They installed measuring posts at ten locations before making the changes. Water levels were checked on the same day each week for eighteen months. The project also included monthly photographs from fixed viewpoints. These photographs helped staff observe changes in vegetation, but they were not used to identify individual animals. The workers published their measurements on a community noticeboard.",
      "Water levels rose at seven measuring posts and remained approximately unchanged at three. The largest increase occurred nearest the blocked channels. During the monitoring period, rainfall was higher than the long-term local average. The team therefore could not attribute all of the increase to its engineering work. It had no measurements from an untouched wetland for comparison. Staff also recorded the appearance of reeds in two previously bare areas, but did not assess whether wildlife numbers had increased.",
      "The next stage will involve measurements through two additional summers. Researchers want to find out whether the new water levels persist during dry weather. They will install a rain gauge within the wetland instead of relying entirely on readings from a station six kilometres away. No further channels will be blocked until these results are reviewed. Local volunteers will continue to help with the weekly observations after completing a training session."
    ],
    "questions": [
      {
        "type": "tfng",
        "prompt": "Water levels increased at every measuring post.",
        "answer": "FALSE",
        "paragraph": 1,
        "evidence": "remained approximately unchanged at three",
        "explanation": "Три точки почти не изменились, поэтому every неверно.",
        "anchors": [
          "every"
        ],
        "hint": "Проверь, распространяется ли увеличение на все точки.",
        "alternatives": [],
        "teaching": {
          "anchor": "Проверь, распространяется ли увеличение на все точки.",
          "paraphrases": [
            {
              "question": "every",
              "text": "unchanged at three"
            }
          ],
          "scope": [
            {
              "word": "every",
              "note": "Три точки почти не изменились, поэтому every неверно."
            }
          ]
        }
      },
      {
        "type": "tfng",
        "prompt": "Rainfall may have contributed to the rise in water levels.",
        "answer": "TRUE",
        "paragraph": 1,
        "evidence": "rainfall was higher than the long-term local average",
        "explanation": "Дождей было больше обычного; нельзя приписать всё инженерной работе.",
        "anchors": [
          "Rainfall"
        ],
        "hint": "Прочитай фактор, мешающий выделить одну причину подъёма воды.",
        "alternatives": [],
        "teaching": {
          "anchor": "Прочитай фактор, мешающий выделить одну причину подъёма воды.",
          "paraphrases": [
            {
              "question": "Rainfall",
              "text": "rainfall was higher"
            }
          ],
          "scope": [
            {
              "word": "may",
              "note": "Дождей было больше обычного; нельзя приписать всё инженерной работе."
            }
          ]
        }
      },
      {
        "type": "tfng",
        "prompt": "The number of wild animals increased after the channels were blocked.",
        "answer": "NOT GIVEN",
        "paragraph": 1,
        "evidence": "did not assess whether wildlife numbers had increased",
        "explanation": "Численность животных не оценивали. Появление тростника её не доказывает.",
        "anchors": [
          "wild animals"
        ],
        "hint": "Ищи именно подсчёт животных, а не изменения растений.",
        "alternatives": [],
        "teaching": {
          "anchor": "Ищи именно подсчёт животных, а не изменения растений.",
          "paraphrases": [
            {
              "question": "wild animals",
              "text": "wildlife numbers"
            }
          ],
          "scope": [
            {
              "word": "increased",
              "note": "Численность животных не оценивали. Появление тростника её не доказывает."
            }
          ],
          "missing": "Численность животных не оценивали. Появление тростника её не доказывает."
        }
      },
      {
        "type": "completion",
        "prompt": "The team will install a ___ inside the wetland.",
        "answer": "rain gauge",
        "paragraph": 2,
        "evidence": "install a rain gauge within the wetland",
        "explanation": "Inside = within. Не переписывай внешнюю станцию.",
        "anchors": [
          "inside the wetland"
        ],
        "hint": "Найди новый прибор следующего этапа наблюдений.",
        "alternatives": [],
        "teaching": {
          "anchor": "Найди новый прибор следующего этапа наблюдений.",
          "paraphrases": [
            {
              "question": "inside the wetland",
              "text": "within the wetland"
            }
          ],
          "scope": [
            {
              "word": "will",
              "note": "Inside = within. Не переписывай внешнюю станцию."
            }
          ]
        },
        "limit": 2
      },
      {
        "type": "mc",
        "prompt": "Why will monitoring continue through two more summers?",
        "answer": "To check persistence in dry conditions",
        "paragraph": 2,
        "evidence": "whether the new water levels persist during dry weather",
        "explanation": "Цель — устойчивость уровня в сухую погоду, не подсчёт туристов.",
        "anchors": [
          "two more summers"
        ],
        "hint": "Найди цель продления наблюдений.",
        "alternatives": [],
        "teaching": {
          "anchor": "Найди цель продления наблюдений.",
          "paraphrases": [
            {
              "question": "two more summers",
              "text": "two additional summers"
            }
          ],
          "scope": [
            {
              "word": "Why",
              "note": "Цель — устойчивость уровня в сухую погоду, не подсчёт туристов."
            }
          ]
        },
        "options": [
          "To compare visitor numbers",
          "To check persistence in dry conditions",
          "To remove all reeds"
        ]
      },
      {
        "type": "matching",
        "prompt": "Which paragraph describes the original observation methods?",
        "answer": "A",
        "paragraph": 0,
        "evidence": "Water levels were checked on the same day each week",
        "explanation": "Начальный протокол включает измерительные посты и фотографии.",
        "anchors": [
          "original observation methods"
        ],
        "hint": "Ищи как собирались данные на первом этапе.",
        "alternatives": [],
        "teaching": {
          "anchor": "Ищи как собирались данные на первом этапе.",
          "paraphrases": [
            {
              "question": "original observation methods",
              "text": "before making the changes"
            }
          ],
          "scope": [
            {
              "word": "original",
              "note": "Начальный протокол включает измерительные посты и фотографии."
            }
          ]
        }
      }
    ]
  },
  {
    "id": "archive-project",
    "title": "Reading the past together",
    "subtitle": "Добровольцы, точность и охват",
    "topic": "История и технологии",
    "level": "Практика",
    "minutes": 12,
    "original": true,
    "paragraphs": [
      "The fictional Heston Archive invited volunteers to transcribe handwritten letters from the nineteenth century. Images were placed on a website, allowing people to work from home. Each letter was assigned to two volunteers independently. If their versions differed, an archivist reviewed the disputed words. Volunteers were encouraged to leave uncertain passages blank instead of guessing. The project began with family correspondence because its vocabulary was generally more familiar than that of legal documents.",
      "In the first six months, volunteers completed 1,400 letters. The archive retained the original images alongside the transcriptions, so readers could check difficult passages themselves. A small accuracy check found fewer errors in letters with clear handwriting than in those with faded ink. This was not a comparison of volunteer age groups: the archive had not collected ages. Nor did the number of completed letters show how quickly any individual volunteer worked, because many people contributed only occasionally.",
      "The archive now intends to add shipping records to the project. These documents contain abbreviations that were not common in the family letters. Before volunteers begin, the archive will publish a glossary and several worked examples. Transcriptions will remain freely accessible. The director hopes eventually to link recurring names across documents, but this search feature has not been developed. For the present, users must search each transcription separately."
    ],
    "questions": [
      {
        "type": "tfng",
        "prompt": "Volunteers were expected to guess words they could not read.",
        "answer": "FALSE",
        "paragraph": 0,
        "evidence": "leave uncertain passages blank instead of guessing",
        "explanation": "Нужно оставлять пробел, а не угадывать.",
        "anchors": [
          "guess"
        ],
        "hint": "Найди инструкцию для неразборчивых участков письма.",
        "alternatives": [],
        "teaching": {
          "anchor": "Найди инструкцию для неразборчивых участков письма.",
          "paraphrases": [
            {
              "question": "guess",
              "text": "instead of guessing"
            }
          ],
          "scope": [
            {
              "word": "expected",
              "note": "Нужно оставлять пробел, а не угадывать."
            }
          ]
        }
      },
      {
        "type": "tfng",
        "prompt": "Readers could compare a transcription with its source image.",
        "answer": "TRUE",
        "paragraph": 1,
        "evidence": "retained the original images alongside the transcriptions",
        "explanation": "Оригиналы сохраняются рядом с расшифровкой для проверки.",
        "anchors": [
          "source image"
        ],
        "hint": "Проверь доступность исходных изображений читателю.",
        "alternatives": [],
        "teaching": {
          "anchor": "Проверь доступность исходных изображений читателю.",
          "paraphrases": [
            {
              "question": "source image",
              "text": "original images"
            }
          ],
          "scope": [
            {
              "word": "could",
              "note": "Оригиналы сохраняются рядом с расшифровкой для проверки."
            }
          ]
        }
      },
      {
        "type": "tfng",
        "prompt": "Younger volunteers made fewer transcription errors.",
        "answer": "NOT GIVEN",
        "paragraph": 1,
        "evidence": "the archive had not collected ages",
        "explanation": "Возраст не собирали; сравнить молодых и старших нельзя.",
        "anchors": [
          "Younger"
        ],
        "hint": "Ищи сведения именно о возрасте и частоте ошибок.",
        "alternatives": [],
        "teaching": {
          "anchor": "Ищи сведения именно о возрасте и частоте ошибок.",
          "paraphrases": [
            {
              "question": "Younger",
              "text": "ages"
            }
          ],
          "scope": [
            {
              "word": "fewer",
              "note": "Возраст не собирали; сравнить молодых и старших нельзя."
            }
          ],
          "missing": "Возраст не собирали; сравнить молодых и старших нельзя."
        }
      },
      {
        "type": "completion",
        "prompt": "Volunteers will receive a ___ to explain shipping abbreviations.",
        "answer": "glossary",
        "paragraph": 2,
        "evidence": "publish a glossary and several worked examples",
        "explanation": "Справочник терминов — glossary; examples — отдельное дополнение.",
        "anchors": [
          "shipping abbreviations"
        ],
        "hint": "Найди материал для незнакомых сокращений следующего этапа.",
        "alternatives": [],
        "teaching": {
          "anchor": "Найди материал для незнакомых сокращений следующего этапа.",
          "paraphrases": [
            {
              "question": "shipping abbreviations",
              "text": "abbreviations"
            }
          ],
          "scope": [
            {
              "word": "will",
              "note": "Справочник терминов — glossary; examples — отдельное дополнение."
            }
          ]
        },
        "limit": 2
      },
      {
        "type": "mc",
        "prompt": "Why were family letters chosen first?",
        "answer": "Their language was relatively familiar",
        "paragraph": 0,
        "evidence": "vocabulary was generally more familiar than that of legal documents",
        "explanation": "Причина — привычная лексика, не обязательно хорошее состояние бумаги.",
        "anchors": [
          "chosen first"
        ],
        "hint": "Найди объяснение начального выбора документов.",
        "alternatives": [],
        "teaching": {
          "anchor": "Найди объяснение начального выбора документов.",
          "paraphrases": [
            {
              "question": "chosen first",
              "text": "began with family correspondence"
            }
          ],
          "scope": [
            {
              "word": "Why",
              "note": "Причина — привычная лексика, не обязательно хорошее состояние бумаги."
            }
          ]
        },
        "options": [
          "Their paper was always undamaged",
          "Their language was relatively familiar",
          "They contained no names"
        ]
      },
      {
        "type": "matching",
        "prompt": "Which paragraph mentions an unavailable search function?",
        "answer": "C",
        "paragraph": 2,
        "evidence": "this search feature has not been developed",
        "explanation": "Связь повторяющихся имён пока только идея.",
        "anchors": [
          "unavailable search function"
        ],
        "hint": "Ищи функцию, которая ещё не реализована.",
        "alternatives": [],
        "teaching": {
          "anchor": "Ищи функцию, которая ещё не реализована.",
          "paraphrases": [
            {
              "question": "unavailable search function",
              "text": "search feature has not been developed"
            }
          ],
          "scope": [
            {
              "word": "unavailable",
              "note": "Связь повторяющихся имён пока только идея."
            }
          ]
        }
      }
    ]
  },
  {
    "id": "cool-pavements",
    "title": "A cooler surface is not the whole story",
    "subtitle": "Измерение не равно общему эффекту",
    "topic": "Город и экология",
    "level": "Практика",
    "minutes": 12,
    "original": true,
    "paragraphs": [
      "In the fictional city of Selwick, engineers painted a pale coating on one section of a pedestrian square. An adjacent section kept its dark surface. Sensors measured surface temperature at noon and at four in the afternoon throughout July. Both sections received similar amounts of sunlight. The coating was designed to reflect more solar energy, but engineers also wanted to know whether pedestrians found the change comfortable. The square remained open while the experiment took place.",
      "On clear days, the coated surface was usually cooler than the uncoated section. During cloudy weather, the difference was smaller. However, these were surface measurements rather than readings of the air at head height. The team did not measure temperatures inside surrounding buildings. Some visitors complained that the pale surface caused glare, while others welcomed its cooler feel. The survey did not ask which visitors wore sunglasses, and it did not establish the proportion of all square users who preferred the coating.",
      "The city will test a less reflective coating on a smaller site next spring. This version may reduce glare but may also provide less cooling. Engineers plan to measure air temperature as well as surface temperature, using shaded instruments. They will publish the two sets of readings separately. The existing trial section will remain in place until its durability has been assessed through winter. No decision has been made to coat the entire square."
    ],
    "questions": [
      {
        "type": "tfng",
        "prompt": "The coated and uncoated areas received similar sunlight.",
        "answer": "TRUE",
        "paragraph": 0,
        "evidence": "Both sections received similar amounts of sunlight",
        "explanation": "Both sections = две сравниваемые зоны; условия освещения похожи.",
        "anchors": [
          "similar sunlight"
        ],
        "hint": "Найди условия сравнения двух участков площади.",
        "alternatives": [],
        "teaching": {
          "anchor": "Найди условия сравнения двух участков площади.",
          "paraphrases": [
            {
              "question": "similar sunlight",
              "text": "similar amounts of sunlight"
            }
          ],
          "scope": [
            {
              "word": "similar",
              "note": "Both sections = две сравниваемые зоны; условия освещения похожи."
            }
          ]
        }
      },
      {
        "type": "tfng",
        "prompt": "The experiment measured air temperature at head height.",
        "answer": "FALSE",
        "paragraph": 1,
        "evidence": "surface measurements rather than readings of the air at head height",
        "explanation": "Замеряли поверхность, прямо противопоставляя этому температуру воздуха.",
        "anchors": [
          "head height"
        ],
        "hint": "Раздели температуру поверхности и воздуха.",
        "alternatives": [],
        "teaching": {
          "anchor": "Раздели температуру поверхности и воздуха.",
          "paraphrases": [
            {
              "question": "head height",
              "text": "head height"
            }
          ],
          "scope": [
            {
              "word": "measured",
              "note": "Замеряли поверхность, прямо противопоставляя этому температуру воздуха."
            }
          ]
        }
      },
      {
        "type": "tfng",
        "prompt": "The coating reduced temperatures inside nearby buildings.",
        "answer": "NOT GIVEN",
        "paragraph": 1,
        "evidence": "did not measure temperatures inside surrounding buildings",
        "explanation": "Температуру зданий не измеряли. Более прохладная поверхность не доказывает охлаждение помещений.",
        "anchors": [
          "nearby buildings"
        ],
        "hint": "Проверь измерения внутри зданий, а не на площади.",
        "alternatives": [],
        "teaching": {
          "anchor": "Проверь измерения внутри зданий, а не на площади.",
          "paraphrases": [
            {
              "question": "nearby buildings",
              "text": "surrounding buildings"
            }
          ],
          "scope": [
            {
              "word": "reduced",
              "note": "Температуру зданий не измеряли. Более прохладная поверхность не доказывает охлаждение помещений."
            }
          ],
          "missing": "Температуру зданий не измеряли. Более прохладная поверхность не доказывает охлаждение помещений."
        }
      },
      {
        "type": "completion",
        "prompt": "Some visitors reported that the coating produced ___.",
        "answer": "glare",
        "paragraph": 1,
        "evidence": "the pale surface caused glare",
        "explanation": "Produced = caused; речь о зрительном неудобстве.",
        "anchors": [
          "produced"
        ],
        "hint": "Найди жалобу на побочный эффект светлого покрытия.",
        "alternatives": [],
        "teaching": {
          "anchor": "Найди жалобу на побочный эффект светлого покрытия.",
          "paraphrases": [
            {
              "question": "produced",
              "text": "caused"
            }
          ],
          "scope": [
            {
              "word": "Some",
              "note": "Produced = caused; речь о зрительном неудобстве."
            }
          ]
        },
        "limit": 2
      },
      {
        "type": "mc",
        "prompt": "What is a potential disadvantage of the next coating?",
        "answer": "A smaller cooling effect",
        "paragraph": 2,
        "evidence": "may also provide less cooling",
        "explanation": "Меньше отражение может уменьшить охлаждение. Это вероятность, не установленный результат.",
        "anchors": [
          "potential disadvantage"
        ],
        "hint": "Найди возможный компромисс новой версии покрытия.",
        "alternatives": [],
        "teaching": {
          "anchor": "Найди возможный компромисс новой версии покрытия.",
          "paraphrases": [
            {
              "question": "potential disadvantage",
              "text": "may also provide less cooling"
            }
          ],
          "scope": [
            {
              "word": "potential",
              "note": "Меньше отражение может уменьшить охлаждение. Это вероятность, не установленный результат."
            }
          ]
        },
        "options": [
          "A smaller cooling effect",
          "Permanent closure of the square",
          "More sunlight reaching the site"
        ]
      },
      {
        "type": "matching",
        "prompt": "Which paragraph describes the design of the first experiment?",
        "answer": "A",
        "paragraph": 0,
        "evidence": "Sensors measured surface temperature at noon",
        "explanation": "A описывает сравниваемые участки, приборы и время наблюдений.",
        "anchors": [
          "design"
        ],
        "hint": "Ищи устройство первого эксперимента, а не его результаты.",
        "alternatives": [],
        "teaching": {
          "anchor": "Ищи устройство первого эксперимента, а не его результаты.",
          "paraphrases": [
            {
              "question": "design",
              "text": "Sensors measured"
            }
          ],
          "scope": [
            {
              "word": "first",
              "note": "A описывает сравниваемые участки, приборы и время наблюдений."
            }
          ]
        }
      }
    ]
  },
  {
    "id": "food-labels",
    "title": "Labels that people can use",
    "subtitle": "Намерение, покупка и реальное потребление",
    "topic": "Общество и здоровье",
    "level": "Практика",
    "minutes": 12,
    "original": true,
    "paragraphs": [
      "At the fictional Westhaven College, a cafeteria tested labels showing the estimated carbon footprint of lunch dishes. The labels used three coloured circles rather than exact numbers. They appeared beside prices for four weeks. Recipes and prices stayed unchanged, so the cafeteria could examine whether the additional information influenced choices. Customers were not required to read the labels or complete a questionnaire. The estimates included ingredient production and transport, but excluded energy used in the cafeteria kitchen.",
      "Sales of the lowest-rated dishes increased during the trial compared with the previous four weeks. Managers cautioned that the weather had also become warmer, and lighter meals might have been more attractive for that reason. The sales records showed what was purchased, not how much food was eaten or discarded. A voluntary survey suggested that some customers misunderstood the colours as nutrition ratings. The team did not collect enough responses to estimate how common this misunderstanding was among all customers.",
      "Before extending the scheme, managers will add a short explanation of what the colours mean. They also plan to weigh leftovers, keeping that information separate from sales figures. A student group has requested exact carbon numbers, but the cafeteria has not agreed to replace the coloured circles. Staff argue that precise-looking figures could conceal uncertainty in the estimates. They intend to review the scheme after a second four-week trial rather than commit to permanent labels immediately."
    ],
    "questions": [
      {
        "type": "tfng",
        "prompt": "Meal prices changed when carbon labels were introduced.",
        "answer": "FALSE",
        "paragraph": 0,
        "evidence": "Recipes and prices stayed unchanged",
        "explanation": "Цены не менялись; изменилось только дополнительное описание.",
        "anchors": [
          "prices"
        ],
        "hint": "Найди, какие условия сохраняли одинаковыми во время опыта.",
        "alternatives": [],
        "teaching": {
          "anchor": "Найди, какие условия сохраняли одинаковыми во время опыта.",
          "paraphrases": [
            {
              "question": "prices",
              "text": "prices stayed unchanged"
            }
          ],
          "scope": [
            {
              "word": "changed",
              "note": "Цены не менялись; изменилось только дополнительное описание."
            }
          ]
        }
      },
      {
        "type": "tfng",
        "prompt": "The carbon estimates left out energy used in the kitchen.",
        "answer": "TRUE",
        "paragraph": 0,
        "evidence": "excluded energy used in the cafeteria kitchen",
        "explanation": "Left out = excluded. Производство ингредиентов включено, кухня — нет.",
        "anchors": [
          "left out"
        ],
        "hint": "Проверь границы расчёта углеродного следа.",
        "alternatives": [],
        "teaching": {
          "anchor": "Проверь границы расчёта углеродного следа.",
          "paraphrases": [
            {
              "question": "left out",
              "text": "excluded"
            }
          ],
          "scope": [
            {
              "word": "kitchen",
              "note": "Left out = excluded. Производство ингредиентов включено, кухня — нет."
            }
          ]
        }
      },
      {
        "type": "tfng",
        "prompt": "Customers ate a larger proportion of the food they bought during the trial.",
        "answer": "NOT GIVEN",
        "paragraph": 1,
        "evidence": "not how much food was eaten or discarded",
        "explanation": "Учёт продаж не показывает, сколько еды действительно съели. Доли потребления неизвестны.",
        "anchors": [
          "ate"
        ],
        "hint": "Раздели купленное и съеденное количество еды.",
        "alternatives": [],
        "teaching": {
          "anchor": "Раздели купленное и съеденное количество еды.",
          "paraphrases": [
            {
              "question": "ate",
              "text": "food was eaten"
            }
          ],
          "scope": [
            {
              "word": "larger proportion",
              "note": "Учёт продаж не показывает, сколько еды действительно съели. Доли потребления неизвестны."
            }
          ],
          "missing": "Учёт продаж не показывает, сколько еды действительно съели. Доли потребления неизвестны."
        }
      },
      {
        "type": "completion",
        "prompt": "Some customers mistook the colours for ___.",
        "answer": "nutrition ratings",
        "paragraph": 1,
        "evidence": "misunderstood the colours as nutrition ratings",
        "explanation": "Mistook for = misunderstood as; нужны два слова из текста.",
        "anchors": [
          "mistook"
        ],
        "hint": "Найди, какой смысл ошибочно приписывали цветным меткам.",
        "alternatives": [],
        "teaching": {
          "anchor": "Найди, какой смысл ошибочно приписывали цветным меткам.",
          "paraphrases": [
            {
              "question": "mistook",
              "text": "misunderstood"
            }
          ],
          "scope": [
            {
              "word": "Some",
              "note": "Mistook for = misunderstood as; нужны два слова из текста."
            }
          ]
        },
        "limit": 2
      },
      {
        "type": "mc",
        "prompt": "Why are staff cautious about exact carbon figures?",
        "answer": "They may hide uncertainty",
        "paragraph": 2,
        "evidence": "precise-looking figures could conceal uncertainty",
        "explanation": "Hide = conceal; цифры могут создавать ложную точность.",
        "anchors": [
          "exact carbon figures"
        ],
        "hint": "Найди возражение против точных чисел, а не против самих меток.",
        "alternatives": [],
        "teaching": {
          "anchor": "Найди возражение против точных чисел, а не против самих меток.",
          "paraphrases": [
            {
              "question": "exact carbon figures",
              "text": "precise-looking figures"
            }
          ],
          "scope": [
            {
              "word": "may",
              "note": "Hide = conceal; цифры могут создавать ложную точность."
            }
          ]
        },
        "options": [
          "They always cost more to print",
          "They may hide uncertainty",
          "They cannot be placed beside prices"
        ]
      },
      {
        "type": "matching",
        "prompt": "Which paragraph describes proposed improvements?",
        "answer": "C",
        "paragraph": 2,
        "evidence": "add a short explanation of what the colours mean",
        "explanation": "Уточнение меток и учёт остатков — планы следующего этапа.",
        "anchors": [
          "proposed improvements"
        ],
        "hint": "Ищи, что будут менять до расширения программы.",
        "alternatives": [],
        "teaching": {
          "anchor": "Ищи, что будут менять до расширения программы.",
          "paraphrases": [
            {
              "question": "proposed improvements",
              "text": "plan to weigh leftovers"
            }
          ],
          "scope": [
            {
              "word": "proposed",
              "note": "Уточнение меток и учёт остатков — планы следующего этапа."
            }
          ]
        }
      }
    ]
  },
  {
    "id": "beehive-sensors",
    "title": "A signal from the hive",
    "subtitle": "Раннее предупреждение и подтверждение",
    "topic": "Природа и технологии",
    "level": "Практика",
    "minutes": 12,
    "original": true,
    "paragraphs": [
      "In the fictional valley of Trell, beekeepers attached small temperature sensors to twenty hives. The devices sent a reading every ten minutes to a receiver in a nearby shed. They were intended to alert keepers to unusual conditions without requiring them to open each hive. The sensors were powered by rechargeable batteries, not solar panels. Keepers continued their normal inspections throughout the trial, which ran from April to September. A neighbouring group maintained another twenty hives without sensors.",
      "Several alerts occurred when afternoon temperatures rose sharply. Most were followed by normal conditions the next morning. In three cases, keepers found that hive entrances were partly obstructed and removed the obstacles. The team did not claim that every alert indicated a serious problem. Honey yields were recorded only for the monitored hives, so the trial could not establish whether sensors increased production compared with the neighbouring group. Researchers also found that weak radio reception sometimes delayed an alert.",
      "For the following season, the team will test receivers at different heights to improve communication. The sensors themselves will remain inside the hives. Beekeepers want an additional humidity reading, but the researchers have not yet chosen a suitable device. They emphasise that an alert should prompt an inspection rather than replace a keeper’s judgement. Training will include examples of harmless temperature changes, helping users avoid responding to every notification as an emergency."
    ],
    "questions": [
      {
        "type": "tfng",
        "prompt": "Solar panels supplied power to the sensors.",
        "answer": "FALSE",
        "paragraph": 0,
        "evidence": "powered by rechargeable batteries, not solar panels",
        "explanation": "Источник питания указан прямо: аккумуляторы, не солнечные панели.",
        "anchors": [
          "Solar panels"
        ],
        "hint": "Найди источник энергии устройств, а не место приёмника.",
        "alternatives": [],
        "teaching": {
          "anchor": "Найди источник энергии устройств, а не место приёмника.",
          "paraphrases": [
            {
              "question": "Solar panels",
              "text": "not solar panels"
            }
          ],
          "scope": [
            {
              "word": "supplied power",
              "note": "Источник питания указан прямо: аккумуляторы, не солнечные панели."
            }
          ]
        }
      },
      {
        "type": "tfng",
        "prompt": "Some alerts were delayed by poor reception.",
        "answer": "TRUE",
        "paragraph": 1,
        "evidence": "weak radio reception sometimes delayed an alert",
        "explanation": "Poor = weak; some = sometimes.",
        "anchors": [
          "poor reception"
        ],
        "hint": "Проверь названную техническую проблему уведомлений.",
        "alternatives": [],
        "teaching": {
          "anchor": "Проверь названную техническую проблему уведомлений.",
          "paraphrases": [
            {
              "question": "poor reception",
              "text": "weak radio reception"
            }
          ],
          "scope": [
            {
              "word": "Some",
              "note": "Poor = weak; some = sometimes."
            }
          ]
        }
      },
      {
        "type": "tfng",
        "prompt": "Monitored hives produced more honey than unmonitored hives.",
        "answer": "NOT GIVEN",
        "paragraph": 1,
        "evidence": "Honey yields were recorded only for the monitored hives",
        "explanation": "У контрольной группы сбор мёда не записывали; сравнить две группы нельзя.",
        "anchors": [
          "more honey"
        ],
        "hint": "Ищи показатели производства обеих групп ульев.",
        "alternatives": [],
        "teaching": {
          "anchor": "Ищи показатели производства обеих групп ульев.",
          "paraphrases": [
            {
              "question": "more honey",
              "text": "Honey yields"
            }
          ],
          "scope": [
            {
              "word": "than",
              "note": "У контрольной группы сбор мёда не записывали; сравнить две группы нельзя."
            }
          ],
          "missing": "У контрольной группы сбор мёда не записывали; сравнить две группы нельзя."
        }
      },
      {
        "type": "completion",
        "prompt": "The devices sent readings every ___.",
        "answer": "ten minutes",
        "paragraph": 0,
        "evidence": "sent a reading every ten minutes",
        "explanation": "Это частота передачи, не срок эксперимента.",
        "anchors": [
          "readings"
        ],
        "hint": "Найди интервал между сообщениями датчика.",
        "alternatives": [],
        "teaching": {
          "anchor": "Найди интервал между сообщениями датчика.",
          "paraphrases": [
            {
              "question": "readings",
              "text": "a reading"
            }
          ],
          "scope": [
            {
              "word": "every",
              "note": "Это частота передачи, не срок эксперимента."
            }
          ]
        },
        "limit": 2
      },
      {
        "type": "mc",
        "prompt": "How should keepers respond to an alert?",
        "answer": "Inspect the hive",
        "paragraph": 2,
        "evidence": "an alert should prompt an inspection",
        "explanation": "Уведомление — повод проверить улей, не доказательство аварии.",
        "anchors": [
          "an alert"
        ],
        "hint": "Найди рекомендуемое действие после уведомления.",
        "alternatives": [],
        "teaching": {
          "anchor": "Найди рекомендуемое действие после уведомления.",
          "paraphrases": [
            {
              "question": "an alert",
              "text": "an alert should prompt"
            }
          ],
          "scope": [
            {
              "word": "should",
              "note": "Уведомление — повод проверить улей, не доказательство аварии."
            }
          ]
        },
        "options": [
          "Immediately discard all honey",
          "Inspect the hive",
          "Stop all normal inspections"
        ]
      },
      {
        "type": "matching",
        "prompt": "Which paragraph describes future technical tests?",
        "answer": "C",
        "paragraph": 2,
        "evidence": "test receivers at different heights",
        "explanation": "Менять и тестировать будут высоту приёмников в следующем сезоне.",
        "anchors": [
          "future technical tests"
        ],
        "hint": "Ищи техническое изменение следующего сезона.",
        "alternatives": [],
        "teaching": {
          "anchor": "Ищи техническое изменение следующего сезона.",
          "paraphrases": [
            {
              "question": "future technical tests",
              "text": "following season"
            }
          ],
          "scope": [
            {
              "word": "future",
              "note": "Менять и тестировать будут высоту приёмников в следующем сезоне."
            }
          ]
        }
      }
    ]
  },
  {
    "id": "leak-detection",
    "title": "Finding water that never arrives",
    "subtitle": "Обнаружение, точность и стоимость",
    "topic": "Город и технологии",
    "level": "Практика",
    "minutes": 12,
    "original": true,
    "paragraphs": [
      "The fictional town of Glenmar tested acoustic sensors on six underground water pipes. Small microphones recorded vibrations at night, when household water use was usually low. Engineers compared recordings from different points along each pipe to estimate where a leak might be located. The equipment was intended to narrow the search area before workers dug up a road. It could not repair leaks by itself. Residents continued to receive water throughout the monitoring period, although short interruptions were necessary during repairs.",
      "The system identified eight possible leak locations. Excavation confirmed leaks at six of them; the other two signals came from nearby machinery. These false alarms showed that a strong sound was not sufficient evidence of escaping water. Once repairs were complete, less water entered the tested pipes overnight. Engineers considered this consistent with reduced leakage. They did not calculate whether the money saved on water exceeded the cost of installing the sensors, which had been borrowed for the trial.",
      "The council plans another trial in an area with older pipes. Engineers will include recordings of known machinery sounds to help distinguish them from leaks. They also intend to measure installation and maintenance costs. A permanent system would require new funding, and the council has not yet approved a purchase. Residents will receive advance notices about roadworks, but the precise repair locations can only be announced after the sensor results have been checked."
    ],
    "questions": [
      {
        "type": "tfng",
        "prompt": "The sensors repaired leaks automatically.",
        "answer": "FALSE",
        "paragraph": 0,
        "evidence": "It could not repair leaks by itself",
        "explanation": "Датчики находят вероятное место, ремонт выполняют рабочие.",
        "anchors": [
          "repaired leaks"
        ],
        "hint": "Раздели обнаружение и устранение утечки.",
        "alternatives": [],
        "teaching": {
          "anchor": "Раздели обнаружение и устранение утечки.",
          "paraphrases": [
            {
              "question": "repaired leaks",
              "text": "could not repair leaks"
            }
          ],
          "scope": [
            {
              "word": "automatically",
              "note": "Датчики находят вероятное место, ремонт выполняют рабочие."
            }
          ]
        }
      },
      {
        "type": "tfng",
        "prompt": "Some suspected leaks were actually machinery noise.",
        "answer": "TRUE",
        "paragraph": 1,
        "evidence": "the other two signals came from nearby machinery",
        "explanation": "Два сигнала оказались шумом оборудования, а не водой.",
        "anchors": [
          "machinery noise"
        ],
        "hint": "Найди объяснение неподтверждённых сигналов.",
        "alternatives": [],
        "teaching": {
          "anchor": "Найди объяснение неподтверждённых сигналов.",
          "paraphrases": [
            {
              "question": "machinery noise",
              "text": "nearby machinery"
            }
          ],
          "scope": [
            {
              "word": "Some",
              "note": "Два сигнала оказались шумом оборудования, а не водой."
            }
          ]
        }
      },
      {
        "type": "tfng",
        "prompt": "Water savings were worth more than the sensor installation costs.",
        "answer": "NOT GIVEN",
        "paragraph": 1,
        "evidence": "did not calculate whether the money saved on water exceeded the cost",
        "explanation": "Финансовое сравнение не делали; снижение расхода не доказывает окупаемость.",
        "anchors": [
          "installation costs"
        ],
        "hint": "Проверь именно денежную выгоду относительно затрат.",
        "alternatives": [],
        "teaching": {
          "anchor": "Проверь именно денежную выгоду относительно затрат.",
          "paraphrases": [
            {
              "question": "installation costs",
              "text": "cost of installing the sensors"
            }
          ],
          "scope": [
            {
              "word": "more than",
              "note": "Финансовое сравнение не делали; снижение расхода не доказывает окупаемость."
            }
          ],
          "missing": "Финансовое сравнение не делали; снижение расхода не доказывает окупаемость."
        }
      },
      {
        "type": "completion",
        "prompt": "Microphones recorded pipe vibrations at ___.",
        "answer": "night",
        "paragraph": 0,
        "evidence": "recorded vibrations at night",
        "explanation": "Время замеров — night; overnight относится к итоговому расходу.",
        "anchors": [
          "recorded"
        ],
        "hint": "Найди время записи микрофонами.",
        "alternatives": [],
        "teaching": {
          "anchor": "Найди время записи микрофонами.",
          "paraphrases": [
            {
              "question": "recorded",
              "text": "recorded vibrations"
            }
          ],
          "scope": [
            {
              "word": "at",
              "note": "Время замеров — night; overnight относится к итоговому расходу."
            }
          ]
        },
        "limit": 2
      },
      {
        "type": "mc",
        "prompt": "What was the main practical role of the sensors?",
        "answer": "Reducing the area to investigate",
        "paragraph": 0,
        "evidence": "narrow the search area before workers dug up a road",
        "explanation": "Reducing area = narrow search area. Датчики не заменяют раскопки.",
        "anchors": [
          "practical role"
        ],
        "hint": "Найди практическую цель применения датчиков перед ремонтом.",
        "alternatives": [],
        "teaching": {
          "anchor": "Найди практическую цель применения датчиков перед ремонтом.",
          "paraphrases": [
            {
              "question": "practical role",
              "text": "intended to narrow the search area"
            }
          ],
          "scope": [
            {
              "word": "main",
              "note": "Reducing area = narrow search area. Датчики не заменяют раскопки."
            }
          ]
        },
        "options": [
          "Replacing every pipe",
          "Reducing the area to investigate",
          "Avoiding every water interruption"
        ]
      },
      {
        "type": "matching",
        "prompt": "Which paragraph describes proposed methods to reduce false alarms?",
        "answer": "C",
        "paragraph": 2,
        "evidence": "include recordings of known machinery sounds",
        "explanation": "Известные шумы оборудования помогут отличать их от утечек.",
        "anchors": [
          "reduce false alarms"
        ],
        "hint": "Ищи улучшение распознавания сигналов следующего испытания.",
        "alternatives": [],
        "teaching": {
          "anchor": "Ищи улучшение распознавания сигналов следующего испытания.",
          "paraphrases": [
            {
              "question": "reduce false alarms",
              "text": "distinguish them from leaks"
            }
          ],
          "scope": [
            {
              "word": "proposed",
              "note": "Известные шумы оборудования помогут отличать их от утечек."
            }
          ]
        }
      }
    ]
  },
  {
    "id": "night-museum",
    "title": "Art after ordinary hours",
    "subtitle": "Новая аудитория и неизвестные привычки",
    "topic": "Культура и общество",
    "level": "Практика",
    "minutes": 12,
    "original": true,
    "paragraphs": [
      "The fictional Brindle Gallery began opening until nine o’clock on one Thursday each month. Normal daytime opening hours were unchanged. The evening sessions included short talks but no additional admission charge. Staff hoped to attract people who worked during the day and rarely visited galleries. To learn about attendance, visitors could complete a card at the entrance. The card asked whether this was their first visit, how they had heard about the session and what time they arrived.",
      "Across the first four evening sessions, the gallery counted 620 visits. Cards returned by 240 visitors indicated that about a third were visiting for the first time. Because completing a card was optional, the gallery did not assume that the same proportion applied to everyone who attended. Several respondents mentioned coming directly from work. However, the card did not ask whether people usually visited other galleries. Staff could not distinguish newcomers to this gallery from newcomers to art exhibitions in general.",
      "The gallery plans to continue the evening sessions for another six months. It will introduce a reservation system for talks because seating was limited, although ordinary gallery entry will not require booking. A local transport group has offered to display the session dates on bus-stop notices. Staff will compare the next attendance figures with the earlier sessions, while acknowledging that changes in weather and exhibitions could also influence visitor numbers."
    ],
    "questions": [
      {
        "type": "tfng",
        "prompt": "Visitors paid an extra admission fee for the evening sessions.",
        "answer": "FALSE",
        "paragraph": 0,
        "evidence": "no additional admission charge",
        "explanation": "Поздние сеансы не добавляли плату за вход.",
        "anchors": [
          "extra admission fee"
        ],
        "hint": "Найди стоимость вечернего посещения, а не время работы.",
        "alternatives": [],
        "teaching": {
          "anchor": "Найди стоимость вечернего посещения, а не время работы.",
          "paraphrases": [
            {
              "question": "extra admission fee",
              "text": "no additional admission charge"
            }
          ],
          "scope": [
            {
              "word": "extra",
              "note": "Поздние сеансы не добавляли плату за вход."
            }
          ]
        }
      },
      {
        "type": "tfng",
        "prompt": "The gallery did not treat survey respondents as representative of all attendees.",
        "answer": "TRUE",
        "paragraph": 1,
        "evidence": "did not assume that the same proportion applied to everyone",
        "explanation": "Добровольные ответы нельзя автоматически обобщить на всех посетителей.",
        "anchors": [
          "all attendees"
        ],
        "hint": "Прочитай ограничение, связанное с добровольными карточками.",
        "alternatives": [],
        "teaching": {
          "anchor": "Прочитай ограничение, связанное с добровольными карточками.",
          "paraphrases": [
            {
              "question": "all attendees",
              "text": "everyone who attended"
            }
          ],
          "scope": [
            {
              "word": "all",
              "note": "Добровольные ответы нельзя автоматически обобщить на всех посетителей."
            }
          ]
        }
      },
      {
        "type": "tfng",
        "prompt": "Most first-time visitors had never visited any art gallery.",
        "answer": "NOT GIVEN",
        "paragraph": 1,
        "evidence": "did not ask whether people usually visited other galleries",
        "explanation": "Первый визит в эту галерею не означает первый визит в любую галерею. Данных о других местах нет.",
        "anchors": [
          "any art gallery"
        ],
        "hint": "Раздели первое посещение этого места и отсутствие опыта вообще.",
        "alternatives": [],
        "teaching": {
          "anchor": "Раздели первое посещение этого места и отсутствие опыта вообще.",
          "paraphrases": [
            {
              "question": "any art gallery",
              "text": "other galleries"
            }
          ],
          "scope": [
            {
              "word": "Most",
              "note": "Первый визит в эту галерею не означает первый визит в любую галерею. Данных о других местах нет."
            }
          ],
          "missing": "Первый визит в эту галерею не означает первый визит в любую галерею. Данных о других местах нет."
        }
      },
      {
        "type": "completion",
        "prompt": "Future talks will use a ___ because seats are limited.",
        "answer": "reservation system",
        "paragraph": 2,
        "evidence": "introduce a reservation system for talks",
        "explanation": "Бронировать нужно лекции, не обычный вход в галерею.",
        "anchors": [
          "Future talks"
        ],
        "hint": "Найди изменение для мероприятий с ограниченным числом мест.",
        "alternatives": [],
        "teaching": {
          "anchor": "Найди изменение для мероприятий с ограниченным числом мест.",
          "paraphrases": [
            {
              "question": "Future talks",
              "text": "for talks"
            }
          ],
          "scope": [
            {
              "word": "Future",
              "note": "Бронировать нужно лекции, не обычный вход в галерею."
            }
          ]
        },
        "limit": 2
      },
      {
        "type": "mc",
        "prompt": "What was the purpose of the later opening?",
        "answer": "Reaching people busy during the day",
        "paragraph": 0,
        "evidence": "attract people who worked during the day",
        "explanation": "Цель — дневные работники; обычные часы не сокращались.",
        "anchors": [
          "purpose"
        ],
        "hint": "Найди, какую аудиторию хотели привлечь.",
        "alternatives": [],
        "teaching": {
          "anchor": "Найди, какую аудиторию хотели привлечь.",
          "paraphrases": [
            {
              "question": "purpose",
              "text": "Staff hoped to attract"
            }
          ],
          "scope": [
            {
              "word": "later",
              "note": "Цель — дневные работники; обычные часы не сокращались."
            }
          ]
        },
        "options": [
          "Reducing daytime opening hours",
          "Reaching people busy during the day",
          "Charging higher ticket prices"
        ]
      },
      {
        "type": "matching",
        "prompt": "Which paragraph describes future publicity arrangements?",
        "answer": "C",
        "paragraph": 2,
        "evidence": "display the session dates on bus-stop notices",
        "explanation": "Реклама дат на автобусных остановках — будущая договорённость.",
        "anchors": [
          "future publicity"
        ],
        "hint": "Ищи планы распространения информации, а не итоги карточек.",
        "alternatives": [],
        "teaching": {
          "anchor": "Ищи планы распространения информации, а не итоги карточек.",
          "paraphrases": [
            {
              "question": "future publicity",
              "text": "display the session dates"
            }
          ],
          "scope": [
            {
              "word": "future",
              "note": "Реклама дат на автобусных остановках — будущая договорённость."
            }
          ]
        }
      }
    ]
  }
];
