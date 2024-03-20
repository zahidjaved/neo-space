      // Get the element to be animated
      const animateElement = document.getElementById('animateElement');
      const animateElementt = document.getElementById('animateElementt');
          
      // Define the Intersection Observer callback
      const callback = (entries, observer) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  // Element is in the viewport, start animation
                  animateElement.style.animation = 'c-dashed-line-path 3s ease-in-out forwards alternate';
                  animateElementt.style.animation = 'c-dashed-line-path 3s ease-in-out forwards alternate';
              }
          });
      };
      
      // Create an Intersection Observer
      const observer = new IntersectionObserver(callback);
      
      // Observe the section you want to trigger the animation
      const targetSection = document.getElementById('section2'); // Change this to your desired section
      if (targetSection) {
          observer.observe(targetSection);
      }

      