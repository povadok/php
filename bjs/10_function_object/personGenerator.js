const personGenerator = {
    surnameJson: `{  
        "count": 16,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Елена",
            "id_2": "Галина",
            "id_3": "Юлия",
            "id_4": "Валентина",
            "id_5": "Александра",
            "id_6": "Евгения",
            "id_7": "Дарья",
            "id_8": "Софья",
            "id_9": "Мария",
            "id_10": "Элина"
        }
    }`,

    patronymicNameJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александров",
            "id_2": "Максимов",
            "id_3": "Иванов",
            "id_4": "Артемов",
            "id_5": "Дмитриев",
            "id_6": "Никитов",
            "id_7": "Михайлов",
            "id_8": "Даниилов",
            "id_9": "Егоров",
            "id_10": "Андреев"
        }
    }`,

    professionMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Инженер",
            "id_2": "Автослесарь",
            "id_3": "Водитель",
            "id_4": "Начальник цеха",
            "id_5": "Акробат",
            "id_6": "Комбайнер",
            "id_7": "Охранник",
            "id_8": "Програмист",
            "id_9": "Фермер",
            "id_10": "Технолог"
        }
    }`,

    professionFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Доярка",
            "id_2": "Инженер-конструктор",
            "id_3": "Технолог",
            "id_4": "Продавец",
            "id_5": "Супервайзер",
            "id_6": "Парикмахер",
            "id_7": "Повар",
            "id_8": "Торговый представитель",
            "id_9": "Визажист",
            "id_10": "Ветеринар"
        }
    }`,

    monthOfBurthJson: `{
        "count": 12,
        "list": {     
            "id_1": "января",
            "id_2": "февраля",
            "id_3": "марта",
            "id_4": "апреля",
            "id_5": "мая",
            "id_6": "июня",
            "id_7": "июля",
            "id_8": "августа",
            "id_9": "сентября",
            "id_10": "октября",
            "id_11": "ноября",
            "id_12": "декабря"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    leapYear: [2028, 2024, 2020, 2016, 2012, 2008, 2004, 2000, 1996, 1992, 1988, 1984, 1980, 1976, 1972, 1968, 1964, 1960, 1956, 1952, 1948, 1944, 1940, 1936, 1932, 1928, 1924, 1920, 1916, 1912, 1908, 1904],

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`; // this = personGenerator
        return obj.list[prop];
    },

    randomGender: function () {
        return this.randomIntNumber() ? this.GENDER_MALE : this.GENDER_FEMALE;
    },

    randomFirstName: function () {
        if (this.person.gender == 'Мужчина') {
            return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFemaleJson)
        };
    },


    randomPatronymicName: function () {
        let patronymicName = this.randomValue(this.patronymicNameJson);
        if (this.person.gender == 'Мужчина') {
            return `${patronymicName}ич`;
        } else {
            return `${patronymicName}на`;
        }

    },

    randomSurname: function () {
        let surname = this.randomValue(this.surnameJson);
        if (this.person.gender == 'Мужчина') {
            return surname;
        } else {
            return `${surname}а`;
        }
    },

    randomProfession: function () {
        if (this.person.gender == 'Мужчина') {
            return this.randomValue(this.professionMaleJson);
        } else {
            return this.randomValue(this.professionFemaleJson);
        }
    },

    randomBurth: function () {
        let yearOfBirth = this.randomIntNumber(1960, 2003);
        let monthOfBirth = this.randomValue(this.monthOfBurthJson);
        let dateOfBirth;
        if (monthOfBirth == 'апреля' || 'июня' || 'октября' || 'ноября') {
            dateOfBirth = this.randomIntNumber(1, 30);
        } else if (monthOfBirth == 'февраля') {
            if (this.leapYear.includes(yearOfBirth)) {
                dateOfBirth = this.randomIntNumber(1, 29);
            } else {
                dateOfBirth = this.randomIntNumber(1, 28);
            }
        } else {
            retdateOfBirth = this.randomIntNumber(1, 31);
        };
        return `${dateOfBirth} ${monthOfBirth} ${yearOfBirth}`

    },


    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.patronymicName = this.randomPatronymicName();
        this.person.surname = this.randomSurname();
        this.person.profession = this.randomProfession();
        this.person.burth = this.randomBurth();

        return this.person;
    }
};