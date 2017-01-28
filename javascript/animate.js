function animateColor(e) {
  if (e.style.animationName !== 'colorchange') {
    e.style.animationName = 'colorchange';
    e.style.animationDuration = '10s';
    e.style.animationTimingFunction = 'linear';
  }

  setTimeout(function() {
    e.style.animationName = '';
  }, 10000);
}

function animatePosition(e) {
  if (e.style.animationName !== 'positionchange') {
    e.style.animationName = 'positionchange';
    e.style.animationDuration = '10s';
    e.style.animationTimingFunction = 'linear';
  }

  setTimeout(function() {
    e.style.animationName = '';
  }, 10000);
}

function animateRotation(e) {
  if (e.style.animationName !== 'rotationchange') {
    e.style.animationName = 'rotationchange';
    e.style.animationDuration = '10s';
    e.style.animationTimingFunction = 'linear';
  }

  setTimeout(function() {
    e.style.animationName = '';
  }, 10000);
}
