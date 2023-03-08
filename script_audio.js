function saveSpeaker(speaker, emotion, dataset) {
    console.log(dataset.slice(0, -1))
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
    raw_data6.innerText = decodeURIComponent(`${speaker}, ${emotion}`)
    table6.appendChild(raw_data6)

    const table7 = document.querySelector(`#${dataset} #ref`)
    let raw_data7 = document.createElement('td')
    raw_data7.innerHTML = `<audio id="audio-player" controls="" preload="none" src="./wavs_${dataset.slice(0, -1)}/ref/${speaker}/ref.wav" type="audio/mpeg">`
    table7.appendChild(raw_data7)
}


const speakerArray_seen = [
    "0015_OES", "0023_KSH"
]

const speakerArray_unseen = [
    "N0262", "P0539"
]

const emotionArray = [
    "기쁨", "슬픔", "분노", "불안"
]

const emotionEnglish = [
    "happy", "sad", "angry", "anxious"
]

for (var i = 0; i < speakerArray_seen.length; i++) {
    let seen_speaker = speakerArray_seen[i]
    let unseen_speaker = speakerArray_unseen[i]
    for (var j = 0; j < emotionArray.length; j++){
        let emotion = emotionArray[j]
        saveSpeaker(seen_speaker, emotion, 'seen' + i.toString())
        saveSpeaker(unseen_speaker, emotion, 'unseen' + i.toString())
        //saveSpeaker(unseen_speaker, emotion, 'unseen_eng' + i.toString())
    }
}
