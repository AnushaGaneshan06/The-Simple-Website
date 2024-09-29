let speech = new SpeechSynthesisUtterance();

function speak() {

    speech.text = texttospeak.value;

    speech.rate = 1;
    speech.volume = 100;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);

}