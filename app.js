document.addEventListener('DOMContentLoaded', () => {
  const mainImg = document.getElementById('mainBgImg');
  if (mainImg) {
    mainImg.addEventListener('error', () => {
      mainImg.src = 'Sunlit Classroom with Teacher and Students.png';
    });
  }

  const logoImg = document.querySelector('.tct-logo');
  if (logoImg) {
    logoImg.addEventListener('error', () => {
      logoImg.src = 'TCT-removebg-preview.png';
    });
  }

  const mobSources = document.querySelectorAll('.bg-picture source');
  mobSources.forEach(source => {
    source.addEventListener('error', () => {
      source.srcset = 'Sunlit Classroom Lesson in Progress (2).png';
    });
  });
});
