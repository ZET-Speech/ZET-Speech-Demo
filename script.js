function saveSpeaker(script, dataset) {
    const table1 = document.querySelector(`#${dataset}`)
    var new_row = table1.insertRow(-1)

    // let new_row = document.createElement('tr')
    // table1.appendChild(new_row)

    let raw_text = document.createElement('td')
    raw_text.className = 'first-col'
    fetch(`./wavs/scripts/${script}.txt`)
    .then( response => response.text() )
    .then( text => raw_text.innerText = text )
    new_row.appendChild(raw_text)
    // table1.tBodies[0].appendChild(raw_text)

    let raw_data1 = document.createElement('td')
    raw_data1.innerHTML = `<audio id="audio-player" controls="" preload="none" src="./wavs/reference/${script}.wav" type="audio/mpeg">`
    new_row.appendChild(raw_data1)

    let raw_data2 = document.createElement('td')
    raw_data2.innerHTML = `<audio id="audio-player" controls="" preload="none" src="./wavs/preppie_before/${script+1}_sr.wav" type="audio/mpeg">`
    new_row.appendChild(raw_data2)

    let raw_data3 = document.createElement('td')
    raw_data3.innerHTML = `<audio id="audio-player" controls="" preload="none" src="./wavs/preppie/${script+1}_sr.wav" type="audio/mpeg">`
    new_row.appendChild(raw_data3)

    let raw_data4 = document.createElement('td')
    raw_data4.innerHTML = `<audio id="audio-player" controls="" preload="none" src="./wavs/ryuhyun/${script+1}_sr.wav" type="audio/mpeg">`
    new_row.appendChild(raw_data4)

    let raw_data5 = document.createElement('td')
    raw_data5.innerHTML = `<audio id="audio-player" controls="" preload="none" src="./wavs/chosonghee/${script+1}_sr.wav" type="audio/mpeg">`
    new_row.appendChild(raw_data5)
}

for (var i = 0; i < 30; i++) {
    // let script = scriptArray[i]
    let script = i
    saveSpeaker(script, 'vctk')
}