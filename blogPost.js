
  function toggleForm() {
    const formContainer = document.getElementById('form-container');
    formContainer.style.display = formContainer.style.display === 'block' ? 'none' : 'block';
  } document.addEventListener('DOMContentLoaded', loadPosts);

  function addPost() {
    const name = document.getElementById('name').value;
    const userClass = document.getElementById('class').value;
    const Topic = document.getElementById('Topic').value;
    const experience = document.getElementById('experience').value;
    const imageInput = document.getElementById('image');

    if (!name || !userClass || !Topic || !experience) {
      alert('Please fill in all fields!');
      return;
    }

    const postContainer = document.getElementById('post-container');

    const post = {
      name,
      userClass,
      Topic,
      experience,
      image: null
    };

    if (imageInput.files.length > 0) {
      const imageFile = imageInput.files[0];
      const reader = new FileReader();
      reader.onload = function (e) {
        post.image = e.target.result;
        savePost(post);
        displayPost(post);
      };
      reader.readAsDataURL(imageFile);
    } else {
      savePost(post);
      displayPost(post);
    }

    // Clear inputs
    document.getElementById('name').value = '';
    document.getElementById('class').value = '';
    document.getElementById('Topic').value = '';
    document.getElementById('experience').value = '';
    document.getElementById('image').value = '';

    toggleForm();
  }

  function savePost(post) {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));
  }

  function loadPosts() {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.forEach(post => displayPost(post));
  }

  function displayPost(post) {
    const postContainer = document.getElementById('post-container');

    const postDiv = document.createElement('div');
    postDiv.classList.add('post');

    const postContent = `
      <h3>${post.name} (Class: ${post.userClass}, topic: ${post.Topic})</h3>
      <p>${post.experience}</p>
    `;

    postDiv.innerHTML = postContent;

    if (post.image) {
      const img = document.createElement('img');
      img.src = post.image;
      postDiv.appendChild(img);
    }

    postContainer.appendChild(postDiv);
  }

  function toggleForm() {
    const formContainer = document.getElementById('form-container');
    formContainer.style.display = formContainer.style.display === 'block' ? 'none' : 'block';
  }