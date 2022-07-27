const hambuger = document.querySelector('.hambuger');

const navMenu = document.querySelector('.nav-menu');
hambuger.addEventListener('click', () => {
  hambuger.classList.toggle('active');
  navMenu.classList.toggle('active');
  document.getElementById("bdy-bg").style.display = "none";
  const btn1 = document.getElementById('wkbtn1');
  const btn2 = document.getElementById('wkbtn2');
  const btn3 = document.getElementById('wkbtn3');
  const btn4 = document.getElementById('wkbtn4');

  const worksArray = [
    {
      id: '0',
      title: 'Tonic',
      close: '\u00D7',
      subheadText1: 'CANOPY',
      subheadText2: 'Back End Dev',
      subheadText3: '2015',
      image1: 'images/another1.svg',
      image2: 'images/work-1-pop.png',
      paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
      paragraph2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
      language1: 'html',
      language2: 'css',
      language3: 'javaScript',
      language4: 'github',
      language5: 'ruby',
      language6: 'bootstrap',
      liveBtn: 'https://normainobary2021.github.io/',
      sourceBtn: 'https://github.com/normainobary2021/my-portfolio',
    },
  
    {
      id: '1',
      title: 'Multi-Post Stories',
      close: '\u00D7',
      subheadText1: 'CANOPY',
      subheadText2: 'Back End Dev',
      subheadText3: '2015',
      image1: 'images/work2.svg',
      image2: 'images/work-1-pop.png',
      paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
      paragraph2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
      language1: 'html',
      language2: 'css',
      language3: 'javaScript',
      language4: 'github',
      language5: 'ruby',
      language6: 'bootstrap',
      liveBtn: 'https://normainobary2021.github.io/',
      sourceBtn: 'https://github.com/normainobary2021/my-portfolio',
    },
  
    {
      id: '2',
      title: 'Tonic',
      close: '\u00D7',
      subheadText1: 'CANOPY',
      subheadText2: 'Back End Dev',
      subheadText3: '2015',
      image1: 'images/work3.svg',
      image2: 'images/work-1-pop.png',
      paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
      paragraph2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
      language1: 'html',
      language2: 'css',
      language3: 'javaScript',
      language4: 'github',
      language5: 'ruby',
      language6: 'bootstrap',
      liveBtn: 'https://normainobary2021.github.io/',
      sourceBtn: 'https://github.com/normainobary2021/my-portfolio',
    },
  
    {
      id: '3',
      title: 'Multi-Post Stories',
      close: '\u00D7',
      subheadText1: 'CANOPY',
      subheadText2: 'Back End Dev',
      subheadText3: '2015',
      image1: 'images/work4.svg',
      image2: 'images/work-1-pop.png',
      paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
      paragraph2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
      language1: 'html',
      language2: 'css',
      language3: 'javaScript',
      language4: 'github',
      language5: 'ruby',
      language6: 'bootstrap',
      liveBtn: 'https://normainobary2021.github.io/',
      sourceBtn: 'https://github.com/normainobary2021/my-portfolio',
    },
  ];
  
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hambuger.classList.remove('active');
  navMenu.classList.remove('active');
}));
