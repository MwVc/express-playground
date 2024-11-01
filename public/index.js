async function getData() {
  try {
    const response = await fetch("http://localhost:8080/api/posts");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(`These are the posts that have been fetched`, data);
  } catch (error) {
    console.error("Error fetching posts: ", error);
  }
}

getData();
