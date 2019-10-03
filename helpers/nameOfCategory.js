exports.kumite = (sexOfCategory, ageGroup, weightCategoty, maxAgeCategory) => {
    let sex = 'm' ? 'м' : 'д';

    if(maxAgeCategory <= 9)
        sex = sexOfCategory === 'm' ? 'мальчики' : 'девочки';

    if(maxAgeCategory > 9 && maxAgeCategory <= 17)
        sex = sexOfCategory === 'm' ? 'юноши' : 'девушки';

    if(weightCategoty !== 'АБС')
        weightCategoty = `${weightCategoty} кг.`;

    return `Кумитэ ${sex} ${ageGroup} лет ${weightCategoty}`
};
