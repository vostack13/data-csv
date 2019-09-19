const fs = require("fs");
const csv = require("csv");
const _ = require('lodash');
const setNameOfCategory = require('./helpers/nameOfCategory');
const fileContent = fs.readFileSync("test.csv", "utf8");

// Парсинг исходного файла
csv.parse(fileContent, { delimiter: ';' }, (error, parseData) => {
    if(error)
        return console.error('Array parsing error. ', error);
    
    let data;

    if(_.isArray(parseData)) {
        data = _.chain(parseData)
            .filter(I => I[6] !== '')

            .map(row => {
                //Место
                const rank = row[0];

                //Фамилии Имя
                const fullName = row[1];

                //Дата рождения
                const dateOfBirth = row[3];

                //Квалификация
                const qualification = row[8];

                //Название клуба
                const fullNameClub = row[2];

                //Тренерский состав
                const coachingStaff = row[9];

                //Пол спортсмена
                const sex = row[4] === 'м' ? 'm' : 'f'

                //Пол категории
                const sexOfCategory = sex;

                //Минимальный и максимальный возраст в категории
                const [ minAgeCategory, maxAgeCategory ] = _.split(row[6], '-');

                //Название категории
                const nameOfCategory = setNameOfCategory.kumite(sexOfCategory, row[6], row[7], maxAgeCategory);

                return [
                    rank,
                    fullName,
                    dateOfBirth,
                    qualification,
                    fullNameClub,
                    coachingStaff,
                    nameOfCategory,
                ]
            })

            .groupBy(I => I[6])

            .reduce((result, value, key) => {
                // const users = _.map(value, I => _.slice(I, 0, 6));
                
                // console.log(_.orderBy(users));
                return [
                    ...result,
                    [[key]],
                    [['Место', 'Фамилия Имя', 'Дата рождения', 'Квалификация', 'Команда', 'ФИО тренера']],
                    [..._.orderBy(_.map(value, I => _.slice(I, 0, 6)))],
                    [['']],
                ]
            }, [])
            .flattenDepth(1)
            .value()
    }


    csv.stringify(data, { delimiter: ';' }, (err, stringifyData) => {
        // if(err)
        // 	throw new Error(err);

        fs.writeFile("total.csv", stringifyData, 'utf8', (err) => console.error(err))
    })
})