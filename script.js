const menuBtn = document.querySelector('#menu-btn');
const navMenu = document.querySelector('.nav-item');

menuBtn.onclick = () => {
  menuBtn.classList.toggle('fa-times');
  navMenu.classList.toggle('active');
};

window.onscroll = () => {
  menuBtn.classList.remove('fa-times');
  navMenu.classList.remove('active');
};

// sample data for feature cards
const speakers = [
  {
    name: 'Qaiser Abbas',
    profession: 'Ignite your passion',
    description: 'Charismatic, inspiring, and dedicated to helping others reach their goals.',
    imageSrc: './images/qasair-1.jpeg',
    imageAlt: 'Qaiser Abbas',
  },
  {
    name: 'Tanzila Khan',
    profession: 'unleash your potential',
    description: 'Charismatic, inspiring, and dedicated to helping others reach their goals.',
    imageSrc: './images/tanzila-khan-1-1.jpeg',
    imageAlt: 'Tanzila Khan',
  },
  {
    name: 'Qasim Ali Shah',
    profession: 'Ignite your passion',
    description: 'Charismatic, inspiring, and dedicated to helping others reach their goals.',
    imageSrc: './images/Qasim_Ali_Shah.jpeg',
    imageAlt: 'Qasim Ali Shah',
  },
  {
    name: 'Dr. Javed Iqbal',
    profession: 'unleash your potential',
    description: 'Charismatic, inspiring, and dedicated to helping others reach their goals.',
    imageSrc: './images/Dr-javed-1.jpeg',
    imageAlt: 'Dr. javed iqbal',
  },
  {
    name: 'Muniba Mazari',
    profession: 'Ignite your passion',
    description: 'Charismatic, inspiring, and dedicated to helping others reach their goals.',
    imageSrc: './images/muneeba-mazari.jpeg',
    imageAlt: 'Muneeba mazari',
  },
  {
    name: 'Umair Jaliawala',
    profession: 'Ignite your passion',
    description: 'Charismatic, inspiring, and dedicated to helping others reach their goals.',
    imageSrc: './images/umair-1.jpeg',
    imageAlt: 'Umair Jaliawala',
  },
];

// create feature cards dynamically
const featureCardsContainer = document.querySelector('.feature-cards');

speakers.forEach((speaker) => {
  const featureCard = document.createElement('div');
  featureCard.classList.add('feature-card', 'flex-row', 'align-center');

  const featureThumbnail = document.createElement('div');
  featureThumbnail.classList.add('feature-thumbnail');
  const thumbnailImg = document.createElement('img');
  thumbnailImg.src = speaker.imageSrc;
  thumbnailImg.alt = speaker.imageAlt;
  featureThumbnail.appendChild(thumbnailImg);

  const featureCardContent = document.createElement('div');
  featureCardContent.classList.add('feature-card-content');
  const cardTitle = document.createElement('h3');
  cardTitle.innerText = speaker.name;
  const cardProfession = document.createElement('p');
  cardProfession.classList.add('span');
  const cardSpan = document.createElement('span');
  cardSpan.classList.add('underline-sm');
  cardProfession.innerText = speaker.profession;
  const cardDetails = document.createElement('p');
  cardDetails.innerText = speaker.description;
  featureCardContent.appendChild(cardTitle);
  featureCardContent.appendChild(cardProfession);
  featureCardContent.appendChild(cardSpan);
  featureCardContent.appendChild(cardDetails);

  featureCard.appendChild(featureThumbnail);
  featureCard.appendChild(featureCardContent);

  featureCardsContainer.appendChild(featureCard);
});

// Add event listener to "load more" button
const loadMoreButton = document.querySelector('.load-more-button');
loadMoreButton.onclick = () => {
  // Show the next three feature cards
  const hiddenFeatureCards = document.querySelectorAll('.feature-card');

  for (let i = 0; i < hiddenFeatureCards.length; i += 1) {
    hiddenFeatureCards[i].style.display = 'flex';
    // Hide "load more" button if all feature cards are shown
    loadMoreButton.style.display = 'none';
  }
};