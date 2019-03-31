const fs = require("fs");
const csv = require("csv");
const _ = require('lodash');

const fileContent = fs.readFileSync("test.csv", "utf8");

// Парсинг исходного файла
csv.parse(fileContent, { delimiter: ';' }, (error, parseData) => {
	if(error)
		return console.error('Array parsing error. ', error);
	
	let data;

	if(_.isArray(parseData)) {
		data = _.map(parseData, row => {
			//Полное название клуба
			const fullNameClub = row[2];
			
			//Короткое название клуба
			const shortNameClub = row[2];

			//Официальное сокращение страны клуба
			const codeCounry = 'RUS';

			//Разбиение Фамилии и Имя
			const [ firstName, lastName ] = row[1].split(' ');

			//Пол спортсмена
			const sex = row[3] === 'м' ? 'm' : 'f'

			//Дата рождения
			const [ dayBirth, monthBirth, yearBirth ] = row[4].split('.');
			const dateOfBirth = _.join([yearBirth, monthBirth, dayBirth], '-');

			return [
				fullNameClub,
				shortNameClub,
				codeCounry,
				lastName,
				firstName,
				sex,
				dateOfBirth,
			]
		})
	}
	
	csv.stringify(data, { delimiter: ';' }, (err, stringifyData) => {
		fs.writeFile("output.csv", stringifyData, 'utf8', () => {})
	})
})