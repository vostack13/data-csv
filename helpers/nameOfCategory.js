exports.kumite = (sexOfCategory, ageGroup, weightCategoty, maxAgeCategory) => {
    let sex = 'm' ? 'м' : 'д';

    if(maxAgeCategory <= 11)
        sex = sexOfCategory === 'm' ? 'мальчики' : 'девочки';

    if(maxAgeCategory > 11 && maxAgeCategory <= 17)
        sex = sexOfCategory === 'm' ? 'юноши' : 'девушки';

    if(maxAgeCategory > 17)
        sex = sexOfCategory === 'm' ? 'юниоры' : 'юниорки';

    if(weightCategoty !== 'АБС')
        weightCategoty = `${weightCategoty} кг.`;

    return `Кумитэ ${sex} ${ageGroup} лет ${weightCategoty}`
};