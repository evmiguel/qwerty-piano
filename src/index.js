import { Howl, Howler } from 'howler';

const notes = document.getElementById('sound');

var sound = new Howl({
  src: ['do.wav']
});

document.onkeydown = e => {
  if (e.code === 'KeyC') {
    notes.innerText = "C"
    sound.play()
  }
};

document.onkeyup = e => {
  notes.innerText = "";
}



