function comparison(speaker, emotion, emotion_eng, dataset) {
    const table1 = document.querySelector(`#${dataset} #a`)
    let raw_data = document.createElement('td')
    raw_data.innerHTML = `<audio id="audio-player" controls="" preload="none" src="./wavs_${dataset.slice(0, -1)}/gss/${speaker}/${emotion}.wav" type="audio/mpeg">`
    table1.appendChild(raw_data)
    
    const table2 = document.querySelector(`#${dataset} #b`)
    let raw_data2 = document.createElement('td')
    raw_data2.innerHTML = `<audio id="audio-player" controls="" preload="none" src="./wavs_${dataset.slice(0, -1)}/cg/${speaker}/${emotion}.wav" type="audio/mpeg">`
    table2.appendChild(raw_data2)
    
    const table3 = document.querySelector(`#${dataset} #c`)
    let raw_data3 = document.createElement('td')
    raw_data3.innerHTML = `<audio id="audio-player" controls="" preload="none" src="./wavs_${dataset.slice(0, -1)}/cfg/${speaker}/${emotion}.wav" type="audio/mpeg">`    
    table3.appendChild(raw_data3)
    
    const table0 = document.querySelector(`#${dataset} #text`)
    let raw_data0 = document.createElement('td')
    fetch(`./wavs_${dataset.slice(0, -1)}/${speaker}/script.txt`)
    .then( response => response.text() )
    .then( text => raw_data0.innerText = text )
    table0.appendChild(raw_data0)

    const table6 = document.querySelector(`#${dataset} #speaker`)
    let raw_data6 = document.createElement('td')
    raw_data6.innerText = decodeURIComponent(`${speaker}, ${emotion_eng}`)
    table6.appendChild(raw_data6)

    const table7 = document.querySelector(`#${dataset} #ref`)
    let raw_data7 = document.createElement('td')
    raw_data7.innerHTML = `<audio id="audio-player" controls="" preload="none" src="./wavs_${dataset.slice(0, -1)}/cfg/${speaker}/ref.wav" type="audio/mpeg">`
    table7.appendChild(raw_data7)
}


function allEmotion(speaker, dataset, kor) {
    const table10 = document.querySelector(`#${dataset} #ref`)
    let raw_data10 = document.createElement('td')
    raw_data10.innerHTML = `<audio id="audio-player" controls="" preload="none" src="./wavs_${dataset.slice(0, -4)}/cfg/${speaker}/$ref.wav" type="audio/mpeg">`
    table10.appendChild(raw_data10)

    const table1 = document.querySelector(`#${dataset} #a`)
    let raw_data = document.createElement('td')
    raw_data.innerHTML = `<audio id="audio-player" controls="" preload="none" src="./wavs_${dataset.slice(0, -4)}/cfg/${speaker}/$무감정.wav" type="audio/mpeg">`
    table1.appendChild(raw_data)
    
    const table2 = document.querySelector(`#${dataset} #b`)
    let raw_data2 = document.createElement('td')
    raw_data2.innerHTML = `<audio id="audio-player" controls="" preload="none" src="./wavs_${dataset.slice(0, -4)}/cfg/${speaker}/$기쁨.wav" type="audio/mpeg">`
    table2.appendChild(raw_data2)
    
    const table3 = document.querySelector(`#${dataset} #c`)
    let raw_data3 = document.createElement('td')
    raw_data3.innerHTML = `<audio id="audio-player" controls="" preload="none" src="./wavs_${dataset.slice(0, -4)}/cfg/${speaker}/$슬픔.wav" type="audio/mpeg">`    
    table3.appendChild(raw_data3)

    const table4 = document.querySelector(`#${dataset} #d`)
    let raw_data4 = document.createElement('td')
    raw_data4.innerHTML = `<audio id="audio-player" controls="" preload="none" src="./wavs_${dataset.slice(0, -4)}/cfg/${speaker}/$분노.wav" type="audio/mpeg">`    
    table4.appendChild(raw_data4)

    const table5 = document.querySelector(`#${dataset} #e`)
    let raw_data5 = document.createElement('td')
    raw_data5.innerHTML = `<audio id="audio-player" controls="" preload="none" src="./wavs_${dataset.slice(0, -4)}/cfg/${speaker}/$불안.wav" type="audio/mpeg">`    
    table5.appendChild(raw_data5)
    
    // if (kor) {
    const table6 = document.querySelector(`#${dataset} #f`)
    let raw_data6 = document.createElement('td')
    raw_data6.innerHTML = `<audio id="audio-player" controls="" preload="none" src="./wavs_${dataset.slice(0, -4)}/cfg/${speaker}/$상처.wav" type="audio/mpeg">`    
    table6.appendChild(raw_data6)
    
    const table7 = document.querySelector(`#${dataset} #g`)
    let raw_data7 = document.createElement('td')
    raw_data7.innerHTML = `<audio id="audio-player" controls="" preload="none" src="./wavs_${dataset.slice(0, -4)}/cfg/${speaker}/$당황.wav" type="audio/mpeg">`    
    table7.appendChild(raw_data7)
    // }
    
    // const table0 = document.querySelector(`#${dataset} #text`)
    // let raw_data0 = document.createElement('td')
    // fetch(`./wavs_${dataset}/${speaker}/script.txt`)
    // .then( response => response.text() )
    // .then( text => raw_data0.innerText = text )
    // table0.appendChild(raw_data0)

    const table8 = document.querySelector(`#${dataset} #speaker`)
    let raw_data8 = document.createElement('td')
    raw_data8.innerText = decodeURIComponent(`${speaker}`)
    table8.appendChild(raw_data8)
}

const comparisionEmotion_eng = [
    'Happy', 'Sad', 'Angry', 'Anxious'
]

const comparisonSeenSpeaker = [
    "0015_OES", "0023_KSH"
]
const comparisonUnseenSpeaker = [
    "N0262", "P0539"
]
const comparisionEmotion = [
    "기쁨", "슬픔", "분노", "불안"
]

for (var i = 0; i < comparisonSeenSpeaker.length; i++) {
    let seen_speaker = comparisonSeenSpeaker[i]
    let unseen_speaker = comparisonUnseenSpeaker[i]
    for (var j = 0; j < comparisionEmotion.length; j++){
        let emotion = comparisionEmotion[j]
        let emotion_eng = comparisionEmotion_eng[j]
        comparison(seen_speaker, emotion, emotion_eng, 'seen' + i.toString())
        comparison(unseen_speaker, emotion, emotion_eng, 'unseen' + i.toString())
    }
}

const allEngUnseenSpeaker = [
    "237", "1089", "1284", "2300"
]

const allSeenSpeaker = [
    "0016_YSH", "0002_LYT", "0017_LSY", "0024_PGJ"
]
const allUnseenSpeaker = [
    "S0071", "P0570", "S0098", "P0943"
]
const allKorEmotion = [
    "무감정", "기쁨", "슬픔", "분노", "불안", "상처", "당황"
]

for (var i = 0; i < allSeenSpeaker.length; i++) {
    let seen_speaker = allSeenSpeaker[i]
    let unseen_speaker = allUnseenSpeaker[i]
    let unseen_eng_speaker = allEngUnseenSpeaker[i]

    allEmotion(seen_speaker, 'seen_kor', true)
    allEmotion(unseen_speaker, 'unseen_kor', true)
    allEmotion(unseen_eng_speaker, 'unseen_eng', false)
}
