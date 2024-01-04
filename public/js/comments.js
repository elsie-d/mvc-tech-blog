
 const commentFormHandler = async (event) =>{
    event.preventDefault();
 
    const content = document.querySelector('#comment').value.trim()

    if (content) {
        const response = await fetch('/api/comments', {
          method: 'POST',
          body: JSON.stringify({ content }),
          headers: {
            'Content-Type': 'application/json',
          }, 
        });
    
        if (response.ok) {
          console.log('success')
          document.location.replace('/');
        } else {
          alert('Failed to add comment');
        }
  }
}
 
 
 
   document.querySelector('.new-comment-form')
     .addEventListener('submit', commentFormHandler)