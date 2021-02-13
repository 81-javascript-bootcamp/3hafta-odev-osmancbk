const petsModule = (function () {
  const _data = [
    {
      image: "https://pet-uploads.adoptapet.com/1/6/b/406528149.jpg",
      name: "Sam",
      type: "Golden Retriever/St. Bernard Mix",
      sound: "bark",
      soundText: "Bark - type b"
    },
    {
      image: "https://pet-uploads.adoptapet.com/0/f/3/462356648.jpg",
      name: "Mellie",
      type: "Domestic Shorthair",
      sound: "meow",
      soundText: "Meow - type m"
    },
    {
      image: 'https://pet-uploads.adoptapet.com/7/8/d/491948394.jpg',
      name: 'Hula',
      type: 'German Shepherd',
      sound: 'bark',
      soundText: 'Bark - type b',
    },
    {
      image: 'https://pet-uploads.adoptapet.com/d/a/b/408761775.jpg',
      name: 'Sam',
      type: 'Domestic Shorthair',
      sound: 'meow',
      soundText: 'Meow - type m',
    },

  ];
  const $tbodyEl = document.querySelector("tbody");
  const $buttons = document.querySelectorAll("button");
  const $barkSound = document.querySelector("#bark");
  const $meowSound = document.querySelector("#meow");
  const $mainImage = document.querySelector('.main-image')


  const playSound = function () {
    window.addEventListener('keydown', function (event) {
      if (event.key === 'm') {
        $meowSound.play()
      }
      if (event.key === 'b') {
        $barkSound.play()
      }

    })
  }

  const getButtons = function () {
    return document.querySelectorAll("button");
  }

  const createPetElement = function (pet) {
    return "<tr><td><img class='pet-image' src='" + pet.image + "' /></td><td>" + pet.name + "</td><td>" + pet.type + "</td><td><button data-sound='" + pet.sound + "'>" + pet.soundText + "</button></td></tr>"
  };

  const addToTable = function (content) {
    $tbodyEl.innerHTML += content;
  }

  const putPetsInHtml = function () {
    for (let i = 0; i < _data.length; i++) {
      addToTable(createPetElement(_data[i]));
    }
  }

  const bindEvents = function () {
    const buttons = getButtons();
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function (event) {
        event.stopPropagation() //
        const soundId = this.dataset.sound;
        const soundElement = document.getElementById(soundId);
        if (soundElement) {
          soundElement.play();
        }
      });
    }
    playSound();
    rowColor();
  }

  const deleteAllClasses = function (elements) {
    elements.forEach((row) => {
      row.classList.remove('row-color')
    })

  }


  const rowColor = function () {

    const $allRow = document.querySelectorAll('tbody > tr')

    $allRow.forEach((row) => {
      row.addEventListener('click', function () {
        deleteAllClasses($allRow);
        row.classList.add('row-color')
        $mainImage.src = row.querySelector('td > img').src

      })
    })

  }

  const init = function () {
    putPetsInHtml();
    bindEvents();
  }

  return {
    init: init
  }
})();