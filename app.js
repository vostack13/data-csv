const fs = require("fs");
const csv = require("csv");
const _ = require('lodash');
const setNameOfCategory = require('./helpers/nameOfCategory');
const fileContent = fs.readFileSync("sourceToSD.csv", "utf8");

// Парсинг исходного файла
csv.parse(fileContent, { delimiter: ';' }, (error, parseData) => {
	if(error)
		return console.error('Array parsing error. ', error);
	
	let data;

	if(_.isArray(parseData)) {
		data = _.map(_.filter(parseData, I => I[6] !== ''), row => {
			//Полное название клуба
			const fullNameClub = row[1];

			//Короткое название клуба
			const shortNameClub = row[1];

			//Официальное сокращение страны клуба
			const codeCounry = 'RUS';

			//Разбиение Фамилии и Имя
			const [ firstName, lastName ] = _.split(row[0], ' ');

			//Пол спортсмена
			const sex = row[3] === 'м' ? 'm' : 'f'

			//Дата рождения
			const [ dayBirth, monthBirth, yearBirth ] = _.split(row[2], '.');
			const dateOfBirth = _.join([yearBirth, monthBirth, dayBirth], '-');

			//Пол категории
			const sexOfCategory = sex;

			//Минимальный и максимальный возраст в категории
			const [ minAgeCategory, maxAgeCategory ] = _.split(row[5], '-');

			//Название категории
			const nameOfCategory = setNameOfCategory.kumite(sexOfCategory, row[5], row[6], maxAgeCategory);

			return [
				fullNameClub,
				shortNameClub,
				codeCounry,
				lastName,
				firstName,
				sex,
				dateOfBirth,
				nameOfCategory,
				sexOfCategory,
				'',
				'',
				_.parseInt(minAgeCategory),
				_.parseInt(maxAgeCategory) + 1,
			]
		})
	}
	
	csv.stringify(data, { delimiter: ';' }, (err, stringifyData) => {
		// if(err)
		// 	throw new Error(err);

		fs.writeFile("output.csv", stringifyData, 'utf8', (err) => console.error(err))
	})
})